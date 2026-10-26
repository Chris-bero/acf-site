/* ============================================================
   CONTENT — Module 3 (Lessons 9–12: Dividends & Payout Policy)
   Built from Lecture 3 (Chapter 14, Ross/Westerfield/Jordan).
   Every figure independently re-verified; see flags where the
   source itself is inconsistent or incomplete.
   ============================================================ */

window.COURSE.modules.push({
  id: 'm3',
  title: { en: 'Module 3 — Dividend Payout Policy', ar: 'الوحدة 3 — سياسة توزيعات الأرباح' },
  source: { en: 'Lecture 3 — Chapter 14 (Ross, Westerfield, Jordan): Dividends & Payout Policy', ar: 'المحاضرة 3 — الفصل 14 (روس، ويسترفيلد، جوردان): التوزيعات وسياسة الدفع' }
});

/* ---------------------------------------------------------- L9 */
window.COURSE.lessons.push({
  id: 'l9', module: 'm3', minutes: 40,
  title: { en: 'Payout Policy Basics & Dividend Dates', ar: 'أساسيات سياسة التوزيع وتواريخ التوزيعات' },
  subtitle: { en: 'Payout and retention ratios, dividends per share, and the four key dividend dates', ar: 'نسبتا التوزيع والاحتجاز والتوزيعات للسهم والتواريخ الأربعة الأساسية للتوزيعات' },
  source: { en: 'Lecture 3, slides 6–12 (Chapter 14)', ar: 'المحاضرة 3، الشرائح 6–12 (الفصل 14)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Define payout policy and the board’s maintain-or-increase decision.', ar: 'تعريف سياسة التوزيع وقرار مجلس الإدارة بين الإبقاء والزيادة.' },
      { en: 'Compute the payout ratio, retention ratio and DPS from EPS.', ar: 'حساب نسبة التوزيع ونسبة الاحتجاز وDPS من EPS.' },
      { en: 'Apply the zero-dividend rule when earnings are negative.', ar: 'تطبيق قاعدة صفر توزيعات عندما تكون الأرباح سالبة.' },
      { en: 'Order the four dividend dates and derive the ex-dividend date.', ar: 'ترتيب التواريخ الأربعة للتوزيعات واشتقاق تاريخ عدم الاستحقاق.' },
      { en: 'Decide whether a buyer on a given date receives the declared dividend.', ar: 'تحديد ما إذا كان المشتري في تاريخ معيّن يستلم التوزيعات المعلنة.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'EPS (earnings per share)', ar: 'ربحية السهم (EPS)' },
        def: { en: 'Earnings available to ordinary shareholders ÷ ordinary shares outstanding.', ar: 'الأرباح المتاحة لحملة الأسهم العادية ÷ عدد الأسهم العادية القائمة.' },
        why: { en: 'Every payout ratio in this module is expressed per share of earnings.', ar: 'كل نسب التوزيع في هذه الوحدة معبّر عنها لكل سهم من الأرباح.' },
        example: { en: 'EPS = $4.50 with DPS = $1.80 gives a 40% payout.', ar: '‏EPS = 4.50 دولار مع DPS = 1.80 دولار يعطي توزيعًا 40%.' },
        link: 'l7' },
      { term: { en: 'Retained earnings', ar: 'الأرباح المحتجزة' },
        def: { en: 'Cumulative earnings kept in the firm instead of being paid out.', ar: 'الأرباح المتراكمة المُبقاة داخل الشركة بدل توزيعها.' },
        why: { en: 'The retention ratio tells you what fraction of each year’s earnings joins this account.', ar: 'نسبة الاحتجاز تخبرك بأي جزء من أرباح كل سنة ينضم إلى هذا البند.' },
        example: { en: 'A 40% payout retains 60% of earnings for reinvestment.', ar: 'توزيع 40% يحتجز 60% من الأرباح لإعادة الاستثمار.' } },
      { term: { en: 'Business day', ar: 'يوم عمل' },
        def: { en: 'A trading day (typically Mon–Fri), excluding weekends and holidays.', ar: 'يوم تداول (عادة الاثنين–الجمعة) باستثناء عطلات نهاية الأسبوع والأعياد.' },
        why: { en: 'The ex-dividend offset is 2 business days, not 2 calendar days.', ar: 'إزاحة تاريخ عدم الاستحقاق هي يوما عمل، لا يومان تقويمان.' },
        example: { en: 'Friday record date ⇒ Wednesday ex-dividend date.', ar: 'تاريخ قيد يوم جمعة ⇒ تاريخ عدم استحقاق يوم أربعاء.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Every year a profitable firm faces one quiet question: of each dollar earned, how much goes back to the owners in cash, and how much stays inside to fund future growth? Payout policy is exactly that decision — whether to distribute, how much, and by which means (cash dividend, stock dividend, or repurchase).', ar: 'كل سنة تواجه الشركة الرابحة سؤالًا هادئًا واحدًا: من كل دولار يُربح، كم يعود نقدًا إلى الملاك وكم يبقى داخلها لتمويل النمو المستقبل؟ سياسة التوزيع هي هذا القرار بالضبط — هل نوزّع؟ وكم؟ وبأي وسيلة (توزيع نقدي، توزيع أسهم، أو إعادة شراء)؟' },
      { en: 'Two ratios compress the whole policy into numbers: the payout ratio (share of earnings paid out) and its mirror, the retention ratio (share kept). Around them sits a small calendar — declaration, ex-dividend, record and payment dates — that decides who exactly receives each declared dividend.', ar: 'نسبتان تختصران السياسة كلها في أرقام: نسبة التوزيع (جزء الأرباح المدفوع) ومرآتها نسبة الاحتجاز (جزء المُبقى). وحولهما تقويم صغير — تاريخ الإعلان، عدم الاستحقاق، القيد، والدفع — يحدد من يستلم بالضبط كل توزيعات معلنة.' }
    ], analogy: { en: 'A household salary: each month you decide what fraction to spend on family (payout) and what fraction to keep saving (retention). Announcing a gift to relatives is the declaration date; the day from which a new guest no longer qualifies for this month’s gift is the ex-dividend date.', ar: 'راتب أسرة: كل شهر تقرر أي جزء تنفقه على العائلة (توزيع) وأي جزء تبقيه ادخارًا (احتجاز). والإعلان عن هدية للأقارب هو تاريخ الإعلان؛ واليوم الذي لم يعد فيه ضيف جديد مؤهلًا لهدية هذا الشهر هو تاريخ عدم الاستحقاق.' }, analogyLimit: { en: 'A firm’s payout also signals information to the market and is constrained by liquidity and covenants — a household gift carries none of that.', ar: 'توزيع الشركة يحمل أيضًا إشارة معلوماتية للسوق وتقيده السيولة والشروط التعاقدية — وهدية الأسرة لا تحمل شيئًا من ذلك.' } },

    { type: 'academic', paras: [
      { en: 'Payout policy is the set of decisions on whether to distribute cash to shareholders, how much to distribute, and the means of distribution. Once a paying tradition exists, the board’s recurring decision is maintain versus increase, judged on current performance and the firm’s ability to generate future cash flow (slide 6).', ar: 'سياسة التوزيع هي مجموعة القرارات بشأن هل تُوزَّع سيولة على المساهمين، وكم يُوزَّع، وبأي وسيلة تُوزَّع. وبمجرد وجود تقليد توزيع، يصبح القرار المتكرر للمجلس هو الإبقاء مقابل الزيادة، ويُحكم عليه بالأداء الحالي وقدرة الشركة على توليد تدفق نقدي مستقبلي (شريحة 6).' },
      { en: 'The payout ratio is dividends per share over earnings per share — the percentage of each earned dollar paid to owners in cash. The retention ratio is its complement (1 − payout): the share kept as retained earnings and reinvested. Equivalently, DPS = payout ratio × EPS (slide 7).', ar: 'نسبة التوزيع هي التوزيعات للسهم مقسومة على ربحية السهم — نسبة كل دولار مُربح يُدفع للملاك نقدًا. ونسبة الاحتجاز هي مكمّلها (1 − توزيع): الجزء المُبقى كأرباح محتجزة يُعاد استثماره. وبصورة مكافئة DPS = نسبة التوزيع × EPS (شريحة 7).' },
      { en: 'The payment process runs through four dates: declaration (board approves), ex-dividend (record date minus 2 business days; buyers on or after it miss the current dividend), record (the register is checked), and payment (cheques go out). The ex-dividend date is the one that moves the price in practice (slide 11).', ar: 'تمر عملية الدفع بأربعة تواريخ: الإعلان (موافقة المجلس)، عدم الاستحقاق (تاريخ القيد ناقص يومي عمل؛ من يشتري فيه أو بعده يفوته التوزيع الحالي)، القيد (يُفحص السجل)، والدفع (تُصرف الشيكات). وتاريخ عدم الاستحقاق هو الذي يحرك السعر عمليًا (شريحة 11).' }
    ], defs: [
      { term: { en: 'Payout policy', ar: 'سياسة التوزيع' }, def: { en: 'The firm’s decisions on whether, how much, and by what means cash is distributed to shareholders.', ar: 'قرارات الشركة بشأن هل وكم وبأي وسيلة تُوزَّع السيولة على المساهمين.' } },
      { term: { en: 'Ex-dividend date', ar: 'تاريخ عدم استحقاق التوزيعات' }, def: { en: 'Record date minus 2 business days; purchasers on or after this date do not receive the declared dividend.', ar: 'تاريخ القيد ناقص يومي عمل؛ المشترون فيه أو بعده لا يستلمون التوزيعات المعلنة.' } },
      { term: { en: 'Record date', ar: 'تاريخ القيد' }, def: { en: 'The date on which the shareholder register is read to determine who receives the dividend.', ar: 'التاريخ الذي يُقرأ فيه سجل المساهمين لتحديد من يستلم التوزيعات.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Think of EPS as the year’s cake per share. The payout ratio is the slice you hand to the shareholder; the retention ratio is the slice the kitchen keeps for next year’s oven. Multiply the ratio by EPS and you get the cash slice per share (DPS).', ar: 'تخيل EPS ككيكة السنة لكل سهم. نسبة التوزيع هي القطعة التي تسلّمها للمساهم؛ ونسبة الاحتجاز هي القطعة التي يبقيها المطبخ لفرن السنة القادمة. اضرب النسبة في EPS تحصل على القطعة النقدية لكل سهم (DPS).' },
      { en: 'For the calendar, remember one rule: count two business days back from the record date to get the ex-dividend date. Buy before it and the dividend is yours; buy on or after it and it belongs to the seller.', ar: 'للتقويم احفظ قاعدة واحدة: عُد يومي عمل إلى الوراء من تاريخ القيد لتحصل على تاريخ عدم الاستحقاق. اشترِ قبله فالتوزيعات لك؛ واشترِ فيه أو بعده فهي للبائع.' }
    ], steps: [
      { en: 'Payout ratio = DPS ÷ EPS.', ar: 'نسبة التوزيع = DPS ÷ EPS.' },
      { en: 'Retention ratio = 1 − payout ratio.', ar: 'نسبة الاحتجاز = 1 − نسبة التوزيع.' },
      { en: 'DPS = payout ratio × EPS (zero if EPS ≤ 0 under the lecture’s rule).', ar: '‏DPS = نسبة التوزيع × EPS (صفر إذا EPS ≤ 0 وفق قاعدة المحاضرة).' },
      { en: 'Ex-dividend date = record date − 2 business days.', ar: 'تاريخ عدم الاستحقاق = تاريخ القيد − يومي عمل.' }
    ], recap: { en: 'Two ratios split each earned dollar between the owner’s pocket and the firm’s reinvestment; two business days split the buyers who get the dividend from those who do not.', ar: 'نسبتان تقسمان كل دولار مُربح بين جيب المالك وإعادة استثمار الشركة؛ ويوما عمل يقسمان المشترين الذين يستلمون التوزيعات عمن لا يستلمونها.' } },

    { type: 'formula', id: 'f-payout', tag: 'course',
      name: { en: 'Payout and retention ratios', ar: 'نسبتا التوزيع والاحتجاز' },
      tex: '\\text{Payout} = \\frac{DPS}{EPS}, \\qquad \\text{Retention} = 1 - \\text{Payout}',
      vars: [
        { sym: 'DPS', en: 'dividends per share paid in cash', ar: 'التوزيعات النقدية المدفوعة للسهم' },
        { sym: 'EPS', en: 'earnings per share', ar: 'ربحية السهم' }
      ],
      purpose: { en: 'Shows what fraction of each earned dollar leaves the firm as cash dividend.', ar: 'تبيّن أي جزء من كل دولار مُربح يخرج من الشركة كتوزيعات نقدية.' },
      assumptions: { en: 'EPS positive for a meaningful percentage; ratios are per-share so share count cancels.', ar: '‏EPS موجب لنسبة ذات معنى؛ والنسب لكل سهم لذا يُلغى عدد الأسهم.' },
      when: { en: 'Whenever you are given any two of DPS, EPS, payout ratio.', ar: 'كلما أُعطيت أي اثنين من DPS وEPS ونسبة التوزيع.' },
      inputs: { en: 'DPS and EPS (or the ratio itself).', ar: '‏DPS وEPS (أو النسبة نفسها).' },
      cautions: { en: 'With negative earnings the lecture places a 0 payout (no cash dividend) — do not compute a negative percentage.', ar: 'مع الأرباح السالبة تضع المحاضرة توزيعًا 0 (لا توزيعات نقدية) — لا تحسب نسبة سالبة.' },
      illustration: { en: 'EPS $4.50, DPS $1.80 ⇒ payout 40%, retention 60%.', ar: '‏EPS ‏4.50 دولار وDPS ‏1.80 دولار ⇒ توزيع 40% واحتجاز 60%.' },
      sensitivity: { en: 'Holding EPS fixed, a higher DPS raises the payout one-for-one and lowers retention by the same amount.', ar: 'مع ثبات EPS، كل ارتفاع في DPS يرفع التوزيع واحد-لواحد ويخفض الاحتجاز بالمقدار نفسه.' },
      meaning: { en: 'A 40% payout means 40 cents of every earned dollar goes to shareholders and 60 cents compounds inside the firm.', ar: 'توزيع 40% يعني أن 40 سنتًا من كل دولار مُربح تذهب للمساهمين و60 سنتًا تتراكم داخل الشركة.' } },

    { type: 'formula', id: 'f-dps', tag: 'course',
      name: { en: 'Dividends per share from a payout ratio', ar: 'التوزيعات للسهم من نسبة التوزيع' },
      tex: 'DPS = \\text{Payout} \\times EPS \\quad (DPS = 0 \\text{ if } EPS \\le 0)',
      vars: [
        { sym: 'DPS', en: 'cash dividend per share', ar: 'التوزيعات النقدية للسهم' },
        { sym: 'Payout', en: 'declared payout ratio (e.g. 40%)', ar: 'نسبة التوزيع المعلنة (مثل 40%)' },
        { sym: 'EPS', en: 'earnings per share in the period', ar: 'ربحية السهم في الفترة' }
      ],
      purpose: { en: 'Converts a policy percentage into the actual cash amount per share.', ar: 'تحوّل نسبة السياسة إلى المبلغ النقدي الفعلي للسهم.' },
      assumptions: { en: 'The firm follows a constant-payout-ratio rule on positive earnings only.', ar: 'تتبع الشركة قاعدة نسبة توزيع ثابتة على الأرباح الموجبة فقط.' },
      when: { en: 'Given a payout policy and a year’s EPS.', ar: 'عند وجود سياسة توزيع وEPS لسنة معيّنة.' },
      inputs: { en: 'Payout ratio, EPS.', ar: 'نسبة التوزيع وEPS.' },
      cautions: { en: 'Loss years pay zero under this rule — never a negative dividend.', ar: 'سنوات الخسارة تدفع صفرًا وفق هذه القاعدة — لا توزيعات سالبة أبدًا.' },
      illustration: { en: 'Payout 35%, EPS $6.00 ⇒ DPS = 0.35 × 6.00 = $2.10.', ar: '‏توزيع 35% وEPS ‏6.00 دولار ⇒ DPS = 0.35 × 6.00 = 2.10 دولار.' },
      sensitivity: { en: 'DPS moves proportionally with EPS at a fixed ratio — volatile earnings mean volatile dividends under this policy.', ar: '‏DPS يتحرك تناسبيًا مع EPS عند نسبة ثابتة — أرباح متقلبة تعني توزيعات متقلبة تحت هذه السياسة.' },
      meaning: { en: 'The cash cheque a shareholder receives per share owned.', ar: 'الشيك النقدي الذي يستلمه المساهم عن كل سهم يملكه.' } },

    { type: 'formula', id: 'f-exdiv', tag: 'course',
      name: { en: 'Ex-dividend date', ar: 'تاريخ عدم استحقاق التوزيعات' },
      tex: '\\text{Ex-date} = \\text{Record date} - 2\\ \\text{business days}',
      vars: [
        { sym: 'Record date', en: 'date the shareholder register is read', ar: 'تاريخ قراءة سجل المساهمين' },
        { sym: 'business days', en: 'trading days (weekends/holidays excluded)', ar: 'أيام العمل (تُستبعد العطلات)' }
      ],
      purpose: { en: 'Identifies the first day a buyer no longer receives the declared dividend.', ar: 'يحدد أول يوم لا يستلم فيه المشتري التوزيعات المعلنة.' },
      assumptions: { en: 'Standard settlement convention of the lecture: two business days.', ar: 'اتفاق التسوية القياسي في المحاضرة: يوما عمل.' },
      when: { en: 'Any question giving the record date or asking who receives the dividend.', ar: 'أي سؤال يعطي تاريخ القيد أو يسأل عمن يستلم التوزيعات.' },
      inputs: { en: 'Record date and the trading calendar.', ar: 'تاريخ القيد وتقويم التداول.' },
      cautions: { en: 'Count business days, skipping weekends; a Friday record date gives a Wednesday ex-date.', ar: 'عُدّ أيام عمل متخطيًا العطلات؛ تاريخ قيد جمعة يعطي عدم استحقاق أربعاء.' },
      illustration: { en: 'Record Friday March 14 ⇒ ex-date Wednesday March 12; a March 13 buyer misses the dividend.', ar: '‏قيد جمعة 14 مارس ⇒ عدم استحقاق أربعاء 12 مارس؛ ومشتري 13 مارس تفوته التوزيعات.' },
      sensitivity: { en: 'Holidays between the dates shift the ex-date earlier in calendar terms.', ar: 'الأعياد بين التاريخين تقدّم تاريخ عدم الاستحقاق تقويميًا.' },
      meaning: { en: 'The practical cut-off: the price drops by roughly the dividend on this day.', ar: 'الحد الفاصل عمليًا: ينزل السعر بمقدار التقريبي للتوزيعات في هذا اليوم.' } },

    { type: 'example', title: { en: 'Ratios from EPS and DPS (Lec 3, slide 8)', ar: 'النسب من EPS وDPS (المحاضرة 3، شريحة 8)' },
      context: { en: 'Two warm-up computations straight from the slides.', ar: 'حسابتان تمهيديتان مباشرتان من الشرائح.' },
      source: { en: 'Lecture 3, slide 8, Q1–Q2', ar: 'المحاضرة 3، شريحة 8، س1–س2' },
      steps: [
        { kind: 'understand', body: { en: 'Q1 gives EPS and DPS and asks for both ratios; Q2 gives the ratio and EPS and asks for DPS.', ar: 'س1 يعطي EPS وDPS ويطلب النسبتين؛ وس2 يعطي النسبة وEPS ويطلب DPS.' } },
        { kind: 'given', body: { en: 'Q1: EPS = $4.50, DPS = $1.80. Q2: payout = 35%, EPS = $6.00.', ar: 'س1: EPS = 4.50 دولار، DPS = 1.80 دولار. س2: توزيع = 35%، EPS = 6.00 دولار.' } },
        { kind: 'unknown', body: { en: 'Payout ratio, retention ratio, and DPS respectively.', ar: 'نسبة التوزيع ونسبة الاحتجاز وDPS على الترتيب.' } },
        { kind: 'method', body: { en: 'Payout = DPS ÷ EPS; retention = 1 − payout; DPS = payout × EPS.', ar: 'التوزيع = DPS ÷ EPS؛ الاحتجاز = 1 − التوزيع؛ DPS = التوزيع × EPS.' } },
        { kind: 'calc', body: { en: 'Q1: 1.80 ÷ 4.50 = 40%; retention = 60%. Q2: 0.35 × 6.00 = $2.10.', ar: 'س1: 1.80 ÷ 4.50 = 40%؛ الاحتجاز = 60%. س2: 0.35 × 6.00 = 2.10 دولار.' }, math: ['\\frac{1.80}{4.50} = 0.40', '1 - 0.40 = 0.60', '0.35 \\times 6.00 = 2.10'] },
        { kind: 'interpret', body: { en: 'The first firm returns two-fifths of earnings and reinvests three-fifths; the second pays $2.10 per share.', ar: 'الشركة الأولى تعيد خمسي الأرباح وتستثمر ثلاثة الأخماس؛ والثانية تدفع 2.10 دولار للسهم.' } },
        { kind: 'verify', body: { en: 'Check: 40% × 4.50 = 1.80 = the given DPS. Consistent.', ar: 'تحقق: 40% × 4.50 = 1.80 = الـDPS المعطى. متسق.' } }
      ]},

    { type: 'example', title: { en: 'Peachtree Industries: six years of dividends (Lec 3, slides 9–10)', ar: 'شركة بيتشتري: ست سنوات من التوزيعات (المحاضرة 3، شرائح 9–10)' },
      context: { en: 'A 40%-of-earnings policy applied year by year, including two loss years.', ar: 'سياسة 40% من الأرباح مطبقة سنة بسنة، شاملة سنتي خسارة.' },
      source: { en: 'Lecture 3, slides 9–10', ar: 'المحاضرة 3، شرائح 9–10' },
      steps: [
        { kind: 'understand', body: { en: 'Policy: pay 40% of earnings; in loss periods pay nothing. Fill the DPS column for six years.', ar: 'السياسة: دفع 40% من الأرباح؛ وفي فترات الخسارة لا شيء. أكمل عمود DPS لست سنوات.' } },
        { kind: 'given', body: { en: 'EPS by year: 2012 −$0.50; 2011 $3.00; 2010 $1.75; 2009 −$1.50; 2008 $2.00; 2007 $4.50.', ar: '‏EPS بالسنة: 2012 −0.50؛ 2011 ‏3.00؛ 2010 ‏1.75؛ 2009 −1.50؛ 2008 ‏2.00؛ 2007 ‏4.50 دولار.' } },
        { kind: 'method', body: { en: 'DPS = 40% × EPS when EPS > 0; DPS = 0 otherwise (payout recorded as 0).', ar: '‏DPS = 40% × EPS عندما EPS > 0؛ وإلا DPS = 0 (وتُسجل النسبة 0).' } },
        { kind: 'calc', body: { en: '2011: 1.20 · 2010: 0.70 · 2008: 0.80 · 2007: 1.80 · loss years (2012, 2009): 0.00.', ar: '‏2011: 1.20 · 2010: 0.70 · 2008: 0.80 · 2007: 1.80 · سنتا الخسارة (2012، 2009): 0.00.' }, math: ['0.40 \\times 3.00 = 1.20', '0.40 \\times 1.75 = 0.70', '0.40 \\times 2.00 = 0.80', '0.40 \\times 4.50 = 1.80'] },
        { kind: 'interpret', body: { en: 'Dividends swing with earnings: $1.80 in the best year, zero in losses — the signature of a constant-payout policy.', ar: 'تتأرجح التوزيعات مع الأرباح: 1.80 دولار في أفضل سنة وصفر في الخسائر — بصمة سياسة النسبة الثابتة.' } },
        { kind: 'verify', body: { en: 'Each positive row satisfies DPS ÷ EPS = 40% exactly.', ar: 'كل صف موجب يحقق DPS ÷ EPS = 40% بالضبط.' } }
      ]},

    { type: 'example', title: { en: 'Who gets the dividend? (Lec 3, slide 12)', ar: 'من يستلم التوزيعات؟ (المحاضرة 3، شريحة 12)' },
      context: { en: 'Applying the two-business-day rule to a Friday record date.', ar: 'تطبيق قاعدة يومي العمل على تاريخ قيد يوم جمعة.' },
      source: { en: 'Lecture 3, slide 12, Q1–Q2', ar: 'المحاضرة 3، شريحة 12، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'Record date: Friday March 14. An investor buys on Thursday March 13.', ar: 'تاريخ القيد: جمعة 14 مارس. مستثمر يشتري يوم خميس 13 مارس.' } },
        { kind: 'method', body: { en: 'Ex-date = record − 2 business days: Thu 13, Wed 12 ⇒ ex-date = March 12.', ar: 'عدم الاستحقاق = القيد − يومي عمل: خميس 13، أربعاء 12 ⇒ عدم الاستحقاق 12 مارس.' } },
        { kind: 'calc', body: { en: 'March 14 (Fri) − 2 business days = March 12 (Wed).', ar: '‏14 مارس (جمعة) − يوما عمل = 12 مارس (أربعاء).' } },
        { kind: 'interpret', body: { en: 'The March 13 buyer purchases on/after the ex-date, so the dividend stays with the seller.', ar: 'مشتري 13 مارس يشتري في تاريخ عدم الاستحقاق أو بعده، لذا تبقى التوزيعات للبائع.' } },
        { kind: 'verify', body: { en: 'Rule of thumb: only buyers strictly before the ex-date are on the register in time.', ar: 'قاعدة عملية: فقط من يشتري قبل تاريخ عدم الاستحقاق حصراً يُقيد في السجل في الوقت المناسب.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Peachtree Industries: 40% payout applied to six years (loss years pay zero). Source: Lec 3 slide 10.', ar: 'شركة بيتشتري: نسبة 40% مطبقة على ست سنوات (سنتا الخسارة بلا توزيع). المصدر: المحاضرة 3 شريحة 10.' },
      table: {
        head: [ { en: 'Year', ar: 'السنة' }, { en: 'Avg price/share', ar: 'متوسط السعر/السهم' }, { en: 'EPS', ar: 'ربحية السهم' }, { en: 'Payout', ar: 'نسبة التوزيع' }, { en: 'DPS', ar: 'التوزيع للسهم' } ],
        rows: [
          ['2012', '$42.00', '−$0.50', '0', '$0.00'],
          ['2011', '$52.00', '$3.00', '40%', '$1.20'],
          ['2010', '$48.00', '$1.75', '40%', '$0.70'],
          ['2009', '$38.00', '−$1.50', '0', '$0.00'],
          ['2008', '$46.00', '$2.00', '40%', '$0.80'],
          ['2007', '$50.00', '$4.50', '40%', '$1.80']
        ]
      }},

    { type: 'visual', kind: 'table',
      caption: { en: 'The four dividend dates in order; the ex-date is the operational cut-off for buyers.', ar: 'التواريخ الأربعة للتوزيعات بالترتيب؛ وتاريخ عدم الاستحقاق هو الحد الفاصل عمليًا للمشترين.' },
      table: {
        head: [ { en: 'Date', ar: 'التاريخ' }, { en: 'What happens', ar: 'ما الذي يحدث' }, { en: 'Effect on a buyer', ar: 'الأثر على المشتري' } ],
        rows: [
          [ { en: 'Declaration', ar: 'الإعلان' }, { en: 'Board approves the dividend; liability created.', ar: 'المجلس يقر التوزيعات؛ تنشأ التزامات.' }, { en: 'Price typically reacts to the news.', ar: 'السعر يتفاعل عادة مع الخبر.' } ],
          [ { en: 'Ex-dividend', ar: 'عدم الاستحقاق' }, { en: 'Record date − 2 business days.', ar: 'تاريخ القيد − يومي عمل.' }, { en: 'Buy on/after ⇒ no dividend.', ar: 'شراء فيه/بعده ⇒ لا توزيعات.' } ],
          [ { en: 'Record', ar: 'القيد' }, { en: 'Register is read; recipients fixed.', ar: 'يُقرأ السجل؛ يُثبَّت المستلمون.' }, { en: 'Too late to qualify via purchase.', ar: 'فات الأوان للتأهل بالشراء.' } ],
          [ { en: 'Payment', ar: 'الدفع' }, { en: 'Cash is mailed/credited.', ar: 'يُحوَّل/يُصرف النقد.' }, { en: 'Holders receive cash.', ar: 'المالكون يستلمون النقد.' } ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Computing a negative payout ratio in loss years.', ar: 'حساب نسبة توزيع سالبة في سنوات الخسارة.' },
        why: { en: 'The lecture’s rule is a zero dividend with a recorded 0 payout, not a negative percentage.', ar: 'قاعدة المحاضرة هي صفر توزيعات بنسبة مسجلة 0، لا نسبة سالبة.' },
        correct: { en: 'If EPS ≤ 0: DPS = 0 and payout shown as 0 (Peachtree 2012 & 2009).', ar: 'إذا EPS ≤ 0: ‏DPS = 0 والتوزيع يُعرض 0 (بيتشتري 2012 و2009).' } },
      { wrong: { en: 'Subtracting 2 calendar days instead of 2 business days.', ar: 'طرح يومين تقويميين بدل يومي عمل.' },
        why: { en: 'Weekends sit between: Friday record minus 2 calendar days is Wednesday by luck, but a Monday record would give a Saturday “ex-date”.', ar: 'العطلة تقع بينهما: قيد جمعة ناقص يومين تقويميين يصادف أربعاء، لكن قيد اثنين سيعطي «عدم استحقاق» يوم سبت.' },
        correct: { en: 'Walk back over trading days only: Fri 14 ⇒ Wed 12.', ar: 'عُد على أيام التداول فقط: جمعة 14 ⇒ أربعاء 12.' } },
      { wrong: { en: 'Believing a purchase on the ex-dividend date still captures the dividend.', ar: 'اعتقاد أن الشراء في تاريخ عدم الاستحقاق لا يزال يلتقط التوزيعات.' },
        why: { en: 'Settlement means the buyer is not on the register by the record date.', ar: 'التسوية تعني أن المشتري لن يُقيَّد في السجل بحلول تاريخ القيد.' },
        correct: { en: 'Only purchases strictly before the ex-date qualify.', ar: 'فقط الشراء قبل تاريخ عدم الاستحقاق حصراً يؤهل.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'EPS = $4.50 and DPS = $1.80. What is the payout ratio (in %)?', ar: '‏EPS = 4.50 دولار وDPS = 1.80 دولار. ما نسبة التوزيع (٪)؟' }, answer: 40, tol: 0.5, unit: '%', explain: { en: '1.80 ÷ 4.50 = 0.40 = 40%.', ar: '‏1.80 ÷ 4.50 = 0.40 = 40%.' } },
      { type: 'num', q: { en: 'A 35% payout policy with EPS = $6.00 pays what DPS (in $)?', ar: 'سياسة توزيع 35% مع EPS = 6.00 دولار تدفع كم DPS (بالدولار)؟' }, answer: 2.1, tol: 0.01, unit: '$', explain: { en: '0.35 × 6.00 = $2.10.', ar: '‏0.35 × 6.00 = 2.10 دولار.' } },
      { type: 'mcq', q: { en: 'Record date is Friday March 14 (no holidays). The ex-dividend date is:', ar: 'تاريخ القيد جمعة 14 مارس (بلا أعياد). تاريخ عدم الاستحقاق هو:' }, options: [ { en: 'Wednesday March 12', ar: 'أربعاء 12 مارس' }, { en: 'Thursday March 13', ar: 'خميس 13 مارس' }, { en: 'Monday March 17', ar: 'اثنين 17 مارس' }, { en: 'Wednesday March 12 of the previous week', ar: 'أربعاء 12 مارس من الأسبوع السابق' } ], answer: 0, explain: { en: 'Two business days before Friday are Thursday and Wednesday ⇒ March 12.', ar: 'يوما العمل قبل الجمعة هما الخميس والأربعاء ⇒ 12 مارس.' } },
      { type: 'tf', q: { en: 'An investor who buys the stock on the ex-dividend date receives the declared dividend.', ar: 'مستثمر يشتري السهم في تاريخ عدم الاستحقاق يستلم التوزيعات المعلنة.' }, answer: false, explain: { en: 'On or after the ex-date the dividend belongs to the seller.', ar: 'في تاريخ عدم الاستحقاق أو بعده التوزيعات للبائع.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Payout ratio', ar: 'نسبة التوزيع' }, back: { en: 'DPS ÷ EPS — share of each earned dollar paid out in cash.', ar: '‏DPS  EPS — جزء كل دولار مُربح يُدفع نقدًا.' } },
      { front: { en: 'Retention ratio', ar: 'نسبة الاحتجاز' }, back: { en: '1 − payout ratio — share kept as retained earnings.', ar: '‏1 − نسبة التوزيع — الجزء المُبقى كأرباح محتجزة.' } },
      { front: { en: 'Ex-dividend date', ar: 'تاريخ عدم الاستحقاق' }, back: { en: 'Record date − 2 business days; buyers on/after miss the dividend.', ar: 'تاريخ القيد − يومي عمل؛ الشراء فيه/بعده يفوّت التوزيعات.' } },
      { front: { en: 'Constant-payout rule in loss years', ar: 'قاعدة النسبة الثابتة في سنوات الخسارة' }, back: { en: 'DPS = 0 (payout recorded as 0), never negative.', ar: '‏DPS = 0 (والنسبة تُسجل 0)، لا سالب أبدًا.' } },
      { front: { en: 'Record date', ar: 'تاريخ القيد' }, back: { en: 'The day the shareholder register determines recipients.', ar: 'اليوم الذي يحدد فيه سجل المساهمين المستلمين.' } }
    ]},

    { type: 'summary', points: [
      { en: 'Payout = DPS/EPS; retention = 1 − payout; DPS = payout × positive EPS.', ar: 'التوزيع = DPS/EPS؛ الاحتجاز = 1 − التوزيع؛ DPS = التوزيع × EPS الموجب.' },
      { en: 'Loss years pay zero under a constant-payout policy.', ar: 'سنوات الخسارة تدفع صفرًا تحت سياسة النسبة الثابتة.' },
      { en: 'Ex-date = record − 2 business days; it is the buyer’s cut-off.', ar: 'عدم الاستحقاق = القيد − يومي عمل؛ وهو حد المشتري الفاصل.' },
      { en: 'Declaration → ex-dividend → record → payment.', ar: 'الإعلان ← عدم الاستحقاق ← القيد ← الدفع.' }
    ], canExplain: [
      { en: 'Why the retention ratio is the firm’s reinvestment budget per earned dollar.', ar: 'لماذا نسبة الاحتجاز هي ميزانية إعادة الاستثمار لكل دولار مُربح.' },
      { en: 'Why a March 13 buyer misses a March 14-record dividend.', ar: 'لماذا يفوّت مشتري 13 مارس توزيعات قيد 14 مارس.' },
      { en: 'Why Peachtree’s DPS column is zero exactly in 2012 and 2009.', ar: 'لماذا عمود DPS لدى بيتشتري صفر بالضبط في 2012 و2009.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L10 */
window.COURSE.lessons.push({
  id: 'l10', module: 'm3', minutes: 45,
  title: { en: 'Cash Dividend Policies', ar: 'سياسات التوزيعات النقدية' },
  subtitle: { en: 'Constant payout, regular, low-regular-and-extra, and residual dividend policies', ar: 'سياسات النسبة الثابتة والتوزيع المنتظم والمنخفض-مع-إضافي والمتبقي' },
  source: { en: 'Lecture 3, slides 14–22 (Chapter 14)', ar: 'المحاضرة 3، الشرائح 14–22 (الفصل 14)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Compute DPS under a constant-payout-ratio policy across good and loss years.', ar: 'حساب DPS تحت سياسة النسبة الثابتة عبر سنوات الربح والخسارة.' },
      { en: 'Apply a regular-dividend rule with an increase condition.', ar: 'تطبيق قاعدة التوزيع المنتظم مع شرط للزيادة.' },
      { en: 'Add an extra dividend when EPS exceeds a threshold.', ar: 'إضافة توزيع إضافي عندما يتجاوز EPS حدًا معينًا.' },
      { en: 'Derive the residual dividend from the capital budget and target equity ratio.', ar: 'اشتقاق التوزيع المتبقي من ميزانية رأس المال ونسبة الملكية المستهدفة.' },
      { en: 'Match each policy to the firm type it suits.', ar: 'مطابقة كل سياسة مع نوع الشركة الذي يناسبها.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'DPS and payout ratio', ar: '‏DPS ونسبة التوزيع' },
        def: { en: 'Cash dividend per share and its ratio to EPS.', ar: 'التوزيعات النقدية للسهم ونسبتها إلى EPS.' },
        why: { en: 'All four policies are rules for setting DPS each period.', ar: 'السياسات الأربع كلها قواعد لتحديد DPS كل فترة.' },
        example: { en: '40% of EPS $3.00 ⇒ DPS $1.20.', ar: '‏40% من EPS ‏3.00 ⇒ DPS ‏1.20.' },
        link: 'l9' },
      { term: { en: 'Capital budget & target equity ratio', ar: 'ميزانية رأس المال ونسبة الملكية المستهدفة' },
        def: { en: 'Planned investment spending and the fraction financed with equity.', ar: 'الإنفاق الاستثماري المخطط وجزؤه الممول بالملكية.' },
        why: { en: 'The residual policy pays only what earnings leave after funding that equity slice.', ar: 'سياسة المتبقي تدفع فقط ما تبقيه الأرباح بعد تمويل تلك الشريحة الملكية.' },
        example: { en: '60% of a $3m budget needs $1.8m equity.', ar: '‏60% من ميزانية 3 مليون تحتاج 1.8 مليون ملكية.' },
        link: 'l6' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Four personalities of paying: the mechanical firm (fixed % of earnings), the steady firm (fixed dollar, raised rarely), the cautious-plus-generous firm (low fixed floor plus bonuses in fat years), and the investment-first firm (pay only what is left after funding projects). Same earnings stream, four very different dividend histories.', ar: 'أربع شخصيات للدفع: الشركة الآلية (نسبة ثابتة من الأرباح)، والشركة الثابتة (مبلغ ثابت نادرًا ما يُرفع)، والشركة الحذرة-الكريمة (أرضية ثابتة منخفضة مع مكافآت في السنوات السمينة)، والشركة التي تقدّم الاستثمار (تدفع فقط ما يتبقى بعد تمويل المشاريع). نفس سيل الأرباح، وأربعة تواريخ توزيع مختلفة جدًا.' },
      { en: 'The residual policy makes the link to capital structure explicit: dividends become the leftover after the equity portion of the capital budget is funded — so a big investment year can mean a tiny dividend even with strong earnings.', ar: 'سياسة المتبقي تجعل الصلة بهيكل رأس المال صريحة: التوزيعات تصبح الفائض بعد تمويل جزء الملكية من ميزانية رأس المال — لذا سنة استثمار كبيرة قد تعني توزيعات ضئيلة حتى مع أرباح قوية.' }
    ], analogy: { en: 'Four ways to give a child an allowance: a fixed percentage of your monthly salary; a fixed amount every month; a small fixed amount plus a bonus in good months; or whatever remains after paying all household bills and savings targets.', ar: 'أربع طرق لإعطاء مصروف طفل: نسبة ثابتة من راتبك الشهري؛ مبلغ ثابت كل شهر؛ مبلغ ثابت صغير مع مكافأة في الشهور الجيدة؛ أو ما يتبقى بعد دفع كل فواتير المنزل وأهداف الادخار.' }, analogyLimit: { en: 'Real firms also care about the signal each pattern sends to the market — an allowance carries no signalling cost.', ar: 'الشركات الحقيقية تهتم أيضًا بالإشارة التي يرسلها كل نمط إلى السوق — والمصروف لا يحمل تكلفة إشارية.' } },

    { type: 'academic', paras: [
      { en: 'Constant-payout-ratio: DPS = ratio × positive EPS, zero in loss years — dividends track earnings exactly (slide 15). Regular: a fixed dollar dividend each period, increased only after a sustainable earnings rise and almost never cut unless liquidity is in jeopardy (slide 17).', ar: 'النسبة الثابتة: DPS = النسبة × EPS الموجب، وصفر في سنوات الخسارة — التوزيعات تتبع الأرباح تمامًا (شريحة 15). المنتظم: توزيع بمبلغ ثابت كل فترة، يُرفع فقط بعد ارتفاع مستدام في الأرباح ونادرًا جدًا ما يُخفض إلا إذا كانت السيولة في خطر (شريحة 17).' },
      { en: 'Low-regular-and-extra: a low regular dividend plus an optional extra when earnings exceed normal: total = regular + extra, with extra = extra rate × (EPS − threshold), zero at or below the threshold (slide 19). Residual: equity needed = target equity ratio × capital budget; dividend = max(0, earnings − equity needed) — investment needs come first (slide 21).', ar: 'المنخفض-مع-إضافي: توزيع منتظم منخفض إضافة إلى إضافي اختياري عندما تتجاوز الأرباح المعتاد: الإجمالي = منتظم + إضافي، حيث الإضافي = معدل الإضافي × (EPS − الحد)، وصفر عند الحد أو دونه (شريحة 19). المتبقي: الملكية المطلوبة = نسبة الملكية المستهدفة × ميزانية رأس المال؛ والتوزيع = max(0، الأرباح − الملكية المطلوبة) — احتياجات الاستثمار أولًا (شريحة 21).' },
      { en: 'Choosing between them is a trade-off: income certainty for shareholders (regular) versus matching cash to earnings (constant) versus protecting investment capacity (residual). The lecture’s problems train the arithmetic of each rule.', ar: 'الاختيار بينها مقايضة: يقين دخل للمساهمين (منتظم) مقابل مطابقة النقد للأرباح (ثابت) مقابل حماية القدرة الاستثمارية (متبقي). ومسائل المحاضرة تدرّب حسابات كل قاعدة.' }
    ], defs: [
      { term: { en: 'Extra dividend', ar: 'التوزيع الإضافي' }, def: { en: 'An optional top-up paid when earnings are higher than normal; not a commitment.', ar: 'زيادة اختيارية تُدفع عندما تكون الأرباح أعلى من المعتاد؛ وليست التزامًا.' } },
      { term: { en: 'Residual dividend', ar: 'التوزيع المتبقي' }, def: { en: 'The dividend left after funding the equity portion of the capital budget.', ar: 'التوزيعات المتبقية بعد تمويل جزء الملكية من ميزانية رأس المال.' } },
      { term: { en: 'Threshold (extra-dividend policy)', ar: 'الحد (سياسة الإضافي)' }, def: { en: 'The EPS level above which the extra dividend starts accruing.', ar: 'مستوى EPS الذي فوقه يبدأ التوزيع الإضافي بالتراكم.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Each policy is one sentence of arithmetic: multiply (constant), copy (regular), multiply-then-top-up (low-regular-extra), or subtract-the-budget-first (residual). Identify the sentence, plug the year’s EPS, and you have DPS.', ar: 'كل سياسة جملة حسابية واحدة: اضرب (ثابت)، انسخ (منتظم)، اضرب ثم زد (منخفض-مع-إضافي)، أو اطرح الميزانية أولًا (متبقي). حدد الجملة وعوّض EPS السنة تحصل على DPS.' },
      { en: 'The only traps are the loss-year zero in constant policies and the “only if above threshold” condition in extras — both are if-statements, not formulas.', ar: 'الفخاخ الوحيدة هي صفر سنة الخسارة في السياسات الثابتة وشرط «فقط إذا فوق الحد» في الإضافي — كلاهما شرط منطقي لا معادلة.' }
    ], steps: [
      { en: 'Constant: DPS = ratio × EPS, or 0 if EPS ≤ 0.', ar: 'ثابت: DPS = النسبة × EPS، أو 0 إذا EPS ≤ 0.' },
      { en: 'Regular: DPS = last declared dollar amount until the increase condition triggers.', ar: 'منتظم: DPS = آخر مبلغ معلن حتى يتحقق شرط الزيادة.' },
      { en: 'Low-regular-extra: total = regular + max(0, rate × (EPS − threshold)).', ar: 'منخفض-مع-إضافي: الإجمالي = منتظم + max(0، المعدل × (EPS − الحد)).' },
      { en: 'Residual: dividend = max(0, earnings − target × budget).', ar: 'متبقي: التوزيع = max(0، الأرباح − الهدف × الميزانية).' }
    ], recap: { en: 'Four rules, one question each period: how much cash leaves? The rule you pick decides how volatile the answer is.', ar: 'أربع قواعد، سؤال واحد كل فترة: كم نقدًا يخرج؟ القاعدة التي تختارها تحدد مدى تقلب الإجابة.' } },

    { type: 'formula', id: 'f-const', tag: 'course',
      name: { en: 'Constant-payout-ratio DPS', ar: '‏DPS سياسة النسبة الثابتة' },
      tex: 'DPS = \\text{ratio} \\times EPS^{+}, \\quad DPS = 0 \\text{ if } EPS \\le 0',
      vars: [
        { sym: 'ratio', en: 'declared constant payout percentage', ar: 'نسبة التوزيع الثابتة المعلنة' },
        { sym: 'EPS^{+}', en: 'positive earnings per share', ar: 'ربحية السهم الموجبة' }
      ],
      purpose: { en: 'Sets the dividend as a fixed slice of whatever positive earnings arrive.', ar: 'تحدد التوزيعات كشريحة ثابتة من أي أرباح موجبة تأتي.' },
      assumptions: { en: 'No smoothing: dividends fall when earnings fall.', ar: 'لا تمهيد: التوزيعات تنخفض عندما تنخفض الأرباح.' },
      when: { en: 'Given a % policy and a series of EPS.', ar: 'عند وجود سياسة ٪ وسلسلة EPS.' },
      inputs: { en: 'Ratio and EPS per year.', ar: 'النسبة وEPS لكل سنة.' },
      cautions: { en: 'Loss years: DPS = 0, never negative.', ar: 'سنوات الخسارة: DPS = 0 ولا سالب أبدًا.' },
      illustration: { en: '30% policy with EPS 2.00 / −0.50 / 4.00 ⇒ DPS 0.60 / 0.00 / 1.20.', ar: '‏سياسة 30% مع EPS ‏2.00 / −0.50 / 4.00 ⇒ DPS ‏0.60 / 0.00 / 1.20.' },
      sensitivity: { en: 'DPS elasticity to EPS is exactly 1.', ar: 'مرونة DPS بالنسبة لـEPS تساوي 1 تمامًا.' },
      meaning: { en: 'Shareholders participate directly in each year’s performance.', ar: 'المساهمون يشاركون مباشرة في أداء كل سنة.' } },

    { type: 'formula', id: 'f-extra', tag: 'course',
      name: { en: 'Low-regular-and-extra total dividend', ar: 'إجمالي توزيع المنخفض-مع-إضافي' },
      tex: 'DPS_{total} = DPS_{reg} + \\max\\big(0,\\; r_{x} \\times (EPS - T)\\big)',
      vars: [
        { sym: 'DPS_{reg}', en: 'low regular dividend', ar: 'التوزيع المنتظم المنخفض' },
        { sym: 'r_{x}', en: 'extra-dividend rate on EPS above threshold', ar: 'معدل الإضافي على EPS فوق الحد' },
        { sym: 'T', en: 'threshold EPS', ar: 'حد الـEPS' }
      ],
      purpose: { en: 'Guarantees a floor while sharing exceptional years with shareholders.', ar: 'تضمن أرضية مع مشاركة السنوات الاستثنائية مع المساهمين.' },
      assumptions: { en: 'The extra is discretionary and lapses when EPS ≤ T.', ar: 'الإضافي اختياري ويسقط عندما EPS ≤ T.' },
      when: { en: 'Given regular, rate, threshold and the year’s EPS.', ar: 'عند وجود المنتظم والمعدل والحد وEPS السنة.' },
      inputs: { en: 'Four numbers: regular, rate, threshold, EPS.', ar: 'أربعة أرقام: المنتظم والمعدل والحد وEPS.' },
      cautions: { en: 'If EPS ≤ threshold the extra is exactly 0 — do not prorate.', ar: 'إذا EPS ≤ الحد فالإضافي صفر بالضبط — لا تنسب جزئيًا.' },
      illustration: { en: 'Regular 0.40, rate 50%, T = 2.50, EPS 4.00 ⇒ extra 0.75, total 1.15.', ar: '‏منتظم 0.40 ومعدل 50% وT = 2.50 وEPS ‏4.00 ⇒ إضافي 0.75 وإجمالي 1.15.' },
      sensitivity: { en: 'Above T the total rises with slope r<x>; below T it is flat.', ar: 'فوق T يرتفع الإجمالي بميل r<x>؛ وتحته يكون مسطحًا.' },
      meaning: { en: 'A floor plus a performance bonus — without promising the bonus.', ar: 'أرضية زائد مكافأة أداء — دون الوعد بالمكافأة.' } },

    { type: 'formula', id: 'f-residual', tag: 'course',
      name: { en: 'Residual dividend', ar: 'التوزيع المتبقي' },
      tex: 'E_{need} = w_{E} \\times B, \\qquad Div = \\max(0,\\; E - E_{need})',
      vars: [
        { sym: 'w_{E}', en: 'target equity ratio', ar: 'نسبة الملكية المستهدفة' },
        { sym: 'B', en: 'capital budget', ar: 'ميزانية رأس المال' },
        { sym: 'E', en: 'earnings available', ar: 'الأرباح المتاحة' },
        { sym: 'E_{need}', en: 'equity financing needed', ar: 'تمويل الملكية المطلوب' }
      ],
      purpose: { en: 'Pays dividends only from earnings not needed to keep the target capital structure.', ar: 'تدفع توزيعات فقط من الأرباح غير المطلوبة للحفاظ على هيكل رأس المال المستهدف.' },
      assumptions: { en: 'Investment opportunities and the target ratio are fixed first.', ar: 'فرص الاستثمار والنسبة المستهدفة تُثبت أولًا.' },
      when: { en: 'Given earnings, capital budget and target equity weight.', ar: 'عند وجود الأرباح وميزانية رأس المال ووزن الملكية المستهدف.' },
      inputs: { en: 'Earnings, budget, target ratio.', ar: 'الأرباح والميزانية والنسبة المستهدفة.' },
      cautions: { en: 'The max(0, ·) matters: a huge budget can zero the dividend.', ar: 'الـmax(0, ·) جوهرية: ميزانية ضخمة قد تصفّر التوزيعات.' },
      illustration: { en: 'Earnings $5m, budget $3m, w 60% ⇒ need $1.8m ⇒ dividend $3.2m.', ar: '‏أرباح 5 مليون وميزانية 3 مليون وw ‏60% ⇒ مطلوب 1.8 مليون ⇒ توزيع 3.2 مليون.' },
      sensitivity: { en: 'Dividend falls one-for-one with the equity slice of any budget increase.', ar: 'التوزيع ينخفض واحد-لواحد مع شريحة الملكية من أي زيادة في الميزانية.' },
      meaning: { en: 'Growth first, distribution second.', ar: 'النمو أولًا والتوزيع ثانيًا.' } },

    { type: 'example', title: { en: 'Constant payout across a loss year (Lec 3, slide 16)', ar: 'نسبة ثابتة عبر سنة خسارة (المحاضرة 3، شريحة 16)' },
      context: { en: 'ABC pays 30% of positive earnings.', ar: '‏ABC تدفع 30% من الأرباح الموجبة.' },
      source: { en: 'Lecture 3, slide 16, Q1–Q2', ar: 'المحاضرة 3، شريحة 16، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'EPS: Y1 $2.00, Y2 −$0.50, Y3 $4.00; ratio 30%.', ar: '‏EPS: س1 ‏2.00، س2 −0.50، س3 ‏4.00 دولار؛ النسبة 30%.' } },
        { kind: 'calc', body: { en: 'Y1: 0.60 · Y2: 0.00 (loss) · Y3: 1.20.', ar: 'س1: 0.60 · س2: 0.00 (خسارة) · س3: 1.20.' }, math: ['0.30 \\times 2.00 = 0.60', '0.30 \\times 4.00 = 1.20'] },
        { kind: 'interpret', body: { en: 'The zero year is the policy working as designed, not a cut decision.', ar: 'سنة الصفر هي السياسة تعمل كما صُممت، لا قرار خفض.' } },
        { kind: 'verify', body: { en: 'Q2 cross-check: 50% policy, EPS 3.20 ⇒ 1.60; EPS 1.00 ⇒ 0.50.', ar: 'تحقق س2: سياسة 50% مع EPS ‏3.20 ⇒ 1.60؛ وEPS ‏1.00 ⇒ 0.50.' } }
      ]},

    { type: 'example', title: { en: 'Regular policy with an increase condition (Lec 3, slide 18)', ar: 'سياسة منتظمة بشرط زيادة (المحاضرة 3، شريحة 18)' },
      context: { en: '$2.00 until EPS > $5.00 for two consecutive years, then $2.50.', ar: '‏2.00 دولار حتى يتجاوز EPS ‏5.00 دولار لسنتين متتاليتين ثم 2.50 دولار.' },
      source: { en: 'Lecture 3, slide 18, Q1–Q2', ar: 'المحاضرة 3، شريحة 18، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'EPS: 2019 4.50, 2020 5.20, 2021 5.50, 2022 5.80.', ar: '‏EPS: ‏2019 ‏4.50، 2020 ‏5.20، 2021 ‏5.50، 2022 ‏5.80.' } },
        { kind: 'method', body: { en: 'Track consecutive years above 5.00; raise only after the second.', ar: 'تتبع السنوات المتتالية فوق 5.00؛ وارفع فقط بعد الثانية.' } },
        { kind: 'calc', body: { en: '2019: 2.00 · 2020: 2.00 (one year only) · 2021: 2.50 (two years) · 2022: 2.50.', ar: '‏2019: 2.00 · 2020: 2.00 (سنة واحدة) · 2021: 2.50 (سنتان) · 2022: 2.50.' } },
        { kind: 'interpret', body: { en: 'The lag is deliberate: sustainability, not a single good year, earns an increase.', ar: 'التأخر مقصود: الاستدامة لا سنة جيدة واحدة هي التي تستحق الزيادة.' } },
        { kind: 'verify', body: { en: 'Q2: a sharp earnings drop leaves $1.50 untouched unless liquidity is in danger.', ar: 'س2: هبوط حاد في الأرباح يبقي 1.50 دولار بلا مساس ما لم تكن السيولة في خطر.' } }
      ]},

    { type: 'example', title: { en: 'Extra dividend above a threshold (Lec 3, slide 20)', ar: 'توزيع إضافي فوق حد (المحاضرة 3، شريحة 20)' },
      context: { en: 'Regular $0.40; extra = 50% of EPS above $2.50.', ar: 'منتظم 0.40 دولار؛ إضافي = 50% من EPS فوق 2.50 دولار.' },
      source: { en: 'Lecture 3, slide 20, Q1–Q2', ar: 'المحاضرة 3، شريحة 20، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'Case A: EPS $4.00. Case B: EPS $2.00.', ar: 'حالة أ: EPS ‏4.00 دولار. حالة ب: EPS ‏2.00 دولار.' } },
        { kind: 'calc', body: { en: 'A: extra = 0.50 × (4.00 − 2.50) = 0.75 ⇒ total 1.15. B: EPS ≤ 2.50 ⇒ total = 0.40.', ar: 'أ: إضافي = 0.50 × (4.00 − 2.50) = 0.75 ⇒ إجمالي 1.15. ب: EPS ≤ 2.50 ⇒ إجمالي = 0.40.' }, math: ['0.50 \\times 1.50 = 0.75', '0.40 + 0.75 = 1.15'] },
        { kind: 'interpret', body: { en: 'The floor survives the bad year; the bonus appears only in the good one.', ar: 'الأرضية تنجو من السنة السيئة؛ والمكافأة تظهر فقط في الجيدة.' } }
      ]},

    { type: 'example', title: { en: 'Residual dividend and a hungry capital budget (Lec 3, slide 22)', ar: 'التوزيع المتبقي وميزانية رأس مال جائعة (المحاضرة 3، شريحة 22)' },
      context: { en: 'Earnings $5m; target equity ratio 60%; two budget sizes.', ar: 'أرباح 5 مليون؛ نسبة ملكية مستهدفة 60%؛ وحجما ميزانية.' },
      source: { en: 'Lecture 3, slide 22, Q1–Q2', ar: 'المحاضرة 3، شريحة 22، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'E = $5,000,000; budgets $3,000,000 and $8,000,000; w = 60%.', ar: '‏E = 5,000,000 دولار؛ ميزانيتان 3,000,000 و8,000,000 دولار؛ w = 60%.' } },
        { kind: 'calc', body: { en: 'Budget 3m: need 1.8m ⇒ dividend 3.2m. Budget 8m: need 4.8m ⇒ dividend 0.2m.', ar: 'ميزانية 3م: مطلوب 1.8م ⇒ توزيع 3.2م. ميزانية 8م: مطلوب 4.8م ⇒ توزيع 0.2م.' }, math: ['0.60 \\times 3{,}000{,}000 = 1{,}800{,}000', '5{,}000{,}000 - 1{,}800{,}000 = 3{,}200{,}000', '0.60 \\times 8{,}000{,}000 = 4{,}800{,}000', '5{,}000{,}000 - 4{,}800{,}000 = 200{,}000'] },
        { kind: 'interpret', body: { en: 'Same earnings, 16× smaller dividend — the budget, not the profit, drove the cheque.', ar: 'نفس الأرباح وتوزيع أصغر 16 مرة — الميزانية لا الربح هي التي حددت الشيك.' } },
        { kind: 'verify', body: { en: 'Both results are non-negative, so max(0, ·) never binds here.', ar: 'النتيجتان غير سالبتين لذا max(0, ·) لم تُفعَّل هنا.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'The four cash-dividend policies side by side.', ar: 'سياسات التوزيع النقدية الأربع جنبًا إلى جنب.' },
      table: {
        head: [ { en: 'Policy', ar: 'السياسة' }, { en: 'Rule', ar: 'القاعدة' }, { en: 'Dividend behaviour', ar: 'سلوك التوزيعات' }, { en: 'Suits', ar: 'تناسب' } ],
        rows: [
          [ { en: 'Constant payout ratio', ar: 'نسبة ثابتة' }, { en: 'DPS = % × positive EPS', ar: '‏DPS = ٪ × EPS الموجب' }, { en: 'Moves exactly with earnings; zero in losses', ar: 'يتحرك تمامًا مع الأرباح؛ صفر في الخسائر' }, { en: 'Firms with stable, predictable earnings', ar: 'شركات بأرباح مستقرة قابلة للتنبؤ' } ],
          [ { en: 'Regular', ar: 'منتظم' }, { en: 'Fixed $ per period', ar: 'مبلغ ثابت كل فترة' }, { en: 'Flat; rare, sticky increases', ar: 'مسطح؛ زيادات نادرة ولزجة' }, { en: 'Mature firms signalling stability', ar: 'شركات ناضجة تشير إلى الاستقرار' } ],
          [ { en: 'Low-regular-and-extra', ar: 'منخفض مع إضافي' }, { en: 'Floor + max(0, r×(EPS−T))', ar: 'أرضية + max(0، r×(EPS−T))' }, { en: 'Stable floor, optional bonus', ar: 'أرضية مستقرة ومكافأة اختيارية' }, { en: 'Cyclical earners', ar: 'أرباح دورية متقلبة' } ],
          [ { en: 'Residual', ar: 'متبقي' }, { en: 'max(0, E − w×B)', ar: '‏max(0، E − w×B)' }, { en: 'Whatever investment leaves behind', ar: 'ما تبقيه الاستثمارات' }, { en: 'Growth firms with big budgets', ar: 'شركات نامية بميزانيات كبيرة' } ]
        ]
      }},

    { type: 'visual', kind: 'stacked',
      caption: { en: 'Residual policy: how $5m of earnings splits between equity financing and dividend at two capital budgets (Lec 3 slide 22).', ar: 'سياسة المتبقي: كيف تنقسم أرباح 5 مليون بين تمويل الملكية والتوزيع عند ميزانيتي رأس مال (المحاضرة 3 شريحة 22).' },
      cfg: {
        rows: [
          { label: { en: 'Budget $3m', ar: 'ميزانية 3 مليون' }, parts: [ { name: { en: 'Equity needed', ar: 'ملكية مطلوبة' }, value: 1.8 }, { name: { en: 'Dividend', ar: 'توزيعات' }, value: 3.2 } ] },
          { label: { en: 'Budget $8m', ar: 'ميزانية 8 مليون' }, parts: [ { name: { en: 'Equity needed', ar: 'ملكية مطلوبة' }, value: 4.8 }, { name: { en: 'Dividend', ar: 'توزيعات' }, value: 0.2 } ] }
        ], fmt: 'n2'
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Paying the extra dividend when EPS equals the threshold.', ar: 'دفع التوزيع الإضافي عندما يساوي EPS الحد.' },
        why: { en: 'The extra accrues only on EPS above T; at T it is exactly zero.', ar: 'الإضافي يتراكم فقط على EPS فوق T؛ وعند T هو صفر بالضبط.' },
        correct: { en: 'EPS = 2.50 with T = 2.50 ⇒ total = regular only.', ar: '‏EPS = 2.50 مع T = 2.50 ⇒ الإجمالي = المنتظم فقط.' } },
      { wrong: { en: 'Forgetting max(0, ·) in the residual policy.', ar: 'نسيان max(0, ·) في سياسة المتبقي.' },
        why: { en: 'If the equity need exceeds earnings the dividend is zero, not negative.', ar: 'إذا تجاوزت الحاجة الملكية الأرباح فالتوزيع صفر لا سالب.' },
        correct: { en: 'Dividend = max(0, E − w×B); a $9m budget here would pay nothing.', ar: 'التوزيع = max(0، E − w×B)؛ ميزانية 9 مليون هنا لن تدفع شيئًا.' } },
      { wrong: { en: 'Raising the regular dividend after a single strong year.', ar: 'رفع التوزيع المنتظم بعد سنة قوية واحدة.' },
        why: { en: 'The slide’s condition is two consecutive years above the trigger; increases are meant to be permanent.', ar: 'شرط الشريحة سنتان متتاليتان فوق المحفز؛ والزيادات يُقصد بها الدوام.' },
        correct: { en: '2020 alone (5.20) keeps $2.00; 2020+2021 raise it to $2.50.', ar: '‏2020 وحدها (5.20) تُبقي 2.00؛ و2020+2021 ترفعه إلى 2.50.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: 'Earnings $5,000,000; capital budget $3,000,000; target equity 60%. Residual dividend (in $m)?', ar: 'أرباح 5,000,000 دولار؛ ميزانية 3,000,000؛ ملكية مستهدفة 60%. التوزيع المتبقي (بالمليون دولار)؟' }, answer: 3.2, tol: 0.01, unit: 'm', explain: { en: 'Need 1.8m; 5 − 1.8 = 3.2m.', ar: 'المطلوب 1.8م؛ 5 − 1.8 = 3.2م.' } },
      { type: 'num', q: { en: 'Regular $0.40, extra rate 50%, threshold $2.50, EPS $4.00. Total DPS (in $)?', ar: 'منتظم 0.40، معدل إضافي 50%، حد 2.50، EPS ‏4.00. إجمالي DPS (بالدولار)؟' }, answer: 1.15, tol: 0.01, unit: '$', explain: { en: 'Extra 0.75 + regular 0.40 = 1.15.', ar: 'إضافي 0.75 + منتظم 0.40 = 1.15.' } },
      { type: 'mcq', q: { en: 'Which policy keeps a fixed-dollar dividend regardless of earnings?', ar: 'أي سياسة تبقي توزيعًا بمبلغ ثابت بغض النظر عن الأرباح؟' }, options: [ { en: 'Regular dividend policy', ar: 'سياسة التوزيع المنتظم' }, { en: 'Constant-payout-ratio policy', ar: 'سياسة النسبة الثابتة' }, { en: 'Residual policy', ar: 'سياسة المتبقي' }, { en: 'Low-regular-and-extra', ar: 'المنخفض مع إضافي' } ], answer: 0, explain: { en: 'Regular pays a fixed dollar amount each period (slide 17).', ar: 'المنتظم يدفع مبلغًا ثابتًا كل فترة (شريحة 17).' } },
      { type: 'tf', q: { en: 'Under a constant-payout-ratio policy a loss year pays a negative dividend.', ar: 'تحت سياسة النسبة الثابتة سنة الخسارة تدفع توزيعات سالبة.' }, answer: false, explain: { en: 'DPS = 0 when EPS ≤ 0.', ar: '‏DPS = 0 عندما EPS ≤ 0.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Constant-payout-ratio policy', ar: 'سياسة النسبة الثابتة' }, back: { en: 'DPS = fixed % of positive EPS; zero in loss years.', ar: '‏DPS = ٪ ثابتة من EPS الموجب؛ وصفر في سنوات الخسارة.' } },
      { front: { en: 'Regular dividend policy', ar: 'سياسة التوزيع المنتظم' }, back: { en: 'Fixed dollar each period; increases only after sustainable earnings gains.', ar: 'مبلغ ثابت كل فترة؛ وزيادات فقط بعد مكاسب أرباح مستدامة.' } },
      { front: { en: 'Extra dividend', ar: 'التوزيع الإضافي' }, back: { en: 'rate × (EPS − threshold), paid only above the threshold.', ar: 'المعدل × (EPS − الحد)، يُدفع فقط فوق الحد.' } },
      { front: { en: 'Residual dividend', ar: 'التوزيع المتبقي' }, back: { en: 'max(0, earnings − target equity ratio × capital budget).', ar: '‏max(0، الأرباح − نسبة الملكية المستهدفة × ميزانية رأس المال).' } },
      { front: { en: 'Which policy suits cyclical earnings?', ar: 'أي سياسة تناسب الأرباح الدورية؟' }, back: { en: 'Low-regular-and-extra: a floor plus bonuses in fat years.', ar: 'المنخفض-مع-إضافي: أرضية زائد مكافآت في السنوات السمينة.' } }
    ]},

    { type: 'summary', points: [
      { en: 'Constant: DPS tracks positive EPS; losses pay zero.', ar: 'الثابت: DPS يتبع EPS الموجب؛ والخسائر صفر.' },
      { en: 'Regular: fixed dollar, sticky increases after sustained gains.', ar: 'المنتظم: مبلغ ثابت وزيادات لزجة بعد مكاسب مستدامة.' },
      { en: 'Low-regular-extra: floor + optional bonus above a threshold.', ar: 'المنخفض-مع-إضافي: أرضية + مكافأة اختيارية فوق حد.' },
      { en: 'Residual: dividends are what earnings leave after funding the equity budget slice.', ar: 'المتبقي: التوزيعات ما تبقيه الأرباح بعد تمويل شريحة الملكية من الميزانية.' }
    ], canExplain: [
      { en: 'Why a residual policy makes dividends volatile even with smooth earnings.', ar: 'لماذا تجعل سياسة المتبقي التوزيعات متقلبة حتى مع أرباح ملساء.' },
      { en: 'Why firms rarely cut a regular dividend.', ar: 'لماذا نادرًا ما تخفض الشركات التوزيع المنتظم.' },
      { en: 'Why the extra dividend is deliberately not a promise.', ar: 'لماذا التوزيع الإضافي عمدًا ليس وعدًا.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L11 */
window.COURSE.lessons.push({
  id: 'l11', module: 'm3', minutes: 40,
  title: { en: 'Stock Dividends & Stock Splits', ar: 'توزيعات الأسهم وتجزئة الأسهم' },
  subtitle: { en: 'Paying in shares instead of cash: price adjustment, EPS dilution and the equity accounts', ar: 'الدفع بأسهم بدل النقد: تسوية السعر وتخفيف EPS وبنود حقوق الملكية' },
  source: { en: 'Lecture 3, slides 23–28 (Chapter 14)', ar: 'المحاضرة 3، الشرائح 23–28 (الفصل 14)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Explain why a stock dividend leaves total market value unchanged.', ar: 'شرح لماذا لا تغير توزيعات الأسهم إجمالي القيمة السوقية.' },
      { en: 'Compute new shares, new price and new EPS after a stock dividend.', ar: 'حساب الأسهم الجديدة والسعر الجديد وEPS الجديد بعد توزيع أسهم.' },
      { en: 'Re-state the equity accounts after a stock dividend at market price.', ar: 'إعادة عرض بنود حقوق الملكية بعد توزيع أسهم بسعر السوق.' },
      { en: 'Apply split and reverse-split ratios to shares, price and EPS.', ar: 'تطبيق نسب التجزئة والتجزئة العكسية على الأسهم والسعر وEPS.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Market value of equity', ar: 'القيمة السوقية للملكية' },
        def: { en: 'Shares outstanding × market price per share.', ar: 'عدد الأسهم القائمة × سعر السوق للسهم.' },
        why: { en: 'The invariant that prices every stock dividend and split.', ar: 'الثابت الذي يسعّر كل توزيع أسهم وكل تجزئة.' },
        example: { en: '200,000 × $25 = $5,000,000.', ar: '‏200,000 × 25 = 5,000,000 دولار.' } },
      { term: { en: 'Par value & paid-in capital', ar: 'القيمة الاسمية ورأس المال المدفوع الإضافي' },
        def: { en: 'Legal per-share face value and the excess received over it.', ar: 'القيمة الوجهية القانونية للسهم والفائض المستلم فوقها.' },
        why: { en: 'A stock dividend transfers retained earnings into these two accounts.', ar: 'توزيع الأسهم ينقل الأرباح المحتجزة إلى هذين البندين.' },
        example: { en: '10,000 new shares at $2 par move $20,000 into common stock.', ar: '‏10,000 سهم جديد باسمي 2 دولار تنقل 20,000 دولار إلى بند الأسهم العادية.' },
        link: 'l6' },
      { term: { en: 'EPS', ar: 'ربحية السهم' },
        def: { en: 'Earnings ÷ shares outstanding.', ar: 'الأرباح ÷ عدد الأسهم القائمة.' },
        why: { en: 'More shares with unchanged earnings dilutes EPS proportionally.', ar: 'أسهم أكثر مع أرباح ثابتة تخفف EPS تناسبيًا.' },
        example: { en: '$4.00 EPS halves to $2.00 after a 2-for-1 split.', ar: '‏EPS ‏4.00 دولار يتنصف إلى 2.00 بعد تجزئة 2-لـ1.' },
        link: 'l7' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'A stock dividend pays owners with more pieces of the same pie: you receive extra shares in proportion to what you hold, the share count rises, and the price per share falls so that your total wealth is exactly unchanged. Nothing left the firm and nothing entered your pocket — the cake was simply re-sliced.', ar: 'توزيع الأسهم يدفع للملاك بمزيد من قطع نفس الكيكة: تستلم أسهمًا إضافية بتناسب مع ما تملك، يرتفع عدد الأسهم، وينخفض سعر السهم بحيث تبقى ثروتك الإجمالية دون تغيير تمامًا. لم يخرج شيء من الشركة ولم يدخل شيء جيبك — فقط أُعيد تقطيع الكيكة.' },
      { en: 'Splits are the same arithmetic with bigger ratios: a 2-for-1 split doubles shares and halves price and EPS; a 1-for-5 reverse split quintuples the price and divides shares by five. Accountants additionally re-label equity accounts after a stock dividend, moving retained earnings into common stock and paid-in surplus at market value.', ar: 'التجزئة هي نفس الحساب بنسبة أكبر: تجزئة 2-لـ1 تضاعف الأسهم وتنصف السعر وEPS؛ والتجزئة العكسية 1-لـ5 تضاعف السعر خمس مرات وتقسم الأسهم على خمسة. ومحاسبيًا تُعاد تسمية بنود الملكية بعد توزيع الأسهم، إذ تُنقل الأرباح المحتجزة إلى الأسهم العادية والمدفوع الإضافي بالقيمة السوقية.' }
    ], analogy: { en: 'Exchanging a $20 note for two $10 notes: you hold more pieces, each smaller, total unchanged.', ar: 'استبدال ورقة 20 دولارًا بورقتي 10: تحمل قطعًا أكثر، كل واحدة أصغر، والمجموع دون تغيير.' }, analogyLimit: { en: 'Unlike currency exchange, markets sometimes read splits as signals about management’s expectations, so prices can drift for psychological reasons.', ar: 'بخلاف صرف العملة، قد تقرأ الأسواق التجزئة أحيانًا كإشارة عن توقعات الإدارة، لذا قد ينزلق السعر لأسباب سيكولوجية.' } },

    { type: 'academic', paras: [
      { en: 'Stock dividend mechanics (slides 23–24): new shares = old shares × dividend %; total shares = old + new; because market value is unchanged, new price = old price × old shares ÷ new shares (equivalently market value ÷ new shares); new EPS = old EPS × old shares ÷ new shares.', ar: 'آلية توزيع الأسهم (شريحتان 23–24): الأسهم الجديدة = القديمة × ٪ التوزيع؛ إجمالي الأسهم = قديم + جديد؛ ولأن القيمة السوقية لا تتغير، السعر الجديد = القديم × القديم ÷ الجديد (وبصورة مكافئة القيمة السوقية ÷ الجديد)؛ وEPS الجديد = EPS القديم × القديم ÷ الجديد.' },
      { en: 'Accounting transfer (slide 26): at declaration the firm moves retained earnings to common stock at par and to paid-in capital in excess of par for the remainder, both measured at market price: CS↑ = new shares × par; PIC↑ = new shares × (market − par); RE↓ = new shares × market. Total equity is unchanged.', ar: 'النقل المحاسبي (شريحة 26): عند الإعلان تنقل الشركة الأرباح المحتجزة إلى الأسهم العادية بالاسمي وإلى رأس المال الإضافي بالباقي، كليهما بسعر السوق: الأسهم العادية↑ = الجديدة × الاسمي؛ الإضافي↑ = الجديدة × (السوق − الاسمي)؛ المحتجزة↓ = الجديدة × السوق. وإجمالي الملكية لا يتغير.' },
      { en: 'Splits (slides 27–28): a k-for-1 split multiplies shares by k and divides price and EPS by k; a 1-for-k reverse split divides shares by k and multiplies price and EPS by k. Market value is invariant in both directions.', ar: 'التجزئة (شريحتان 27–28): تجزئة k-لـ1 تضرب الأسهم في k وتقسم السعر وEPS على k؛ والتجزئة العكسية 1-لـk تقسم الأسهم على k وتضرب السعر وEPS في k. والقيمة السوقية ثابتة في الاتجاهين.' }
    ], defs: [
      { term: { en: 'Stock dividend', ar: 'توزيع أسهم' }, def: { en: 'Payment to existing owners in additional shares, proportional to holdings.', ar: 'دفع للملاك الحاليين بأسهم إضافية متناسبة مع ملكياتهم.' } },
      { term: { en: 'Stock split', ar: 'تجزئة أسهم' }, def: { en: 'Proportional increase in shares with matching price reduction; value unchanged.', ar: 'زيادة تناسبية في الأسهم مع خفض مطابق للسعر؛ والقيمة لا تتغير.' } },
      { term: { en: 'Reverse split', ar: 'تجزئة عكسية' }, def: { en: 'Proportional reduction in shares with matching price increase.', ar: 'خفض تناسبي في الأسهم مع رفع مطابق للسعر.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Hold one number sacred: total market value (shares × price). Every stock dividend or split just redistributes that constant over a different share count; price and EPS follow by division.', ar: 'أمسك رقمًا واحدًا مقدسًا: إجمالي القيمة السوقية (الأسهم × السعر). كل توزيع أسهم أو تجزئة يعيد توزيع هذا الثابت على عدد أسهم مختلف؛ والسعر وEPS يتبعان بالقسمة.' },
      { en: 'For the accounts, remember the market-price transfer: retained earnings loses new shares × market price; common stock gains new shares × par; the gap goes to paid-in surplus.', ar: 'للبنود احفظ النقل بسعر السوق: المحتجزة تخسر الجديدة × السوق؛ والعادية تكسب الجديدة × الاسمي؛ والفارق يذهب إلى المدفوع الإضافي.' }
    ], steps: [
      { en: 'New shares = old × %; total = old + new.', ar: 'الجديدة = القديمة × ٪؛ الإجمالي = قديمة + جديدة.' },
      { en: 'New price = (old shares × old price) ÷ total new shares.', ar: 'السعر الجديد = (القديمة × القديم) ÷ إجمالي الجديدة.' },
      { en: 'New EPS = (old EPS × old shares) ÷ total new shares.', ar: '‏EPS الجديد = (القديم × القديمة) ÷ إجمالي الجديدة.' },
      { en: 'Accounts: RE −= new × market; CS += new × par; PIC += new × (market − par).', ar: 'البنود: المحتجزة −= الجديدة × السوق؛ العادية += الجديدة × الاسمي؛ الإضافي += الجديدة × (السوق − الاسمي).' }
    ], recap: { en: 'More slices, same pie: price and EPS shrink exactly as shares grow; equity accounts are re-labelled, not enriched.', ar: 'قطع أكثر وكيكة نفسها: السعر وEPS ينكماشان تمامًا بنمو الأسهم؛ وبنود الملكية يُعاد تصنيفها لا إثراؤها.' } },

    { type: 'formula', id: 'f-stockdiv', tag: 'course',
      name: { en: 'Stock dividend: shares and price', ar: 'توزيع الأسهم: العدد والسعر' },
      tex: 'N_{new} = N_{old} \\times d, \\quad N_{tot} = N_{old} + N_{new}, \\quad P_{new} = P_{old} \\times \\frac{N_{old}}{N_{tot}}',
      vars: [
        { sym: 'd', en: 'stock dividend percentage (e.g. 5%)', ar: 'نسبة توزيع الأسهم (مثل 5%)' },
        { sym: 'N_{old}', en: 'shares before', ar: 'الأسهم قبل' },
        { sym: 'N_{tot}', en: 'shares after', ar: 'الأسهم بعد' },
        { sym: 'P_{old}', en: 'market price before', ar: 'سعر السوق قبل' }
      ],
      purpose: { en: 'Prices the post-dividend share so total market value is preserved.', ar: 'تسعّر السهم بعد التوزيع بحيث تُحفظ القيمة السوقية الإجمالية.' },
      assumptions: { en: 'No cash leaves; value invariance holds instantly.', ar: 'لا يخرج نقد؛ وثبات القيمة يتحقق فوريًا.' },
      when: { en: 'Given old shares, price and the stock-dividend %.', ar: 'عند وجود الأسهم القديمة والسعر و٪ التوزيع.' },
      inputs: { en: 'Three numbers: N, P, d.', ar: 'ثلاثة أرقام: N وP وd.' },
      cautions: { en: 'Divide by the TOTAL new shares, not by the old count.', ar: 'اقسم على إجمالي الأسهم الجديدة لا على العدد القديم.' },
      illustration: { en: '200,000 sh × 5% = 10,000 new; total 210,000; price 25 × 200/210 = $23.81.', ar: '‏200,000 سهم × 5% = 10,000 جديد؛ الإجمالي 210,000؛ السعر 25 × 200/210 = 23.81 دولار.' },
      sensitivity: { en: 'Larger d ⇒ proportionally lower price; wealth unchanged either way.', ar: '‏d أكبر ⇒ سعر أقل تناسبيًا؛ والثروة لا تتغير في الحالتين.' },
      meaning: { en: 'The price drop is the mechanical mirror of the extra shares.', ar: 'انخفاض السعر هو المرآة الآلية للأسهم الإضافية.' } },

    { type: 'formula', id: 'f-neweps', tag: 'course',
      name: { en: 'EPS after stock dividend / split', ar: '‏EPS بعد توزيع الأسهم/التجزئة' },
      tex: 'EPS_{new} = \\frac{EPS_{old} \\times N_{old}}{N_{new}}',
      vars: [
        { sym: 'EPS_{old}', en: 'earnings per share before', ar: 'ربحية السهم قبل' },
        { sym: 'N_{old}, N_{new}', en: 'share counts before / after', ar: 'عدد الأسهم قبل / بعد' }
      ],
      purpose: { en: 'Shows the pure dilution from a larger share count at unchanged earnings.', ar: 'تبيّن التخفيف المحض من عدد أسهم أكبر مع أرباح ثابتة.' },
      assumptions: { en: 'Earnings themselves are unaffected by the re-slicing.', ar: 'الأرباح نفسها لا تتأثر بإعادة التقطيع.' },
      when: { en: 'Any stock dividend, split or reverse split.', ar: 'أي توزيع أسهم أو تجزئة أو تجزئة عكسية.' },
      inputs: { en: 'Old EPS and the two share counts.', ar: '‏EPS القديم وعددا الأسهم.' },
      cautions: { en: 'For a reverse split N<new> < N<old>, so EPS rises.', ar: 'في التجزئة العكسية N<new> < N<old> لذا يرتفع EPS.' },
      illustration: { en: '2-for-1 on EPS $4.00 ⇒ $2.00; 1-for-5 reverse on $0.50 ⇒ $2.50.', ar: '‏2-لـ1 على EPS ‏4.00 ⇒ 2.00؛ و1-لـ5 عكسية على 0.50 ⇒ 2.50 دولار.' },
      sensitivity: { en: 'EPS moves inversely with the share-count ratio.', ar: '‏EPS يتحرك عكسيًا مع نسبة عدد الأسهم.' },
      meaning: { en: 'Per-share numbers shrink (or grow) exactly with the slice count.', ar: 'الأرقام لكل سهم تنكمش (أو تنمو) تمامًا مع عدد القطع.' } },

    { type: 'example', title: { en: '5% stock dividend: shares and price (Lec 3, slide 25)', ar: 'توزيع أسهم 5%: العدد والسعر (المحاضرة 3، شريحة 25)' },
      context: { en: '200,000 shares at $25 declare a 5% stock dividend.', ar: '‏200,000 سهم بسعر 25 دولارًا تعلن توزيع أسهم 5%.' },
      source: { en: 'Lecture 3, slide 25, Q1', ar: 'المحاضرة 3، شريحة 25، س1' },
      steps: [
        { kind: 'calc', body: { en: 'New shares = 200,000 × 0.05 = 10,000; total = 210,000.', ar: 'الجديدة = 200,000 × 0.05 = 10,000؛ الإجمالي = 210,000.' }, math: ['200{,}000 \\times 0.05 = 10{,}000'] },
        { kind: 'calc', body: { en: 'Market value = 200,000 × 25 = $5,000,000; new price = 5,000,000 ÷ 210,000 = $23.81.', ar: 'القيمة السوقية = 200,000 × 25 = 5,000,000 دولار؛ السعر الجديد = 5,000,000 ÷ 210,000 = 23.81 دولار.' }, math: ['\\frac{5{,}000{,}000}{210{,}000} = 23.81'] },
        { kind: 'interpret', body: { en: 'A holder with 100 shares now has 105 × $23.81 ≈ $2,500 — exactly the old 100 × $25.', ar: 'مالك 100 سهم صار لديه 105 × 23.81 ≈ 2,500 دولار — تمامًا مثل 100 × 25 قديمًا.' } },
        { kind: 'verify', body: { en: '25 × 200,000 ÷ 210,000 = 23.8095… rounds to 23.81.', ar: '‏25 × 200,000 ÷ 210,000 = 23.8095… يُقرّب إلى 23.81.' } }
      ]},

    { type: 'example', title: { en: 'Equity accounts after a 10% stock dividend (Lec 3, slide 26)', ar: 'بنود الملكية بعد توزيع أسهم 10% (المحاضرة 3، شريحة 26)' },
      context: { en: 'CS (100,000 sh @ $2 par) $200,000; PIC $300,000; RE $500,000; market $10.', ar: 'عادية (100,000 سهم باسمي 2) 200,000؛ إضافي 300,000؛ محتجزة 500,000؛ السوق 10 دولارات.' },
      source: { en: 'Lecture 3, slide 26, Q2', ar: 'المحاضرة 3، شريحة 26، س2' },
      steps: [
        { kind: 'calc', body: { en: 'New shares = 100,000 × 10% = 10,000.', ar: 'الجديدة = 100,000 × 10% = 10,000.' } },
        { kind: 'calc', body: { en: 'CS ↑ 10,000 × $2 = $20,000; PIC ↑ 10,000 × ($10 − $2) = $80,000; RE ↓ 10,000 × $10 = $100,000.', ar: 'العادية ↑ 10,000 × 2 = 20,000؛ الإضافي ↑ 10,000 × (10 − 2) = 80,000؛ المحتجزة ↓ 10,000 × 10 = 100,000.' }, math: ['10{,}000 \\times 2 = 20{,}000', '10{,}000 \\times (10 - 2) = 80{,}000', '10{,}000 \\times 10 = 100{,}000'] },
        { kind: 'interpret', body: { en: 'Resulting accounts: CS $220,000; PIC $380,000; RE $400,000; total still $1,000,000 (derived from the slide’s increments).', ar: 'البنود الناتجة: عادية 220,000؛ إضافي 380,000؛ محتجزة 400,000؛ والإجمالي لا يزال 1,000,000 دولار (مشتق من زيادات الشريحة).' } },
        { kind: 'verify', body: { en: '20,000 + 80,000 = 100,000 = the retained-earnings reduction; total equity invariant.', ar: '‏20,000 + 80,000 = 100,000 = خفض المحتجزة؛ وإجمالي الملكية ثابت.' } }
      ]},

    { type: 'example', title: { en: 'Split and reverse split (Lec 3, slide 28)', ar: 'تجزئة وتجزئة عكسية (المحاضرة 3، شريحة 28)' },
      context: { en: 'Two firms, opposite directions.', ar: 'شركتان واتجاهان متعاكسان.' },
      source: { en: 'Lecture 3, slide 28, Q1–Q2', ar: 'المحاضرة 3، شريحة 28، س1–س2' },
      steps: [
        { kind: 'given', body: { en: 'A: 100,000 sh, $80, EPS $4.00, 2-for-1. B: 50,000 sh, $10, EPS $0.50, 1-for-5 reverse.', ar: 'أ: 100,000 سهم، 80 دولارًا، EPS ‏4.00، تجزئة 2-لـ1. ب: 50,000 سهم، 10 دولارات، EPS ‏0.50، عكسية 1-لـ5.' } },
        { kind: 'calc', body: { en: 'A: 200,000 sh, $40, EPS $2.00. B: 10,000 sh, $50, EPS $2.50.', ar: 'أ: 200,000 سهم، 40 دولارًا، EPS ‏2.00. ب: 10,000 سهم، 50 دولارًا، EPS ‏2.50.' }, math: ['80 \\div 2 = 40', '4.00 \\div 2 = 2.00', '10 \\times 5 = 50', '0.50 \\times 5 = 2.50'] },
        { kind: 'interpret', body: { en: 'Market values ($8m and $0.5m) are untouched in both cases.', ar: 'القيم السوقية (8 مليون و0.5 مليون) لا تُمس في الحالتين.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Before/after a 2-for-1 split (firm A, Lec 3 slide 28): every per-share number halves, the aggregate does not move.', ar: 'قبل/بعد تجزئة 2-لـ1 (شركة أ، المحاضرة 3 شريحة 28): كل رقم لكل سهم يتنصف، والإجماليات لا تتحرك.' },
      table: {
        head: [ { en: 'Metric', ar: 'المقياس' }, { en: 'Before', ar: 'قبل' }, { en: 'After 2-for-1', ar: 'بعد 2-لـ1' } ],
        rows: [
          [ { en: 'Shares outstanding', ar: 'الأسهم القائمة' }, '100,000', '200,000' ],
          [ { en: 'Price per share', ar: 'السعر للسهم' }, '$80', '$40' ],
          [ { en: 'EPS', ar: 'ربحية السهم' }, '$4.00', '$2.00' ],
          [ { en: 'Market value', ar: 'القيمة السوقية' }, '$8,000,000', '$8,000,000' ]
        ]
      }},

    { type: 'visual', kind: 'table',
      caption: { en: 'Equity accounts before and after the 10% stock dividend (Lec 3 slide 26; after-column derived from the slide’s transfers).', ar: 'بنود الملكية قبل وبعد توزيع الأسهم 10% (المحاضرة 3 شريحة 26؛ عمود بعد مشتق من نقلات الشريحة).' },
      table: {
        head: [ { en: 'Account', ar: 'البند' }, { en: 'Before', ar: 'قبل' }, { en: 'Change', ar: 'التغير' }, { en: 'After', ar: 'بعد' } ],
        rows: [
          [ { en: 'Common stock ($2 par)', ar: 'أسهم عادية (اسمي 2)' }, '$200,000', '+$20,000', '$220,000' ],
          [ { en: 'Paid-in capital in excess of par', ar: 'المدفوع الإضافي فوق الاسمي' }, '$300,000', '+$80,000', '$380,000' ],
          [ { en: 'Retained earnings', ar: 'الأرباح المحتجزة' }, '$500,000', '−$100,000', '$400,000' ],
          [ { en: 'Total equity', ar: 'إجمالي الملكية' }, '$1,000,000', '$0', '$1,000,000' ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Treating a stock dividend as new wealth for shareholders.', ar: 'اعتبار توزيع الأسهم ثروة جديدة للمساهمين.' },
        why: { en: 'Price falls in exact proportion; total value is unchanged.', ar: 'السعر ينخفض بتناسب تام؛ والقيمة الإجمالية لا تتغير.' },
        correct: { en: '105 shares × $23.81 = 100 shares × $25 = $2,500.', ar: '‏105 أسهم × 23.81 = 100 سهم × 25 = 2,500 دولار.' } },
      { wrong: { en: 'Transferring retained earnings at par only.', ar: 'نقل الأرباح المحتجزة بالاسمي فقط.' },
        why: { en: 'The lecture transfers at market price: par to CS, the excess to PIC.', ar: 'المحاضرة تنقل بسعر السوق: الاسمي للعادية والفائض للإضافي.' },
        correct: { en: 'RE falls by new shares × market ($100,000), not by $20,000.', ar: 'المحتجزة تنخفض الجديدة × السوق (100,000) لا 20,000 دولار.' } },
      { wrong: { en: 'Dividing price by the split ratio in a REVERSE split.', ar: 'قسمة السعر على نسبة التجزئة في تجزئة عكسية.' },
        why: { en: 'Reverse splits multiply the price (fewer, dearer shares).', ar: 'التجزئة العكسية تضرب السعر (أسهم أقل وأغلى).' },
        correct: { en: '1-for-5: price × 5 = $50; shares ÷ 5 = 10,000.', ar: '‏1-لـ5: السعر × 5 = 50 دولارًا؛ والأسهم ÷ 5 = 10,000.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: '200,000 shares at $25 declare a 5% stock dividend. New market price (in $, 2 dp)?', ar: '‏200,000 سهم بسعر 25 دولارًا تعلن توزيع أسهم 5%. السعر السوقي الجديد (بالدولار، خانتان)؟' }, answer: 23.81, tol: 0.01, unit: '$', explain: { en: '5,000,000 ÷ 210,000 = 23.8095 ≈ 23.81.', ar: '‏5,000,000 ÷ 210,000 = 23.8095 ≈ 23.81.' } },
      { type: 'num', q: { en: 'How many NEW shares does that 5% stock dividend issue?', ar: 'كم سهمًا جديدًا يصدره توزيع الأسهم 5% ذلك؟' }, answer: 10000, tol: 0, unit: 'shares', explain: { en: '200,000 × 0.05 = 10,000.', ar: '‏200,000 × 0.05 = 10,000.' } },
      { type: 'mcq', q: { en: 'A 2-for-1 split changes total market value by:', ar: 'تجزئة 2-لـ1 تغير إجمالي القيمة السوقية بمقدار:' }, options: [ { en: 'Nothing — it stays the same', ar: 'لا شيء — تبقى كما هي' }, { en: 'Doubling it', ar: 'مضاعفتها' }, { en: 'Halving it', ar: 'تنصيفها' }, { en: 'It depends on EPS', ar: 'يعتمد على EPS' } ], answer: 0, explain: { en: 'Shares double while price halves; the product is invariant.', ar: 'الأسهم تتضاعف والسعر يتنصف؛ والحاصل ثابت.' } },
      { type: 'tf', q: { en: 'A stock dividend increases a shareholder’s total wealth immediately.', ar: 'توزيع الأسهم يزيد ثروة المساهم الإجمالية فورًا.' }, answer: false, explain: { en: 'Value invariance: more shares at a proportionally lower price.', ar: 'ثبات القيمة: أسهم أكثر بسعر أقل تناسبيًا.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Stock dividend', ar: 'توزيع أسهم' }, back: { en: 'Extra shares proportional to holdings; price falls so wealth is unchanged.', ar: 'أسهم إضافية متناسبة مع الملكية؛ والسعر ينخفض فلا تتغير الثروة.' } },
      { front: { en: 'New price after stock dividend', ar: 'السعر الجديد بعد توزيع الأسهم' }, back: { en: 'Old price × old shares ÷ total new shares.', ar: 'القديم × الأسهم القديمة ÷ إجمالي الجديدة.' } },
      { front: { en: 'Equity transfer at declaration', ar: 'النقل في بنود الملكية عند الإعلان' }, back: { en: 'RE −= new × market; CS += new × par; PIC += new × (market − par).', ar: 'المحتجزة −= الجديدة × السوق؛ العادية += الجديدة × الاسمي؛ الإضافي += الجديدة × (السوق − الاسمي).' } },
      { front: { en: '2-for-1 split effect', ar: 'أثر تجزئة 2-لـ1' }, back: { en: 'Shares ×2; price ÷2; EPS ÷2; market value unchanged.', ar: 'الأسهم ×2؛ السعر ÷2؛ EPS ÷2؛ والقيمة السوقية ثابتة.' } },
      { front: { en: '1-for-5 reverse split effect', ar: 'أثر تجزئة عكسية 1-لـ5' }, back: { en: 'Shares ÷5; price ×5; EPS ×5.', ar: 'الأسهم ÷5؛ السعر ×5؛ EPS ×5.' } }
    ]},

    { type: 'summary', points: [
      { en: 'Stock dividends and splits re-slice equity; total market value never moves.', ar: 'توزيعات الأسهم والتجزئة تعيد تقطيع الملكية؛ والقيمة السوقية الإجمالية لا تتحرك أبدًا.' },
      { en: 'Price and EPS scale by old shares ÷ new shares.', ar: 'السعر وEPS يتدرجان بنسبة الأسهم القديمة ÷ الجديدة.' },
      { en: 'The accounting transfer uses market price: par to CS, excess to PIC, full amount out of RE.', ar: 'النقل المحاسبي يستخدم سعر السوق: الاسمي للعادية والفائض للإضافي والمبلغ كاملًا من المحتجزة.' },
      { en: 'Reverse splits are the same mirror with shares shrinking.', ar: 'التجزئة العكسية نفس المرآة مع انكماش الأسهم.' }
    ], canExplain: [
      { en: 'Why your brokerage balance is unchanged on a stock-dividend morning.', ar: 'لماذا رصيدك في الوساطة لا يتغير صباح توزيع الأسهم.' },
      { en: 'Why retained earnings fall by market value, not par.', ar: 'لماذا تنخفض الأرباح المحتجزة بالقيمة السوقية لا بالاسمي.' },
      { en: 'Why a reverse split is often used to lift a penny price.', ar: 'لماذا تُستخدم التجزئة العكسية غالبًا لرفع سعر منخفض جدًا.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L12 */
window.COURSE.lessons.push({
  id: 'l12', module: 'm3', minutes: 40,
  title: { en: 'Share Repurchases & DRIPs', ar: 'إعادة شراء الأسهم وخطط إعادة استثمار التوزيعات' },
  subtitle: { en: 'Buying back shares as a payout alternative, and reinvesting dividends at a discount', ar: 'شراء الشركة لأسهمها كبديل للتوزيعات، وإعادة استثمار التوزيعات بخصم' },
  source: { en: 'Lecture 3, slides 29–32 (Chapter 14) + supplementary overview', ar: 'المحاضرة 3، الشرائح 29–32 (الفصل 14) + نظرة تكميلية' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Compute shares repurchased from a cash amount and price.', ar: 'حساب الأسهم المعاد شراؤها من مبلغ نقدي وسعر.' },
      { en: 'Compute EPS after a repurchase.', ar: 'حساب EPS بعد إعادة الشراء.' },
      { en: 'Explain why repurchases can substitute for dividends and what they signal.', ar: 'شرح لماذا يمكن أن تحل إعادة الشراء محل التوزيعات وماذا تشير.' },
      { en: 'Value a DRIP purchase including a discount.', ar: 'تسعير شراء خطة إعادة الاستثمار شاملًا الخصم.' },
      { en: 'Outline the real-world drivers: taxes, signalling, agency costs, clienteles (supplementary).', ar: 'إجمال محركات الواقع: الضرائب والإشارة وتكاليف الوكالة والجمهوريات (تكميلي).' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'EPS', ar: 'ربحية السهم' },
        def: { en: 'Earnings ÷ shares outstanding.', ar: 'الأرباح ÷ الأسهم القائمة.' },
        why: { en: 'A repurchase shrinks the denominator — the whole EPS effect.', ar: 'إعادة الشراء تصغّر المقام — كل أثر EPS.' },
        example: { en: '400,000 ÷ 150,000 = $2.67 after buying back 50,000 shares.', ar: '‏400,000 ÷ 150,000 = 2.67 دولار بعد شراء 50,000 سهم.' },
        link: 'l7' },
      { term: { en: 'DPS', ar: 'التوزيع للسهم' },
        def: { en: 'Cash dividend per share — the amount a DRIP reinvests.', ar: 'التوزيعات النقدية للسهم — المبلغ الذي تعيد خطة DRIP استثماره.' },
        why: { en: 'DRIP cash = shares × DPS before any discount applies.', ar: 'نقد DRIP = الأسهم × DPS قبل أي خصم.' },
        example: { en: '500 shares × $2.00 = $1,000 reinvested.', ar: '‏500 سهم × 2.00 = 1,000 دولار يُعاد استثمارها.' },
        link: 'l9' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Instead of handing cash to all shareholders, a firm can buy some of its own shares in the market: those who sell get cash now, those who keep their shares own a bigger slice of a smaller share count — and EPS rises because earnings spread over fewer shares. It is payout policy with an option attached: each holder chooses whether to take the cash.', ar: 'بدل تسليم النقد لكل المساهمين، يمكن للشركة شراء بعض أسهمها من السوق: من يبيع يستلم نقدًا الآن، ومن يبقي أسهمه يملك شريحة أكبر من عدد أسهم أصغر — ويرتفع EPS لأن الأرباح تُوزع على أسهم أقل. إنها سياسة توزيع بخيار مرفق: كل مالك يختار هل يستلم النقد.' },
      { en: 'At the other end, a DRIP lets shareholders who want MORE shares skip the cash entirely: dividends automatically buy new shares, sometimes at a small discount. Between repurchases and DRIPs sits the full menu of payout mechanics the lecture covers.', ar: 'على الطرف الآخر، تتيح DRIP للمساهمين الراغبين بمزيد من الأسهم تجاوز النقد تمامًا: التوزيعات تشتري تلقائيًا أسهمًا جديدة، أحيانًا بخصم صغير. وبين إعادة الشراء وDRIP تقع القائمة الكاملة لآليات التوزيع التي تغطيها المحاضرة.' }
    ], analogy: { en: 'A pizza co-op: the co-op can hand out cash slices (dividends), buy back some members’ slices so the rest own more (repurchase), or let members auto-convert their cash slices into extra pizza (DRIP).', ar: 'تعاونية بيتزا: يمكن للتعاونية توزيع شرائح نقدية (توزيعات)، أو شراء شرائح بعض الأعضاء ليملك الباقون أكثر (إعادة شراء)، أو ترك الأعضاء يحوّلون شرائحهم النقدية تلقائيًا إلى بيتزا إضافية (DRIP).' }, analogyLimit: { en: 'Real repurchases also move prices via signalling and tax differences — the pizza story has no taxes.', ar: 'إعادة الشراء الحقيقية تحرك الأسعار أيضًا عبر الإشارة وفروق الضرائب — وقصة البيتزا بلا ضرائب.' } },

    { type: 'academic', paras: [
      { en: 'Repurchase mechanics (slide 29): shares repurchased = cash ÷ repurchase price; EPS afterwards = earnings ÷ (shares outstanding − shares repurchased). Fewer shares also concentrate ownership and can signal that management sees undervaluation.', ar: 'آلية إعادة الشراء (شريحة 29): الأسهم المشتراة = النقد ÷ سعر الشراء؛ وEPS بعدها = الأرباح ÷ (القائمة − المشتراة). وأسهم أقل تركز الملكية أيضًا وقد تشير إلى أن الإدارة ترى قيمة أقل من الحقيقية.' },
      { en: 'DRIP mechanics (slide 31): dividend cash = shares × DPS; when a discount d applies, the purchase price = market × (1 − d); new shares = dividend cash ÷ price used. Fractional outcomes are rounded in practice (the slide rounds 26.32 to 26).', ar: 'آلية DRIP (شريحة 31): نقد التوزيعات = الأسهم × DPS؛ وعند وجود خصم d يكون سعر الشراء = السوق × (1 − d)؛ والأسهم الجديدة = نقد التوزيعات ÷ السعر المستخدم. والنواتج الكسرية تُقرّب عمليًا (الشريحة تقرّب 26.32 إلى 26).' },
      { en: 'Supplementary overview (covers the lecture’s stated objective 7, which the slides list but do not develop): taxes make repurchases attractive when capital-gains rates beat dividend rates, since selling shareholders choose their timing; signalling reads dividend changes as management’s private news about future cash flows; agency costs argue that paying cash out discipline managers with fewer free funds to waste; and clientele effects note that different investor groups (retirees vs tax-sensitive funds) prefer different payout levels, so a stable policy attracts a stable holder base.', ar: 'نظرة تكميلية (تغطي الهدف السابع المعلن في المحاضرة والذي تذكره الشرائح دون توسعه): الضرائب تجعل إعادة الشراء جذابة عندما تكون معدلات الأرباح الرأسمالية أقل من معدلات التوزيعات، لأن المساهم البائع يختار توقيته؛ والإشارة تقرأ تغيرات التوزيعات كأخبار الإدارة الخاصة عن التدفقات المستقبلية؛ وتكاليف الوكالة ترى أن دفع النقد يخرج يؤدّب المديرين بأموال حرة أقل تُهدر؛ وأثر الجمهوريات يلحظ أن فئات مستثمرين مختلفة (متقاعدون مقابل صناديق حساسة للضريبة) تفضل مستويات توزيع مختلفة، لذا السياسة المستقرة تجتذب قاعدة مالكين مستقرة.' }
    ], defs: [
      { term: { en: 'Share repurchase', ar: 'إعادة شراء الأسهم' }, def: { en: 'The firm buying its own shares in the market, reducing shares outstanding.', ar: 'شراء الشركة أسهمها نفسها من السوق بما يقلص الأسهم القائمة.' } },
      { term: { en: 'Dividend reinvestment plan (DRIP)', ar: 'خطة إعادة استثمار التوزيعات' }, def: { en: 'Automatic use of dividends to purchase more shares, sometimes at a discount.', ar: 'استخدام تلقائي للتوزيعات لشراء أسهم إضافية، أحيانًا بخصم.' } },
      { term: { en: 'Clientele effect', ar: 'أثر الجمهوريات' }, def: { en: 'The tendency of investor groups with shared tax/income preferences to cluster around matching payout policies.', ar: 'ميل فئات المستثمرين ذوي تفضيلات ضريبية/دخلية مشتركة إلى التجمع حول سياسات توزيع تناسب تفضيلاتها الضريبية والدخلية.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Repurchase in one line: cash ÷ price = shares removed; then EPS = earnings ÷ smaller count. DRIP in one line: your dividend cash buys shares at (maybe discounted) price.', ar: 'إعادة الشراء في سطر: النقد ÷ السعر = أسهم تُحذف؛ ثم EPS = الأرباح ÷ عدد أصغر. وDRIP في سطر: نقد توزيعاتك يشتري أسهمًا بسعر (ربما مخفض).' },
      { en: 'Both are just the payout decision viewed from the other side: the firm returning cash by shrinking itself, or the shareholder returning cash by growing their stake.', ar: 'كلاهما قرار التوزيع منظورًا إليه من الجهة الأخرى: الشركة تعيد النقد بتصغير نفسها، أو المساهم يعيد النقد بتكبير حصته.' }
    ], steps: [
      { en: 'Shares repurchased = cash ÷ repurchase price.', ar: 'الأسهم المشتراة = النقد ÷ سعر الشراء.' },
      { en: 'New count = old count − repurchased.', ar: 'العدد الجديد = القديم − المشتراة.' },
      { en: 'EPS after = earnings ÷ new count.', ar: '‏EPS بعد = الأرباح ÷ العدد الجديد.' },
      { en: 'DRIP: cash = shares × DPS; price used = market × (1 − discount); new shares = cash ÷ price used.', ar: '‏DRIP: النقد = الأسهم × DPS؛ السعر المستخدم = السوق × (1 − الخصم)؛ الجديدة = النقد ÷ السعر المستخدم.' }
    ], recap: { en: 'Repurchase = payout with an option for each holder; DRIP = the shareholder opting back in. Both obey cash ÷ price = shares.', ar: 'إعادة الشراء = توزيع بخيار لكل مالك؛ وDRIP = عودة المساهم للاشتراك. وكلاهما يخضع لنقد ÷ سعر = أسهم.' } },

    { type: 'formula', id: 'f-repurch', tag: 'course',
      name: { en: 'Repurchase: shares and EPS', ar: 'إعادة الشراء: الأسهم وEPS' },
      tex: 'N_{rep} = \\frac{\\text{Cash}}{P}, \\qquad EPS_{new} = \\frac{\\text{Earnings}}{N - N_{rep}}',
      vars: [
        { sym: 'N_{rep}', en: 'shares repurchased', ar: 'الأسهم المعاد شراؤها' },
        { sym: 'P', en: 'repurchase price per share', ar: 'سعر الشراء للسهم' },
        { sym: 'N', en: 'shares outstanding before', ar: 'الأسهم القائمة قبل' }
      ],
      purpose: { en: 'Quantifies how much of the company a cash amount buys back and the EPS consequence.', ar: 'يكمم كم من الشركة يشتري المبلغ النقدي وأثر ذلك على EPS.' },
      assumptions: { en: 'All cash is spent at price P; earnings unchanged.', ar: 'كل النقد يُنفق عند السعر P؛ والأرباح ثابتة.' },
      when: { en: 'Given cash, price, share count and earnings.', ar: 'عند وجود النقد والسعر وعدد الأسهم والأرباح.' },
      inputs: { en: 'Cash, P, N, earnings.', ar: 'النقد وP وN والأرباح.' },
      cautions: { en: 'Subtract repurchased shares BEFORE dividing earnings.', ar: 'اطرح الأسهم المشتراة قبل قسمة الأرباح.' },
      illustration: { en: '$1m ÷ $20 = 50,000 shares; EPS = 400,000 ÷ 150,000 = $2.67.', ar: '‏1 مليون ÷ 20 = 50,000 سهم؛ EPS = 400,000 ÷ 150,000 = 2.67 دولار.' },
      sensitivity: { en: 'A higher repurchase price removes fewer shares and lifts EPS less.', ar: 'سعر شراء أعلى يحذف أسهمًا أقل ويرفع EPS أقل.' },
      meaning: { en: 'The EPS rise is pure denominator arithmetic, not new profit.', ar: 'ارتفاع EPS حساب مقام محض، لا ربح جديد.' } },

    { type: 'formula', id: 'f-drip', tag: 'course',
      name: { en: 'DRIP shares purchased', ar: 'أسهم تشتريها DRIP' },
      tex: 'Cash = S \\times DPS, \\quad P_{disc} = P \\times (1 - d), \\quad S_{new} = \\frac{Cash}{P_{disc}}',
      vars: [
        { sym: 'S', en: 'shares held', ar: 'الأسهم المملوكة' },
        { sym: 'DPS', en: 'dividend per share', ar: 'التوزيعات للسهم' },
        { sym: 'd', en: 'DRIP discount (0 if none)', ar: 'خصم DRIP (0 إن لم يوجد)' },
        { sym: 'P_{disc}', en: 'price actually paid', ar: 'السعر المدفوع فعليًا' }
      ],
      purpose: { en: 'Converts a dividend entitlement into the number of extra shares acquired.', ar: 'يحوّل استحقاق التوزيعات إلى عدد الأسهم الإضافية المكتسبة.' },
      assumptions: { en: 'Whole-share rounding applied afterwards by the plan.', ar: 'تقريب للأسهم الكاملة تطبقه الخطة لاحقًا.' },
      when: { en: 'Given holdings, DPS, market price and any discount.', ar: 'عند وجود الملكية وDPS وسعر السوق وأي خصم.' },
      inputs: { en: 'S, DPS, P, d.', ar: '‏S وDPS وP وd.' },
      cautions: { en: 'With no discount use the full market price as denominator.', ar: 'بلا خصم استخدم سعر السوق كاملًا مقامًا.' },
      illustration: { en: '500 sh × $2 = $1,000; at 5% off $40 ⇒ $38 ⇒ 26.32 ≈ 26 shares.', ar: '‏500 سهم × 2 = 1,000 دولار؛ بخصم 5% من 40 ⇒ 38 ⇒ 26.32 ≈ 26 سهمًا.' },
      sensitivity: { en: 'A bigger discount buys more shares for the same dividend cash.', ar: 'خصم أكبر يشتري أسهمًا أكثر لنفس نقد التوزيعات.' },
      meaning: { en: 'Compounding without brokerage friction.', ar: 'تركيب بلا احتكاك وساطة.' } },

    { type: 'example', title: { en: 'Repurchase and the new EPS (Lec 3, slides 29–30)', ar: 'إعادة الشراء وEPS الجديد (المحاضرة 3، شريحتان 29–30)' },
      context: { en: '$1,000,000 cash; 200,000 shares at $20; earnings $400,000.', ar: 'نقد 1,000,000 دولار؛ 200,000 سهم بسعر 20؛ أرباح 400,000 دولار.' },
      source: { en: 'Lecture 3, slides 29–30, Q1–Q2', ar: 'المحاضرة 3، شريحتان 29–30، س1–س2' },
      steps: [
        { kind: 'calc', body: { en: 'Shares repurchased = 1,000,000 ÷ 20 = 50,000.', ar: 'الأسهم المشتراة = 1,000,000 ÷ 20 = 50,000.' }, math: ['\\frac{1{,}000{,}000}{20} = 50{,}000'] },
        { kind: 'calc', body: { en: 'New count = 150,000; EPS = 400,000 ÷ 150,000 = $2.67.', ar: 'العدد الجديد = 150,000؛ EPS = 400,000 ÷ 150,000 = 2.67 دولار.' }, math: ['\\frac{400{,}000}{150{,}000} = 2.67'] },
        { kind: 'interpret', body: { en: 'EPS rises from $2.00 to $2.67 with zero new profit — purely fewer slices.', ar: 'يرتفع EPS من 2.00 إلى 2.67 دولار بصفر ربح جديد — مجرد شرائح أقل.' } },
        { kind: 'verify', body: { en: 'Before: 400,000 ÷ 200,000 = 2.00; the jump matches the 25% share reduction.', ar: 'قبل: 400,000 ÷ 200,000 = 2.00؛ والقفزة تطابق خفض الأسهم 25%.' } }
      ]},

    { type: 'example', title: { en: 'DRIP with and without a discount (Lec 3, slide 32)', ar: '‏DRIP بخصم وبدونه (المحاضرة 3، شريحة 32)' },
      context: { en: '500 shares, DPS $2.00; case A: 5% discount on a $40 market; case B: no discount, price $50.', ar: '‏500 سهم وDPS ‏2.00 دولار؛ حالة أ: خصم 5% على سوق 40؛ حالة ب: بلا خصم والسعر 50.' },
      source: { en: 'Lecture 3, slide 32, Q1–Q2', ar: 'المحاضرة 3، شريحة 32، س1–س2' },
      steps: [
        { kind: 'calc', body: { en: 'Dividend cash = 500 × 2 = $1,000.', ar: 'نقد التوزيعات = 500 × 2 = 1,000 دولار.' } },
        { kind: 'calc', body: { en: 'A: price = 40 × 0.95 = $38 ⇒ 1,000 ÷ 38 = 26.32 ≈ 26 shares.', ar: 'أ: السعر = 40 × 0.95 = 38 دولارًا ⇒ 1,000 ÷ 38 = 26.32 ≈ 26 سهمًا.' }, math: ['40 \\times 0.95 = 38', '\\frac{1{,}000}{38} = 26.32'] },
        { kind: 'calc', body: { en: 'B: 1,000 ÷ 50 = 20 shares.', ar: 'ب: 1,000 ÷ 50 = 20 سهمًا.' } },
        { kind: 'interpret', body: { en: 'The 5% discount is worth ~6 extra shares on the same $1,000.', ar: 'الخصم 5% يساوي نحو 6 أسهم إضافية على نفس الـ1,000 دولار.' } }
      ]},

    { type: 'visual', kind: 'table',
      caption: { en: 'Repurchase effect (Lec 3 slides 29–30): the denominator story.', ar: 'أثر إعادة الشراء (المحاضرة 3 شريحتان 29–30): قصة المقام.' },
      table: {
        head: [ { en: 'Metric', ar: 'المقياس' }, { en: 'Before', ar: 'قبل' }, { en: 'After $1m repurchase', ar: 'بعد شراء بمليون دولار' } ],
        rows: [
          [ { en: 'Shares outstanding', ar: 'الأسهم القائمة' }, '200,000', '150,000' ],
          [ { en: 'Earnings', ar: 'الأرباح' }, '$400,000', '$400,000' ],
          [ { en: 'EPS', ar: 'ربحية السهم' }, '$2.00', '$2.67' ],
          [ { en: 'Cash held', ar: 'النقد المحتفظ به' }, '$1,000,000', '$0' ]
        ]
      }},

    { type: 'mistakes', items: [
      { wrong: { en: 'Dividing earnings by the ORIGINAL share count after a repurchase.', ar: 'قسمة الأرباح على العدد الأصلي للأسهم بعد إعادة الشراء.' },
        why: { en: 'The whole point is the smaller denominator.', ar: 'جوهر الأمر هو المقام الأصغر.' },
        correct: { en: '400,000 ÷ 150,000 = 2.67, not 400,000 ÷ 200,000.', ar: '‏400,000 ÷ 150,000 = 2.67 لا 400,000 ÷ 200,000.' } },
      { wrong: { en: 'Applying the DRIP discount to the dividend cash instead of the price.', ar: 'تطبيق خصم DRIP على نقد التوزيعات بدل السعر.' },
        why: { en: 'The discount lowers the purchase price, so it belongs in the denominator.', ar: 'الخصم يخفض سعر الشراء لذا مكانه المقام.' },
        correct: { en: '1,000 ÷ (40 × 0.95) = 26.32, not (1,000 × 1.05) ÷ 40.', ar: '‏1,000 ÷ (40 × 0.95) = 26.32 لا (1,000 × 1.05) ÷ 40.' } },
      { wrong: { en: 'Reading a repurchase as new earnings power.', ar: 'قراءة إعادة الشراء كقدرة أرباح جديدة.' },
        why: { en: 'Earnings are unchanged; only per-share figures move.', ar: 'الأرباح لا تتغير؛ الأرقام لكل سهم فقط تتحرك.' },
        correct: { en: 'Label the EPS rise as denominator arithmetic in any interpretation.', ar: 'صنّف ارتفاع EPS كحساب مقام في أي تفسير.' } }
    ]},

    { type: 'flags', items: [
      { en: 'The lecture’s learning objective 7 (taxes, signalling, agency costs, clientele effects) is listed on slide 2 but never developed in the slides; a concise supplementary overview is provided in this lesson and is explicitly marked supplementary.', ar: 'الهدف التعليمي السابع في المحاضرة (الضرائب والإشارة وتكاليف الوكالة وأثر الجمهوريات) مذكور في شريحة 2 دون توسعه في الشرائح؛ وتُقدَّم نظرة تكميلية موجزة في هذا الدرس معلَّمة صراحةً كتكميلية.' },
      { en: 'Slide 32 rounds 26.32 DRIP shares to 26; plans differ on fractional handling (some credit fractions). Both the exact 26.32 and the rounded 26 are shown.', ar: 'شريحة 32 تقرّب 26.32 سهم DRIP إلى 26؛ والخطط تختلف في معالجة الكسور (بعضها يحتسبها). يُعرض كلاهما: 26.32 بالضبط و26 المقرّبة.' }
    ]},

    { type: 'quiz', items: [
      { type: 'num', q: { en: '$1,000,000 cash at a $20 repurchase price buys back how many shares?', ar: 'نقد 1,000,000 دولار بسعر شراء 20 دولارًا يشتري كم سهمًا؟' }, answer: 50000, tol: 0, unit: 'shares', explain: { en: '1,000,000 ÷ 20 = 50,000.', ar: '‏1,000,000 ÷ 20 = 50,000.' } },
      { type: 'num', q: { en: 'After that repurchase, EPS with $400,000 earnings is (in $, 2 dp)?', ar: 'بعد تلك إعادة الشراء، EPS بأرباح 400,000 دولار يساوي (بالدولار، خانتان)؟' }, answer: 2.67, tol: 0.01, unit: '$', explain: { en: '400,000 ÷ 150,000 = 2.6667 ≈ 2.67.', ar: '‏400,000 ÷ 150,000 = 2.6667 ≈ 2.67.' } },
      { type: 'num', q: { en: 'DRIP: 500 shares, DPS $2, 5% discount, market $40. Whole shares purchased?', ar: '‏DRIP: ‏500 سهم وDPS ‏2 دولار وخصم 5% وسوق 40. كم سهمًا كاملًا يُشترى؟' }, answer: 26, tol: 0, unit: 'shares', explain: { en: '1,000 ÷ 38 = 26.32 ⇒ 26 whole shares.', ar: '‏1,000 ÷ 38 = 26.32 ⇒ 26 سهمًا كاملًا.' } },
      { type: 'mcq', q: { en: 'A share repurchase is best described as:', ar: 'إعادة شراء الأسهم تُوصف أفضل وصف بأنها:' }, options: [ { en: 'A payout alternative that lets holders choose whether to take cash', ar: 'بديل توزيع يتيح للمالكين اختيار استلام النقد' }, { en: 'A way to raise new equity capital', ar: 'طريقة لجمع رأس مال ملكية جديد' }, { en: 'A stock split in disguise', ar: 'تجزئة أسهم مقنعة' }, { en: 'A mandatory dividend in shares', ar: 'توزيعات إجبارية بأسهم' } ], answer: 0, explain: { en: 'Selling holders take cash; remaining holders keep a larger slice (slide 29).', ar: 'المالكون البائعون يستلمون نقدًا؛ والباقون يملكون شريحة أكبر (شريحة 29).' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Shares repurchased', ar: 'الأسهم المعاد شراؤها' }, back: { en: 'Cash ÷ repurchase price.', ar: 'النقد ÷ سعر الشراء.' } },
      { front: { en: 'EPS after repurchase', ar: '‏EPS بعد إعادة الشراء' }, back: { en: 'Earnings ÷ (shares outstanding − repurchased).', ar: 'الأرباح ÷ (القائمة − المشتراة).' } },
      { front: { en: 'DRIP discounted price', ar: 'سعر DRIP المخصوم' }, back: { en: 'Market price × (1 − discount).', ar: 'سعر السوق × (1 − الخصم).' } },
      { front: { en: 'Why repurchases can signal undervaluation', ar: 'لماذا قد تشير إعادة الشراء إلى قيمة أقل من الحقيقية' }, back: { en: 'Management spends cash on its own stock when it believes the price is low.', ar: 'الإدارة تنفق النقد على سهمها عندما تعتقد أن السعر منخفض.' } },
      { front: { en: 'Clientele effect', ar: 'أثر الجمهوريات' }, back: { en: 'Investor groups cluster around payout policies matching their tax/income needs.', ar: 'فئات المستثمرين تتجمع حول سياسات توزيع تناسب ضرائبها/دخلها.' } }
    ]},

    { type: 'summary', points: [
      { en: 'Repurchase: cash ÷ price removes shares; EPS rises via the smaller denominator.', ar: 'إعادة الشراء: النقد ÷ السعر يحذف أسهمًا؛ وEPS يرتفع بالمقام الأصغر.' },
      { en: 'DRIP: dividend cash auto-buys shares, discounted price when offered.', ar: '‏DRIP: نقد التوزيعات يشتري أسهمًا تلقائيًا، وبسعر مخصوم إن وُجد.' },
      { en: 'Repurchases give each holder the option to take cash — payout with choice.', ar: 'إعادة الشراء تعطي كل مالك خيار استلام النقد — توزيع مع خيار.' },
      { en: 'Real-world policy also reflects taxes, signalling, agency costs and clienteles (supplementary).', ar: 'سياسة الواقع تعكس أيضًا الضرائب والإشارة وتكاليف الوكالة والجمهوريات (تكميلي).' }
    ], canExplain: [
      { en: 'Why EPS can jump with zero operational improvement.', ar: 'لماذا يقفز EPS بصفر تحسين تشغيلي.' },
      { en: 'Why a discount makes a DRIP strictly better for participating holders.', ar: 'لماذا الخصم يجعل DRIP أفضل حتمًا للمشاركين.' },
      { en: 'Why a stable payout policy attracts a stable shareholder base.', ar: 'لماذا السياسة المستقرة تجتذب قاعدة مساهمين مستقرة.' }
    ]}
  ]
});
