# Advanced Corporate Finance — Interactive Learning Platform

A complete, offline-capable, bilingual (English / Arabic) interactive learning website built **directly from the two uploaded lecture files**:

| Source file | Course content |
|---|---|
| `Lec 1 corporate goals and CAPM.pdf` | Chapter 8 — Risk and Return Fundamentals; CAPM & the Security Market Line |
| `Lec 2 corporate capital structure.pdf` | Chapter 13 (Ross, Westerfield & Jordan) — Leverage & Capital Structure |

No syllabus was assumed. The course map below was derived by reading every slide, including the image-only tables (Tables 5.3, 5.4, 5.5, 5.10 and the share-value tables), which were transcribed by rendering those pages and reading them visually.

---

## 1. Quick start

**Option A — open directly (no server, no build):**
Open `site/index.html` in any modern browser. Everything (styles, scripts, fonts-fallback, charts, math) is local; there are **zero external network requests**.

**Option B — serve locally (recommended for hash-link sharing):**
```bash
cd site
python3 -m http.server 8000
# then visit http://localhost:8000
```

**Run the automated test suites (optional):**
```bash
cd site/tests
npm install          # installs jsdom only (dev dependency)
npm test             # runs test.js (73 interaction checks) + audit.js (138 integrity checks) + smoke.js (23 E2E checks: student site + teacher mini-site)
node ../../gas/test-gas.js   # optional: 33 backend checks for the Apps Script (no deps needed)
```

### Publishing to GitHub / GitHub Pages

The site is 100% static with zero build steps, so it deploys anywhere. The shipped build has the instructor's tracking endpoint baked into `js/tracking.js → DEFAULT_URL` (see §5b); set it to `''` for a build that makes **zero external requests**:

1. Create a new repository on GitHub and upload the contents of this folder to the repository **root** (`index.html` must sit at the root).
2. Commit and push. GitHub Pages:
   * **Settings → Pages → Source: “Deploy from a branch” → branch `main` / root folder**, or
   * drop `index.html` at the root and it also works with the `gh-pages` branch convention.
3. The site works from `https://<username>.github.io/<repo>/` immediately — no configuration, no environment variables, no secrets (translations are bundled, progress is browser-local).

Notes for public repositories: the original lecture PDFs are bundled under `materials/` for offline reference only. **Delete the `materials/` folder (or keep the repository private) before publishing publicly**, since the slides contain Pearson-sourced tables. `tests/` needs `npm install` locally only; it is not needed for deployment and `node_modules` is git-ignored.

---

## 2. Course map (as derived from the materials)

**Module 1 — Risk and Return Fundamentals (Lecture 1)**
1. Return and Risk Defined — annual rate of return, range, risk aversion *(slides 4–6, 9–13)*
2. Measuring Risk — expected value, standard deviation, coefficient of variation *(slides 15–21, Tables 5.3–5.5)*
3. Portfolio Return and Portfolio Beta — weights, rₚ, b *(slides 22–25, Table 5.10, Eq. 5.7)*
4. CAPM and the Security Market Line — CAPM equation, SML, inflation & risk-aversion shifts *(slides 26–32)*

**Module 2 — Leverage and Capital Structure (Lecture 2)**
5. Capital Structure & M&M I/II (no taxes) *(slides 2–8)*
6. M&M with corporate taxes & Trade-off Theory *(slides 9–16)*
7. The EBIT–EPS approach & indifference point *(slides 17–23)*
8. The Share-Value approach & optimal capital structure *(slides 24–33)*

**Module 3 — Dividend Payout Policy (Lecture 3)**
9. Payout Policy Basics & Dividend Dates *(slides 6–12)*
10. Cash Dividend Policies — constant / regular / low-regular-extra / residual *(slides 14–22)*
11. Stock Dividends & Stock Splits — price, EPS and equity-account effects *(slides 23–28)*
12. Share Repurchases & DRIPs + supplementary policy drivers *(slides 29–32)*

Every lesson follows the instructional framework: Learning Objectives → Prerequisite Foundations → The Big Picture → Academic Explanation → *Understand It Simply* → Formula Laboratory → Step-by-Step Worked Examples (reveal-one-step-at-a-time) → Visual Learning → Common Mistakes → Knowledge Check → Flashcards → Summary. Sections that are irrelevant to a topic are simply omitted rather than forced in.

---

## 3. Architecture

```
site/
  index.html            single page shell; loads scripts in order
  css/styles.css        design system (navy/teal), RTL rules, math & chart styling, print styles
  js/i18n.js            UI strings (EN/AR) + language helpers (L / other / setLang)
  js/math.js            MiniMath: dependency-free LaTeX-subset typesetter (frac, sqrt, sum, sub/sup, Greek)
  js/charts.js          responsive SVG builders: bar, line (dual-axis), stacked bars, donut
  js/glossary.js        42 bilingual glossary entries with formulas + lesson links
  js/reference.js       bilingual symbol/abbreviation register (feeds the top-bar windows)
  js/content1..5.js     ALL course content as data: every text field is an {en, ar} pair
  js/tracking.js        OPTIONAL analytics layer (Google Sheets via Apps Script); inert without a URL
  js/app.js             hash router, block renderers, interactions, progress, search
  tests/                jsdom interaction + integrity + E2E smoke suites
teacher/                (workspace root) STANDALONE instructor mini-site: single self-contained index.html
gas/                    (workspace root, next to site/) Apps Script backend: Code.gs, DEPLOY_AR.md, test-gas.js
```

**Data-driven:** lessons live in `COURSE.lessons` as plain objects. To add a lesson, push one object into any `content*.js`; navigation, TOC, progress, search, translation and prev/next pick it up automatically. Block types (`objectives`, `prereq`, `bigpicture`, `academic`, `simple`, `formula`, `example`, `visual`, `mistakes`, `quiz`, `flash`, `summary`, `flags`) are rendered by reusable components in `app.js`.

**Provenance tags:** formula cards carry a `course` / `supp` tag so students can always see whether something is verbatim course material or a supplementary teaching aid.

---

## 4. Translation system (how it actually works)

* **Full-site switch (EN ⇄ عربي)** in the header. Switching re-renders the current route in the target language, sets `<html lang>` and `<html dir="rtl">`, and **preserves your lesson, scroll position, quiz answers and reveal state** (they live in memory/localStorage, not in the DOM). Switching the site language also resets any per-section language choice so the whole page stays coherent.
* **Per-section language swap (in place).** Every instructional block carries a translate button. Clicking it **swaps that section’s language on the spot** — the other language is hidden, not stacked underneath — including its heading, explanations, formula metadata, worked-example steps, quiz wording and even chart labels/axes. A small badge on the button shows which language the section is currently in, and a flipped section gets a subtle teal outline so students always know. Clicking again swaps back. In Arabic mode the same button offers the English original.
* **No fake translation.** Every Arabic string is a complete, hand-authored translation shipped inside the content data (`{en, ar}` pairs). There is no placeholder text and no button that merely changes label or direction. It works with no network and no API key.
* **Math stays legible in both languages:** all equations render through MiniMath inside `dir="ltr"` islands, so fractions/radicals never mirror in RTL; Arabic explanations surround them.
* **Optional machine-translation hook (documented, off by default):** because content is data, an institution can add live MT for *future* content by proxying a provider server-side (e.g. a small endpoint `POST /translate {text, target}` that holds the API key) and having `renderBlock` fall back to it when a block lacks an `ar` field. **Never put provider keys in frontend code.** The bundled hand-authored translations remain the default and the offline guarantee.

---

## 4b. Reference pages (grouped by chapter) + focus mode

Three entries sit in the top bar and open **full pages** (not pop-ups), each **grouped by chapter/module** (Ch. 8 Risk & Return, then Ch. 13 Capital Structure) with a **chapter chip filter** (All chapters / each chapter) plus a text filter:

1. **∑ All formulas** (`#/ref/formulas`) — every formula card in the course, typeset, with a jump link to its lesson. Derived live from the lesson data.
2. **αβ Symbols & abbreviations** (`#/ref/symbols`) — every symbol/abbreviation (rₜ, σ, CV, b, R_F, r_m, EBIT, EPS, K_e, K_eu, K_d, D/E, V_L, V_U, T_c, WACC, r_s, …) with bilingual meanings. Data lives in `js/reference.js`.
3. **≡ Definitions** (`#/ref/defs`) — the full bilingual definition set (with formulas and lesson links). Derived from `js/glossary.js`.

**Focus mode:** the lesson sidebar (“On this page” + “Lessons”) can be **hidden completely** with the chevron button in its header, leaving the lesson text at full width for undistracted study; a small floating button (bottom corner) restores it. The preference persists in `localStorage`.

**Growing the site with new materials:** because the reference pages (plus navigation, TOC, progress, search and translation) are *derived from the content data*, adding a future lecture means only pushing new lesson objects into a `content*.js` file, plus any new symbols into `reference.js` and terms into `glossary.js`. Everything else — including chapter grouping and the chapter filter chips — updates itself.

---

## 5. Interactivity, storage, offline

* Reveal-step worked examples, immediate-feedback quizzes (MCQ / true-false / numeric with tolerance), flip flashcards, collapsible mistake cards, formula variable drawers, interactive SVG charts with tooltips, cross-lesson + glossary search overlay, per-lesson TOC, prev/next, bookmarks, completion tracking and a header progress ring.
* **Storage:** `localStorage` key `acf_state_v1` holds `{lang, completed, bookmarks, lastLesson}` **on this device only**. Nothing is synced across devices unless the optional tracking layer (§5b) is enabled. Quiz/reveal state is kept in memory so ordinary interactions never lose it.
* **Offline:** the site is fully static, so once opened (or once served from disk) all previously loaded content is available without a network. With tracking enabled, events simply queue up offline and upload later — the site never waits on the network. This is genuinely implemented, not claimed.

---

## 5b. Student tracking & teacher dashboard (optional, Google Sheets backend)

An **opt-in** analytics layer lets an instructor see logins, visit counts, study time,
lesson progress and question-level quiz results for the class — stored in the
instructor's own Google Sheet, with a built-in bilingual dashboard at `#/teacher`.

**How it fits the offline-first design (important):**
* `js/tracking.js` is **completely inert without a web-app URL**. This deployment ships
  with the instructor endpoint baked into `DEFAULT_URL`; a per-device override (or the
  special value `off`, also applied when the ⚙ dialog's URL field is saved empty) acts
  as a kill-switch. No URL ⇒ zero external requests, exactly like the original design.
* Events (`visit`, `lesson_open`, `heartbeat` every 60 s, `lesson_close`,
  `lesson_complete`/`lesson_reopen`, `progress` snapshot, `quiz_answer`, `identity`)
  are queued in `localStorage` and flushed with fire-and-forget `no-cors` POSTs;
  every event carries a unique id so the server de-duplicates retries. Offline work
  uploads automatically when connectivity returns (`online` event + `sendBeacon` on exit).
* Student identity is just a **name the student types once** (editable via ⚙); there
  are no accounts or passwords. The teacher dashboard is protected by a secret key
  (`TEACHER_KEY` script property).

**Backend:** `gas/Code.gs` (Apps Script web app) auto-creates six sheets
(Students, Progress, QuizAnswers, Events, Daily, Config), aggregates on write,
serves the read-only dashboard JSON(P) on GET, and can email a daily/weekly digest
(`digestRunner`, configured in the Config sheet). Full Arabic step-by-step
deployment guide: **`gas/DEPLOY_AR.md`**. Backend logic is covered by an offline
harness: `node gas/test-gas.js` (33 checks); the client↔server contract is covered
by `site/tests/smoke.js` (16 checks, part of `npm test`).

**Instructor dashboard = a separate, standalone mini-site (`teacher/index.html`).**
It is a single self-contained file (inline CSS + JS, zero dependencies, EN/AR) that
students never receive: open it from disk or host it anywhere. It shows a designed
login screen (key + show/hide + connection chip + "where do I find my key?" help),
then summary stat cards, a 30-day dual-axis activity chart, the student table, the
lesson-completion matrix (✓ done / ◔ started, hover for minutes), question-level
analytics sorted hardest-first, a recent-activity feed and an Excel-friendly **CSV
export** (BOM for Arabic). The key and the endpoint URL are stored only in the
teacher's browser.

**Student-side privacy of the UI:** the student app contains *no* teacher entry
point at all — no `#/teacher` route, no key field, no endpoint field (the ⚙ dialog
shows name + connection status only), and first-run students get a friendly
welcome card asking for their name.

---

## 6. Academic integrity — source flags (review with your instructor)

The platform reproduces the slides’ figures exactly and **flags** (rather than silently “fixes”) the following inconsistencies, each shown in a dedicated ⚑ panel inside the affected lesson:

1. **Lecture 2, slide 13:** prints `15% + 4% = 20%`; arithmetically this is **19%**, and the printed WACC of 14% follows from the 20% (with 19% it is 13.5%). Both readings are shown.
2. **Lecture 2, slides 15–16:** post-recapitalisation equity is given as E = $4,000,000 while V<sub>L</sub> = $5,300,000 implies E = $4,300,000; part G’s WACC weights use V = $5,000,000. Reproduced as given and flagged.
3. **Lecture 2, slide 23:** the indifference EBIT solves exactly to **₹2,376,000**; the slide rounds to ₹24,00,000 (lakh notation). Both shown.
4. **Lecture 2, slide 19:** the preference dividend is labelled “440,000 LE” while all other amounts are in ₹ — a currency-label inconsistency.

All other arithmetic was independently verified (Apple 132.2%, Wal-Mart −2.5%, X 12.50% / Y 12.36%, σ<sub>A</sub> 1.41% / σ<sub>B</sub> 5.66%, rₚ 13.125%, b<sub>V</sub> 1.195 / b<sub>W</sub> 0.91, CAPM 13%, SML shifts 16% / 17.5%, M&M values, EBIT–EPS 0.495/0.305/0.651, and the full seven-structure EPS & share-value table).

---

## 7. Accessibility & responsiveness

Semantic HTML (`header/nav/main/aside/section/details/summary`), labelled controls, `aria-expanded` on toggles, visible focus rings, radio-groups for options, contrast-checked palette, keyboard-navigable overlay (Esc closes), and layouts tested down to 360 px with no horizontal overflow (tables and equations scroll inside their own islands). Print stylesheet strips controls for clean lesson handouts.

---

## 8. Known limitations (honest)

* MiniMath covers the formula subset used by this course (fractions, radicals, sums with limits, sub/superscripts, Greek, operators). Exotic notation would need a heavier library.
* The required-return schedule r<sub>s</sub> in Lesson 8 is taken from the course table (Table 13.14); the platform does not derive it.
* Progress is device-local by design; cross-device sync would require a backend, which this project deliberately avoids.
