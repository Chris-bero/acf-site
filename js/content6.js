/* ============================================================
   CONTENT — Module 4 (Lessons 13–16: Preferred & Common Stocks)
   Built from Lecture 4 (Chapter 7, Ross/Westerfield/Jordan).
   Every figure independently re-verified (24/24 computations);
   source typos are flagged, never silently fixed.
   ============================================================ */

window.COURSE.modules.push({
  id: 'm4',
  title: { en: 'Module 4 — Preferred & Common Stocks', ar: 'الوحدة 4 — الأسهم التفضيلية والعادية' },
  source: { en: 'Lecture 4 — Chapter 7 (Ross, Westerfield, Jordan): Preferred and Common Stocks', ar: 'المحاضرة 4 — الفصل 7 (روس، ويسترفيلد، جوردان): الأسهم التفضيلية والعادية' }
});

/* ---------------------------------------------------------- L13 */
window.COURSE.lessons.push({
  id: 'l13', module: 'm4', minutes: 45,
  title: { en: 'Shareholder Rights & the Rights Offering', ar: 'حقوق المساهمين وعرض الحقوق' },
  subtitle: { en: 'Common vs preferred stock, preemptive rights, and valuing one right with the ex-rights price', ar: 'العادي مقابل التفضيلي، حق الأولوية، وتسعير الحق الواحد مع سعر Ex-rights' },
  source: { en: 'Lecture 4, slides 4–9 (Chapter 7)', ar: 'المحاضرة 4، الشرائح 4–9 (الفصل 7)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'List the four rights of common shareholders and the three preferences of preferred.', ar: 'سرد حقوق المساهمين العاديين الأربعة وتفضيلات التفضيلي الثلاثة.' },
      { en: 'Explain why preferred stock is called a hybrid security.', ar: 'شرح لماذا يُسمى السهم التفضيلي ورقة هجينة.' },
      { en: 'Allocate preemptive shares to an existing investor.', ar: 'تخصيص أسهم الأولوية لمستثمر قائم.' },
      { en: 'Compute N, the value of one right R, and the ex-rights price P<ex>.', ar: 'حساب N وقيمة الحق الواحد R وسعر Ex-rights ‏P<ex>.' },
      { en: 'Verify the identity M − P<ex> = R.', ar: 'التحقق من المتطابقة M − P<ex> = R.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Common stock', ar: 'السهم العادي' },
        def: { en: 'Residual ownership: last in line for earnings and assets, first in line for control via votes.', ar: 'ملكية متبقية: الأخير في صف الأرباح والأصول، والأول في صف السيطرة عبر التصويت.' },
        why: { en: 'All rights in this lesson attach to this security.', ar: 'كل حقوق هذا الدرس ترتبط بهذه الورقة.' },
        example: { en: 'One vote per share on board elections and mergers.', ar: 'صوت واحد للسهم في انتخابات المجلس والاندماجات.' } },
      { term: { en: 'Market price vs subscription price', ar: 'سعر السوق مقابل سعر الاكتتاب' },
        def: { en: 'M is what the share trades at cum-rights; S is what a right lets you pay for a new share.', ar: '‏M هو سعر تداول السهم مع الحقوق؛ وS هو ما يتيح لك الحق دفعه لشراء سهم جديد.' },
        why: { en: 'The gap M − S is exactly what the rights are worth in total.', ar: 'الفجوة M − S هي بالضبط قيمة الحقوق إجمالًا.' },
        example: { en: 'M = $18 with S = $12 gives $6 spread over N+1 = 5 ⇒ R = $1.20.', ar: '‏M = 18 مع S = 12 يعطي فجوة 6 على N+1 = 5 ⇒ R = 1.20 دولار.' } },
      { term: { en: 'Cumulative preferred dividends', ar: 'التوزيعات التفضيلية التراكمية' },
        def: { en: 'Omitted preferred dividends accumulate and must be cleared before common dividends.', ar: 'التوزيعات التفضيلية المُغفلة تتراكم ويجب سدادها كاملة قبل أي توزيعات عادية.' },
        why: { en: 'It is the key contractual protection distinguishing preferred from common.', ar: 'وهي الحماية التعاقدية الأساسية التي تميز التفضيلي عن العادي.' },
        example: { en: 'Two skipped years must be paid in full before common sees a cent.', ar: 'سنتان مُغفلتان تُدفعان كاملتين قبل أن يرى العادي سنتًا واحدًا.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Ownership is a bundle of rights: a claim on residual earnings, a claim on residual assets, votes, and — most subtly — the preemptive right to keep your percentage when new shares are born. A rights offering is that last right in action: the firm sells new shares cheap (at S) but first hands existing owners the tickets (rights) to buy them.', ar: 'الملكية حزمة حقوق: حق في الأرباح المتبقية، وحق في الأصول المتبقية، وأصوات، و—الأكثر خفاءً—حق الأولوية في الحفاظ على نسبتك عندما تولد أسهم جديدة. وعرض الحقوق هو هذا الحق الأخير وهو يعمل: الشركة تبيع أسهمًا جديدة بسعر بخس (عند S) لكنها تسلّم الملاك الحاليين أولًا تذاكر الشراء (الحقوق).' },
      { en: 'Because a right lets you buy at S while the share trades at M, each right is worth a slice of that gap. The slice size is set by how many rights one new share needs (N): R = (M − S) ÷ (N + 1). Once the share trades ex-rights, the price itself drops by exactly R — the verification M − P<ex> = R is the lesson’s checksum.', ar: 'لأن الحق يتيح الشراء عند S بينما السهم يتداول عند M، فكل حق يستحق شريحة من تلك الفجوة. وحجم الشريحة يحدده كم حقًا يحتاجه السهم الجديد (N): ‏R = (M − S) ÷ (N + 1). وبمجرد تداول السهم ex-rights ينخفض السعر نفسه بمقدار R تمامًا — والمتطابقة M − P<ex> = R هي بصمة التحقق في الدرس.' }
    ], analogy: { en: 'A members-only pre-sale: a club sells 200 new membership slots at a discount, but current members get first tickets in proportion to their existing stakes. The ticket itself has value — it is the discount, sliced per slot.', ar: 'بيع مسبق للأعضاء فقط: نادٍ يبيع 200 مقعد عضوية جديدًا بخصم، لكن الأعضاء الحاليين يستلمون التذاكر أولًا بنسبة ملكياتهم. والتذكرة نفسها لها قيمة — فهي الخصم مقسومًا على كل مقعد.' }, analogyLimit: { en: 'Unlike club tickets, rights trade in the market and their value moves with M until the ex-date.', ar: 'بخلاف تذاكر النادي، تُتداول الحقوق في السوق وتتحرك قيمتها مع M حتى تاريخ Ex.' } },

    { type: 'academic', paras: [
      { en: 'Common stockholders hold residual claims: dividends come from after-tax profits left after all obligations, and liquidation proceeds reach them only after creditors and preferred shareholders. They vote (typically one share, one vote) and hold the preemptive right to maintain their ownership percentage in any new issue (slide 4).', ar: 'يملك حملة الأسهم العادية حقوقًا متبقية: التوزيعات تأتي من أرباح بعد الضريبة متبقية بعد كل الالتزامات، ومتحصلات التصفية تصلهم فقط بعد الدائنين وحملة التفضيلي. وهم يصوتون (عادة سهم واحد صوت واحد) ويملكون حق الأولوية للحفاظ على نسبة ملكيتهم في أي إصدار جديد (شريحة 4).' },
      { en: 'Preferred stock is the hybrid: dividend preference (priority over common), usually cumulative (omitted dividends accumulate and must be paid in full before common receives anything), and liquidation preference — but no voting rights (slide 5). Debt-like in its fixed priority, equity-like in its lack of maturity.', ar: 'السهم التفضيلي هو الهجين: أفضلية توزيعات (أولوية على العادي)، عادة تراكمية (التوزيعات المُغفلة تتراكم ويجب سدادها كاملة قبل أن يستلم العادي شيئًا)، وأفضلية تصفية — لكن بلا حق تصويت (شريحة 5). يشبه الدين في أولويته الثابتة والملكية في غياب استحقاق نهائي.' },
      { en: 'Rights-offering arithmetic (slides 6–9): an investor’s preemptive allocation = ownership % × total new shares. Rights needed per new share N = old shares ÷ new shares. Cum-rights value of one right R = (M − S) ÷ (N + 1); the theoretical ex-rights price P<ex> = (M × N + S) ÷ (N + 1); and the identity M − P<ex> = R must hold.', ar: 'حسابات عرض الحقوق (شرائح 6–9): تخصيص الأولوية للمستثمر = ٪ الملكية × إجمالي الأسهم الجديدة؛ والحقوق اللازمة لكل سهم جديد N = الأسهم القديمة ÷ الجديدة؛ وقيمة الحق الواحد مع الحقوق R = (M − S) ÷ (N + 1)؛ وسعر Ex-rights النظري P<ex> = (M × N + S) ÷ (N + 1)؛ ويجب أن تتحقق المتطابقة M − P<ex> = R.' }
    ], defs: [
      { term: { en: 'Preemptive right', ar: 'حق الأولوية (المسبق)' }, def: { en: 'The right to buy new-issue shares first, in proportion to current ownership, to avoid dilution.', ar: 'حق شراء أسهم الإصدار الجديد أولًا، بنسبة الملكية الحالية، تجنبًا للتخفيف.' } },
      { term: { en: 'Rights offering', ar: 'عرض الحقوق' }, def: { en: 'A new-share issue sold to existing holders via transferable rights at a subscription price S.', ar: 'إصدار أسهم جديدة يُباع للملاك الحاليين عبر حقوق قابلة للتداول بسعر اكتتاب S.' } },
      { term: { en: 'Ex-rights price', ar: 'سعر Ex-rights' }, def: { en: 'The theoretical share price once rights no longer attach: P<ex> = (M×N + S) ÷ (N + 1).', ar: 'سعر السهم النظري بمجرد انفصال الحقوق: P<ex> = (M×N + S) ÷ (N + 1).' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Picture N old shares crowding around one new discounted share. Together they are worth N×M + S dollars; spread over N+1 shares that is P<ex>. One right is simply the drop from M to P<ex> — which algebraically equals (M − S) ÷ (N + 1).', ar: 'تخيل N سهمًا قديمًا يلتفون حول سهم جديد واحد مخفض. معًا يستحقون N×M + S دولارًا؛ موزعة على N+1 سهمًا هذا هو P<ex>. والحق الواحد هو ببساطة الهبوط من M إلى P<ex> — وهو جبريًا يساوي (M − S) ÷ (N + 1).' },
      { en: 'So the recipe: find N from the share counts, plug into R, then get P<ex> either by its formula or by M − R. Always finish with the checksum M − P<ex> = R.', ar: 'فالوصفة: أوجد N من أعداد الأسهم، عوّض في R، ثم خذ P<ex> إما بمعادلته أو بـM − R. واختم دائمًا ببصمة التحقق M − P<ex> = R.' }
    ], steps: [
      { en: 'Allocation = ownership % × new shares offered.', ar: 'التخصيص = ٪ الملكية × الأسهم الجديدة المعروضة.' },
      { en: 'N = old shares ÷ new shares.', ar: '‏N = الأسهم القديمة ÷ الجديدة.' },
      { en: 'R = (M − S) ÷ (N + 1).', ar: '‏R = (M − S) ÷ (N + 1).' },
      { en: 'P<ex> = (M × N + S) ÷ (N + 1); check M − P<ex> = R.', ar: '‏P<ex> = (M × N + S) ÷ (N + 1)؛ وتحقق M − P<ex> = R.' }
    ], recap: { en: 'Rights convert the discount (M − S) into a per-right price; the ex-rights fall in the share price equals exactly that per-right value.', ar: 'الحقوق تحوّل الخصم (M − S) إلى سعر لكل حق؛ والهبوط في سعر السهم ex-rights يساوي تمامًا قيمة الحق تلك.' } },

    { type: 'formula', id: 'f-preempt', tag: 'course',
      name: { en: 'Preemptive allocation', ar: 'تخصيص الأولوية' },
      tex: '\\text{New shares}_{inv} = \\text{Ownership}\\% \\times \\text{New shares offered}',
      vars: [
        { sym: 'Ownership\\%', en: 'investor’s current percentage of old shares', ar: 'نسبة المستثمر الحالية من الأسهم القديمة' },
        { sym: 'New shares offered', en: 'total shares in the rights issue', ar: 'إجمالي الأسهم في إصدار الحقوق' }
      ],
      purpose: { en: 'Keeps the investor’s percentage undiluted.', ar: 'يحافظ على نسبة المستثمر دون تخفيف.' },
      assumptions: { en: 'The investor exercises fully.', ar: 'يمارس المستثمر حقه كاملًا.' },
      when: { en: 'Any rights offering with a known issue size.', ar: 'أي عرض حقوق بحجم إصدار معروف.' },
      inputs: { en: 'Ownership % and issue size.', ar: 'نسبة الملكية وحجم الإصدار.' },
      cautions: { en: 'Use the investor’s share of OLD shares, not of the new total.', ar: 'استخدم نصيب المستثمر من الأسهم القديمة لا من الإجمالي الجديد.' },
      illustration: { en: '10% of a 200,000-share issue = 20,000 new shares.', ar: '‏10% من إصدار 200,000 سهم = 20,000 سهم جديد.' },
      sensitivity: { en: 'Linear in both ownership and issue size.', ar: 'خطي في كل من الملكية وحجم الإصدار.' },
      meaning: { en: 'Dilution protection in one multiplication.', ar: 'حماية من التخفيف في عملية ضرب واحدة.' } },

    { type: 'formula', id: 'f-right', tag: 'course',
      name: { en: 'Value of one right (cum-rights)', ar: 'قيمة الحق الواحد (مع الحقوق)' },
      tex: 'N = \\frac{\\text{Old shares}}{\\text{New shares}}, \\qquad R = \\frac{M - S}{N + 1}',
      vars: [
        { sym: 'M', en: 'market price per share (cum-rights)', ar: 'سعر السوق للسهم (مع الحقوق)' },
        { sym: 'S', en: 'subscription price per new share', ar: 'سعر اكتتاب السهم الجديد' },
        { sym: 'N', en: 'rights needed to buy one new share', ar: 'الحقوق اللازمة لشراء سهم جديد واحد' }
      ],
      purpose: { en: 'Prices the ticket that lets an owner buy a discounted share.', ar: 'تسعّر التذكرة التي تتيح للمالك شراء سهم مخفض.' },
      assumptions: { en: 'Share still trades cum-rights; no arbitrage gaps.', ar: 'السهم لا يزال يتداول مع الحقوق؛ بلا فجوات موازنة.' },
      when: { en: 'Given M, S and the old/new share counts.', ar: 'عند وجود M وS وأعداد الأسهم القديمة/الجديدة.' },
      inputs: { en: 'M, S, old shares, new shares.', ar: '‏M وS والأسهم القديمة والجديدة.' },
      cautions: { en: 'The denominator is N + 1, not N — the new share joins the pool.', ar: 'المقام N + 1 لا N — السهم الجديد ينضم إلى المجموع.' },
      illustration: { en: 'M 18, S 12, N = 4 ⇒ R = 6 ÷ 5 = $1.20.', ar: '‏M ‏18 وS ‏12 وN = 4 ⇒ R = 6 ÷ 5 = 1.20 دولار.' },
      sensitivity: { en: 'R rises with the discount (M − S) and falls as N grows.', ar: '‏R يرتفع مع الخصم (M − S) وينخفض كلما كبر N.' },
      meaning: { en: 'The per-share discount spread over all shares that back one new share.', ar: 'خصم السهم موزعًا على كل الأسهم التي تسند سهمًا جديدًا واحدًا.' } },

    { type: 'formula', id: 'f-exrights', tag: 'course',
      name: { en: 'Theoretical ex-rights price', ar: 'سعر Ex-rights النظري' },
      tex: 'P_{ex} = \\frac{M \\times N + S}{N + 1}, \\qquad M - P_{ex} = R',
      vars: [
        { sym: 'P_{ex}', en: 'share price after rights detach', ar: 'سعر السهم بعد انفصال الحقوق' },
        { sym: 'M, S, N', en: 'as in the rights-value formula', ar: 'كما في معادلة قيمة الحق' }
      ],
      purpose: { en: 'Values the share once the cheap-purchase ticket has left it.', ar: 'تسعّر السهم بمجرد مغادرة تذكرة الشراء الرخيص له.' },
      assumptions: { en: 'Pure arithmetic value transfer; no news effect.', ar: 'نقل قيمة حسابي محض؛ بلا أثر أخبار.' },
      when: { en: 'After computing N (or directly with M, S, N).', ar: 'بعد حساب N (أو مباشرة بـM وS وN).' },
      inputs: { en: 'M, S, N.', ar: '‏M وS وN.' },
      cautions: { en: 'Weighted average: N old shares at M plus ONE new share at S.', ar: 'متوسط مرجح: N سهم قديم عند M زائد سهم جديد واحد عند S.' },
      illustration: { en: '(18×4 + 12) ÷ 5 = 84 ÷ 5 = $16.80; check 18 − 16.80 = 1.20 = R.', ar: '‏(18×4 + 12) ÷ 5 = 84 ÷ 5 = 16.80 دولار؛ تحقق 18 − 16.80 = 1.20 = R.' },
      sensitivity: { en: 'A deeper discount S lowers P<ex> and raises R one-for-one.', ar: 'خصم أعمق (S أقل) يخفض P<ex> ويرفع R واحد-لواحد.' },
      meaning: { en: 'The price drop is the right’s value leaving the share.', ar: 'هبوط السعر هو قيمة الحق وهي تغادر السهم.' } },

    { type: 'example', title: { en: 'Rights offering I: 800,000 shares, 200,000 new at $12 (Lec 4, slides 7–8)', ar: 'عرض حقوق I: ‏800,000 سهم و200,000 جديد بسعر 12 (المحاضرة 4، شريحتا 7–8)' },
      context: { en: 'Investor holds 80,000 of 800,000 shares; M = $18.', ar: 'مستثمر يملك 80,000 من 800,000 سهم؛ M = 18 دولارًا.' },
      source: { en: 'Lecture 4, slides 7–8, Problem 1', ar: 'المحاضرة 4، شريحتا 7–8، مسألة 1' },
      steps: [
        { kind: 'given', body: { en: 'Old 800,000; investor 80,000 (10%); new 200,000 at S = $12; M = $18.', ar: 'قديمة 800,000؛ المستثمر 80,000 (10%)؛ جديدة 200,000 بسعر S = 12؛ M = 18.' } },
        { kind: 'calc', body: { en: '(a) 10% × 200,000 = 20,000 new shares.', ar: '(أ) 10% × 200,000 = 20,000 سهم جديد.' } },
        { kind: 'calc', body: { en: '(b) N = 800,000 ÷ 200,000 = 4; R = (18 − 12) ÷ 5 = $1.20.', ar: '(ب) N = 800,000 ÷ 200,000 = 4؛ R = (18 − 12) ÷ 5 = 1.20 دولار.' }, math: ['\\frac{18 - 12}{4 + 1} = \\frac{6}{5} = 1.20'] },
        { kind: 'calc', body: { en: '(c) P<ex> = (18×4 + 12) ÷ 5 = 84 ÷ 5 = $16.80.', ar: '(ج) P<ex> = (18×4 + 12) ÷ 5 = 84 ÷ 5 = 16.80 دولار.' }, math: ['\\frac{18 \\times 4 + 12}{5} = \\frac{84}{5} = 16.80'] },
        { kind: 'verify', body: { en: 'M − P<ex> = 18 − 16.80 = 1.20 = R ✓.', ar: '‏M − P<ex> = 18 − 16.80 = 1.20 = R ✓.' } },
        { kind: 'interpret', body: { en: 'The investor’s 80,000 rights are worth 80,000 × 1.20 = $96,000 of discount value.', ar: 'حقوق المستثمر الـ80,000 تساوي 80,000 × 1.20 = 96,000 دولار من قيمة الخصم.' } }
      ]},

    { type: 'example', title: { en: 'Rights offering II: 15% holder, S = $20, M = $26 (Lec 4, slide 9)', ar: 'عرض حقوق II: مالك 15%، S = 20، M = 26 (المحاضرة 4، شريحة 9)' },
      context: { en: '1,000,000 old shares; 250,000 new.', ar: '‏1,000,000 سهم قديم؛ و250,000 جديد.' },
      source: { en: 'Lecture 4, slide 9, Problem 2', ar: 'المحاضرة 4، شريحة 9، مسألة 2' },
      steps: [
        { kind: 'calc', body: { en: '(a) 15% × 250,000 = 37,500 shares.', ar: '(أ) 15% × 250,000 = 37,500 سهم.' } },
        { kind: 'calc', body: { en: '(b) N = 4; R = (26 − 20) ÷ 5 = $1.20.', ar: '(ب) N = 4؛ R = (26 − 20) ÷ 5 = 1.20 دولار.' } },
        { kind: 'calc', body: { en: '(c) P<ex> = (26×4 + 20) ÷ 5 = 124 ÷ 5 = $24.80.', ar: '(ج) P<ex> = (26×4 + 20) ÷ 5 = 124 ÷ 5 = 24.80 دولار.' }, math: ['\\frac{26 \\times 4 + 20}{5} = \\frac{124}{5} = 24.80'] },
        { kind: 'verify', body: { en: '26 − 24.80 = 1.20 = R ✓ (same R as Problem 1 by coincidence of ratios).', ar: '‏26 − 24.80 = 1.20 = R ✓ (نفس R في مسألة 1 مصادفةً لتساوي النسب).' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Common vs preferred: who gets what, and when.', ar: 'العادي مقابل التفضيلي: من يستلم ماذا ومتى.' },
      table: {
        head: [ { en: 'Feature', ar: 'الخاصية' }, { en: 'Common stock', ar: 'السهم العادي' }, { en: 'Preferred stock', ar: 'السهم التفضيلي' } ],
        rows: [
          [ { en: 'Dividends', ar: 'التوزيعات' }, { en: 'Residual, after all obligations', ar: 'متبقية، بعد كل الالتزامات' }, { en: 'Priority over common; usually cumulative', ar: 'أولوية على العادي؛ عادة تراكمية' } ],
          [ { en: 'Liquidation', ar: 'التصفية' }, { en: 'Last in line', ar: 'الأخير في الصف' }, { en: 'Before common, after creditors', ar: 'قبل العادي وبعد الدائنين' } ],
          [ { en: 'Voting', ar: 'التصويت' }, { en: 'Typically one vote per share', ar: 'عادة صوت لكل سهم' }, { en: 'No voting rights', ar: 'بلا حق تصويت' } ],
          [ { en: 'Preemptive right', ar: 'حق الأولوية' }, { en: 'Yes (maintain percentage)', ar: 'نعم (الحفاظ على النسبة)' }, { en: 'Not stated for preferred', ar: 'غير منصوص للتفضيلي' } ],
          [ { en: 'Character', ar: 'الطابع' }, { en: 'Pure residual equity', ar: 'ملكية متبقية صرفة' }, { en: 'Hybrid: debt-like priority, equity-like life', ar: 'هجين: أولوية شبيهة بالدين وعمر شبيه بالملكية' } ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Using N instead of N + 1 in the rights-value denominator.', ar: 'استخدام N بدل N + 1 في مقام قيمة الحق.' },
        why: { en: 'The new share itself joins the value pool: N rights plus one new share.', ar: 'السهم الجديد نفسه ينضم إلى مجمع القيمة: N حقًا زائد سهم جديد واحد.' },
        correct: { en: 'R = (M − S) ÷ (N + 1) = 6 ÷ 5 = 1.20, not 6 ÷ 4.', ar: '‏R = (M − S) ÷ (N + 1) = 6 ÷ 5 = 1.20 لا 6 ÷ 4.' } },
      { wrong: { en: 'Computing P<ex> as a simple average of M and S.', ar: 'حساب P<ex> كمتوسط بسيط لـM وS.' },
        why: { en: 'The weights are N old shares vs ONE new share.', ar: 'الأوزان N سهم قديم مقابل سهم جديد واحد.' },
        correct: { en: 'P<ex> = (M×N + S) ÷ (N + 1).', ar: '‏P<ex> = (M×N + S) ÷ (N + 1).' } },
      { wrong: { en: 'Skipping the verification step.', ar: 'تخطي خطوة التحقق.' },
        why: { en: 'M − P<ex> = R catches denominator and weighting slips instantly.', ar: '‏M − P<ex> = R تلتقط أخطاء المقام والأوزان فورًا.' },
        correct: { en: 'Always close with 18 − 16.80 = 1.20-style check.', ar: 'أغلق دائمًا بتحقق من طراز 18 − 16.80 = 1.20.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'N (rights per new share) when 800,000 old shares meet 200,000 new?', ar: '‏N (حقوق لكل سهم جديد) عندما تلقى 800,000 سهم قديم 200,000 جديد؟' }, answer: 4, tol: 0, unit: 'rights', explain: { en: '800,000 ÷ 200,000 = 4.', ar: '‏800,000 ÷ 200,000 = 4.' } },
      { type: 'num', q: { en: 'M = $18, S = $12, N = 4. Value of one right (in $)?', ar: '‏M = 18 وS = 12 وN = 4. قيمة الحق الواحد (بالدولار)؟' }, answer: 1.2, tol: 0.01, unit: '$', explain: { en: '(18 − 12) ÷ 5 = 1.20.', ar: '‏(18 − 12) ÷ 5 = 1.20.' } },
      { type: 'num', q: { en: 'Theoretical ex-rights price in the same setting (in $, 2 dp)?', ar: 'سعر Ex-rights النظري في نفس المعطيات (بالدولار، خانتان)؟' }, answer: 16.8, tol: 0.01, unit: '$', explain: { en: '(18×4 + 12) ÷ 5 = 16.80.', ar: '‏(18×4 + 12) ÷ 5 = 16.80.' } },
      { type: 'tf', q: { en: 'Preferred shareholders normally vote on board elections.', ar: 'حملة التفضيلي يصوتون عادة في انتخابات المجلس.' }, answer: false, explain: { en: 'Slide 5: preferred lacks voting rights.', ar: 'شريحة 5: التفضيلي بلا حق تصويت.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Four common-stockholder rights', ar: 'حقوق المساهم العادي الأربعة' }, back: { en: 'Residual earnings, residual assets, voting, preemptive purchase.', ar: 'الأرباح المتبقية، الأصول المتبقية، التصويت، الشراء بالأولوية.' } },
      { front: { en: 'Three preferred features + one absence', ar: 'خصائص التفضيلي الثلاثة + غياب واحد' }, back: { en: 'Dividend preference (cumulative), liquidation preference — and no votes.', ar: 'أفضلية توزيعات (تراكمية) وأفضلية تصفية — وبلا تصويت.' } },
      { front: { en: 'Value of one right', ar: 'قيمة الحق الواحد' }, back: { en: 'R = (M − S) ÷ (N + 1).', ar: '‏R = (M − S) ÷ (N + 1).' } },
      { front: { en: 'Ex-rights price', ar: 'سعر Ex-rights' }, back: { en: 'P<ex> = (M×N + S) ÷ (N + 1); and M − P<ex> = R.', ar: '‏P<ex> = (M×N + S) ÷ (N + 1)؛ وM − P<ex> = R.' } },
      { front: { en: 'Preemptive allocation', ar: 'تخصيص الأولوية' }, back: { en: 'Ownership % × total new shares offered.', ar: '٪ الملكية × إجمالي الأسهم الجديدة المعروضة.' } }
    ]},

    { type: 'summary', points: [
      { en: 'Common = residual claims + votes + preemptive right; preferred = priorities without votes.', ar: 'العادي = حقوق متبقية + تصويت + أولوية؛ والتفضيلي = أفضليات بلا تصويت.' },
      { en: 'N = old ÷ new; R = (M − S) ÷ (N + 1).', ar: '‏N = قديم ÷ جديد؛ R = (M − S) ÷ (N + 1).' },
      { en: 'P<ex> = (M×N + S) ÷ (N + 1) and the checksum M − P<ex> = R.', ar: '‏P<ex> = (M×N + S) ÷ (N + 1) وبصمة التحقق M − P<ex> = R.' },
      { en: 'A rights offering sells discount to insiders first — dilution only if rights go unexercised.', ar: 'عرض الحقوق يبيع الخصم للداخليين أولًا — والتخفيف فقط إذا لم تُمارس الحقوق.' }
    ], canExplain: [
      { en: 'Why the denominator is N + 1.', ar: 'لماذا المقام N + 1.' },
      { en: 'Why the share price falls by exactly R on the ex-date.', ar: 'لماذا ينخفض سعر السهم بمقدار R تمامًا في تاريخ Ex.' },
      { en: 'Why cumulative preferred is debt-like.', ar: 'لماذا التفضيلي التراكمي شبيه بالدين.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L14 */
window.COURSE.lessons.push({
  id: 'l14', module: 'm4', minutes: 40,
  title: { en: 'Issuing Common Stock & Flotation Costs', ar: 'إصدار الأسهم العادية وتكاليف الإصدار' },
  subtitle: { en: 'IPO vs SEO, the seven issuance steps, and grossing up for the underwriting spread', ar: '‏IPO مقابل SEO، خطوات الإصدار السبع، وإجمالي المبلغ لتغطية عمولة الاكتتاب' },
  source: { en: 'Lecture 4, slides 10–15 (Chapter 7)', ar: 'المحاضرة 4، الشرائح 10–15 (الفصل 7)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Distinguish an IPO from a SEO.', ar: 'التمييز بين IPO وSEO.' },
      { en: 'Order the issuance steps from origination to listing.', ar: 'ترتيب خطوات الإصدار من النشأة إلى الإدراج.' },
      { en: 'Separate direct from indirect flotation costs.', ar: 'الفصل بين تكاليف الإصدار المباشرة وغير المباشرة.' },
      { en: 'Gross up a target net amount for a spread percentage and direct expenses.', ar: 'إجمالي مبلغ صافٍ مستهدف بنسبة العمولة والمصروفات المباشرة.' },
      { en: 'Convert gross proceeds into a share count at the offer price.', ar: 'تحويل إجمالي المتحصلات إلى عدد أسهم عند سعر العرض.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Underwriting spread', ar: 'هامش الاكتتاب' },
        def: { en: 'Offer price minus net proceeds to the issuer — the banker’s cut, in % or per share.', ar: 'سعر العرض ناقص صافي المتحصلات للجهة المصدرة — حصة المصرفي، نسبة أو لكل سهم.' },
        why: { en: 'It is the f in the gross-up formula of this lesson.', ar: 'وهو الـf في معادلة الإجمالي في هذا الدرس.' },
        example: { en: 'A 6% spread means only 94% of gross reaches the firm.', ar: 'هامش 6% يعني أن 94% فقط من الإجمالي يصل للشركة.' },
        link: 'l16' },
      { term: { en: 'Offer price', ar: 'سعر العرض' },
        def: { en: 'The price at which new shares are sold to investors.', ar: 'السعر الذي تُباع به الأسهم الجديدة للمستثمرين.' },
        why: { en: 'Shares = gross proceeds ÷ offer price.', ar: 'الأسهم = إجمالي المتحصلات ÷ سعر العرض.' },
        example: { en: '$54,042,553 ÷ $25 = 2,161,702 shares.', ar: '‏54,042,553 ÷ 25 = 2,161,702 سهمًا.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Going to the capital market is a production: a banker designs the issue (origination), lawyers and accountants build the file (due diligence, Form S-1), investors are courted (marketing), the price is struck (pricing), risk is assumed (underwriting), shares are placed (distribution), and trading begins (listing). Each stage adds cost.', ar: 'الخروج إلى سوق رأس المال إنتاج كامل: مصرفي يصمم الإصدار (النشأة)، ومحامون ومحاسبون يبنون الملف (العناية الواجبة، نموذج S-1)، ويُغازَل المستثمرون (التسويق)، ويُحدد السعر (التسعير)، ويُتحمل الخطر (الاكتتاب)، وتُوزع الأسهم (التوزيع)، ويبدأ التداول (الإدراج). وكل مرحلة تضيف تكلفة.' },
      { en: 'Flotation costs are the price tag: direct (spread, legal, accounting, printing) and indirect (management time, underpricing). Because the spread is a percentage of GROSS proceeds, raising a target NET amount requires grossing up: divide by (1 − f). Add direct expenses to the target before dividing.', ar: 'تكاليف الإصدار هي بطاقة السعر: مباشرة (هامش، قانونية، محاسبية، طباعة) وغير مباشرة (وقت الإدارة، التسعير الأقل من القيمة). ولأن الهامش نسبة من إجمالي المتحصلات، فإن جمع مبلغ صافٍ مستهدف يتطلب «الإجمالي»: اقسم على (1 − f)، وأضف المصروفات المباشرة إلى المستهدف قبل القسمة.' }
    ], analogy: { en: 'Shipping a gift: to deliver $50 of value after a 6% courier fee and $8 packing cost, you must pay (50 + 8) ÷ 0.94 upfront — the fee is charged on the total shipped, not on what arrives.', ar: 'شحن هدية: لتوصيل قيمة 50 دولارًا بعد رسوم سعي 6% وتكلفة تغليف 8 دولارات، يجب دفع (50 + 8) ÷ 0.94 مقدمًا — فالرسوم تُحتسب على إجمالي المشحون لا على ما يصل.' }, analogyLimit: { en: 'Real issuance also carries indirect costs (underpricing, management time) that no courier invoice shows.', ar: 'الإصدار الحقيقي يحمل أيضًا تكاليف غير مباشرة (تسعير أقل، وقت إدارة) لا تظهر في فاتورة أي ساعٍ.' } },

    { type: 'academic', paras: [
      { en: 'Two issue types (slide 10): the IPO is the first sale of shares to the public; a SEO is any later sale by an already-public company. The regulated process runs: origination → due diligence & documentation (S-1 filed with the SEC) → marketing → pricing → underwriting (firm commitment or best efforts) → distribution → listing (slides 10–11).', ar: 'نوعا الإصدار (شريحة 10): الـIPO هو أول بيع أسهم للجمهور؛ والـSEO أي بيع لاحق من شركة مدرجة بالفعل. والعملية المنظمة تسير: النشأة ← العناية الواجبة والتوثيق (يُودع نموذج S-1 لدى SEC) ← التسويق ← التسعير ← الاكتتاب (التزام ثابت أو أفضل الجهود) ← التوزيع ← الإدراج (شريحتا 10–11).' },
      { en: 'Flotation costs (slide 12): direct costs include the underwriting spread plus legal, accounting, printing and registration fees; indirect costs include management time and underpricing. As a percentage of proceeds they decline with issue size (economies of scale), so the firm’s objective is minimizing them while raising the desired net amount.', ar: 'تكاليف الإصدار (شريحة 12): المباشرة تشمل هامش الاكتتاب زائد الرسوم القانونية والمحاسبية والطباعة والتسجيل؛ وغير المباشرة تشمل وقت الإدارة والتسعير الأقل. وكنسبة من المتحصلات تنخفض مع كبر الإصدار (وفورات حجم)، لذا هدف الشركة تقليلها مع جمع الصافي المطلوب.' },
      { en: 'The gross-up (slide 13): X = (target net + direct costs) ÷ (1 − f), where f is the spread as a decimal; shares = X ÷ offer price. The division by (1 − f) is what makes the spread self-financing: f × X is exactly the fee deducted from X.', ar: 'الإجمالي (شريحة 13): ‏X = (الصافي المستهدف + التكاليف المباشرة) ÷ (1 − f)، حيث f الهامش كعدد عشري؛ والأسهم = X ÷ سعر العرض. والقسمة على (1 − f) هي ما يجعل الهامش يمول نفسه: f × X هي بالضبط الرسوم المخصومة من X.' }
    ], defs: [
      { term: { en: 'IPO (initial public offering)', ar: 'الطرح العام الأولي' }, def: { en: 'The first sale of a company’s shares to the public.', ar: 'أول بيع لأسهم الشركة للجمهور.' } },
      { term: { en: 'SEO (seasoned equity offering)', ar: 'طرح الأسهم المُتمرسة' }, def: { en: 'A subsequent public sale of new shares by an already-listed company.', ar: 'بيع عام لاحق لأسهم جديدة من شركة مدرجة بالفعل.' } },
      { term: { en: 'Flotation costs', ar: 'تكاليف الإصدار' }, def: { en: 'All costs of issuing new securities: direct fees plus indirect costs such as underpricing.', ar: 'كل تكاليف إصدار أوراق جديدة: رسوم مباشرة زائد تكاليف غير مباشرة كالتسعير الأقل.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Work backwards from what must land in the firm’s account: target net + direct bills = the amount that must survive the spread. Since the spread eats f of everything raised, divide by (1 − f) to find the gross. Then shares = gross ÷ offer price.', ar: 'اعمل عكسيًا مما يجب أن يستقر في حساب الشركة: الصافي المستهدف + الفواتير المباشرة = المبلغ الذي يجب أن ينجو من الهامش. ولأن الهامش يأكل f من كل ما يُجمع، اقسم على (1 − f) لتجد الإجمالي. ثم الأسهم = الإجمالي ÷ سعر العرض.' },
      { en: 'Sanity check: multiply your gross by f — that fee plus direct costs plus target net should equal the gross again.', ar: 'فحص سلامة: اضرب إجماليك في f — تلك الرسوم زائد التكاليف المباشرة زائد الصافي المستهدف يجب أن تساوي الإجمالي مجددًا.' }
    ], steps: [
      { en: 'Total to cover = target net + direct costs.', ar: 'الإجمالي المطلوب تغطيته = الصافي المستهدف + التكاليف المباشرة.' },
      { en: 'X = total ÷ (1 − f).', ar: '‏X = الإجمالي ÷ (1 − f).' },
      { en: 'Shares = X ÷ offer price (round up in practice).', ar: 'الأسهم = X ÷ سعر العرض (يُقرّب لأعلى عمليًا).' },
      { en: 'Check: X × f + direct + target = X.', ar: 'تحقق: X × f + مباشر + مستهدف = X.' }
    ], recap: { en: 'The spread is charged on gross, so net targets must be grossed up by 1 ÷ (1 − f) before converting to shares.', ar: 'الهامش يُحتسب على الإجمالي، لذا الأهداف الصافية تُجمَّل بـ1 ÷ (1 − f) قبل تحويلها أسهمًا.' } },

    { type: 'formula', id: 'f-grossup', tag: 'course',
      name: { en: 'Gross proceeds needed (flotation gross-up)', ar: 'إجمالي المتحصلات المطلوب (إجمالي تكاليف الإصدار)' },
      tex: 'X = \\frac{\\text{Target net} + \\text{Direct costs}}{1 - f}, \\qquad \\text{Shares} = \\frac{X}{\\text{Offer price}}',
      vars: [
        { sym: 'f', en: 'underwriting spread as a decimal (e.g. 6% = 0.06)', ar: 'هامش الاكتتاب كعدد عشري (مثل 6% = 0.06)' },
        { sym: 'X', en: 'gross proceeds to raise', ar: 'إجمالي المتحصلات المطلوب جمعها' }
      ],
      purpose: { en: 'Sizes the issue so the net amount actually arrives after fees.', ar: 'يحجم الإصدار بحيث يصل المبلغ الصافي فعليًا بعد الرسوم.' },
      assumptions: { en: 'Spread applies to gross proceeds; direct costs are fixed dollars.', ar: 'الهامش ينطبق على إجمالي المتحصلات؛ والتكاليف المباشرة مبالغ ثابتة.' },
      when: { en: 'Given a net target, direct expenses, spread % and offer price.', ar: 'عند وجود صافي مستهدف ومصروفات مباشرة و٪ هامش وسعر عرض.' },
      inputs: { en: 'Target, direct costs, f, offer price.', ar: 'المستهدف والتكاليف المباشرة وf وسعر العرض.' },
      cautions: { en: 'Add direct costs BEFORE dividing; dividing only the target understates X.', ar: 'أضف التكاليف المباشرة قبل القسمة؛ قسمة المستهدف وحده تقلل X.' },
      illustration: { en: '(50,000,000 + 800,000) ÷ 0.94 = $54,042,553; ÷ $25 = 2,161,702 shares.', ar: '‏(50,000,000 + 800,000) ÷ 0.94 = 54,042,553 دولارًا؛ ÷ 25 = 2,161,702 سهمًا.' },
      sensitivity: { en: 'X grows hyperbolically as f → 1; each extra point of spread costs more than the last.', ar: '‏X ينمو هيبربوليًا كلما اقتربت f من 1؛ وكل نقطة هامش إضافية تكلف أكثر من سابقتها.' },
      meaning: { en: 'The issue must pay for its own fees.', ar: 'الإصدار يجب أن يدفع رسومه بنفسه.' } },

    { type: 'example', title: { en: 'Net $50m with a 6% spread and $0.8m direct costs (Lec 4, slide 14)', ar: 'صافي 50 مليون بهامش 6% وتكاليف مباشرة 0.8 مليون (المحاضرة 4، شريحة 14)' },
      context: { en: 'Offer price $25 per share.', ar: 'سعر العرض 25 دولارًا للسهم.' },
      source: { en: 'Lecture 4, slide 14, Problem 1', ar: 'المحاضرة 4، شريحة 14، مسألة 1' },
      steps: [
        { kind: 'given', body: { en: 'Target net $50,000,000; direct $800,000; f = 6%; offer $25.', ar: 'صافي مستهدف 50,000,000؛ مباشر 800,000؛ f = 6%؛ عرض 25.' } },
        { kind: 'calc', body: { en: 'Cover = 50,800,000; X = 50,800,000 ÷ 0.94 = $54,042,553.', ar: 'التغطية = 50,800,000؛ X = 50,800,000 ÷ 0.94 = 54,042,553 دولارًا.' }, math: ['\\frac{50{,}800{,}000}{0.94} = 54{,}042{,}553'] },
        { kind: 'calc', body: { en: 'Shares = 54,042,553 ÷ 25 = 2,161,702 shares.', ar: 'الأسهم = 54,042,553 ÷ 25 = 2,161,702 سهمًا.' } },
        { kind: 'verify', body: { en: 'Fee = 6% × 54,042,553 ≈ 3,242,553; 54,042,553 − 3,242,553 − 800,000 = 50,000,000 ✓.', ar: 'الرسوم = 6% × 54,042,553 ≈ 3,242,553؛ و54,042,553 − 3,242,553 − 800,000 = 50,000,000 ✓.' } }
      ]},

    { type: 'example', title: { en: 'Net $120m with a 7% spread and $1.5m direct costs (Lec 4, slide 15)', ar: 'صافي 120 مليون بهامش 7% وتكاليف 1.5 مليون (المحاضرة 4، شريحة 15)' },
      context: { en: 'Offer price $40 per share.', ar: 'سعر العرض 40 دولارًا للسهم.' },
      source: { en: 'Lecture 4, slide 15, Problem 2', ar: 'المحاضرة 4، شريحة 15، مسألة 2' },
      steps: [
        { kind: 'calc', body: { en: 'Cover = 121,500,000; X = 121,500,000 ÷ 0.93 = $130,645,161.', ar: 'التغطية = 121,500,000؛ X = 121,500,000 ÷ 0.93 = 130,645,161 دولارًا.' }, math: ['\\frac{121{,}500{,}000}{0.93} = 130{,}645{,}161'] },
        { kind: 'calc', body: { en: 'Shares = 130,645,161 ÷ 40 = 3,266,129 shares.', ar: 'الأسهم = 130,645,161 ÷ 40 = 3,266,129 سهمًا.' } },
        { kind: 'interpret', body: { en: 'The 7% spread alone adds ≈ $9.1m to what investors pay versus what the firm keeps.', ar: 'هامش 7% وحده يضيف نحو 9.1 مليون دولار لما يدفعه المستثمرون مقابل ما تحتفظ به الشركة.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'The issuance process in order (Lec 4 slides 10–11).', ar: 'عملية الإصدار بالترتيب (المحاضرة 4 شريحتا 10–11).' },
      table: {
        head: [ { en: 'Step', ar: 'الخطوة' }, { en: 'What happens', ar: 'ما يحدث' } ],
        rows: [
          [ { en: '1 Origination', ar: '1 النشأة' }, { en: 'Banker advises type, size, timing, pricing.', ar: 'المصرفي يستشير في النوع والحجم والتوقيت والتسعير.' } ],
          [ { en: '2 Due diligence & docs', ar: '2 العناية الواجبة والتوثيق' }, { en: 'Legal/accounting prep; Form S-1 filed with SEC.', ar: 'تجهيز قانوني/محاسبي؛ إيداع نموذج S-1 لدى SEC.' } ],
          [ { en: '3 Marketing', ar: '3 التسويق' }, { en: 'Gauge institutional demand.', ar: 'قياس الطلب المؤسسي.' } ],
          [ { en: '4 Pricing', ar: '4 التسعير' }, { en: 'Final offer price from demand & conditions.', ar: 'سعر العرض النهائي من الطلب والظروف.' } ],
          [ { en: '5 Underwriting', ar: '5 الاكتتاب' }, { en: 'Banker buys the issue or sells best-efforts.', ar: 'المصرفي يشتري الإصدار أو يبيع بأفضل الجهود.' } ],
          [ { en: '6 Distribution', ar: '6 التوزيع' }, { en: 'Shares placed with institutions and retail.', ar: 'توزيع الأسهم على المؤسسات والأفراد.' } ],
          [ { en: '7 Listing', ar: '7 الإدراج' }, { en: 'Trading begins (NYSE, Nasdaq).', ar: 'بدء التداول (NYSE، Nasdaq).' } ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Dividing only the target net by (1 − f), forgetting direct costs.', ar: 'قسمة الصافي المستهدف وحده على (1 − f) ونسيان التكاليف المباشرة.' },
        why: { en: 'Direct bills must also be covered by gross proceeds.', ar: 'الفواتير المباشرة يجب أن تغطيها إجمالي المتحصلات أيضًا.' },
        correct: { en: 'X = (50,000,000 + 800,000) ÷ 0.94, not 50,000,000 ÷ 0.94.', ar: '‏X = (50,000,000 + 800,000) ÷ 0.94 لا 50,000,000 ÷ 0.94.' } },
      { wrong: { en: 'Treating the spread as a fee on the NET amount.', ar: 'اعتبار الهامش رسومًا على المبلغ الصافي.' },
        why: { en: 'The banker’s percentage applies to gross proceeds.', ar: 'نسبة المصرفي تنطبق على إجمالي المتحصلات.' },
        correct: { en: 'Fee = f × X where X is the gross you solve for.', ar: 'الرسوم = f × X حيث X هو الإجمالي الذي تحله.' } },
      { wrong: { en: 'Rounding shares down and coming up short.', ar: 'تقريب الأسهم لأسفل والوقوع دون المستهدف.' },
        why: { en: 'A fraction of a share short leaves the net target unmet.', ar: 'كسر سهم ناقص يترك الصافي المستهدف غير محقق.' },
        correct: { en: 'In practice round UP to the next whole share.', ar: 'عمليًا قرّب لأعلى إلى السهم الصحيح التالي.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'Gross proceeds needed to net $50,800,000 with a 6% spread (in $, nearest dollar)?', ar: 'إجمالي المتحصلات اللازم لصافي 50,800,000 دولار بهامش 6% (بالدولار، لأقرب دولار)؟' }, answer: 54042553, tol: 2, unit: '$', explain: { en: '50,800,000 ÷ 0.94 = 54,042,553.', ar: '‏50,800,000 ÷ 0.94 = 54,042,553.' } },
      { type: 'num', q: { en: 'Shares to issue at $25 offer price for that gross (nearest share)?', ar: 'أسهم تُصدر بسعر عرض 25 دولارًا لذلك الإجمالي (لأقرب سهم)؟' }, answer: 2161702, tol: 1, unit: 'shares', explain: { en: '54,042,553 ÷ 25 = 2,161,702.', ar: '‏54,042,553 ÷ 25 = 2,161,702.' } },
      { type: 'mcq', q: { en: 'Which is an INDIRECT flotation cost?', ar: 'أيها تكلفة إصدار غير مباشرة؟' }, options: [ { en: 'Underpricing (money left on the table)', ar: 'التسعير الأقل (مال متروك على الطاولة)' }, { en: 'Legal fees', ar: 'الرسوم القانونية' }, { en: 'Underwriting spread', ar: 'هامش الاكتتاب' }, { en: 'Printing & registration', ar: 'الطباعة والتسجيل' } ], answer: 0, explain: { en: 'Slide 12 lists underpricing and management time as indirect.', ar: 'شريحة 12 تعد التسعير الأقل ووقت الإدارة غير مباشرة.' } },
      { type: 'tf', q: { en: 'A SEO is the first sale of shares to the public.', ar: '‏SEO هو أول بيع أسهم للجمهور.' }, answer: false, explain: { en: 'That is the IPO; a SEO comes later.', ar: 'ذلك هو IPO؛ أما SEO فيأتي لاحقًا.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'IPO vs SEO', ar: '‏IPO مقابل SEO' }, back: { en: 'First public sale vs any later sale by a listed firm.', ar: 'أول بيع عام مقابل أي بيع لاحق من شركة مدرجة.' } },
      { front: { en: 'Direct flotation costs', ar: 'تكاليف الإصدار المباشرة' }, back: { en: 'Spread + legal + accounting + printing & registration.', ar: 'الهامش + قانونية + محاسبية + طباعة وتسجيل.' } },
      { front: { en: 'Gross-up formula', ar: 'معادلة الإجمالي' }, back: { en: 'X = (target net + direct) ÷ (1 − f).', ar: '‏X = (الصافي المستهدف + المباشر) ÷ (1 − f).' } },
      { front: { en: 'Shares to issue', ar: 'الأسهم المُصدرة' }, back: { en: 'X ÷ offer price.', ar: '‏X ÷ سعر العرض.' } },
      { front: { en: 'Economies of scale in flotation', ar: 'وفورات الحجم في الإصدار' }, back: { en: 'Cost % of proceeds declines as issue size grows.', ar: 'نسبة التكلفة من المتحصلات تنخفض مع كبر الإصدار.' } }
    ]},

    { type: 'summary', points: [
      { en: 'IPO first, SEO later; seven regulated steps from origination to listing.', ar: '‏IPO أولًا وSEO لاحقًا؛ وسبع خطوات منظمة من النشأة إلى الإدراج.' },
      { en: 'Flotation = direct fees + indirect costs (incl. underpricing).', ar: 'تكاليف الإصدار = رسوم مباشرة + تكاليف غير مباشرة (تشمل التسعير الأقل).' },
      { en: 'X = (target + direct) ÷ (1 − f); shares = X ÷ offer price.', ar: '‏X = (المستهدف + المباشر) ÷ (1 − f)؛ والأسهم = X ÷ سعر العرض.' },
      { en: 'The spread self-finances: f × X is exactly the fee.', ar: 'الهامش يمول نفسه: f × X هي بالضبط الرسوم.' }
    ], canExplain: [
      { en: 'Why dividing by (1 − f) is necessary rather than adding f × target.', ar: 'لماذا القسمة على (1 − f) لازمة بدل إضافة f × المستهدف.' },
      { en: 'Why underpricing is a cost to the issuer even though no invoice exists.', ar: 'لماذا التسعير الأقل تكلفة على المصدر رغم غياب فاتورة.' },
      { en: 'Why big issues pay smaller flotation percentages.', ar: 'لماذا الإصدارات الكبيرة تدفع نسب إصدار أصغر.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L15 */
window.COURSE.lessons.push({
  id: 'l15', module: 'm4', minutes: 40,
  title: { en: 'Venture Capital & IPO Underpricing', ar: 'رأس المال الجريء والتسعير الأقل في IPO' },
  subtitle: { en: 'Staged VC financing, the pros and cons of going public, first-day returns and money left on the table', ar: 'تمويل VC المرحلي، وإيجابيات وسلبيات الطرح العام، وعائد اليوم الأول والمال المتروك على الطاولة' },
  source: { en: 'Lecture 4, slides 16–21 (Chapter 7)', ar: 'المحاضرة 4، الشرائح 16–21 (الفصل 7)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Describe VC staging, control terms and exit routes.', ar: 'وصف مراحل VC وشروط السيطرة ومسارات الخروج.' },
      { en: 'Weigh the advantages and disadvantages of going public.', ar: 'وزن إيجابيات وسلبيات الطرح العام.' },
      { en: 'Compute the first-day return (underpricing) of an IPO.', ar: 'حساب عائد اليوم الأول (التسعير الأقل) لطرح IPO.' },
      { en: 'Compute money left on the table and say who gains it.', ar: 'حساب المال المتروك على الطاولة وبيان من يكسبه.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Offer price P<0>', ar: 'سعر العرض P<0>' },
        def: { en: 'The price IPO shares are sold at to initial investors.', ar: 'السعر الذي تُباع به أسهم IPO للمستثمرين الأوليين.' },
        why: { en: 'It is the denominator of the first-day return.', ar: 'وهو مقام عائد اليوم الأول.' },
        example: { en: '$30 offer closing at $42 ⇒ 40% first-day return.', ar: 'عرض 30 دولارًا يغلق عند 42 ⇒ عائد يوم أول 40%.' } },
      { term: { en: 'First-day closing price P<1>', ar: 'سعر إغلاق اليوم الأول P<1>' },
        def: { en: 'The market’s first verdict on the new stock.', ar: 'أول حكم من السوق على السهم الجديد.' },
        why: { en: 'P<1> − P<0> is the underpricing per share.', ar: '‏P<1> − P<0> هو التسعير الأقل للسهم.' },
        example: { en: '$42 − $30 = $12 per share left on the table.', ar: '‏42 − 30 = 12 دولارًا للسهم متروكة على الطاولة.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Before any IPO there is usually venture capital: patient, staged money (seed → early → expansion → mezzanine) that buys large stakes, board seats and discipline in exchange for funding companies too young and too risky for public markets. The IPO is the exit door where those stakes meet public money.', ar: 'قبل أي IPO يوجد عادة رأس مال جريء: مال صبور مرحلي (بذرة ← مبكر ← توسع ← ميزانين) يشتري حصصًا كبيرة ومقاعد مجلس وانضباطًا مقابل تمويل شركات أصغر وأخطر من أن تدخل الأسواق العامة. والـIPO هو باب الخروج حيث تلتقي تلك الحصص بالمال العام.' },
      { en: 'Going public buys capital, visibility, liquidity and acquisition currency — and pays with fees, disclosure, lost privacy and short-term pressure. One price tag hides in plain sight: underpricing. When the offer is $30 and the market closes at $42, the firm has effectively donated $12 per share to the buyers of the issue — the “money left on the table”.', ar: 'الطرح العام يشتري رأس مال ووضوحًا وسيولة وعملة استحواذ — ويدفع رسومًا وإفصاحًا وفقدان خصوصية وضغط أجل قصير. وبطاقة سعر واحدة تختبئ في واضح النهار: التسعير الأقل. عندما يكون العرض 30 دولارًا والسوق يغلق عند 42، فالشركة فعليًا وهبت 12 دولارًا للسهم لمشترى الإصدار — «المال المتروك على الطاولة».' }
    ], analogy: { en: 'A grand-opening sale: the shop prices goods below what the first-day crowd will pay, creating a queue and buzz — the difference is gifted to early buyers.', ar: 'تخفيض افتتاح كبير: المتجر يسعّر البضاعة دون ما سيدفعه جمهور اليوم الأول، فيصنع طابورًا وضجة — والفرق يُوهب للمشترين المبكرين.' }, analogyLimit: { en: 'IPO underpricing also compensates investors for information risk and helps bankers place issues — not pure marketing.', ar: 'التسعير الأقل في IPO يعوض المستثمرين أيضًا عن مخاطر المعلومات ويساعد المصرفيين على توزيع الإصدار — ليس تسويقًا محضًا.' } },

    { type: 'academic', paras: [
      { en: 'VC practice (slide 16): invest in stages (seed, early, expansion, mezzanine) to limit risk and keep management disciplined; demand significant equity and board representation; add strategic value (advice, network, recruitment); exit via IPO or acquisition.', ar: 'ممارسة VC (شريحة 16): الاستثمار على مراحل (بذرة، مبكر، توسع، ميزانين) للحد من المخاطر وإبقاء الإدارة منضبطة؛ وطلب ملكية كبيرة وتمثيل في المجلس؛ وإضافة قيمة استراتيجية (نصح وشبكة وتوظيف)؛ والخروج عبر IPO أو استحواذ.' },
      { en: 'Going public (slide 17): advantages — large capital access, visibility/credibility, liquidity for founders and early investors, stock as acquisition currency; disadvantages — significant direct costs, ongoing disclosure and reporting, loss of privacy and control, short-term earnings pressure.', ar: 'الطرح العام (شريحة 17): الإيجابيات — وصول لرأسمال كبير، ووضوح/مصداقية، وسيولة للمؤسسين والمستثمرين الأوائل، وسهم كعملة استحواذ؛ والسلبيات — تكاليف مباشرة كبيرة، وإفصاح وتقرير مستمران، وفقدان خصوصية وسيطرة، وضغط أرباح أجل قصير.' },
      { en: 'Underpricing (slides 18–19): the offer price is set below the first-day close; first-day return AR = (P<1> − P<0>) ÷ P<0>; money left on the table TC = (P<1> − P<0>) × shares offered — a wealth transfer from original shareholders to new investors, and a major indirect flotation cost.', ar: 'التسعير الأقل (شريحتا 18–19): يُحدد سعر العرض دون إغلاق اليوم الأول؛ وعائد اليوم الأول AR = (P<1> − P<0>) ÷ P<0>؛ والمال المتروك على الطاولة TC = (P<1> − P<0>) × الأسهم المعروضة — نقل ثروة من المساهمين الأصليين إلى المستثمرين الجدد، وتكلفة إصدار غير مباشرة كبرى.' }
    ], defs: [
      { term: { en: 'Venture capital', ar: 'رأس المال الجريء' }, def: { en: 'Staged equity financing for early-stage, high-risk, high-potential firms.', ar: 'تمويل ملكي مرحلي لشركات مبكرة عالية المخاطر عالية الإمكانات.' } },
      { term: { en: 'IPO underpricing', ar: 'التسعير الأقل في IPO' }, def: { en: 'Setting the offer price below the first-day market price.', ar: 'تحديد سعر العرض دون سعر السوق في اليوم الأول.' } },
      { term: { en: 'Money left on the table', ar: 'المال المتروك على الطاولة' }, def: { en: '(P<1> − P<0>) × shares offered: value transferred to IPO buyers.', ar: '‏(P<1> − P<0>) × الأسهم المعروضة: قيمة تنتقل إلى مشترى IPO.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Two numbers tell the IPO story: the percentage jump on day one (underpricing) and the dollar value of that jump across all offered shares (money left on the table).', ar: 'رقمان يرويان قصة IPO: نسبة القفزة في اليوم الأول (التسعير الأقل)، والقيمة الدولارية لتلك القفزة عبر كل الأسهم المعروضة (المال المتروك).' },
      { en: 'Compute the per-share gap once (P<1> − P<0>), then use it twice: divide by P<0> for the percentage, multiply by shares for the dollars.', ar: 'احسب الفجوة للسهم مرة واحدة (P<1> − P<0>) ثم استخدمها مرتين: اقسم على P<0> للنسبة، واضرب في الأسهم للدولارات.' }
    ], steps: [
      { en: 'Gap = P<1> − P<0>.', ar: 'الفجوة = P<1> − P<0>.' },
      { en: 'AR = gap ÷ P<0> (first-day return).', ar: '‏AR = الفجوة ÷ P<0> (عائد اليوم الأول).' },
      { en: 'TC = gap × shares offered.', ar: '‏TC = الفجوة × الأسهم المعروضة.' },
      { en: 'Interpret: TC is wealth transferred to IPO buyers.', ar: 'فسّر: TC ثروة منتقلة إلى مشترى IPO.' }
    ], recap: { en: 'Underpricing is a deliberate-looking discount whose dollar cost equals the first-day gap times the issue size.', ar: 'التسعير الأقل خصم تبدو فيه العمدية، وتكلفته الدولارية تساوي فجوة اليوم الأول في حجم الإصدار.' } },

    { type: 'formula', id: 'f-underpricing', tag: 'course',
      name: { en: 'First-day return & money left on the table', ar: 'عائد اليوم الأول والمال المتروك على الطاولة' },
      tex: 'AR = \\frac{P_{1} - P_{0}}{P_{0}}, \\qquad TC = (P_{1} - P_{0}) \\times \\text{Shares offered}',
      vars: [
        { sym: 'P_{0}', en: 'IPO offer price', ar: 'سعر عرض IPO' },
        { sym: 'P_{1}', en: 'first-day closing price', ar: 'سعر إغلاق اليوم الأول' }
      ],
      purpose: { en: 'Measures the discount given to IPO investors in % and in $.', ar: 'يقيس الخصم المعطى لمستثمري IPO نسبة ودولارًا.' },
      assumptions: { en: 'First-day close is the fair market verdict.', ar: 'إغلاق اليوم الأول هو حكم السوق العادل.' },
      when: { en: 'Given offer price, first-day close and issue size.', ar: 'عند وجود سعر العرض وإغلاق اليوم الأول وحجم الإصدار.' },
      inputs: { en: 'P<0>, P<1>, shares.', ar: '‏P<0> وP<1> والأسهم.' },
      cautions: { en: 'TC uses OFFERED shares, not outstanding shares.', ar: '‏TC يستخدم الأسهم المعروضة لا القائمة.' },
      illustration: { en: '(42 − 30) ÷ 30 = 40%; TC = 12 × 10,000,000 = $120,000,000.', ar: '‏(42 − 30) ÷ 30 = 40%؛ TC = 12 × 10,000,000 = 120,000,000 دولار.' },
      sensitivity: { en: 'TC scales linearly with both the gap and the issue size.', ar: '‏TC يتدرج خطيًا مع الفجوة وحجم الإصدار معًا.' },
      meaning: { en: 'The indirect flotation cost original shareholders pay for a successful debut.', ar: 'تكلفة الإصدار غير المباشرة التي يدفعها الم الآصليون مقابل افتتاح ناجح.' } },

    { type: 'example', title: { en: '10m shares at $30 close at $42 (Lec 4, slide 20)', ar: '‏10 ملايين سهم بسعر 30 تغلق عند 42 (المحاضرة 4، شريحة 20)' },
      context: { en: 'A hot debut.', ar: 'افتتاح ساخن.' },
      source: { en: 'Lecture 4, slide 20, Problem 1', ar: 'المحاضرة 4، شريحة 20، مسألة 1' },
      steps: [
        { kind: 'calc', body: { en: 'AR = (42 − 30) ÷ 30 = 40%.', ar: '‏AR = (42 − 30) ÷ 30 = 40%.' }, math: ['\\frac{42 - 30}{30} = 0.40'] },
        { kind: 'calc', body: { en: 'TC = 12 × 10,000,000 = $120,000,000.', ar: '‏TC = 12 × 10,000,000 = 120,000,000 دولار.' } },
        { kind: 'interpret', body: { en: 'Original shareholders funded a $120m gift to the IPO buyers.', ar: 'المساهمون الأصليون مولوا هدية بقيمة 120 مليون دولار لمشترى IPO.' } }
      ]},

    { type: 'example', title: { en: '5m shares at $18 close at $22.50 (Lec 4, slide 21)', ar: '‏5 ملايين سهم بسعر 18 تغلق عند 22.50 (المحاضرة 4، شريحة 21)' },
      context: { en: 'A milder debut.', ar: 'افتتاح ألطف.' },
      source: { en: 'Lecture 4, slide 21, Problem 2', ar: 'المحاضرة 4، شريحة 21، مسألة 2' },
      steps: [
        { kind: 'calc', body: { en: 'AR = 4.50 ÷ 18 = 25%.', ar: '‏AR = 4.50 ÷ 18 = 25%.' }, math: ['\\frac{22.50 - 18}{18} = 0.25'] },
        { kind: 'calc', body: { en: 'TC = 4.50 × 5,000,000 = $22,500,000.', ar: '‏TC = 4.50 × 5,000,000 = 22,500,000 دولار.' } },
        { kind: 'verify', body: { en: '25% of the $90m raised (18 × 5m) is $22.5m — consistent.', ar: '‏25% من المجموعة 90 مليونًا (18 × 5م) هي 22.5 مليون — متسق.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Going public: the trade-off sheet (Lec 4 slide 17).', ar: 'الطرح العام: ورقة المقايضة (المحاضرة 4 شريحة 17).' },
      table: {
        head: [ { en: 'Advantages', ar: 'الإيجابيات' }, { en: 'Disadvantages', ar: 'السلبيات' } ],
        rows: [
          [ { en: 'Large capital access for growth', ar: 'وصول لرأسمال كبير للنمو' }, { en: 'Significant direct costs (fees, legal, accounting)', ar: 'تكاليف مباشرة كبيرة (رسوم وقانونية ومحاسبية)' } ],
          [ { en: 'Visibility & credibility', ar: 'وضوح ومصداقية' }, { en: 'Ongoing disclosure & reporting', ar: 'إفصاح وتقرير مستمران' } ],
          [ { en: 'Liquidity for founders & early investors', ar: 'سيولة للمؤسسين والمستثمرين الأوائل' }, { en: 'Loss of privacy and control', ar: 'فقدان خصوصية وسيطرة' } ],
          [ { en: 'Stock usable as acquisition currency', ar: 'السهم عملة استحواذ قابلة للاستخدام' }, { en: 'Short-term earnings pressure', ar: 'ضغط أرباح الأجل القصير' } ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Dividing the gap by P<1> instead of P<0>.', ar: 'قسمة الفجوة على P<1> بدل P<0>.' },
        why: { en: 'Returns are always measured on the amount invested (the offer price).', ar: 'العوائد تُقاس دائمًا على المبلغ المستثمر (سعر العرض).' },
        correct: { en: '12 ÷ 30 = 40%, not 12 ÷ 42 ≈ 28.6%.', ar: '‏12 ÷ 30 = 40% لا 12 ÷ 42 ≈ 28.6%.' } },
      { wrong: { en: 'Multiplying the gap by total outstanding shares.', ar: 'ضرب الفجوة في إجمالي الأسهم القائمة.' },
        why: { en: 'Only the OFFERED shares were sold at the discount.', ar: 'فقط الأسهم المعروضة بيعت بالخصم.' },
        correct: { en: 'TC = gap × shares offered (10,000,000 in Problem 1).', ar: '‏TC = الفجوة × الأسهم المعروضة (10,000,000 في مسألة 1).' } },
      { wrong: { en: 'Calling underpricing a cost paid to the underwriter.', ar: 'اعتبار التسعير الأقل تكلفة تُدفع لمدير الاكتتاب.' },
        why: { en: 'It is transferred to the investors who buy the issue, not to the banker.', ar: 'تنتقل إلى المستثمرين الذين يشترون الإصدار لا إلى المصرفي.' },
        correct: { en: 'Banker’s pay is the spread (next lesson); underpricing is the buyers’ gain.', ar: 'أجر المصرفي هو الهامش (الدرس التالي)؛ والتسعير الأقل مكسب المشترين.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'Offer $30, first-day close $42. First-day return (in %)?', ar: 'عرض 30 وإغلاق يوم أول 42. عائد اليوم الأول (٪)؟' }, answer: 40, tol: 0.5, unit: '%', explain: { en: '12 ÷ 30 = 40%.', ar: '‏12 ÷ 30 = 40%.' } },
      { type: 'num', q: { en: 'Money left on the table for 10,000,000 offered shares (in $m)?', ar: 'المال المتروك على الطاولة لـ10,000,000 سهم معروض (بالمليون دولار)؟' }, answer: 120, tol: 0.5, unit: 'm', explain: { en: '12 × 10m = $120m.', ar: '‏12 × 10م = 120 مليون دولار.' } },
      { type: 'mcq', q: { en: 'VC firms typically invest in stages primarily to:', ar: 'شركات VC تستثمر على مراحل أساسًا من أجل:' }, options: [ { en: 'Mitigate risk and discipline management', ar: 'تخفيف المخاطر وتأديب الإدارة' }, { en: 'Avoid board seats', ar: 'تجنب مقاعد المجلس' }, { en: 'Skip the exit decision', ar: 'تخطي قرار الخروج' }, { en: 'Reduce their equity stake', ar: 'خفض حصة ملكيتها' } ], answer: 0, explain: { en: 'Slide 16: staging limits risk and keeps discipline.', ar: 'شريحة 16: الترحيل يحد المخاطر ويُبقي الانضباط.' } },
      { type: 'tf', q: { en: 'Money left on the table is a transfer to the issuing firm’s original shareholders.', ar: 'المال المتروك على الطاولة نقل إلى المساهمين الأصليين للشركة المصدرة.' }, answer: false, explain: { en: 'It transfers FROM original shareholders TO new investors.', ar: 'ينتقل من المساهمين الأصليين إلى المستثمرين الجدد.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'VC stages', ar: 'مراحل VC' }, back: { en: 'Seed → early → expansion → mezzanine; exit via IPO or acquisition.', ar: 'بذرة ← مبكر ← توسع ← ميزانين؛ والخروج عبر IPO أو استحواذ.' } },
      { front: { en: 'First-day return', ar: 'عائد اليوم الأول' }, back: { en: 'AR = (P<1> − P<0>) ÷ P<0>.', ar: '‏AR = (P<1> − P<0>) ÷ P<0>.' } },
      { front: { en: 'Money left on the table', ar: 'المال المتروك على الطاولة' }, back: { en: '(P<1> − P<0>) × shares offered.', ar: '‏(P<1> − P<0>) × الأسهم المعروضة.' } },
      { front: { en: 'Two IPO disadvantages of control', ar: 'سلبيتا سيطرة في IPO' }, back: { en: 'Loss of privacy and loss of control; plus disclosure burden.', ar: 'فقدان خصوصية وفقدان سيطرة؛ زائد عبء الإفصاح.' } },
      { front: { en: 'Who gains underpricing?', ar: 'من يكسب التسعير الأقل؟' }, back: { en: 'The investors who receive the offered shares.', ar: 'المستثمرون الذين يستلمون الأسهم المعروضة.' } }
    ]},

    { type: 'summary', points: [
      { en: 'VC = staged equity with control and exit logic.', ar: '‏VC = ملكية مرحلية بمنطق سيطرة وخروج.' },
      { en: 'Going public trades costs and disclosure for capital, liquidity and currency.', ar: 'الطرح العام يقايض تكاليف وإفصاحًا برأسمال وسيولة وعملة.' },
      { en: 'AR = (P<1> − P<0>) ÷ P<0>; TC = (P<1> − P<0>) × offered shares.', ar: '‏AR = (P<1> − P<0>) ÷ P<0>؛ وTC = (P<1> − P<0>) × الأسهم المعروضة.' },
      { en: 'Underpricing is an indirect flotation cost borne by original owners.', ar: 'التسعير الأقل تكلفة إصدار غير مباشرة يتحملها المالكون الأصليون.' }
    ], canExplain: [
      { en: 'Why issuers tolerate leaving money on the table.', ar: 'لماذا يتسامح المصدرون مع ترك مال على الطاولة.' },
      { en: 'Why VC money arrives in tranches.', ar: 'لماذا يصل مال VC على دفعات.' },
      { en: 'Why the first-day return uses P<0> as base.', ar: 'لماذا يستخدم عائد اليوم الأول P<0> أساسًا.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L16 */
window.COURSE.lessons.push({
  id: 'l16', module: 'm4', minutes: 45,
  title: { en: 'Investment Bankers, Spreads & Syndicates', ar: 'المصارف الاستثمارية وهوامش الاكتتاب والمجمعات' },
  subtitle: { en: 'Underwriting functions and agreements, the three spread components, and who earns what in a syndicate', ar: 'وظائف الاكتتاب واتفاقياته، ومكونات الهامش الثلاثة، ومن يكسب ماذا داخل المجمع' },
  source: { en: 'Lecture 4, slides 22–31 (Chapter 7)', ar: 'المحاضرة 4، الشرائح 22–31 (الفصل 7)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'List the banker’s four core functions.', ar: 'سرد وظائف المصرفي الأربع الأساسية.' },
      { en: 'Contrast firm-commitment and best-efforts underwriting.', ar: 'مقارنة الاكتتاب بالالتزام الثابت وأفضل الجهود.' },
      { en: 'Decompose the spread into management fee, underwriting fee and selling concession.', ar: 'تفكيك الهامش إلى رسم إدارة ورسم اكتتاب وعمولة بيع.' },
      { en: 'Compute a syndicate member’s, lead’s and selling-group member’s compensation.', ar: 'حساب تعويض عضو المجمع والقائد وعضو مجموعة البيع.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Offer price & net proceeds', ar: 'سعر العرض وصافي المتحصلات' },
        def: { en: 'What the public pays vs what the issuer keeps per share.', ar: 'ما يدفعه الجمهور مقابل ما تحتفظ به المصدرة لكل سهم.' },
        why: { en: 'Their difference is the spread this lesson divides up.', ar: 'فرقهما هو الهامش الذي يقسمه هذا الدرس.' },
        example: { en: '$50 − $46.50 = $3.50 spread.', ar: '‏50 − 46.50 = 3.50 دولار هامشًا.' },
        link: 'l14' },
      { term: { en: 'Underwriting risk', ar: 'مخاطر الاكتتاب' },
        def: { en: 'The risk that shares fail to sell at the expected price.', ar: 'مخاطر ألا تُباع الأسهم بالسعر المتوقع.' },
        why: { en: 'Who bears it distinguishes firm commitment from best efforts — and pays the underwriting fee.', ar: 'من يتحملها يميز الالتزام الثابت عن أفضل الجهود — ويدفع رسم الاكتتاب.' },
        example: { en: 'Selling-group members bear none, so they earn only the concession.', ar: 'أعضاء مجموعة البيع لا يتحملونها لذا يكسبون العمولة فقط.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'The investment banker is the market’s middleman: designer (origination), risk-taker (underwriting), seller (distribution) and adviser. The price of this service is the spread — the wedge between what the public pays and what the issuer receives.', ar: 'المصرفي الاستثماري هو وسيط السوق: مصمم (نشأة)، ومتحمل مخاطرة (اكتتاب)، وبائع (توزيع)، ومستشار. وثمن هذه الخدمة هو الهامش — الإسفين بين ما يدفعه الجمهور وما تستلمه المصدرة.' },
      { en: 'For big issues no single bank wants the whole risk, so a syndicate forms under a lead manager; around it a selling group of broker-dealers pushes shares without underwriting any. The spread is then sliced by function: management fee to the lead, underwriting fee to risk-bearers, selling concession to whoever actually places shares — which is why each member’s pay depends on what it committed AND what it sold.', ar: 'في الإصدارات الكبيرة لا يريد بنك واحد المخاطرة كلها، فيتشكل مجمع تحت قائد؛ وحوله مجموعة بيع من وسطاء تدفع الأسهم دون اكتتاب أي منها. ثم يُشرّح الهامش حسب الوظيفة: رسم إدارة للقائد، ورسم اكتتاب لمتحملي المخاطر، وعمولة بيع لمن يوزع الأسهم فعليًا — ولهذا يعتمد أجر كل عضو على ما التزم به وما باعه معًا.' }
    ], analogy: { en: 'A concert promoter: the lead promoter designs the show and hires co-promoters who guarantee ticket blocks (underwriting risk), plus ticket booths (selling group) paid per ticket sold. The margin between ticket price and what the artist receives is split among them by role.', ar: 'منظم حفلات: المنظم القائد يصمم العرض ويستأجر منظمين مشاركين يضمنون كتل تذاكر (مخاطر اكتتاب)، زائد أكشاك بيع (مجموعة بيع) تُدفع لكل تذكرة مباعة. والهامش بين سعر التذكرة وما يستلمه الفنان يُقسم بينهم حسب الدور.' }, analogyLimit: { en: 'Unlike booths, selling-group members are regulated broker-dealers and the spread is disclosed in the prospectus.', ar: 'بخلاف الأكشاك، أعضاء مجموعة البيع وسطاء منظَّمون والهامش مُفصح عنه في نشرة الإصدار.' } },

    { type: 'academic', paras: [
      { en: 'Functions (slide 22): origination (advice on type, size, timing, pricing), underwriting (purchase from issuer and resell), distribution (placement via broker-dealer networks), advisory (compliance, due diligence, post-issue support). Agreements (slide 23): firm commitment — underwriter buys the whole issue and bears unsold risk, typical for large IPOs; best efforts — underwriter sells what it can, issuer bears the risk, used for smaller riskier issues.', ar: 'الوظائف (شريحة 22): النشأة (استشارة في النوع والحجم والتوقيت والتسعير)، والاكتتاب (شراء من المصدر وإعادة بيع)، والتوزيع (توزيع عبر شبكات وسطاء)، والاستشارة (امتثال وعناية واجبة ودعم بعد الإصدار). والاتفاقيات (شريحة 23): التزام ثابت — المكتتب يشتري الإصدار كاملًا ويتحمل مخاطر غير المبيع، نموذجي للـIPO الكبيرة؛ وأفضل جهود — يبيع ما استطاع والمصدر يتحمل المخاطر، تُستخدم للإصدارات الأصغر والأخطر.' },
      { en: 'The spread (slides 24–25): offer price minus net proceeds per share, composed of management fee (lead, for negotiating/managing), underwriting fee (syndicate members, for bearing purchase risk) and selling concession (whoever sells shares). Hence concession = spread − management fee − underwriting fee.', ar: 'الهامش (شريحتا 24–25): سعر العرض ناقص صافي المتحصلات للسهم، ويتكون من رسم إدارة (للقائد، عن التفاوض/الإدارة)، ورسم اكتتاب (لأعضاء المجمع، عن تحمل مخاطر الشراء)، وعمولة بيع (لمن يبيع الأسهم). ومن هنا عمولة البيع = الهامش − رسم الإدارة − رسم الاكتتاب.' },
      { en: 'Syndicate pay (slides 28–31): a member earns underwriting fee × shares committed PLUS selling concession × shares sold; the lead additionally earns management fee × total issue on top of its own commitment and sales; a selling-group member, bearing no underwriting risk, earns only concession × shares sold.', ar: 'أجر المجمع (شرائح 28–31): العضو يكسب رسم اكتتاب × الأسهم الملتزم بها زائد عمولة بيع × الأسهم المباعة؛ والقائد يكسب إضافة رسم إدارة × إجمالي الإصدار فوق التزامه ومبيعاته هو؛ وعضو مجموعة البيع، بلا مخاطر اكتتاب، يكسب فقط عمولة بيع × أسهمه المباعة.' }
    ], defs: [
      { term: { en: 'Underwriting syndicate', ar: 'مجمع الاكتتاب' }, def: { en: 'Temporary group of banks, led by a managing underwriter, sharing the risk of a large issue.', ar: 'مجموعة مؤقتة من المصارف بقيادة مكتتب مدير تتقاسم مخاطر إصدار كبير.' } },
      { term: { en: 'Selling group', ar: 'مجموعة البيع' }, def: { en: 'Broker-dealers outside the syndicate who help sell; paid only the selling concession.', ar: 'وسطاء خارج المجمع يساعدون في البيع؛ يُدفعون عمولة البيع فقط.' } },
      { term: { en: 'Firm commitment', ar: 'التزام ثابت' }, def: { en: 'Underwriter buys the entire issue at a fixed price and bears unsold-share risk.', ar: 'المكتتب يشتري الإصدار كاملًا بسعر ثابت ويتحمل مخاطر الأسهم غير المباعة.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Follow the money per share: public pays Offer; issuer keeps Net; the wedge between is sliced into three fees by role. Then follow the shares: each bank’s pay = (risk fee × what it committed) + (sales fee × what it sold), with the lead adding a management slice on the whole issue.', ar: 'اتبع المال لكل سهم: الجمهور يدفع العرض؛ والمصدرة تحتفظ بالصافي؛ والإسفين بينهما يُشرّح إلى ثلاثة رسوم حسب الدور. ثم اتبع الأسهم: أجر كل بنك = (رسم المخاطرة × ما التزم به) + (رسم البيع × ما باعه)، والقائد يضيف شريحة إدارة على الإصدار كله.' },
      { en: 'Selling group? Only the sales slice — no commitment, no risk fee.', ar: 'مجموعة البيع؟ شريحة البيع فقط — بلا التزام فلا رسم مخاطرة.' }
    ], steps: [
      { en: 'Spread = Offer − Net.', ar: 'الهامش = العرض − الصافي.' },
      { en: 'Concession = Spread − Mgmt fee − Uw fee.', ar: 'العمولة = الهامش − رسم الإدارة − رسم الاكتتاب.' },
      { en: 'Member comp = Uw fee × committed + Concession × sold.', ar: 'تعويض العضو = رسم الاكتتاب × الملتزم + العمولة × المباع.' },
      { en: 'Lead comp += Mgmt fee × total issue; selling group = Concession × sold only.', ar: 'تعويض القائد += رسم الإدارة × إجمالي الإصدار؛ ومجموعة البيع = العمولة × المباع فقط.' }
    ], recap: { en: 'The spread pays three jobs — managing, risking, selling — and each participant is paid for exactly the jobs it does.', ar: 'الهامش يدفع لثلاث وظائف — الإدارة والمخاطرة والبيع — وكل مشارك يُدفع بالضبط على الوظائف التي يؤديها.' } },

    { type: 'formula', id: 'f-spread', tag: 'course',
      name: { en: 'Underwriting spread and selling concession', ar: 'هامش الاكتتاب وعمولة البيع' },
      tex: '\\text{Spread} = \\text{Offer} - \\text{Net}, \\qquad SC = \\text{Spread} - MF - UF',
      vars: [
        { sym: 'MF', en: 'management fee per share', ar: 'رسم الإدارة للسهم' },
        { sym: 'UF', en: 'underwriting fee per share', ar: 'رسم الاكتتاب للسهم' },
        { sym: 'SC', en: 'selling concession per share', ar: 'عمولة البيع للسهم' }
      ],
      purpose: { en: 'Splits the per-share wedge into its three functional fees.', ar: 'يشرّح الإسفين لكل سهم إلى رسومه الوظيفية الثلاثة.' },
      assumptions: { en: 'All three quoted per share of the issue.', ar: 'الثلاثة مسعّرة لكل سهم من الإصدار.' },
      when: { en: 'Given offer, net and any two components.', ar: 'عند وجود العرض والصافي وأي مكونين.' },
      inputs: { en: 'Offer, Net, MF, UF.', ar: 'العرض والصافي وMF وUF.' },
      cautions: { en: 'Concession is the residual component — solve last.', ar: 'العمولة هي المكون المتبقي — تُحل أخيرًا.' },
      illustration: { en: '50 − 46.50 = 3.50; 3.50 − 0.60 − 1.20 = $1.70.', ar: '‏50 − 46.50 = 3.50؛ و3.50 − 0.60 − 1.20 = 1.70 دولار.' },
      sensitivity: { en: 'A wider spread with fixed MF/UF enlarges the concession.', ar: 'هامش أوسع مع MF/UF ثابتين يكبر العمولة.' },
      meaning: { en: 'Price of managing + risking + selling one share.', ar: 'ثمن إدارة + مخاطرة + بيع سهم واحد.' } },

    { type: 'formula', id: 'f-syndcomp', tag: 'course',
      name: { en: 'Syndicate compensation', ar: 'تعويض المجمع' },
      tex: 'Comp = UF \\times Q_{commit} + SC \\times Q_{sold}\\ ;\\quad Lead: +\\, MF \\times Q_{total}',
      vars: [
        { sym: 'Q_{commit}', en: 'shares the member committed to purchase', ar: 'الأسهم التي التزم العضو بشرائها' },
        { sym: 'Q_{sold}', en: 'shares the member actually sold', ar: 'الأسهم التي باعها العضو فعليًا' },
        { sym: 'Q_{total}', en: 'total issue size (lead only term)', ar: 'حجم الإصدار الكلي (حد القائد فقط)' }
      ],
      purpose: { en: 'Pays each bank for the risk it took and the shares it placed.', ar: 'يدفع لكل بنك مقابل المخاطرة التي تحملها والأسهم التي وزعها.' },
      assumptions: { en: 'Commitment shares = stated % of the issue.', ar: 'أسهم الالتزام = ٪ معلنة من الإصدار.' },
      when: { en: 'Given percentages, issue size, sales and the three fees.', ar: 'عند وجود النسب وحجم الإصدار والمبيعات والرسوم الثلاثة.' },
      inputs: { en: 'Commit %, issue size, shares sold, UF, SC (, MF for lead).', ar: '٪ الالتزام وحجم الإصدار والأسهم المباعة وUF وSC (وMF للقائد).' },
      cautions: { en: 'Selling-group members get SC × sold ONLY.', ar: 'أعضاء مجموعة البيع يأخذون SC × المباع فقط.' },
      illustration: { en: 'Bank B: 600,000 × 0.60 + 500,000 × 1.00 = 360,000 + 500,000 = $860,000.', ar: 'بنك B: ‏600,000 × 0.60 + 500,000 × 1.00 = 360,000 + 500,000 = 860,000 دولار.' },
      sensitivity: { en: 'Selling more than your commitment is fine — concession follows actual sales.', ar: 'بيع أكثر من التزامك جائز — العمولة تتبع المبيعات الفعلية.' },
      meaning: { en: 'Risk pay on commitment, sales pay on placement.', ar: 'أجر مخاطرة على الالتزام وأجر بيع على التوزيع.' } },

    { type: 'example', title: { en: 'Spread decomposition, twice (Lec 4, slides 26–27)', ar: 'تشريح الهامش مرتين (المحاضرة 4، شريحتا 26–27)' },
      context: { en: 'Two offers with known nets and two known fees.', ar: 'عرضان بصافيين معروفين ورسومين معروفين.' },
      source: { en: 'Lecture 4, slides 26–27, Problems 1–2', ar: 'المحاضرة 4، شريحتا 26–27، مسألتا 1–2' },
      steps: [
        { kind: 'calc', body: { en: 'P1: spread = 50 − 46.50 = $3.50; concession = 3.50 − 0.60 − 1.20 = $1.70.', ar: 'م1: الهامش = 50 − 46.50 = 3.50 دولار؛ العمولة = 3.50 − 0.60 − 1.20 = 1.70 دولار.' } },
        { kind: 'calc', body: { en: 'P2: spread = 35 − 32.20 = $2.80; concession = 2.80 − 0.40 − 0.90 = $1.50.', ar: 'م2: الهامش = 35 − 32.20 = 2.80 دولار؛ العمولة = 2.80 − 0.40 − 0.90 = 1.50 دولار.' } },
        { kind: 'verify', body: { en: 'MF + UF + SC reconstructs the spread in both cases.', ar: '‏MF + UF + SC يعيد بناء الهامش في الحالتين.' } }
      ]},

    { type: 'example', title: { en: 'Bank B in a 3-member syndicate (Lec 4, slide 30)', ar: 'بنك B في مجمع ثلاثي (المحاضرة 4، شريحة 30)' },
      context: { en: 'Lead 50% / B 30% / C 20%; issue 2,000,000; MF 0.20, UF 0.60, SC 1.00; B sells 500,000.', ar: 'قائد 50% / B ‏30% / C ‏20%؛ إصدار 2,000,000؛ MF ‏0.20 وUF ‏0.60 وSC ‏1.00؛ وB يبيع 500,000.' },
      source: { en: 'Lecture 4, slide 30, Problem 1', ar: 'المحاضرة 4، شريحة 30، مسألة 1' },
      steps: [
        { kind: 'calc', body: { en: 'Commitment = 30% × 2,000,000 = 600,000 shares.', ar: 'الالتزام = 30% × 2,000,000 = 600,000 سهم.' } },
        { kind: 'calc', body: { en: 'UF earned = 600,000 × 0.60 = $360,000.', ar: 'رسم الاكتتاب المكتسب = 600,000 × 0.60 = 360,000 دولار.' } },
        { kind: 'calc', body: { en: 'SC earned = 500,000 × 1.00 = $500,000.', ar: 'العمولة المكتسبة = 500,000 × 1.00 = 500,000 دولار.' } },
        { kind: 'calc', body: { en: 'Total = 360,000 + 500,000 = $860,000.', ar: 'الإجمالي = 360,000 + 500,000 = 860,000 دولار.' } },
        { kind: 'interpret', body: { en: 'B sold less than it committed (500k < 600k) — the underwriting fee is paid on commitment regardless.', ar: '‏B باع أقل مما التزم (500 ألف < 600 ألف) — ورسم الاكتتاب يُدفع على الالتزام على أي حال.' } }
      ]},

    { type: 'example', title: { en: 'Bank X in a 4m-share syndicate (Lec 4, slide 31)', ar: 'بنك X في مجمع إصدار 4 ملايين (المحاضرة 4، شريحة 31)' },
      context: { en: 'Lead 40% / X 35% / Y 25%; MF 0.15, UF 0.50, SC 0.90; X sells 900,000.', ar: 'قائد 40% / X ‏35% / Y ‏25%؛ MF ‏0.15 وUF ‏0.50 وSC ‏0.90؛ وX يبيع 900,000.' },
      source: { en: 'Lecture 4, slide 31, Problem 2', ar: 'المحاضرة 4، شريحة 31، مسألة 2' },
      steps: [
        { kind: 'calc', body: { en: 'Commitment = 35% × 4,000,000 = 1,400,000 shares.', ar: 'الالتزام = 35% × 4,000,000 = 1,400,000 سهم.' } },
        { kind: 'calc', body: { en: 'UF = 1,400,000 × 0.50 = $700,000; SC = 900,000 × 0.90 = $810,000.', ar: '‏UF = 1,400,000 × 0.50 = 700,000 دولار؛ SC = 900,000 × 0.90 = 810,000 دولار.' }, math: ['1{,}400{,}000 \\times 0.50 = 700{,}000', '900{,}000 \\times 0.90 = 810{,}000'] },
        { kind: 'calc', body: { en: 'Total = 700,000 + 810,000 = $1,510,000.', ar: 'الإجمالي = 700,000 + 810,000 = 1,510,000 دولار.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Who earns which slice of the spread (Lec 4 slides 24–29).', ar: 'من يكسب أي شريحة من الهامش (المحاضرة 4 شرائح 24–29).' },
      table: {
        head: [ { en: 'Fee', ar: 'الرسم' }, { en: 'Pays for', ar: 'يدفع مقابل' }, { en: 'Earned by', ar: 'يكسبه' } ],
        rows: [
          [ { en: 'Management fee', ar: 'رسم الإدارة' }, { en: 'Negotiating & managing the deal', ar: 'التفاوض وإدارة الصفقة' }, { en: 'Lead underwriter (on total issue)', ar: 'المكتتب القائد (على إجمالي الإصدار)' } ],
          [ { en: 'Underwriting fee', ar: 'رسم الاكتتاب' }, { en: 'Bearing purchase risk', ar: 'تحمل مخاطر الشراء' }, { en: 'Syndicate members (on committed shares)', ar: 'أعضاء المجمع (على الأسهم الملتزم بها)' } ],
          [ { en: 'Selling concession', ar: 'عمولة البيع' }, { en: 'Actually placing shares', ar: 'توزيع الأسهم فعليًا' }, { en: 'Any seller: syndicate or selling group (on sold shares)', ar: 'أي بائع: مجمع أو مجموعة بيع (على الأسهم المباعة)' } ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Paying a selling-group member the underwriting fee.', ar: 'دفع رسم الاكتتاب لعضو مجموعة البيع.' },
        why: { en: 'It bears no underwriting risk — concession only (slide 28).', ar: 'لا يتحمل مخاطر اكتتاب — العمولة فقط (شريحة 28).' },
        correct: { en: 'Selling group comp = SC × shares sold.', ar: 'تعويض مجموعة البيع = SC × الأسهم المباعة.' } },
      { wrong: { en: 'Charging the underwriting fee on shares SOLD instead of committed.', ar: 'احتساب رسم الاكتتاب على الأسهم المباعة بدل الملتزم بها.' },
        why: { en: 'The fee compensates risk assumed at commitment.', ar: 'الرسم يعوض مخاطر مُتحملة عند الالتزام.' },
        correct: { en: 'Bank B: 600,000 committed × 0.60, even though it sold 500,000.', ar: 'بنك B: ‏600,000 ملتزم × 0.60 رغم أنه باع 500,000.' } },
      { wrong: { en: 'Forgetting the lead’s management slice on the WHOLE issue.', ar: 'نسيان شريحة إدارة القائد على الإصدار كله.' },
        why: { en: 'The lead manages the deal, not just its own commitment.', ar: 'القائد يدير الصفقة لا التزامه فقط.' },
        correct: { en: 'Lead comp = MF × total + UF × own commit + SC × own sales.', ar: 'تعويض القائد = MF × الإجمالي + UF × التزامه + SC × مبيعاته.' } }
    ]},

    { type: 'flags', items: [
      { en: 'Slide 25 prints the spread decomposition truncated: “Spread = Management Fee + Underwriting Fee + Selling” — the word “Concession” is cut off. The complete identity (Spread = MF + UF + SC) is used in this lesson.', ar: 'شريحة 25 تطبع تشريح الهامش مبتورًا: «Spread = Management Fee + Underwriting Fee + Selling» — كلمة «Concession» مقصوصة. المتطابقة الكاملة (Spread = MF + UF + SC) هي المستخدمة في هذا الدرس.' },
      { en: 'Slides 7 and 9 contain stray typeset fraction lines (a lone “6” under “= $1.20”); the computed values themselves ($1.20, $16.80, $24.80) verify exactly, so this is a layout artifact only.', ar: 'الشريحتان 7 و9 تحتويان سطور كسور مطبعية شاردة («6» منفردة تحت «= $1.20»)؛ والقيم المحسوبة نفسها (1.20 و16.80 و24.80 دولار) تتحقق بالضبط، لذا هو خلل تنسيق فقط.' }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'Offer $50, net $46.50. Total spread per share (in $)?', ar: 'عرض 50 وصافٍ 46.50. إجمالي الهامش للسهم (بالدولار)؟' }, answer: 3.5, tol: 0.01, unit: '$', explain: { en: '50 − 46.50 = 3.50.', ar: '‏50 − 46.50 = 3.50.' } },
      { type: 'num', q: { en: 'With MF $0.60 and UF $1.20, the selling concession is (in $)?', ar: 'مع MF ‏0.60 وUF ‏1.20، عمولة البيع تساوي (بالدولار)؟' }, answer: 1.7, tol: 0.01, unit: '$', explain: { en: '3.50 − 0.60 − 1.20 = 1.70.', ar: '‏3.50 − 0.60 − 1.20 = 1.70.' } },
      { type: 'num', q: { en: 'Bank X: commitment 1,400,000 (UF 0.50) and sales 900,000 (SC 0.90). Total compensation (in $)?', ar: 'بنك X: التزام 1,400,000 (UF ‏0.50) ومبيعات 900,000 (SC ‏0.90). إجمالي التعويض (بالدولار)؟' }, answer: 1510000, tol: 1, unit: '$', explain: { en: '700,000 + 810,000 = 1,510,000.', ar: '‏700,000 + 810,000 = 1,510,000.' } },
      { type: 'mcq', q: { en: 'In a best-efforts agreement, unsold-share risk is borne by:', ar: 'في اتفاق أفضل الجهود، مخاطر الأسهم غير المباعة يتحملها:' }, options: [ { en: 'The issuer', ar: 'الجهة المصدرة' }, { en: 'The underwriter', ar: 'المكتتب' }, { en: 'The selling group', ar: 'مجموعة البيع' }, { en: 'The SEC', ar: 'هيئة SEC' } ], answer: 0, explain: { en: 'Slide 23: best efforts leaves the risk with the issuer.', ar: 'شريحة 23: أفضل الجهود تترك المخاطر لدى المصدر.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Banker’s four functions', ar: 'وظائف المصرفي الأربع' }, back: { en: 'Origination, underwriting, distribution, advisory.', ar: 'النشأة، الاكتتاب، التوزيع، الاستشارة.' } },
      { front: { en: 'Firm commitment vs best efforts', ar: 'التزام ثابت مقابل أفضل جهود' }, back: { en: 'Underwriter bears unsold risk vs issuer bears it.', ar: 'المكتتب يتحمل مخاطر غير المبيع مقابل تحمل المصدر لها.' } },
      { front: { en: 'Spread components', ar: 'مكونات الهامش' }, back: { en: 'Management fee + underwriting fee + selling concession.', ar: 'رسم الإدارة + رسم الاكتتاب + عمولة البيع.' } },
      { front: { en: 'Syndicate member pay', ar: 'أجر عضو المجمع' }, back: { en: 'UF × committed + SC × sold.', ar: '‏UF × الملتزم + SC × المباع.' } },
      { front: { en: 'Selling-group member pay', ar: 'أجر عضو مجموعة البيع' }, back: { en: 'SC × sold only — no risk, no UF.', ar: '‏SC × المباع فقط — بلا مخاطرة فلا UF.' } }
    ]},

    { type: 'summary', points: [
      { en: 'The banker originates, underwrites, distributes and advises.', ar: 'المصرفي ينشئ ويكتتب ويوزع ويستشير.' },
      { en: 'Firm commitment puts unsold risk on the underwriter; best efforts on the issuer.', ar: 'التزام الثابت يضع مخاطر غير المبيع على المكتتب؛ وأفضل الجهود على المصدر.' },
      { en: 'Spread = MF + UF + SC; concession is the residual.', ar: 'الهامش = MF + UF + SC؛ والعمولة هي المتبقي.' },
      { en: 'Compensation follows function: commitment earns UF, sales earn SC, leading adds MF on the whole issue.', ar: 'التعويض يتبع الوظيفة: الالتزام يكسب UF والمبيعات تكسب SC والقيادة تضيف MF على الإصدار كله.' }
    ], canExplain: [
      { en: 'Why selling-group members earn only the concession.', ar: 'لماذا يكسب أعضاء مجموعة البيع العمولة فقط.' },
      { en: 'Why the lead is paid on the total issue, not its commitment.', ar: 'لماذا يُدفع القائد على إجمالي الإصدار لا على التزامه.' },
      { en: 'Why firm commitment dominates large IPOs.', ar: 'لماذا يسود الالتزام الثابت في الـIPO الكبيرة.' }
    ]}
  ]
});
