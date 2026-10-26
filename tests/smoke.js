/* ============================================================
   smoke.js — end-to-end contract tests for BOTH frontends:
   1) student site  (site/)   → mock Apps Script receives events
   2) teacher mini-site (teacher/) → mock serves the dashboard
   Boots a mock endpoint + a static server for the workspace root.
   Safety: both jsdom windows get their tracking URL overridden to
   the local mock BEFORE any network call; the baked production
   DEFAULT_URL is never contacted.
   Run: node smoke.js   (part of npm test)
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const path = require('path');
const http = require('http');
const fs = require('fs');

let passes = 0, fails = 0;
const log = (n, ok, ex = '') => { ok ? passes++ : fails++; console.log((ok ? 'PASS' : 'FAIL') + ' | ' + n + (ex ? ' | ' + ex : '')); };
const wait = ms => new Promise(r => setTimeout(r, ms));
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' };

function staticServer(root) {
  return new Promise(res => {
    const srv = http.createServer((rq, rs) => {
      let u = decodeURIComponent(rq.url.split('?')[0]);
      if (u.endsWith('/')) u += 'index.html';
      const f = path.join(root, u);
      if (!fs.existsSync(f) || !fs.statSync(f).isFile()) { rs.statusCode = 404; rs.end(); return; }
      rs.setHeader('Content-Type', MIME[path.extname(f)] || 'application/octet-stream');
      rs.end(fs.readFileSync(f));
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}

/* mock Apps Script web app */
function mockGas() {
  const received = [];
  const srv = http.createServer((rq, rs) => {
    if (rq.method === 'POST') {
      let body = '';
      rq.on('data', c => body += c);
      rq.on('end', () => {
        try { received.push(...JSON.parse(body).events); } catch (e) { received.push({ bad: body }); }
        rs.setHeader('Content-Type', 'application/json');
        rs.end(JSON.stringify({ ok: true, accepted: (JSON.parse(body).events || []).length }));
      });
      return;
    }
    const url = new URL(rq.url, 'http://x');
    const payload = url.searchParams.get('action') === 'dashboard'
      ? {
        ok: true, generated: Date.now(),
        summary: { students: 1, activeToday: 1, active7d: 1, avgProgress: 13, avgQuiz: 100, quizTotal: 1, totalSeconds: 60 },
        students: [{ sid: 's1', name: 'E2E Student', firstSeen: Date.now(), lastSeen: Date.now(), visits: 1, seconds: 60, lessonsDone: 1, total: 8, pct: 13, quizCorrect: 1, quizTotal: 1, lessons: { l1: { done: true, seconds: 60 } } }],
        daily: [{ day: '2026-01-01', visits: 1, seconds: 60, activeStudents: 1 }, { day: '2026-01-02', visits: 2, seconds: 90, activeStudents: 1 }],
        questions: [{ lesson: 'l1', block: 9, q: 0, attempts: 1, correct: 1, rate: 1 }],
        activity: [{ ts: Date.now(), name: 'E2E Student', type: 'visit', lesson: '', ok: undefined }]
      }
      : { ok: true };
    const cb = url.searchParams.get('callback');
    rs.setHeader('Content-Type', cb ? 'application/javascript' : 'application/json');
    rs.end(cb ? cb + '(' + JSON.stringify(payload) + ')' : JSON.stringify(payload));
  });
  return new Promise(res => srv.listen(0, '127.0.0.1', () => res({ srv, received, port: srv.address().port })));
}

function vcFor(errors) {
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => { if (/scrollTo|scrollIntoView|Could not load/.test(e.message)) return; errors.push('jsdomError: ' + e.message); });
  vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
  return vc;
}

(async () => {
  const site = await staticServer(path.resolve(__dirname, '../..')); // workspace root: /site/ + /teacher/
  const gas = await mockGas();
  const errors = [];
  const GAS_URL = 'http://127.0.0.1:' + gas.port + '/exec';

  /* ================= student site ================= */
  const dom = await JSDOM.fromURL('http://127.0.0.1:' + site.address().port + '/site/', {
    resources: 'usable', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vcFor(errors)
  });
  const { window } = dom; const doc = window.document;
  await new Promise(r => window.addEventListener('load', r)); await wait(300);

  const TR = window.TRACK;
  // SAFETY: disengage the baked production URL before any network exists
  TR.setUrl('off');
  window.localStorage.removeItem('acf_track_queue_v1');
  window.fetch = (u, o) => fetch(u, o);
  window.navigator.sendBeacon = undefined;
  TR.setUrl(GAS_URL);
  log('student: tracking enabled against mock', TR.enabled() === true && TR.url() === GAS_URL && TR.queueCount() === 0);

  TR.setName('E2E Student');
  window.location.hash = '#/lesson/l1'; await wait(250);
  const radio = doc.querySelector('.quiz input[type=radio]');
  if (radio) {
    radio.checked = true; radio.dispatchEvent(new window.Event('change', { bubbles: true }));
    doc.querySelector('.quiz [data-check]').click(); await wait(150);
  }
  doc.querySelector('[data-complete="l1"]').click(); await wait(200);
  gas.received.length = 0;
  TR.flush(); await wait(600);

  const types = gas.received.map(e => e.type);
  log('student: POST delivered a batch', gas.received.length >= 4, 'n=' + gas.received.length);
  log('student: event types present', ['identity', 'lesson_open', 'quiz_answer', 'lesson_complete', 'progress'].every(t => types.includes(t)), types.join(','));
  const evq = gas.received.find(e => e.type === 'quiz_answer');
  log('student: quiz_answer shape', evq && evq.lesson === 'l1' && typeof evq.block === 'number' && typeof evq.ok === 'boolean');
  const evp = gas.received.find(e => e.type === 'progress');
  log('student: progress snapshot shape', evp && Array.isArray(evp.completed) && evp.completed.includes('l1') && evp.pct === 8 && evp.total === 12);
  log('student: all events share sid+name', gas.received.every(e => e.sid && e.name === 'E2E Student'));
  log('student: unique event ids', new Set(gas.received.map(e => e.id)).size === gas.received.length);
  log('student: queue drained after flush', TR.queueCount() === 0, 'q=' + TR.queueCount());
  log('student: no teacher UI anywhere', !doc.querySelector('#tch-key') && !doc.querySelector('#track-url') && !/#\/teacher/.test(doc.querySelector('.foot')?.innerHTML || ''));

  /* ================= teacher mini-site ================= */
  const tdom = await JSDOM.fromURL('http://127.0.0.1:' + site.address().port + '/teacher/', {
    resources: 'usable', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vcFor(errors)
  });
  const tw = tdom.window, tdoc = tw.document;
  await new Promise(r => tw.addEventListener('load', r)); await wait(250);
  tw.fetch = (u, o) => fetch(u, o);
  // point the mini-site at the mock (per-device override) BEFORE any request
  tw.localStorage.setItem('acf_teacher_url_v1', GAS_URL);

  log('teacher: login screen renders', !!tdoc.querySelector('#key') && !!tdoc.querySelector('#go') && !!tdoc.querySelector('.login-card'));
  log('teacher: language pill present', tdoc.querySelectorAll('.langpill button').length === 2);
  tdoc.querySelector('#go').click(); await wait(120);
  log('teacher: empty key rejected', !!tdoc.querySelector('#login-err'));

  tdoc.querySelector('#key').value = 'K1';
  tdoc.querySelector('#go').click();
  for (let i = 0; i < 30 && !tdoc.querySelector('.stat'); i++) await wait(100);
  await wait(120);
  log('teacher: dashboard loads with key', tdoc.querySelectorAll('.stat').length === 6);
  log('teacher: student row rendered', /E2E Student/.test(tdoc.querySelector('.tbl tbody')?.textContent || ''));
  log('teacher: completion matrix done-cell', tdoc.querySelectorAll('.matrix td.mx-done').length >= 1);
  log('teacher: question analytics row', tdoc.querySelectorAll('.tbl')[1]?.querySelectorAll('tbody tr').length >= 1 || tdoc.body.textContent.includes('100%'));
  log('teacher: daily chart svg drawn', !!tdoc.querySelector('#daily svg'));
  log('teacher: csv + signout buttons', !!tdoc.querySelector('#t-csv') && !!tdoc.querySelector('#t-out'));
  log('teacher: key remembered for session', tw.localStorage.getItem('acf_teacher_key_v1') === 'K1');

  // language flip re-renders
  tdoc.querySelectorAll('[data-lang]').forEach(b => { if (b.dataset.lang === 'ar') b.click(); });
  await wait(150);
  log('teacher: AR flip works', tdoc.documentElement.dir === 'rtl' && /الطلاب/.test(tdoc.body.textContent));

  tdoc.querySelector('#t-out').click(); await wait(150);
  log('teacher: sign out returns to login', !!tdoc.querySelector('#key') && !tw.localStorage.getItem('acf_teacher_key_v1'));

  /* retry path on the student side: server down → events stay queued */
  window.location.hash = '#/'; await wait(150);
  gas.srv.close();
  TR.track('visit');
  TR.flush(); await wait(500);
  log('student: failed delivery keeps event queued', TR.queueCount() === 1, 'q=' + TR.queueCount());

  log('no runtime errors', errors.length === 0, errors.slice(0, 3).join(' ;; '));
  console.log('---'); console.log('passes=' + passes + ' fails=' + fails);
  site.close(); window.close(); tw.close(); process.exit(fails ? 1 : 0);
})().catch(e => { console.log('HARNESS ERROR', e); process.exit(1); });
