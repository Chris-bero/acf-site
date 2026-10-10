/* ============================================================
   APP — router, renderers, interactions, progress, search.
   Data-driven: adding a lesson to content*.js is enough.
   ============================================================ */
(function () {
  'use strict';
  var I = window.I18N, M = window.MiniMath, C = window.Charts;
  var COURSE = window.COURSE, GLOSSARY = window.GLOSSARY;

  /* ---------------- storage ---------------- */
  var LS_KEY = 'acf_state_v1';
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStore() { try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* private mode */ } }
  var store = Object.assign({ lang: 'en', completed: {}, bookmarks: {} }, loadStore());
  if (store.sideOpen === undefined && store.tocOpen === false) store.sideOpen = false; // migrate old preference

  /* ---------------- session (not persisted) ---------------- */
  var session = { quiz: {}, revealed: {}, secLang: {}, flip: {}, flagsOpen: {} };

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  // prose: convert <x> markers into subscripts, keep line breaks
  function rich(pair) {
    var s = esc(I.L(pair));
    s = s.replace(/&lt;([^&]*?)&gt;/g, '<sub>$1</sub>');
    return s;
  }
  function richOther(pair) {
    var s = esc(I.other(pair));
    s = s.replace(/&lt;([^&]*?)&gt;/g, '<sub>$1</sub>');
    return s;
  }
  function t(k) { return I.t(k); }
  function lessons() { return COURSE.lessons; }
  function lessonById(id) { return lessons().filter(function (l) { return l.id === id; })[0]; }
  function moduleById(id) { return COURSE.modules.filter(function (m) { return m.id === id; })[0]; }
  function lessonIndex(id) { return lessons().map(function (l) { return l.id; }).indexOf(id); }

  var FMT = {
    pct: function (v) { return (Math.round(v * 100) / 100) + '%'; },
    n2: function (v) { return v.toFixed(2); },
    pct0: function (v) { return v + '%'; },
    k: function (v) { return String(v); },
    m: function (v) { return (v / 1e6) + 'm'; },
    num: function (v) { return String(v); }
  };
  function resolveDeep(o) {
    if (o === null || o === undefined) return o;
    if (Array.isArray(o)) return o.map(resolveDeep);
    if (typeof o === 'object') {
      if ('en' in o || 'ar' in o) return I.L(o);
      var out = {};
      for (var k in o) out[k] = resolveDeep(o[k]);
      return out;
    }
    return o;
  }
  function applyFmt(cfg) {
    if (cfg.y && typeof cfg.y.fmt === 'string') cfg.y.fmt = FMT[cfg.y.fmt] || FMT.num;
    if (cfg.y2 && typeof cfg.y2.fmt === 'string') cfg.y2.fmt = FMT[cfg.y2.fmt] || FMT.num;
    if (cfg.x && typeof cfg.x.fmt === 'string') cfg.x.fmt = FMT[cfg.x.fmt] || FMT.num;
    if (typeof cfg.fmt === 'string') cfg.fmt = FMT[cfg.fmt] || FMT.num;
    return cfg;
  }

  var chartJobs = [];
  function queueChart(kind, hostId, cfg) { chartJobs.push({ kind: kind, hostId: hostId, cfg: cfg }); }
  function runCharts() {
    chartJobs.forEach(function (j) {
      var host = document.getElementById(j.hostId);
      if (!host) return;
      var cfg = applyFmt(resolveDeep(j.cfg));
      if (j.kind === 'bar') C.barChart(host, cfg);
      else if (j.kind === 'line') C.lineChart(host, cfg);
      else if (j.kind === 'stacked') C.stackedBars(host, cfg);
      else if (j.kind === 'donut') C.donut(host, cfg);
    });
    chartJobs = [];
  }

  /* ---------------- progress ---------------- */
  function isDone(id) { return !!store.completed[id]; }
  function doneCount() { return lessons().filter(function (l) { return isDone(l.id); }).length; }
  function progressPct() { return Math.round(doneCount() / lessons().length * 100); }

  /* ---------------- section wrapper: one language visible at a time -------
     Each section remembers its own display language (session.secLang).
     The header button SWAPS the section between English and Arabic in place
     (the other language is hidden, not stacked underneath).              */
  function sectionShell(secId, titleKey, cls, innerHTML, secLang, opts) {
    opts = opts || {};
    var siteLang = I.lang();
    var labelKey = secLang === 'en' ? 'translateSection' : 'showEnglish';
    var dir = secLang === 'ar' ? 'rtl' : 'ltr';
    return '<section class="block ' + cls + (secLang !== siteLang ? ' lang-flipped' : '') + '" id="' + secId + '" data-sec="' + secId + '">' +
      '<div class="block-head">' +
        '<h2 class="block-title" dir="' + dir + '">' + (opts.icon || '') + I.tIn(secLang, titleKey) + (opts.titleExtra || '') + '</h2>' +
        '<button class="btn btn-ghost btn-trans" data-seclang="' + secId + '" aria-label="' + esc(I.tIn(siteLang, labelKey)) + '">' +
          '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg> ' +
          '<span>' + esc(I.tIn(siteLang, labelKey)) + '</span>' +
          '<span class="lang-badge" dir="' + (secLang === 'ar' ? 'rtl' : 'ltr') + '">' + (secLang === 'ar' ? 'عربي' : 'EN') + '</span></button>' +
      '</div>' +
      '<div class="block-body" dir="' + dir + '" lang="' + secLang + '">' + innerHTML + '</div>' +
      '</section>';
  }

  /* ---------------- block renderers (return HTML for CURRENT lang) ----- */
  function renderObjectives(b) {
    return '<ol class="obj-list">' + b.items.map(function (it) { return '<li>' + rich(it) + '</li>'; }).join('') + '</ol>';
  }
  function renderPrereq(b) {
    return '<div class="prereq-grid">' + b.items.map(function (p) {
      return '<article class="card prereq">' +
        '<h3>' + rich(p.term) + (p.link ? ' <a class="chip-link" href="#/lesson/' + p.link + '">↗</a>' : '') + '</h3>' +
        '<p class="muted"><strong>' + t('definitionWord') + ':</strong> ' + rich(p.def) + '</p>' +
        '<p class="muted"><strong>' + t('whyMatters') + ':</strong> ' + rich(p.why) + '</p>' +
        '<p class="muted"><strong>' + t('exampleWord') + ':</strong> ' + rich(p.example) + '</p>' +
        '</article>';
    }).join('') + '</div>';
  }
  function renderBig(b) {
    var h = b.paras.map(function (p) { return '<p>' + rich(p) + '</p>'; }).join('');
    if (b.analogy) h += '<div class="analogy"><h3>' + t('analogy') + '</h3><p>' + rich(b.analogy) + '</p>' +
      (b.analogyLimit ? '<p class="analogy-limit"><strong>' + t('analogyWarning') + ':</strong> ' + rich(b.analogyLimit) + '</p>' : '') + '</div>';
    return h;
  }
  function renderAcademic(b) {
    var h = b.paras.map(function (p) { return '<p>' + rich(p) + '</p>'; }).join('');
    if (b.defs && b.defs.length) h += '<div class="defs">' + b.defs.map(function (d) {
      return '<div class="def"><span class="def-term">' + rich(d.term) + '</span><span class="def-def">' + rich(d.def) + '</span></div>';
    }).join('') + '</div>';
    if (b.bullets && b.bullets.length) h += '<ul class="ticks">' + b.bullets.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>';
    return h;
  }
  function renderSimple(b) {
    var h = b.paras.map(function (p) { return '<p>' + rich(p) + '</p>'; }).join('');
    if (b.steps && b.steps.length) h += '<ol class="simple-steps">' + b.steps.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol>';
    if (b.recap) h += '<p class="recap"><strong>' + t('recap') + ':</strong> ' + rich(b.recap) + '</p>';
    return h;
  }
  function renderFormula(b) {
    var tagLabel = b.tag === 'course' ? t('courseContent') : t('supplementary');
    var h = '<div class="formula-card">' +
      '<div class="formula-top"><span class="formula-name">' + rich(b.name) + '</span><span class="tag ' + (b.tag || 'course') + '">' + tagLabel + '</span></div>' +
      '<div class="formula-tex">' + M.render(b.tex) + '</div>' +
      '<details class="fvars"><summary>' + t('variables') + '</summary><ul>' +
        b.vars.map(function (v) { return '<li>' + M.render(v.sym) + ' — ' + rich({ en: v.en, ar: v.ar }) + '</li>'; }).join('') +
      '</ul></details>' +
      '<dl class="fmeta">' +
        fm(t('purpose'), b.purpose) + fm(t('assumptions'), b.assumptions) + fm(t('whenToUse'), b.when) +
        fm(t('infoNeeded'), b.inputs) + fm(t('cautions'), b.cautions) + fm(t('illustration'), b.illustration) +
        fm(t('sensitivity'), b.sensitivity) + fm(t('meaning'), b.meaning) +
      '</dl></div>';
    return h;
    function fm(k, v) { return v ? '<div class="fmeta-row"><dt>' + k + '</dt><dd>' + rich(v) + '</dd></div>' : ''; }
  }
  var STEP_KIND = { understand: 'step-understand', given: 'step-given', unknown: 'step-unknown', method: 'step-method', sub: 'step-sub', calc: 'step-calc', interpret: 'step-interpret', verify: 'step-verify' };
  var STEP_LABEL = { understand: 'step-understand-l', given: 'given', unknown: 'unknown', method: 'method', sub: 'step-sub-l', calc: 'step-calc-l', interpret: 'interpret', verify: 'verify' };
  function stepTitle(kind) {
    var map = {
      understand: { en: 'Understand the problem', ar: 'افهم المسألة' },
      given: { en: 'Identify the given information', ar: 'حدّد المعطيات' },
      unknown: { en: 'Identify the unknown', ar: 'حدّد المطلوب' },
      method: { en: 'Select the appropriate method', ar: 'اختر الطريقة المناسبة' },
      sub: { en: 'Substitute the values', ar: 'عوّض القيم' },
      calc: { en: 'Calculate', ar: 'احسب' },
      interpret: { en: 'Interpret the result', ar: 'فسّر النتيجة' },
      verify: { en: 'Verify', ar: 'تحقق' }
    };
    return map[kind] || { en: kind, ar: kind };
  }
  function renderExample(b, lesson, bi) {
    var key = lesson.id + ':' + bi;
    var rev = session.revealed[key] === undefined ? 1 : session.revealed[key];
    var h = '<div class="example"><div class="example-title">' + rich(b.title) + '</div>' +
      '<p class="example-ctx">' + rich(b.context) + '</p>' +
      '<p class="example-src">' + t('sourceNote') + ': ' + rich(b.source) + '</p>' +
      '<ol class="steps">';
    b.steps.forEach(function (s, i) {
      var visible = i < rev;
      h += '<li class="step ' + (STEP_KIND[s.kind] || '') + (visible ? '' : ' hidden-step') + '" ' + (visible ? '' : 'hidden') + '>' +
        '<span class="step-no">' + t('step') + ' ' + (i + 1) + '</span>' +
        '<span class="step-kind">' + rich(stepTitle(s.kind)) + '</span>' +
        '<div class="step-body">' + rich(s.body) +
        (s.math && s.math.length ? '<div class="step-math">' + s.math.map(function (mx) { return M.render(mx); }).join('') + '</div>' : '') +
        '</div></li>';
    });
    h += '</ol><div class="example-controls">';
    if (rev < b.steps.length) h += '<button class="btn btn-primary" data-reveal="' + key + '" data-total="' + b.steps.length + '">' + t('revealNext') + '</button>';
    if (rev < b.steps.length) h += '<button class="btn btn-ghost" data-revealall="' + key + '" data-total="' + b.steps.length + '">' + t('showAllSteps') + '</button>';
    if (rev > 1) h += '<button class="btn btn-ghost" data-restart="' + key + '">' + t('resetSteps') + '</button>';
    h += '</div></div>';
    return h;
  }
  function renderVisual(b, lesson, bi) {
    var hostId = 'chart-' + lesson.id + '-' + bi;
    var h = '';
    if (b.kind === 'table') {
      h += tableHTML(b.table);
    } else if (b.kind === 'timeline') {
      var d = b.data;
      h += '<div class="timeline" dir="ltr"><div class="tl-node"><span class="tl-dot"></span><span class="tl-lab">' + rich(d.p0) + '</span><span class="tl-sub">t−1</span></div>' +
        '<div class="tl-arrow"></div>' +
        '<div class="tl-node"><span class="tl-dot cash"></span><span class="tl-lab">' + rich(d.c) + '</span><span class="tl-sub">t</span></div>' +
        '<div class="tl-arrow"></div>' +
        '<div class="tl-node"><span class="tl-dot"></span><span class="tl-lab">' + rich(d.p1) + '</span><span class="tl-sub">t</span></div>' +
        '<div class="tl-result">' + rich(d.r) + '</div></div>';
    } else {
      h += '<div class="chart-host" id="' + hostId + '"></div>';
      queueChart(b.kind, hostId, b.cfg);
    }
    h += '<p class="chart-caption">' + rich(b.caption) + (b.kind !== 'table' && b.kind !== 'timeline' ? ' <span class="muted">· ' + t('chartNote') + '</span>' : '') + '</p>';
    return h;
  }
  function tableHTML(tb) {
    var h = '<div class="table-wrap"><table class="data"><thead><tr>' + tb.head.map(function (hd) { return '<th>' + rich(hd) + '</th>'; }).join('') + '</tr></thead><tbody>';
    tb.rows.forEach(function (r) {
      h += '<tr>' + r.map(function (cell) { return '<td>' + (typeof cell === 'object' ? rich(cell) : esc(cell)) + '</td>'; }).join('') + '</tr>';
    });
    return h + '</tbody></table></div>';
  }
  function renderMistakes(b) {
    return '<div class="mistakes">' + b.items.map(function (m, i) {
      return '<details class="mistake" ' + (i === 0 ? 'open' : '') + '><summary><span class="mx">✕</span> ' + rich(m.wrong) + '</summary>' +
        '<div class="mistake-body">' +
        '<p><strong>' + t('whyWrong') + ':</strong> ' + rich(m.why) + '</p>' +
        '<p class="good"><strong>' + t('correctApproach') + ':</strong> ' + rich(m.correct) + '</p>' +
        (m.illus ? '<p class="muted illus">' + rich(m.illus) + '</p>' : '') +
        '</div></details>';
    }).join('') + '</div>';
  }
  function renderQuiz(b, lesson, bi) {
    var h = '<div class="quiz">';
    b.items.forEach(function (q, qi) {
      var key = lesson.id + ':' + bi + ':' + qi;
      var st = session.quiz[key] || (session.quiz[key] = { sel: null, val: '', checked: false, ok: false });
      h += '<div class="q" data-qkey="' + key + '">';
      h += '<p class="q-text"><span class="q-no">' + t('qOf') + ' ' + (qi + 1) + '</span> ' + rich(q.q) + '</p>';
      if (q.type === 'mcq') {
        h += '<div class="opts" role="radiogroup">' + q.options.map(function (o, oi) {
          var checked = st.sel === oi;
          var cls = 'opt' + (st.checked ? (oi === q.answer ? ' opt-right' : (checked ? ' opt-wrong' : '')) : '');
          return '<label class="' + cls + '"><input type="radio" name="' + key + '" value="' + oi + '" ' + (checked ? 'checked' : '') + (st.checked ? ' disabled' : '') + '><span>' + rich(o) + '</span></label>';
        }).join('') + '</div>';
      } else if (q.type === 'tf') {
        h += '<div class="opts" role="radiogroup">' + [true, false].map(function (v) {
          var checked = st.sel === v;
          var cls = 'opt' + (st.checked ? (v === q.answer ? ' opt-right' : (checked ? ' opt-wrong' : '')) : '');
          return '<label class="' + cls + '"><input type="radio" name="' + key + '" value="' + v + '" ' + (checked ? 'checked' : '') + (st.checked ? ' disabled' : '') + '><span>' + (v ? { en: 'True', ar: 'صواب' }[I.lang()] : { en: 'False', ar: 'خطأ' }[I.lang()]) + '</span></label>';
        }).join('') + '</div>';
      } else {
        h += '<div class="numrow"><input class="num-input" type="number" step="any" data-qkey="' + key + '" value="' + esc(st.val) + '" ' + (st.checked ? 'disabled' : '') + ' aria-label="' + t('answerInput') + '"><span class="unit">' + esc(q.unit || '') + '</span></div>';
      }
      h += '<div class="q-actions">' +
        (st.checked ? '<button class="btn btn-ghost" data-retry="' + key + '">' + t('tryAgain') + '</button>'
                    : '<button class="btn btn-primary" data-check="' + key + '">' + t('checkAnswer') + '</button>') +
        '</div>';
      if (st.checked) {
        h += '<div class="q-feedback ' + (st.ok ? 'ok' : 'no') + '"><strong>' + (st.ok ? t('correct') : t('incorrect')) + '.</strong> ' + rich(q.explain) + '</div>';
      }
      h += '</div>';
    });
    return h + '</div>';
  }
  function renderFlash(b, lesson, bi) {
    return '<div class="flash-grid">' + b.items.map(function (f, i) {
      var key = lesson.id + ':' + bi + ':' + i;
      var flipped = !!session.flip[key];
      return '<button class="flash' + (flipped ? ' flipped' : '') + '" data-flip="' + key + '" aria-pressed="' + flipped + '">' +
        '<span class="flash-face flash-front">' + rich(f.front) + '<em>' + t('clickFlip') + '</em></span>' +
        '<span class="flash-face flash-back">' + rich(f.back) + '</span></button>';
    }).join('') + '</div>';
  }
  function renderSummary(b) {
    return '<div class="summary"><ul class="ticks">' + b.points.map(function (p) { return '<li>' + rich(p) + '</li>'; }).join('') + '</ul>' +
      '<h3>' + t('youShouldExplain') + ':</h3><ul class="can">' + b.canExplain.map(function (c) { return '<li>' + rich(c) + '</li>'; }).join('') + '</ul></div>';
  }
  function renderFlags(b, lesson) {
    var key = lesson.id + ':flags';
    var open = !!session.flagsOpen[key];
    return '<details class="flags" ' + (open ? 'open' : '') + ' data-flagskey="' + key + '"><summary>⚑ ' + t('reviewFlags') + ' (' + b.items.length + ')</summary><ul>' +
      b.items.map(function (f) { return '<li>' + rich(f) + '</li>'; }).join('') + '</ul></details>';
  }

  function renderBlockInner(b, lesson, bi) {
    switch (b.type) {
      case 'objectives': return renderObjectives(b);
      case 'prereq': return renderPrereq(b);
      case 'bigpicture': return renderBig(b);
      case 'academic': return renderAcademic(b);
      case 'simple': return renderSimple(b);
      case 'formula': return renderFormula(b);
      case 'example': return renderExample(b, lesson, bi);
      case 'visual': return renderVisual(b, lesson, bi);
      case 'mistakes': return renderMistakes(b);
      case 'quiz': return renderQuiz(b, lesson, bi);
      case 'flash': return renderFlash(b, lesson, bi);
      case 'summary': return renderSummary(b);
      case 'flags': return renderFlags(b, lesson);
      default: return '';
    }
  }
  var BLOCK_TITLE = {
    objectives: 'objectives', prereq: 'prerequisites', bigpicture: 'bigpicture', academic: 'academic',
    simple: 'simple', formula: 'formulas', example: 'examples', visual: 'visual', mistakes: 'mistakes',
    quiz: 'quiz', flash: 'flashcards', summary: 'summary', flags: 'reviewFlags'
  };
  var BLOCK_CLS = {
    objectives: 'b-objectives', prereq: 'b-prereq', bigpicture: 'b-big', academic: 'b-academic',
    simple: 'b-simple', formula: 'b-formula', example: 'b-example', visual: 'b-visual', mistakes: 'b-mistakes',
    quiz: 'b-quiz', flash: 'b-flash', summary: 'b-summary', flags: 'b-flags'
  };

  // Render one block as a full section in ITS OWN language (in-place swap).
  function renderBlock(b, lesson, bi) {
    var secId = lesson.id + '-s' + bi;
    var secLang = session.secLang[secId] || I.lang();
    var siteLang = I.lang();
    I.setLang(secLang);
    var primary = renderBlockInner(b, lesson, bi);
    I.setLang(siteLang);
    return sectionShell(secId, BLOCK_TITLE[b.type], BLOCK_CLS[b.type], primary, secLang, {});
  }

  /* ---------------- pages ---------------- */
  function headerHTML() {
    var pct = progressPct();
    return '<header class="topbar">' +
      '<div class="topbar-in">' +
        '<a class="brand" href="#/">' +
          '<span class="brand-mark" aria-hidden="true">∑</span>' +
          '<span class="brand-txt"><strong>' + t('courseTitle') + '</strong><small>' + t('courseSub') + '</small></span>' +
        '</a>' +
        '<nav class="topnav" aria-label="primary">' +
          '<a href="#/" class="' + (route().name === 'home' ? 'active' : '') + '">' + t('nav_dashboard') + '</a>' +
          '<a href="#/glossary" class="' + (route().name === 'glossary' ? 'active' : '') + '">' + t('nav_glossary') + '</a>' +
        '</nav>' +
        '<div class="refnav" role="navigation" aria-label="reference">' +
          refLink('formulas', '∑', t('refFormulas')) +
          refLink('symbols', 'αβ', t('refSymbols')) +
          refLink('defs', '≡', t('refDefs')) +
        '</div>' +
        '<div class="top-actions">' +
          '<button class="btn btn-ghost icon-btn" id="btn-search" aria-label="' + t('nav_search') + '" title="' + t('nav_search') + '">' +
            '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/></svg></button>' +
          '<button class="btn btn-ghost icon-btn" data-act="identity" aria-label="' + t('settingsTitle') + '" title="' + t('settingsTitle') + '">' +
            '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-3.3 0-8 1.7-8 5v3h16v-3c0-3.3-4.7-5-8-5z"/></svg></button>' +
          '<div class="langswitch" role="group" aria-label="' + t('langLabel') + '">' +
            '<button class="' + (I.lang() === 'en' ? 'on' : '') + '" data-lang="en">EN</button>' +
            '<button class="' + (I.lang() === 'ar' ? 'on' : '') + '" data-lang="ar">عربي</button>' +
          '</div>' +
          '<div class="prog-ring" title="' + pct + '% ' + t('lessonsComplete') + '" aria-label="' + pct + '% ' + t('lessonsComplete') + '">' +
            '<svg viewBox="0 0 36 36"><path class="ring-bg" d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 1 1 0-31"/>' +
            '<path class="ring-fg" stroke-dasharray="' + (pct * 0.974) + ',100" d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 1 1 0-31"/>' +
            '<text x="18" y="21.5" class="ring-txt">' + pct + '</text></svg></div>' +
        '</div>' +
      '</div></header>';
  }

  function dashboardHTML() {
    var firstUndone = lessons().filter(function (l) { return !isDone(l.id); })[0];
    var last = store.lastLesson ? lessonById(store.lastLesson) : null;
    var cont = last || firstUndone || lessons()[0];
    var h = '<div class="hero"><div class="hero-in">' +
      '<p class="eyebrow">' + t('tagline') + '</p>' +
      '<h1>' + t('courseTitle') + '</h1>' +
      '<p class="hero-sub">' + rich({ en: 'An interactive, bilingual companion to your two uploaded lectures: <i>Risk & Return / CAPM</i> and <i>Leverage & Capital Structure</i>. Every formula, table and worked example below is taken from those slides and rebuilt as a guided learning path.', ar: 'مرافق تفاعلي ثنائي اللغة لمحاضرتيك المرفوعتين: <i>العائد والمخاطر / CAPM</i> و<i>الرافعة وهيكل رأس المال</i>. كل معادلة وجدول ومثال محلول أدناه مأخوذ من تلك الشرائح وأُعيد بناؤه كمسار تعلم موجّه.' }) + '</p>' +
      '<div class="hero-cta">' +
        '<a class="btn btn-primary btn-lg" href="#/lesson/' + cont.id + '">' + (doneCount() ? t('resume') : t('startCourse')) + ': ' + rich(cont.title) + '</a>' +
        '<a class="btn btn-ghost btn-lg" href="#/glossary">' + t('nav_glossary') + '</a>' +
      '</div>' +
      '<div class="hero-prog"><div class="prog-bar"><span style="width:' + progressPct() + '%"></span></div>' +
        '<span class="prog-txt">' + doneCount() + ' / ' + lessons().length + ' ' + t('lessonsComplete') + ' (' + progressPct() + '%)</span></div>' +
      '</div></div>';

    h += '<main class="wrap"><section class="dash-grid">';
    COURSE.modules.forEach(function (m) {
      h += '<section class="module"><div class="module-head"><h2>' + rich(m.title) + '</h2><p class="muted">' + rich(m.source) + '</p></div><div class="lesson-cards">';
      lessons().filter(function (l) { return l.module === m.id; }).forEach(function (l) {
        var idx = lessonIndex(l.id);
        h += '<a class="lesson-card' + (isDone(l.id) ? ' done' : '') + '" href="#/lesson/' + l.id + '">' +
          '<span class="lc-top"><span class="lc-no">' + t('lesson') + ' ' + (idx + 1) + '</span>' +
          (store.bookmarks[l.id] ? '<span class="lc-bm" title="' + t('bookmarked') + '">★</span>' : '') +
          (isDone(l.id) ? '<span class="lc-done" title="' + t('completed') + '">✓</span>' : '') + '</span>' +
          '<h3>' + rich(l.title) + '</h3>' +
          '<p class="muted">' + rich(l.subtitle) + '</p>' +
          '<span class="lc-meta">' + l.minutes + ' ' + t('minutes') + ' · ' + rich(l.source) + '</span>' +
          '</a>';
      });
      h += '</div></section>';
    });
    h += '</section>';

    h += '<section class="tools-row"><h2>' + t('tools') + '</h2><div class="tools">' +
      tool('◎', t('toolGlossary'), '#/glossary') +
      tool('⌕', t('toolSearch'), null, 'data-act="search"') +
      tool('▤', t('toolProgress'), null, '') +
      tool('⇄', t('toolFlash'), '#/lesson/l1') +
      '</div>' +
      '<div class="about-trans"><h3>' + t('aboutTranslations') + '</h3><p>' + t('aboutTranslationsBody') + '</p>' +
      '<p class="muted small">' + t('progressLocal') + ' <button class="linklike" data-act="reset">' + t('resetProgress') + '</button></p></div>' +
      '</section></main>';
    return h;
    function tool(ic, label, href, extra) {
      var inner = '<span class="tool-ic">' + ic + '</span><span>' + label + '</span>';
      return href ? '<a class="tool" href="' + href + '">' + inner + '</a>' : '<button class="tool" ' + (extra || '') + '>' + inner + '</button>';
    }
  }

  function lessonHTML(id) {
    var l = lessonById(id);
    if (!l) return '<main class="wrap"><p>' + t('noResults') + '</p></main>';
    store.lastLesson = id; saveStore();
    var idx = lessonIndex(id);
    var prev = lessons()[idx - 1], next = lessons()[idx + 1];
    var m = moduleById(l.module);

    var h = '<div class="lesson-hero"><div class="wrap">' +
      '<p class="crumb"><a href="#/">' + t('nav_dashboard') + '</a> › ' + rich(m.title) + '</p>' +
      '<h1>' + rich(l.title) + '</h1>' +
      '<p class="lesson-sub">' + rich(l.subtitle) + '</p>' +
      '<div class="lesson-meta">' +
        '<span class="chip">' + t('sourceNote') + ': ' + rich(l.source) + '</span>' +
        '<span class="chip">' + l.minutes + ' ' + t('minutes') + '</span>' +
        (isDone(id) ? '<span class="chip ok">' + t('completed') + ' ✓</span>' : '') +
        '<button class="chip btn-chip" data-bm="' + id + '" aria-pressed="' + (!!store.bookmarks[id]) + '">' + (store.bookmarks[id] ? '★ ' + t('bookmarked') : '☆ ' + t('bookmark')) + '</button>' +
        '<button class="chip btn-chip" data-complete="' + id + '">' + (isDone(id) ? '✓ ' + t('completed') : t('markComplete')) + '</button>' +
        '<button class="chip btn-chip" data-act="print">' + t('printFriendly') + '</button>' +
      '</div></div></div>';

    var sideOpen = store.sideOpen !== false;
    h += '<div class="wrap lesson-layout' + (sideOpen ? '' : ' no-side') + '">' +
      (sideOpen ?
        '<aside class="lesson-side">' +
        '<nav class="side-nav" aria-label="' + t('onThisPage') + '">' +
        '<div class="side-head"><h2>' + t('onThisPage') + '</h2>' +
        '<button class="side-toggle" data-sidecollapse aria-expanded="true" aria-label="' + t('collapseSide') + '" title="' + t('collapseSide') + '">' +
          '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M15.4 16.6 10.8 12l4.6-4.6L14 6l-6 6 6 6z"/></svg>' +
        '</button></div>' +
        '<ol>' :
        '<button class="side-fab" data-sideopen aria-expanded="false" aria-label="' + t('showSide') + '" title="' + t('showSide') + '">' +
          '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path fill="currentColor" d="M3 5h18v3H3zm0 5.5h11v3H3zm0 5.5h18v3H3z"/></svg>' +
        '</button><aside class="lesson-side" hidden>' +
        '<nav class="side-nav" aria-label="' + t('onThisPage') + '"><div class="side-head"><h2>' + t('onThisPage') + '</h2></div><ol>');
    l.blocks.forEach(function (b, bi) {
      h += '<li><a href="#' + id + '-s' + bi + '" data-toc="' + id + '-s' + bi + '">' + t(BLOCK_TITLE[b.type]) + (b.type === 'formula' ? ': ' + rich(b.name) : '') + (b.type === 'example' ? ': ' + rich(b.title) : '') + '</a></li>';
    });
    h += '</ol></nav>' +
      '<div class="side-lessons"><h2>' + t('nav_lessons') + '</h2><ol>' +
      lessons().map(function (x, i) {
        return '<li' + (x.id === id ? ' class="cur"' : '') + '><a href="#/lesson/' + x.id + '">' + (i + 1) + '. ' + rich(x.title) + (isDone(x.id) ? ' ✓' : '') + '</a></li>';
      }).join('') + '</ol></div>' +
      '</aside><main class="lesson-main">';

    l.blocks.forEach(function (b, bi) { h += renderBlock(b, l, bi); });

    h += '<nav class="prevnext">' +
      (prev ? '<a class="btn btn-ghost" href="#/lesson/' + prev.id + '"><span class="pn-l">' + t('prevLesson') + '</span><strong>' + rich(prev.title) + '</strong></a>' : '<span></span>') +
      (next ? '<a class="btn btn-ghost pn-right" href="#/lesson/' + next.id + '"><span class="pn-l">' + t('nextLesson') + '</span><strong>' + rich(next.title) + '</strong></a>' : '<a class="btn btn-ghost pn-right" href="#/"><span class="pn-l">' + t('backToDashboard') + '</span></a>') +
      '</nav></main></div>';
    return h;
  }

  function glossaryHTML() {
    var h = '<div class="lesson-hero"><div class="wrap"><h1>' + t('glossaryTitle') + '</h1><p class="lesson-sub">' + t('glossarySub') + '</p>' +
      '<input id="gloss-q" class="search-input" type="search" placeholder="' + t('glossarySearch') + '" aria-label="' + t('glossarySearch') + '"></div></div>' +
      '<main class="wrap"><div id="gloss-list" class="gloss-grid">' + glossaryCards('') + '</div></main>';
    return h;
  }
  function glossaryCards(q) {
    q = (q || '').trim().toLowerCase();
    var items = GLOSSARY.filter(function (g) {
      if (!q) return true;
      return (g.en + ' ' + g.ar + ' ' + I.L(g.def) + ' ' + I.other(g.def)).toLowerCase().indexOf(q) >= 0;
    });
    if (!items.length) return '<p class="muted">' + t('noResults') + '</p>';
    return items.map(function (g) {
      var l = lessonById(g.lesson);
      return '<article class="gloss-card"><div class="gloss-terms"><strong dir="ltr">' + esc(g.en) + '</strong><strong dir="rtl" lang="ar">' + esc(g.ar) + '</strong></div>' +
        '<p>' + rich(g.def) + '</p>' +
        (g.formula ? '<div class="gloss-formula">' + M.render(g.formula) + '</div>' : '') +
        (l ? '<a class="chip-link" href="#/lesson/' + l.id + '">' + t('seeLesson') + ': ' + rich(l.title) + ' ↗</a>' : '') +
        '</article>';
    }).join('');
  }

  /* ---------------- search overlay ---------------- */
  function searchIndex() {
    var idx = [];
    lessons().forEach(function (l) {
      idx.push({ type: 'lesson', id: l.id, title: l.title, text: l.subtitle });
      l.blocks.forEach(function (b, bi) {
        var txt = '';
        (b.paras || []).forEach(function (p) { txt += I.L(p) + ' ' + I.other(p) + ' '; });
        (b.items || []).forEach(function (it) { txt += JSON.stringify(it) + ' '; });
        if (b.title) txt += I.L(b.title) + ' ' + I.other(b.title);
        if (b.context) txt += I.L(b.context) + ' ' + I.other(b.context);
        idx.push({ type: 'section', id: l.id, sec: l.id + '-s' + bi, title: { en: t(BLOCK_TITLE[b.type]) + ' — ' + I.L(l.title), ar: t(BLOCK_TITLE[b.type]) + ' — ' + I.L(l.title) }, text: { en: txt, ar: txt } });
      });
    });
    GLOSSARY.forEach(function (g) { idx.push({ type: 'term', id: g.lesson, title: { en: g.en, ar: g.ar }, text: g.def }); });
    return idx;
  }
  function openSearch() {
    var ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'search-overlay';
    ov.innerHTML = '<div class="overlay-box" role="dialog" aria-modal="true" aria-label="' + t('nav_search') + '">' +
      '<input id="search-q" class="search-input" type="search" placeholder="' + t('searchPlaceholder') + '" autofocus>' +
      '<div id="search-res" class="search-res"></div>' +
      '<p class="muted small">' + t('keyboardHint') + '</p></div>';
    document.body.appendChild(ov);
    var input = ov.querySelector('#search-q'), res = ov.querySelector('#search-res');
    function run() {
      var q = input.value.trim().toLowerCase();
      if (!q) { res.innerHTML = ''; return; }
      var hits = searchIndex().filter(function (e) {
        return (I.L(e.title) + ' ' + I.other(e.title) + ' ' + I.L(e.text) + ' ' + I.other(e.text)).toLowerCase().indexOf(q) >= 0;
      }).slice(0, 25);
      res.innerHTML = hits.length ? hits.map(function (e) {
        var href = e.type === 'section' ? '#/lesson/' + e.id + '#' + e.sec : (e.type === 'term' ? '#/glossary' : '#/lesson/' + e.id);
        return '<a class="search-hit" href="' + href + '"><span class="sh-type">' + (e.type === 'lesson' ? t('lesson') : e.type === 'term' ? t('term') : t('onThisPage')) + '</span><span class="sh-title">' + esc(I.L(e.title)) + '</span></a>';
      }).join('') : '<p class="muted">' + t('noResults') + '</p>';
    }
    input.addEventListener('input', run);
    ov.addEventListener('click', function (e) { if (e.target === ov) ov.remove(); });
    document.addEventListener('keydown', function close(e) { if (e.key === 'Escape') { ov.remove(); document.removeEventListener('keydown', close); } });
    input.focus();
  }

  /* ---------------- router & render ---------------- */
  function route() {
    var hsh = location.hash.replace(/^#\/?/, '');
    var parts = hsh.split('/');
    if (parts[0] === 'lesson' && parts[1]) return { name: 'lesson', id: parts[1] };
    if (parts[0] === 'glossary') return { name: 'glossary' };
    if (parts[0] === 'ref' && (parts[1] === 'formulas' || parts[1] === 'symbols' || parts[1] === 'defs')) return { name: 'ref', kind: parts[1] };
    return { name: 'home' };
  }

  function render() {
    var r = route();
    I.setLang(store.lang);
    document.documentElement.lang = I.lang();
    document.documentElement.dir = I.lang() === 'ar' ? 'rtl' : 'ltr';
    var scroll = window.scrollY;
    var app = document.getElementById('app');
    var body = '';
    if (r.name === 'lesson') body = lessonHTML(r.id);
    else if (r.name === 'glossary') body = glossaryHTML();
    else if (r.name === 'ref') body = refPageHTML(r.kind);
    else body = dashboardHTML();
    app.innerHTML = headerHTML() + body + footerHTML();
    runCharts();
    bind();
    window.scrollTo(0, scroll);
    if (r.name === 'lesson') trackLesson(r.id); else trackLeave();
  }
  function footerHTML() {
    return '<footer class="foot"><div class="wrap"><p>' + t('footer') + '</p><p class="muted small">' + (window.TRACK && TRACK.enabled() ? t('progressSynced') : t('progressLocal')) + '</p></div></footer>';
  }

  /* ---------------- reference PAGES (formulas / symbols / definitions) ----
     Full pages at #/ref/<kind>, grouped by chapter/module with a chapter
     chip filter + text filter. All derived from course data, so future
     lessons/chapters appear automatically.                              */
  function refLink(kind, ic, label) {
    var on = route().name === 'ref' && route().kind === kind;
    return '<a class="btn btn-ghost ref-btn' + (on ? ' active' : '') + '" href="#/ref/' + kind + '" title="' + esc(label) + '">' +
      '<span class="ref-ic" aria-hidden="true">' + ic + '</span><span class="ref-lab">' + esc(label) + '</span></a>';
  }
  function refEntries(kind) {
    var out = [];
    if (kind === 'formulas') {
      lessons().forEach(function (l) {
        l.blocks.forEach(function (b) {
          if (b.type === 'formula') out.push({ lesson: l.id, name: b.name, tex: b.tex, hay: I.L(b.name) + ' ' + I.other(b.name) + ' ' + b.tex });
        });
      });
    } else if (kind === 'symbols') {
      (window.ABBREV || []).forEach(function (a) {
        out.push({ lesson: a.lesson, sym: a.sym, name: { en: a.en, ar: a.ar }, hay: a.abbr + ' ' + a.en + ' ' + a.ar });
      });
    } else {
      GLOSSARY.forEach(function (g) {
        out.push({ lesson: g.lesson, en: g.en, ar: g.ar, def: g.def, formula: g.formula, hay: g.en + ' ' + g.ar + ' ' + I.L(g.def) + ' ' + I.other(g.def) });
      });
    }
    return out;
  }
  function refItemHTML(kind, e) {
    var l = lessonById(e.lesson);
    var link = l ? '<a class="chip-link" href="#/lesson/' + l.id + '">' + esc(I.L(l.title)) + ' ↗</a>' : '';
    if (kind === 'formulas') {
      return '<div class="ref-item"><div class="ref-item-top"><span class="ref-name">' + rich(e.name) + '</span>' + link + '</div>' +
        '<div class="ref-tex">' + M.render(e.tex) + '</div></div>';
    }
    if (kind === 'symbols') {
      return '<div class="ref-item ref-symrow"><span class="ref-sym">' + M.render(e.sym) + '</span>' +
        '<span class="ref-name">' + rich(e.name) + '</span>' +
        '<span class="ref-other muted">' + esc(I.other(e.name)) + '</span>' + link + '</div>';
    }
    return '<div class="ref-item"><div class="ref-item-top"><strong dir="ltr">' + esc(e.en) + '</strong><strong dir="rtl" lang="ar">' + esc(e.ar) + '</strong>' + link + '</div>' +
      '<p>' + rich(e.def) + '</p>' +
      (e.formula ? '<div class="ref-tex small-tex">' + M.render(e.formula) + '</div>' : '') + '</div>';
  }
  function refListHTML(kind, q, chap) {
    q = (q || '').trim().toLowerCase();
    var entries = refEntries(kind).filter(function (e) {
      if (q && e.hay.toLowerCase().indexOf(q) < 0) return false;
      if (chap) { var l = lessonById(e.lesson); return l && l.module === chap; }
      return true;
    });
    if (!entries.length) return '<p class="muted ref-empty">' + t('noResults') + '</p>';
    return COURSE.modules.map(function (m) {
      var mine = entries.filter(function (e) { var l = lessonById(e.lesson); return l && l.module === m.id; });
      if (!mine.length) return '';
      return '<div class="ref-group"><h3>' + rich(m.title) + '</h3><p class="muted small ref-group-src">' + rich(m.source) + '</p>' +
        mine.map(function (e) { return refItemHTML(kind, e); }).join('') + '</div>';
    }).join('');
  }
  function refPageHTML(kind) {
    session.refChap = session.refChap || {};
    var chap = session.refChap[kind] || '';
    var titles = { formulas: 'refFormulas', symbols: 'refSymbols', defs: 'refDefs' };
    var subs = {
      formulas: { en: 'Every formula in the course, typeset and grouped by chapter, with a jump link to the lesson that teaches it.', ar: 'كل معادلات المقرر مُصفّفة ومجمّعة حسب الفصل، مع رابط يقفز إلى الدرس الذي يشرحها.' },
      symbols: { en: 'Every symbol and abbreviation used across the lectures, with its bilingual meaning, grouped by chapter.', ar: 'كل الرموز والاختصارات المستخدمة في المحاضرات مع معناها ثنائي اللغة، مجمّعة حسب الفصل.' },
      defs: { en: 'The complete bilingual definition set of the course, grouped by chapter with formulas and lesson links.', ar: 'مجموعة التعريفات ثنائية اللغة الكاملة للمقرر، مجمّعة حسب الفصل مع المعادلات وروابط الدروس.' }
    };
    var h = '<div class="lesson-hero"><div class="wrap">' +
      '<p class="crumb"><a href="#/">' + t('nav_dashboard') + '</a> › ' + t(titles[kind]) + '</p>' +
      '<h1>' + t(titles[kind]) + '</h1>' +
      '<p class="lesson-sub">' + rich(subs[kind]) + '</p>' +
      '<div class="ref-controls">' +
        '<div class="chap-chips" role="group" aria-label="' + t('refChapterFilter') + '">' +
          '<button class="chap-chip' + (chap === '' ? ' on' : '') + '" data-refchap="' + kind + '" data-chap="">' + t('refAllChapters') + '</button>' +
          COURSE.modules.map(function (m) {
            return '<button class="chap-chip' + (chap === m.id ? ' on' : '') + '" data-refchap="' + kind + '" data-chap="' + m.id + '">' + esc(I.L(m.title)) + '</button>';
          }).join('') +
        '</div>' +
        '<input id="ref-q" class="ref-filter" type="search" data-kind="' + kind + '" placeholder="' + t('refFilter') + '" aria-label="' + t('refFilter') + '">' +
      '</div></div></div>' +
      '<main class="wrap"><div id="ref-list" class="ref-list page-list">' + refListHTML(kind, '', chap) + '</div></main>';
    return h;
  }

  /* ---------------- events ---------------- */
  function bind() {
    // language
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.onclick = function () {
        if (store.lang === b.dataset.lang) return;
        store.lang = b.dataset.lang; saveStore();
        session.secLang = {};   // sections follow the new site language
        render();
      };
    });
    // per-section language swap (in place: the other language is hidden)
    document.querySelectorAll('[data-seclang]').forEach(function (b) {
      b.onclick = function () {
        var id = b.dataset.seclang;
        session.secLang[id] = (session.secLang[id] || I.lang()) === 'en' ? 'ar' : 'en';
        render();
      };
    });
    // sidebar focus mode: hide / show the whole sidebar
    document.querySelectorAll('[data-sidecollapse]').forEach(function (b) {
      b.onclick = function () { store.sideOpen = false; saveStore(); render(); };
    });
    document.querySelectorAll('[data-sideopen]').forEach(function (b) {
      b.onclick = function () { store.sideOpen = true; saveStore(); render(); };
    });
    // reference pages: chapter chips + text filter
    document.querySelectorAll('[data-refchap]').forEach(function (b) {
      b.onclick = function () {
        session.refChap = session.refChap || {};
        session.refChap[b.dataset.refchap] = b.dataset.chap || '';
        render();
      };
    });
    var rq = document.getElementById('ref-q');
    if (rq) rq.oninput = function () {
      var kind = rq.dataset.kind;
      var chap = (session.refChap && session.refChap[kind]) || '';
      document.getElementById('ref-list').innerHTML = refListHTML(kind, rq.value, chap);
    };
    // search
    var bs = document.getElementById('btn-search');
    if (bs) bs.onclick = openSearch;
    document.querySelectorAll('[data-act="search"]').forEach(function (b) { b.onclick = openSearch; });
    // identity / tracking settings modal
    document.querySelectorAll('[data-act="identity"]').forEach(function (b) {
      b.onclick = function (e) { e.preventDefault(); openIdentityModal(false); };
    });
    document.querySelectorAll('[data-act="print"]').forEach(function (b) { b.onclick = function () { window.print(); }; });
    document.querySelectorAll('[data-act="reset"]').forEach(function (b) {
      b.onclick = function () {
        if (confirm(t('resetConfirm'))) { store.completed = {}; store.bookmarks = {}; store.lastLesson = null; saveStore(); render(); }
      };
    });
    // glossary filter
    var gq = document.getElementById('gloss-q');
    if (gq) gq.oninput = function () { document.getElementById('gloss-list').innerHTML = glossaryCards(gq.value); };
    // bookmark / complete
    document.querySelectorAll('[data-bm]').forEach(function (b) {
      b.onclick = function () { store.bookmarks[b.dataset.bm] = !store.bookmarks[b.dataset.bm]; saveStore(); render(); };
    });
    document.querySelectorAll('[data-complete]').forEach(function (b) {
      b.onclick = function () { var id = b.dataset.complete; store.completed[id] = !store.completed[id]; saveStore(); trackProgressNow(id, store.completed[id]); render(); };
    });
    // example reveal
    document.querySelectorAll('[data-reveal]').forEach(function (b) {
      b.onclick = function () { var k = b.dataset.reveal; session.revealed[k] = (session.revealed[k] || 1) + 1; render(); };
    });
    document.querySelectorAll('[data-revealall]').forEach(function (b) {
      b.onclick = function () { session.revealed[b.dataset.revealall] = +b.dataset.total; render(); };
    });
    document.querySelectorAll('[data-restart]').forEach(function (b) {
      b.onclick = function () { session.revealed[b.dataset.restart] = 1; render(); };
    });
    // flashcards
    document.querySelectorAll('[data-flip]').forEach(function (b) {
      b.onclick = function () { session.flip[b.dataset.flip] = !session.flip[b.dataset.flip]; render(); };
    });
    // quiz
    document.querySelectorAll('.quiz input[type=radio]').forEach(function (r) {
      r.onchange = function () {
        var key = r.name; var st = session.quiz[key];
        st.sel = r.value === 'true' ? true : r.value === 'false' ? false : +r.value;
      };
    });
    document.querySelectorAll('.num-input').forEach(function (inp) {
      inp.oninput = function () { session.quiz[inp.dataset.qkey].val = inp.value; };
    });
    document.querySelectorAll('[data-check]').forEach(function (b) {
      b.onclick = function () {
        var key = b.dataset.check; var st = session.quiz[key];
        var q = findQ(key); if (!q) return;
        if (q.type === 'num') {
          var v = parseFloat(st.val);
          if (isNaN(v)) { st.checked = false; return; }
          st.ok = Math.abs(v - q.answer) <= (q.tol !== undefined ? q.tol : 0.01);
        } else {
          if (st.sel === null || st.sel === undefined) return;
          st.ok = st.sel === q.answer;
        }
        st.checked = true;
        try { var p = key.split(':'); if (window.TRACK) TRACK.quizAnswer(p[0], +p[1], +p[2], q.type, st.ok); } catch (e) { }
        render();
      };
    });
    document.querySelectorAll('[data-retry]').forEach(function (b) {
      b.onclick = function () { var st = session.quiz[b.dataset.retry]; st.checked = false; st.sel = null; st.val = ''; render(); };
    });
    // TOC smooth scroll
    document.querySelectorAll('[data-toc]').forEach(function (a) {
      a.onclick = function (e) {
        e.preventDefault();
        var el = document.getElementById(a.dataset.toc);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });
  }
  function findQ(key) {
    var p = key.split(':'); var l = lessonById(p[0]); if (!l) return null;
    var bi = +p[1], qi = +p[2];
    var b = l.blocks[bi];
    return b && b.type === 'quiz' ? b.items[qi] : null;
  }

  /* ============================================================
     TRACKING + TEACHER DASHBOARD
     Optional layer: inert unless a web-app URL is configured
     (see js/tracking.js). Never blocks or breaks the app.
     ============================================================ */
  function T() { return window.TRACK; }
  function trackLesson(id) { var tr = T(); if (tr) { try { tr.lessonOpen(id); } catch (e) { } } }
  function trackLeave() { var tr = T(); if (tr) { try { tr.lessonClose(); } catch (e) { } } }
  function completedIds() { return lessons().filter(function (l) { return store.completed[l.id]; }).map(function (l) { return l.id; }); }
  function trackProgressNow(lessonId, nowDone) {
    var tr = T(); if (!tr || !tr.enabled()) return;
    var ids = completedIds();
    tr.progress(ids, Math.round(ids.length / lessons().length * 100), lessons().length, lessonId, nowDone);
  }

  /* -------- shared modal helper (appended to body, survives re-render) --- */
  function openModal(inner, onMount) {
    closeModal();
    var ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'acf-modal';
    ov.innerHTML = '<div class="overlay-box modal-box" role="dialog" aria-modal="true">' +
      '<button class="modal-x" aria-label="' + esc(t('close')) + '">✕</button>' + inner + '</div>';
    document.body.appendChild(ov);
    function close() { ov.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(e) { if (e.key === 'Escape') close(); }
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.querySelector('.modal-x').onclick = close;
    document.addEventListener('keydown', onKey);
    if (onMount) onMount(ov, close);
    return { el: ov, close: close };
  }
  function closeModal() { var m = document.getElementById('acf-modal'); if (m) m.remove(); }

  /* -------- identity + settings modal (name + status ONLY) --------
     The tracking endpoint and the instructor key deliberately do NOT
     appear anywhere in the student site; the teacher uses the separate
     standalone dashboard (teacher/ mini-site).                       */
  function openIdentityModal(focusName) {
    var tr = T();
    var id = tr ? tr.ident() : { name: '' };
    var on = tr && tr.enabled();
    var h = '<h3 class="modal-title">⚙ ' + esc(t('settingsTitle')) + '</h3>';
    h += '<div class="modal-sec top"><label class="fld"><span>' + esc(t('identNameLabel')) + '</span>' +
      '<input id="ident-name" type="text" maxlength="80" value="' + esc(id.name || '') + '" placeholder="' + esc(t('identNamePh')) + '"></label>' +
      '<p class="muted small">' + esc(t('identHint')) + '</p>' +
      '<div class="modal-row"><button class="btn btn-primary" id="ident-save">' + esc(t('identSave')) + '</button>' +
      '<span id="ident-msg" class="msg-ok" role="status"></span></div></div>';
    h += '<div class="modal-sec"><h4>' + esc(t('settingsTrackSec')) + '</h4><p class="muted small">' +
      (on ? esc(t('settingsConnected')) + ' — ' + esc(t('settingsPending')) + ': <strong>' + tr.queueCount() + '</strong>'
          : esc(t('settingsNotConnected'))) + '</p></div>';
    var m = openModal(h, function (ov) {
      var nameIn = ov.querySelector('#ident-name');
      if (focusName) nameIn.focus();
      ov.querySelector('#ident-save').onclick = function () {
        var v = nameIn.value.trim();
        if (!v) { nameIn.focus(); return; }
        tr.setName(v);
        var st = ov.querySelector('#ident-msg');
        st.textContent = t('identSaved');
        var sc = ov.querySelector('.modal-sec h4 + p');
        if (sc && tr.enabled()) sc.innerHTML = esc(t('settingsConnected')) + ' — ' + esc(t('settingsPending')) + ': <strong>' + tr.queueCount() + '</strong>';
      };
      nameIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') ov.querySelector('#ident-save').click(); });
    });
    return m;
  }

  /* -------- first-run welcome (friendlier than a bare modal) -------- */
  function showWelcome() {
    var tr = T();
    if (!tr || !tr.enabled() || tr.ident().name) return;
    if (document.getElementById('acf-welcome')) return;
    var ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'acf-welcome';
    ov.innerHTML = '<div class="overlay-box welcome-box" role="dialog" aria-modal="true" aria-label="' + esc(t('welcomeTitle')) + '">' +
      '<div class="welcome-hero"><span class="welcome-mark" aria-hidden="true">∑</span>' +
      '<h3>' + esc(t('welcomeTitle')) + '</h3><p>' + esc(t('welcomeBody')) + '</p></div>' +
      '<label class="fld"><span>' + esc(t('identNameLabel')) + '</span>' +
      '<input id="w-name" type="text" maxlength="80" placeholder="' + esc(t('identNamePh')) + '" autocomplete="name"></label>' +
      '<div class="modal-row"><button class="btn btn-primary" id="w-go">' + esc(t('welcomeStart')) + '</button>' +
      '<button class="btn btn-ghost" id="w-later">' + esc(t('welcomeLater')) + '</button></div>' +
      '<p class="muted small">' + esc(t('identHint')) + '</p></div>';
    document.body.appendChild(ov);
    function close() { ov.remove(); }
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.querySelector('#w-go').onclick = function () {
      var v = ov.querySelector('#w-name').value.trim();
      if (!v) { ov.querySelector('#w-name').focus(); return; }
      tr.setName(v); close();
    };
    ov.querySelector('#w-name').addEventListener('keydown', function (e) { if (e.key === 'Enter') ov.querySelector('#w-go').click(); });
    ov.querySelector('#w-later').onclick = close;
    setTimeout(function () { var el = ov.querySelector('#w-name'); if (el) el.focus(); }, 80);
  }
  function showIdentity() { showWelcome(); }

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
  /* tracking boot: count the visit, ask unidentified students once */
  (function bootTracking() {
    var tr = T(); if (!tr) return;
    try { tr.visit(); } catch (e) { }
    window.setTimeout(function () { try { showIdentity(); } catch (e) { } }, 700);
    /* resume lesson timing when the tab becomes visible again */
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        try { var r = route(); if (r.name === 'lesson') tr.resumeLesson(r.id); } catch (e) { }
      }
    });
  })();
})();
