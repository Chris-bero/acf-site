/* ============================================================
   CONTENT — Module 2 continued (Lessons 7–8: EBIT-EPS & Share Value)
   ============================================================ */

/* ---------------------------------------------------------- L7 */
window.COURSE.lessons.push({
  id: 'l7', module: 'm2', minutes: 45,
  title: { en: 'The EBIT–EPS Approach to Capital Structure', ar: 'مدخل EBIT–EPS لهيكل رأس المال' },
  subtitle: { en: 'Comparing financing plans by earnings per share, and finding the indifference point', ar: 'مقارنة خطط التمويل عبر ربحية السهم وإيجاد نقطة التعادل (عدم الاكتراث)' },
  source: { en: 'Lecture 2, slides 17–23 (Chapter 13)', ar: 'المحاضرة 2، الشرائح 17–23 (الفصل 13)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Build the income-statement chain from sales down to EPS.', ar: 'بناء سلسلة قائمة الدخل من المبيعات حتى EPS.' },
      { en: 'Compute EPS under debt, preference-share and equity financing plans.', ar: 'حساب EPS تحت خطط تمويل بالدين وأسهم تفضيلية وأسهم عادية.' },
      { en: 'Solve for the EBIT–EPS indifference point between two plans.', ar: 'حل نقطة عدم الاكتراث EBIT–EPS بين خطتين.' },
      { en: 'Apply the decision rule above/below the indifference point.', ar: 'تطبيق قاعدة القرار فوق/تحت نقطة عدم الاكتراث.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'EPS (earnings per share)', ar: 'ربحية السهم (EPS)' },
        def: { en: 'Earnings available to ordinary shareholders ÷ number of ordinary shares.', ar: 'الأرباح المتاحة لحملة الأسهم العادية ÷ عدد الأسهم العادية.' },
        why: { en: 'It is the objective measure this approach compares across financing plans.', ar: 'هو المقياس الموضوعي الذي يقارنه هذا المدخل بين خطط التمويل.' },
        example: { en: '396,000 ÷ 800,000 shares = ₹0.495.', ar: '‏396,000 ÷ 800,000 سهم = 0.495 روبية.' } },
      { term: { en: 'Preference dividends', ar: 'أرباح الأسهم التفضيلية' },
        def: { en: 'Fixed dividends paid to preference shareholders after tax, before ordinary earnings.', ar: 'توزيعات ثابتة تُدفع لحملة الأسهم التفضيلية بعد الضريبة وقبل أرباح الأسهم العادية.' },
        why: { en: 'They reduce earnings available to ordinary shareholders but do not change share count.', ar: 'تخفض الأرباح المتاحة لحملة الأسهم العادية لكنها لا تغيّر عدد الأسهم.' },
        example: { en: 'Alternative II deducts 440,000 preference dividends after tax.', ar: 'البديل II يخصم 440,000 توزيعات تفضيلية بعد الضريبة.' } },
      { term: { en: 'Financial leverage', ar: 'الرافعة المالية' },
        def: { en: 'Using fixed-cost financing (debt/preference) so that EPS responds more than proportionally to EBIT.', ar: 'استخدام تمويل ذي تكلفة ثابتة (دين/تفضيلية) بحيث تستجيب EPS لأكثر من تناسبيًا مع EBIT.' },
        why: { en: 'It is why the debt plan wins above the indifference point and loses below it.', ar: 'هو سبب فوز خطة الدين فوق نقطة عدم الاكتراث وخسارتها تحتها.' },
        example: { en: 'At EBIT ₹1,500,000 (below indifference) the equity plan actually gives the highest EPS.', ar: 'عند EBIT ‏1,500,000 روبية (تحت نقطة التعادل) تعطي خطة الأسهم العادية أعلى EPS فعليًا.' },
        link: 'l6' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'A firm needs ₹4,000,000 for expansion and can raise it three ways: more debt at 12%, preference shares paying 440,000, or 250,000 new ordinary shares. Each plan changes two things — the fixed charges (interest or preference dividends) and the number of shares over which profit is spread. The EBIT–EPS approach simply asks: at what operating profit does each plan leave ordinary shareholders better off?', ar: 'تحتاج شركة 4,000,000 روبية للتوسع ويمكنها جمعها بثلاث طرق: دين إضافي بفائدة 12%، أو أسهم تفضيلية تدفع 440,000، أو 250,000 سهم عادي جديد. كل خطة تغيّر أمرين — التكاليف الثابتة (فائدة أو توزيعات تفضيلية) وعدد الأسهم الذي يُوزع عليه الربح. مدخل EBIT–EPS يسأل ببساطة: عند أي ربح تشغيلي تصبح كل خطة أفضل لحملة الأسهم العادية؟' },
      { en: 'Because debt carries a fixed interest charge, its EPS line is steeper: wonderful when EBIT is high, painful when EBIT is low. The equity plan has no new fixed charge but many more shares, so its line is flatter. The two lines cross at the indifference EBIT; the lecture’s decision rule follows directly from the geometry.', ar: 'لأن الدين يحمل فائدة ثابتة، خط EPS الخاص به أشد انحدارًا: رائع عندما EBIT مرتفع ومؤلم عندما منخفض. وخطة الأسهم العادية بلا تكلفة ثابتة جديدة لكن بأسهم أكثر كثيرًا، لذا خطها أقل انحدارًا. يتقاطع الخطان عند EBIT عدم الاكتراث؛ وتتبع قاعدة القرار في المحاضرة مباشرة من الهندسة.' }
    ], analogy: { en: 'Two phone plans: one with a high monthly fee but cheap per-minute rate (debt), one with no fee but expensive minutes (equity). Heavy users prefer the fee plan; light users prefer the no-fee plan. The indifference point is the usage where both bills are equal.', ar: 'خطتا هاتف: إحداهما برسوم شهرية عالية لكن سعر دقيقة رخيص (الدين)، وأخرى بلا رسوم لكن دقائق غالية (حقوق الملكية). المستخدمون الكثيفون يفضلون خطة الرسوم؛ والخفاف يفضلون بلا رسوم. نقطة عدم الاكتراث هي الاستخدام الذي تتساوى فيه الفاتورتان.' }, analogyLimit: { en: 'Unlike a phone bill, EPS also depends on taxes and on preference dividends, and the “usage” (EBIT) is uncertain — which is exactly why the approach is paired with a probability analysis of EBIT.', ar: 'بخلاف فاتورة الهاتف، تعتمد EPS أيضًا على الضرائب وعلى التوزيعات التفضيلية، و«الاستخدام» (EBIT) غير مؤكد — ولهذا بالضبط يُقرن المدخل بتحليل احتمالي لـEBIT.' } },

    { type: 'academic', paras: [
      { en: 'The income-statement chain used throughout (lecture slide 17): Sales − COGS = Gross profit; − operating expenses = EBIT; − interest = profit before tax; − tax = profit after tax; − preference dividends = earnings to equity; ÷ number of shares = EPS.', ar: 'سلسلة قائمة الدخل المستخدمة طوالًا (شريحة المحاضرة 17): المبيعات − تكلفة البضاعة المباعة = مجمل الربح؛ − المصروفات التشغيلية = EBIT؛ − الفائدة = الربح قبل الضريبة؛ − الضريبة = الربح بعد الضريبة؛ − التوزيعات التفضيلية = أرباح حقوق الملكية؛ ÷ عدد الأسهم = EPS.' },
      { en: 'The indifference point between two plans solves (EBIT − I<1>)(1 − T) ÷ N<1> = (EBIT − I<2>)(1 − T) ÷ N<2>, where I is total interest and N the number of ordinary shares under each plan. Because (1−T) cancels, the point depends only on interest and share counts.', ar: 'نقطة عدم الاكتراث بين خطتين تحل (EBIT − I<1>)(1 − T) ÷ N<1> = (EBIT − I<2>)(1 − T) ÷ N<2>، حيث I إجمالي الفائدة وN عدد الأسهم العادية تحت كل خطة. ولأن (1−T) يُختصر، تعتمد النقطة فقط على الفائدة وعدد الأسهم.' },
      { en: 'Decision rule from your slides: above the indifference point use debt (financial leverage expands EPS); below it use equity (avoids the fixed interest burden).', ar: 'قاعدة القرار من شرائحك: فوق نقطة عدم الاكتراث استخدم الدين (الرافعة المالية توسع EPS)؛ وتحتها استخدم حقوق الملكية (تجنب عبء الفائدة الثابت).' }
    ], defs: [
      { term: { en: 'EBIT–EPS indifference point', ar: 'نقطة عدم الاكتراث EBIT–EPS' }, def: { en: 'The EBIT at which two financing plans give identical EPS.', ar: '‏EBIT الذي تعطي عنده خطتا تمويل EPS متطابقة.' } },
      { term: { en: 'Fixed financial charge', ar: 'التكلفة المالية الثابتة' }, def: { en: 'Interest or preference dividends that do not vary with EBIT.', ar: 'فائدة أو توزيعات تفضيلية لا تتغير مع EBIT.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Write each plan as a small income statement: start from EBIT, subtract its interest, tax the rest, subtract preference dividends if any, then divide by that plan’s share count.', ar: 'اكتب كل خطة كقائمة دخل صغيرة: ابدأ من EBIT واطرح فائدتها وضرّب الباقي بالضريبة واطرح التوزيعات التفضيلية إن وجدت ثم اقسم على عدد أسهم تلك الخطة.' },
      { en: 'Do this for the expected EBIT to rank the plans today; then solve for the EBIT where two plans tie, to know when the ranking would flip.', ar: 'افعل هذا عند EBIT المتوقع لترتيب الخطط اليوم؛ ثم حل عند أي EBIT تتعادل خطتان، لتعرف متى ينقلب الترتيب.' }
    ], steps: [
      { en: 'List each plan’s total interest I and share count N.', ar: 'عدد لكل خطة إجمالي الفائدة I وعدد الأسهم N.' },
      { en: 'EPS = (EBIT − I)(1 − T) − Pref ÷ N.', ar: '‏EPS = [(EBIT − I)(1 − T) − Pref] ÷ N.' },
      { en: 'Rank plans at the expected EBIT.', ar: 'رتب الخطط عند EBIT المتوقع.' },
      { en: 'Indifference: (EBIT − I<1>)/N<1> = (EBIT − I<2>)/N<2>.', ar: 'عدم الاكتراث: (EBIT − I<1>)/N<1> = (EBIT − I<2>)/N<2>.' },
      { en: 'Decide: expected EBIT above → debt; below → equity.', ar: 'قرر: ‏EBIT المتوقع فوق ← دين؛ تحت ← حقوق ملكية.' }
    ], recap: { en: 'EPS compares plans at a given EBIT; the indifference point tells you the EBIT at which the comparison reverses.', ar: '‏EPS يقارن الخطط عند EBIT معيّن؛ ونقطة عدم الاكتراث تخبرك عند أي EBIT تنعكس المقارنة.' } },

    { type: 'formula', id: 'f-eps', tag: 'course', name: { en: 'EPS under a financing plan', ar: '‏EPS تحت خطة تمويل' },
      tex: 'EPS = \\frac{(EBIT - I)(1 - T) - Pref}{N}',
      vars: [ { sym: 'I', en: 'total interest (old + new)', ar: 'إجمالي الفائدة (قديم + جديد)' }, { sym: 'T', en: 'tax rate', ar: 'معدل الضريبة' }, { sym: 'Pref', en: 'preference dividends', ar: 'التوزيعات التفضيلية' }, { sym: 'N', en: 'number of ordinary shares', ar: 'عدد الأسهم العادية' } ],
      purpose: { en: 'Convert an operating profit into per-share earnings under a specific financing mix.', ar: 'تحويل ربح تشغيلي إلى أرباح لكل سهم تحت مزيج تمويلي محدد.' },
      assumptions: { en: 'Interest and preference dividends fixed; tax rate constant; share count known.', ar: 'الفائدة والتوزيعات التفضيلية ثابتة؛ ومعدل الضريبة ثابت؛ وعدد الأسهم معروف.' },
      when: { en: 'Ranking alternative financing plans at a given expected EBIT.', ar: 'ترتيب خطط تمويل البديلة عند EBIT متوقع معيّن.' },
      inputs: { en: 'EBIT, I, T, Pref, N for each plan.', ar: '‏EBIT وI وT وPref وN لكل خطة.' },
      cautions: { en: 'EPS ignores risk: a high-EPS debt plan also carries higher financial risk. Pair with the share-value approach (Lesson 8).', ar: '‏EPS يتجاهل المخاطر: خطة دين عالية EPS تحمل أيضًا مخاطر مالية أعلى. اقرن ذلك بمدخل قيمة السهم (الدرس 8).' },
      illustration: { en: 'Debt plan at EBIT 1,500,000: (1,500,000 − 840,000)(0.6) ÷ 800,000 = 396,000 ÷ 800,000 = ₹0.495.', ar: 'خطة الدين عند EBIT ‏1,500,000: (1,500,000 − 840,000)(0.6) ÷ 800,000 = 396,000 ÷ 800,000 = 0.495 روبية.' },
      sensitivity: { en: 'Higher I steepens the EPS line; higher N flattens it.', ar: '‏I أعلى يجعل خط EPS أشد؛ وN أعلى يجعله أقل انحدارًا.' },
      meaning: { en: 'Earnings attributable to each ordinary share under that plan.', ar: 'الأرباح المنسوبة لكل سهم عادي تحت تلك الخطة.' } },

    { type: 'formula', id: 'f-indiff', tag: 'course', name: { en: 'EBIT–EPS indifference point', ar: 'نقطة عدم الاكتراث EBIT–EPS' },
      tex: '\\frac{(EBIT - I_{1})(1 - T)}{N_{1}} = \\frac{(EBIT - I_{2})(1 - T)}{N_{2}}',
      vars: [ { sym: 'I_{1}, I_{2}', en: 'total interest under plans 1 and 2', ar: 'إجمالي الفائدة تحت الخطتين 1 و2' }, { sym: 'N_{1}, N_{2}', en: 'share counts under plans 1 and 2', ar: 'عددا الأسهم تحت الخطتين 1 و2' } ],
      purpose: { en: 'Find the operating profit at which two plans yield identical EPS.', ar: 'إيجاد الربح التشغيلي الذي تعطي عنده خطتان EPS متطابقة.' },
      assumptions: { en: 'Same tax rate in both plans; preference dividends either absent or handled separately.', ar: 'نفس معدل الضريبة في الخطتين؛ والتوزيعات التفضيلية غائبة أو معالجة منفصلة.' },
      when: { en: 'Choosing between debt and equity (or any two plans) under EBIT uncertainty.', ar: 'الاختيار بين الدين وحقوق الملكية (أو أي خطتين) تحت عدم تأكد EBIT.' },
      inputs: { en: 'I<1>, I<2>, N<1>, N<2>.', ar: '‏I<1> وI<2> وN<1> وN<2>.' },
      cautions: { en: 'It is a break-even, not an optimum; it says nothing about risk or share price.', ar: 'نقطة تعادل لا أمثلية؛ ولا تقول شيئًا عن المخاطر أو سعر السهم.' },
      illustration: { en: 'Debt vs equity: (EBIT−840,000)/800,000 = (EBIT−360,000)/1,050,000 → EBIT = 2,376,000 (slide rounds to ₹24,00,000).', ar: 'دين مقابل حقوق ملكية: (EBIT−840,000)/800,000 = (EBIT−360,000)/1,050,000 ← EBIT = 2,376,000 (تقرّب الشريحة إلى 24,00,000 روبية).' },
      sensitivity: { en: 'A larger interest gap or share-count gap moves the crossing point.', ar: 'فارق فائدة أو فارق عدد أسهم أكبر يحرك نقطة التقاطع.' },
      meaning: { en: 'The EBIT forecast that makes you indifferent between the two plans on EPS grounds.', ar: 'توقع EBIT الذي يجعلك غير مكترث بين الخطتين على أساس EPS.' } },

    { type: 'example', title: { en: 'Course example — three financing plans and the indifference point  ⚠ flagged', ar: 'مثال المقرر — ثلاث خطط تمويل ونقطة عدم الاكتراث  ⚠ مُعلَّم' },
      context: { en: 'Existing: debt ₹3,600,000 at 10%. Expansion need ₹4,000,000. Tax 40%. Current EBIT ₹1,500,000. Current shares 800,000. Plans: I debt at 12%; II preference shares with dividends 440,000 (slide says “LE”); III issue 250,000 new equity shares. Compute EPS under each and the debt-vs-equity indifference EBIT.', ar: 'القائم: دين 3,600,000 روبية بفائدة 10%. حاجة التوسع 4,000,000 روبية. الضريبة 40%. ‏EBIT الحالي 1,500,000 روبية. الأسهم الحالية 800,000. الخطط: I دين بفائدة 12%؛ II أسهم تفضيلية بتوزيعات 440,000 (تقول الشريحة «LE»)؛ III إصدار 250,000 سهم عادي جديد. احسب EPS تحت كل خطة ونقطة عدم الاكتراث بين الدين وحقوق الملكية.' },
      source: { en: 'Lecture 2, slides 19–23', ar: 'المحاضرة 2، الشرائح 19–23' },
      steps: [
        { kind: 'understand', body: { en: 'Three plans, same EBIT, same tax; different fixed charges and share counts.', ar: 'ثلاث خطط ونفس EBIT ونفس الضريبة؛ تكاليف ثابتة وأعداد أسهم مختلفة.' } },
        { kind: 'given', body: { en: 'Old interest = 3,600,000×10% = 360,000. New debt interest = 4,000,000×12% = 480,000. T = 40%. EBIT = 1,500,000. N now = 800,000.', ar: 'الفائدة القديمة = 3,600,000×10% = 360,000. فائدة الدين الجديد = 4,000,000×12% = 480,000. ‏T = 40%. ‏EBIT = 1,500,000. ‏N الآن = 800,000.' } },
        { kind: 'unknown', body: { en: 'EPS under I, II, III; indifference EBIT (debt vs equity).', ar: '‏EPS تحت I وII وIII؛ وEBIT عدم الاكتراث (دين مقابل حقوق ملكية).' } },
        { kind: 'method', body: { en: 'Income-statement chain per plan; then the indifference equation for plans I and III.', ar: 'سلسلة قائمة الدخل لكل خطة؛ ثم معادلة عدم الاكتراث للخطتين I وIII.' } },
        { kind: 'sub', body: { en: 'I: (1,500,000 − 840,000) = 660,000; tax 264,000; PAT 396,000; ÷800,000. II: (1,500,000 − 360,000) = 1,140,000; tax 456,000; PAT 684,000; −440,000 = 244,000; ÷800,000. III: PAT 684,000; ÷1,050,000.', ar: '‏I: ‏(1,500,000 − 840,000) = 660,000؛ ضريبة 264,000؛ بعد الضريبة 396,000؛ ÷800,000. ‏II: ‏(1,500,000 − 360,000) = 1,140,000؛ ضريبة 456,000؛ بعد الضريبة 684,000؛ −440,000 = 244,000؛ ÷800,000. ‏III: بعد الضريبة 684,000؛ ÷1,050,000.' }, math: ['EPS_{I} = \\frac{396{,}000}{800{,}000} = 0.495', 'EPS_{II} = \\frac{244{,}000}{800{,}000} = 0.305', 'EPS_{III} = \\frac{684{,}000}{1{,}050{,}000} = 0.651'] },
        { kind: 'calc', body: { en: 'EPS: I = ₹0.495; II = ₹0.305; III = ₹0.651. Indifference (I vs III): (EBIT−840,000)/800,000 = (EBIT−360,000)/1,050,000 → 1,050,000·EBIT − 882,000,000,000… solving: 250,000·EBIT = 594,000,000,000 → EBIT = 2,376,000 (slide: ≈ ₹24,00,000).', ar: '‏EPS: I = 0.495 روبية؛ ‏II = 0.305؛ ‏III = 0.651. عدم الاكتراث (‏I مقابل III): ‏(EBIT−840,000)/800,000 = (EBIT−360,000)/1,050,000 ← الحل: 250,000·EBIT = 594,000,000,000 ← EBIT = 2,376,000 (الشريحة: ≈ 24,00,000 روبية).' } },
        { kind: 'interpret', body: { en: 'At the current EBIT of 1,500,000 — below the indifference point — the equity plan (III) gives the highest EPS (0.651), exactly as the decision rule predicts. The preference plan (II) is worst here because it adds a fixed charge without any tax shield. Debt only wins above ≈2,376,000.', ar: 'عند EBIT الحالي 1,500,000 — تحت نقطة عدم الاكتراث — تعطي خطة الأسهم العادية (III) أعلى EPS (‏0.651)، تمامًا كما تتنبأ قاعدة القرار. وخطة التفضيلية (II) الأسوأ هنا لأنها تضيف تكلفة ثابتة بلا درع ضريبي. والدين يفوز فقط فوق ≈2,376,000.' } },
        { kind: 'verify', body: { en: 'Check the tie: at EBIT 2,376,000, debt EPS = (1,536,000)(0.6)/800,000 = 1.152; equity EPS = (2,016,000)(0.6)/1,050,000 = 1.152 ✓. Note the slide rounds to ₹24,00,000 (24 lakh) and states the preference dividend in “LE” while all other figures are in ₹ — a unit inconsistency to confirm with your instructor.', ar: 'تحقق التعادل: عند EBIT ‏2,376,000، ‏EPS للدين = (1,536,000)(0.6)/800,000 = 1.152؛ وEPS للأسهم = (2,016,000)(0.6)/1,050,000 = 1.152 ✓. لاحظ أن الشريحة تقرّب إلى 24,00,000 روبية (24 لاخ) وتذكر التوزيعات التفضيلية بـ«LE» بينما كل الأرقام الأخرى بالروبية — عدم اتساق في الوحدات ينبغي تأكيده مع مدرسك.' } }
      ]},

    { type: 'visual', kind: 'line', caption: { en: 'EPS vs EBIT for the debt and equity plans; the lines cross at EBIT = 2,376,000 (EPS = 1.152). The current EBIT of 1,500,000 sits left of the crossing, where equity dominates.', ar: '‏EPS مقابل EBIT لخطتي الدين والأسهم؛ يتقاطع الخطان عند EBIT = 2,376,000 (‏EPS = 1.152). الـEBIT الحالي 1,500,000 يقع يسار التقاطع حيث تهيمن الأسهم.' },
      cfg: { x: { min: 0, max: 4000, label: { en: 'EBIT (₹ thousands)', ar: '‏EBIT (آلاف الروبية)' }, ticks: 4, fmt: 'k' }, y: { label: { en: 'EPS (₹)', ar: '‏EPS (روبية)' }, fmt: 'n2' },
        series: [
          { name: { en: 'Debt plan (I=840k, N=800k)', ar: 'خطة الدين (I=840 ألف، N=800 ألف)' }, color: '#1f3a5f', points: [[0,-0.63],[1000,0.12],[2000,0.87],[2376,1.152],[3000,1.62],[4000,2.37]] },
          { name: { en: 'Equity plan (I=360k, N=1050k)', ar: 'خطة الأسهم (I=360 ألف، N=1050 ألف)' }, color: '#0e7c86', points: [[0,-0.206],[1000,0.366],[2000,0.937],[2376,1.152],[3000,1.509],[4000,2.08]] }
        ], markers: [ { x: 2376, y: 1.152, label: { en: 'Indifference', ar: 'عدم الاكتراث' } }, { x: 1500, y: 0.651, label: { en: 'Current EBIT', ar: '‏EBIT الحالي' }, color: '#c46a2b' } ] } },

    { type: 'flags', items: [
      { en: 'The indifference EBIT solves exactly to ₹2,376,000; the slide states ≈ ₹24,00,000 (a rounded lakh notation). Both are shown; use whichever your instructor specifies.', ar: 'نقطة عدم الاكتراث تحل بالضبط إلى 2,376,000 روبية؛ وتذكر الشريحة ≈ 24,00,000 روبية (تدوين لاخ مقرّب). كلاهما معروض؛ استخدم ما يحدده مدرسك.' },
      { en: 'The preference dividend is labelled “440,000 LE” while every other amount is in ₹ — a currency-label inconsistency in the source.', ar: 'التوزيعات التفضيلية معنونة «440,000 LE» بينما كل المبالغ الأخرى بالروبية — عدم اتساق في تسمية العملة في المصدر.' }
    ]},

    { type: 'mistakes', items: [
      { wrong: { en: 'Forgetting the old interest when a plan adds new debt.', ar: 'نسيان الفائدة القديمة عندما تضيف خطة دينًا جديدًا.' },
        why: { en: 'Total interest is old + new: 360,000 + 480,000 = 840,000 for plan I.', ar: 'إجمالي الفائدة قديم + جديد: 360,000 + 480,000 = 840,000 للخطة I.' },
        correct: { en: 'Always carry existing charges into every plan that keeps them.', ar: 'احمل التكاليف القائمة دائمًا إلى كل خطة تبقيها.' },
        illus: { en: 'Using only 480,000 would give EPS = (1,020,000)(0.6)/800,000 = 0.765 — wrong.', ar: 'استخدام 480,000 فقط يعطي EPS = (1,020,000)(0.6)/800,000 = 0.765 — خطأ.' } },
      { wrong: { en: 'Deducting preference dividends before tax.', ar: 'خصم التوزيعات التفضيلية قبل الضريبة.' },
        why: { en: 'Preference dividends are not tax-deductible; they come out of after-tax profit.', ar: 'التوزيعات التفضيلية غير قابلة للخصم الضريبي؛ وتخرج من الربح بعد الضريبة.' },
        correct: { en: 'Tax first, then subtract Pref (plan II: 684,000 − 440,000).', ar: 'الضريبة أولًا ثم اطرح Pref (الخطة II: ‏684,000 − 440,000).' },
        illus: { en: 'Deducting before tax would give (1,140,000−440,000)(0.6)/800,000 = 0.525 — wrong vs 0.305.', ar: 'الخصم قبل الضريبة يعطي (1,140,000−440,000)(0.6)/800,000 = 0.525 — خطأ مقابل 0.305.' } },
      { wrong: { en: 'Choosing the highest-EPS plan without checking where expected EBIT sits relative to the indifference point.', ar: 'اختيار خطة أعلى EPS دون فحص موقع EBIT المتوقع نسبة إلى نقطة عدم الاكتراث.' },
        why: { en: 'The ranking reverses across the indifference EBIT.', ar: 'الترتيب ينقلب عبر EBIT عدم الاكتراث.' },
        correct: { en: 'Compare expected EBIT to 2,376,000 first, then pick.', ar: 'قارن EBIT المتوقع بـ2,376,000 أولًا ثم اختر.' },
        illus: { en: 'At EBIT 3,000,000 debt gives 1.62 vs equity 1.509 — the opposite ranking to EBIT 1,500,000.', ar: 'عند EBIT ‏3,000,000 يعطي الدين 1.62 مقابل 1.509 للأسهم — ترتيب معاكس لـEBIT ‏1,500,000.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'At EBIT = ₹1,500,000 which plan gives the highest EPS?', ar: 'عند EBIT = 1,500,000 روبية أي خطة تعطي أعلى EPS؟' },
        options: [ { en: 'I (debt), 0.495', ar: '‏I (دين)، 0.495' }, { en: 'II (preference), 0.305', ar: '‏II (تفضيلية)، 0.305' }, { en: 'III (equity), 0.651', ar: '‏III (أسهم)، 0.651' }, { en: 'All equal', ar: 'كلها متساوية' } ], answer: 2,
        explain: { en: 'Because 1,500,000 is below the indifference EBIT, the no-new-fixed-charge equity plan wins.', ar: 'لأن 1,500,000 تحت EBIT عدم الاكتراث، تفوز خطة الأسهم بلا تكلفة ثابتة جديدة.' } },
      { type: 'num', q: { en: 'Plan I interest totals 840,000 and shares 800,000; plan III interest 360,000 and shares 1,050,000. The indifference EBIT (in ₹ thousands) is:', ar: 'فائدة الخطة I إجماليها 840,000 وأسهمها 800,000؛ والخطة III فائدتها 360,000 وأسهمها 1,050,000. ‏EBIT عدم الاكتراث (بآلاف الروبية) هو:' },
        answer: 2376, tol: 1, unit: '',
        explain: { en: '1,050(EBIT−840) = 800(EBIT−360) → 250·EBIT = 594,000 → EBIT = 2,376 (thousand).', ar: '‏1,050(EBIT−840) = 800(EBIT−360) ← 250·EBIT = 594,000 ← EBIT = 2,376 (بالآلاف).' } },
      { type: 'tf', q: { en: 'True or false: the tax rate changes the debt-vs-equity indifference EBIT.', ar: 'صواب أم خطأ: معدل الضريبة يغيّر EBIT عدم الاكتراث بين الدين والأسهم.' },
        answer: false,
        explain: { en: 'False. (1−T) appears on both sides and cancels.', ar: 'خطأ. ‏(1−T) يظهر في الطرفين ويُختصر.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'EPS under a plan', ar: '‏EPS تحت خطة' }, back: { en: '((EBIT − I)(1−T) − Pref) ÷ N', ar: '‏((EBIT − I)(1−T) − Pref) ÷ N' } },
      { front: { en: 'Indifference point', ar: 'نقطة عدم الاكتراث' }, back: { en: '(EBIT−I<1>)/N<1> = (EBIT−I<2>)/N<2>', ar: '‏(EBIT−I<1>)/N<1> = (EBIT−I<2>)/N<2>' } },
      { front: { en: 'Decision rule', ar: 'قاعدة القرار' }, back: { en: 'EBIT above → debt; below → equity', ar: '‏EBIT فوق ← دين؛ تحت ← أسهم' } }
    ]},

    { type: 'summary', points: [
      { en: 'EPS = ((EBIT − I)(1−T) − Pref) ÷ N for each financing plan.', ar: '‏EPS = ((EBIT − I)(1−T) − Pref) ÷ N لكل خطة تمويل.' },
      { en: 'Course EPS at EBIT 1.5m: debt 0.495, preference 0.305, equity 0.651.', ar: '‏EPS المقرر عند EBIT ‏1.5 مليون: دين 0.495 وتفضيلية 0.305 وأسهم 0.651.' },
      { en: 'Indifference EBIT ≈ 2,376,000 (slide rounds to ₹24,00,000); above it debt wins, below it equity wins.', ar: '‏EBIT عدم الاكتراث ≈ 2,376,000 (تقرّب الشريحة إلى 24,00,000 روبية)؛ فوقه يفوز الدين وتحته تفوز الأسهم.' },
      { en: 'EPS alone ignores risk — hence the share-value approach next.', ar: '‏EPS وحده يتجاهل المخاطر — ومن ثم مدخل قيمة السهم تاليًا.' }
    ], canExplain: [
      { en: 'Why the debt plan’s EPS line is steeper.', ar: 'لماذا خط EPS لخطة الدين أشد انحدارًا.' },
      { en: 'Why preference shares performed worst at low EBIT.', ar: 'لماذا كانت الأسهم التفضيلية الأسوأ عند EBIT منخفض.' },
      { en: 'Why (1−T) cancels in the indifference equation.', ar: 'لماذا يُختصر (1−T) في معادلة عدم الاكتراث.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L8 */
window.COURSE.lessons.push({
  id: 'l8', module: 'm2', minutes: 50,
  title: { en: 'The Share-Value Approach and the Optimal Capital Structure', ar: 'مدخل قيمة السهم وهيكل رأس المال الأمثل' },
  subtitle: { en: 'Why maximising EPS and maximising share value give different answers', ar: 'لماذا يعطي تعظيم EPS وتعظيم قيمة السهم إجابتين مختلفتين' },
  source: { en: 'Lecture 2, slides 24–33 (Chapter 13)', ar: 'المحاضرة 2، الشرائح 24–33 (الفصل 13)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Construct debt, equity and share counts for a set of candidate capital structures.', ar: 'بناء الدين وحقوق الملكية وأعداد الأسهم لمجموعة هياكل رأس مال مرشحة.' },
      { en: 'Compute interest, EBIT scenarios, expected EPS and required return for each structure.', ar: 'حساب الفائدة وسيناريوهات EBIT وEPS المتوقع والعائد المطلوب لكل هيكل.' },
      { en: 'Value shares with the zero-growth model P = EPS ÷ r and compare with the EPS approach.', ar: 'تقييم الأسهم بنموذج النمو الصفري P = EPS ÷ r والمقارنة مع مدخل EPS.' },
      { en: 'Explain why the share-value optimum (30% debt) differs from the EPS optimum (50% debt).', ar: 'شرح لماذا تختلف أمثلية قيمة السهم (دين 30%) عن أمثلية EPS (دين 50%).' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Expected EPS', ar: '‏EPS المتوقع' },
        def: { en: 'Sum over EBIT scenarios of (EPS × probability).', ar: 'مجموع عبر سيناريوهات EBIT لـ(EPS × الاحتمال).' },
        why: { en: 'It collapses EBIT uncertainty into one per-share number per capital structure.', ar: 'يختزل عدم تأكد EBIT في رقم واحد لكل سهم لكل هيكل رأس مال.' },
        example: { en: 'At 0% debt: 0.25(0.00) + 0.50(2.40) + 0.25(4.80) = $2.40.', ar: 'عند دين 0%: ‏0.25(0.00) + 0.50(2.40) + 0.25(4.80) = 2.40 دولار.' },
        link: 'l2' },
      { term: { en: 'Required return on equity (r<s>)', ar: 'العائد المطلوب على حقوق الملكية (r<s>)' },
        def: { en: 'The discount rate shareholders apply; the course supplies it per debt ratio (Table 13.14).', ar: 'معدل الخصم الذي يطبقه المساهمون؛ وتورده المحاضرة لكل نسبة دين (الجدول 13.14).' },
        why: { en: 'Share value = EPS ÷ r<s>; a rising r<s> is how the market prices added financial risk.', ar: 'قيمة السهم = EPS ÷ r<s>؛ وارتفاع r<s> هو طريقة تسعير السوق للمخاطر المالية المضافة.' },
        example: { en: 'r<s> rises from 0.115 at 0% debt to 0.190 at 60% debt.', ar: 'يرتفع r<s> من 0.115 عند دين 0% إلى 0.190 عند دين 60%.' },
        link: 'l4' },
      { term: { en: 'Zero-growth (perpetuity) share valuation', ar: 'تقييم السهم بنمو صفري (دخل دائم)' },
        def: { en: 'P = EPS ÷ r, treating EPS as a perpetual constant stream.', ar: '‏P = EPS ÷ r، معاملة EPS كسيل دائم ثابت.' },
        why: { en: 'It is the share-value approach’s valuation engine.', ar: 'هو محرك التقييم في مدخل قيمة السهم.' },
        example: { en: '2.91 ÷ 0.125 = $23.28 at 30% debt.', ar: '‏2.91 ÷ 0.125 = 23.28 دولار عند دين 30%.' } }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'The EPS approach of Lesson 7 looks only at the numerator: earnings per share. But shareholders care about value, and value divides earnings by the risk-adjusted required return. Adding debt raises expected EPS (leverage) AND raises r<s> (financial risk). Which effect wins depends on the debt level.', ar: 'مدخل EPS في الدرس 7 ينظر فقط إلى البسط: ربحية السهم. لكن المساهمين يهمهم القيمة، والقيمة تقسم الأرباح على العائد المطلوب المعدل بالمخاطر. إضافة الدين ترفع EPS المتوقع (الرافعة) وترفع r<s> (المخاطر المالية). أي أثر يفوز يعتمد على مستوى الدين.' },
      { en: 'Your lecture runs the full seven-structure analysis: debt ratios 0% to 60% in 10-point steps on a $500,000 asset base, with sales scenarios of $400k/$600k/$800k (probabilities 0.25/0.50/0.25), fixed costs $200k, variable costs 50% of sales, tax 40%, and book value $20 per share. Expected EPS peaks at 50% debt ($3.18) but estimated share value peaks at 30% debt ($23.28). The share-value approach is the one consistent with shareholder wealth maximisation.', ar: 'تحلل محاضرتك سبعة هياكل كاملة: نسب دين من 0% إلى 60% بخطوات 10 نقاط على قاعدة أصول 500,000 دولار، مع سيناريوهات مبيعات 400/600/800 ألف (احتمالات 0.25/0.50/0.25)، وتكاليف ثابتة 200 ألف ومتغيرة 50% من المبيعات، وضريبة 40%، وقيمة دفترية 20 دولارًا للسهم. يبلغ EPS المتوقع ذروته عند دين 50% (‏3.18 دولار) لكن قيمة السهم المقدرة تبلغ ذروتها عند دين 30% (‏23.28 دولار). ومدخل قيمة السهم هو المتسق مع تعظيم ثروة المساهمين.' }
    ], analogy: { en: 'A job paying a higher salary but with a higher chance of layoff. The salary is EPS; the layoff risk folded into your discounting is r<s>. The best job is not the highest salary but the highest salary-after-risk-adjustment — the share value.', ar: 'وظيفة براتب أعلى لكن باحتمال أعلى للتسريح. الراتب هو EPS؛ وخطر التسريح المطوي في خصمك هو r<s>. أفضل وظيفة ليست الأعلى راتبًا بل الأعلى راتبًا بعد تعديل المخاطر — قيمة السهم.' }, analogyLimit: { en: 'r<s> here is supplied by the course (Table 13.14), not derived; in practice estimating how required return rises with leverage is itself a modelling task (M&M Proposition II, CAPM).', ar: '‏r<s> هنا مورَّد من المقرر (الجدول 13.14) لا مشتق؛ وعمليًا تقدير كيف يرتفع العائد المطلوب مع الرافعة مهمة نمذجة بحد ذاتها (فرضية موديغلياني–ميلر II، ‏CAPM).' } },

    { type: 'academic', paras: [
      { en: 'Procedure from your slides: (1) For each debt ratio compute debt = ratio × total assets, equity = assets − debt, shares = equity ÷ $20 book value. (2) Interest = debt × the interest rate applicable to all debt at that ratio. (3) EBIT per sales scenario: sales − fixed costs − 50% of sales. (4) EPS per scenario = (EBIT − interest)(1 − 0.40) ÷ shares; expected EPS = Σ EPS × probability. (5) Share value = expected EPS ÷ r<s>.', ar: 'الإجراء من شرائحك: (1) لكل نسبة دين احسب الدين = النسبة × إجمالي الأصول، وحقوق الملكية = الأصول − الدين، والأسهم = حقوق الملكية ÷ 20 دولارًا قيمة دفترية. (2) الفائدة = الدين × معدل الفائدة المنطبق على كل الدين عند تلك النسبة. (3) ‏EBIT لكل سيناريو مبيعات: المبيعات − التكاليف الثابتة − 50% من المبيعات. (4) ‏EPS لكل سيناريو = (EBIT − الفائدة)(1 − 0.40) ÷ الأسهم؛ وEPS المتوقع = Σ EPS × الاحتمال. (5) قيمة السهم = EPS المتوقع ÷ r<s>.' },
      { en: 'The two criteria disagree because EPS ignores the rise in r<s>. Between 30% and 50% debt, expected EPS keeps climbing (2.91 → 3.12 → 3.18) but r<s> climbs faster (0.125 → 0.140 → 0.165), so share value falls (23.28 → 22.29 → 19.27). Conclusion of the lecture: EPS is maximised at 50% debt; share value is maximised at 30% debt, and the share-value criterion identifies the optimal capital structure.', ar: 'المعياران يختلفان لأن EPS يتجاهل ارتفاع r<s>. بين دين 30% و50% يستمر EPS المتوقع في الصعود (2.91 ← 3.12 ← 3.18) لكن r<s> يصعد أسرع (0.125 ← 0.140 ← 0.165)، لذا تنخفض قيمة السهم (23.28 ← 22.29 ← 19.27). استنتاج المحاضرة: ‏EPS يُعظَّم عند دين 50%؛ وقيمة السهم تُعظَّم عند دين 30%، ومعيار قيمة السهم هو الذي يحدد هيكل رأس المال الأمثل.' }
    ], defs: [
      { term: { en: 'Zero-growth model', ar: 'نموذج النمو الصفري' }, def: { en: 'P = EPS ÷ r: value of a perpetual, constant per-share earnings stream.', ar: '‏P = EPS ÷ r: قيمة سيل أرباح لكل سهم دائم وثابت.' } },
      { term: { en: 'Optimal capital structure', ar: 'هيكل رأس المال الأمثل' }, def: { en: 'The debt/equity mix maximising share value (here: 30% debt).', ar: 'مزيج الدين/حقوق الملكية الذي يعظم قيمة السهم (هنا: دين 30%).' } }
    ]},

    { type: 'simple', paras: [
      { en: 'For each candidate debt ratio, build the balance sheet, the interest bill, and the three-scenario income statements. Turn each into an EPS, probability-weight them, then divide by the required return for that ratio.', ar: 'لكل نسبة دين مرشحة، ابنِ الميزانية وفاتورة الفائدة وقوائم الدخل الثلاثية السيناريوهات. حوّل كلًا إلى EPS ورجحها بالاحتمالات ثم اقسم على العائد المطلوب لتلك النسبة.' },
      { en: 'Plot both results against the debt ratio. Where EPS peaks is not where value peaks; follow the value.', ar: 'ارسم النتيجتين مقابل نسبة الدين. حيث يبلغ EPS ذروته ليست حيث تبلغ القيمة ذروتها؛ اتبع القيمة.' }
    ], steps: [
      { en: 'Debt = ratio × 500; Equity = 500 − Debt; Shares = Equity ÷ 20 ($000).', ar: 'الدين = النسبة × 500؛ حقوق الملكية = 500 − الدين؛ الأسهم = حقوق الملكية ÷ 20 (بالآلاف).' },
      { en: 'Interest = Debt × rate(all debt).', ar: 'الفائدة = الدين × معدل(كل الدين).' },
      { en: 'EBIT = Sales − 200 − 0.5×Sales for each scenario.', ar: '‏EBIT = المبيعات − 200 − 0.5×المبيعات لكل سيناريو.' },
      { en: 'EPS = (EBIT − Interest)(0.6) ÷ Shares; Expected EPS = Σ p×EPS.', ar: '‏EPS = (EBIT − الفائدة)(0.6) ÷ الأسهم؛ وEPS المتوقع = Σ p×EPS.' },
      { en: 'Share value = Expected EPS ÷ r<s>; pick the ratio with the highest value.', ar: 'قيمة السهم = EPS المتوقع ÷ r<s>؛ واختر النسبة بأعلى قيمة.' }
    ], recap: { en: 'EPS maximisation ignores risk; share-value maximisation prices it through r<s>. The course’s optimum is 30% debt.', ar: 'تعظيم EPS يتجاهل المخاطر؛ وتعظيم قيمة السهم يسعّرها عبر r<s>. وأمثلية المقرر دين 30%.' } },

    { type: 'formula', id: 'f-zerog', tag: 'course', name: { en: 'Zero-growth share value', ar: 'قيمة السهم بنمو صفري' },
      tex: 'P = \\frac{EPS}{r}',
      vars: [ { sym: 'EPS', en: 'expected earnings per share', ar: 'ربحية السهم المتوقعة' }, { sym: 'r', en: 'required return on equity (r<s>)', ar: 'العائد المطلوب على حقوق الملكية (r<s>)' } ],
      purpose: { en: 'Value a share from a perpetual constant earnings stream.', ar: 'تقييم سهم من سيل أرباح دائم ثابت.' },
      assumptions: { en: 'EPS constant forever; r constant and risk-appropriate; no growth.', ar: '‏EPS ثابت للأبد؛ وr ثابت ومناسب للمخاطر؛ بلا نمو.' },
      when: { en: 'Ranking capital structures by shareholder value in this course’s framework.', ar: 'ترتيب هياكل رأس المال بقيمة المساهم في إطار هذا المقرر.' },
      inputs: { en: 'Expected EPS and r<s> per structure.', ar: '‏EPS المتوقع وr<s> لكل هيكل.' },
      cautions: { en: 'Real firms grow; the model is a comparative tool here, not a general valuation method.', ar: 'الشركات الحقيقية تنمو؛ والنموذج أداة مقارنة هنا لا طريقة تقييم عامة.' },
      illustration: { en: '30% debt: 2.91 ÷ 0.125 = $23.28 (the maximum across all seven structures).', ar: 'دين 30%: ‏2.91 ÷ 0.125 = 23.28 دولار (الأقصى عبر الهياكل السبعة).' },
      sensitivity: { en: 'Value rises with EPS but falls with r<s>; beyond 30% debt the r<s> effect dominates.', ar: 'القيمة ترتفع مع EPS وتنخفض مع r<s>؛ وفوق دين 30% يهيمن أثر r<s>.' },
      meaning: { en: 'What a share is worth to an investor discounting its perpetual earnings at the risk-appropriate rate.', ar: 'ما يساويه السهم لمستثمر يخصم أرباحه الدائمة بالمعدل المناسب للمخاطر.' } },

    { type: 'example', title: { en: 'Course worked analysis — seven capital structures (steps 1–5)', ar: 'تحليل المقرر المحلول — سبعة هياكل رأس مال (الخطوات 1–5)' },
      context: { en: 'Sales: 25% chance $400,000; 50% $600,000; 25% $800,000. Fixed operating costs $200,000; variable 50% of sales. Total assets $500,000, no current liabilities; book value $20/share. Debt ratios 0–60%. Tax 40%. Choose the optimal structure by the EPS approach and the share-value approach.', ar: 'المبيعات: احتمال 25% ‏400,000 دولار؛ و50% ‏600,000؛ و25% ‏800,000. تكاليف تشغيل ثابتة 200,000 دولار؛ ومتغيرة 50% من المبيعات. إجمالي الأصول 500,000 دولار بلا خصوم متداولة؛ والقيمة الدفترية 20 دولارًا/للسهم. نسب الدين 0–60%. الضريبة 40%. اختر الهيكل الأمثل بمدخلي EPS وقيمة السهم.' },
      source: { en: 'Lecture 2, slides 25–33', ar: 'المحاضرة 2، الشرائح 25–33' },
      steps: [
        { kind: 'given', body: { en: 'Step 1 (structures, $000): debt 0/50/100/150/200/250/300; equity 500/450/400/350/300/250/200; shares (000) 25.00/22.50/20.00/17.50/15.00/12.50/10.00. Step 2: rates on all debt 0/9/9.5/10/11/13.5/16.5%; interest 0/4.50/9.50/15.00/22.00/33.75/49.50. Step 3: EBIT 0/100/200 for sales 400/600/800.', ar: 'الخطوة 1 (هياكل، بالآلاف): الدين 0/50/100/150/200/250/300؛ حقوق الملكية 500/450/400/350/300/250/200؛ الأسهم (بالآلاف) 25.00/22.50/20.00/17.50/15.00/12.50/10.00. الخطوة 2: معدلات كل الدين 0/9/9.5/10/11/13.5/16.5%؛ الفائدة 0/4.50/9.50/15.00/22.00/33.75/49.50. الخطوة 3: ‏EBIT ‏0/100/200 لمبيعات 400/600/800.' } },
        { kind: 'calc', body: { en: 'Step 4 (expected EPS by ratio): 0% → 2.40; 10% → 2.55; 20% → 2.72; 30% → 2.91; 40% → 3.12; 50% → 3.18; 60% → 3.03. Worked detail at 30%: EPS = (0−15)(0.6)/17.5 = −0.51; (100−15)(0.6)/17.5 = 2.91; (200−15)(0.6)/17.5 = 6.34; expected = 0.25(−0.51)+0.5(2.91)+0.25(6.34) = 2.91.', ar: 'الخطوة 4 (‏EPS المتوقع حسب النسبة): ‏0% ← 2.40؛ ‏10% ← 2.55؛ ‏20% ← 2.72؛ ‏30% ← 2.91؛ ‏40% ← 3.12؛ ‏50% ← 3.18؛ ‏60% ← 3.03. تفصيل محلول عند 30%: ‏EPS = (0−15)(0.6)/17.5 = −0.51؛ و(100−15)(0.6)/17.5 = 2.91؛ و(200−15)(0.6)/17.5 = 6.34؛ والمتوقع = 0.25(−0.51)+0.5(2.91)+0.25(6.34) = 2.91.' }, math: ['EPS_{30\\%,low} = -0.51', 'EPS_{30\\%,mid} = 2.91', 'EPS_{30\\%,high} = 6.34', 'E[EPS_{30\\%}] = 2.91'] },
        { kind: 'calc', body: { en: 'Step 5 (share value = EPS ÷ r<s>): r<s> = 0.115/0.117/0.121/0.125/0.140/0.165/0.190 → values $20.87 / 21.79 / 22.48 / 23.28 / 22.29 / 19.27 / 15.95.', ar: 'الخطوة 5 (قيمة السهم = EPS ÷ r<s>): ‏r<s> = 0.115/0.117/0.121/0.125/0.140/0.165/0.190 ← القيم 20.87 / 21.79 / 22.48 / 23.28 / 22.29 / 19.27 / 15.95 دولارًا.' }, math: ['P_{30\\%} = \\frac{2.91}{0.125} = 23.28'] },
        { kind: 'interpret', body: { en: 'EPS approach → optimum at 50% debt (EPS 3.18). Share-value approach → optimum at 30% debt (P = $23.28). The lecture’s conclusion: the optimal capital structure is 30% debt / 70% equity, because shareholders maximise value, not EPS.', ar: 'مدخل EPS ← الأمثلية عند دين 50% (‏EPS ‏3.18). ومدخل قيمة السهم ← الأمثلية عند دين 30% (‏P = 23.28 دولار). واستنتاج المحاضرة: هيكل رأس المال الأمثل دين 30% / حقوق ملكية 70%، لأن المساهمين يعظمون القيمة لا EPS.' } },
        { kind: 'verify', body: { en: 'Check one row end-to-end (60%): interest 49.50; EPS = (0−49.5)(0.6)/10 = −2.97; (100−49.5)(0.6)/10 = 3.03; (200−49.5)(0.6)/10 = 9.03; expected = 0.25(−2.97)+0.5(3.03)+0.25(9.03) = 3.03; value = 3.03 ÷ 0.19 = 15.95 ✓.', ar: 'تحقق صفًا كاملًا (60%): الفائدة 49.50؛ ‏EPS = (0−49.5)(0.6)/10 = −2.97؛ و(100−49.5)(0.6)/10 = 3.03؛ و(200−49.5)(0.6)/10 = 9.03؛ والمتوقع = 0.25(−2.97)+0.5(3.03)+0.25(9.03) = 3.03؛ والقيمة = 3.03 ÷ 0.19 = 15.95 ✓.' } }
      ]},

    { type: 'visual', kind: 'table', caption: { en: 'Full course results: structures, interest, expected EPS, r<s> and share value (Lecture 2, steps 1–5).', ar: 'نتائج المقرر كاملة: الهياكل والفائدة وEPS المتوقع وr<s> وقيمة السهم (المحاضرة 2، الخطوات 1–5).' },
      table: { head: [ { en: 'Debt ratio', ar: 'نسبة الدين' }, { en: 'Debt ($000)', ar: 'الدين (ألف $)' }, { en: 'Equity ($000)', ar: 'حقوق الملكية (ألف $)' }, { en: 'Shares (000)', ar: 'الأسهم (بالآلاف)' }, { en: 'Interest ($000)', ar: 'الفائدة (ألف $)' }, { en: 'Expected EPS ($)', ar: '‏EPS المتوقع ($)' }, { en: 'r<s>', ar: '‏r<s>' }, { en: 'Share value ($)', ar: 'قيمة السهم ($)' } ],
        rows: [
          ['0%', '0', '500', '25.00', '0.00', '2.40', '0.115', '20.87'],
          ['10%', '50', '450', '22.50', '4.50', '2.55', '0.117', '21.79'],
          ['20%', '100', '400', '20.00', '9.50', '2.72', '0.121', '22.48'],
          ['30%', '150', '350', '17.50', '15.00', '2.91', '0.125', '23.28 ★'],
          ['40%', '200', '300', '15.00', '22.00', '3.12', '0.140', '22.29'],
          ['50%', '250', '250', '12.50', '33.75', '3.18 ★', '0.165', '19.27'],
          ['60%', '300', '200', '10.00', '49.50', '3.03', '0.190', '15.95']
        ] } },

    { type: 'visual', kind: 'line', caption: { en: 'Expected EPS and share value against the debt ratio. EPS peaks at 50%; value peaks at 30% — the divergence is the lesson.', ar: '‏EPS المتوقع وقيمة السهم مقابل نسبة الدين. ‏EPS يبلغ ذروته عند 50%؛ والقيمة عند 30% — والتباعد هو الدرس.' },
      cfg: { dual: true, x: { min: 0, max: 60, label: { en: 'Debt ratio (%)', ar: 'نسبة الدين (%)' }, ticks: 6, fmt: 'pct0' }, y: { label: { en: 'Share value ($)', ar: 'قيمة السهم ($)' }, fmt: 'n2' }, y2: { label: { en: 'Expected EPS ($)', ar: '‏EPS المتوقع ($)' }, fmt: 'n2' },
        series: [
          { name: { en: 'Share value ($)', ar: 'قيمة السهم ($)' }, color: '#0e7c86', axis: 1, points: [[0,20.87],[10,21.79],[20,22.48],[30,23.28],[40,22.29],[50,19.27],[60,15.95]] },
          { name: { en: 'Expected EPS ($)', ar: '‏EPS المتوقع ($)' }, color: '#c46a2b', axis: 2, dash: '6 4', points: [[0,2.40],[10,2.55],[20,2.72],[30,2.91],[40,3.12],[50,3.18],[60,3.03]] }
        ], markers: [ { x: 30, y: 23.28, label: { en: 'Value max', ar: 'أقصى قيمة' } }, { x: 50, y: 19.27, label: { en: 'EPS max (value falls)', ar: 'أقصى EPS (القيمة تنخفض)' }, color: '#c46a2b' } ] } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Declaring 50% debt optimal because EPS is highest there.', ar: 'إعلان دين 50% أمثل لأن EPS الأعلى هناك.' },
        why: { en: 'EPS ignores the jump in required return (0.165 at 50% vs 0.125 at 30%).', ar: '‏EPS يتجاهل القفزة في العائد المطلوب (0.165 عند 50% مقابل 0.125 عند 30%).' },
        correct: { en: 'Maximise share value: 30% debt, P = $23.28.', ar: 'عظّم قيمة السهم: دين 30%، ‏P = 23.28 دولار.' },
        illus: { en: 'At 50%: 3.18 ÷ 0.165 = 19.27 < 23.28.', ar: 'عند 50%: ‏3.18 ÷ 0.165 = 19.27 < 23.28.' } },
      { wrong: { en: 'Using the same interest rate for every debt ratio.', ar: 'استخدام نفس معدل الفائدة لكل نسب الدين.' },
        why: { en: 'Lenders charge more as leverage rises (9% at 10% debt up to 16.5% at 60%).', ar: 'الدائنون يفرضون أكثر مع ارتفاع الرافعة (9% عند دين 10% حتى 16.5% عند 60%).' },
        correct: { en: 'Use the rate “on all debt” for the ratio (step 2 table).', ar: 'استخدم المعدل «على كل الدين» لتلك النسبة (جدول الخطوة 2).' },
        illus: { en: 'At 60%: 300 × 16.5% = 49.50, not 300 × 9% = 27.', ar: 'عند 60%: ‏300 × 16.5% = 49.50 لا 300 × 9% = 27.' } },
      { wrong: { en: 'Computing shares from debt instead of equity.', ar: 'حساب الأسهم من الدين بدل حقوق الملكية.' },
        why: { en: 'Shares represent equity: shares = equity ÷ $20 book value.', ar: 'الأسهم تمثل حقوق الملكية: الأسهم = حقوق الملكية ÷ 20 دولارًا قيمة دفترية.' },
        correct: { en: 'At 30%: 350 ÷ 20 = 17.50 (thousand) shares.', ar: 'عند 30%: ‏350 ÷ 20 = 17.50 (ألف) سهم.' },
        illus: { en: 'Using debt 150 ÷ 20 = 7.5 would triple every EPS figure.', ar: 'استخدام الدين 150 ÷ 20 = 7.5 يضاعف كل أرقام EPS ثلاث مرات.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'Which debt ratio maximises expected EPS in the course analysis?', ar: 'أي نسبة دين تعظم EPS المتوقع في تحليل المقرر؟' },
        options: [ { en: '30%', ar: '30%' }, { en: '40%', ar: '40%' }, { en: '50%', ar: '50%' }, { en: '60%', ar: '60%' } ], answer: 2,
        explain: { en: 'Expected EPS = 3.18 at 50% debt (lecture conclusion, slide 33).', ar: '‏EPS المتوقع = 3.18 عند دين 50% (استنتاج المحاضرة، الشريحة 33).' } },
      { type: 'mcq', q: { en: 'Which debt ratio maximises estimated share value?', ar: 'أي نسبة دين تعظم قيمة السهم المقدرة؟' },
        options: [ { en: '20%', ar: '20%' }, { en: '30%', ar: '30%' }, { en: '40%', ar: '40%' }, { en: '50%', ar: '50%' } ], answer: 1,
        explain: { en: 'Share value = $23.28 at 30% debt — the course’s optimal capital structure.', ar: 'قيمة السهم = 23.28 دولار عند دين 30% — هيكل رأس المال الأمثل في المقرر.' } },
      { type: 'num', q: { en: 'At 40% debt, expected EPS = 3.12 and r<s> = 0.140. Estimated share value = ? ($, two decimals)', ar: 'عند دين 40%، ‏EPS المتوقع = 3.12 وr<s> = 0.140. قيمة السهم المقدرة = ؟ (دولار، منزلتان)' },
        answer: 22.29, tol: 0.02, unit: '$',
        explain: { en: '3.12 ÷ 0.140 = 22.2857 ≈ 22.29.', ar: '‏3.12 ÷ 0.140 = 22.2857 ≈ 22.29.' } },
      { type: 'tf', q: { en: 'True or false: the EPS and share-value approaches always select the same capital structure.', ar: 'صواب أم خطأ: مدخلا EPS وقيمة السهم يختاران دائمًا نفس هيكل رأس المال.' },
        answer: false,
        explain: { en: 'False. Here they select 50% and 30% respectively; they agree only if r<s> does not rise with leverage.', ar: 'خطأ. هنا يختاران 50% و30% على الترتيب؛ ويتفقان فقط إذا لم يرتفع r<s> مع الرافعة.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Zero-growth share value', ar: 'قيمة السهم بنمو صفري' }, back: { en: 'P = EPS ÷ r', ar: '‏P = EPS ÷ r' } },
      { front: { en: 'Course optima', ar: 'أمثليات المقرر' }, back: { en: 'EPS max at 50% debt; share value max at 30% debt (optimal)', ar: 'أقصى EPS عند دين 50%؛ وأقصى قيمة سهم عند دين 30% (الأمثل)' } },
      { front: { en: 'Why they differ', ar: 'لماذا يختلفان' }, back: { en: 'EPS ignores the rise in required return r<s> with leverage', ar: '‏EPS يتجاهل ارتفاع العائد المطلوب r<s> مع الرافعة' } }
    ]},

    { type: 'summary', points: [
      { en: 'Build structures → interest → scenario EBIT → scenario EPS → expected EPS → share value.', ar: 'ابنِ الهياكل ← الفائدة ← EBIT السيناريوهات ← EPS السيناريوهات ← EPS المتوقع ← قيمة السهم.' },
      { en: 'Expected EPS: 2.40 / 2.55 / 2.72 / 2.91 / 3.12 / 3.18 / 3.03 for 0–60% debt.', ar: '‏EPS المتوقع: 2.40 / 2.55 / 2.72 / 2.91 / 3.12 / 3.18 / 3.03 لدين 0–60%.' },
      { en: 'Share values: 20.87 / 21.79 / 22.48 / 23.28 / 22.29 / 19.27 / 15.95; maximum at 30% debt.', ar: 'قيم السهم: 20.87 / 21.79 / 22.48 / 23.28 / 22.29 / 19.27 / 15.95؛ الأقصى عند دين 30%.' },
      { en: 'Optimal capital structure per the share-value approach: 30% debt / 70% equity.', ar: 'هيكل رأس المال الأمثل وفق مدخل قيمة السهم: دين 30% / حقوق ملكية 70%.' }
    ], canExplain: [
      { en: 'Why share value falls after 30% debt even though EPS keeps rising to 50%.', ar: 'لماذا تنخفض قيمة السهم بعد دين 30% رغم استمرار صعود EPS حتى 50%.' },
      { en: 'Why the interest rate on all debt rises with the debt ratio.', ar: 'لماذا يرتفع معدل الفائدة على كل الدين مع نسبة الدين.' },
      { en: 'What assumption the zero-growth model makes about EPS.', ar: 'ما الافتراض الذي يتخذه نموذج النمو الصفري عن EPS.' }
    ]}
  ]
});
