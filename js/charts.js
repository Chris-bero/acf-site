/* ============================================================
   Charts — minimal responsive SVG chart builders.
   Every chart on the site is generated from real course data
   passed in by the lesson content; nothing is fabricated.
   ============================================================ */
(function (global) {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var PALETTE = ['#0e7c86', '#1f3a5f', '#c46a2b', '#6b4f9e', '#2e7d32', '#b23a48'];

  function svgEl(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function txt(node, s) { node.textContent = s; return node; }

  function niceMax(v) {
    if (v <= 0) return 1;
    var p = Math.pow(10, Math.floor(Math.log10(v)));
    var n = v / p;
    var m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
    return m * p;
  }

  /* ---------- Grouped / simple bar chart ----------
     cfg = { categories:[], series:[{name, values, color?}], yLabel, fmt(v), height } */
  function barChart(host, cfg) {
    host.innerHTML = '';
    var W = 720, H = cfg.height || 340;
    var pad = { l: 64, r: 16, t: 28, b: 64 };
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    var all = [];
    cfg.series.forEach(function (s) { all = all.concat(s.values); });
    var minV = Math.min(0, Math.min.apply(null, all));
    var maxV = niceMax(Math.max.apply(null, all));
    var span = maxV - minV;
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.aria || cfg.yLabel || 'bar chart' });

    function y(v) { return pad.t + ih - ((v - minV) / span) * ih; }

    // gridlines + y ticks
    var ticks = 5;
    for (var t = 0; t <= ticks; t++) {
      var val = minV + (span * t) / ticks;
      var yy = y(val);
      svg.appendChild(svgEl('line', { x1: pad.l, x2: W - pad.r, y1: yy, y2: yy, class: 'grid' }));
      var lab = txt(svgEl('text', { x: pad.l - 8, y: yy + 4, class: 'tick', 'text-anchor': 'end' }), cfg.fmt ? cfg.fmt(val) : String(Math.round(val * 100) / 100));
      svg.appendChild(lab);
    }
    // zero line
    if (minV < 0) svg.appendChild(svgEl('line', { x1: pad.l, x2: W - pad.r, y1: y(0), y2: y(0), class: 'zero' }));

    var nCat = cfg.categories.length, nSer = cfg.series.length;
    var band = iw / nCat;
    var gw = Math.min(band * 0.72, 90);
    var bw = gw / nSer;

    cfg.categories.forEach(function (cat, ci) {
      var cx = pad.l + band * ci + band / 2;
      cfg.series.forEach(function (s, si) {
        var v = s.values[ci];
        var x = cx - gw / 2 + bw * si;
        var y0 = y(Math.max(0, v)), y1 = y(Math.min(0, v));
        var r = svgEl('rect', {
          x: x + 1, y: y0, width: Math.max(bw - 2, 2), height: Math.max(y1 - y0, 1),
          fill: s.color || PALETTE[si % PALETTE.length], rx: 2, class: 'bar'
        });
        var title = txt(svgEl('title'), cat + ' — ' + s.name + ': ' + (cfg.fmt ? cfg.fmt(v) : v));
        r.appendChild(title);
        svg.appendChild(r);
        if (cfg.valueLabels !== false && nCat * nSer <= 16) {
          svg.appendChild(txt(svgEl('text', {
            x: x + bw / 2, y: (v >= 0 ? y0 - 5 : y1 + 13), class: 'barval', 'text-anchor': 'middle'
          }), cfg.fmt ? cfg.fmt(v) : String(v)));
        }
      });
      svg.appendChild(txt(svgEl('text', { x: cx, y: H - pad.b + 18, class: 'cat', 'text-anchor': 'middle' }), cat));
    });

    // legend
    if (nSer > 1) {
      var lx = pad.l;
      cfg.series.forEach(function (s, si) {
        svg.appendChild(svgEl('rect', { x: lx, y: 6, width: 12, height: 12, fill: s.color || PALETTE[si % PALETTE.length], rx: 2 }));
        var lt = txt(svgEl('text', { x: lx + 17, y: 16, class: 'legend' }), s.name);
        svg.appendChild(lt);
        lx += 17 + s.name.length * 7.2 + 22;
      });
    }
    if (cfg.yLabel) svg.appendChild(txt(svgEl('text', { x: 14, y: pad.t + ih / 2, class: 'axis', transform: 'rotate(-90 14 ' + (pad.t + ih / 2) + ')', 'text-anchor': 'middle' }), cfg.yLabel));
    host.appendChild(svg);
  }

  /* ---------- Line chart ----------
     cfg = { x:{min,max,label,ticks?}, y:{label,fmt,min?,max?},
             series:[{name,color,points:[[x,y],...], dash?}],
             markers:[{x,y,label,color}], height } */
  function lineChart(host, cfg) {
    host.innerHTML = '';
    var W = 720, H = cfg.height || 360;
    var pad = { l: 64, r: 24, t: 30, b: 56 };
    var iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
    var xmin = cfg.x.min, xmax = cfg.x.max;
    var dual = !!cfg.y2;
    var ys = [], ys2 = [];
    cfg.series.forEach(function (s) { s.points.forEach(function (p) { (s.axis === 2 ? ys2 : ys).push(p[1]); }); });
    (cfg.markers || []).forEach(function (m) { if (m.axis !== 2) ys.push(m.y); });
    var ymin = cfg.y.min !== undefined ? cfg.y.min : Math.min(0, Math.min.apply(null, ys));
    var ymax = cfg.y.max !== undefined ? cfg.y.max : niceMax(Math.max.apply(null, ys));
    var ymin2 = 0, ymax2 = 1;
    if (dual && ys2.length) { ymin2 = Math.min(0, Math.min.apply(null, ys2)); ymax2 = niceMax(Math.max.apply(null, ys2)); }
    if (dual) pad.r = 64;
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.aria || 'line chart' });
    function X(v) { return pad.l + ((v - xmin) / (xmax - xmin)) * iw; }
    function Y(v) { return pad.t + ih - ((v - ymin) / (ymax - ymin)) * ih; }
    function Y2(v) { return pad.t + ih - ((v - ymin2) / (ymax2 - ymin2)) * ih; }

    var yt = 5;
    for (var i = 0; i <= yt; i++) {
      var v = ymin + ((ymax - ymin) * i) / yt, yy = Y(v);
      svg.appendChild(svgEl('line', { x1: pad.l, x2: W - pad.r, y1: yy, y2: yy, class: 'grid' }));
      svg.appendChild(txt(svgEl('text', { x: pad.l - 8, y: yy + 4, class: 'tick', 'text-anchor': 'end' }), cfg.y.fmt ? cfg.y.fmt(v) : String(Math.round(v * 100) / 100)));
      if (dual) {
        var v2 = ymin2 + ((ymax2 - ymin2) * i) / yt;
        svg.appendChild(txt(svgEl('text', { x: W - pad.r + 8, y: yy + 4, class: 'tick', 'text-anchor': 'start', fill: '#c46a2b' }), cfg.y2.fmt ? cfg.y2.fmt(v2) : String(Math.round(v2 * 100) / 100)));
      }
    }
    var xt = cfg.x.ticks || 5;
    for (var j = 0; j <= xt; j++) {
      var xv = xmin + ((xmax - xmin) * j) / xt, xx = X(xv);
      svg.appendChild(svgEl('line', { x1: xx, x2: xx, y1: pad.t, y2: pad.t + ih, class: 'grid light' }));
      svg.appendChild(txt(svgEl('text', { x: xx, y: H - pad.b + 18, class: 'tick', 'text-anchor': 'middle' }), cfg.x.fmt ? cfg.x.fmt(xv) : String(Math.round(xv * 100) / 100)));
    }

    cfg.series.forEach(function (s, si) {
      var YF = (s.axis === 2 && dual) ? Y2 : Y;
      var d = s.points.map(function (p, k) { return (k ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + YF(p[1]).toFixed(1); }).join(' ');
      svg.appendChild(svgEl('path', { d: d, fill: 'none', stroke: s.color || PALETTE[si % PALETTE.length], 'stroke-width': 2.5, 'stroke-dasharray': s.dash || 'none', class: 'line' }));
      s.points.forEach(function (p) {
        var c = svgEl('circle', { cx: X(p[0]), cy: YF(p[1]), r: 3.5, fill: s.color || PALETTE[si % PALETTE.length] });
        c.appendChild(txt(svgEl('title'), '(' + p[0] + ', ' + p[1] + ')'));
        svg.appendChild(c);
      });
    });

    (cfg.markers || []).forEach(function (m) {
      var MY = (m.axis === 2 && dual) ? Y2 : Y;
      svg.appendChild(svgEl('circle', { cx: X(m.x), cy: MY(m.y), r: 6, fill: 'none', stroke: m.color || '#b23a48', 'stroke-width': 2.5 }));
      if (m.label) svg.appendChild(txt(svgEl('text', { x: X(m.x) + 9, y: MY(m.y) - 9, class: 'marker', fill: m.color || '#b23a48' }), m.label));
    });

    // legend
    var lx = pad.l;
    cfg.series.forEach(function (s, si) {
      svg.appendChild(svgEl('line', { x1: lx, x2: lx + 20, y1: 12, y2: 12, stroke: s.color || PALETTE[si % PALETTE.length], 'stroke-width': 3, 'stroke-dasharray': s.dash || 'none' }));
      svg.appendChild(txt(svgEl('text', { x: lx + 26, y: 16, class: 'legend' }), s.name));
      lx += 26 + s.name.length * 7.2 + 20;
    });
    if (cfg.x.label) svg.appendChild(txt(svgEl('text', { x: pad.l + iw / 2, y: H - 8, class: 'axis', 'text-anchor': 'middle' }), cfg.x.label));
    if (cfg.y.label) svg.appendChild(txt(svgEl('text', { x: 14, y: pad.t + ih / 2, class: 'axis', transform: 'rotate(-90 14 ' + (pad.t + ih / 2) + ')', 'text-anchor': 'middle' }), cfg.y.label));
    if (dual && cfg.y2.label) svg.appendChild(txt(svgEl('text', { x: W - 12, y: pad.t + ih / 2, class: 'axis', fill: '#c46a2b', transform: 'rotate(90 ' + (W - 12) + ' ' + (pad.t + ih / 2) + ')', 'text-anchor': 'middle' }), cfg.y2.label));
    host.appendChild(svg);
  }

  /* ---------- Stacked horizontal bars (firm value decomposition) ----------
     cfg = { rows:[{label, parts:[{name,value,color?}]}], fmt } */
  function stackedBars(host, cfg) {
    host.innerHTML = '';
    var W = 720, rowH = 54, pad = { l: 150, r: 90, t: 34, b: 12 };
    var H = pad.t + pad.b + cfg.rows.length * rowH;
    var totals = cfg.rows.map(function (r) { return r.parts.reduce(function (a, p) { return a + Math.max(p.value, 0); }, 0); });
    var maxV = niceMax(Math.max.apply(null, totals));
    var iw = W - pad.l - pad.r;
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.aria || 'stacked bar chart' });
    function X(v) { return (v / maxV) * iw; }
    for (var t = 0; t <= 4; t++) {
      var v = (maxV * t) / 4, xx = pad.l + X(v);
      svg.appendChild(svgEl('line', { x1: xx, x2: xx, y1: pad.t - 6, y2: H - pad.b, class: 'grid' }));
      svg.appendChild(txt(svgEl('text', { x: xx, y: pad.t - 12, class: 'tick', 'text-anchor': 'middle' }), cfg.fmt ? cfg.fmt(v) : String(v)));
    }
    cfg.rows.forEach(function (r, ri) {
      var y = pad.t + ri * rowH + 8;
      svg.appendChild(txt(svgEl('text', { x: pad.l - 10, y: y + 18, class: 'cat', 'text-anchor': 'end' }), r.label));
      var x = pad.l;
      r.parts.forEach(function (p) {
        if (p.value <= 0) return;
        var w = X(p.value);
        var rect = svgEl('rect', { x: x, y: y, width: w, height: 26, fill: p.color || PALETTE[0], rx: 2, class: 'bar' });
        rect.appendChild(txt(svgEl('title'), p.name + ': ' + (cfg.fmt ? cfg.fmt(p.value) : p.value)));
        svg.appendChild(rect);
        if (w > 46) svg.appendChild(txt(svgEl('text', { x: x + w / 2, y: y + 17, class: 'barval light', 'text-anchor': 'middle' }), cfg.fmt ? cfg.fmt(p.value) : p.value));
        x += w;
      });
      svg.appendChild(txt(svgEl('text', { x: x + 8, y: y + 17, class: 'barval' }), cfg.fmt ? cfg.fmt(r.parts.reduce(function (a, p) { return a + p.value; }, 0)) : String(r.parts.reduce(function (a, p) { return a + p.value; }, 0))));
    });
    // legend
    var names = [];
    cfg.rows.forEach(function (r) { r.parts.forEach(function (p) { if (names.indexOf(p.name) < 0 && p.value > 0) names.push(p.name); }); });
    var lx = pad.l;
    names.forEach(function (n, i) {
      var col = null;
      cfg.rows.some(function (r) { return r.parts.some(function (p) { if (p.name === n) { col = p.color; return true; } return false; }); });
      svg.appendChild(svgEl('rect', { x: lx, y: 4, width: 12, height: 12, fill: col || PALETTE[i % PALETTE.length], rx: 2 }));
      svg.appendChild(txt(svgEl('text', { x: lx + 17, y: 14, class: 'legend' }), n));
      lx += 17 + n.length * 7.2 + 20;
    });
    host.appendChild(svg);
  }

  /* ---------- Donut (portfolio weights) ----------
     cfg = { slices:[{label,value}], fmt } */
  function donut(host, cfg) {
    host.innerHTML = '';
    var W = 420, H = 300, cx = 150, cy = 150, R = 105, r = 58;
    var total = cfg.slices.reduce(function (a, s) { return a + s.value; }, 0);
    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': cfg.aria || 'donut chart' });
    var a0 = -Math.PI / 2;
    cfg.slices.forEach(function (s, i) {
      var frac = s.value / total, a1 = a0 + frac * Math.PI * 2;
      var large = frac > 0.5 ? 1 : 0;
      function pt(rr, aa) { return (cx + rr * Math.cos(aa)).toFixed(2) + ' ' + (cy + rr * Math.sin(aa)).toFixed(2); }
      var d = 'M ' + pt(R, a0) + ' A ' + R + ' ' + R + ' 0 ' + large + ' 1 ' + pt(R, a1) +
        ' L ' + pt(r, a1) + ' A ' + r + ' ' + r + ' 0 ' + large + ' 0 ' + pt(r, a0) + ' Z';
      var p = svgEl('path', { d: d, fill: PALETTE[i % PALETTE.length], class: 'bar' });
      p.appendChild(txt(svgEl('title'), s.label + ': ' + s.value));
      svg.appendChild(p);
      var mid = (a0 + a1) / 2;
      svg.appendChild(txt(svgEl('text', {
        x: cx + (R + 18) * Math.cos(mid), y: cy + (R + 18) * Math.sin(mid),
        class: 'barval', 'text-anchor': Math.cos(mid) > 0.2 ? 'start' : Math.cos(mid) < -0.2 ? 'end' : 'middle'
      }), s.label + ' ' + Math.round(frac * 1000) / 10 + '%'));
      a0 = a1;
    });
    host.appendChild(svg);
  }

  global.Charts = { barChart: barChart, lineChart: lineChart, stackedBars: stackedBars, donut: donut, palette: PALETTE };
})(window);
