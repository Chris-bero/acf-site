const { JSDOM, VirtualConsole } = require('jsdom');
const path = require('path');
const http = require('http'); const fs = require('fs');
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'};
function serve(root){return new Promise(res=>{const srv=http.createServer((req,rsp)=>{let u=decodeURIComponent(req.url.split('?')[0]);if(u==='/')u='/index.html';const f=path.join(root,u);if(!fs.existsSync(f)){rsp.statusCode=404;rsp.end('nf');return;}rsp.setHeader('Content-Type',MIME[path.extname(f)]||'application/octet-stream');rsp.end(fs.readFileSync(f));});srv.listen(0,'127.0.0.1',()=>res(srv));});}

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (/scrollTo|scrollIntoView/.test(e.message)) return; errors.push('jsdomError: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const srv = await serve(path.resolve(__dirname, '..'));
  const port = srv.address().port;
  const dom = await JSDOM.fromURL('http://127.0.0.1:' + port + '/', {
    resources: 'usable', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc
  });
  const { window } = dom; const doc = window.document;
  await new Promise(r => window.addEventListener('load', r)); await wait(400);
  const $ = s => doc.querySelector(s);
  const $$ = s => Array.from(doc.querySelectorAll(s));
  let passes = 0, fails = 0;
  const log = (n, ok, ex='') => { ok ? passes++ : fails++; console.log((ok?'PASS':'FAIL')+' | '+n+(ex?' | '+ex:'')); };
  const AR = /[\u0600-\u06FF]/;

  // ---- dashboard / defaults ----
  log('default lang EN + LTR', doc.documentElement.lang === 'en' && doc.documentElement.dir === 'ltr');
  log('8 lesson cards', $$('.lesson-card').length === 8);
  log('reference links in top bar', $$('a[href^="#/ref/"]').length === 3, 'got ' + $$('a[href^="#/ref/"]').length);

  // ---- lesson 1 ----
  window.location.hash = '#/lesson/l1'; await wait(250);
  log('lesson1 renders', /Return and Risk Defined/.test($('.lesson-hero h1')?.textContent || ''));
  log('sections == blocks', $$('.block').length === 15, 'got ' + $$('.block').length);
  log('one language-swap button per section', $$('[data-seclang]').length === 15, 'got ' + $$('[data-seclang]').length);
  log('no stacked translation panels remain', $$('.sec-trans').length === 0);

  // ---- in-place section language swap ----
  const btn3 = $$('[data-seclang]')[2];
  const secId = btn3.dataset.seclang;
  const sec = doc.getElementById(secId);
  const bodyBefore = sec.querySelector('.block-body');
  log('section starts in site language (en)', bodyBefore.getAttribute('lang') === 'en' && !AR.test(bodyBefore.textContent));
  btn3.click(); await wait(200);
  const sec2 = doc.getElementById(secId);
  const body2 = sec2.querySelector('.block-body');
  log('section swaps to Arabic in place', body2.getAttribute('lang') === 'ar' && body2.getAttribute('dir') === 'rtl' && AR.test(body2.textContent));
  log('English text no longer present in that section', !/risk-averse|measuring sticks|Total gain/i.test(body2.textContent));
  const othersEn = $$('.block').filter(b => b.id !== secId).every(b => b.querySelector('.block-body').getAttribute('lang') === 'en');
  log('other sections unaffected', othersEn);
  log('swap survives re-render', (doc.getElementById(secId).querySelector('.block-body').getAttribute('lang') === 'ar'));
  doc.querySelector('[data-seclang="' + secId + '"]').click(); await wait(200);
  log('section swaps back to English', doc.getElementById(secId).querySelector('.block-body').getAttribute('lang') === 'en');

  // ---- site language switch clears section overrides ----
  $$('[data-seclang]')[1].click(); await wait(150);
  $$('[data-lang]').find(b => b.dataset.lang === 'ar').click(); await wait(250);
  log('site switch -> all sections Arabic', $$('.block .block-body').every(b => b.getAttribute('lang') === 'ar'));
  log('RTL applied', doc.documentElement.dir === 'rtl');
  log('math islands stay LTR', $$('.block-body[dir="rtl"] .mmath').every(m => m.getAttribute('dir') === 'ltr'));
  $$('[data-lang]').find(b => b.dataset.lang === 'en').click(); await wait(250);
  log('back to EN', doc.documentElement.lang === 'en');

  // ---- sidebar focus mode (whole sidebar hides) ----
  log('sidebar visible by default', !!$('.lesson-side') && !$('.lesson-side').hidden && !$('.lesson-layout').classList.contains('no-side'));
  $('[data-sidecollapse]').click(); await wait(220);
  log('sidebar fully hidden after collapse', ($('.lesson-side') === null || $('.lesson-side').hidden) && $('.lesson-layout').classList.contains('no-side'));
  log('no TOC/lessons lists on screen', !$('.side-nav ol') || $('.side-nav').closest('aside').hidden);
  log('floating restore button appears', !!$('.side-fab'));
  log('focus mode persisted', JSON.parse(window.localStorage.getItem('acf_state_v1')).sideOpen === false);
  log('hidden sidebar computes display:none', window.getComputedStyle($('.lesson-side')).display === 'none');
  $('.side-fab').click(); await wait(220);
  log('sidebar returns via fab', !!$('.lesson-side') && !$('.lesson-side').hidden && !$('.lesson-layout').classList.contains('no-side'));

  // ---- reference PAGES with chapter filter ----
  log('top bar has 3 reference links', $$('a[href^="#/ref/"]').length === 3, 'got ' + $$('a[href^="#/ref/"]').length);
  for (const kind of ['formulas', 'symbols', 'defs']) {
    window.location.hash = '#/ref/' + kind; await wait(220);
    log('ref page renders: ' + kind, !!$('#ref-list') && $$('.ref-group').length >= 2, 'groups=' + $$('.ref-group').length);
    log('ref page items: ' + kind, $$('.ref-item').length > 5, 'items=' + $$('.ref-item').length);
    log('chapter chips present: ' + kind, $$('[data-refchap]').length === 3, 'chips=' + $$('[data-refchap]').length);
    const allItems = $$('.ref-item').length;
    $$('[data-refchap]').find(c => c.dataset.chap === 'm1').click(); await wait(200);
    log('chapter filter narrows to ch8: ' + kind, $$('.ref-group').length === 1 && $$('.ref-item').length < allItems, 'groups=' + $$('.ref-group').length + ' items=' + $$('.ref-item').length);
    $$('[data-refchap]').find(c => c.dataset.chap === 'm2').click(); await wait(200);
    log('chapter filter switches to ch13: ' + kind, $$('.ref-group').length === 1);
    $$('[data-refchap]').find(c => c.dataset.chap === '').click(); await wait(200);
    const q = $('#ref-q'); q.value = kind === 'formulas' ? 'CAPM' : kind === 'symbols' ? 'beta' : 'portfolio';
    q.dispatchEvent(new window.Event('input', { bubbles: true })); await wait(150);
    log('text filter works on page: ' + kind, $$('.ref-item').length > 0 && $$('.ref-item').length < allItems, 'items=' + $$('.ref-item').length);
  }
  window.location.hash = '#/ref/formulas'; await wait(220);
  log('formulas page renders math', $$('#ref-list .ref-tex .mmath').length > 5);
  log('formulas page links to lessons', $$('#ref-list a[href^="#/lesson/"]').length > 5);
  log('ref nav highlights active page', !!$('a[href="#/ref/formulas"].active'));

  // ---- examples / quiz / flash still work ----
  window.location.hash = '#/lesson/l2'; await wait(250);
  const hiddenBefore = $$('.step[hidden]').length;
  log('example steps partially hidden', hiddenBefore > 0);
  $('[data-reveal]').click(); await wait(150);
  log('reveal works', $$('.step[hidden]').length < hiddenBefore);
  const q1 = $('.quiz .q');
  const radios = q1.querySelectorAll('input[type=radio]');
  radios[1].checked = true; radios[1].dispatchEvent(new window.Event('change', { bubbles: true }));
  q1.querySelector('[data-check]').click(); await wait(150);
  log('quiz feedback ok', $('.quiz .q .q-feedback')?.classList.contains('ok'));

  // ---- charts ----
  window.location.hash = '#/lesson/l8'; await wait(300);
  const hosts = $$('.chart-host').length, svgs = $$('.chart-host svg').length;
  log('all charts render on l8', hosts > 0 && hosts === svgs, hosts + '/' + svgs);
  log('dual-axis chart present (2 y tick colors)', $$('.chart text[fill="#c46a2b"]').length > 0);

  // ---- completion + bookmark ----
  window.location.hash = '#/lesson/l1'; await wait(200);
  $('[data-complete="l1"]').click(); await wait(200);
  log('completion persisted', JSON.parse(window.localStorage.getItem('acf_state_v1')).completed.l1 === true);

  // ---- tracking layer (DEFAULT_URL is baked in → enabled by default) ----
  const TR = window.TRACK;
  log('TRACK module exposed', !!TR && typeof TR.track === 'function' && typeof TR.fetchDashboard === 'function');
  log('enabled by default (baked URL)', TR.enabled() === true && /script\.google\.com\/macros\/s\//.test(TR.url()));
  const q0 = TR.queueCount();
  log('boot + interactions queued offline (no fetch in jsdom)', q0 >= 4, 'q=' + q0);
  const types0 = JSON.parse(window.localStorage.getItem('acf_track_queue_v1') || '[]').map(e => e.type);
  log('expected event types queued', ['visit', 'lesson_open', 'quiz_answer', 'lesson_complete', 'progress'].every(t => types0.includes(t)), types0.join(','));

  // explicit kill-switch ('off' override beats the baked URL)
  TR.setUrl('off');
  log("'off' kill-switch disables tracking", TR.enabled() === false);
  TR.track('visit', { probe: 1 }); // must be a silent no-op
  log('track() inert while disabled', TR.queueCount() === q0);

  // re-enable via the localStorage override (points nowhere: jsdom has no fetch, events must stay queued)
  TR.setUrl('https://script.google.com/macros/s/TEST-INVALID/exec');
  log('enabled once URL override is set', TR.enabled() === true);
  TR.track('visit'); TR.track('heartbeat', { lesson: 'l1', seconds: 60 });
  log('new events queue offline', TR.queueCount() === q0 + 2, 'q=' + TR.queueCount());
  const rawQ = JSON.parse(window.localStorage.getItem('acf_track_queue_v1') || '[]');
  log('queue persisted with unique ids', rawQ.length === q0 + 2 && new Set(rawQ.map(e => e.id)).size === rawQ.length && rawQ.every(e => e.sid));

  // first-run welcome overlay (tracking on, no name yet)
  log('first-run welcome overlay shown', !!doc.querySelector('#acf-welcome #w-name'));

  // identity / settings modal via the header gear
  const gear = doc.querySelector('header [data-act="identity"]');
  log('settings gear in header', !!gear);
  gear.click(); await wait(120);
  log('settings modal opens', !!doc.querySelector('#acf-modal #ident-name'));
  log('NO tracking URL / teacher key in student UI', !doc.querySelector('#track-url') && !doc.querySelector('#teacher-key-in') && !doc.querySelector('#tch-key'));
  doc.querySelector('#ident-name').value = 'سارة أحمد';
  doc.querySelector('#ident-save').click(); await wait(120);
  log('name saved + identity event queued', TR.ident().name === 'سارة أحمد' && TR.queueCount() === q0 + 3);
  doc.querySelector('#acf-modal .modal-x').click(); await wait(80);
  log('modal closes', !doc.querySelector('#acf-modal'));
  doc.querySelector('#acf-welcome #w-later').click(); await wait(80);
  log('welcome dismissable', !doc.querySelector('#acf-welcome'));

  // teacher UI is GONE from the student app (separate mini-site now)
  window.location.hash = '#/teacher'; await wait(200);
  log('teacher route removed (falls back to dashboard)', !!doc.querySelector('.lesson-card') && !doc.querySelector('#tch-key'));
  log('no teacher links in student footer', !/teacher|المعلم/i.test(doc.querySelector('.foot')?.textContent || ''));
  window.location.hash = '#/'; await wait(150);

  // bilingual i18n for the new UI strings
  const STRx = window.I18N.STR;
  const newKeys = ['settingsTitle', 'identSave', 'identNameLabel', 'progressSynced', 'welcomeTitle', 'welcomeStart', 'settingsTrackSec'];
  log('tracking i18n keys bilingual', newKeys.every(k => STRx.en[k] && STRx.ar[k]), newKeys.filter(k => !(STRx.en[k] && STRx.ar[k])).join(','));

  // cleanup: leave tracking disabled for the rest of the run
  TR.setUrl('off'); window.localStorage.removeItem('acf_track_queue_v1');
  log('tracking disables cleanly', TR.enabled() === false && TR.queueCount() === 0);

  log('no runtime errors', errors.length === 0, errors.slice(0, 5).join(' ;; '));
  console.log('---'); console.log('passes=' + passes + ' fails=' + fails);
  srv.close(); process.exit(fails ? 1 : 0);
})().catch(e => { console.log('HARNESS ERROR', e); process.exit(1); });
