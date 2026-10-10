const { JSDOM, VirtualConsole } = require('jsdom');
const path = require('path');
const http = require('http'); const fs = require('fs');
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css'};
function serve(root){return new Promise(res=>{const srv=http.createServer((rq,rs)=>{let u=decodeURIComponent(rq.url.split('?')[0]);if(u==='/')u='/index.html';const f=path.join(root,u);if(!fs.existsSync(f)){rs.statusCode=404;rs.end();return;}rs.setHeader('Content-Type',MIME[path.extname(f)]||'application/octet-stream');rs.end(fs.readFileSync(f));});srv.listen(0,'127.0.0.1',()=>res(srv));});}
const errs=[]; const vc=new VirtualConsole();
vc.on('jsdomError',e=>{ if(/scrollTo|scrollIntoView|Could not load css/.test(e.message))return; errs.push(e.message); });
vc.on('error',(...a)=>errs.push('console.error '+a.join(' ')));
const wait=ms=>new Promise(r=>setTimeout(r,ms));
let fails=0, passes=0;
function log(n,ok,ex=''){ if(ok)passes++; else fails++; console.log((ok?'PASS':'FAIL')+' | '+n+(ex?' | '+ex:'')); }
function has(p){ return p && typeof p==='object' && typeof p.en==='string' && p.en.trim() && typeof p.ar==='string' && p.ar.trim(); }

(async()=>{
  const srv=await serve(path.resolve(__dirname,'..'));
  const dom=await JSDOM.fromURL('http://127.0.0.1:'+srv.address().port+'/',{resources:'usable',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc});
  const w=dom.window, doc=w.document;
  await new Promise(r=>w.addEventListener('load',r)); await wait(300);
  const COURSE=w.COURSE, G=w.GLOSSARY;
  const $$=s=>Array.from(doc.querySelectorAll(s));

  // ---- content integrity: every textual pair bilingual ----
  COURSE.lessons.forEach(l=>{
    log(l.id+' title/subtitle/source bilingual', has(l.title)&&has(l.subtitle)&&has(l.source));
    l.blocks.forEach((b,bi)=>{
      const where=l.id+'/block'+bi+'/'+b.type;
      const pairs=[];
      (b.items||[]).forEach(it=>{ Object.keys(it).forEach(k=>{ if(typeof it[k]==='object'&&it[k]&&('en' in it[k])) pairs.push([k,it[k]]); }); if(has(it)) pairs.push(['item',it]); });
      (b.paras||[]).forEach(p=>pairs.push(['para',p]));
      (b.bullets||[]).forEach(p=>pairs.push(['bullet',p]));
      (b.defs||[]).forEach(d=>{pairs.push(['def.term',d.term]);pairs.push(['def.def',d.def]);});
      (b.steps||[]).forEach(s=>pairs.push(['step', s.body || s]));
      if(b.title)pairs.push(['title',b.title]);
      if(b.context)pairs.push(['ctx',b.context]);
      if(b.source)pairs.push(['src',b.source]);
      if(b.analogy)pairs.push(['analogy',b.analogy]);
      if(b.analogyLimit)pairs.push(['analogyLimit',b.analogyLimit]);
      if(b.recap)pairs.push(['recap',b.recap]);
      if(b.caption)pairs.push(['caption',b.caption]);
      ['purpose','assumptions','when','inputs','cautions','illustration','sensitivity','meaning'].forEach(k=>{ if(b[k])pairs.push([k,b[k]]); });
      if(b.name)pairs.push(['fname',b.name]);
      (b.vars||[]).forEach(v=>pairs.push(['var',v]));
      (b.points||[]).forEach(p=>pairs.push(['pt',p]));
      (b.canExplain||[]).forEach(p=>pairs.push(['can',p]));
      if(b.q)pairs.push(['q',b.q]);
      (b.options||[]).forEach(o=>pairs.push(['opt',o]));
      if(b.explain)pairs.push(['explain',b.explain]);
      (b.items||[]).forEach(it=>{ if(it.q)pairs.push(['iq',it.q]); (it.options||[]).forEach(o=>pairs.push(['iopt',o])); if(it.explain)pairs.push(['iexp',it.explain]); if(it.wrong)pairs.push(['wrong',it.wrong]); if(it.why)pairs.push(['why',it.why]); if(it.correct)pairs.push(['correct',it.correct]); if(it.illus)pairs.push(['illus',it.illus]); if(it.front)pairs.push(['front',it.front]); if(it.back)pairs.push(['back',it.back]); if(it.term)pairs.push(['pterm',it.term]); if(it.def)pairs.push(['pdef',it.def]); if(it.why)pairs.push(['pwhy',it.why]); if(it.example)pairs.push(['pex',it.example]); });
      if(b.table){ b.table.head.forEach(hd=>pairs.push(['th',hd])); b.table.rows.forEach(r=>r.forEach(c=>{ if(typeof c==='object')pairs.push(['td',c]); })); }
      const bad=pairs.filter(([k,p])=>!has(p));
      if(bad.length) log(where+' all fields bilingual', false, bad.slice(0,4).map(x=>x[0]).join(','));
      // quiz answers valid
      if(b.type==='quiz') b.items.forEach((q,qi)=>{ if(q.type==='mcq'){ if(!(q.answer>=0&&q.answer<q.options.length)) log(where+' q'+qi+' answer idx', false); } });
      // links valid
      (b.items||[]).forEach(it=>{ if(it.link && !COURSE.lessons.some(x=>x.id===it.link)) log(where+' link', false, it.link); });
    });
  });
  log('modules referenced by lessons exist', COURSE.lessons.every(l=>COURSE.modules.some(m=>m.id===l.module)));
  log('glossary lesson links valid', G.every(g=>COURSE.lessons.some(l=>l.id===g.lesson)));
  log('glossary bilingual', G.every(g=>has(g.def)&&g.en&&g.ar));

  // ---- visit every lesson in both langs ----
  for (const lang of ['en','ar']) {
    $$('[data-lang]').find(b=>b.dataset.lang===lang).click(); await wait(200);
    for (const l of COURSE.lessons) {
      w.location.hash='#/lesson/'+l.id; await wait(160);
      const blocks=doc.querySelectorAll('.block').length;
      const trans=doc.querySelectorAll('[data-seclang]').length;
      const expect=l.blocks.length;
      log(lang+' '+l.id+' sections==blocks', blocks===expect, blocks+'/'+expect);
      log(lang+' '+l.id+' swap btns==blocks', trans===expect, trans+'/'+expect);
      const nCharts=doc.querySelectorAll('.chart-host svg').length;
      const nChartHosts=doc.querySelectorAll('.chart-host').length;
      log(lang+' '+l.id+' charts rendered', nCharts===nChartHosts, nCharts+'/'+nChartHosts);
      log(lang+' '+l.id+' dir attr', doc.documentElement.dir===(lang==='ar'?'rtl':'ltr'));
      // math present where formulas exist
      const nFormulas=l.blocks.filter(b=>b.type==='formula').length;
      log(lang+' '+l.id+' formula tex rendered', doc.querySelectorAll('.formula-tex .mmath').length>=nFormulas);
    }
  }
  // dashboard + glossary in ar
  w.location.hash='#/'; await wait(200);
  log('ar dashboard renders', /لوحة|الدروس|التمويل/.test(doc.body.textContent));
  w.location.hash='#/glossary'; await wait(200);
  log('ar glossary renders', doc.querySelectorAll('.gloss-card').length>0);

  log('no runtime errors across full crawl', errs.length===0, errs.slice(0,5).join(' ;; '));
  console.log('---'); console.log('passes='+passes+' fails='+fails);
  srv.close(); process.exit(fails?1:0);
})().catch(e=>{console.log('HARNESS ERROR',e); process.exit(1);});
