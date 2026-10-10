/* ============================================================
   MiniMath — a tiny, dependency-free math typesetter.
   Renders a LaTeX-like subset into semantic HTML + CSS so the
   site works fully offline with no external math library.
   Supported: \frac{}{} \sqrt{} \sum_{}^{} \bar{} _{} ^{}
   Greek letters, common operators, \text{}, \left( \right),
   \approx \le \ge \ne \pm \times \div \cdot \infty \rightarrow
   ============================================================ */
(function (global) {
  'use strict';

  var SYMBOLS = {
    sigma: 'σ', Sigma: 'Σ', beta: 'β', Beta: 'Β', mu: 'μ', alpha: 'α',
    rho: 'ρ', tau: 'τ', theta: 'θ', Delta: 'Δ', delta: 'δ', lambda: 'λ',
    pi: 'π', omega: 'ω', gamma: 'γ', phi: 'φ', epsilon: 'ε',
    times: '×', div: '÷', cdot: '·', pm: '±', mp: '∓',
    approx: '≈', ne: '≠', le: '≤', ge: '≥', lt: '<', gt: '>',
    infty: '∞', rightarrow: '→', leftarrow: '←', in: '∈',
    sum: '∑', prod: '∏', int: '∫', sqrt: '√'
  };

  function esc(ch) {
    return ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch;
  }

  function Parser(src) { this.s = src; this.i = 0; }

  Parser.prototype.peek = function () { return this.s[this.i]; };
  Parser.prototype.next = function () { return this.s[this.i++]; };
  Parser.prototype.eof = function () { return this.i >= this.s.length; };

  Parser.prototype.skipSpace = function () {
    while (!this.eof() && this.s[this.i] === ' ') this.i++;
  };

  Parser.prototype.readGroup = function () {
    this.skipSpace();
    if (this.peek() === '{') {
      this.next();
      var out = this.parse(true);
      if (this.peek() === '}') this.next();
      return out;
    }
    // single token
    if (this.peek() === '\\') return this.parseCommand();
    var c = this.next();
    return this.atom(c);
  };

  Parser.prototype.atom = function (c) {
    if (/[a-zA-Z]/.test(c)) return '<i class="mv">' + esc(c) + '</i>';
    if (/[0-9.]/.test(c)) return '<span class="mn">' + esc(c) + '</span>';
    if (c === '-') return '<span class="mo">−</span>';
    if (c === '+') return '<span class="mo">+</span>';
    if (c === '=') return '<span class="mo">=</span>';
    if (c === '(' || c === '[') return '<span class="mopen">' + esc(c) + '</span>';
    if (c === ')' || c === ']') return '<span class="mclose">' + esc(c) + '</span>';
    if (c === ',') return '<span class="mpunct">,</span>';
    if (c === '%') return '<span class="mn">%</span>';
    return '<span class="mo">' + esc(c) + '</span>';
  };

  Parser.prototype.parseCommand = function () {
    this.next(); // consume backslash
    var name = '';
    while (!this.eof() && /[a-zA-Z]/.test(this.peek())) name += this.next();

    if (name === 'frac') {
      var num = this.readGroup(), den = this.readGroup();
      return '<span class="mfrac"><span class="mnum">' + num + '</span><span class="mden">' + den + '</span></span>';
    }
    if (name === 'sqrt') {
      var body = this.readGroup();
      return '<span class="msqrt"><span class="msqrt-sym">√</span><span class="msqrt-body">' + body + '</span></span>';
    }
    if (name === 'bar') {
      var b = this.readGroup();
      return '<span class="mbar">' + b + '</span>';
    }
    if (name === 'text' || name === 'mathrm' || name === 'textbf') {
      var t = this.readGroupRaw();
      return '<span class="mtxt">' + esc(t) + '</span>';
    }
    if (name === 'left' || name === 'right') {
      var d = this.next();
      if (d === '.') return '';
      return '<span class="' + (name === 'left' ? 'mopen' : 'mclose') + ' mbig">' + esc(d) + '</span>';
    }
    if (name === 'sum') {
      // optional limits _{} ^{}
      var sub = '', sup = '';
      this.skipSpace();
      while (!this.eof() && (this.peek() === '_' || this.peek() === '^')) {
        var kind = this.next();
        var g = this.readGroup();
        if (kind === '_') sub = g; else sup = g;
        this.skipSpace();
      }
      return '<span class="msum">' +
        '<span class="msum-sup">' + sup + '</span>' +
        '<span class="msum-sym">∑</span>' +
        '<span class="msum-sub">' + sub + '</span></span>';
    }
    if (SYMBOLS[name] !== undefined) {
      var sym = SYMBOLS[name];
      if (/^[a-zA-Z]$/.test(sym)) return '<i class="mv">' + sym + '</i>';
      return '<span class="mo">' + sym + '</span>';
    }
    // unknown command: show name as text
    return '<span class="mtxt">' + esc(name) + '</span>';
  };

  Parser.prototype.readGroupRaw = function () {
    this.skipSpace();
    if (this.peek() !== '{') { var c = this.next(); return c || ''; }
    this.next();
    var depth = 1, out = '';
    while (!this.eof()) {
      var ch = this.next();
      if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) break; }
      out += ch;
    }
    return out;
  };

  Parser.prototype.parse = function (inner) {
    var out = '';
    while (!this.eof()) {
      var c = this.peek();
      if (c === '}') { if (inner) break; this.next(); continue; }
      if (c === ' ') { this.next(); out += '<span class="msp"></span>'; continue; }
      if (c === '\\') { out += this.parseCommand(); continue; }
      if (c === '_') { this.next(); out += '<sub class="msub">' + this.readGroup() + '</sub>'; continue; }
      if (c === '^') { this.next(); out += '<sup class="msup">' + this.readGroup() + '</sup>'; continue; }
      if (c === '{') { this.next(); out += this.parse(true); if (this.peek() === '}') this.next(); continue; }
      this.next();
      out += this.atom(c);
    }
    return out;
  };

  function render(tex) {
    if (tex === undefined || tex === null || tex === '') return '';
    var p = new Parser(String(tex));
    return '<span class="mmath" dir="ltr">' + p.parse(false) + '</span>';
  }

  // Replace inline $...$ occurrences inside plain text (leaves the rest intact)
  function renderInline(text) {
    return String(text).replace(/\$([^$]+)\$/g, function (m, g) { return render(g); });
  }

  global.MiniMath = { render: render, renderInline: renderInline };
})(window);
