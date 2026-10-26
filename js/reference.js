/* ============================================================
   REFERENCE DATA — symbols & abbreviations used across the course.
   Each entry links to the lesson where it is taught, so the
   top-bar "Symbols & abbreviations" window can group entries by
   chapter/module automatically. Add new symbols here and they
   appear in the window with no other code changes.
   ============================================================ */
window.ABBREV = [
  /* ---------- Module 1 / Chapter 8 ---------- */
  { sym: 'r_{t}', abbr: 'r', lesson: 'l1', en: 'rate of return during period t', ar: 'معدل العائد خلال الفترة t' },
  { sym: 'P_{t}', abbr: 'P', lesson: 'l1', en: 'value (price) of the asset at end of period t', ar: 'قيمة (سعر) الأصل في نهاية الفترة t' },
  { sym: 'P_{t-1}', abbr: 'P', lesson: 'l1', en: 'value (price) of the asset at beginning of period t', ar: 'قيمة (سعر) الأصل في بداية الفترة t' },
  { sym: 'C_{t}', abbr: 'C', lesson: 'l1', en: 'cash flow received during period t (e.g. dividend)', ar: 'التدفق النقدي المستلم خلال الفترة t (مثل التوزيعات)' },
  { sym: '\\bar{r}', abbr: 'r̄', lesson: 'l2', en: 'expected value of a return', ar: 'القيمة المتوقعة للعائد' },
  { sym: 'Pr_{i}', abbr: 'Pr', lesson: 'l2', en: 'probability of outcome i', ar: 'احتمال النتيجة i' },
  { sym: '\\sigma_{r}', abbr: 'σ', lesson: 'l2', en: 'standard deviation of returns', ar: 'الانحراف المعياري للعوائد' },
  { sym: 'CV', abbr: 'CV', lesson: 'l2', en: 'coefficient of variation (risk per unit of return)', ar: 'معامل الاختلاف (المخاطر لكل وحدة عائد)' },
  { sym: 'w_{i}', abbr: 'w', lesson: 'l3', en: 'portfolio weight of asset i', ar: 'وزن الأصل i في المحفظة' },
  { sym: 'r_{p}', abbr: 'rp', lesson: 'l3', en: 'portfolio return', ar: 'عائد المحفظة' },
  { sym: 'b_{j}', abbr: 'b', lesson: 'l4', en: 'beta of asset j (non-diversifiable risk index)', ar: 'بيتا الأصل j (مؤشر المخاطر غير القابلة للتنويع)' },
  { sym: 'b_{p}', abbr: 'bp', lesson: 'l3', en: 'portfolio beta', ar: 'بيتا المحفظة' },
  { sym: 'R_{F}', abbr: 'RF', lesson: 'l4', en: 'risk-free rate of return (U.S. T-bill)', ar: 'المعدل الخالي من المخاطر (أذون الخزانة الأمريكية)' },
  { sym: 'r_{m}', abbr: 'rm', lesson: 'l4', en: 'market return (market portfolio)', ar: 'عائد السوق (محفظة السوق)' },
  { sym: 'r_{m} - R_{F}', abbr: 'MRP', lesson: 'l4', en: 'market risk premium (SML slope)', ar: 'علاوة مخاطر السوق (ميل خط SML)' },
  { sym: 'CAPM', abbr: 'CAPM', lesson: 'l4', en: 'Capital Asset Pricing Model', ar: 'نموذج تسعير الأصول الرأسمالية' },
  { sym: 'SML', abbr: 'SML', lesson: 'l4', en: 'Security Market Line', ar: 'خط سوق الأوراق المالية' },

  /* ---------- Module 2 / Chapter 13 ---------- */
  { sym: 'EBIT', abbr: 'EBIT', lesson: 'l5', en: 'earnings before interest and taxes (operating profit)', ar: 'الأرباح قبل الفوائد والضرائب (الربح التشغيلي)' },
  { sym: 'EPS', abbr: 'EPS', lesson: 'l7', en: 'earnings per share', ar: 'ربحية السهم' },
  { sym: 'V_{L}', abbr: 'VL', lesson: 'l5', en: 'value of a levered firm', ar: 'قيمة الشركة ذات الرافعة المالية' },
  { sym: 'V_{U}', abbr: 'VU', lesson: 'l5', en: 'value of an unlevered firm', ar: 'قيمة الشركة بلا رافعة مالية' },
  { sym: 'D/E', abbr: 'D/E', lesson: 'l5', en: 'debt-to-equity ratio', ar: 'نسبة الدين إلى حقوق الملكية' },
  { sym: 'K_{e}', abbr: 'Ke', lesson: 'l5', en: 'cost of equity of a levered firm', ar: 'تكلفة حقوق الملكية لشركة ذات رافعة' },
  { sym: 'K_{eu}', abbr: 'Keu', lesson: 'l5', en: 'unlevered cost of equity', ar: 'تكلفة حقوق الملكية بلا رافعة' },
  { sym: 'K_{d}', abbr: 'Kd', lesson: 'l5', en: 'cost of debt', ar: 'تكلفة الدين' },
  { sym: 'T_{c}', abbr: 'Tc', lesson: 'l6', en: 'corporate tax rate', ar: 'معدل ضريبة الشركات' },
  { sym: 'T_{c} \\times D', abbr: 'Tax shield', lesson: 'l6', en: 'present value of the interest tax shield (perpetual debt)', ar: 'القيمة الحالية للدرع الضريبي للفائدة (دين دائم)' },
  { sym: 'PV', abbr: 'PV', lesson: 'l6', en: 'present value', ar: 'القيمة الحالية' },
  { sym: 'WACC', abbr: 'WACC', lesson: 'l5', en: 'weighted average cost of capital', ar: 'متوسط تكلفة رأس المال المرجح' },
  { sym: 'M&M', abbr: 'M&M', lesson: 'l5', en: 'Modigliani and Miller propositions', ar: 'فرضيتا موديغلياني وميلر' },
  { sym: 'I', abbr: 'I', lesson: 'l7', en: 'total interest expense (old + new)', ar: 'إجمالي مصروف الفائدة (قديم + جديد)' },
  { sym: 'N', abbr: 'N', lesson: 'l7', en: 'number of ordinary shares', ar: 'عدد الأسهم العادية' },
  { sym: 'Pref', abbr: 'Pref', lesson: 'l7', en: 'preference dividends', ar: 'التوزيعات التفضيلية' },
  { sym: 'T', abbr: 'T', lesson: 'l7', en: 'tax rate (EBIT–EPS approach)', ar: 'معدل الضريبة (مدخل EBIT–EPS)' },
  { sym: 'r_{s}', abbr: 'rs', lesson: 'l8', en: 'estimated required return on equity', ar: 'العائد المطلوب المقدر على حقوق الملكية' },
  { sym: 'P', abbr: 'P', lesson: 'l8', en: 'estimated share value (zero-growth model)', ar: 'قيمة السهم المقدرة (نموذج النمو الصفري)' },
  { sym: 'D, E, V', abbr: 'D/E/V', lesson: 'l5', en: 'debt, equity and total market value (V = D + E)', ar: 'الدين وحقوق الملكية والقيمة السوقية الكلية (V = D + E)' },

  /* ---------- Module 3 / Chapter 14 ---------- */
  { sym: 'DPS', abbr: 'DPS', lesson: 'l9', en: 'dividends per share (cash dividend per share)', ar: 'التوزيعات للسهم (التوزيع النقدي للسهم)' },
  { sym: 'Ex-date', abbr: 'Ex', lesson: 'l9', en: 'ex-dividend date (record date − 2 business days)', ar: 'تاريخ عدم استحقاق التوزيعات (تاريخ القيد − يومي عمل)' },
  { sym: 'DRIP', abbr: 'DRIP', lesson: 'l12', en: 'dividend reinvestment plan', ar: 'خطة إعادة استثمار التوزيعات' },
  { sym: 'Par', abbr: 'par', lesson: 'l11', en: 'par (face) value per share', ar: 'القيمة الاسمية (الوجهية) للسهم' },
  { sym: 'PIC', abbr: 'PIC', lesson: 'l11', en: 'paid-in capital in excess of par', ar: 'رأس المال المدفوع الإضافي فوق القيمة الاسمية' },
  { sym: 'RE', abbr: 'RE', lesson: 'l11', en: 'retained earnings', ar: 'الأرباح المحتجزة' },
  { sym: 'N_{rep}', abbr: 'Nrep', lesson: 'l12', en: 'shares repurchased in a buyback', ar: 'الأسهم المعاد شراؤها في عملية شراء' }
];
