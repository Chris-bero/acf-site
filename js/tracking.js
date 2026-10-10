/* ============================================================
   tracking.js — optional analytics layer (Google Sheets backend
   via Apps Script web app).

   Design rules (must not regress):
   • If no web-app URL is configured the module is completely
     inert: zero network requests, site stays 100% offline.
   • Events are queued in localStorage and flushed fire-and-
     forget (no-cors POST). Every event carries a unique id so
     the server can de-duplicate retries.
   • All failures are silent; tracking must never break the app.
   ============================================================ */
(function (global) {
  'use strict';

  /* -------- TEACHER: paste your Apps Script web-app URL below --------
     Example: https://script.google.com/macros/s/AKfycb....../exec
     Leave empty to ship the site with tracking disabled. The URL can
     also be set per-device from the gear (settings) button; storing the
     special value 'off' there is a kill-switch that overrides this.    */
  var DEFAULT_URL = 'https://script.google.com/macros/s/AKfycbxvCkanJfARYG0wGtsgQ4TF-z7Bgl35FlVJaCzFUgiC2KUg2kE-iivQN_Fx-TtLi0lz/exec';

  var LS_URL = 'acf_track_url_v1';
  var LS_QUEUE = 'acf_track_queue_v1';
  var LS_IDENT = 'acf_track_ident_v1';
  var LS_TIME = 'acf_track_time_v1';
  var HEARTBEAT_SEC = 60;
  var MAX_BATCH = 150;

  /* ---------------- tiny helpers ---------------- */
  function lsGet(k) { try { return global.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { global.localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  function lsDel(k) { try { global.localStorage.removeItem(k); } catch (e) { } }
  function jsonParse(s, fb) { try { return JSON.parse(s) || fb; } catch (e) { return fb; } }
  function uuid() {
    try {
      if (global.crypto && global.crypto.randomUUID) return global.crypto.randomUUID();
    } catch (e) { }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
  function clip(s, n) { s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n) : s; }

  /* ---------------- config & identity ---------------- */
  function url() {
    var ov = lsGet(LS_URL);
    if (ov === 'off') return '';           // explicit per-device kill-switch
    return (ov || DEFAULT_URL || '').trim();
  }
  function setUrl(u) { u = (u || '').trim(); if (u) lsSet(LS_URL, u); else lsDel(LS_URL); }
  function enabled() { return !!url(); }

  function ident() {
    var id = jsonParse(lsGet(LS_IDENT), null);
    if (!id || !id.sid) { id = { sid: uuid(), name: (id && id.name) || '', created: Date.now() }; lsSet(LS_IDENT, JSON.stringify(id)); }
    return id;
  }
  function setName(name) {
    var id = ident(); var old = id.name;
    id.name = clip(name, 80).trim(); lsSet(LS_IDENT, JSON.stringify(id));
    if (enabled() && id.name && id.name !== old) track('identity', { name: id.name });
  }

  /* ---------------- queue ---------------- */
  function queue() { var q = jsonParse(lsGet(LS_QUEUE), []); return Array.isArray(q) ? q : []; }
  function saveQueue(q) {
    if (q.length > 900) q = q.slice(q.length - 900); // safety cap ~ months of offline use
    lsSet(LS_QUEUE, JSON.stringify(q));
  }
  function queueCount() { return queue().length; }

  function track(type, data) {
    if (!enabled()) return;
    var id = ident();
    var ev = { id: uuid(), ts: Date.now(), type: String(type), sid: id.sid, name: id.name };
    if (data) for (var k in data) if (Object.prototype.hasOwnProperty.call(data, k)) ev[k] = data[k];
    var q = queue(); q.push(ev); saveQueue(q);
    scheduleFlush();
  }

  /* ---------------- flush (fire & forget) ---------------- */
  var flushTimer = null, retryDelay = 4000;
  function scheduleFlush(delay) {
    if (flushTimer) return;
    flushTimer = global.setTimeout(function () { flushTimer = null; flush(); }, delay || 2500);
  }
  function flush() {
    if (!enabled()) return;
    var q = queue(); if (!q.length) return;
    if (global.navigator && navigator.onLine === false) { scheduleFlush(retryDelay); return; }
    var batch = q.slice(0, MAX_BATCH);
    var body = JSON.stringify({ v: 1, events: batch });
    if (typeof global.fetch !== 'function') return; // jsdom / exotic envs: keep queued
    var sent = batch.map(function (e) { return e.id; });
    try {
      fetch(url(), {
        method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: body
      }).then(function () { dropSent(sent); retryDelay = 4000; },
        function () { scheduleFlush(retryDelay); retryDelay = Math.min(retryDelay * 2, 300000); });
    } catch (e) { scheduleFlush(retryDelay); }
  }
  function dropSent(ids) {
    var set = {}; ids.forEach(function (i) { set[i] = 1; });
    saveQueue(queue().filter(function (e) { return !set[e.id]; }));
    if (queue().length) scheduleFlush(800);
  }
  function beaconFlush() {
    if (!enabled()) return;
    var q = queue(); if (!q.length) return;
    var batch = q.slice(0, MAX_BATCH);
    try {
      if (global.navigator && typeof navigator.sendBeacon === 'function') {
        var ok = navigator.sendBeacon(url(), new Blob([JSON.stringify({ v: 1, events: batch })], { type: 'text/plain' }));
        if (ok) { dropSent(batch.map(function (e) { return e.id; })); return; }
      }
    } catch (e) { }
    flush();
  }

  /* ---------------- lesson timing / heartbeat ---------------- */
  var curLesson = null, lastBeat = 0, hbTimer = null;
  function localTimes() { return jsonParse(lsGet(LS_TIME), {}); }
  function addLocalTime(lessonId, sec) {
    if (!lessonId || !(sec > 0)) return;
    var tm = localTimes(); tm[lessonId] = (tm[lessonId] || 0) + sec; lsSet(LS_TIME, JSON.stringify(tm));
  }
  function localTime(lessonId) { return localTimes()[lessonId] || 0; }

  function lessonOpen(lessonId) {
    if (!enabled()) return;
    if (curLesson === lessonId) return;
    if (curLesson) lessonClose();
    curLesson = lessonId; lastBeat = Date.now();
    track('lesson_open', { lesson: lessonId, route: 'lesson' });
    if (hbTimer) global.clearInterval(hbTimer);
    hbTimer = global.setInterval(beat, HEARTBEAT_SEC * 1000);
  }
  function beat() {
    if (!curLesson || !enabled()) return;
    if (global.document && document.hidden) return; // don't count background tabs
    addLocalTime(curLesson, HEARTBEAT_SEC);
    track('heartbeat', { lesson: curLesson, seconds: HEARTBEAT_SEC });
    lastBeat = Date.now();
  }
  function lessonClose() {
    if (!curLesson) return;
    var rem = Math.max(0, Math.round((Date.now() - lastBeat) / 1000));
    if (rem > 5) { addLocalTime(curLesson, rem); if (enabled()) track('lesson_close', { lesson: curLesson, seconds: rem }); }
    curLesson = null;
    if (hbTimer) { global.clearInterval(hbTimer); hbTimer = null; }
  }
  /* resume timing after the tab becomes visible again (no new event) */
  function resumeLesson(lessonId) {
    if (!enabled() || !lessonId || curLesson === lessonId) return;
    curLesson = lessonId; lastBeat = Date.now();
    if (hbTimer) global.clearInterval(hbTimer);
    hbTimer = global.setInterval(beat, HEARTBEAT_SEC * 1000);
  }

  /* ---------------- semantic helpers (called by app.js) ---------------- */
  function progress(completedIds, pct, total, lessonId, nowDone) {
    if (!enabled()) return;
    if (lessonId) track(nowDone ? 'lesson_complete' : 'lesson_reopen', { lesson: lessonId });
    track('progress', { completed: completedIds, pct: pct, total: total });
  }
  function quizAnswer(lessonId, bi, qi, type, ok) {
    if (!enabled()) return;
    track('quiz_answer', { lesson: lessonId, block: bi, q: qi, qtype: type, ok: !!ok });
  }
  function visit() { if (enabled()) track('visit', {}); }

  /* ---------------- teacher data fetch (CORS w/ JSONP fallback) -------- */
  function apiGet(params) {
    return new Promise(function (resolve, reject) {
      var qs = Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
      var full = url() + (url().indexOf('?') >= 0 ? '&' : '?') + qs;
      var done = false;
      if (typeof global.fetch === 'function') {
        fetch(full).then(function (r) { return r.json(); })
          .then(function (j) { if (!done) { done = true; resolve(j); } })
          .catch(function () { if (!done) { done = true; jsonp(params, resolve, reject); } });
      } else jsonp(params, resolve, reject);
      global.setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, 25000);
    });
  }
  function jsonp(params, resolve, reject) {
    try {
      var cb = '__acf_cb_' + Math.random().toString(36).slice(2);
      var qs = Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
      var s = document.createElement('script');
      var to = global.setTimeout(function () { cleanup(); reject(new Error('jsonp timeout')); }, 20000);
      function cleanup() { global.clearTimeout(to); delete global[cb]; if (s.parentNode) s.parentNode.removeChild(s); }
      global[cb] = function (j) { cleanup(); resolve(j); };
      s.src = url() + (url().indexOf('?') >= 0 ? '&' : '?') + qs + '&callback=' + cb;
      s.onerror = function () { cleanup(); reject(new Error('jsonp error')); };
      document.head.appendChild(s);
    } catch (e) { reject(e); }
  }
  function fetchDashboard(key) { return apiGet({ action: 'dashboard', key: key }); }
  function ping() { return apiGet({ action: 'ping' }); }

  /* ---------------- lifecycle wiring ---------------- */
  try {
    global.addEventListener('online', function () { retryDelay = 4000; flush(); });
    global.addEventListener('pagehide', function () { lessonClose(); beaconFlush(); });
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') { lessonClose(); beaconFlush(); } });
  } catch (e) { }

  global.TRACK = {
    enabled: enabled, url: url, setUrl: setUrl,
    ident: ident, setName: setName,
    track: track, queueCount: queueCount, flush: flush,
    lessonOpen: lessonOpen, lessonClose: lessonClose, resumeLesson: resumeLesson, visit: visit,
    progress: progress, quizAnswer: quizAnswer,
    localTime: localTime,
    fetchDashboard: fetchDashboard, ping: ping
  };
})(typeof window !== 'undefined' ? window : this);
