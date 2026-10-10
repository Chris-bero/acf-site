/* ============================================================
   CONTENT — Module 2 (Lecture 2: Leverage & Capital Structure, Ch.13)
   ============================================================ */
window.COURSE.modules.push({
  id: 'm2',
  title: { en: 'Module 2 — Leverage and Capital Structure', ar: 'الوحدة 2 — الرافعة المالية وهيكل رأس المال' },
  source: { en: 'Lecture 2 — “Corporate Capital Structure” (Ross, Westerfield & Jordan, Ch. 13)', ar: 'المحاضرة 2 — «هيكل رأس المال للشركة» (روس وويسترفيلد وجوردان، الفصل 13)' }
});

/* ---------------------------------------------------------- L5 */
window.COURSE.lessons.push({
  id: 'l5', module: 'm2', minutes: 40,
  title: { en: 'Capital Structure and M&M Propositions I & II (No Taxes)', ar: 'هيكل رأس المال وفرضيتا موديغلياني–ميلر الأولى والثانية (بدون ضرائب)' },
  subtitle: { en: 'Why, without taxes, the way you slice the firm does not change its value', ar: 'لماذا لا تغيّر طريقة تقسيم الشركة قيمتها في غياب الضرائب' },
  source: { en: 'Lecture 2, slides 2–8 (Chapter 13)', ar: 'المحاضرة 2، الشرائح 2–8 (الفصل 13)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Identify the two components of a firm’s capital from its balance sheet.', ar: 'تحديد مكوّني رأس مال الشركة من ميزانيتها.' },
      { en: 'State M&M Proposition I (no taxes) and use V<U> = EBIT ÷ K<eu>.', ar: 'ذكر فرضية موديغلياني–ميلر الأولى (بدون ضرائب) واستخدام V<U> = EBIT ÷ K<eu>.' },
      { en: 'Derive the value of equity, interest, equity earnings and K<e> for a levered firm.', ar: 'اشتقاق قيمة حقوق الملكية والفائدة وأرباح حقوق الملكية وK<e> لشركة ذات رافعة.' },
      { en: 'Apply M&M Proposition II (no taxes) and show WACC stays constant.', ar: 'تطبيق فرضية موديغلياني–ميلر الثانية (بدون ضرائب) وإظهار ثبات WACC.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'EBIT', ar: 'الأرباح قبل الفوائد والضرائب (EBIT)' },
        def: { en: 'Operating profit: sales minus operating costs, before interest and taxes.', ar: 'الربح التشغيلي: المبيعات ناقص التكاليف التشغيلية، قبل الفوائد والضرائب.' },
        why: { en: 'It is the cash the firm’s assets generate, independent of how they are financed.', ar: 'هو النقد الذي تولده أصول الشركة بغض النظر عن طريقة تمويلها.' },
        example: { en: 'The U/L example assumes EBIT = $1,000,000 per year forever.', ar: 'مثال U/L يفترض EBIT = 1,000,000 دولار سنويًا للأبد.' } },
      { term: { en: 'Cost of equity (K<e>) and unlevered cost of equity (K<eu>)', ar: 'تكلفة حقوق الملكية (K<e>) وتكلفة حقوق الملكية بلا رافعة (K<eu>)' },
        def: { en: 'The return shareholders demand; K<eu> is that return for an all-equity firm.', ar: 'العائد الذي يطلبه المساهمون؛ وK<eu> هو ذلك العائد لشركة ممولة بالكامل بحقوق الملكية.' },
        why: { en: 'Leverage adds financial risk, so K<e> rises above K<eu> — that is Proposition II.', ar: 'الرافعة تضيف مخاطر مالية، لذا يرتفع K<e> فوق K<eu> — وهذه فرضية II.' },
        example: { en: 'K<eu> = 10% unlevered; with D/E = 4/6, K<e> = 13.333%.', ar: '‏K<eu> = 10% بلا رافعة؛ ومع D/E = 4/6 يصبح K<e> = 13.333%.' } },
      { term: { en: 'Perpetuity valuation', ar: 'تقييم الدخل الدائم (Perpetuity)' },
        def: { en: 'Value = cash flow ÷ discount rate, for a cash flow that lasts forever.', ar: 'القيمة = التدفق النقدي ÷ معدل الخصم، لتدفق يستمر للأبد.' },
        why: { en: 'V<U> = EBIT ÷ K<eu> is exactly a perpetuity formula.', ar: '‏V<U> = EBIT ÷ K<eu> هي بالضبط معادلة دخل دائم.' },
        example: { en: '$1,000,000 ÷ 0.10 = $10,000,000.', ar: '‏1,000,000 ÷ 0.10 = 10,000,000 دولار.' },
        link: 'l1' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Everything on the right-hand side of the balance sheet, excluding current liabilities, is a source of capital: debt capital and equity capital. Capital structure is simply the mix. The deep question of this module: does the mix change the total value of the firm?', ar: 'كل ما في الجانب الأيمن من الميزانية، باستثناء الخصوم المتداولة، مصدر لرأس المال: رأس مال دين ورأس مال حقوق ملكية. وهيكل رأس المال هو ببساطة المزيج. السؤال العميق لهذه الوحدة: هل يغيّر المزيج إجمالي قيمة الشركة؟' },
      { en: 'Modigliani and Miller’s 1958 answer (no taxes): No. The firm is a pie; debt and equity are just slices. Whatever the slices, the pie — the value of the operating assets — is unchanged: V<L> = V<U>. But slicing differently changes who bears risk: shareholders of a levered firm bear financial risk on top of business risk, so they demand a higher return, exactly offsetting the “cheaper” debt. Hence WACC is constant.', ar: 'إجابة موديغلياني وميلر لعام 1958 (بدون ضرائب): لا. الشركة فطيرة؛ والدين وحقوق الملكية مجرد شرائح. ومهما كانت الشرائح، الفطيرة — قيمة الأصول التشغيلية — لا تتغير: V<L> = V<U>. لكن تقطيعًا مختلفًا يغيّر من يتحمل المخاطر: مساهمو الشركة ذات الرافعة يتحملون مخاطر مالية فوق مخاطر الأعمال، لذا يطلبون عائدًا أعلى يعوّض بالضبط الدين «الأرخص». ومن ثم يبقى WACC ثابتًا.' }
    ], analogy: { en: 'A pizza cut into 4 slices or 8 slices is the same pizza. Debt/equity mix is the cutting; firm value is the pizza.', ar: 'بيتزا مقطعة 4 شرائح أو 8 هي نفس البيتزا. مزيج الدين/حقوق الملكية هو التقطيع؛ وقيمة الشركة هي البيتزا.' }, analogyLimit: { en: 'The pizza analogy holds only under M&M’s no-tax assumptions. Once interest is tax-deductible (Lesson 6), the way you cut genuinely changes how much pizza everyone gets.', ar: 'تشبيه البيتزا يصح فقط تحت افتراضات موديغلياني–ميلر بلا ضرائب. بمجرد أن تصبح الفوائد قابلة للخصم الضريبي (الدرس 6)، تغيّر طريقة التقطيع فعليًا كمية البيتزا التي يحصل عليها الجميع.' } },

    { type: 'academic', paras: [
      { en: 'M&M Proposition I (no taxes, 1958): V<L> = V<U>, where V<L> is the value of a levered firm and V<U> the value of an unlevered firm with identical assets and business risk. For a perpetuity of operating income, V<U> = EBIT ÷ K<eu>.', ar: 'فرضية موديغلياني–ميلر الأولى (بدون ضرائب، 1958): ‏V<L> = V<U>، حيث V<L> قيمة الشركة ذات الرافعة وV<U> قيمة شركة بلا رافعة لها نفس الأصول ومخاطر الأعمال. ولدخل تشغيلي دائم، V<U> = EBIT ÷ K<eu>.' },
      { en: 'Given V<L>, the market value of equity is the residual: E = V<L> − D. Interest expense is I = D × K<d>; equity earnings are EBIT − I; and the levered cost of equity is those equity earnings divided by E.', ar: 'بمعرفة V<L>، قيمة حقوق الملكية السوقية هي الباقي: E = V<L> − D. ومصروف الفائدة I = D × K<d>؛ وأرباح حقوق الملكية EBIT − I؛ وتكلفة حقوق الملكية ذات الرافعة هي تلك الأرباح مقسومة على E.' },
      { en: 'M&M Proposition II (no taxes): K<e> = K<eu> + (K<eu> − K<d>) × (D/E). The cost of equity rises with leverage because shareholders demand a higher return for the increased financial risk. Crucially, the WACC remains constant: the rise in K<e> exactly offsets the greater use of debt.', ar: 'فرضية موديغلياني–ميلر الثانية (بدون ضرائب): ‏K<e> = K<eu> + (K<eu> − K<d>) × (D/E). ترتفع تكلفة حقوق الملكية مع الرافعة لأن المساهمين يطلبون عائدًا أعلى مقابل المخاطر المالية المتزايدة. والمهم أن WACC يبقى ثابتًا: ارتفاع K<e> يعوّض بالضبط زيادة استخدام الدين.' }
    ], defs: [
      { term: { en: 'Levered firm (L) / Unlevered firm (U)', ar: 'شركة ذات رافعة (L) / شركة بلا رافعة (U)' }, def: { en: 'A firm that uses debt financing / a firm financed entirely by equity.', ar: 'شركة تستخدم تمويلًا بالدين / شركة ممولة بالكامل بحقوق الملكية.' } },
      { term: { en: 'Debt-to-equity ratio (D/E)', ar: 'نسبة الدين إلى حقوق الملكية (D/E)' }, def: { en: 'Total debt ÷ total equity.', ar: 'إجمالي الدين ÷ إجمالي حقوق الملكية.' } },
      { term: { en: 'WACC', ar: 'متوسط تكلفة رأس المال المرجح (WACC)' }, def: { en: '(E/V)K<e> + (D/V)K<d>(1−T<c>); with no taxes the (1−T<c>) term disappears.', ar: '‏(E/V)K<e> + (D/V)K<d>(1−T<c>)؛ وبدون ضرائب يختفي حد (1−T<c>).' } }
    ]},

    { type: 'simple', paras: [
      { en: 'The business earns EBIT every year forever. Value that stream at the unlevered cost of equity: that is the whole pie, no matter who funds it.', ar: 'العمل يكسب EBIT كل سنة للأبد. قيّم هذا السيل بتكلفة حقوق الملكية بلا رافعة: هذه الفطيرة كلها، بغض النظر عمن يمولها.' },
      { en: 'If the firm borrows D, lenders have a first claim of D. Shareholders get whatever is left: E = V − D. Because they now sit behind lenders, they demand more return — Proposition II tells you exactly how much more.', ar: 'إذا اقترضت الشركة D، فللدائنين مطالبة أولى قدرها D. والمساهمون يأخذون الباقي: E = V − D. ولأنهم الآن خلف الدائنين، يطلبون عائدًا أكثر — فرضية II تخبرك بالضبط كم أكثر.' }
    ], steps: [
      { en: 'V<U> = EBIT ÷ K<eu>.', ar: '‏V<U> = EBIT ÷ K<eu>.' },
      { en: 'No taxes → V<L> = V<U>.', ar: 'بلا ضرائب ← V<L> = V<U>.' },
      { en: 'E = V<L> − D.', ar: '‏E = V<L> − D.' },
      { en: 'I = D × K<d>; equity earnings = EBIT − I; K<e> = equity earnings ÷ E.', ar: '‏I = D × K<d>؛ أرباح حقوق الملكية = EBIT − I؛ ‏K<e> = أرباح حقوق الملكية ÷ E.' },
      { en: 'Cross-check with Proposition II and confirm WACC = K<eu>.', ar: 'تحقق من التقاطع مع فرضية II وأكد أن WACC = K<eu>.' }
    ], recap: { en: 'No taxes → capital structure is irrelevant to total value; leverage only re-prices equity upward so that WACC never moves.', ar: 'بلا ضرائب ← هيكل رأس المال لا يؤثر على القيمة الكلية؛ والرافعة فقط تعيد تسعير حقوق الملكية لأعلى بحيث لا يتحرك WACC أبدًا.' } },

    { type: 'formula', id: 'f-mm1nt', tag: 'course', name: { en: 'M&M Proposition I (no taxes)', ar: 'فرضية موديغلياني–ميلر الأولى (بدون ضرائب)' },
      tex: 'V_{L} = V_{U}, \\quad V_{U} = \\frac{EBIT}{K_{eu}}',
      vars: [ { sym: 'V_{L}', en: 'value of levered firm', ar: 'قيمة الشركة ذات الرافعة' }, { sym: 'V_{U}', en: 'value of unlevered firm', ar: 'قيمة الشركة بلا رافعة' }, { sym: 'EBIT', en: 'perpetual operating income', ar: 'دخل تشغيلي دائم' }, { sym: 'K_{eu}', en: 'unlevered cost of equity', ar: 'تكلفة حقوق الملكية بلا رافعة' } ],
      purpose: { en: 'Value the firm from its operating income, independent of financing.', ar: 'تقييم الشركة من دخلها التشغيلي بغض النظر عن التمويل.' },
      assumptions: { en: 'No corporate taxes; perpetual EBIT; identical assets and business risk across firms; no distress costs.', ar: 'لا ضرائب شركات؛ ‏EBIT دائم؛ أصول ومخاطر أعمال متطابقة بين الشركات؛ بلا تكاليف ضائقة.' },
      when: { en: 'Valuing a firm or checking whether a financing change creates value (no-tax world).', ar: 'تقييم شركة أو فحص ما إذا كان تغيير تمويلي يخلق قيمة (عالم بلا ضرائب).' },
      inputs: { en: 'EBIT and K<eu>.', ar: '‏EBIT وK<eu>.' },
      cautions: { en: 'With corporate taxes this is wrong — use Proposition I with taxes (Lesson 6).', ar: 'مع ضرائب الشركات هذا خطأ — استخدم فرضية I مع الضرائب (الدرس 6).' },
      illustration: { en: 'EBIT $1,000,000, K<eu> 10% → V<U> = $10,000,000 = V<L>.', ar: '‏EBIT 1,000,000 دولار وK<eu> ‏10% ← V<U> = 10,000,000 دولار = V<L>.' },
      sensitivity: { en: 'Higher EBIT or lower K<eu> raises firm value; changing D does not.', ar: '‏EBIT أعلى أو K<eu> أقل يرفع قيمة الشركة؛ وتغيير D لا يرفعها.' },
      meaning: { en: 'The firm’s operating assets are worth the same however they are financed.', ar: 'أصول الشركة التشغيلية تساوي نفس القيمة مهما مُولت.' } },

    { type: 'formula', id: 'f-mm2nt', tag: 'course', name: { en: 'M&M Proposition II (no taxes)', ar: 'فرضية موديغلياني–ميلر الثانية (بدون ضرائب)' },
      tex: 'K_{e} = K_{eu} + (K_{eu} - K_{d}) \\times \\frac{D}{E}',
      vars: [ { sym: 'K_{e}', en: 'cost of equity of levered firm', ar: 'تكلفة حقوق الملكية للشركة ذات الرافعة' }, { sym: 'K_{eu}', en: 'unlevered cost of equity', ar: 'تكلفة حقوق الملكية بلا رافعة' }, { sym: 'K_{d}', en: 'cost of debt', ar: 'تكلفة الدين' }, { sym: 'D/E', en: 'debt-to-equity ratio', ar: 'نسبة الدين إلى حقوق الملكية' } ],
      purpose: { en: 'Quantify how much leverage raises the return shareholders demand.', ar: 'تحديد كم ترفع الرافعة العائد الذي يطلبه المساهمون.' },
      assumptions: { en: 'Same no-tax assumptions as Proposition I; debt cost constant.', ar: 'نفس افتراضات فرضية I بلا ضرائب؛ وتكلفة الدين ثابتة.' },
      when: { en: 'Finding K<e> at a given D/E, or showing WACC invariance.', ar: 'إيجاد K<e> عند D/E معيّن، أو إظهار عدم تغير WACC.' },
      inputs: { en: 'K<eu>, K<d>, D, E.', ar: '‏K<eu> وK<d> وD وE.' },
      cautions: { en: 'Without taxes only. With taxes multiply the spread by (1−T<c>) (Lesson 6).', ar: 'بدون ضرائب فقط. مع الضرائب اضرب الفارق في (1−T<c>) (الدرس 6).' },
      illustration: { en: '10% + (10% − 5%)(4,000,000/6,000,000) = 10% + 3.333% = 13.333%.', ar: '‏10% + (10% − 5%)(4,000,000/6,000,000) = 10% + 3.333% = 13.333%.' },
      sensitivity: { en: 'K<e> rises linearly with D/E at rate (K<eu> − K<d>).', ar: 'يرتفع K<e> خطيًا مع D/E بمعدل (K<eu> − K<d>).' },
      meaning: { en: 'The extra return is the price of the financial risk leverage loads onto shareholders.', ar: 'العائد الإضافي هو سعر المخاطر المالية التي تحملها الرافعة على المساهمين.' } },

    { type: 'formula', id: 'f-wacc', tag: 'course', name: { en: 'Weighted average cost of capital (WACC)', ar: 'متوسط تكلفة رأس المال المرجح (WACC)' },
      tex: 'WACC = \\frac{E}{V} K_{e} + \\frac{D}{V} K_{d} (1 - T_{c})',
      vars: [ { sym: 'E, D, V', en: 'equity, debt, total value (V = E + D)', ar: 'حقوق الملكية والدين والقيمة الكلية (V = E + D)' }, { sym: 'K_{e}, K_{d}', en: 'costs of equity and debt', ar: 'تكلفتا حقوق الملكية والدين' }, { sym: 'T_{c}', en: 'corporate tax rate', ar: 'معدل ضريبة الشركات' } ],
      purpose: { en: 'The firm’s overall cost of financing; the discount rate for firm-level cash flows.', ar: 'تكلفة التمويل الكلية للشركة؛ ومعدل الخصم للتدفقات النقدية على مستوى الشركة.' },
      assumptions: { en: 'Market-value weights; constant capital structure; (1−T<c>) applies only when interest is tax-deductible.', ar: 'أوزان قيم سوقية؛ هيكل رأس مال ثابت؛ و(1−T<c>) ينطبق فقط عندما تكون الفائدة قابلة للخصم الضريبي.' },
      when: { en: 'Whenever you need one discount rate for the whole firm.', ar: 'كلما احتجت معدل خصم واحد للشركة كلها.' },
      inputs: { en: 'E, D, K<e>, K<d>, T<c>.', ar: '‏E وD وK<e> وK<d> وT<c>.' },
      cautions: { en: 'Set T<c> = 0 for the no-tax propositions; do not mix book and market values.', ar: 'ضع T<c> = 0 للفرضيات بلا ضرائب؛ ولا تخلط القيم الدفترية بالسوقية.' },
      illustration: { en: 'No-tax example: (6/10)(13.333%) + (4/10)(5%) = 8% + 2% = 10% = K<eu>.', ar: 'مثال بلا ضرائب: (6/10)(13.333%) + (4/10)(5%) = 8% + 2% = 10% = K<eu>.' },
      sensitivity: { en: 'With taxes, more debt lowers WACC (tax shield); without taxes, WACC is flat in D/E.', ar: 'مع الضرائب، دين أكثر يخفض WACC (الدرع الضريبي)؛ وبدون ضرائب يبقى WACC ثابتًا مع D/E.' },
      meaning: { en: 'The average return the firm must earn to satisfy all its investors.', ar: 'متوسط العائد الذي يجب أن تكسبه الشركة لإرضاء كل مستثمريها.' } },

    { type: 'example', title: { en: 'Course example — Firms U and L (no taxes)', ar: 'مثال المقرر — الشركتان U وL (بدون ضرائب)' },
      context: { en: 'Two firms, U and L, have identical assets and business risk. Expected EBIT = $1,000,000 per year forever. K<eu> = 10%. Firm L has $4,000,000 perpetual debt at K<d> = 5%; Firm U is all-equity. Find V<U>, E for L, interest, equity earnings and K<e>.', ar: 'شركتان U وL لهما أصول ومخاطر أعمال متطابقة. ‏EBIT المتوقع = 1,000,000 دولار سنويًا للأبد. ‏K<eu> = 10%. الشركة L لديها دين دائم 4,000,000 دولار بـK<d> = 5%؛ وU ممولة بالكامل بحقوق الملكية. أوجد V<U> وE لـL والفائدة وأرباح حقوق الملكية وK<e>.' },
      source: { en: 'Lecture 2, slides 6 & 8', ar: 'المحاضرة 2، الشريحتان 6 و8' },
      steps: [
        { kind: 'understand', body: { en: 'Value the unlevered firm, then see what leverage does to equity and to K<e> when there are no taxes.', ar: 'قيّم الشركة بلا رافعة، ثم انظر ماذا تفعل الرافعة لحقوق الملكية وK<e> في غياب الضرائب.' } },
        { kind: 'given', body: { en: 'EBIT = 1,000,000; K<eu> = 10%; D = 4,000,000; K<d> = 5%; no taxes.', ar: '‏EBIT = 1,000,000؛ ‏K<eu> = 10%؛ ‏D = 4,000,000؛ ‏K<d> = 5%؛ بلا ضرائب.' } },
        { kind: 'unknown', body: { en: 'V<U>, E, I, equity earnings, K<e>, and WACC.', ar: '‏V<U> وE وI وأرباح حقوق الملكية وK<e> وWACC.' } },
        { kind: 'method', body: { en: 'Perpetuity for V<U>; Proposition I for V<L>; residual for E; Proposition II as cross-check.', ar: 'دخل دائم لـV<U>؛ فرضية I لـV<L>؛ الباقي لـE؛ وفرضية II للتحقق.' } },
        { kind: 'sub', body: { en: 'V<U> = 1,000,000 ÷ 0.10; E = 10,000,000 − 4,000,000; I = 4,000,000 × 5%; equity earnings = 1,000,000 − 200,000; K<e> = 800,000 ÷ 6,000,000.', ar: '‏V<U> = 1,000,000 ÷ 0.10؛ ‏E = 10,000,000 − 4,000,000؛ ‏I = 4,000,000 × 5%؛ أرباح حقوق الملكية = 1,000,000 − 200,000؛ ‏K<e> = 800,000 ÷ 6,000,000.' }, math: ['V_{U} = \\frac{1{,}000{,}000}{0.10} = 10{,}000{,}000', 'E = 10{,}000{,}000 - 4{,}000{,}000 = 6{,}000{,}000', 'I = 4{,}000{,}000 \\times 5\\% = 200{,}000', 'K_{e} = \\frac{800{,}000}{6{,}000{,}000} = 13.333\\%'] },
        { kind: 'calc', body: { en: 'V<U> = V<L> = $10,000,000; E = $6,000,000; I = $200,000; equity earnings = $800,000; K<e> = 13.333%. Proposition II agrees: 10% + (10%−5%)(4/6) = 13.333%.', ar: '‏V<U> = V<L> = 10,000,000 دولار؛ ‏E = 6,000,000؛ ‏I = 200,000؛ أرباح حقوق الملكية = 800,000؛ ‏K<e> = 13.333%. وفرضية II تتفق: 10% + (10%−5%)(4/6) = 13.333%.' } },
        { kind: 'interpret', body: { en: 'Leverage did not create value (V unchanged), but it raised the shareholders’ required return from 10% to 13.333% because they now bear financial risk.', ar: 'الرافعة لم تخلق قيمة (V لم تتغير)، لكنها رفعت العائد المطلوب للمساهمين من 10% إلى 13.333% لأنهم يتحملون الآن مخاطر مالية.' } },
        { kind: 'verify', body: { en: 'WACC = (6/10)(13.333%) + (4/10)(5%) = 8% + 2% = 10% = K<eu> ✓ — constant, as Proposition II promises.', ar: '‏WACC = (6/10)(13.333%) + (4/10)(5%) = 8% + 2% = 10% = K<eu> ✓ — ثابت، كما تعد فرضية II.' } }
      ]},

    { type: 'visual', kind: 'stacked', caption: { en: 'Firm value decomposition (no taxes): the pie is $10,000,000 either way; leverage only re-labels slices as debt ($4m) and equity ($6m).', ar: 'تفكيك قيمة الشركة (بدون ضرائب): الفطيرة 10,000,000 دولار في الحالتين؛ والرافعة فقط تعيد تسمية الشرائح دينًا (4 ملايين) وحقوق ملكية (6 ملايين).' },
      cfg: { rows: [
        { label: { en: 'Unlevered U', ar: '‏U بلا رافعة' }, parts: [ { name: { en: 'Equity', ar: 'حقوق ملكية' }, value: 10000000, color: '#0e7c86' } ] },
        { label: { en: 'Levered L', ar: '‏L ذات رافعة' }, parts: [ { name: { en: 'Debt', ar: 'دين' }, value: 4000000, color: '#1f3a5f' }, { name: { en: 'Equity', ar: 'حقوق ملكية' }, value: 6000000, color: '#0e7c86' } ] }
      ], fmt: 'm' } },

    { type: 'mistakes', items: [
      { wrong: { en: 'Assuming leverage increases firm value even without taxes.', ar: 'افتراض أن الرافعة تزيد قيمة الشركة حتى بدون ضرائب.' },
        why: { en: 'Proposition I says V<L> = V<U> when there are no taxes; the benefit of debt appears only with the tax shield.', ar: 'فرضية I تقول V<L> = V<U> عند غياب الضرائب؛ ومنفعة الدين تظهر فقط مع الدرع الضريبي.' },
        correct: { en: 'No taxes → value unchanged; leverage only shifts risk and raises K<e>.', ar: 'بلا ضرائب ← القيمة لا تتغير؛ والرافعة فقط تحول المخاطر وترفع K<e>.' },
        illus: { en: 'V stays $10,000,000 whether D = 0 or D = $4,000,000.', ar: '‏V تبقى 10,000,000 دولار سواء D = 0 أو D = 4,000,000 دولار.' } },
      { wrong: { en: 'Computing K<e> as equity earnings ÷ V instead of ÷ E.', ar: 'حساب K<e> كأرباح حقوق الملكية ÷ V بدل ÷ E.' },
        why: { en: 'K<e> is the return on the equity investment, not on the whole firm.', ar: '‏K<e> هو العائد على استثمار حقوق الملكية لا على الشركة كلها.' },
        correct: { en: 'Divide by E = $6,000,000 → 13.333%, not by $10,000,000 (which would give 8%).', ar: 'اقسم على E = 6,000,000 دولار ← 13.333%، لا على 10,000,000 دولار (ما يعطي 8%).' },
        illus: { en: '800,000 ÷ 10,000,000 = 8% ≠ K<e>.', ar: '‏800,000 ÷ 10,000,000 = 8% ≠ K<e>.' } },
      { wrong: { en: 'Expecting WACC to fall as debt is added in a no-tax world.', ar: 'توقع انخفاض WACC مع إضافة الدين في عالم بلا ضرائب.' },
        why: { en: 'The rise in K<e> exactly offsets the cheaper debt; WACC = K<eu> always.', ar: 'ارتفاع K<e> يعوّض بالضبط الدين الأرخص؛ وWACC = K<eu> دائمًا.' },
        correct: { en: 'WACC constant at 10% in the example.', ar: '‏WACC ثابت عند 10% في المثال.' },
        illus: { en: '(6/10)(13.333%)+(4/10)(5%) = 10% = K<eu>.', ar: '‏(6/10)(13.333%)+(4/10)(5%) = 10% = K<eu>.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'EBIT = $600,000 perpetual, K<eu> = 12%, no taxes. V<U> =', ar: '‏EBIT = 600,000 دولار دائم وK<eu> = 12% وبلا ضرائب. ‏V<U> =' },
        options: [ { en: '$5,000,000', ar: '5,000,000 دولار' }, { en: '$6,000,000', ar: '6,000,000 دولار' }, { en: '$7,200,000', ar: '7,200,000 دولار' }, { en: '$72,000', ar: '72,000 دولار' } ], answer: 0,
        explain: { en: '600,000 ÷ 0.12 = 5,000,000.', ar: '‏600,000 ÷ 0.12 = 5,000,000.' } },
      { type: 'num', q: { en: 'Same firm borrows $2,000,000 at K<d>=6% (no taxes). Using Proposition II, K<e> = ? (E = V − D = 3,000,000). Give % to two decimals.', ar: 'نفس الشركة تقترض 2,000,000 دولار بـK<d>=6% (بلا ضرائب). باستخدام فرضية II، ‏K<e> = ؟ (‏E = V − D = 3,000,000). أعطِ النسبة لمنزلتين عشريتين.' },
        answer: 16, tol: 0.05, unit: '%',
        explain: { en: 'K<e> = 12% + (12%−6%)(2/3) = 12% + 4% = 16%.', ar: '‏K<e> = 12% + (12%−6%)(2/3) = 12% + 4% = 16%.' } },
      { type: 'tf', q: { en: 'True or false: under M&M no taxes, adding debt lowers the firm’s WACC.', ar: 'صواب أم خطأ: وفق موديغلياني–ميلر بلا ضرائب، إضافة الدين تخفض WACC للشركة.' },
        answer: false,
        explain: { en: 'False. WACC remains equal to K<eu>; only with taxes does the shield reduce WACC.', ar: 'خطأ. ‏WACC يبقى مساويًا لـK<eu>؛ ومع الضرائب فقط يخفض الدرع WACC.' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'M&M I (no taxes)', ar: 'فرضية موديغلياني–ميلر I (بلا ضرائب)' }, back: { en: 'V<L> = V<U> = EBIT ÷ K<eu>', ar: '‏V<L> = V<U> = EBIT ÷ K<eu>' } },
      { front: { en: 'M&M II (no taxes)', ar: 'فرضية موديغلياني–ميلر II (بلا ضرائب)' }, back: { en: 'K<e> = K<eu> + (K<eu> − K<d>)(D/E)', ar: '‏K<e> = K<eu> + (K<eu> − K<d>)(D/E)' } },
      { front: { en: 'WACC under no taxes', ar: '‏WACC بلا ضرائب' }, back: { en: 'Constant = K<eu>', ar: 'ثابت = K<eu>' } }
    ]},

    { type: 'summary', points: [
      { en: 'Capital = debt + equity (right-hand side excluding current liabilities).', ar: 'رأس المال = دين + حقوق ملكية (الجانب الأيمن باستثناء الخصوم المتداولة).' },
      { en: 'No taxes: V<L> = V<U>; leverage is value-neutral.', ar: 'بلا ضرائب: V<L> = V<U>؛ والرافعة محايدة القيمة.' },
      { en: 'K<e> rises with D/E per Proposition II; WACC stays at K<eu>.', ar: 'يرتفع K<e> مع D/E وفق فرضية II؛ ويبقى WACC عند K<eu>.' }
    ], canExplain: [
      { en: 'Why shareholders demand more return as D/E rises even though firm value is unchanged.', ar: 'لماذا يطلب المساهمون عائدًا أعلى مع ارتفاع D/E رغم أن قيمة الشركة لا تتغير.' },
      { en: 'Why E = V − D is a residual claim.', ar: 'لماذا E = V − D مطالبة متبقية.' }
    ]}
  ]
});

/* ---------------------------------------------------------- L6 */
window.COURSE.lessons.push({
  id: 'l6', module: 'm2', minutes: 45,
  title: { en: 'M&M with Corporate Taxes and the Trade-off Theory', ar: 'موديغلياني–ميلر مع ضرائب الشركات ونظرية المقايضة' },
  subtitle: { en: 'The interest tax shield, V<L> = V<U> + T<c>D, and why firms still do not borrow 100%', ar: 'الدرع الضريبي للفائدة، ‏V<L> = V<U> + T<c>D، ولماذا لا تقترض الشركات 100% مع ذلك' },
  source: { en: 'Lecture 2, slides 9–16 (Chapter 13)', ar: 'المحاضرة 2، الشرائح 9–16 (الفصل 13)' },

  blocks: [
    { type: 'objectives', items: [
      { en: 'Explain why interest deductibility makes debt valuable.', ar: 'شرح لماذا يجعل خصم الفائدة ضريبيًا الدين ذا قيمة.' },
      { en: 'Apply V<L> = V<U> + T<c>×D and compute the new equity value and D/E.', ar: 'تطبيق V<L> = V<U> + T<c>×D وحساب قيمة حقوق الملكية الجديدة وD/E.' },
      { en: 'Apply Proposition II with taxes and show WACC declines with leverage.', ar: 'تطبيق فرضية II مع الضرائب وإظهار انخفاض WACC مع الرافعة.' },
      { en: 'Use the trade-off theory V<L> = V<U> + T<c>D − PV(distress) to explain moderate debt levels.', ar: 'استخدام نظرية المقايضة V<L> = V<U> + T<c>D − PV(الضائقة) لتفسير مستويات دين معتدلة.' }
    ]},

    { type: 'prereq', items: [
      { term: { en: 'Interest tax shield', ar: 'الدرع الضريبي للفائدة' },
        def: { en: 'The tax saving created because interest is deductible: T<c> × interest each year; for perpetual debt its PV is T<c> × D.', ar: 'التوفير الضريبي الناتج عن قابلية الفائدة للخصم: T<c> × الفائدة كل سنة؛ ولدين دائم قيمته الحالية T<c> × D.' },
        why: { en: 'It is the entire source of value in M&M with taxes.', ar: 'هو مصدر القيمة كله في موديغلياني–ميلر مع الضرائب.' },
        example: { en: 'T<c> = 25%, D = $3,000,000 → shield PV = $750,000.', ar: '‏T<c> = 25% وD = 3,000,000 دولار ← القيمة الحالية للدرع = 750,000 دولار.' } },
      { term: { en: 'Financial distress costs', ar: 'تكاليف الضائقة المالية' },
        def: { en: 'Costs arising from the risk of bankruptcy: legal fees, lost customers, fire-sale prices, management distraction.', ar: 'تكاليف ناشئة عن خطر الإفلاس: أتعاب قانونية وعملاء مفقودون وأسعار بيع اضطرارية وتشتت الإدارة.' },
        why: { en: 'They are the counterweight that stops firms borrowing without limit.', ar: 'هي الثقل المقابل الذي يوقف الشركات عن الاقتراض بلا حد.' },
        example: { en: 'The ABC example assigns PV(distress) = $150,000.', ar: 'مثال ABC يخصّص PV(الضائقة) = 150,000 دولار.' },
        link: 'l5' }
    ]},

    { type: 'bigpicture', paras: [
      { en: 'Introduce taxes and everything changes: interest is paid before taxes, so every dollar of interest shields a dollar of profit from the taxman. The government, in effect, subsidises debt. M&M (1963) capture this with V<L> = V<U> + T<c>×D: the levered firm is worth the unlevered firm plus the present value of the tax shield.', ar: 'أدخل الضرائب ويتغير كل شيء: تُدفع الفائدة قبل الضرائب، لذا كل دولار فائدة يحمي دولارًا من الربح من يد الضرائب. الحكومة، في الواقع، تدعم الدين. ويلتقط موديغلياني وميلر (1963) هذا بـV<L> = V<U> + T<c>×D: الشركة ذات الرافعة تساوي قيمة الشركة بلا رافعة زائد القيمة الحالية للدرع الضريبي.' },
      { en: 'But then why is no real firm 100% debt? Because the tax advantage grows linearly with D while the expected costs of financial distress grow faster and faster as borrowing becomes dangerous. The trade-off theory sets V<L> = V<U> + T<c>D − PV(distress costs) and implies an interior optimum: moderate debt, not maximum debt.', ar: 'لكن لماذا لا توجد شركة حقيقية بدين 100%؟ لأن الميزة الضريبية تنمو خطيًا مع D بينما تنمو التكاليف المتوقعة للضائقة المالية أسرع فأسرع كلما صار الاقتراض خطرًا. نظرية المقايضة تضع V<L> = V<U> + T<c>D − PV(تكاليف الضائقة) وتستلزم أمثلية داخلية: دين معتدل لا دين أقصى.' }
    ], analogy: { en: 'A discount coupon (tax shield) makes borrowing cheaper, but borrowing too much raises the chance of a costly accident (distress). You use the coupon up to the point where the extra accident risk costs as much as the coupon saves.', ar: 'كوبون خصم (الدرع الضريبي) يجعل الاقتراض أرخص، لكن الاقتراض الزائد يرفع احتمال حادث مكلف (الضائقة). تستخدم الكوبون حتى النقطة التي تكلف فيها زيادة خطر الحادث بقدر ما يوفره الكوبون.' }, analogyLimit: { en: 'The “accident” is not a single event but a present value of many possible costs; and the coupon only exists while the firm has taxable profit to shield.', ar: '«الحادث» ليس حدثًا واحدًا بل قيمة الحالية لتكاليف كثيرة محتملة؛ والكوبون موجود فقط ما دامت الشركة لديها ربح خاضع للضريبة لتحميه.' } },

    { type: 'academic', paras: [
      { en: 'M&M Proposition I with taxes (1963): V<L> = V<U> + T<c>×D, where T<c>×D is the present value of the interest tax shield for perpetual debt. Debt becomes valuable because interest payments are tax-deductible.', ar: 'فرضية موديغلياني–ميلر I مع الضرائب (1963): ‏V<L> = V<U> + T<c>×D، حيث T<c>×D القيمة الحالية للدرع الضريبي للفائدة لدين دائم. ويصبح الدين ذا قيمة لأن مدفوعات الفائدة قابلة للخصم الضريبي.' },
      { en: 'Proposition II with taxes: K<e> = K<eu> + (1 − T<c>)(K<eu> − K<d>)(D/E). Because the tax shield partly compensates shareholders for the extra financial risk, K<e> rises more slowly with leverage than in the no-tax case, and the WACC declines as debt increases.', ar: 'فرضية II مع الضرائب: ‏K<e> = K<eu> + (1 − T<c>)(K<eu> − K<d>)(D/E). ولأن الدرع الضريبي يعوّض المساهمين جزئيًا عن المخاطر المالية الإضافية، يرتفع K<e> مع الرافعة أبطأ منه في حالة بلا ضرائب، وينخفض WACC مع زيادة الدين.' },
      { en: 'Trade-off theory: V<L> = V<U> + T<c>D − PV(financial distress costs). Implication from your slides: firms should use moderate levels of debt, not 100% debt, because excessive leverage increases bankruptcy risk.', ar: 'نظرية المقايضة: ‏V<L> = V<U> + T<c>D − PV(تكاليف الضائقة المالية). والاستنتاج من شرائحك: ينبغي للشركات استخدام مستويات معتدلة من الدين لا دينًا 100%، لأن الرافعة المفرطة تزيد خطر الإفلاس.' }
    ], defs: [
      { term: { en: 'PV of interest tax shield', ar: 'القيمة الحالية للدرع الضريبي للفائدة' }, def: { en: 'T<c> × D for perpetual debt at constant rate.', ar: '‏T<c> × D لدين دائم بمعدل ثابت.' } },
      { term: { en: 'Recapitalization', ar: 'إعادة هيكلة رأس المال' }, def: { en: 'Issuing debt to repurchase equity, changing the mix without changing the assets.', ar: 'إصدار دين لإعادة شراء حقوق ملكية، وتغيير المزيج دون تغيير الأصول.' } }
    ]},

    { type: 'simple', paras: [
      { en: 'Interest is deductible, so borrowing saves taxes every year forever. Add up those savings (T<c> × D) and you have extra firm value.', ar: 'الفائدة قابلة للخصم، لذا الاقتراض يوفر ضرائب كل سنة للأبد. اجمع تلك التوفيرات (T<c> × D) فتحصل على قيمة إضافية للشركة.' },
      { en: 'Shareholders still demand more return as debt rises, but less sharply than without taxes, because the tax saving partly pays for the extra risk.', ar: 'ما زال المساهمون يطلبون عائدًا أكثر مع ارتفاع الدين، لكن بحدة أقل منها بدون ضرائب، لأن التوفير الضريبي يدفع جزئيًا ثمن المخاطر الإضافية.' },
      { en: 'Stop adding debt when the next dollar of tax shield is outweighed by the next dollar of expected distress cost.', ar: 'توقف عن إضافة الدين عندما يفوق الدولار التالي من تكاليف الضائقة المتوقعة الدولار التالي من الدرع الضريبي.' }
    ], steps: [
      { en: 'V<L> = V<U> + T<c>×D.', ar: '‏V<L> = V<U> + T<c>×D.' },
      { en: 'E = V<L> − D; then D/E.', ar: '‏E = V<L> − D؛ ثم D/E.' },
      { en: 'K<e> = K<eu> + (1−T<c>)(K<eu> − K<d>)(D/E).', ar: '‏K<e> = K<eu> + (1−T<c>)(K<eu> − K<d>)(D/E).' },
      { en: 'WACC = (E/V)K<e> + (D/V)K<d>(1−T<c>) — check it is below K<eu>.', ar: '‏WACC = (E/V)K<e> + (D/V)K<d>(1−T<c>) — تحقق أنه دون K<eu>.' },
      { en: 'Trade-off: subtract PV(distress) from V<U> + T<c>D.', ar: 'المقايضة: اطرح PV(الضائقة) من V<U> + T<c>D.' }
    ], recap: { en: 'Taxes make debt valuable (shield); distress costs cap it; the optimum is interior and moderate.', ar: 'الضرائب تجعل الدين ذا قيمة (درع)؛ وتكاليف الضائقة تحدّه؛ والأمثلية داخلية ومعتدلة.' } },

    { type: 'formula', id: 'f-mm1t', tag: 'course', name: { en: 'M&M Proposition I (with taxes)', ar: 'فرضية موديغلياني–ميلر I (مع الضرائب)' },
      tex: 'V_{L} = V_{U} + T_{c} \\times D',
      vars: [ { sym: 'T_{c}', en: 'corporate tax rate', ar: 'معدل ضريبة الشركات' }, { sym: 'D', en: 'perpetual debt', ar: 'دين دائم' } ],
      purpose: { en: 'Add the tax shield to the unlevered value.', ar: 'إضافة الدرع الضريبي إلى القيمة بلا رافعة.' },
      assumptions: { en: 'Perpetual debt; constant tax rate; enough taxable income to use the shield; no distress costs in this version.', ar: 'دين دائم؛ معدل ضريبة ثابت؛ دخل خاضع كافٍ لاستخدام الدرع؛ بلا تكاليف ضائقة في هذه الصيغة.' },
      when: { en: 'Valuing a recapitalization under a corporate tax regime.', ar: 'تقييم إعادة هيكلة رأس مال في نظام ضريبة شركات.' },
      inputs: { en: 'V<U>, T<c>, D.', ar: '‏V<U> وT<c> وD.' },
      cautions: { en: 'If the firm has no taxable profit, the shield is worth less; if debt is not perpetual, discount the shield appropriately.', ar: 'إن لم يكن للشركة ربح خاضع للضريبة تقل قيمة الدرع؛ وإن لم يكن الدين دائمًا خصم الدرع بشكل مناسب.' },
      illustration: { en: '10,000,000 + 0.25×3,000,000 = 10,750,000.', ar: '‏10,000,000 + 0.25×3,000,000 = 10,750,000.' },
      sensitivity: { en: 'Value rises one-for-one with T<c>×D; doubling D doubles the shield.', ar: 'القيمة ترتفع واحد لواحد مع T<c>×D؛ ومضاعفة D تضاعف الدرع.' },
      meaning: { en: 'The extra value is money the firm no longer pays in tax because it pays interest instead of distributing profit.', ar: 'القيمة الإضافية مال لم تعد الشركة تدفعه ضرائب لأنها تدفع فوائد بدل توزيع الربح.' } },

    { type: 'formula', id: 'f-mm2t', tag: 'course', name: { en: 'M&M Proposition II (with taxes)', ar: 'فرضية موديغلياني–ميلر II (مع الضرائب)' },
      tex: 'K_{e} = K_{eu} + (1 - T_{c})(K_{eu} - K_{d}) \\times \\frac{D}{E}',
      vars: [ { sym: '(1 - T_{c})', en: 'tax adjustment factor', ar: 'معامل التعديل الضريبي' } ],
      purpose: { en: 'Levered cost of equity when interest is deductible.', ar: 'تكلفة حقوق الملكية ذات الرافعة عندما تكون الفائدة قابلة للخصم.' },
      assumptions: { en: 'As Proposition I with taxes.', ar: 'كما في فرضية I مع الضرائب.' },
      when: { en: 'Computing K<e> after a recapitalization; feeding WACC.', ar: 'حساب K<e> بعد إعادة هيكلة؛ وتغذية WACC.' },
      inputs: { en: 'K<eu>, K<d>, T<c>, D, E.', ar: '‏K<eu> وK<d> وT<c> وD وE.' },
      cautions: { en: 'Do not forget the (1−T<c>) factor; and use the with-tax E (= V<L> − D) in the ratio for internal consistency.', ar: 'لا تنسَ معامل (1−T<c>)؛ واستخدم E مع الضرائب (= V<L> − D) في النسبة للاتساق الداخلي.' },
      illustration: { en: '12% + (0.75)(6%)(0.3871) = 12% + 1.742% = 13.742%.', ar: '‏12% + (0.75)(6%)(0.3871) = 12% + 1.742% = 13.742%.' },
      sensitivity: { en: 'Higher T<c> flattens the rise of K<e> with D/E.', ar: '‏T<c> أعلى يجعل ارتفاع K<e> مع D/E أقل انحدارًا.' },
      meaning: { en: 'Shareholders’ required return net of the tax benefit that accrues to them.', ar: 'العائد المطلوب للمساهمين صافيًا من المنفعة الضريبية التي تعود عليهم.' } },

    { type: 'formula', id: 'f-tradeoff', tag: 'course', name: { en: 'Trade-off theory value', ar: 'قيمة نظرية المقايضة' },
      tex: 'V_{L} = V_{U} + T_{c} D - PV(\\text{Distress Costs})',
      vars: [ { sym: 'PV(\\text{Distress Costs})', en: 'present value of expected financial distress costs', ar: 'القيمة الحالية لتكاليف الضائقة المالية المتوقعة' } ],
      purpose: { en: 'Balance the tax advantage of debt against bankruptcy-related costs.', ar: 'موازنة الميزة الضريبية للدين مع التكاليف المرتبطة بالإفلاس.' },
      assumptions: { en: 'Distress costs can be estimated in present value; the shield and distress act additively.', ar: 'يمكن تقدير تكاليف الضائقة بقيمة حالية؛ والدرع والضائقة يعملان جمعيًا.' },
      when: { en: 'Explaining or choosing a moderate target debt level.', ar: 'تفسير أو اختيار مستوى دين مستهدف معتدل.' },
      inputs: { en: 'V<U>, T<c>, D, PV(distress).', ar: '‏V<U> وT<c> وD وPV(الضائقة).' },
      cautions: { en: 'It is a framing model: PV(distress) is hard to estimate precisely in practice.', ar: 'نموذج إطاري: ‏PV(الضائقة) يصعب تقديره بدقة عمليًا.' },
      illustration: { en: '5,000,000 + 0.30(1,000,000) − 150,000 = 5,150,000.', ar: '‏5,000,000 + 0.30(1,000,000) − 150,000 = 5,150,000.' },
      sensitivity: { en: 'As D rises the shield grows linearly but distress PV accelerates, producing a value-maximising interior D.', ar: 'مع ارتفاع D ينمو الدرع خطيًا لكن PV الضائقة يتسارع، منتجًا D داخليًا معظمًا للقيمة.' },
      meaning: { en: 'Firm value net of both the tax subsidy and the expected costs of possible bankruptcy.', ar: 'قيمة الشركة صافية من كل من الدعم الضريبي والتكاليف المتوقعة للإفلاس الممكن.' } },

    { type: 'example', title: { en: 'Course example — Firm A recapitalizes (T<c> = 25%)', ar: 'مثال المقرر — الشركة A تعيد هيكلة رأس مالها (‏T<c> = 25%)' },
      context: { en: 'Firm A is all-equity with V<U> = $10,000,000, K<eu> = 12%, T<c> = 25%. It issues $3,000,000 perpetual debt at K<d> = 6% to repurchase equity. Find V<L>, E, D/E and K<e>.', ar: 'الشركة A ممولة بالكامل بحقوق الملكية بـV<U> = 10,000,000 دولار وK<eu> = 12% وT<c> = 25%. تصدر دينًا دائمًا 3,000,000 دولار بـK<d> = 6% لإعادة شراء حقوق ملكية. أوجد V<L> وE وD/E وK<e>.' },
      source: { en: 'Lecture 2, slides 11–12', ar: 'المحاضرة 2، الشريحتان 11–12' },
      steps: [
        { kind: 'understand', body: { en: 'A pure recapitalization: assets unchanged, mix changed, taxes present.', ar: 'إعادة هيكلة نقية: الأصول لا تتغير والمزيج يتغير والضرائب موجودة.' } },
        { kind: 'given', body: { en: 'V<U>=10,000,000; T<c>=25%; D=3,000,000; K<d>=6%; K<eu>=12%.', ar: '‏V<U>=10,000,000؛ ‏T<c>=25%؛ ‏D=3,000,000؛ ‏K<d>=6%؛ ‏K<eu>=12%.' } },
        { kind: 'unknown', body: { en: 'V<L>, E, D/E, K<e>.', ar: '‏V<L> وE وD/E وK<e>.' } },
        { kind: 'method', body: { en: 'Proposition I with taxes, residual equity, ratio, Proposition II with taxes.', ar: 'فرضية I مع الضرائب، وحقوق الملكية المتبقية، والنسبة، وفرضية II مع الضرائب.' } },
        { kind: 'sub', body: { en: 'V<L> = 10,000,000 + (0.25×3,000,000); E = 10,750,000 − 3,000,000; D/E = 3,000,000 ÷ 7,750,000; K<e> = 12% + (1−0.25)(12%−6%)(0.3871).', ar: '‏V<L> = 10,000,000 + (0.25×3,000,000)؛ ‏E = 10,750,000 − 3,000,000؛ ‏D/E = 3,000,000 ÷ 7,750,000؛ ‏K<e> = 12% + (1−0.25)(12%−6%)(0.3871).' }, math: ['V_{L} = 10{,}750{,}000', 'E = 7{,}750{,}000', 'D/E \\approx 0.3871', 'K_{e} = 13.742\\%'] },
        { kind: 'calc', body: { en: 'V<L> = $10,750,000; E = $7,750,000; D/E ≈ 0.3871; K<e> = 12% + 1.742% = 13.742%.', ar: '‏V<L> = 10,750,000 دولار؛ ‏E = 7,750,000؛ ‏D/E ≈ 0.3871؛ ‏K<e> = 12% + 1.742% = 13.742%.' } },
        { kind: 'interpret', body: { en: 'The recapitalization created $750,000 of value — exactly the tax shield. Shareholders’ required return rose only to 13.742% (versus 14.5% it would reach without the tax adjustment at this D/E).', ar: 'إعادة الهيكلة خلقت 750,000 دولار من القيمة — بالضبط الدرع الضريبي. وارتفع العائد المطلوب للمساهمين إلى 13.742% فقط (مقابل 14.5% كان سيبلغها بدون التعديل الضريبي عند هذا D/E).' } },
        { kind: 'verify', body: { en: 'Shield = 0.25 × 3,000,000 = 750,000 = V<L> − V<U> ✓.', ar: 'الدرع = 0.25 × 3,000,000 = 750,000 = V<L> − V<U> ✓.' } }
      ]},

    { type: 'example', title: { en: 'Course example — 15% unlevered, 10% debt, D/E = 1, T<c> = 20%  ⚠ flagged', ar: 'مثال المقرر — 15% بلا رافعة ودين 10% وD/E = 1 وT<c> = 20%  ⚠ مُعلَّم' },
      context: { en: 'An unlevered company has cost of equity 15%. It takes a loan at 10% and buys back equity, reaching D/E = 1:1. T<c> = 20%. The slide states: K<e> = 15% + (1−0.20)(15%−10%)×1 = 15% + 4% = 20%, and WACC = (0.5×20%) + (0.5×10%×(1−0.20)) = 10% + 4% = 14%.', ar: 'شركة بلا رافعة تكلفة حقوق ملكيتها 15%. تأخذ قرضًا بفائدة 10% وتعيد شراء حقوق ملكية لتصل D/E = 1:1. ‏T<c> = 20%. تذكر الشريحة: ‏K<e> = 15% + (1−0.20)(15%−10%)×1 = 15% + 4% = 20%، وWACC = (0.5×20%) + (0.5×10%×(1−0.20)) = 10% + 4% = 14%.' },
      source: { en: 'Lecture 2, slide 13', ar: 'المحاضرة 2، الشريحة 13' },
      steps: [
        { kind: 'understand', body: { en: 'Reproduce the slide’s method, then audit its arithmetic.', ar: 'أعد إنتاج طريقة الشريحة ثم دقّق حسابها.' } },
        { kind: 'given', body: { en: 'K<eu>=15%; K<d>=10%; D/E=1; T<c>=20%; weights 0.5/0.5.', ar: '‏K<eu>=15%؛ ‏K<d>=10%؛ ‏D/E=1؛ ‏T<c>=20%؛ الأوزان 0.5/0.5.' } },
        { kind: 'unknown', body: { en: 'K<e> and WACC.', ar: '‏K<e> وWACC.' } },
        { kind: 'method', body: { en: 'Proposition II with taxes, then WACC.', ar: 'فرضية II مع الضرائب ثم WACC.' } },
        { kind: 'sub', body: { en: 'K<e> = 15% + (0.80)(5%)(1) = 15% + 4%.', ar: '‏K<e> = 15% + (0.80)(5%)(1) = 15% + 4%.' }, math: ['K_{e} = 15\\% + 4\\%'] },
        { kind: 'calc', body: { en: '15% + 4% = 19%. The slide prints 20%. Using the slide’s 20%: WACC = 0.5(20%) + 0.5(10%)(0.8) = 10% + 4% = 14%. Using the arithmetically correct 19%: WACC = 0.5(19%) + 0.5(8%) = 9.5% + 4% = 13.5%.', ar: '‏15% + 4% = 19%. تطبع الشريحة 20%. وباستخدام 20% التي في الشريحة: ‏WACC = 0.5(20%) + 0.5(10%)(0.8) = 10% + 4% = 14%. وباستخدام 19% الصحيحة حسابيًا: ‏WACC = 0.5(19%) + 0.5(8%) = 9.5% + 4% = 13.5%.' } },
        { kind: 'interpret', body: { en: 'Either way the lesson’s point stands: with taxes, leverage lowers WACC below K<eu> = 15% and raises firm value. The exact numbers, however, contain an arithmetic slip in the source.', ar: 'في الحالتين تبقى نقطة الدرس قائمة: مع الضرائب تخفض الرافعة WACC دون K<eu> = 15% وترفع قيمة الشركة. لكن الأرقام بالضبط تحتوي زلة حسابية في المصدر.' } },
        { kind: 'verify', body: { en: '15 + 4 = 19, not 20. We flag this rather than silently “fixing” the slide; check with your instructor which figures are examinable.', ar: '‏15 + 4 = 19 لا 20. نعلّم هذا بدل «إصلاح» الشريحة بصمت؛ وراجع مدرسك أي الأرقام قابلة للامتحان.' } }
      ]},

    { type: 'example', title: { en: 'Course example — ABC: no-tax vs with-tax vs trade-off (parts A–G)', ar: 'مثال المقرر — ‏ABC: بلا ضرائب مقابل مع ضرائب مقابل المقايضة (الأجزاء أ–ز)' },
      context: { en: 'ABC is unlevered with K<eu> = 14%, V<U> = $5,000,000, T<c> = 30%. It issues $1,000,000 debt at K<d> = 8% to repurchase equity. The slide states post-recapitalization D = $1,000,000 and E = $4,000,000. Required: A) D/E; B) V<L> (no taxes); C) K<e> (no taxes); D) V<L> (with taxes); E) K<e> (with taxes); F) V<L> with PV(distress) = $150,000; G) WACC using part E’s K<e>.', ar: '‏ABC بلا رافعة بـK<eu> = 14% وV<U> = 5,000,000 دولار وT<c> = 30%. تصدر دينًا 1,000,000 دولار بـK<d> = 8% لإعادة شراء حقوق ملكية. تذكر الشريحة بعد إعادة الهيكلة D = 1,000,000 دولار وE = 4,000,000 دولار. المطلوب: أ) ‏D/E؛ ب) ‏V<L> (بلا ضرائب)؛ ج) ‏K<e> (بلا ضرائب)؛ د) ‏V<L> (مع الضرائب)؛ هـ) ‏K<e> (مع الضرائب)؛ و) ‏V<L> مع PV(الضائقة) = 150,000 دولار؛ ز) ‏WACC باستخدام K<e> من الجزء هـ.' },
      source: { en: 'Lecture 2, slides 15–16', ar: 'المحاضرة 2، الشريحتان 15–16' },
      steps: [
        { kind: 'given', body: { en: 'K<eu>=14%; K<d>=8%; T<c>=30%; V<U>=5,000,000; D=1,000,000; E=4,000,000 (as given); PV(distress)=150,000.', ar: '‏K<eu>=14%؛ ‏K<d>=8%؛ ‏T<c>=30%؛ ‏V<U>=5,000,000؛ ‏D=1,000,000؛ ‏E=4,000,000 (كما أُعطي)؛ ‏PV(الضائقة)=150,000.' } },
        { kind: 'calc', body: { en: 'A) D/E = 1,000,000 ÷ 4,000,000 = 0.25. B) V<L> = V<U> = $5,000,000. C) K<e> = 14% + (14%−8%)(0.25) = 15.5%. D) V<L> = 5,000,000 + 0.30(1,000,000) = $5,300,000. E) K<e> = 14% + (0.70)(6%)(0.25) = 14% + 1.05% = 15.05%. F) V<L> = 5,000,000 + 300,000 − 150,000 = $5,150,000. G) WACC = (4/5)(15.05%) + (1/5)(8%)(0.70) = 12.04% + 1.12% = 13.16%.', ar: '‏أ) ‏D/E = 1,000,000 ÷ 4,000,000 = 0.25. ب) ‏V<L> = V<U> = 5,000,000 دولار. ج) ‏K<e> = 14% + (14%−8%)(0.25) = 15.5%. د) ‏V<L> = 5,000,000 + 0.30(1,000,000) = 5,300,000 دولار. هـ) ‏K<e> = 14% + (0.70)(6%)(0.25) = 14% + 1.05% = 15.05%. و) ‏V<L> = 5,000,000 + 300,000 − 150,000 = 5,150,000 دولار. ز) ‏WACC = (4/5)(15.05%) + (1/5)(8%)(0.70) = 12.04% + 1.12% = 13.16%.' }, math: ['D/E = 0.25', 'V_{L}^{no\\,tax} = 5{,}000{,}000', 'K_{e}^{no\\,tax} = 15.5\\%', 'V_{L}^{tax} = 5{,}300{,}000', 'K_{e}^{tax} = 15.05\\%', 'V_{L}^{tradeoff} = 5{,}150{,}000', 'WACC = 13.16\\%'] },
        { kind: 'interpret', body: { en: 'The same recapitalization is value-neutral without taxes, adds $300,000 with taxes, and adds $150,000 once distress costs are recognised. WACC (13.16%) sits below K<eu> (14%), showing the tax advantage of debt.', ar: 'نفس إعادة الهيكلة محايدة القيمة بدون ضرائب، وتضيف 300,000 دولار مع الضرائب، وتضيف 150,000 دولار بمجرد الاعتراف بتكاليف الضائقة. وWACC (‏13.16%) يقع دون K<eu> (‏14%)، ما يظهر الميزة الضريبية للدين.' } },
        { kind: 'verify', body: { en: 'Note an internal inconsistency in the source: with taxes, E should be V<L> − D = 5,300,000 − 1,000,000 = 4,300,000 (D/E ≈ 0.2326), and part G’s weights (4/5, 1/5) use V = 5,000,000 rather than V<L> = 5,300,000. The slide instead gives E = 4,000,000 as a premise. We reproduce the slide’s figures and flag the inconsistency for your instructor.', ar: 'لاحظ عدم اتساق داخلي في المصدر: مع الضرائب ينبغي أن تكون E = V<L> − D = 5,300,000 − 1,000,000 = 4,300,000 (‏D/E ≈ 0.2326)، وأوزان الجزء ز (4/5 و1/5) تستخدم V = 5,000,000 لا V<L> = 5,300,000. بدل ذلك تعطي الشريحة E = 4,000,000 كفرض. نعيد إنتاج أرقام الشريحة ونعلّم عدم الاتساق لمدرسك.' } }
      ]},

    { type: 'visual', kind: 'stacked', caption: { en: 'ABC’s value under three theories: no taxes ($5.00m), with taxes ($5.30m = 5.00 + 0.30 shield), trade-off ($5.15m after $0.15m distress).', ar: 'قيمة ABC وفق ثلاث نظريات: بلا ضرائب (5.00 مليون)، ومع الضرائب (5.30 = 5.00 + درع 0.30)، والمقايضة (5.15 بعد ضائقة 0.15).' },
      cfg: { rows: [
        { label: { en: 'No taxes', ar: 'بلا ضرائب' }, parts: [ { name: { en: 'V<U>', ar: '‏V<U>' }, value: 5000000, color: '#1f3a5f' } ] },
        { label: { en: 'With taxes', ar: 'مع الضرائب' }, parts: [ { name: { en: 'V<U>', ar: '‏V<U>' }, value: 5000000, color: '#1f3a5f' }, { name: { en: 'Tax shield T<c>D', ar: 'الدرع الضريبي T<c>D' }, value: 300000, color: '#0e7c86' } ] },
        { label: { en: 'Trade-off', ar: 'المقايضة' }, parts: [ { name: { en: 'V<U>', ar: '‏V<U>' }, value: 5000000, color: '#1f3a5f' }, { name: { en: 'Tax shield T<c>D', ar: 'الدرع الضريبي T<c>D' }, value: 300000, color: '#0e7c86' }, { name: { en: '− PV(distress)', ar: '− PV(الضائقة)' }, value: 150000, color: '#b23a48' } ] }
      ], fmt: 'm' } },

    { type: 'flags', items: [
      { en: 'Slide 13 prints “15% + 4% = 20%”. Arithmetically 15% + 4% = 19%; the accompanying WACC of 14% follows from the printed 20% (with 19% it would be 13.5%). Reproduced as printed and flagged.', ar: 'الشريحة 13 تطبع «15% + 4% = 20%». حسابيًا 15% + 4% = 19%؛ وWACC المرافق 14% يتبع 20% المطبوعة (مع 19% سيكون 13.5%). أُعيد الإنتاج كما طُبِع وعُلِّم.' },
      { en: 'Slides 15–16 give E = $4,000,000 after a with-tax recapitalization whose V<L> = $5,300,000, implying E = $4,300,000; part G’s WACC weights use V = $5,000,000. Reproduced as given and flagged.', ar: 'الشريحتان 15–16 تعطيان E = 4,000,000 دولار بعد إعادة هيكلة مع ضرائب قيمتها V<L> = 5,300,000 دولار، ما يستلزم E = 4,300,000 دولار؛ وأوزان WACC في الجزء ز تستخدم V = 5,000,000 دولار. أُعيد الإنتاج كما أُعطي وعُلِّم.' }
    ]},

    { type: 'mistakes', items: [
      { wrong: { en: 'Using the no-tax Proposition II when a tax rate is given.', ar: 'استخدام فرضية II بلا ضرائب عندما يُعطى معدل ضريبة.' },
        why: { en: 'The (1−T<c>) factor materially lowers the leverage premium.', ar: 'معامل (1−T<c>) يخفض علاوة الرافعة بشكل جوهري.' },
        correct: { en: 'With T<c>=30%, the premium is 0.7×(K<eu>−K<d>)×D/E, not the full spread.', ar: 'مع T<c>=30% العلاوة 0.7×(K<eu>−K<d>)×D/E لا الفارق كاملًا.' },
        illus: { en: 'ABC part E: 1.05% with taxes vs 1.5% without.', ar: 'الجزء هـ من ABC: ‏1.05% مع الضرائب مقابل 1.5% بدونها.' } },
      { wrong: { en: 'Concluding from M&M with taxes that firms should be 100% debt.', ar: 'الاستنتاج من موديغلياني–ميلر مع الضرائب أن على الشركات دينًا 100%.' },
        why: { en: 'That ignores distress costs; the trade-off theory caps optimal debt.', ar: 'هذا يتجاهل تكاليف الضائقة؛ ونظرية المقايضة تحد الدين الأمثل.' },
        correct: { en: 'Optimum is interior: moderate debt (your slides’ explicit implication).', ar: 'الأمثلية داخلية: دين معتدل (استنتاج شرائحك الصريح).' },
        illus: { en: 'Adding PV(distress)=150,000 cut ABC’s gain from 300,000 to 150,000.', ar: 'إضافة PV(الضائقة)=150,000 خفضت مكسب ABC من 300,000 إلى 150,000.' } },
      { wrong: { en: 'Treating T<c>×D as an annual saving instead of a present value.', ar: 'معاملة T<c>×D كتوفير سنوي بدل قيمة حالية.' },
        why: { en: 'T<c>×D is the PV of the perpetual stream T<c>×(K<d>D) discounted at K<d>.', ar: '‏T<c>×D هي القيمة الحالية للسيل الدائم T<c>×(K<d>D) مخصومًا بـK<d>.' },
        correct: { en: 'Annual saving = T<c>×K<d>×D; PV = that ÷ K<d> = T<c>×D.', ar: 'التوفير السنوي = T<c>×K<d>×D؛ والقيمة الحالية = ذلك ÷ K<d> = T<c>×D.' },
        illus: { en: 'Firm A: annual shield = 0.25×6%×3m = $45,000; PV = 45,000 ÷ 0.06 = $750,000.', ar: 'الشركة A: الدرع السنوي = 0.25×6%×3 مليون = 45,000 دولار؛ والقيمة الحالية = 45,000 ÷ 0.06 = 750,000 دولار.' } }
    ]},

    { type: 'quiz', items: [
      { type: 'mcq', q: { en: 'V<U> = $8,000,000, T<c> = 30%, D = $2,000,000 perpetual. V<L> =', ar: '‏V<U> = 8,000,000 دولار وT<c> = 30% وD = 2,000,000 دولار دائم. ‏V<L> =' },
        options: [ { en: '$8,600,000', ar: '8,600,000 دولار' }, { en: '$8,000,000', ar: '8,000,000 دولار' }, { en: '$10,000,000', ar: '10,000,000 دولار' }, { en: '$8,240,000', ar: '8,240,000 دولار' } ], answer: 0,
        explain: { en: '8,000,000 + 0.30×2,000,000 = 8,600,000.', ar: '‏8,000,000 + 0.30×2,000,000 = 8,600,000.' } },
      { type: 'num', q: { en: 'K<eu>=10%, K<d>=5%, T<c>=40%, D/E=0.5. K<e> with taxes = ? (%)', ar: '‏K<eu>=10% وK<d>=5% وT<c>=40% وD/E=0.5. ‏K<e> مع الضرائب = ؟ (%)' },
        answer: 11.5, tol: 0.05, unit: '%',
        explain: { en: '10% + (0.6)(5%)(0.5) = 10% + 1.5% = 11.5%.', ar: '‏10% + (0.6)(5%)(0.5) = 10% + 1.5% = 11.5%.' } },
      { type: 'mcq', q: { en: 'The trade-off theory explains why firms:', ar: 'نظرية المقايضة تفسر لماذا الشركات:' },
        options: [ { en: 'Use moderate, not maximum, debt', ar: 'تستخدم دينًا معتدلًا لا أقصى' }, { en: 'Never use debt', ar: 'لا تستخدم الدين أبدًا' }, { en: 'Always use 100% debt', ar: 'تستخدم دينًا 100% دائمًا' }, { en: 'Ignore taxes', ar: 'تتجاهل الضرائب' } ], answer: 0,
        explain: { en: 'Tax shield gains are traded off against rising PV of distress costs (lecture slide 14).', ar: 'مكاسب الدرع الضريبي تُقايض مقابل PV متصاعد لتكاليف الضائقة (شريحة المحاضرة 14).' } }
    ]},

    { type: 'flash', items: [
      { front: { en: 'M&M I (with taxes)', ar: 'فرضية موديغلياني–ميلر I (مع الضرائب)' }, back: { en: 'V<L> = V<U> + T<c>D', ar: '‏V<L> = V<U> + T<c>D' } },
      { front: { en: 'M&M II (with taxes)', ar: 'فرضية موديغلياني–ميلر II (مع الضرائب)' }, back: { en: 'K<e> = K<eu> + (1−T<c>)(K<eu>−K<d>)(D/E)', ar: '‏K<e> = K<eu> + (1−T<c>)(K<eu>−K<d>)(D/E)' } },
      { front: { en: 'Trade-off theory', ar: 'نظرية المقايضة' }, back: { en: 'V<L> = V<U> + T<c>D − PV(distress)', ar: '‏V<L> = V<U> + T<c>D − PV(الضائقة)' } }
    ]},

    { type: 'summary', points: [
      { en: 'Interest deductibility creates a tax shield worth T<c>×D for perpetual debt.', ar: 'قابلية الفائدة للخصم تخلق درعًا ضريبيًا قيمته T<c>×D لدين دائم.' },
      { en: 'With taxes: V<L> = V<U> + T<c>D; K<e> rises more slowly; WACC falls with leverage.', ar: 'مع الضرائب: V<L> = V<U> + T<c>D؛ ويرتفع K<e> أبطأ؛ وينخفض WACC مع الرافعة.' },
      { en: 'Trade-off: subtract PV(distress); optimal debt is moderate.', ar: 'المقايضة: اطرح PV(الضائقة)؛ والدين الأمثل معتدل.' },
      { en: 'Two source figures are flagged for review (slide 13 arithmetic; slides 15–16 equity value/weights).', ar: 'رُقمان في المصدر مُعلّمان للمراجعة (حساب الشريحة 13؛ وقيمة/أوزان حقوق الملكية في الشريحتين 15–16).' }
    ], canExplain: [
      { en: 'Why the tax shield is a present value, not an annual amount.', ar: 'لماذا الدرع الضريبي قيمة حالية لا مبلغ سنوي.' },
      { en: 'Why WACC falls with debt only when taxes exist.', ar: 'لماذا ينخفض WACC مع الدين فقط عند وجود ضرائب.' },
      { en: 'What determines the interior optimum in the trade-off theory.', ar: 'ما الذي يحدد الأمثلية الداخلية في نظرية المقايضة.' }
    ]}
  ]
});
