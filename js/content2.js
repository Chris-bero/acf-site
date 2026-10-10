/* ============================================================
   CONTENT — Module 1 continued (Lessons 3–4: portfolios, CAPM/SML)
   ============================================================ */

/* ---------------------------------------------------------- L3 */
window.COURSE.lessons.push({
  id: 'l3', module: 'm1', minutes: 35,
  title: { en: 'Portfolio Return and Portfolio Beta', ar: 'عائد المحفظة وبيتا المحفظة' },
  subtitle: { en: 'Why assets are never judged alone, and how weights combine returns and betas', ar: 'لماذا لا تُقيَّم الأصول منفردة، وكيف تدمج الأوزان العوائد وبيتا' },
  source: { en: 'Lecture 1, slides 22–25 (Chapter 8)', ar: 'المحاضرة 1، الشرائح 22–25 (الفصل 8)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Explain why a new investment must be evaluated by its impact on the portfolio, not on its own.', ar: 'شرح لماذا يجب تقييم أي استثمار جديد بأثره على المحفظة لا بذاته.' },
      { en: 'Compute portfolio weights from market values and verify they sum to 1.', ar: 'حساب أوزان المحفظة من القيم السوقية والتحقق أن مجموعها 1.' },
      { en: 'Compute a portfolio return as the weighted average of asset returns.', ar: 'حساب عائد المحفظة كمتوسط مرجح لعوائد الأصول.' },
      { en: 'Compute a portfolio beta as the weighted average of asset betas and interpret it.', ar: 'حساب بيتا المحفظة كمتوسط مرجح لبيتا الأصول وتفسيره.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Portfolio', ar: 'المحفظة' },
        def: { en: 'A collection of assets held together by one investor.', ar: 'مجموعة أصول يحتفظ بها مستثمر واحد معًا.' },
        why: { en: 'All return and risk formulas in this lesson operate on the collection, not a single asset.', ar: 'كل معادلات العائد والمخاطر في هذا الدرس تعمل على المجموعة لا على أصل واحد.' },
        example: { en: 'James holds Wal-Mart and Cisco shares: that pair is his portfolio.', ar: 'يحتفظ جيمس بأسهم Wal-Mart وCisco: هذا الزوج محفظته.' } },
      { term: { en: 'Market value (weight)', ar: 'القيمة السوقية (الوزن)' },
        def: { en: 'Shares × current price; the weight is each asset’s share of total portfolio value.', ar: 'عدد الأسهم × السعر الحالي؛ والوزن حصة كل أصل من إجمالي قيمة المحفظة.' },
        why: { en: 'Weights decide how much each asset contributes to portfolio return and beta.', ar: 'الأوزان تحدد كم يسهم كل أصل في عائد المحفظة وبيتا.' },
        example: { en: '$5,500 of Wal-Mart in an $8,000 portfolio → weight 0.6875.', ar: '‏5,500 دولار من Wal-Mart في محفظة 8,000 دولار ← وزن 0.6875.' } },
      { term: { en: 'Beta (b) — preview', ar: 'بيتا (b) — تمهيد' },
        def: { en: 'An index of an asset’s non-diversifiable (market) risk; b = 1 means it moves with the market.', ar: 'مؤشر للمخاطر غير القابلة للتنويع (مخاطر السوق)؛ b = 1 يعني أنه يتحرك مع السوق.' },
        why: { en: 'Portfolio beta is the weighted average of these betas; CAPM (Lesson 4) prices them.', ar: 'بيتا المحفظة متوسط مرجح لهذه البيتات؛ ونموذج CAPM (الدرس 4) يسعّرها.' },
        example: { en: 'An asset with b = 1.65 is 65% more volatile than the market portfolio.', ar: 'أصل بـb = 1.65 أكثر تقلبًا من محفظة السوق بنسبة 65%.' },
        link: 'l4' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Your slides make the point bluntly: “In real-world situations, the risk of any single investment would not be viewed independently of other assets.” A new investment must be judged by how it changes the risk and return of the whole portfolio. The manager’s goal is an efficient portfolio: the maximum return for a given level of risk.', ar: 'تطرح شرائحك الفكرة بصراحة: «في الواقع العملي لا تُنظر مخاطر أي استثمار منفردًا عن الأصول الأخرى». يجب الحكم على أي استثمار جديد بكيف يغيّر مخاطر وعائد المحفظة كلها. هدف المدير محفظة كفوءة: أقصى عائد لمستوى مخاطر معيّن.' },
      { en: 'Mechanically, combining assets is just weighting. If 68.75% of your money sits in Wal-Mart and 31.25% in Cisco, then whatever those two do, your portfolio does 68.75% of the first plus 31.25% of the second. The same weighting logic applies to beta, which is the risk measure CAPM will use next.', ar: 'ميكانيكيًا، دمج الأصول مجرد ترجيح. إذا كان 68.75% من مالك في Wal-Mart و31.25% في Cisco، فمهما فعلا فإن محفظتك تفعل 68.75% من الأول زائد 31.25% من الثاني. منطق الترجيح نفسه ينطبق على بيتا، وهو مقياس المخاطر الذي سيستخدمه CAPM تاليًا.' }
    ], analogy: { en: 'A smoothie’s taste is the weighted average of its ingredients: 70% mango + 30% banana tastes mostly like mango. A portfolio’s return (and its beta) is the same kind of blend.', ar: 'طعم العصير المخلوط متوسط مرجح لمكوناته: 70% مانجو + 30% موز طعمه مانجو غالبًا. عائد المحفظة (وبيتاها) مزج من النوع نفسه.' }, analogyLimit: { en: 'The blend rule holds exactly for return and beta. It does NOT hold for standard deviation: combining assets can reduce σ below the weighted average (diversification), which is why the course moves to beta for market risk.', ar: 'قاعدة المزج تصح تمامًا للعائد وبيتا. لكنها لا تصح للانحراف المعياري: دمج الأصول يمكن أن يخفض σ دون المتوسط المرجح (التنويع)، ولهذا ينتقل المقرر إلى بيتا لمخاطر السوق.' } },

    { type: 'academic', paras: [
      { en: 'The portfolio return, r<p>, is the weighted average of the returns of the assets in the portfolio, with weights w<i> equal to each asset’s proportion of total portfolio value. The weights must sum to 1.', ar: 'عائد المحفظة r<p> هو المتوسط المرجح لعوائد الأصول في المحفظة، بأوزان w<i> تساوي نسبة كل أصل من إجمالي قيمة المحفظة. ويجب أن مجموع الأوزان = 1.' },
      { en: 'The portfolio beta, b<p>, is the weighted average of the assets’ betas using the same weights (Equation 5.7 in your slides). Because beta measures non-diversifiable risk, b<p> tells you how the whole portfolio responds to market movements.', ar: 'بيتا المحفظة b<p> هو المتوسط المرجح لبيتات الأصول باستخدام نفس الأوزان (المعادلة 5.7 في شرائحك). ولأن بيتا يقيس المخاطر غير القابلة للتنويع، فإن b<p> يخبرك كيف تستجيب المحفظة كلها لحركات السوق.' },
      { en: 'The lecture’s comparison of Mazin Amin’s portfolios V and W shows the economic use: V’s beta of 1.195 (≈1.20) versus W’s 0.91 means V is more exposed to market risk. Given the same market conditions, V’s required return will be higher (Lesson 4).', ar: 'مقارنة المحاضرة لمحفظتي مازن أمين V وW تبيّن الاستخدام الاقتصادي: بيتا V ‏1.195 (≈1.20) مقابل 0.91 لـW تعني أن V أكثر تعرضًا لمخاطر السوق. وفي ظروف سوق مماثلة سيكون العائد المطلوب لـV أعلى (الدرس 4).' }
    ], defs: [
      { term: { en: 'Efficient portfolio', ar: 'المحفظة الكفوءة' }, def: { en: 'A portfolio providing the maximum return for a given level of risk.', ar: 'محفظة تقدم أقصى عائد لمستوى مخاطر معيّن.' } },
      { term: { en: 'Portfolio weight (w<i>)', ar: 'وزن المحفظة (w<i>)' }, def: { en: 'Market value of asset i ÷ total portfolio market value.', ar: 'القيمة السوقية للأصل i ÷ إجمالي القيمة السوقية للمحفظة.' } },
      { term: { en: 'Non-diversifiable (market) risk', ar: 'المخاطر غير القابلة للتنويع (مخاطر السوق)' }, def: { en: 'Risk that cannot be eliminated by holding many assets; measured by beta.', ar: 'مخاطر لا يمكن التخلص منها بالاحتفاظ بأصول كثيرة؛ تقاس ببيتا.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Put your money in piles. Each pile’s share of the total is its weight. Whatever happens, your overall result is just each pile’s result multiplied by its share, added up.', ar: 'ضع مالك في أكوام. حصة كل كوم من الإجمالي هي وزنه. ومهما حدث، نتيجتك الكلية هي نتيجة كل كوم مضروبة في حصته، مجموعة.' },
      { en: 'Beta works the same way: the portfolio’s market-sensitivity is the share-weighted average of the sensitivities of the piles.', ar: 'بيتا يعمل بالطريقة نفسها: حساسية المحفظة للسوق هي المتوسط المرجح بالحصص لحساسيات الأكوام.' }
    ], steps: [
      { en: 'Value each holding: shares × price.', ar: 'قيّم كل حيازة: عدد الأسهم × السعر.' },
      { en: 'Weight = holding value ÷ total value; check Σw = 1.', ar: 'الوزن = قيمة الحيازة ÷ إجمالي القيمة؛ تحقق Σw = 1.' },
      { en: 'r<p> = Σ w<i> × r<i>.', ar: '‏r<p> = Σ w<i> × r<i>.' },
      { en: 'b<p> = Σ w<i> × b<i>.', ar: '‏b<p> = Σ w<i> × b<i>.' },
      { en: 'Interpret: b<p> > 1 amplifies market moves; b<p> < 1 dampens them.', ar: 'فسّر: ‏b<p> > 1 يضخّم حركات السوق؛ وb<p> < 1 يخففها.' }
    ], recap: { en: 'Weights come from market values. Return and beta both combine by weighted average. Portfolio thinking replaces single-asset thinking.', ar: 'الأوزان من القيم السوقية. والعائد وبيتا كلاهما يندمج بالمتوسط المرجح. تفكير المحفظة يحل محل تفكير الأصل المنفرد.' } },

    { type: 'formula', id: 'f-w', tag: 'course', name: { en: 'Portfolio weights', ar: 'أوزان المحفظة' },
      tex: 'w_{i} = \\frac{\\text{Value}_{i}}{\\sum \\text{Value}}',
      vars: [ { sym: '\\text{Value}_{i}', en: 'market value of holding i', ar: 'القيمة السوقية للحيازة i' }, { sym: '\\sum \\text{Value}', en: 'total portfolio market value', ar: 'إجمالي القيمة السوقية للمحفظة' } ],
      purpose: { en: 'Translate holdings into proportions that sum to 1.', ar: 'ترجمة الحيازات إلى نسب مجموعها 1.' },
      assumptions: { en: 'Values are current market values, not book values or share counts.', ar: 'القيم قيم سوقية حالية لا قيم دفترية ولا أعداد أسهم.' },
      when: { en: 'Before any portfolio return or beta calculation.', ar: 'قبل أي حساب لعائد المحفظة أو بيتا.' },
      inputs: { en: 'Market value of each holding.', ar: 'القيمة السوقية لكل حيازة.' },
      cautions: { en: 'Never weight by number of shares or by original cost when prices differ across assets.', ar: 'لا ترجح أبدًا بعدد الأسهم ولا بالتكلفة الأصلية عندما تختلف الأسعار بين الأصول.' },
      illustration: { en: 'WMT 5,500 ÷ 8,000 = 0.6875; CSCO 2,500 ÷ 8,000 = 0.3125; sum = 1.', ar: '‏WMT ‏5,500 ÷ 8,000 = 0.6875؛ ‏CSCO ‏2,500 ÷ 8,000 = 0.3125؛ المجموع = 1.' },
      sensitivity: { en: 'Buying more of one asset raises its weight and lowers the others proportionally.', ar: 'شراء المزيد من أصل يرفع وزنه ويخفض البقية تناسبيًا.' },
      meaning: { en: 'The fraction of every future portfolio gain or loss attributable to each asset.', ar: 'جزء كل ربح أو خسارة مستقبلية في المحفظة المنسوب لكل أصل.' } },

    { type: 'formula', id: 'f-rp', tag: 'course', name: { en: 'Portfolio return', ar: 'عائد المحفظة' },
      tex: 'r_{p} = \\sum_{i=1}^{n} w_{i} \\times r_{i}',
      vars: [ { sym: 'w_{i}', en: 'weight of asset i', ar: 'وزن الأصل i' }, { sym: 'r_{i}', en: 'return of asset i', ar: 'عائد الأصل i' } ],
      purpose: { en: 'Aggregate individual returns into one portfolio return.', ar: 'تجميع العوائد الفردية في عائد محفظة واحد.' },
      assumptions: { en: 'Weights are held over the period the returns occur.', ar: 'الأوزان محتفظ بها خلال الفترة التي تحدث فيها العوائد.' },
      when: { en: 'Given asset returns and portfolio composition.', ar: 'عند وجود عوائد الأصول وتكوين المحفظة.' },
      inputs: { en: 'Each weight and each return.', ar: 'كل وزن وكل عائد.' },
      cautions: { en: 'Exact for one period; for multi-period you must rebalance or compound period by period.', ar: 'دقيق لفترة واحدة؛ وللفترات المتعددة يجب إعادة التوازن أو التركيب فترة فترة.' },
      illustration: { en: '0.6875(10%) + 0.3125(20%) = 6.875% + 6.25% = 13.125%.', ar: '‏0.6875(10%) + 0.3125(20%) = 6.875% + 6.25% = 13.125%.' },
      sensitivity: { en: 'Shifting weight toward the higher-return asset raises r<p>.', ar: 'تحويل الوزن نحو الأصل الأعلى عائدًا يرفع r<p>.' },
      meaning: { en: 'The percentage growth of total portfolio value over the period.', ar: 'نسبة نمو إجمالي قيمة المحفظة خلال الفترة.' } },

    { type: 'formula', id: 'f-bp', tag: 'course', name: { en: 'Portfolio beta (Eq. 5.7)', ar: 'بيتا المحفظة (معادلة 5.7)' },
      tex: 'b_{p} = (w_{1} \\times b_{1}) + (w_{2} \\times b_{2}) + \\cdots + (w_{n} \\times b_{n}) = \\sum_{j=1}^{n} w_{j} \\times b_{j}',
      vars: [ { sym: 'w_{j}', en: 'weight of asset j', ar: 'وزن الأصل j' }, { sym: 'b_{j}', en: 'beta of asset j', ar: 'بيتا الأصل j' } ],
      purpose: { en: 'Measure the market risk of the whole portfolio in one index.', ar: 'قياس مخاطر السوق للمحفظة كلها في مؤشر واحد.' },
      assumptions: { en: 'Betas are estimated against the same market portfolio; weights sum to 1.', ar: 'البيتات مقدرة مقابل نفس محفظة السوق؛ والأوزان مجموعها 1.' },
      when: { en: 'Before applying CAPM to a portfolio, or comparing portfolios’ market risk.', ar: 'قبل تطبيق CAPM على محفظة، أو مقارنة مخاطر السوق لمحافظ.' },
      inputs: { en: 'Each weight and each beta.', ar: 'كل وزن وكل بيتا.' },
      cautions: { en: 'Beta averaging says nothing about diversifiable risk, which may differ between portfolios with equal beta.', ar: 'متوسط بيتا لا يقول شيئًا عن المخاطر القابلة للتنويع التي قد تختلف بين محافظ متساوية بيتا.' },
      illustration: { en: 'Portfolio V: 0.10(1.65)+0.30(1.00)+0.20(1.30)+0.20(1.10)+0.20(1.25) = 1.195 ≈ 1.20.', ar: 'المحفظة V: ‏0.10(1.65)+0.30(1.00)+0.20(1.30)+0.20(1.10)+0.20(1.25) = 1.195 ≈ 1.20.' },
      sensitivity: { en: 'Adding weight to high-beta assets raises b<p> above 1 (aggressive); low-beta assets pull it below 1 (defensive).', ar: 'إضافة وزن لأصول عالية بيتا ترفع b<p> فوق 1 (هجومية)؛ وأصول منخفضة بيتا تسحبها دون 1 (دفاعية).' },
      meaning: { en: 'If the market moves 1%, the portfolio is expected to move about b<p>%.', ar: 'إذا تحرك السوق 1% فمن المتوقع أن تتحرك المحفظة نحو b<p>%.' } },

    { type: 'example', title: { en: 'Course example — James’s two-stock portfolio', ar: 'مثال المقرر — محفظة جيمس من سهمين' },
      context: { en: 'James owns 100 shares of Wal-Mart at $55 (= $5,500) and 100 shares of Cisco at $25 (= $2,500); total $8,000. If Wal-Mart returns 10% and Cisco 20%, what is the portfolio return?', ar: 'يملك جيمس 100 سهم Wal-Mart بسعر 55 دولارًا (= 5,500) و100 سهم Cisco بسعر 25 دولارًا (= 2,500)؛ الإجمالي 8,000. إذا كان عائد Wal-Mart ‏10% وعائد Cisco ‏20%، فما عائد المحفظة؟' },
      source: { en: 'Lecture 1, slide 23', ar: 'المحاضرة 1، الشريحة 23' },
      steps: [
        { kind: 'understand', body: { en: 'Two holdings, known returns; combine by weights.', ar: 'حيازتان وعائدان معروفان؛ ادمج بالأوزان.' } },
        { kind: 'given', body: { en: 'WMT $5,500; CSCO $2,500; total $8,000; returns 10% and 20%.', ar: '‏WMT ‏5,500 دولار؛ ‏CSCO 2,500 دولار؛ الإجمالي 8,000؛ العائدان 10% و20%.' } },
        { kind: 'unknown', body: { en: 'Weights and r<p>.', ar: 'الأوزان وr<p>.' } },
        { kind: 'method', body: { en: 'Weight formula then portfolio return formula.', ar: 'معادلة الوزن ثم معادلة عائد المحفظة.' } },
        { kind: 'sub', body: { en: 'w<WMT> = 5,500 ÷ 8,000 = 0.6875; w<CSCO> = 2,500 ÷ 8,000 = 0.3125.', ar: '‏w<WMT> = 5,500 ÷ 8,000 = 0.6875؛ ‏w<CSCO> = 2,500 ÷ 8,000 = 0.3125.' }, math: ['w_{WMT} = 0.6875', 'w_{CSCO} = 0.3125'] },
        { kind: 'calc', body: { en: 'r<p> = 0.6875(10%) + 0.3125(20%) = 6.875% + 6.25% = 13.125%.', ar: '‏r<p> = 0.6875(10%) + 0.3125(20%) = 6.875% + 6.25% = 13.125%.' }, math: ['r_{p} = 13.125\\%'] },
        { kind: 'interpret', body: { en: 'The portfolio grew 13.125%, closer to Wal-Mart’s 10% than Cisco’s 20% because most of the money sits in Wal-Mart.', ar: 'نمت المحفظة 13.125%، أقرب إلى 10% لـWal-Mart منها إلى 20% لـCisco لأن معظم المال في Wal-Mart.' } },
        { kind: 'verify', body: { en: 'Weights sum to 1 (0.6875+0.3125). The answer must lie between 10% and 20% — it does.', ar: 'مجموع الأوزان 1 (0.6875+0.3125). ويجب أن تقع الإجابة بين 10% و20% — وهي كذلك.' } }
      ]},

    { type: 'example', title: { en: 'Course example — Mazin Amin’s portfolios V and W (Table 5.10)', ar: 'مثال المقرر — محفظتا مازن أمين V وW (الجدول 5.10)' },
      context: { en: 'Portfolio V weights/betas: (0.10, 1.65), (0.30, 1.00), (0.20, 1.30), (0.20, 1.10), (0.20, 1.25). Portfolio W: (0.10, 0.80), (0.10, 1.00), (0.20, 0.65), (0.10, 0.75), (0.50, 1.05). Which portfolio is more risky?', ar: 'أوزان/بيتات المحفظة V: ‏(0.10، 1.65)، (0.30، 1.00)، (0.20، 1.30)، (0.20، 1.10)، (0.20، 1.25). والمحفظة W: ‏(0.10، 0.80)، (0.10، 1.00)، (0.20، 0.65)، (0.10، 0.75)، (0.50، 1.05). أي المحفظتين أخطر؟' },
      source: { en: 'Lecture 1, slides 24–25 (Table 5.10, Eq. 5.7)', ar: 'المحاضرة 1، الشريحتان 24–25 (الجدول 5.10، معادلة 5.7)' },
      steps: [
        { kind: 'understand', body: { en: 'Both portfolios hold five assets; compare their market risk via portfolio beta.', ar: 'كلتا المحفظتين تحويان خمسة أصول؛ قارن مخاطر السوق عبر بيتا المحفظة.' } },
        { kind: 'given', body: { en: 'Weights and betas per Table 5.10; each portfolio’s weights sum to 1.00.', ar: 'الأوزان والبيتات وفق الجدول 5.10؛ ومجموع أوزان كل محفظة 1.00.' } },
        { kind: 'unknown', body: { en: 'b<V> and b<W>, and the risk conclusion.', ar: '‏b<V> وb<W> واستنتاج المخاطر.' } },
        { kind: 'method', body: { en: 'Equation 5.7: weighted average of betas.', ar: 'المعادلة 5.7: متوسط مرجح للبيتات.' } },
        { kind: 'sub', body: { en: 'b<V> = 0.165+0.300+0.260+0.220+0.250; b<W> = 0.080+0.100+0.130+0.075+0.525.', ar: '‏b<V> = 0.165+0.300+0.260+0.220+0.250؛ ‏b<W> = 0.080+0.100+0.130+0.075+0.525.' }, math: ['b_{V} = 1.195 \\approx 1.20', 'b_{W} = 0.91'] },
        { kind: 'calc', body: { en: 'b<V> = 1.195 ≈ 1.20; b<W> = 0.91.', ar: '‏b<V> = 1.195 ≈ 1.20؛ ‏b<W> = 0.91.' } },
        { kind: 'interpret', body: { en: 'V is more risky than W: V amplifies market moves by about 20%, W dampens them by about 9%. V is an “aggressive” mix, W a “defensive” one.', ar: '‏V أخطر من W: ‏V تضخّم حركات السوق بنحو 20% وW تخففها بنحو 9%. ‏V مزيج «هجومي» وW «دفاعي».' } },
        { kind: 'verify', body: { en: 'Check each weight column sums to 1.00 (Table 5.10 “Totals”). Each product w×b is smaller than b because w<1.', ar: 'تحقق أن مجموع كل عمود أوزان = 1.00 («الإجمالي» في الجدول 5.10). وكل ناتج w×b أصغر من b لأن w<1.' } }
      ]},

    { type: 'visual', kind: 'donut', caption: { en: 'James’s portfolio weights: Wal-Mart 68.75%, Cisco 31.25%. The blend explains why r<p> sits near Wal-Mart’s return.', ar: 'أوزان محفظة جيمس: ‏Wal-Mart 68.75% وCisco ‏31.25%. المزج يفسر وقوع r<p> قرب عائد Wal-Mart.' },
      cfg: { slices: [ { label: { en: 'Wal-Mart', ar: 'Wal-Mart' }, value: 5500 }, { label: { en: 'Cisco', ar: 'Cisco' }, value: 2500 } ] } },

    { type: 'visual', kind: 'bar', caption: { en: 'Portfolio betas (Table 5.10): V = 1.20 vs W = 0.91 against the market benchmark of 1.0.', ar: 'بيتا المحفظتين (الجدول 5.10): ‏V = 1.20 مقابل W = 0.91، وإلى جانبهما معيار السوق 1.0.' },
      cfg: { categories: [ { en: 'Portfolio V', ar: 'المحفظة V' }, { en: 'Portfolio W', ar: 'المحفظة W' }, { en: 'Market', ar: 'السوق' } ], series: [ { name: { en: 'Beta', ar: 'بيتا' }, values: [1.195, 0.91, 1.0] } ], yLabel: { en: 'Beta', ar: 'بيتا' } } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Weighting by share counts: “100 shares each, so 50/50”.', ar: 'الترجيع بعدد الأسهم: «100 سهم لكل منهما إذًا 50/50».' },
        why: { en: 'A Wal-Mart share costs $55 and a Cisco share $25; the money is not split equally.', ar: 'سهم Wal-Mart بسعر 55 دولارًا وسهم Cisco بـ25؛ المال ليس مقسومًا بالتساوي.' },
        correct: { en: 'Weights from market values: 0.6875 / 0.3125.', ar: 'الأوزان من القيم السوقية: 0.6875 / 0.3125.' },
        illus: { en: '50/50 would give r<p> = 15%, wrong versus the correct 13.125%.', ar: '‏50/50 تعطي r<p> = 15%، خطأ مقابل الصحيح 13.125%.' } },
      { wrong: { en: 'Forgetting to check Σw = 1 after updating a portfolio.', ar: 'نسيان التحقق Σw = 1 بعد تحديث المحفظة.' },
        why: { en: 'Weights that do not sum to 1 silently scale the whole answer.', ar: 'أوزان لا مجموعها 1 تحجّم الإجابة كلها بصمت.' },
        correct: { en: 'Always divide by the new total value.', ar: 'اقسم دائمًا على إجمالي القيمة الجديد.' },
        illus: { en: 'Using 0.7 and 0.3 by rounding gives 13.0% instead of 13.125%.', ar: 'استخدام 0.7 و0.3 بالتقريب يعطي 13.0% بدل 13.125%.' } },
      { wrong: { en: 'Believing portfolio beta can be reduced to zero by adding more assets.', ar: 'الاعتقاد بأن بيتا المحفظة يمكن خفضه إلى الصفر بإضافة أصول أكثر.' },
        why: { en: 'Beta is non-diversifiable risk; diversification removes only the diversifiable part.', ar: 'بيتا مخاطر غير قابلة للتنويع؛ والتنويع يزيل فقط الجزء القابل للتنويع.' },
        correct: { en: 'Adding assets moves b<p> toward the market average (~1), not toward 0.', ar: 'إضافة أصول تحرّك b<p> نحو متوسط السوق (~1) لا نحو الصفر.' },
        illus: { en: 'Holding all market assets gives b<p> = 1 by construction.', ar: 'الاحتفاظ بكل أصول السوق يعطي b<p> = 1 بحكم البناء.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'A portfolio holds $6,000 of asset X (return 8%) and $4,000 of asset Y (return 15%). Portfolio return =', ar: 'محفظة تحوي 6,000 دولار من الأصل x (عائد 8%) و4,000 دولار من y (عائد 15%). عائد المحفظة =' },
        options: [ { en: '10.8%', ar: '10.8%' }, { en: '11.5%', ar: '11.5%' }, { en: '12.2%', ar: '12.2%' }, { en: '11.0%', ar: '11.0%' } ], answer: 0,
        explain: { en: 'w = 0.6 / 0.4 → 0.6(8%) + 0.4(15%) = 4.8% + 6.0% = 10.8%.', ar: '‏w = 0.6 / 0.4 ← 0.6(8%) + 0.4(15%) = 4.8% + 6.0% = 10.8%.' } },
      { type: 'num', q: { en: 'Portfolio: weights 0.5/0.3/0.2 with betas 1.4 / 0.9 / 0.5. Portfolio beta =', ar: 'محفظة: أوزان 0.5/0.3/0.2 وبيتات 1.4 / 0.9 / 0.5. بيتا المحفظة =' },
        answer: 1.07, tol: 0.01, unit: '',
        explain: { en: '0.5(1.4) + 0.3(0.9) + 0.2(0.5) = 0.70 + 0.27 + 0.10 = 1.07.', ar: '‏0.5(1.4) + 0.3(0.9) + 0.2(0.5) = 0.70 + 0.27 + 0.10 = 1.07.' } },
      { type: 'mcq', q: { en: 'Portfolio W (b = 0.91) is best described as:', ar: 'المحفظة W (‏b = 0.91) تُوصف أفضل وصف بأنها:' },
        options: [ { en: 'Aggressive: amplifies market moves', ar: 'هجومية: تضخّم حركات السوق' }, { en: 'Defensive: dampens market moves', ar: 'دفاعية: تخفف حركات السوق' }, { en: 'Risk-free', ar: 'خالية من المخاطر' }, { en: 'Identical to the market', ar: 'مطابقة للسوق' } ], answer: 1,
        explain: { en: 'b < 1 means less market sensitivity than the market portfolio itself.', ar: '‏b < 1 يعني حساسية سوق أقل من محفظة السوق نفسها.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'Portfolio return', ar: 'عائد المحفظة' }, back: { en: 'r<p> = Σ w<i> r<i>', ar: '‏r<p> = Σ w<i> r<i>' } },
      { front: { en: 'Portfolio beta', ar: 'بيتا المحفظة' }, back: { en: 'b<p> = Σ w<j> b<j> (Eq. 5.7)', ar: '‏b<p> = Σ w<j> b<j> (معادلة 5.7)' } },
      { front: { en: 'Efficient portfolio', ar: 'المحفظة الكفوءة' }, back: { en: 'Maximum return for a given level of risk', ar: 'أقصى عائد لمستوى مخاطر معيّن' } }
    ]},

    { type: 'summary', points: [
      { en: 'Judge investments by their effect on the portfolio, not standalone.', ar: 'احكم على الاستثمارات بأثرها على المحفظة لا منفردة.' },
      { en: 'Weights = market values ÷ total; they must sum to 1.', ar: 'الأوزان = القيم السوقية ÷ الإجمالي؛ ومجموعها 1.' },
      { en: 'r<p> and b<p> are both weighted averages; σ<p> is not.', ar: '‏r<p> وb<p> كلاهما متوسطات مرجحة؛ أما σ<p> فلا.' },
      { en: 'b<p> > 1 aggressive, b<p> < 1 defensive (V = 1.20 vs W = 0.91).', ar: '‏b<p> > 1 هجومية وb<p> < 1 دفاعية (‏V = 1.20 مقابل W = 0.91).' }
    ], canExplain: [
      { en: 'Why share counts are the wrong basis for weights.', ar: 'لماذا عدد الأسهم أساس خاطئ للأوزان.' },
      { en: 'Why portfolio σ is not the weighted average of σs.', ar: 'لماذا σ المحفظة ليس متوسطًا مرجحًا لـσs.' },
      { en: 'What b<p> = 1.20 predicts about a 1% market move.', ar: 'ماذا يتنبأ b<p> = 1.20 عن حركة سوق قدرها 1%.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L4 */
window.COURSE.lessons.push({
  id: 'l4', module: 'm1', minutes: 45,
  title: { en: 'CAPM and the Security Market Line', ar: 'نموذج تسعير الأصول الرأسمالية وخط سوق الأوراق المالية' },
  subtitle: { en: 'Pricing non-diversifiable risk: r = R<F> + b(r<m> − R<F>), and what moves the SML', ar: 'تسعير المخاطر غير القابلة للتنويع: r = R<F> + b(r<m> − R<F>)، وما يحرك SML' },
  source: { en: 'Lecture 1, slides 26–32 (Chapter 8)', ar: 'المحاضرة 1، الشرائح 26–32 (الفصل 8)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'State the CAPM equation and define every term in it.', ar: 'ذكر معادلة CAPM وتعريف كل حد فيها.' },
      { en: 'Compute a required return from beta, the risk-free rate and the market return.', ar: 'حساب العائد المطلوب من بيتا ومعدل الخالي من المخاطر وعائد السوق.' },
      { en: 'Draw and read the Security Market Line: intercept, slope, axis.', ar: 'رسم وقراءة خط سوق الأوراق المالية: التقاطع والميل والمحور.' },
      { en: 'Predict how inflation expectations and risk aversion shift the SML.', ar: 'توقع كيف يزيح توقع التضخم والنفور من المخاطر خط SML.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Required return', ar: 'العائد المطلوب' },
        def: { en: 'The minimum return investors demand to hold an asset, given its risk.', ar: 'أدنى عائد يطلبه المستثمرون للاحتفاظ بأصل بالنظر إلى مخاطره.' },
        why: { en: 'CAPM’s output; later it becomes the cost of equity in capital structure (Module 2).', ar: 'مخرج CAPM؛ ويصبح لاحقًا تكلفة حقوق الملكية في هيكل رأس المال (الوحدة 2).' },
        example: { en: 'Asset Z with b = 1.5 requires 13% when R<F> = 7% and r<m> = 11%.', ar: 'الأصل Z بـb = 1.5 يتطلب 13% عندما R<F> = 7% وr<m> = 11%.' } },
      { term: { en: 'Risk-free rate (R<F>)', ar: 'المعدل الخالي من المخاطر (R<F>)' },
        def: { en: 'Return on an asset with no default risk; the course measures it by U.S. Treasury bills.', ar: 'عائد أصل بلا مخاطر تعثر؛ وتقيسه المحاضرة بأذون الخزانة الأمريكية.' },
        why: { en: 'It is the SML intercept: the reward for waiting, before any risk is taken.', ar: 'هو تقاطع SML: مكافأة الانتظار قبل تحمل أي مخاطر.' },
        example: { en: 'R<F> = 7% in every CAPM example of this lecture.', ar: '‏R<F> = 7% في كل أمثلة CAPM في هذه المحاضرة.' } },
      { term: { en: 'Market return (r<m>) and market risk premium', ar: 'عائد السوق (r<m>) وعلاوة مخاطر السوق' },
        def: { en: 'r<m> is the return on the market portfolio; (r<m> − R<F>) is the extra return for bearing market risk.', ar: '‏r<m> عائد محفظة السوق؛ و(r<m> − R<F>) العائد الإضافي مقابل تحمل مخاطر السوق.' },
        why: { en: 'The premium is the SML slope; it scales every asset’s risk price.', ar: 'العلاوة هي ميل SML؛ وهي تحجّم سعر مخاطر كل أصل.' },
        example: { en: '11% − 7% = 4% premium; each unit of beta buys 4% of extra required return.', ar: '‏11% − 7% = 4% علاوة؛ وكل وحدة بيتا تشتري 4% عائدًا مطلوبًا إضافيًا.' },
        link: 'l3' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Lesson 2 measured total risk (σ). Lesson 3 showed that in a portfolio only part of that risk survives: the part that moves with the market, measured by beta. CAPM answers the pricing question: how much extra return must investors be paid for each unit of that surviving (non-diversifiable) risk?', ar: 'الدرس 2 قاس المخاطر الكلية (σ). والدرس 3 بيّن أنه في محفظة ينجو جزء فقط من تلك المخاطر: الجزء المتحرك مع السوق ويقاس ببيتا. يجيب CAPM عن سؤال التسعير: كم عائدًا إضافيًا يجب أن يُدفع للمستثمرين مقابل كل وحدة من تلك المخاطر الناجية (غير القابلة للتنويع)؟' },
      { en: 'The answer is a straight line. Start at the risk-free rate (beta = 0: no market risk, no premium). Add beta times the market risk premium. That line is the Security Market Line: vertical axis required return, horizontal axis beta, intercept R<F>, slope (r<m> − R<F>).', ar: 'الإجابة خط مستقيم. ابدأ من المعدل الخالي من المخاطر (بيتا = 0: بلا مخاطر سوق وبلا علاوة). أضف بيتا مضروبًا في علاوة مخاطر السوق. ذلك الخط هو خط سوق الأوراق المالية: المحور الرأسي العائد المطلوب والمحور الأفقي بيتا والتقاطع R<F> والميل (r<m> − R<F>).' },
      { en: 'Your lecture then stress-tests the line: if expected inflation rises, R<F> (and r<m>) rise and the whole line shifts up in parallel; if investors become more risk-averse, the premium (r<m> − R<F>) widens and the line steepens. Both changes raise required returns, but they do so differently — and that difference matters for every valuation later in the course.', ar: 'ثم تختبر محاضرتك الخط: إذا ارتفع توقع التضخم يرتفع R<F> (وr<m>) ويزيح الخط كله لأعلى بالتوازي؛ وإذا صار المستثمرون أكثر نفورًا من المخاطر تتسع العلاوة (r<m> − R<F>) ويصبح الخط أكثر انحدارًا. كلا التغيرين يرفع العوائد المطلوبة لكن بطريقتين مختلفتين — وهذا الفرق مهم لكل تقييم لاحق في المقرر.' }
    ], analogy: { en: 'A taxi fare: a fixed flag-fall charge (the risk-free rate) plus a per-kilometre rate (the market risk premium) multiplied by the distance you travel (beta). Zero distance still costs the flag-fall.', ar: 'أجرة تاكسي: رسوم فتح عداد ثابتة (المعدل الخالي من المخاطر) زائد سعر لكل كيلومتر (علاوة مخاطر السوق) مضروبًا في المسافة المقطوعة (بيتا). مسافة صفر تبقى بكلفة فتح العداد.' }, analogyLimit: { en: 'Beta is not a distance you choose freely; it is estimated from how the asset co-moves with the market. And CAPM prices only market risk — it says nothing about diversifiable risk, which the market does not reward.', ar: 'بيتا ليست مسافة تختارها بحرية؛ بل تقدَّر من كيفية تحرك الأصل مع السوق. وCAPM يسعّر فقط مخاطر السوق — ولا يقول شيئًا عن المخاطر القابلة للتنويع التي لا يكافئها السوق.' } },

    { type: 'academic', paras: [
      { en: 'Using the beta coefficient to measure non-diversifiable risk, the Capital Asset Pricing Model (CAPM) states: r<j> = R<F> + b<j> × (r<m> − R<F>), where r<j> is the required return on asset j, R<F> the risk-free rate (commonly the U.S. T-bill return), b<j> the beta of asset j, and r<m> the return on the market portfolio.', ar: 'باستخدام معامل بيتا لقياس المخاطر غير القابلة للتنويع، ينص نموذج تسعير الأصول الرأسمالية (CAPM): ‏r<j> = R<F> + b<j> × (r<m> − R<F>)، حيث r<j> العائد المطلوب للأصل j، وR<F> المعدل الخالي من المخاطر (عادة عائد أذون الخزانة الأمريكية)، وb<j> بيتا الأصل j، وr<m> عائد محفظة السوق.' },
      { en: 'The model’s logic: investors can eliminate diversifiable risk for free by holding portfolios, so the market only compensates non-diversifiable risk. The compensation is linear in beta because beta is exactly the contribution of an asset to market risk.', ar: 'منطق النموذج: يمكن للمستثمرين إزالة المخاطر القابلة للتنويع مجانًا بالاحتفاظ بمحافظ، لذا لا يعوّض السوق إلا المخاطر غير القابلة للتنويع. والتعويض خطي في بيتا لأن بيتا هي بالضبط مساهمة الأصل في مخاطر السوق.' },
      { en: 'The Security Market Line (SML) is the graphical representation of CAPM. Key points from your slides: Y-intercept = risk-free rate R<F>; slope = market risk premium (r<m> − R<F>); X-axis = beta (non-diversifiable risk). Any asset plotting below the line is overpriced (its return does not compensate its risk); above the line, underpriced.', ar: 'خط سوق الأوراق المالية (SML) هو التمثيل البياني لـCAPM. نقاط مفتاحية من شرائحك: التقاطع مع المحور الرأسي = المعدل الخالي من المخاطر R<F>؛ الميل = علاوة مخاطر السوق (r<m> − R<F>)؛ المحور الأفقي = بيتا (المخاطر غير القابلة للتنويع). أي أصل يقع تحت الخط مبالغ في سعره (عائده لا يعوّض مخاطره)؛ وفوق الخط منخفض السعر.' },
      { en: 'Shifts: (1) Changes in inflationary expectations — if inflation increases, R<F> increases and the SML shifts upward in parallel (both R<F> and r<m> rise by the same amount, so the premium is unchanged). (2) Changes in risk aversion — if investors become more risk-averse, the market risk premium increases and the SML steepens.', ar: 'الإزاحات: (1) تغيرات توقعات التضخم — إذا زاد التضخم يرتفع R<F> ويزيح SML لأعلى بالتوازي (يرتفع كل من R<F> وr<m> بنفس المقدار فلا تتغير العلاوة). (2) تغيرات النفور من المخاطر — إذا صار المستثمرون أكثر نفورًا تزداد علاوة مخاطر السوق ويصبح SML أكثر انحدارًا.' }
    ], defs: [
      { term: { en: 'CAPM', ar: 'نموذج تسعير الأصول الرأسمالية (CAPM)' }, def: { en: 'A model linking an asset’s required return to its beta: r<j> = R<F> + b<j>(r<m> − R<F>).', ar: 'نموذج يربط العائد المطلوب لأصل ببيتا: r<j> = R<F> + b<j>(r<m> − R<F>).' } },
      { term: { en: 'Security Market Line (SML)', ar: 'خط سوق الأوراق المالية (SML)' }, def: { en: 'The graph of required return against beta implied by CAPM.', ar: 'منحنى العائد المطلوب مقابل بيتا كما يشتقه نموذج CAPM.' } },
      { term: { en: 'Market risk premium', ar: 'علاوة مخاطر السوق' }, def: { en: 'r<m> − R<F>; the SML slope.', ar: '‏r<m> − R<F>؛ ميل SML.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Investors demand two payments: one for time (the risk-free rate), one for market risk (beta × market premium). Add them and you have the required return.', ar: 'يطلب المستثمر دفعتين: واحدة للزمن (المعدل الخالي من المخاطر)، وواحدة لمخاطر السوق (بيتا × علاوة السوق). اجمعهما فتحصل على العائد المطلوب.' },
      { en: 'Draw it: put beta on the horizontal axis and required return on the vertical. At beta 0 you are at R<F>. At beta 1 you are exactly at r<m>. Connect the dots: a straight line. Every asset’s fair required return sits on that line.', ar: 'ارسمه: ضع بيتا على المحور الأفقي والعائد المطلوب على الرأسي. عند بيتا 0 أنت عند R<F>. وعند بيتا 1 أنت عند r<m> بالضبط. صل النقاط: خط مستقيم. كل عائد مطلوب عادل لأي أصل يقع على ذلك الخط.' }
    ], steps: [
      { en: 'Read off R<F>, r<m>, and the asset’s beta.', ar: 'استخرج R<F> وr<m> وبيتا الأصل.' },
      { en: 'Compute the premium: r<m> − R<F>.', ar: 'احسب العلاوة: r<m> − R<F>.' },
      { en: 'Multiply the premium by beta.', ar: 'اضرب العلاوة في بيتا.' },
      { en: 'Add R<F>. That is r<j>.', ar: 'أضف R<F>. هذا هو r<j>.' },
      { en: 'Sanity check: beta 0 → R<F>; beta 1 → r<m>.', ar: 'فحص سلامة: بيتا 0 ← R<F>؛ بيتا 1 ← r<m>.' }
    ], recap: { en: 'CAPM = risk-free rate + beta × market risk premium. The SML draws that rule; inflation moves the line up in parallel, risk aversion tilts it steeper.', ar: '‏CAPM = المعدل الخالي من المخاطر + بيتا × علاوة مخاطر السوق. وSML يرسم تلك القاعدة؛ والتضخم يرفع الخط بالتوازي، والنفور من المخاطر يزيد انحداره.' } },

    { type: 'formula', id: 'f-capm', tag: 'course', name: { en: 'Capital Asset Pricing Model (CAPM)', ar: 'نموذج تسعير الأصول الرأسمالية (CAPM)' },
      tex: 'r_{j} = R_{F} + b_{j} \\times (r_{m} - R_{F})',
      vars: [
        { sym: 'r_{j}', en: 'required return on asset j', ar: 'العائد المطلوب للأصل j' },
        { sym: 'R_{F}', en: 'risk-free rate (U.S. T-bill return)', ar: 'المعدل الخالي من المخاطر (عائد أذون الخزانة الأمريكية)' },
        { sym: 'b_{j}', en: 'beta of asset j (non-diversifiable risk index)', ar: 'بيتا الأصل j (مؤشر المخاطر غير القابلة للتنويع)' },
        { sym: 'r_{m}', en: 'market return (market portfolio)', ar: 'عائد السوق (محفظة السوق)' }
      ],
      purpose: { en: 'Convert a risk measure (beta) into a required return.', ar: 'تحويل مقياس مخاطر (بيتا) إلى عائد مطلوب.' },
      assumptions: { en: 'Investors hold diversified portfolios; only market risk is priced; beta is stable; R<F> and r<m> are known for the period.', ar: 'المستثمرون يحتفظون بمحافظ متنوعة؛ وتسعَّر فقط مخاطر السوق؛ وبيتا مستقرة؛ وR<F> وr<m> معروفان للفترة.' },
      when: { en: 'Estimating a cost of equity / required return for an asset or project with a known beta.', ar: 'تقدير تكلفة حقوق الملكية/العائد المطلوب لأصل أو مشروع ببيتا معروفة.' },
      inputs: { en: 'Three numbers: R<F>, r<m>, b<j>.', ar: 'ثلاثة أرقام: R<F> وr<m> وb<j>.' },
      cautions: { en: 'Do not plug in σ or CV instead of beta; do not use the premium (r<m> − R<F>) and r<m> interchangeably.', ar: 'لا تعوّض σ أو CV بدل بيتا؛ ولا تستخدم العلاوة (r<m> − R<F>) وr<m> بالتبادل.' },
      illustration: { en: 'b = 1.5, R<F> = 7%, r<m> = 11%: r = 7% + 1.5(4%) = 13%.', ar: '‏b = 1.5 وR<F> = 7% وr<m> = 11%: ‏r = 7% + 1.5(4%) = 13%.' },
      sensitivity: { en: 'r rises one-for-one with R<F>; rises by b for each 1-point rise in r<m>; rises by (r<m> − R<F>) for each unit of beta.', ar: 'يرتفع r واحد لواحد مع R<F>؛ ويرتفع بمقدار b لكل نقطة ارتفاع في r<m>؛ ويرتفع بمقدار (r<m> − R<F>) لكل وحدة بيتا.' },
      meaning: { en: 'The return investors must expect to be compensated for time and for the asset’s market risk; below it, they would rather hold the market portfolio.', ar: 'العائد الذي يجب أن يتوقعه المستثمرون تعويضًا عن الزمن ومخاطر السوق للأصل؛ ودونه يفضلون محفظة السوق.' } },

    { type: 'formula', id: 'f-sml', tag: 'course', name: { en: 'Security Market Line (slope)', ar: 'خط سوق الأوراق المالية (الميل)' },
      tex: '\\text{SML slope} = r_{m} - R_{F}',
      vars: [ { sym: 'r_{m} - R_{F}', en: 'market risk premium', ar: 'علاوة مخاطر السوق' } ],
      purpose: { en: 'States the price of one unit of beta on the SML graph.', ar: 'يذكر سعر وحدة بيتا الواحدة على منحنى SML.' },
      assumptions: { en: 'Same as CAPM; the relationship is linear in beta.', ar: 'كما في CAPM؛ والعلاقة خطية في بيتا.' },
      when: { en: 'Reading or drawing the SML; analysing shifts.', ar: 'قراءة أو رسم SML؛ وتحليل الإزاحات.' },
      inputs: { en: 'r<m> and R<F>.', ar: '‏r<m> وR<F>.' },
      cautions: { en: 'A parallel shift (inflation) leaves the slope unchanged; a steepening (risk aversion) changes it.', ar: 'الإزاحة المتوازية (التضخم) تترك الميل دون تغيير؛ أما زيادة الانحدار (النفور من المخاطر) فتغيّره.' },
      illustration: { en: 'With R<F>=7%, r<m>=11% the slope is 4%; beta 0→7%, 0.5→9%, 1→11%, 1.5→13%, 2→15%.', ar: 'مع R<F>=7% وr<m>=11% الميل 4%؛ بيتا 0→7%، 0.5→9%، 1→11%، 1.5→13%، 2→15%.' },
      sensitivity: { en: 'Higher risk aversion → steeper slope → high-beta assets’ required returns rise most.', ar: 'نفور أكبر من المخاطر ← ميل أشد ← عوائد الأصول عالية بيتا المطلوبة ترتفع أكثر.' },
      meaning: { en: 'The market’s price tag per unit of non-diversifiable risk.', ar: 'بطاقة سعر السوق لكل وحدة مخاطر غير قابلة للتنويع.' } },

    { type: 'example', title: { en: 'Course example — BenAli Corporation, asset Z', ar: 'مثال المقرر — شركة BenAli، الأصل Z' },
      context: { en: 'BenAli (computer software developer) wants the required return on asset Z with beta 1.5. R<F> = 7%; r<m> = 11%.', ar: 'تريد BenAli (مطوّر برمجيات) العائد المطلوب للأصل Z ببيتا 1.5. ‏R<F> = 7%؛ ‏r<m> = 11%.' },
      source: { en: 'Lecture 1, slide 27', ar: 'المحاضرة 1، الشريحة 27' },
      steps: [
        { kind: 'understand', body: { en: 'Price the market risk of one asset using CAPM.', ar: 'سعّر مخاطر السوق لأصل واحد باستخدام CAPM.' } },
        { kind: 'given', body: { en: 'b<Z> = 1.5; R<F> = 7%; r<m> = 11%.', ar: '‏b<Z> = 1.5؛ ‏R<F> = 7%؛ ‏r<m> = 11%.' } },
        { kind: 'unknown', body: { en: 'r<Z>.', ar: '‏r<Z>.' } },
        { kind: 'method', body: { en: 'CAPM equation.', ar: 'معادلة CAPM.' } },
        { kind: 'sub', body: { en: 'r<Z> = 7% + [1.5 × (11% − 7%)].', ar: '‏r<Z> = 7% + [1.5 × (11% − 7%)].' }, math: ['r_{Z} = 7\\% + [1.5 \\times (11\\% - 7\\%)]'] },
        { kind: 'calc', body: { en: '7% + [1.5 × 4%] = 7% + 6% = 13%.', ar: '‏7% + [1.5 × 4%] = 7% + 6% = 13%.' } },
        { kind: 'interpret', body: { en: 'Investors require 13% on asset Z to compensate for its risk: 7% for time plus 6% for carrying 1.5 units of market risk.', ar: 'يطلب المستثمرون 13% على الأصل Z تعويضًا عن مخاطره: 7% للزمن زائد 6% لحمل 1.5 وحدة مخاطر سوق.' } },
        { kind: 'verify', body: { en: 'Beta 1 would give exactly 11% (the market); 1.5 gives more, as it must.', ar: 'بيتا 1 تعطي 11% بالضبط (السوق)؛ و1.5 تعطي أكثر، كما يجب.' } }
      ]},

    { type: 'example', title: { en: 'Course example — CAPM across betas, and plotting the SML', ar: 'مثال المقرر — CAPM عبر بيتات مختلفة ورسم SML' },
      context: { en: 'With R<F> = 7% and r<m> = 11%, the lecture tabulates required returns for betas 0.5 / 1.0 / 1.5 / 2.0 → 9% / 11% / 13% / 15%, then plots the SML from exactly those points.', ar: 'مع R<F> = 7% وr<m> = 11%، تجدول المحاضرة العوائد المطلوبة لبيتات 0.5 / 1.0 / 1.5 / 2.0 ← 9% / 11% / 13% / 15%، ثم ترسم SML من تلك النقاط بالضبط.' },
      source: { en: 'Lecture 1, slides 28 & 30', ar: 'المحاضرة 1، الشريحتان 28 و30' },
      steps: [
        { kind: 'understand', body: { en: 'Show the linear pattern: higher beta = higher required return.', ar: 'إظهار النمط الخطي: بيتا أعلى = عائد مطلوب أعلى.' } },
        { kind: 'given', body: { en: 'R<F>=7%, r<m>=11%; premium = 4%.', ar: '‏R<F>=7% وr<m>=11%؛ العلاوة = 4%.' } },
        { kind: 'unknown', body: { en: 'Required return at each beta; the SML points.', ar: 'العائد المطلوب عند كل بيتا؛ نقاط SML.' } },
        { kind: 'method', body: { en: 'Apply CAPM row by row.', ar: 'طبّق CAPM صفًا صفًا.' } },
        { kind: 'sub', body: { en: 'A(0.5): 7+0.5(4)=9%; B(1.0): 7+1.0(4)=11%; C(1.5): 7+1.5(4)=13%; D(2.0): 7+2.0(4)=15%.', ar: '‏أ(0.5): 7+0.5(4)=9%؛ ب(1.0): 7+1.0(4)=11%؛ ج(1.5): 7+1.5(4)=13%؛ د(2.0): 7+2.0(4)=15%.' }, math: ['r_{A}=9\\%', 'r_{B}=11\\%', 'r_{C}=13\\%', 'r_{D}=15\\%'] },
        { kind: 'calc', body: { en: 'Points: (0,7%), (0.5,9%), (1,11%), (1.5,13%), (2,15%).', ar: 'النقاط: (0،7%)، (0.5،9%)، (1،11%)، (1.5،13%)، (2،15%).' } },
        { kind: 'interpret', body: { en: 'The line starts at R<F> and rises 4 points per unit of beta. Beta 1 lands exactly on r<m>, confirming the market portfolio has beta 1 by definition.', ar: 'يبدأ الخط عند R<F> ويرتفع 4 نقاط لكل وحدة بيتا. وبيتا 1 تقع بالضبط على r<m>، ما يؤكد أن محفظة السوق بيتاها 1 بالتعريف.' } },
        { kind: 'verify', body: { en: 'Slope check: (15−7)/(2−0) = 4 = r<m> − R<F> ✓.', ar: 'فحص الميل: (15−7)/(2−0) = 4 = r<m> − R<F> ✓.' } }
      ]},

    { type: 'example', title: { en: 'Course examples — SML shifts (inflation & risk aversion)', ar: 'أمثلة المقرر — إزاحات SML (التضخم والنفور من المخاطر)' },
      context: { en: 'Original: R<F>=7%, r<m>=11%, b<Z>=1.5, r<Z>=13%. (i) Expected inflation increases by 3%. (ii) Separately, market return expectations increase to 14% (more risk aversion).', ar: 'الأصل: R<F>=7% وr<m>=11% وb<Z>=1.5 وr<Z>=13%. (أ) توقع التضخم يزيد 3%. (ب) على حدة، توقعات عائد السوق ترتفع إلى 14% (نفور أكبر من المخاطر).' },
      source: { en: 'Lecture 1, slides 31–32', ar: 'المحاضرة 1، الشريحتان 31–32' },
      steps: [
        { kind: 'understand', body: { en: 'Two different macro changes; each moves the SML differently.', ar: 'تغيران كليان مختلفان؛ كل منهما يحرك SML بطريقة مختلفة.' } },
        { kind: 'given', body: { en: 'Base: R<F>=7%, r<m>=11%, b=1.5. Inflation +3% → R<F>=10%, r<m>=14%. Risk aversion → r<m>=14% with R<F> unchanged at 7%.', ar: 'الأساس: R<F>=7% وr<m>=11% وb=1.5. تضخم +3% ← R<F>=10% وr<m>=14%. نفور من المخاطر ← r<m>=14% مع بقاء R<F> عند 7%.' } },
        { kind: 'unknown', body: { en: 'New r<Z> in each case and the shape of the shift.', ar: '‏r<Z> الجديد في كل حالة وشكل الإزاحة.' } },
        { kind: 'method', body: { en: 'Re-apply CAPM with the new inputs.', ar: 'أعد تطبيق CAPM بالمدخلات الجديدة.' } },
        { kind: 'sub', body: { en: 'Inflation: r = 10% + [1.5 × (14% − 10%)] = 10% + 6% = 16%. Risk aversion: r = 7% + [1.5 × (14% − 7%)] = 7% + 10.5% = 17.5%.', ar: 'التضخم: r = 10% + [1.5 × (14% − 10%)] = 10% + 6% = 16%. النفور من المخاطر: r = 7% + [1.5 × (14% − 7%)] = 7% + 10.5% = 17.5%.' }, math: ['r_{Z1} = 10\\% + [1.5 \\times 4\\%] = 16\\%', 'r_{Z1} = 7\\% + [1.5 \\times 7\\%] = 17.5\\%'] },
        { kind: 'calc', body: { en: 'Inflation case 16%; risk-aversion case 17.5%.', ar: 'حالة التضخم 16%؛ وحالة النفور من المخاطر 17.5%.' } },
        { kind: 'interpret', body: { en: 'Inflation raised every required return by exactly 3 points (parallel shift; premium still 4%). Greater risk aversion raised the premium from 4% to 7%, so the line steepened and high-beta assets were hit hardest (Z: +4.5 points).', ar: 'رفع التضخم كل العوائد المطلوبة 3 نقاط بالضبط (إزاحة متوازية؛ العلاوة ما زالت 4%). أما زيادة النفور من المخاطر فرفعت العلاوة من 4% إلى 7% فزاد انحدار الخط وتضررت الأصول عالية بيتا أكثر (‏Z: ‏+4.5 نقطة).' } },
        { kind: 'verify', body: { en: 'Parallel shift: premium unchanged (14−10 = 4). Steepening: intercept unchanged (7%) but slope 7 vs 4.', ar: 'إزاحة متوازية: العلاوة لم تتغير (14−10 = 4). زيادة انحدار: التقاطع لم يتغير (7%) لكن الميل 7 مقابل 4.' } }
      ]},

    { type: 'visual', kind: 'line', caption: { en: 'The Security Market Line with R<F>=7%, r<m>=11% (course table), plus the two shifts from the lecture examples.', ar: 'خط SML مع R<F>=7% وr<m>=11% (جدول المقرر)، مع الإزاحتين من مثالي المحاضرة.' },
      cfg: { x: { min: 0, max: 2, label: { en: 'Beta (non-diversifiable risk)', ar: 'بيتا (المخاطر غير القابلة للتنويع)' }, ticks: 4 }, y: { label: { en: 'Required return (%)', ar: 'العائد المطلوب (%)' }, fmt: 'pct' },
        series: [
          { name: { en: 'Base SML (RF 7%, rm 11%)', ar: '‏SML الأساس (RF 7%، rm 11%)' }, color: '#0e7c86', points: [[0,7],[0.5,9],[1,11],[1.5,13],[2,15]] },
          { name: { en: 'Inflation +3% (RF 10%, rm 14%)', ar: 'تضخم +3% (RF 10%، rm 14%)' }, color: '#c46a2b', dash: '6 4', points: [[0,10],[1,14],[2,18]] },
          { name: { en: 'More risk aversion (rm 14%)', ar: 'نفور أكبر من المخاطر (rm 14%)' }, color: '#6b4f9e', dash: '2 3', points: [[0,7],[1,14],[2,21]] }
        ], markers: [ { x: 1.5, y: 13, label: { en: 'Asset Z', ar: 'الأصل Z' } } ] } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Using r<m> itself as the premium: r = 7% + 1.5 × 11% = 23.5%.', ar: 'استخدام r<m> ذاته كعلاوة: r = 7% + 1.5 × 11% = 23.5%.' },
        why: { en: 'The premium is the excess over the risk-free rate, not the market return.', ar: 'العلاوة هي الفائض فوق المعدل الخالي من المخاطر لا عائد السوق.' },
        correct: { en: 'Subtract first: (11% − 7%) = 4%, then multiply by beta.', ar: 'اطرح أولًا: (11% − 7%) = 4% ثم اضرب في بيتا.' },
        illus: { en: 'Correct answer 13% vs wrong 23.5% — a 10.5-point error.', ar: 'الإجابة الصحيحة 13% مقابل الخاطئة 23.5% — خطأ 10.5 نقطة.' } },
      { wrong: { en: 'Treating an inflation shock as a steepening of the SML.', ar: 'معاملة صدمة التضخم كزيادة في انحدار SML.' },
        why: { en: 'Inflation lifts R<F> and r<m> together; the premium (slope) is unchanged.', ar: 'التضخم يرفع R<F> وr<m> معًا؛ والعلاوة (الميل) لا تتغير.' },
        correct: { en: 'Parallel upward shift; steepening belongs to higher risk aversion.', ar: 'إزاحة متوازية لأعلى؛ وزيادة الانحدار تخص ارتفاع النفور من المخاطر.' },
        illus: { en: 'Inflation +3%: slope stays 4% (14−10). Risk aversion: slope becomes 7% (14−7).', ar: 'تضخم +3%: الميل يبقى 4% (14−10). النفور من المخاطر: الميل يصبح 7% (14−7).' } },
      { wrong: { en: 'Reading the SML as a promise: “asset Z will return 13%”.', ar: 'قراءة SML كوعد: «الأصل Z سيعيد 13%».' },
        why: { en: 'CAPM gives the required (expected) return for bearing risk, not a guaranteed outcome.', ar: '‏CAPM يعطي العائد المطلوب (المتوقع) مقابل تحمل المخاطر لا نتيجة مضمونة.' },
        correct: { en: 'Interpret r<j> as the hurdle rate investors demand; realised returns scatter around it.', ar: 'فسّر r<j> كمعدل حاجز يطلبه المستثمرون؛ والعوائد المحققة تتشتت حوله.' },
        illus: { en: 'Lesson 1’s Apple returned 132.2% in a year — far from any required return.', ar: 'عائد Apple في الدرس 1 كان 132.2% في سنة — بعيدًا عن أي عائد مطلوب.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'R<F> = 5%, r<m> = 12%, beta = 0.8. Required return =', ar: '‏R<F> = 5% وr<m> = 12% وبيتا = 0.8. العائد المطلوب =' },
        options: [ { en: '10.6%', ar: '10.6%' }, { en: '9.6%', ar: '9.6%' }, { en: '12.0%', ar: '12.0%' }, { en: '14.6%', ar: '14.6%' } ], answer: 0,
        explain: { en: '5% + 0.8 × (12% − 5%) = 5% + 5.6% = 10.6%.', ar: '‏5% + 0.8 × (12% − 5%) = 5% + 5.6% = 10.6%.' } },
      { type: 'mcq', q: { en: 'On the SML, the Y-intercept and the slope are respectively:', ar: 'على خط SML، التقاطع مع المحور الرأسي والميل هما على الترتيب:' },
        options: [ { en: 'R<F> and (r<m> − R<F>)', ar: '‏R<F> و(r<m> − R<F>)' }, { en: 'r<m> and beta', ar: '‏r<m> وبيتا' }, { en: 'beta and R<F>', ar: 'بيتا وR<F>' }, { en: '0 and r<m>', ar: '‏0 وr<m>' } ], answer: 0,
        explain: { en: 'At beta 0 the required return is the risk-free rate; each unit of beta adds the market risk premium.', ar: 'عند بيتا 0 العائد المطلوب هو المعدل الخالي من المخاطر؛ وكل وحدة بيتا تضيف علاوة مخاطر السوق.' } },
      { type: 'mcq', q: { en: 'Expected inflation rises by 2 points. The SML:', ar: 'توقع التضخم يرتفع نقطتين. خط SML:' },
        options: [ { en: 'Shifts up in parallel, slope unchanged', ar: 'يزيح لأعلى بالتوازي والميل لا يتغير' }, { en: 'Steepens, intercept unchanged', ar: 'يزداد انحدارًا والتقاطع لا يتغير' }, { en: 'Flattens', ar: 'يصبح أقل انحدارًا' }, { en: 'Does not move', ar: 'لا يتحرك' } ], answer: 0,
        explain: { en: 'Both R<F> and r<m> rise by the inflation increment, leaving (r<m> − R<F>) unchanged — a parallel shift (lecture slide 31).', ar: 'يرتفع كل من R<F> وr<m> بمقدار التضخم فيبقى (r<m> − R<F>) دون تغيير — إزاحة متوازية (شريحة المحاضرة 31).' } },
      { type: 'num', q: { en: 'With R<F>=7%, r<m>=11%, investors become more risk-averse so r<m> rises to 14%. The new required return for beta 1.5 is (in %):', ar: 'مع R<F>=7% وr<m>=11%، يزداد نفور المستثمرين من المخاطر فيرتفع r<m> إلى 14%. العائد المطلوب الجديد لبيتا 1.5 هو (بالنسبة):' },
        answer: 17.5, tol: 0.05, unit: '%',
        explain: { en: '7% + 1.5 × (14% − 7%) = 7% + 10.5% = 17.5% (lecture slide 32).', ar: '‏7% + 1.5 × (14% − 7%) = 7% + 10.5% = 17.5% (شريحة المحاضرة 32).' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'CAPM', ar: '‏CAPM' }, back: { en: 'r<j> = R<F> + b<j>(r<m> − R<F>)', ar: '‏r<j> = R<F> + b<j>(r<m> − R<F>)' } },
      { front: { en: 'SML slope', ar: 'ميل SML' }, back: { en: 'r<m> − R<F> (market risk premium)', ar: '‏r<m> − R<F> (علاوة مخاطر السوق)' } },
      { front: { en: 'Inflation ↑ vs risk aversion ↑', ar: 'تضخم ↑ مقابل نفور من المخاطر ↑' }, back: { en: 'Inflation: parallel up-shift. Risk aversion: steeper slope.', ar: 'التضخم: إزاحة متوازية لأعلى. النفور من المخاطر: ميل أشد.' } }
    ]},

    { type: 'summary', points: [
      { en: 'CAPM prices only non-diversifiable risk: r<j> = R<F> + b<j>(r<m> − R<F>).', ar: '‏CAPM يسعّر فقط المخاطر غير القابلة للتنويع: r<j> = R<F> + b<j>(r<m> − R<F>).' },
      { en: 'SML: intercept R<F>, slope (r<m> − R<F>), horizontal axis beta.', ar: '‏SML: التقاطع R<F> والميل (r<m> − R<F>) والمحور الأفقي بيتا.' },
      { en: 'Inflation shifts the SML up in parallel; risk aversion steepens it.', ar: 'التضخم يزيح SML لأعلى بالتوازي؛ والنفور من المخاطر يزيد انحداره.' },
      { en: 'BenAli’s asset Z (b=1.5) requires 13% at R<F>=7%, r<m>=11%.', ar: 'الأصل Z لـBenAli (‏b=1.5) يتطلب 13% عند R<F>=7% وr<m>=11%.' }
    ], canExplain: [
      { en: 'Why diversifiable risk earns no premium in CAPM.', ar: 'لماذا لا تكسب المخاطر القابلة للتنويع علاوة في CAPM.' },
      { en: 'Why beta 1 must plot exactly at r<m>.', ar: 'لماذا يجب أن تقع بيتا 1 بالضبط عند r<m>.' },
      { en: 'How a 3-point inflation shock changes r<Z> versus a 3-point rise in r<m> alone.', ar: 'كيف تغيّر صدمة تضخم 3 نقاط r<Z> مقابل ارتفاع 3 نقاط في r<m> وحده.' }
    ]}
  ]
});
