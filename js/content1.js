/* ============================================================
   CONTENT — Module 1 (Lecture 1: Corporate Goals & CAPM, Ch. 8)
   Every block carries {en, ar}. 'tag' marks provenance:
     course  = taken from the uploaded slides
     supp    = supplementary teaching explanation added by us
   ============================================================ */
window.COURSE = window.COURSE || { modules: [], lessons: [] };

window.COURSE.modules.push(
  {
    id: 'm1',
    title: { en: 'Module 1 — Risk and Return Fundamentals', ar: 'الوحدة 1 — أساسيات العائد والمخاطر' },
    source: { en: 'Lecture 1 — “Corporate Goals and CAPM” (Chapter 8: Risk and Return Fundamentals)', ar: 'المحاضرة 1 — «أهداف الشركة ونموذج تسعير الأصول الرأسمالية» (الفصل 8: أساسيات العائد والمخاطر)' }
  }
);

/* ---------------------------------------------------------- L1 */
window.COURSE.lessons.push({
  id: 'l1', module: 'm1', minutes: 35,
  title: { en: 'Return and Risk Defined', ar: 'تعريف العائد والمخاطر' },
  subtitle: { en: 'The annual rate of return, the risk of a single asset, and the range', ar: 'معدل العائد السنوي، ومخاطر الأصل الواحد، والمدى' },
  source: { en: 'Lecture 1, slides 4–6 & 9–13 (Chapter 8)', ar: 'المحاضرة 1، الشرائح 4–6 و9–13 (الفصل 8)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Explain, in your own words, what “return” and “risk” mean for a financial manager.', ar: 'أن تشرح بأسلوبك معنى «العائد» و«المخاطر» بالنسبة للمدير المالي.' },
      { en: 'Calculate the annual rate of return of an asset from its prices and cash flows.', ar: 'أن تحسب معدل العائد السنوي لأصل ما من أسعاره وتدفقاته النقدية.' },
      { en: 'Use the range of returns to compare the risk of two investments with the same most-likely return.', ar: 'أن تستخدم مدى العوائد لمقارنة مخاطر استثمارين لهما نفس العائد الأرجح.' },
      { en: 'Justify a choice between two assets using risk-averse reasoning.', ar: 'أن تبرر الاختيار بين أصلين باستخدام منطق النفور من المخاطر.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Cash flow', ar: 'التدفق النقدي' },
        def: { en: 'Money actually received or paid during a period (dividends, interest, coupons).', ar: 'النقد المستلم أو المدفوع فعليًا خلال فترة (أرباح موزعة، فوائد، كوبونات).' },
        why: { en: 'Return counts cash you received, not only price changes.', ar: 'العائد يحتسب النقد الذي استلمته لا تغيّر السعر فقط.' },
        example: { en: 'Wal-Mart paid US$1.09 per share during 2012 — that is a cash flow to the shareholder.', ar: 'وزعت Wal-Mart ‏1.09 دولارًا للسهم خلال 2012 — وهذا تدفق نقدي للمساهم.' } },
      { term: { en: 'Price (value) at the beginning and end of a period', ar: 'السعر (القيمة) في بداية الفترة ونهايتها' },
        def: { en: 'P<t-1> is what the asset was worth when you bought it; P<t> is what it is worth now.', ar: 'P<t-1> هي قيمة الأصل عند شرائه؛ وP<t> هي قيمته الآن.' },
        why: { en: 'The gain or loss on price is the “capital” part of return.', ar: 'الربح أو الخسارة في السعر هو الشق «الرأسمالي» من العائد.' },
        example: { en: 'Apple went from US$90.75 to US$210.73 during 2012.', ar: 'ارتفع سهم Apple من 90.75 إلى 210.73 دولارًا خلال 2012.' } },
      { term: { en: 'Percentage and ratio', ar: 'النسبة المئوية والمعدل' },
        def: { en: 'A return is a ratio (gain ÷ amount invested) usually shown as a percent.', ar: 'العائد نسبة (الربح ÷ المبلغ المستثمر) تُعرض عادة كنسبة مئوية.' },
        why: { en: 'Dividing by the initial price makes returns comparable across assets of different prices.', ar: 'القسمة على السعر الابتدائي تجعل العوائد قابلة للمقارنة بين أصول مختلفة الأسعار.' },
        example: { en: 'A $2 gain on $100 invested is 2%; the same $2 on $50 invested is 4%.', ar: 'ربح 2 دولار على 100 دولار مستثمرة هو 2%؛ وربح 2 دولار على 50 دولارًا هو 4%.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Open the lecture with the CFO question from your slides: your Egyptian company holds EGP 100 million and the CEO allows exactly one option — expand the business, buy another company, invest in Egyptian stocks, repay debt, or keep the money in the bank. Every answer people give reduces to two ideas: how much extra return it offers, and how uncertain that return is.', ar: 'تفتتح المحاضرة بسؤال المدير المالي في شرائحك: شركتك المصرية لديها 100 مليون جنيه والرئيس التنفيذي يتيح خيارًا واحدًا فقط — توسيع النشاط، أو شراء شركة أخرى، أو الاستثمار في أسهم مصرية، أو سداد الديون، أو إبقاء المال في البنك. كل إجابة يقدمها الناس تختزل إلى فكرتين: كم عائدًا إضافيًا تقدم، وكم عدم التأكد في هذا العائد.' },
      { en: 'Then the slides drop three news shocks: the Central Bank raises interest rates, the pound depreciates, and inflation pushes input costs up. Each shock changes the answer. That is the heart of corporate finance: value depends on future cash flows, and future cash flows depend on the economic environment, so “return” and “risk” must be measured before any decision can be defended.', ar: 'ثم تطرح الشرائح ثلاث صدمات إخبارية: يرفع البنك المركزي أسعار الفائدة، وينخفض الجنيه، ويرفع التضخم تكاليف المدخلات. كل صدمة تغيّر الإجابة. هذا جوهر التمويل المؤسسي: القيمة تعتمد على التدفقات النقدية المستقبلية، وهذه تعتمد على البيئة الاقتصادية، لذا يجب قياس «العائد» و«المخاطر» قبل الدفاع عن أي قرار.' },
      { en: 'This lesson builds the two measuring sticks the rest of the course relies on: the annual rate of return (how much did I earn?) and simple measures of risk for a single asset (how spread out are the possible outcomes?).', ar: 'يبني هذا الدرس مقياسين يعتمد عليهما بقية المقرر: معدل العائد السنوي (كم ربحت؟) ومقاييس بسيطة لمخاطر الأصل الواحد (كم تتباعد النتائج الممكنة؟).' }
    ], analogy: { en: 'Think of two commute routes. Route A takes 30 minutes almost every day. Route B averages 30 minutes but sometimes takes 15 and sometimes 60. Both have the same “expected” time, but B is riskier because the actual outcome swings more. Finance measures exactly this swing.', ar: 'تخيل طريقين إلى العمل. الطريق أ يستغرق 30 دقيقة تقريبًا كل يوم. الطريق ب متوسطه 30 دقيقة لكنه أحيانًا 15 وأحيانًا 60. لكليهما نفس الزمن «المتوقع»، لكن ب أخطر لأن النتيجة الفعلية تتأرجح أكثر. التمويل يقيس هذا التأرجح بالضبط.' }, analogyLimit: { en: 'A commute has no cash flows and no price; in finance the swing is measured on returns (percent), and investors are assumed to dislike the swing (risk aversion).', ar: 'رحلة العمل ليس لها تدفقات نقدية ولا سعر؛ في التمويل يقاس التأرجح على العوائد (نسبًا)، ويُفترض أن المستثمرين يكرهون هذا التأرجح (النفور من المخاطر).' } },

    { type: 'academic', paras: [
      { en: 'Return is the total gain or loss on an asset over a period, expressed relative to the amount invested at the start of the period. It has two components: cash received during the period (C<t>, e.g. dividends) and the change in the asset’s price (P<t> − P<t-1>).', ar: 'العائد هو إجمالي الربح أو الخسارة على أصل خلال فترة، معبرًا عنه نسبة إلى المبلغ المستثمر في بداية الفترة. له مكونان: النقد المستلم خلال الفترة (C<t> مثل الأرباح الموزعة) والتغيّر في سعر الأصل (P<t> − P<t-1>).' },
      { en: 'Risk is the possibility that the actual return differs from the expected return. For a single asset the lecture first uses a very simple proxy: the range between the most optimistic and most pessimistic annual rates of return. A wider range means more uncertainty about the outcome.', ar: 'المخاطر هي احتمال أن يختلف العائد الفعلي عن العائد المتوقع. بالنسبة لأصل واحد تستخدم المحاضرة أولًا وكيلًا بسيطًا جدًا: المدى بين أكثر معدل عائد سنوي تفاؤلًا وأكثره تشاؤمًا. مدى أوسع يعني عدم تأكد أكبر حول النتيجة.' },
      { en: 'A risk-averse decision maker, faced with two investments offering the same most-likely return, chooses the one with the smaller range. This preference — more return is good, more risk is bad — underpins every model later in the course, including CAPM and the cost of capital.', ar: 'صانع القرار النافر من المخاطر، أمام استثمارين يقدمان نفس العائد الأرجح، يختار ذو المدى الأصغر. هذا التفضيل — مزيد من العائد جيد ومزيد من المخاطر سيئ — هو أساس كل نموذج لاحق في المقرر، بما في ذلك نموذج تسعير الأصول الرأسمالية وتكلفة رأس المال.' }
    ], defs: [
      { term: { en: 'Annual rate of return (r<t>)', ar: 'معدل العائد السنوي (r<t>)' }, def: { en: 'The total gain or loss during one year divided by the beginning-of-year value.', ar: 'إجمالي الربح أو الخسارة خلال سنة مقسومًا على قيمة بداية السنة.' } },
      { term: { en: 'Range of returns', ar: 'مدى العوائد' }, def: { en: 'Optimistic annual return minus pessimistic annual return.', ar: 'العائد السنوي التفاؤلي ناقص العائد السنوي التشاؤمي.' } },
      { term: { en: 'Risk aversion', ar: 'النفور من المخاطر' }, def: { en: 'The attitude of requiring extra return to accept extra risk; given equal returns, preferring less risk.', ar: 'الموقف الذي يطلب عائدًا إضافيًا لقبول مخاطر إضافية؛ وعند تساوي العوائد يفضل مخاطر أقل.' } }
    ], bullets: [
      { en: 'Return answers “how much did I earn?”; risk answers “how sure am I of that number?”', ar: 'العائد يجيب عن «كم ربحت؟»؛ والمخاطر تجيب عن «ما درجة تأكدك من هذا الرقم؟»' },
      { en: 'The range is a crude but fast risk measure: it uses only the two extreme outcomes and ignores everything in between.', ar: 'المدى مقياس مخاطر تقريبي لكنه سريع: يستخدم النتيجتين المتطرفتين فقط ويتجاهل كل ما بينهما.' }
    ]},

    { type: 'simple', paras: [
      { en: 'You buy something for a price. Later it is worth a different price, and maybe it paid you cash along the way. Your return is: (what you got) minus (what you paid), divided by (what you paid).', ar: 'تشتري شيئًا بسعر. لاحقًا تصبح قيمته سعرًا مختلفًا، وربما دفع لك نقدًا في الطريق. عائدك هو: (ما حصلت عليه) ناقص (ما دفعت)، مقسومًا على (ما دفعت).' },
      { en: 'Risk, for now, is just: how far apart are the best case and the worst case? If two deals promise the same typical profit but one can go much worse, the one that can go much worse is riskier.', ar: 'المخاطر، حتى الآن، هي ببساطة: كم التباعد بين أفضل حالة وأسوأ حالة؟ إذا وعدت صفقتان بنفس الربح المعتاد لكن إحداهما يمكن أن تسوء أكثر، فالتي يمكن أن تسوء أكثر هي الأخطر.' }
    ], steps: [
      { en: 'Write down the price you paid at the start (P<t-1>).', ar: 'دوّن السعر الذي دفعت في البداية (P<t-1>).' },
      { en: 'Write down the price at the end (P<t>) and any cash received (C<t>).', ar: 'دوّن السعر في النهاية (P<t>) وأي نقد استلمت (C<t>).' },
      { en: 'Return = (P<t> − P<t-1> + C<t>) ÷ P<t-1>. Multiply by 100 for a percent.', ar: 'العائد = (P<t> − P<t-1> + C<t>) ÷ P<t-1>. اضرب في 100 للحصول على نسبة.' },
      { en: 'For risk: subtract the pessimistic return from the optimistic return. Bigger gap = more risk.', ar: 'للمخاطر: اطرح العائد التشاؤمي من التفاؤلي. فجوة أكبر = مخاطر أكبر.' }
    ], recap: { en: 'Return = gain relative to what you invested. Risk (here) = spread between best and worst case. Same return + smaller spread = the risk-averse choice.', ar: 'العائد = الربح نسبة إلى ما استثمرت. المخاطر (هنا) = الانتشار بين أفضل وأسوأ حالة. نفس العائد + انتشار أصغر = خيار النافر من المخاطر.' } },

    { type: 'formula', id: 'f-ret', tag: 'course',
      name: { en: 'Annual rate of return', ar: 'معدل العائد السنوي' },
      tex: 'r_{t} = \\frac{P_{t} - P_{t-1} + C_{t}}{P_{t-1}}',
      vars: [
        { sym: 'r_{t}', en: 'rate of return during period t', ar: 'معدل العائد خلال الفترة t' },
        { sym: 'P_{t}', en: 'value (price) of the asset at the end of period t', ar: 'قيمة (سعر) الأصل في نهاية الفترة t' },
        { sym: 'P_{t-1}', en: 'value (price) at the beginning of period t', ar: 'قيمة (سعر) الأصل في بداية الفترة t' },
        { sym: 'C_{t}', en: 'cash flow received during period t (e.g. dividend)', ar: 'التدفق النقدي المستلم خلال الفترة t (مثل التوزيعات)' }
      ],
      purpose: { en: 'Converts a price change plus cash received into one comparable percentage.', ar: 'يحوّل تغيّر السعر مضافًا إليه النقد المستلم إلى نسبة مئوية واحدة قابلة للمقارنة.' },
      assumptions: { en: 'One holding period; cash flow occurs during the period; beginning price is the amount invested.', ar: 'فترة احتفاظ واحدة؛ التدفق النقدي يحدث خلال الفترة؛ سعر البداية هو المبلغ المستثمر.' },
      when: { en: 'Any time you know start price, end price and cash received for one period.', ar: 'في أي وقت تعرف سعر البداية وسعر النهاية والنقد المستلم لفترة واحدة.' },
      inputs: { en: 'Three numbers: P<t-1>, P<t>, C<t>.', ar: 'ثلاثة أرقام: P<t-1> وP<t> وC<t>.' },
      cautions: { en: 'Do not use it across multiple periods without compounding; do not drop C<t> when a dividend was paid; do not divide by the ending price.', ar: 'لا تستخدمه عبر فترات متعددة دون تركيب؛ لا تُسقط C<t> عند وجود توزيعات؛ لا تقسم على سعر النهاية.' },
      illustration: { en: 'Bought at $55.33, sold at $52.84, dividend $1.09: r = (52.84 − 55.33 + 1.09) ÷ 55.33 = −2.5%.', ar: 'شراء بسعر 55.33 وبيع بسعر 52.84 وتوزيعات 1.09: r = (52.84 − 55.33 + 1.09) ÷ 55.33 = −2.5%.' },
      sensitivity: { en: 'Higher end price or higher cash flow raises r; a higher purchase price lowers r for the same gain.', ar: 'سعر نهاية أعلى أو تدفق نقدي أعلى يرفع r؛ وسعر شراء أعلى يخفض r لنفس الربح.' },
      meaning: { en: 'A positive r means the investor gained; a negative r (like Wal-Mart’s −2.5%) means the dividend did not cover the price fall.', ar: '‏r موجب يعني أن المستثمر ربح؛ وr سالب (مثل −2.5% لـWal-Mart) يعني أن التوزيعات لم تغطِ انخفاض السعر.' } },

    { type: 'formula', id: 'f-range', tag: 'course',
      name: { en: 'Range of returns', ar: 'مدى العوائد' },
      tex: '\\text{Range} = r_{optimistic} - r_{pessimistic}',
      vars: [
        { sym: 'r_{optimistic}', en: 'best-case annual rate of return', ar: 'معدل العائد السنوي في أفضل حالة' },
        { sym: 'r_{pessimistic}', en: 'worst-case annual rate of return', ar: 'معدل العائد السنوي في أسوأ حالة' }
      ],
      purpose: { en: 'A one-number summary of how wide the possible outcomes are.', ar: 'تلخيص برقم واحد لسعة النتائج الممكنة.' },
      assumptions: { en: 'You have credible best and worst case estimates for the annual return.', ar: 'لديك تقديرات موثوقة لأفضل وأسوأ حالة للعائد السنوي.' },
      when: { en: 'Quick comparison of two assets with the same most-likely return.', ar: 'مقارنة سريعة لأصلين لهما نفس العائد الأرجح.' },
      inputs: { en: 'Two numbers: the optimistic and pessimistic returns.', ar: 'رقمان: العائد التفاؤلي والتشاؤمي.' },
      cautions: { en: 'It ignores probabilities and all outcomes between the extremes; never use it alone when expected returns differ (use standard deviation / CV in Lesson 2).', ar: 'يتجاهل الاحتمالات وكل النتائج بين الطرفين؛ لا تستخدمه وحده عندما تختلف العوائد المتوقعة (استخدم الانحراف المعياري/معامل الاختلاف في الدرس 2).' },
      illustration: { en: 'Asset A: 17% − 13% = 4%. Asset B: 23% − 7% = 16%. Same 15% most-likely return, so A is less risky.', ar: 'الأصل أ: 17% − 13% = 4%. الأصل ب: 23% − 7% = 16%. نفس العائد الأرجح 15%، لذا أ أقل خطرًا.' },
      sensitivity: { en: 'Widening either extreme increases the range and therefore measured risk.', ar: 'توسيع أي من الطرفين يزيد المدى وبالتالي المخاطر المقاسة.' },
      meaning: { en: 'The range is the worst-case shortfall relative to the best case, in percentage points of return.', ar: 'المدى هو أسوأ نقص ممكن مقارنة بأفضل حالة، بنقاط مئوية من العائد.' } },

    { type: 'example', title: { en: 'Course example — Apple and Wal-Mart, 2012', ar: 'مثال المقرر — Apple وWal-Mart عام 2012' },
      context: { en: 'Ramzi owned Apple and Wal-Mart during 2012 and wants the annual rate of return on each. Beginning prices: Apple US$90.75, Wal-Mart US$55.33. During the year Apple paid no dividend; Wal-Mart paid US$1.09. Ending prices: Apple US$210.73, Wal-Mart US$52.84.', ar: 'يمتلك رمزي أسهم Apple وWal-Mart خلال 2012 ويريد معدل العائد السنوي لكل منهما. أسعار البداية: Apple ‏90.75 دولارًا وWal-Mart ‏55.33 دولارًا. خلال السنة لم توزع Apple شيئًا؛ ووزعت Wal-Mart ‏1.09 دولار. أسعار النهاية: Apple ‏210.73 وWal-Mart ‏52.84.' },
      source: { en: 'Lecture 1, slide 10', ar: 'المحاضرة 1، الشريحة 10' },
      steps: [
        { kind: 'understand', body: { en: 'Two separate one-year holding periods. For each stock we need the percentage gain including dividends.', ar: 'فترتا احتفاظ سنتان منفصلتان. لكل سهم نحتاج نسبة الربح شاملة التوزيعات.' } },
        { kind: 'given', body: { en: 'Apple: P<t-1>=90.75, P<t>=210.73, C<t>=0. Wal-Mart: P<t-1>=55.33, P<t>=52.84, C<t>=1.09.', ar: '‏Apple: ‏P<t-1>=90.75 وP<t>=210.73 وC<t>=0. ‏Wal-Mart: ‏P<t-1>=55.33 وP<t>=52.84 وC<t>=1.09.' } },
        { kind: 'unknown', body: { en: 'r for each stock.', ar: '‏r لكل سهم.' } },
        { kind: 'method', body: { en: 'Apply the annual rate of return formula to each stock separately.', ar: 'طبّق معادلة معدل العائد السنوي على كل سهم على حدة.' } },
        { kind: 'sub', body: { en: 'Apple: r = (0 + 210.73 − 90.75) ÷ 90.75. Wal-Mart: r = (1.09 + 52.84 − 55.33) ÷ 55.33.', ar: '‏Apple: r = (0 + 210.73 − 90.75) ÷ 90.75. ‏Wal-Mart: ‏r = (1.09 + 52.84 − 55.33) ÷ 55.33.' }, math: ['r_{Apple} = \\frac{0 + 210.73 - 90.75}{90.75}', 'r_{WMT} = \\frac{1.09 + 52.84 - 55.33}{55.33}'] },
        { kind: 'calc', body: { en: 'Apple: 119.98 ÷ 90.75 = 1.3221 → 132.2%. Wal-Mart: −1.40 ÷ 55.33 = −0.0253 → −2.5%.', ar: '‏Apple: ‏119.98 ÷ 90.75 = 1.3221 ← 132.2%. ‏Wal-Mart: ‏−1.40 ÷ 55.33 = −0.0253 ← −2.5%.' } },
        { kind: 'interpret', body: { en: 'Apple more than doubled the invested money in one year. Wal-Mart lost value: the $1.09 dividend was not enough to offset a $2.49 price decline, so the total return is negative.', ar: 'ضاعفت Apple المال المستثمر أكثر من مرة في سنة واحدة. خسرت Wal-Mart قيمة: توزيعات 1.09 دولار لم تكفِ لتعويض انخفاض سعر قدره 2.49 دولار، لذا العائد الكلي سالب.' } },
        { kind: 'verify', body: { en: 'Units are percent; the negative sign for Wal-Mart is meaningful (a loss), not an error. Re-check: 55.33 × (1 − 0.025) ≈ 53.95 ≈ 52.84 + 1.09 = 53.93 ✓.', ar: 'الوحدات نسب مئوية؛ والإشارة السالبة لـWal-Mart ذات معنى (خسارة) وليست خطأ. إعادة فحص: 55.33 × (1 − 0.025) ≈ 53.95 ≈ 52.84 + 1.09 = 53.93 ✓.' } }
      ]},

    { type: 'example', title: { en: 'Course example — Nadir Company: choosing A or B by range', ar: 'مثال المقرر — شركة Nadir: الاختيار بين أ و ب وفق المدى' },
      context: { en: 'Nadir (custom golf equipment) must choose between investments A and B. Each needs US$10,000 and each has a most-likely return of 15%. A: pessimistic 13%, optimistic 17%. B: pessimistic 7%, optimistic 23%.', ar: 'على شركة Nadir (معدات جولف مخصصة) الاختيار بين الاستثمارين أ و ب. كل منهما يتطلب 10,000 دولار ولكل منهما عائد أرجح 15%. أ: تشاؤمي 13% وتفاؤلي 17%. ب: تشاؤمي 7% وتفاؤلي 23%.' },
      source: { en: 'Lecture 1, slides 11–12', ar: 'المحاضرة 1، الشريحتان 11–12' },
      steps: [
        { kind: 'understand', body: { en: 'Same outlay, same most-likely return. The only difference is the spread of possible outcomes.', ar: 'نفس النفقة ونفس العائد الأرجح. الفرق الوحيد هو انتشار النتائج الممكنة.' } },
        { kind: 'given', body: { en: 'A: 13% / 15% / 17%. B: 7% / 15% / 23%. Outlay $10,000 each.', ar: '‏أ: 13% / 15% / 17%. ب: 7% / 15% / 23%. النفقة 10,000 دولار لكل منهما.' } },
        { kind: 'unknown', body: { en: 'Which investment is less risky, and which should a risk-averse manager pick?', ar: 'أيهما أقل خطرًا، وأيهما ينبغي أن يختار المدير النافر من المخاطر؟' } },
        { kind: 'method', body: { en: 'Compute the range for each and compare.', ar: 'احسب المدى لكل منهما وقارن.' } },
        { kind: 'sub', body: { en: 'Range A = 17% − 13%; Range B = 23% − 7%.', ar: 'المدى أ = 17% − 13%؛ المدى ب = 23% − 7%.' }, math: ['\\text{Range}_{A} = 17\\% - 13\\% = 4\\%', '\\text{Range}_{B} = 23\\% - 7\\% = 16\\%'] },
        { kind: 'calc', body: { en: 'Range A = 4%; Range B = 16%.', ar: 'المدى أ = 4%؛ المدى ب = 16%.' } },
        { kind: 'interpret', body: { en: 'Both promise 15% most likely, but B’s outcome can miss by ±8 points while A’s can miss by only ±2. A risk-averse decision maker prefers A: equal return, lower risk.', ar: 'كلاهما يعد بـ15% الأرجح، لكن نتيجة ب قد تنحرف ±8 نقاط بينما أ ±2 فقط. صانع القرار النافر من المخاطر يفضل أ: عائد مساوٍ ومخاطر أقل.' } },
        { kind: 'verify', body: { en: 'Ranges are positive and in percentage points; the ranking would reverse only if the most-likely returns differed, which they do not.', ar: 'المدى موجب وبوحدات نقاط مئوية؛ ولن ينقلب الترتيب إلا لو اختلف العائد الأرجح، وهو لا يختلف.' } }
      ]},

    { type: 'example', title: { en: 'Course exercise (1) — Dani Khalil, Orange Industries (X & Y)', ar: 'تمرين المقرر (1) — داني خليل، Orange Industries (‏X وY)' },
      context: { en: 'Dani estimates returns on two equally risky investments using last year as an estimate of the future. A year later X is worth $20,000 and Y is worth $55,000 (these are the beginning values). During the year X generated $1,500 cash flow and Y generated $6,800. The current (end) market values are $21,000 for X and $55,000 for Y. (a) Compute each return. (b) If equally risky, which to recommend?', ar: 'يقدّر داني عائد استثمارين متساويي المخاطر باستخدام السنة الماضية تقديرًا للمستقبل. بعد سنة تبلغ قيمة X ‏20,000 دولار وY ‏55,000 دولار (وهذه قيم البداية). خلال السنة ولّد X تدفقًا نقديًا 1,500 دولار وY ‏6,800 دولار. القيم السوقية الحالية (النهاية) هي 21,000 لـX و55,000 لـY. (أ) احسب عائد كل منهما. (ب) إن تساوت المخاطر فأيهما توصي؟' },
      source: { en: 'Lecture 1, slides 13–14', ar: 'المحاضرة 1، الشريحتان 13–14' },
      steps: [
        { kind: 'understand', body: { en: 'The wording is tricky: the “year later” values are the beginning-of-period values used by the solution, and the “current” values are the end-of-period values.', ar: 'الصياغة محيّرة: قيم «بعد سنة» هي قيم بداية الفترة المستخدمة في الحل، وقيم «الحالية» هي قيم نهاية الفترة.' } },
        { kind: 'given', body: { en: 'X: P<t-1>=20,000, C=1,500, P<t>=21,000. Y: P<t-1>=55,000, C=6,800, P<t>=55,000.', ar: '‏X: ‏P<t-1>=20,000 وC=1,500 وP<t>=21,000. ‏Y: P<t-1>=55,000 وC=6,800 وP<t>=55,000.' } },
        { kind: 'unknown', body: { en: 'r for X and Y; then a recommendation at equal risk.', ar: '‏r لـX وY؛ ثم توصية عند تساوي المخاطر.' } },
        { kind: 'method', body: { en: 'Annual rate of return formula; then the risk-averse rule “equal risk → pick the higher return”.', ar: 'معادلة معدل العائد السنوي؛ ثم قاعدة النافر من المخاطر «مخاطر متساوية ← اختر العائد الأعلى».' } },
        { kind: 'sub', body: { en: 'X: (21,000 − 20,000 + 1,500) ÷ 20,000. Y: (55,000 − 55,000 + 6,800) ÷ 55,000.', ar: '‏X: ‏(21,000 − 20,000 + 1,500) ÷ 20,000. ‏Y: ‏(55,000 − 55,000 + 6,800) ÷ 55,000.' }, math: ['r_{X} = \\frac{21{,}000 - 20{,}000 + 1{,}500}{20{,}000} = 12.50\\%', 'r_{Y} = \\frac{55{,}000 - 55{,}000 + 6{,}800}{55{,}000} = 12.36\\%'] },
        { kind: 'calc', body: { en: 'X: 2,500 ÷ 20,000 = 12.50%. Y: 6,800 ÷ 55,000 = 12.36%.', ar: '‏X: ‏2,500 ÷ 20,000 = 12.50%. ‏Y: 6,800 ÷ 55,000 = 12.36%.' } },
        { kind: 'interpret', body: { en: 'X earns slightly more (12.50% vs 12.36%). Because the two are stated to be equally risky, Dani should recommend X: more return for the same risk.', ar: '‏X يكسب قليلًا أكثر (12.50% مقابل 12.36%). ولأن الاثنين متساويا المخاطر بحسب الفرض، ينبغي لداني التوصية بـX: عائد أعلى لنفس المخاطر.' } },
        { kind: 'verify', body: { en: 'Note Y’s return comes entirely from cash flow (price unchanged); X’s comes mostly from price appreciation. The 0.14 point difference is small — in practice you would also weigh estimation error.', ar: 'لاحظ أن عائد Y يأتي كليًا من التدفق النقدي (السعر لم يتغير)؛ وعائد X معظمه من ارتفاع السعر. الفرق 0.14 نقطة صغير — عمليًا ستوازن أيضًا خطأ التقدير.' } }
      ]},

    { type: 'visual', kind: 'timeline',
      caption: { en: 'Holding-period timeline: you pay P<t-1> today, then receive cash C<t> and the end price P<t> one period later. The return compresses all three into one percentage.', ar: 'الخط الزمني لفترة الاحتفاظ: تدفع P<t-1> اليوم، ثم تستلم نقدًا C<t> وسعر النهاية P<t> بعد فترة. يضغط العائد الثلاثة في نسبة واحدة.' },
      data: { p0: 'P<t-1> = 55.33', c: 'C<t> = 1.09', p1: 'P<t> = 52.84', r: 'r = −2.5%' } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Forgetting the cash flow: computing Wal-Mart as (52.84 − 55.33) ÷ 55.33 = −4.5%.', ar: 'نسيان التدفق النقدي: حساب Wal-Mart كـ(52.84 − 55.33) ÷ 55.33 = −4.5%.' },
        why: { en: 'The shareholder actually received $1.09; ignoring it understates the return.', ar: 'المساهم استلم فعليًا 1.09 دولار؛ وتجاهله يقلل العائد.' },
        correct: { en: 'Always add C<t> in the numerator: −2.5%, not −4.5%.', ar: 'أضف C<t> دائمًا في البسط: −2.5% لا −4.5%.' },
        illus: { en: 'Difference = 1.09 ÷ 55.33 ≈ 2.0 points — large relative to the answer.', ar: 'الفرق = 1.09 ÷ 55.33 ≈ 2.0 نقطة — كبير مقارنة بالإجابة.' } },
      { wrong: { en: 'Dividing by the ending price instead of the beginning price.', ar: 'القسمة على سعر النهاية بدل سعر البداية.' },
        why: { en: 'Return is measured on the money you actually committed at the start.', ar: 'العائد يقاس على المال الذي التزمت به فعليًا في البداية.' },
        correct: { en: 'Denominator is always P<t-1>.', ar: 'المقام دائمًا P<t-1>.' },
        illus: { en: 'Apple with wrong denominator: 119.98 ÷ 210.73 = 56.9% ≠ 132.2%.', ar: '‏Apple بمقام خاطئ: 119.98 ÷ 210.73 = 56.9% ≠ 132.2%.' } },
      { wrong: { en: 'Using the range to compare assets whose most-likely (expected) returns differ.', ar: 'استخدام المدى لمقارنة أصلين يختلف عائدهما الأرجح (المتوقع).' },
        why: { en: 'The range says nothing about the level of return; a wide-range asset may still be worth buying.', ar: 'المدى لا يقول شيئًا عن مستوى العائد؛ فأصل واسع المدى قد يستحق الشراء.' },
        correct: { en: 'Range only ranks risk when returns are equal; otherwise move to expected return + standard deviation / CV (Lesson 2).', ar: 'المدى يرتب المخاطر فقط عند تساوي العوائد؛ وإلا فانتقل إلى العائد المتوقع + الانحراف المعياري/معامل الاختلاف (الدرس 2).' },
        illus: { en: 'A: 15% most likely, range 4%. C: 30% most likely, range 16%. C may still be preferred.', ar: '‏أ: أرجح 15% ومدى 4%. ج: أرجح 30% ومدى 16%. قد تبقى ج مفضلة.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'A share was bought at $40, paid a $2 dividend, and was sold at $44. The annual rate of return is:', ar: 'سهم اشتُري بسعر 40 دولارًا ودفع توزيعات 2 دولار وببيع بسعر 44 دولارًا. معدل العائد السنوي هو:' },
        options: [ { en: '10%', ar: '10%' }, { en: '12.5%', ar: '12.5%' }, { en: '15%', ar: '15%' }, { en: '−5%', ar: '−5%' } ], answer: 2,
        explain: { en: '(44 − 40 + 2) ÷ 40 = 6 ÷ 40 = 15%. The dividend must be included and the denominator is the purchase price.', ar: '(44 − 40 + 2) ÷ 40 = 6 ÷ 40 = 15%. يجب ضم التوزيعات والمقام هو سعر الشراء.' } },
      { type: 'mcq', q: { en: 'Investment P: optimistic 20%, pessimistic 10%. Investment Q: optimistic 19%, pessimistic 12%. Both have a most-likely return of 15%. A risk-averse investor prefers:', ar: 'استثمار p: تفاؤلي 20% وتشاؤمي 10%. استثمار q: تفاؤلي 19% وتشاؤمي 12%. لكليهما عائد أرجح 15%. المستثمر النافر من المخاطر يفضل:' },
        options: [ { en: 'P, because its optimistic return is higher', ar: '‏p لأن عائده التفاؤلي أعلى' }, { en: 'Q, because its range (7%) is smaller than P’s (10%)', ar: '‏q لأن مداه (7%) أصغر من مدى p (10%)' }, { en: 'Either, they are identical', ar: 'أيًا منهما فهما متطابقان' }, { en: 'Neither, both are risk-free', ar: 'لا شيء فكلاهما خالٍ من المخاطر' } ], answer: 1,
        explain: { en: 'Equal most-likely returns → compare ranges. Q’s range = 19−12 = 7% < P’s 20−10 = 10%, so Q is less risky.', ar: 'عائدان أرجح متساويان ← قارن المدى. مدى q = 19−12 = 7% < مدى p = 20−10 = 10%، لذا q أقل خطرًا.' } },
      { type: 'num', q: { en: 'Compute the return: bought at $80, no cash flow, sold at $74. Give the answer in percent (negative allowed), one decimal.', ar: 'احسب العائد: شراء بسعر 80 دولارًا، بلا تدفق نقدي، بيع بسعر 74 دولارًا. أعطِ الإجابة بالنسبة المئوية (يُسمح بالسالب) لمنزلة عشرية واحدة.' },
        answer: -7.5, tol: 0.05, unit: '%',
        explain: { en: '(74 − 80 + 0) ÷ 80 = −6 ÷ 80 = −7.5%. A loss: the negative sign is the financial meaning.', ar: '(74 − 80 + 0) ÷ 80 = −6 ÷ 80 = −7.5%. خسارة: الإشارة السالبة هي المعنى المالي.' } },
      { type: 'tf', q: { en: 'True or false: the range of returns uses the probabilities of each outcome.', ar: 'صواب أم خطأ: مدى العوائد يستخدم احتمالات كل نتيجة.' },
        answer: false,
        explain: { en: 'False. The range uses only the two extreme returns; probabilities enter only with expected value and standard deviation (Lesson 2).', ar: 'خطأ. المدى يستخدم العائدين المتطرفين فقط؛ وتدخل الاحتمالات فقط مع القيمة المتوقعة والانحراف المعياري (الدرس 2).' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Annual rate of return', ar: 'معدل العائد السنوي' }, back: { en: 'r<t> = (P<t> − P<t-1> + C<t>) ÷ P<t-1>', ar: '‏r<t> = (P<t> − P<t-1> + C<t>) ÷ P<t-1>' } },
      { front: { en: 'Range of returns', ar: 'مدى العوائد' }, back: { en: 'Optimistic − pessimistic return', ar: 'العائد التفاؤلي − التشاؤمي' } },
      { front: { en: 'Risk aversion', ar: 'النفور من المخاطر' }, back: { en: 'Equal return → choose less risk; equal risk → choose more return', ar: 'عائد متساوٍ ← مخاطر أقل؛ مخاطر متساوية ← عائد أعلى' } }
    ]},

    { type: 'summary', points: [
      { en: 'Return = (end price − begin price + cash received) ÷ begin price.', ar: 'العائد = (سعر النهاية − سعر البداية + النقد المستلم) ÷ سعر البداية.' },
      { en: 'Risk of a single asset can first be summarized by the range: optimistic − pessimistic return.', ar: 'يمكن أولًا تلخيص مخاطر الأصل الواحد بالمدى: العائد التفاؤلي − التشاؤمي.' },
      { en: 'Risk aversion: with equal most-likely returns, prefer the smaller range; with equal risk, prefer the higher return.', ar: 'النفور من المخاطر: عند تساوي العوائد الأرجح فضّل المدى الأصغر؛ وعند تساوي المخاطر فضّل العائد الأعلى.' },
      { en: 'Macroeconomic shocks (rates, FX, inflation) change returns and risk — that is why the CFO scenario’s answer changes with each news item.', ar: 'الصدمات الكلية (الفوائد، الصرف، التضخم) تغيّر العوائد والمخاطر — ولهذا تتغير إجابة سيناريو المدير المالي مع كل خبر.' }
    ], canExplain: [
      { en: 'Why a dividend must be added when computing a holding-period return.', ar: 'لماذا يجب إضافة التوزيعات عند حساب عائد فترة الاحتفاظ.' },
      { en: 'Why two assets with the same most-likely return are not equally attractive.', ar: 'لماذا لا يكون أصلان لهما نفس العائد الأرجح متساويي الجاذبية.' },
      { en: 'What a negative rate of return means for a shareholder.', ar: 'ماذا يعني معدل عائد سالب بالنسبة للمساهم.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L2 */
window.COURSE.lessons.push({
  id: 'l2', module: 'm1', minutes: 40,
  title: { en: 'Measuring Risk: Expected Return, Standard Deviation, CV', ar: 'قياس المخاطر: العائد المتوقع والانحراف المعياري ومعامل الاختلاف' },
  subtitle: { en: 'From a list of scenarios and probabilities to a single risk number', ar: 'من قائمة سيناريوهات واحتمالات إلى رقم واحد للمخاطر' },
  source: { en: 'Lecture 1, slides 15–21 (Chapter 8)', ar: 'المحاضرة 1، الشرائح 15–21 (الفصل 8)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Compute the expected value of a return from scenarios and their probabilities.', ar: 'حساب القيمة المتوقعة للعائد من سيناريوهات واحتمالاتها.' },
      { en: 'Compute the standard deviation of returns and explain what it measures.', ar: 'حساب الانحراف المعياري للعوائد وشرح ما يقيسه.' },
      { en: 'Use the coefficient of variation to compare assets with different expected returns.', ar: 'استخدام معامل الاختلاف لمقارنة أصول بعوائد متوقعة مختلفة.' },
      { en: 'Read and reproduce Tables 5.3, 5.4 and 5.5 from the lecture.', ar: 'قراءة وإعادة إنتاج الجداول 5.3 و5.4 و5.5 من المحاضرة.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Probability', ar: 'الاحتمال' },
        def: { en: 'A number between 0 and 1 expressing how likely an outcome is; all scenario probabilities must sum to 1.', ar: 'رقم بين 0 و1 يعبر عن رجحان النتيجة؛ ويجب أن مجموع احتمالات السيناريوهات = 1.' },
        why: { en: 'Expected value and standard deviation are probability-weighted averages.', ar: 'القيمة المتوقعة والانحراف المعياري متوسطان مرجحان بالاحتمالات.' },
        example: { en: 'Pessimistic 0.25, most likely 0.50, optimistic 0.25 → sums to 1.00.', ar: 'تشاؤمي 0.25 وأرجح 0.50 وتفاؤلي 0.25 ← المجموع 1.00.' } },
      { term: { en: 'Weighted average', ar: 'المتوسط المرجح' },
        def: { en: 'Multiply each value by its weight, then add the products.', ar: 'اضرب كل قيمة في وزنها ثم اجمع النواتج.' },
        why: { en: 'Expected return is exactly a weighted average with probabilities as weights.', ar: 'العائد المتوقع متوسط مرجح بالتحديد والاحتمالات هي الأوزان.' },
        example: { en: '0.25×13% + 0.50×15% + 0.25×17% = 15%.', ar: '‏0.25×13% + 0.50×15% + 0.25×17% = 15%.' } },
      { term: { en: 'Square root', ar: 'الجذر التربيعي' },
        def: { en: 'The number which, multiplied by itself, gives the original (√4 = 2).', ar: 'الرقم الذي إذا ضرب في نفسه أعطى الأصل (√4 = 2).' },
        why: { en: 'Standard deviation is the square root of the probability-weighted average of squared deviations.', ar: 'الانحراف المعياري هو الجذر التربيعي لمتوسط الانحرافات المربعة المرجح بالاحتمالات.' },
        example: { en: '√2% ≈ 1.41%; √32% ≈ 5.66% (as in Table 5.4).', ar: '‏√2% ≈ 1.41%؛ √32% ≈ 5.66% (كما في الجدول 5.4).' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'The range in Lesson 1 only looked at the two extremes. Real decisions need a measure that uses every possible outcome and how likely each is. That is what expected value and standard deviation do: the expected value is the probability-weighted centre of the outcomes; the standard deviation is the typical distance of outcomes from that centre.', ar: 'المدى في الدرس 1 نظر فقط إلى الطرفين. القرارات الحقيقية تحتاج مقياسًا يستخدم كل النتائج الممكنة ومدى رجحان كل منها. هذا ما تفعله القيمة المتوقعة والانحراف المعياري: القيمة المتوقعة هي المركز المرجح بالاحتمالات للنتائج؛ والانحراف المعياري هو المسافة النموذجية للنتائج عن ذلك المركز.' },
      { en: 'Your lecture walks this with Exercise (2): assets A and B share the same three scenarios (pessimistic 25%, most likely 50%, optimistic 25%) and the same expected return of 15%, but A’s returns cluster tightly (13/15/17) while B’s are spread (7/15/23). The standard deviation turns that visual difference into 1.41% versus 5.66%.', ar: 'تمشي محاضرتك هذا عبر التمرين (2): الأصلان أ و ب يتشاركان نفس السيناريوهات الثلاثة (تشاؤمي 25% وأرجح 50% وتفاؤلي 25%) ونفس العائد المتوقع 15%، لكن عوائد أ متلاصقة (13/15/17) بينما عوائد ب منتشرة (7/15/23). يحوّل الانحراف المعياري هذا الفرق البصري إلى 1.41% مقابل 5.66%.' },
      { en: 'One caution the lecture adds: standard deviation is in percent, so it can only compare assets with the same expected return. When expected returns differ, divide by the expected return to get the coefficient of variation — risk per unit of return.', ar: 'تحذير واحد تضيفه المحاضرة: الانحراف المعياري بوحدات نسب مئوية، لذا يقارن فقط أصولًا بعوائد متوقعة متساوية. عندما تختلف العوائد المتوقعة اقسم على العائد المتوقع لتحصل على معامل الاختلاف — المخاطر لكل وحدة عائد.' }
    ], analogy: { en: 'Two archers both average 15 points per arrow. Archer A’s arrows land within 2 points of 15; archer B’s land within 8. Same average, very different consistency. Standard deviation is the “consistency” number.', ar: 'راميان متوسط كل منهما 15 نقطة لكل سهم. سهام الرامي أ تقع ضمن نقطتين من 15؛ وسهام ب ضمن 8. نفس المتوسط واتساق مختلف جدًا. الانحراف المعياري هو رقم «الاتساق».' }, analogyLimit: { en: 'In finance the “arrows” are future returns that have not happened yet; we weight them by subjective probabilities, and the measure assumes those probabilities are meaningful.', ar: 'في التمويل «السهام» عوائد مستقبلية لم تحدث بعد؛ نرجحها باحتمالات ذاتية، ويفترض المقياس أن هذه الاحتمالات ذات معنى.' } },

    { type: 'academic', paras: [
      { en: 'The expected value of a return, r̄, is the average return an investment is expected to produce over time: each possible return r<i> multiplied by its probability Pr<i>, summed over all outcomes. It is the centre of the probability distribution.', ar: 'القيمة المتوقعة للعائد r̄ هي متوسط العائد الذي يُتوقع أن ينتجه الاستثمار عبر الزمن: كل عائد ممكن r<i> مضروبًا في احتماله Pr<i>، مجموعًا على كل النتائج. وهي مركز توزيع الاحتمالات.' },
      { en: 'The standard deviation, σ<r>, measures dispersion around that expected value: each deviation (r<i> − r̄) is squared (so positive and negative deviations do not cancel), weighted by its probability, summed, and square-rooted to return to percentage units. The higher the standard deviation, the greater the risk.', ar: 'الانحراف المعياري σ<r> يقيس التشتت حول تلك القيمة المتوقعة: كل انحراف (r<i> − r̄) يُربّع (حتى لا تلغي الانحرافات الموجبة والسالبة بعضها)، ويُرجح باحتماله، ويُجمع، ويُؤخذ جذره التربيعي للعودة إلى وحدات النسبة المئوية. كلما ارتفع الانحراف المعياري زادت المخاطر.' },
      { en: 'The coefficient of variation, CV = σ<r> ÷ r̄, expresses risk per unit of expected return and is the correct comparator when expected returns differ. A higher CV means more volatility relative to the return you expect.', ar: 'معامل الاختلاف CV = σ<r> ÷ r̄ يعبر عن المخاطر لكل وحدة عائد متوقع وهو المقارن الصحيح عندما تختلف العوائد المتوقعة. ‏CV أعلى يعني تقلبًا أكبر نسبة إلى العائد المتوقع.' },
      { en: 'Table 5.5 in your slides grounds this in history (1900–2009 U.S. data): Treasury bills returned 3.9% with σ = 4.7% (CV 1.21); Treasury bonds 5.0% with σ = 10.2% (CV 2.04); common stocks 9.3% with σ = 20.4% (CV 2.19). Higher-return asset classes came with proportionally higher risk.', ar: 'الجدول 5.5 في شرائحك يؤسس هذا تاريخيًا (بيانات أمريكية 1900–2009): أذون الخزانة عائدها 3.9% وσ = 4.7% (‏CV 1.21)؛ سندات الخزانة 5.0% وσ = 10.2% (‏CV ‏2.04)؛ الأسهم العادية 9.3% وσ = 20.4% (‏CV ‏2.19). فئات الأصول الأعلى عائدًا جاءت بمخاطر أعلى تناسبيًا.' }
    ], defs: [
      { term: { en: 'Expected value of a return (r̄)', ar: 'القيمة المتوقعة للعائد (r̄)' }, def: { en: 'Probability-weighted average of possible returns.', ar: 'المتوسط المرجح بالاحتمالات للعوائد الممكنة.' } },
      { term: { en: 'Standard deviation (σ<r>)', ar: 'الانحراف المعياري (σ<r>)' }, def: { en: 'Square root of the probability-weighted average of squared deviations from the expected return.', ar: 'الجذر التربيعي للمتوسط المرجح بالاحتمالات لانحرافات مربعة عن العائد المتوقع.' } },
      { term: { en: 'Coefficient of variation (CV)', ar: 'معامل الاختلاف (CV)' }, def: { en: 'σ<r> ÷ r̄; risk per unit of expected return.', ar: '‏σ<r> ÷ r̄؛ المخاطر لكل وحدة عائد متوقع.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'List every outcome you can imagine, with how likely each is. Multiply each return by its likelihood and add up: that is your expected return — the “on average” number.', ar: 'عدد كل نتيجة تتخيلها مع رجحان كل منها. اضرب كل عائد في رجحانه واجمع: هذا عائدها المتوقع — رقم «في المتوسط».' },
      { en: 'Now ask: how far is each outcome from that average? Square those distances (to stop negatives cancelling), weight them by likelihood, add, and take the square root. That is the standard deviation — the typical surprise.', ar: 'الآن اسأل: كم تبعد كل نتيجة عن ذلك المتوسط؟ ربّع تلك المسافات (حتى لا تلغي السوالب الموجبات)، ورجحها بالرجحان، واجمع، وخذ الجذر التربيعي. هذا الانحراف المعياري — المفاجأة النموذجية.' },
      { en: 'Finally, if two investments have different averages, compare surprises relative to the average: CV = standard deviation ÷ expected return.', ar: 'أخيرًا، إذا كان لاستثمارين متوسطان مختلفان فقارن المفاجآت نسبة إلى المتوسط: ‏CV = الانحراف المعياري ÷ العائد المتوقع.' }
    ], steps: [
      { en: 'Check probabilities sum to 1.', ar: 'تحقق أن مجموع الاحتمالات = 1.' },
      { en: 'r̄ = Σ (r<i> × Pr<i>).', ar: '‏r̄ = Σ (r<i> × Pr<i>).' },
      { en: 'For each outcome: deviation = r<i> − r̄; square it; multiply by Pr<i>.', ar: 'لكل نتيجة: الانحراف = r<i> − r̄؛ ربّعه؛ اضربه في Pr<i>.' },
      { en: 'Add those products; take the square root → σ<r>.', ar: 'اجمع تلك النواتج؛ خذ الجذر التربيعي ← σ<r>.' },
      { en: 'If comparing different expected returns: CV = σ<r> ÷ r̄.', ar: 'إن قارنت عوائد متوقعة مختلفة: ‏CV = σ<r> ÷ r̄.' }
    ], recap: { en: 'Expected return = weighted centre. Standard deviation = typical spread around it. CV = spread per unit of return, for fair comparisons across different return levels.', ar: 'العائد المتوقع = المركز المرجح. الانحراف المعياري = الانتشار النموذجي حوله. ‏CV = الانتشار لكل وحدة عائد، لمقارنات عادلة بين مستويات عائد مختلفة.' } },

    { type: 'formula', id: 'f-er', tag: 'course', name: { en: 'Expected value of a return', ar: 'القيمة المتوقعة للعائد' },
      tex: '\\bar{r} = \\sum_{i=1}^{n} r_{i} \\times Pr_{i}',
      vars: [
        { sym: 'r_{i}', en: 'return of outcome i', ar: 'عائد النتيجة i' },
        { sym: 'Pr_{i}', en: 'probability of outcome i', ar: 'احتمال النتيجة i' },
        { sym: 'n', en: 'number of outcomes', ar: 'عدد النتائج' }
      ],
      purpose: { en: 'Collapse a whole scenario table into one “on-average” return.', ar: 'اختزال جدول سيناريوهات كامل في عائد واحد «في المتوسط».' },
      assumptions: { en: 'Probabilities are known or credibly estimated and sum to 1.', ar: 'الاحتمالات معروفة أو مقدرة بمصداقية ومجموعها 1.' },
      when: { en: 'Whenever a scenario analysis (pessimistic / most likely / optimistic) is given.', ar: 'كلما أُعطي تحليل سيناريوهات (تشاؤمي/أرجح/تفاؤلي).' },
      inputs: { en: 'Each return and its probability.', ar: 'كل عائد واحتماله.' },
      cautions: { en: 'Do not average returns without weights unless all probabilities are equal.', ar: 'لا متوسط العوائد بدون أوزان إلا إذا كانت كل الاحتمالات متساوية.' },
      illustration: { en: 'Asset A: 0.25×13% + 0.50×15% + 0.25×17% = 3.25% + 7.50% + 4.25% = 15.00%.', ar: 'الأصل أ: 0.25×13% + 0.50×15% + 0.25×17% = 3.25% + 7.50% + 4.25% = 15.00%.' },
      sensitivity: { en: 'Shifting probability toward the optimistic outcome raises r̄; toward pessimistic lowers it.', ar: 'تحويل الاحتمال نحو النتيجة التفاؤلية يرفع r̄؛ ونحو التشاؤمية يخفضه.' },
      meaning: { en: 'The return you would expect per period if the scenario game were played many times.', ar: 'العائد الذي تتوقعه لكل فترة لو لُعبت لعبة السيناريوهات مرات كثيرة.' } },

    { type: 'formula', id: 'f-sd', tag: 'course', name: { en: 'Standard deviation of returns', ar: 'الانحراف المعياري للعوائد' },
      tex: '\\sigma_{r} = \\sqrt{\\sum_{i=1}^{n} (r_{i} - \\bar{r})^{2} \\times Pr_{i}}',
      vars: [
        { sym: 'r_{i}', en: 'return of outcome i', ar: 'عائد النتيجة i' },
        { sym: '\\bar{r}', en: 'expected return', ar: 'العائد المتوقع' },
        { sym: 'Pr_{i}', en: 'probability of outcome i', ar: 'احتمال النتيجة i' }
      ],
      purpose: { en: 'One number for how much actual returns can differ from the expected return.', ar: 'رقم واحد لكم يمكن أن تختلف العوائد الفعلية عن المتوقع.' },
      assumptions: { en: 'Same scenario probabilities as the expected value; outcomes independent across periods is not required.', ar: 'نفس احتمالات السيناريوهات كالقيمة المتوقعة؛ ولا يشترط استقلالية النتائج عبر الفترات.' },
      when: { en: 'Comparing risk of assets with equal expected returns; input to CV and later to portfolio math.', ar: 'مقارنة مخاطر أصول بعوائد متوقعة متساوية؛ ومدخل لـCV ولاحقًا لحسابات المحافظ.' },
      inputs: { en: 'Each return, its probability, and r̄.', ar: 'كل عائد واحتماله وr̄.' },
      cautions: { en: 'Not comparable across different expected returns (use CV). Squaring means one extreme outcome dominates.', ar: 'غير قابل للمقارنة بين عوائد متوقعة مختلفة (استخدم CV). التربيع يعني أن نتيجة متطرفة واحدة تهيمن.' },
      illustration: { en: 'Asset A: deviations −2, 0, +2 → squared 4, 0, 4 → weighted 1, 0, 1 → sum 2% → σ = √2% = 1.41%.', ar: 'الأصل أ: الانحرافات −2 و0 و+2 ← المربعة 4 و0 و4 ← المرجحة 1 و0 و1 ← المجموع 2% ← σ = √2% = 1.41%.' },
      sensitivity: { en: 'Widening the spread of outcomes raises σ more than proportionally because of squaring.', ar: 'توسيع انتشار النتائج يرفع σ أكثر من تناسبيًا بسبب التربيع.' },
      meaning: { en: 'Roughly, the typical size of the surprise (in percentage points) around the expected return.', ar: 'تقريبًا، الحجم النموذجي للمفاجأة (بنقاط مئوية) حول العائد المتوقع.' } },

    { type: 'formula', id: 'f-cv', tag: 'course', name: { en: 'Coefficient of variation', ar: 'معامل الاختلاف' },
      tex: 'CV = \\frac{\\sigma_{r}}{\\bar{r}}',
      vars: [ { sym: '\\sigma_{r}', en: 'standard deviation of returns', ar: 'الانحراف المعياري للعوائد' }, { sym: '\\bar{r}', en: 'expected return', ar: 'العائد المتوقع' } ],
      purpose: { en: 'Risk per unit of return; makes assets with different expected returns comparable.', ar: 'المخاطر لكل وحدة عائد؛ تجعل أصولًا بعوائد متوقعة مختلفة قابلة للمقارنة.' },
      assumptions: { en: 'Expected return is positive (otherwise the ratio misleads).', ar: 'العائد المتوقع موجب (وإلا ضللت النسبة).' },
      when: { en: 'Choosing between investments whose expected returns differ.', ar: 'الاختيار بين استثمارات تختلف عوائدها المتوقعة.' },
      inputs: { en: 'σ<r> and r̄.', ar: '‏σ<r> وr̄.' },
      cautions: { en: 'Meaningless or misleading if r̄ ≤ 0.', ar: 'بلا معنى أو مضلل إذا كان r̄ ≤ 0.' },
      illustration: { en: 'Table 5.5: stocks CV = 20.4 ÷ 9.3 = 2.19; T-bills CV = 4.7 ÷ 3.9 = 1.21.', ar: 'الجدول 5.5: أسهم CV = 20.4 ÷ 9.3 = 2.19؛ أذون خزانة CV = 4.7 ÷ 3.9 = 1.21.' },
      sensitivity: { en: 'Higher σ or lower r̄ both raise CV (more risk per unit of return).', ar: '‏σ أعلى أو r̄ أقل كلاهما يرفع CV (مخاطر أكثر لكل وحدة عائد).' },
      meaning: { en: 'How many units of volatility you endure for each unit of expected return.', ar: 'كم وحدة تقلب تتحمل مقابل كل وحدة عائد متوقع.' } },

    { type: 'example', title: { en: 'Course exercise (2) — expected value, σ and CV for assets A & B', ar: 'تمرين المقرر (2) — القيمة المتوقعة وσ وCV للأصلين أ و ب' },
      context: { en: 'Company X chooses between assets A and B. Scenario probabilities: optimistic 25%, most likely 50%, pessimistic 25%. Returns — A: 13% / 15% / 17%; B: 7% / 15% / 23% (Tables 5.3 and 5.4).', ar: 'تختار الشركة X بين الأصلين أ و ب. احتمالات السيناريوهات: تفاؤلي 25% وأرجح 50% وتشاؤمي 25%. العوائد — أ: 13% / 15% / 17%؛ ب: 7% / 15% / 23% (الجدولان 5.3 و5.4).' },
      source: { en: 'Lecture 1, slides 16–19 (Tables 5.3–5.4)', ar: 'المحاضرة 1، الشرائح 16–19 (الجدولان 5.3–5.4)' },
      steps: [
        { kind: 'understand', body: { en: 'Same probabilities and same expected return for both assets; the question is which is riskier.', ar: 'نفس الاحتمالات ونفس العائد المتوقع لكلا الأصلين؛ السؤال أيهما أخطر.' } },
        { kind: 'given', body: { en: 'Pr = 0.25 / 0.50 / 0.25. A returns 13/15/17; B returns 7/15/23 (percent).', ar: '‏Pr = 0.25 / 0.50 / 0.25. عوائد أ 13/15/17؛ وعوائد ب 7/15/23 (بالنسبة).' } },
        { kind: 'unknown', body: { en: 'r̄, σ<r> for each asset, and the risk ranking.', ar: '‏r̄ وσ<r> لكل أصل وترتيب المخاطر.' } },
        { kind: 'method', body: { en: 'Expected value formula, then standard deviation formula (Table 5.4 procedure).', ar: 'معادلة القيمة المتوقعة ثم معادلة الانحراف المعياري (إجراء الجدول 5.4).' } },
        { kind: 'sub', body: { en: 'A: r̄ = 0.25(13) + 0.50(15) + 0.25(17). B: r̄ = 0.25(7) + 0.50(15) + 0.25(23).', ar: '‏أ: r̄ = 0.25(13) + 0.50(15) + 0.25(17). ب: r̄ = 0.25(7) + 0.50(15) + 0.25(23).' }, math: ['\\bar{r}_{A} = 3.25 + 7.50 + 4.25 = 15.00\\%', '\\bar{r}_{B} = 1.75 + 7.50 + 5.75 = 15.00\\%'] },
        { kind: 'calc', body: { en: 'Both r̄ = 15%. σ<A> = √[0.25(−2)² + 0.50(0)² + 0.25(2)²] = √2% = 1.41%. σ<B> = √[0.25(−8)² + 0.50(0)² + 0.25(8)²] = √32% = 5.66%. CV<A> = 1.41/15 = 0.094; CV<B> = 5.66/15 = 0.377.', ar: 'كلاهما r̄ = 15%. ‏σ<A> = √[0.25(−2)² + 0.50(0)² + 0.25(2)²] = √2% = 1.41%. ‏σ<B> = √[0.25(−8)² + 0.50(0)² + 0.25(8)²] = √32% = 5.66%. ‏CV<A> = 1.41/15 = 0.094؛ ‏CV<B> = 5.66/15 = 0.377.' }, math: ['\\sigma_{A} = \\sqrt{2\\%} = 1.41\\%', '\\sigma_{B} = \\sqrt{32\\%} = 5.66\\%'] },
        { kind: 'interpret', body: { en: 'Identical expected returns, but B’s typical surprise is four times A’s. A risk-averse chooser takes A. The CV ranking agrees (0.094 < 0.377).', ar: 'عوائد متوقعة متطابقة، لكن مفاجأة ب النموذجية أربعة أضعاف أ. المختار النافر من المخاطر يأخذ أ. وترتيب CV يتفق (0.094 < 0.377).' } },
        { kind: 'verify', body: { en: 'Probabilities sum to 1; weighted values sum to 15% for both (Table 5.3); squared-deviation sums are 2% and 32% (Table 5.4). Note σ is expressed in percent because the squared deviations are in “percent-squared”.', ar: 'مجموع الاحتمالات 1؛ ومجموع القيم المرجحة 15% لكليهما (الجدول 5.3)؛ ومجموعا الانحرافات المربعة 2% و32% (الجدول 5.4). لاحظ أن σ معبرًا عنه بالنسبة لأن الانحرافات المربعة بوحدات «نسبة مربعة».' } }
      ]},

    { type: 'visual', kind: 'bar', caption: { en: 'Standard deviation and CV for assets A and B (Table 5.4 data): same expected return, very different dispersion.', ar: 'الانحراف المعياري وCV للأصلين أ و ب (بيانات الجدول 5.4): نفس العائد المتوقع وتشتت مختلف جدًا.' },
      cfg: { categories: ['σ (%)', 'CV (×100)'], series: [ { name: { en: 'Asset A', ar: 'الأصل أ' }, values: [1.41, 9.4] }, { name: { en: 'Asset B', ar: 'الأصل ب' }, values: [5.66, 37.7] } ], yLabel: { en: 'Risk measure', ar: 'مقياس المخاطر' } } },

    { type: 'visual', kind: 'table', caption: { en: 'Table 5.5 (course): historical returns, standard deviations and CVs, U.S. 1900–2009.', ar: 'الجدول 5.5 (المقرر): العوائد التاريخية والانحرافات المعيارية ومعاملات الاختلاف، أمريكا 1900–2009.' },
      table: { head: [ { en: 'Investment', ar: 'الاستثمار' }, { en: 'Average annual return', ar: 'متوسط العائد السنوي' }, { en: 'Standard deviation', ar: 'الانحراف المعياري' }, { en: 'Coefficient of variation', ar: 'معامل الاختلاف' } ],
        rows: [ [ { en: 'Treasury bills', ar: 'أذون الخزانة' }, '3.9%', '4.7%', '1.21' ], [ { en: 'Treasury bonds', ar: 'سندات الخزانة' }, '5.0%', '10.2%', '2.04' ], [ { en: 'Common stocks', ar: 'الأسهم العادية' }, '9.3%', '20.4%', '2.19' ] ] } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Averaging the three returns without probabilities: (13+15+17)/3 = 15% happens to work here only because probabilities are symmetric.', ar: 'متوسط العوائد الثلاثة بدون احتمالات: (13+15+17)/3 = 15% تنجح هنا صدفة فقط لأن الاحتمالات متناظرة.' },
        why: { en: 'With unequal probabilities the simple average is wrong.', ar: 'مع احتمالات غير متساوية يكون المتوسط البسيط خطأ.' },
        correct: { en: 'Always weight by Pr<i>.', ar: 'رجّح دائمًا بـPr<i>.' },
        illus: { en: 'If Pr were 0.6/0.3/0.1: weighted = 0.6(13)+0.3(15)+0.1(17) = 14.0%, not 15%.', ar: 'لو كانت Pr ‏0.6/0.3/0.1: المرجح = 0.6(13)+0.3(15)+0.1(17) = 14.0% لا 15%.' } },
      { wrong: { en: 'Forgetting to square deviations, so positives and negatives cancel and σ = 0.', ar: 'نسيان تربيع الانحرافات فتُلغَى الموجبات والسوالب ويصبح σ = 0.' },
        why: { en: 'Deviations from the mean always sum to zero by construction.', ar: 'مجموع الانحرافات عن المتوسط صفر دائمًا بحكم البناء.' },
        correct: { en: 'Square first, then weight, then sum, then square-root.', ar: 'ربّع أولًا ثم رجّح ثم اجمع ثم خذ الجذر.' },
        illus: { en: 'A: (−2)(0.25)+(0)(0.5)+(2)(0.25) = 0 — meaningless as risk.', ar: '‏أ: (−2)(0.25)+(0)(0.5)+(2)(0.25) = 0 — بلا معنى كمخاطر.' } },
      { wrong: { en: 'Comparing σ across assets with different expected returns.', ar: 'مقارنة σ بين أصول بعوائد متوقعة مختلفة.' },
        why: { en: 'A bigger σ may simply accompany a bigger return.', ar: '‏σ أكبر قد يرافق ببساطة عائدًا أكبر.' },
        correct: { en: 'Use CV = σ ÷ r̄ for cross-level comparisons.', ar: 'استخدم CV = σ ÷ r̄ للمقارنات بين المستويات.' },
        illus: { en: 'σ = 10% on r̄ = 50% (CV 0.2) is less risky per unit than σ = 6% on r̄ = 15% (CV 0.4).', ar: '‏σ = 10% على r̄ = 50% (‏CV ‏0.2) أقل خطرًا لكل وحدة من σ = 6% على r̄ = 15% (‏CV ‏0.4).' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'Outcomes: 10% (p=0.2), 15% (p=0.6), 25% (p=0.2). Expected return =', ar: 'النتائج: 10% (اح=0.2)، 15% (اح=0.6)، 25% (اح=0.2). العائد المتوقع =' },
        options: [ { en: '15.0%', ar: '15.0%' }, { en: '16.0%', ar: '16.0%' }, { en: '16.7%', ar: '16.7%' }, { en: '17.0%', ar: '17.0%' } ], answer: 1,
        explain: { en: '0.2×10 + 0.6×15 + 0.2×25 = 2 + 9 + 5 = 16%. (16.7% is the unweighted average — the classic trap.)', ar: '‏0.2×10 + 0.6×15 + 0.2×25 = 2 + 9 + 5 = 16%. (‏16.7% هو المتوسط غير المرجح — الفخ الكلاسيكي.)' } },
      { type: 'num', q: { en: 'Using the same distribution (10/15/25 with p = 0.2/0.6/0.2), the variance (sum of weighted squared deviations, in %²) equals:', ar: 'باستخدام نفس التوزيع (10/15/25 باحتمالات 0.2/0.6/0.2)، يساوي التباين (مجموع الانحرافات المربعة المرجحة بوحدات %²):' },
        answer: 24, tol: 0.5, unit: '%²',
        explain: { en: 'Deviations: −6, −1, +9 → squared 36, 1, 81 → weighted 7.2, 0.6, 16.2 → total 24.', ar: 'الانحرافات: −6 و−1 و+9 ← المربعة 36 و1 و81 ← المرجحة 7.2 و0.6 و16.2 ← المجموع 24.' } },
      { type: 'mcq', q: { en: 'Asset M: r̄ = 12%, σ = 3%. Asset N: r̄ = 8%, σ = 3%. Which is riskier per unit of return?', ar: 'الأصل m: ‏r̄ = 12% وσ = 3%. الأصل n: ‏r̄ = 8% وσ = 3%. أيهما أخطر لكل وحدة عائد؟' },
        options: [ { en: 'M, because its return is higher', ar: '‏m لأن عائده أعلى' }, { en: 'N, because CV = 3/8 = 0.375 > M’s 3/12 = 0.25', ar: '‏n لأن CV = 3/8 = 0.375 > ‏CV لـm = 3/12 = 0.25' }, { en: 'They are equally risky in every sense', ar: 'متساويا المخاطر بكل معنى' }, { en: 'Cannot be determined', ar: 'لا يمكن التحديد' } ], answer: 1,
        explain: { en: 'Equal σ but different r̄ → use CV. N has more volatility per unit of expected return.', ar: '‏σ متساوٍ لكن r̄ مختلف ← استخدم CV. ‏n لديه تقلب أكثر لكل وحدة عائد متوقع.' } },
      { type: 'tf', q: { en: 'True or false: a higher standard deviation always means a higher coefficient of variation.', ar: 'صواب أم خطأ: انحراف معياري أعلى يعني دائمًا معامل اختلاف أعلى.' },
        answer: false,
        explain: { en: 'False. CV also divides by r̄; a high-σ asset with a much higher r̄ can have a lower CV.', ar: 'خطأ. ‏CV يقسم أيضًا على r̄؛ فأصل عالي σ بـr̄ أعلى بكثير يمكن أن يكون أقل CV.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Expected return', ar: 'العائد المتوقع' }, back: { en: 'r̄ = Σ r<i> × Pr<i>', ar: '‏r̄ = Σ r<i> × Pr<i>' } },
      { front: { en: 'Standard deviation', ar: 'الانحراف المعياري' }, back: { en: 'σ = √[ Σ (r<i> − r̄)² × Pr<i> ]', ar: '‏σ = √[ Σ (r<i> − r̄)² × Pr<i> ]' } },
      { front: { en: 'Coefficient of variation', ar: 'معامل الاختلاف' }, back: { en: 'CV = σ ÷ r̄ (risk per unit of return)', ar: '‏CV = σ ÷ r̄ (المخاطر لكل وحدة عائد)' } }
    ]},

    { type: 'summary', points: [
      { en: 'Expected return is the probability-weighted average of possible returns.', ar: 'العائد المتوقع هو المتوسط المرجح بالاحتمالات للعوائد الممكنة.' },
      { en: 'Standard deviation is the square root of the probability-weighted average of squared deviations; higher σ = greater risk.', ar: 'الانحراف المعياري الجذر التربيعي للمتوسط المرجح بالاحتمالات للانحرافات المربعة؛ σ أعلى = مخاطر أكبر.' },
      { en: 'CV = σ ÷ r̄ compares risk when expected returns differ.', ar: '‏CV = σ ÷ r̄ يقارن المخاطر عندما تختلف العوائد المتوقعة.' },
      { en: 'History (Table 5.5): stocks > bonds > bills in both return and risk.', ar: 'التاريخ (الجدول 5.5): الأسهم > السندات > الأذون في العائد والمخاطر معًا.' }
    ], canExplain: [
      { en: 'Why squaring the deviations is necessary.', ar: 'لماذا يلزم تربيع الانحرافات.' },
      { en: 'When CV must replace σ as the comparison tool.', ar: 'متى يجب أن يحل CV محل σ كأداة مقارنة.' },
      { en: 'What “σ = 1.41%” says about asset A’s future returns.', ar: 'ماذا يقول «σ = 1.41%» عن عوائد الأصل أ المستقبلية.' }
    ]}
  ]
});
