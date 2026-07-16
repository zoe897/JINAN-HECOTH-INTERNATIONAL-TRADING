// ============================================================
//  🌾 产品数据管理文件 - 多语言版本
//  支持6种语言: en, es, fr, ar, ru, pt
// ============================================================

// ============================================================
//  一级分类定义（5个大类）
// ============================================================
const Categories = {
    // 🚜 拖拉机
    tractors: {
        en: "Tractors",
        es: "Tractores",
        fr: "Tracteurs",
        ar: "جرارات",
        ru: "Тракторы",
        pt: "Tratores"
    },
    // 🌾 农机具（一级分类）
    "farm-machinery": {
        en: "Farm Machinery",
        es: "Maquinaria Agrícola",
        fr: "Machines Agricoles",
        ar: "آلات زراعية",
        ru: "Сельхозтехника",
        pt: "Máquinas Agrícolas"
    },
    // 🏗️ 工程机械
    "construction-machinery": {
        en: "Construction Machinery",
        es: "Maquinaria de Construcción",
        fr: "Engins de Construction",
        ar: "معدات بناء",
        ru: "Строительная техника",
        pt: "Máquinas de Construção"
    },
    // 💧 灌溉设备
    irrigation: {
        en: "Irrigation Equipment",
        es: "Equipo de Riego",
        fr: "Équipement d'Irrigation",
        ar: "معدات الري",
        ru: "Поливное оборудование",
        pt: "Equipamento de Irrigação"
    },
    // 🔧 配件
    parts: {
        en: "Spare Parts",
        es: "Repuestos",
        fr: "Pièces Détachées",
        ar: "قطع الغيار",
        ru: "Запасные части",
        pt: "Peças de Reposição"
    },
};

// ============================================================
//  二级分类定义（农机具下的细分）
//  用于产品详情页显示子分类标签
// ============================================================
const SubCategories = {
    // 耕整地机械
    tillage: {
        en: "Tillage Equipment",
        es: "Equipo de Labranza",
        fr: "Matériel de Travail du Sol",
        ar: "معدات الحراثة",
        ru: "Почвообрабатывающее оборудование",
        pt: "Equipamento de Preparo do Solo"
    },
    // 播种机械
    planting: {
        en: "Planting Equipment",
        es: "Equipo de Siembra",
        fr: "Matériel de Plantation",
        ar: "معدات الزراعة",
        ru: "Посевное оборудование",
        pt: "Equipamento de Plantio"
    },
    // 中耕管理机械
    cultivation: {
        en: "Cultivation Equipment",
        es: "Equipo de Cultivo",
        fr: "Matériel de Culture",
        ar: "معدات العناية بالمحاصيل",
        ru: "Оборудование для обработки",
        pt: "Equipamento de Cultivo"
    },
    // 收获机械
    harvesting: {
        en: "Harvesting Equipment",
        es: "Equipo de Cosecha",
        fr: "Matériel de Récolte",
        ar: "معدات الحصاد",
        ru: "Уборочное оборудование",
        pt: "Equipamento de Colheita"
    },
    // 割草机械
    mowing: {
        en: "Mowing Equipment",
        es: "Equipo de Corte",
        fr: "Matériel de Fauche",
        ar: "معدات القص",
        ru: "Косилки",
        pt: "Equipamento de Corte"
    },
    // 施肥机械
    fertilizing: {
        en: "Fertilizing Equipment",
        es: "Equipo de Fertilización",
        fr: "Matériel de Fertilisation",
        ar: "معدات التسميد",
        ru: "Удобрительное оборудование",
        pt: "Equipamento de Fertilização"
    },
    // 其他农机具
    "other-farm": {
        en: "Other Farm Equipment",
        es: "Otros Equipos Agrícolas",
        fr: "Autres Équipements Agricoles",
        ar: "معدات زراعية أخرى",
        ru: "Прочее сельхозоборудование",
        pt: "Outros Equipamentos Agrícolas"
    },
};

// ============================================================
//  分类图标映射
// ============================================================
const CategoryIcons = {
    tractors: "🚜",
    "farm-machinery": "🌾",
    "construction-machinery": "🏗️",
    irrigation: "💧",
    parts: "🔧"
};

const SubCategoryIcons = {
    tillage: "🌾",
    planting: "🌱",
    cultivation: "🌿",
    harvesting: "🌽",
    mowing: "✂️",
    fertilizing: "🧪",
    "other-farm": "🔩"
};

// ============================================================
//  ⭐ 产品数据 - 完整示例
//  每个产品包含: id, category(一级), subCategory(二级), image, name, desc, features, specs, inquiry
// ============================================================
const Products = [
    // ============================================================
    //  🚜 拖拉机 (Tractors)
    // ============================================================
    {
        id: "TR-001",
        category: "tractors",           // 一级分类
        subCategory: null,               // 拖拉机无二级分类
        image: "/image/tractor-banner.jpg",
        name: {
            en: "TTS Series Tractor (35-40HP)",
            es: "Tractor Serie TTS (35-40HP)",
            fr: "Tracteur Série TTS (35-40HP)",
            ar: "جرار سلسلة TTS (35-40 حصان)",
            ru: "Трактор серии TTS (35-40 л.с.)",
            pt: "Trator Série TTS (35-40HP)"
        },
        desc: {
            en: "Compact tractor for small farms with power steering and high ground clearance. Perfect for orchards and greenhouse work.",
            es: "Tractor compacto para pequeñas granjas con dirección asistida y alta distancia al suelo.",
            fr: "Tracteur compact pour petites exploitations avec direction assistée et garde au sol élevée.",
            ar: "جرار مدمج للمزارع الصغيرة مع توجيه هيدروليكي وخلوص أرضي عالٍ.",
            ru: "Компактный трактор для небольших ферм с гидроусилителем руля.",
            pt: "Trator compacto para pequenas fazendas com direção hidráulica."
        },
        features: {
            en: ["8+2 or 10+2 transmission", "Dual speed PTO input", "Hydraulic steering system", "High ground clearance", "Optional 960mm narrow wheel track"],
            es: ["Transmisión 8+2 o 10+2", "Entrada PTO de doble velocidad", "Dirección hidráulica", "Alta distancia al suelo", "Vía estrecha opcional de 960mm"],
            fr: ["Transmission 8+2 ou 10+2", "Entrée PTO à double vitesse", "Direction hydraulique", "Garde au sol élevée", "Voie étroite optionnelle 960mm"],
            ar: ["ناقل حركة 8+2 أو 10+2", "مدخل PTO مزدوج السرعة", "توجيه هيدروليكي", "خلوص أرضي عالٍ", "مسار ضيق اختياري 960 مم"],
            ru: ["Трансмиссия 8+2 или 10+2", "Двухскоростной PTO", "Гидравлическое рулевое", "Высокий клиренс", "Опция узкой колеи 960 мм"],
            pt: ["Transmissão 8+2 ou 10+2", "Entrada PTO dupla velocidade", "Direção hidráulica", "Alta distância do solo", "Via estreita opcional 960mm"]
        },
        specs: {
            en: {"Engine Power": "25.8kW", "PTO Speed": "540/750 rpm", "Weight": "578kg", "Transmission": "8+2 or 10+2", "Traction Force": "75-103kN"},
            es: {"Potencia": "25.8kW", "Velocidad PTO": "540/750 rpm", "Peso": "578kg", "Transmisión": "8+2 o 10+2", "Tracción": "75-103kN"},
            fr: {"Puissance": "25.8kW", "Vitesse PTO": "540/750 rpm", "Poids": "578kg", "Transmission": "8+2 ou 10+2", "Traction": "75-103kN"},
            ar: {"القوة": "25.8 كيلوواط", "سرعة PTO": "540/750 دورة", "الوزن": "578 كجم", "ناقل الحركة": "8+2 أو 10+2", "الجر": "75-103 كيلو نيوتن"},
            ru: {"Мощность": "25.8 кВт", "Скорость PTO": "540/750 об/мин", "Вес": "578 кг", "Трансмиссия": "8+2 или 10+2", "Тяга": "75-103 кН"},
            pt: {"Potência": "25.8kW", "Velocidade PTO": "540/750 rpm", "Peso": "578kg", "Transmissão": "8+2 ou 10+2", "Tração": "75-103kN"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },
    {
        id: "TR-002",
        category: "tractors",
        subCategory: null,
        image: "/image/tractor-tte.jpg",
        name: {
            en: "TTE Series Tractor (50-80HP)",
            es: "Tractor Serie TTE (50-80HP)",
            fr: "Tracteur Série TTE (50-80HP)",
            ar: "جرار سلسلة TTE (50-80 حصان)",
            ru: "Трактор серии TTE (50-80 л.с.)",
            pt: "Trator Série TTE (50-80HP)"
        },
        desc: {
            en: "Heavy-duty tractor with streamline hood design and side-shifting transmission. Ideal for large scale farming.",
            es: "Tractor pesado con diseño aerodinámico y transmisión lateral. Ideal para agricultura a gran escala.",
            fr: "Tracteur lourd avec capot profilé et transmission latérale. Idéal pour l'agriculture à grande échelle.",
            ar: "جرار ثقيل مع تصميم انسيابي وناقل حركة جانبي. مثالي للزراعة واسعة النطاق.",
            ru: "Тяжелый трактор с обтекаемым капотом и боковой коробкой передач.",
            pt: "Trator pesado com design aerodinâmico e transmissão lateral. Ideal para agricultura em grande escala."
        },
        features: {
            en: ["Streamline hood design", "Side-shifting transmission", "Strong hydraulic lifting", "Wide adjustable rear wheel", "Dual stage clutch optional"],
            es: ["Diseño aerodinámico", "Transmisión lateral", "Fuerte elevación hidráulica", "Rueda trasera ajustable", "Embrague de doble etapa"],
            fr: ["Capot profilé", "Transmission latérale", "Forte levage hydraulique", "Roue arrière réglable", "Embrayage double étage"],
            ar: ["تصميم انسيابي", "ناقل حركة جانبي", "رفع هيدروليكي قوي", "عجلة خلفية قابلة للتعديل", "قابض مزدوج"],
            ru: ["Обтекаемый капот", "Боковая КПП", "Мощная гидравлика", "Регулируемые задние колеса", "Двухдисковое сцепление"],
            pt: ["Design aerodinâmico", "Transmissão lateral", "Elevação hidráulica forte", "Roda traseira ajustável", "Embreagem dupla"]
        },
        specs: {
            en: {"Engine Power": "36.8-58.8kW", "PTO Speed": "540/720 rpm", "Lift Force": "14.11kN", "Transmission": "8+2", "Fuel Tank": "70L"},
            es: {"Potencia": "36.8-58.8kW", "Velocidad PTO": "540/720 rpm", "Elevación": "14.11kN", "Transmisión": "8+2", "Tanque": "70L"},
            fr: {"Puissance": "36.8-58.8kW", "Vitesse PTO": "540/720 rpm", "Levage": "14.11kN", "Transmission": "8+2", "Réservoir": "70L"},
            ar: {"القوة": "36.8-58.8 كيلوواط", "سرعة PTO": "540/720 دورة", "الرفع": "14.11 كيلو نيوتن", "ناقل الحركة": "8+2", "الخزان": "70 لتر"},
            ru: {"Мощность": "36.8-58.8 кВт", "Скорость PTO": "540/720 об/мин", "Подъем": "14.11 кН", "Трансмиссия": "8+2", "Бак": "70 л"},
            pt: {"Potência": "36.8-58.8kW", "Velocidade PTO": "540/720 rpm", "Elevação": "14.11kN", "Transmissão": "8+2", "Tanque": "70L"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🌾 农机具 → 耕整地机械 (Tillage Equipment)
    // ============================================================
    {
        id: "TL-001",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/disc-plough.jpg",
        name: {
            en: "1LY Series Disc Plough",
            es: "Arado de Discos Serie 1LY",
            fr: "Charrue à Disques Série 1LY",
            ar: "محراث قرصي سلسلة 1LY",
            ru: "Дисковый плуг серии 1LY",
            pt: "Arado de Discos Série 1LY"
        },
        desc: {
            en: "One-way disc plough for cultivated land. Features excellent soil penetration and low working resistance.",
            es: "Arado de discos unidireccional para tierras cultivadas. Excelente penetración y baja resistencia.",
            fr: "Charrue à disques unidirectionnelle pour terres cultivées. Excellente pénétration et faible résistance.",
            ar: "محراث قرصي أحادي الاتجاه للأراضي المزروعة. اختراق ممتاز ومقاومة منخفضة.",
            ru: "Односторонний дисковый плуг для пахотных земель. Отличное проникновение и низкое сопротивление.",
            pt: "Arado de discos unidirecional para terras cultivadas. Excelente penetração e baixa resistência."
        },
        features: {
            en: ["Good in stubble fields", "Cuts grass and stalks", "Hydraulic adjustment", "Durable construction", "Easy maintenance"],
            es: ["Bueno en rastrojos", "Corta pasto y tallos", "Ajuste hidráulico", "Construcción duradera", "Fácil mantenimiento"],
            fr: ["Bon dans les chaumes", "Coupe herbe et tiges", "Réglage hydraulique", "Construction durable", "Entretien facile"],
            ar: ["جيد في الحقول المزروعة", "يقطع الأعشاب", "تعديل هيدروليكي", "بناء متين", "صيانة سهلة"],
            ru: ["Хорош на стерне", "Режет траву", "Гидрорегулировка", "Прочная конструкция", "Легкое обслуживание"],
            pt: ["Bom em restolho", "Corta grama", "Ajuste hidráulico", "Construção durável", "Manutenção fácil"]
        },
        specs: {
            en: {"Working Width": "500-1750mm", "Depth": "250-350mm", "Disc Dia": "660mm", "Power": "80-220HP", "Discs": "2-7"},
            es: {"Ancho": "500-1750mm", "Profundidad": "250-350mm", "Disco": "660mm", "Potencia": "80-220HP", "Discos": "2-7"},
            fr: {"Largeur": "500-1750mm", "Profondeur": "250-350mm", "Disque": "660mm", "Puissance": "80-220HP", "Disques": "2-7"},
            ar: {"العرض": "500-1750 ملم", "العمق": "250-350 ملم", "القرص": "660 ملم", "القوة": "80-220 حصان", "الأقراص": "2-7"},
            ru: {"Ширина": "500-1750 мм", "Глубина": "250-350 мм", "Диск": "660 мм", "Мощность": "80-220 л.с.", "Диски": "2-7"},
            pt: {"Largura": "500-1750mm", "Profundidade": "250-350mm", "Disco": "660mm", "Potência": "80-220HP", "Discos": "2-7"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },
    {
        id: "TL-002",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/disc-harrow.jpg",
        name: {
            en: "1BZ Hydraulic Disc Harrow",
            es: "Grada de Discos Hidráulica 1BZ",
            fr: "Herse à Disques Hydraulique 1BZ",
            ar: "مشط قرصي هيدروليكي 1BZ",
            ru: "Гидравлическая дисковая борона 1BZ",
            pt: "Grade de Discos Hidráulica 1BZ"
        },
        desc: {
            en: "Hydraulic offset heavy disc harrow with high efficiency and strong soil penetration for heavy clay soil.",
            es: "Grada pesada hidráulica con alta eficiencia y fuerte penetración para suelos arcillosos.",
            fr: "Herse lourde hydraulique à haute efficacité pour sols argileux.",
            ar: "مشط قرصي هيدروليكي ثقيل للتربة الطينية الثقيلة.",
            ru: "Тяжелая гидравлическая борона для глинистых почв.",
            pt: "Grade pesada hidráulica para solo argiloso."
        },
        features: {
            en: ["Hydraulic lifting", "Square tube frame", "Strong penetration", "Small turning radius", "Easy transport"],
            es: ["Elevación hidráulica", "Marco tubular", "Fuerte penetración", "Pequeño radio de giro", "Transporte fácil"],
            fr: ["Levage hydraulique", "Cadre tubulaire", "Forte pénétration", "Petit rayon de braquage", "Transport facile"],
            ar: ["رفع هيدروليكي", "إطار مربع", "اختراق قوي", "نصف قطر صغير", "نقل سهل"],
            ru: ["Гидроподъем", "Квадратная рама", "Сильное проникновение", "Малый радиус", "Легкая транспортировка"],
            pt: ["Elevação hidráulica", "Quadro tubular", "Forte penetração", "Pequeno raio", "Transporte fácil"]
        },
        specs: {
            en: {"Working Width": "1600-4400mm", "Depth": "140-360mm", "Disc Dia": "660mm", "Weight": "1000-2150kg", "Power": "65-160HP"},
            es: {"Ancho": "1600-4400mm", "Profundidad": "140-360mm", "Disco": "660mm", "Peso": "1000-2150kg", "Potencia": "65-160HP"},
            fr: {"Largeur": "1600-4400mm", "Profondeur": "140-360mm", "Disque": "660mm", "Poids": "1000-2150kg", "Puissance": "65-160HP"},
            ar: {"العرض": "1600-4400 ملم", "العمق": "140-360 ملم", "القرص": "660 ملم", "الوزن": "1000-2150 كجم", "القوة": "65-160 حصان"},
            ru: {"Ширина": "1600-4400 мм", "Глубина": "140-360 мм", "Диск": "660 мм", "Вес": "1000-2150 кг", "Мощность": "65-160 л.с."},
            pt: {"Largura": "1600-4400mm", "Profundidade": "140-360mm", "Disco": "660mm", "Peso": "1000-2150kg", "Potência": "65-160HP"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },
    {
        id: "TL-003",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/subsoiler.jpg",
        name: {
            en: "3S Series Subsoiler",
            es: "Subsolador Serie 3S",
            fr: "Sous-soleuse Série 3S",
            ar: "محراث عميق سلسلة 3S",
            ru: "Глубокорыхлитель серии 3S",
            pt: "Subsolador Série 3S"
        },
        desc: {
            en: "Deep tillage subsoiler for breaking hardpan layers, improving soil drainage and root development.",
            es: "Subsolador de labranza profunda para romper capas duras, mejorar el drenaje y el desarrollo de raíces.",
            fr: "Sous-soleuse de travail profond pour briser les couches dures, améliorer le drainage et le développement des racines.",
            ar: "محراث عميق لكسر الطبقات الصلبة، وتحسين الصرف وتطوير الجذور.",
            ru: "Глубокорыхлитель для разрушения твердых слоев, улучшения дренажа и развития корней.",
            pt: "Subsolador de preparo profundo para quebrar camadas duras, melhorar a drenagem e o desenvolvimento das raízes."
        },
        features: {
            en: ["Adjustable working depth", "Heavy-duty construction", "Breaks hardpan effectively", "Improves water infiltration", "Enhances root growth"],
            es: ["Profundidad de trabajo ajustable", "Construcción pesada", "Rompe capas duras efectivamente", "Mejora la infiltración de agua", "Mejora el crecimiento de raíces"],
            fr: ["Profondeur de travail réglable", "Construction lourde", "Brise efficacement les couches dures", "Améliore l'infiltration d'eau", "Améliore la croissance des racines"],
            ar: ["عمق عمل قابل للتعديل", "بناء ثقيل", "يكسر الطبقات الصلبة بفعالية", "يحسن تسرب المياه", "يعزز نمو الجذور"],
            ru: ["Регулируемая глубина", "Тяжелая конструкция", "Эффективно разрушает твердый слой", "Улучшает инфильтрацию воды", "Улучшает рост корней"],
            pt: ["Profundidade ajustável", "Construção pesada", "Quebra camadas duras efetivamente", "Melhora a infiltração de água", "Melhora o crescimento das raízes"]
        },
        specs: {
            en: {"Working Width": "1000-1800mm", "Depth": "300-500mm", "Weight": "350-850kg", "Power": "80-150HP", "Shanks": "3-7"},
            es: {"Ancho": "1000-1800mm", "Profundidad": "300-500mm", "Peso": "350-850kg", "Potencia": "80-150HP", "Varillas": "3-7"},
            fr: {"Largeur": "1000-1800mm", "Profondeur": "300-500mm", "Poids": "350-850kg", "Puissance": "80-150HP", "Dents": "3-7"},
            ar: {"العرض": "1000-1800 ملم", "العمق": "300-500 ملم", "الوزن": "350-850 كجم", "القوة": "80-150 حصان", "الأسنان": "3-7"},
            ru: {"Ширина": "1000-1800 мм", "Глубина": "300-500 мм", "Вес": "350-850 кг", "Мощность": "80-150 л.с.", "Стойки": "3-7"},
            pt: {"Largura": "1000-1800mm", "Profundidade": "300-500mm", "Peso": "350-850kg", "Potência": "80-150HP", "Hastes": "3-7"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🌱 农机具 → 播种机械 (Planting Equipment)
    // ============================================================
    {
        id: "PL-001",
        category: "farm-machinery",
        subCategory: "planting",
        image: "/image/cornseeder.jpg",
        name: {
            en: "Precision Corn Seeder",
            es: "Sembradora de Precisión para Maíz",
            fr: "Semoir de Précision pour Maïs",
            ar: "آلة زراعة ذرة دقيقة",
            ru: "Прецизионная сеялка для кукурузы",
            pt: "Semeadeira de Precisão para Milho"
        },
        desc: {
            en: "High-precision corn seeder with zero-speed seed delivery, ensuring uniform seed spacing and depth.",
            es: "Sembradora de maíz de alta precisión con entrega de semillas a velocidad cero, garantizando un espaciado y profundidad uniformes.",
            fr: "Semoir de maïs de haute précision avec distribution à vitesse zéro, garantissant un espacement et une profondeur uniformes.",
            ar: "آلة زراعة ذرة عالية الدقة مع توصيل البذور بسرعة صفر، مما يضمن تباعد وعمق موحدين.",
            ru: "Высокоточная сеялка для кукурузы с подачей семян на нулевой скорости, обеспечивающая равномерное расстояние и глубину.",
            pt: "Semeadeira de milho de alta precisão com entrega de sementes a velocidade zero, garantindo espaçamento e profundidade uniformes."
        },
        features: {
            en: ["Zero-speed seed delivery", "No seed damage", "Uniform planting depth", "Fertilizer application simultaneously", "Easy row spacing adjustment"],
            es: ["Entrega de semillas a velocidad cero", "Sin daño a las semillas", "Profundidad de siembra uniforme", "Aplicación de fertilizante simultánea", "Ajuste fácil del espaciado entre filas"],
            fr: ["Distribution à vitesse zéro", "Pas de dommage aux semences", "Profondeur de semis uniforme", "Application d'engrais simultanée", "Réglage facile de l'espacement des rangs"],
            ar: ["توصيل البذور بسرعة صفر", "بدون تلف البذور", "عمق زراعة موحد", "تطبيق الأسمدة في وقت واحد", "تعديل سهل لتباعد الصفوف"],
            ru: ["Подача семян на нулевой скорости", "Без повреждения семян", "Равномерная глубина посева", "Одновременное внесение удобрений", "Легкая регулировка расстояния между рядами"],
            pt: ["Entrega de sementes a velocidade zero", "Sem danos às sementes", "Profundidade de plantio uniforme", "Aplicação de fertilizante simultânea", "Ajuste fácil do espaçamento entre linhas"]
        },
        specs: {
            en: {"Rows": "2-6 rows", "Row Spacing": "450-700mm", "Seed Capacity": "20L/row", "Fertilizer Capacity": "100L", "Power": "25-50HP"},
            es: {"Filas": "2-6 filas", "Espaciado": "450-700mm", "Capacidad de semillas": "20L/fila", "Capacidad de fertilizante": "100L", "Potencia": "25-50HP"},
            fr: {"Rangs": "2-6 rangs", "Espacement": "450-700mm", "Capacité semences": "20L/rang", "Capacité engrais": "100L", "Puissance": "25-50HP"},
            ar: {"الصفوف": "2-6 صفوف", "تباعد الصفوف": "450-700 ملم", "سعة البذور": "20 لتر/صف", "سعة الأسمدة": "100 لتر", "القوة": "25-50 حصان"},
            ru: {"Ряды": "2-6 рядов", "Расстояние": "450-700 мм", "Емкость семян": "20 л/ряд", "Емкость удобрений": "100 л", "Мощность": "25-50 л.с."},
            pt: {"Linhas": "2-6 linhas", "Espaçamento": "450-700mm", "Capacidade de sementes": "20L/linha", "Capacidade de fertilizante": "100L", "Potência": "25-50HP"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },
    {
        id: "PL-002",
        category: "farm-machinery",
        subCategory: "planting",
        image: "/image/spreader.jpg",
        name: {
            en: "CRD Fertilizer Spreader",
            es: "Esparcidor de Fertilizante CRD",
            fr: "Épandeur d'Engrais CRD",
            ar: "ناشر الأسمدة CRD",
            ru: "Разбрасыватель удобрений CRD",
            pt: "Espalhador de Fertilizante CRD"
        },
        desc: {
            en: "Broadcast fertilizer spreader for pre-planting and pasture seeding applications. Simple and durable design.",
            es: "Esparcidor de fertilizante para aplicaciones de siembra previa y pasturas. Diseño simple y duradero.",
            fr: "Épandeur d'engrais pour applications de semis et pâturages. Conception simple et durable.",
            ar: "ناشر أسمدة للتطبيقات الزراعية والمراعي. تصميم بسيط ومتين.",
            ru: "Разбрасыватель удобрений для посевных и пастбищных работ. Простая и долговечная конструкция.",
            pt: "Espalhador de fertilizante para aplicações de plantio e pastagem. Design simples e durável."
        },
        features: {
            en: ["Simple design", "Easy to operate", "Adjustable spreading width", "Durable construction", "Suitable for various materials"],
            es: ["Diseño simple", "Fácil de operar", "Ancho de esparcimiento ajustable", "Construcción duradera", "Adecuado para diversos materiales"],
            fr: ["Conception simple", "Facile à utiliser", "Largeur d'épandage réglable", "Construction durable", "Convient à divers matériaux"],
            ar: ["تصميم بسيط", "سهل التشغيل", "عرض نثر قابل للتعديل", "بناء متين", "مناسب لمختلف المواد"],
            ru: ["Простая конструкция", "Легкий в эксплуатации", "Регулируемая ширина разбрасывания", "Прочная конструкция", "Подходит для различных материалов"],
            pt: ["Design simples", "Fácil de operar", "Largura de espalhamento ajustável", "Construção durável", "Adequado para vários materiais"]
        },
        specs: {
            en: {"Working Width": "8-16m", "Capacity": "400-800L", "Weight": "70-120kg", "Power": "18-35HP"},
            es: {"Ancho": "8-16m", "Capacidad": "400-800L", "Peso": "70-120kg", "Potencia": "18-35HP"},
            fr: {"Largeur": "8-16m", "Capacité": "400-800L", "Poids": "70-120kg", "Puissance": "18-35HP"},
            ar: {"العرض": "8-16 م", "السعة": "400-800 لتر", "الوزن": "70-120 كجم", "القوة": "18-35 حصان"},
            ru: {"Ширина": "8-16 м", "Емкость": "400-800 л", "Вес": "70-120 кг", "Мощность": "18-35 л.с."},
            pt: {"Largura": "8-16m", "Capacidade": "400-800L", "Peso": "70-120kg", "Potência": "18-35HP"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🌿 农机具 → 中耕管理机械 (Cultivation Equipment)
    // ============================================================
    {
        id: "CU-001",
        category: "farm-machinery",
        subCategory: "cultivation",
        image: "/image/cultivator1.jpg",
        name: {
            en: "3ZT Series Cultivator",
            es: "Cultivador Serie 3ZT",
            fr: "Cultivateur Série 3ZT",
            ar: "آلة تعشيب سلسلة 3ZT",
            ru: "Культиватор серии 3ZT",
            pt: "Cultivador Série 3ZT"
        },
        desc: {
            en: "Multi-purpose cultivator for inter-row tillage, ridging, and weeding in corn, cotton, and potato fields.",
            es: "Cultivador multiusos para labranza entre hileras, aporque y deshierbe en campos de maíz, algodón y papa.",
            fr: "Cultivateur polyvalent pour le travail entre rangs, le buttage et le désherbage dans les champs de maïs, coton et pommes de terre.",
            ar: "آلة تعشيب متعددة الأغراض للحراثة بين الصفوف والتكديس وإزالة الأعشاب في حقول الذرة والقطن والبطاطس.",
            ru: "Многоцелевой культиватор для междурядной обработки, окучивания и прополки в полях кукурузы, хлопка и картофеля.",
            pt: "Cultivador multiuso para cultivo entre linhas, amontoa e capina em campos de milho, algodão e batata."
        },
        features: {
            en: ["Adjustable row spacing", "Multiple working widths", "Versatile applications", "Easy depth adjustment", "Durable construction"],
            es: ["Espaciado ajustable entre hileras", "Múltiples anchos de trabajo", "Aplicaciones versátiles", "Ajuste fácil de profundidad", "Construcción duradera"],
            fr: ["Espacement réglable des rangs", "Plusieurs largeurs de travail", "Applications polyvalentes", "Réglage facile de la profondeur", "Construction durable"],
            ar: ["تباعد صفوف قابل للتعديل", "عروض عمل متعددة", "تطبيقات متنوعة", "تعديل عمق سهل", "بناء متين"],
            ru: ["Регулируемое расстояние между рядами", "Несколько рабочих ширин", "Универсальные применения", "Легкая регулировка глубины", "Прочная конструкция"],
            pt: ["Espaçamento ajustável entre linhas", "Várias larguras de trabalho", "Aplicações versáteis", "Ajuste fácil de profundidade", "Construção durável"]
        },
        specs: {
            en: {"Working Width": "1000-1800mm", "Depth": "100-240mm", "Power": "35-80HP", "Shanks": "5-11"},
            es: {"Ancho": "1000-1800mm", "Profundidad": "100-240mm", "Potencia": "35-80HP", "Brazos": "5-11"},
            fr: {"Largeur": "1000-1800mm", "Profondeur": "100-240mm", "Puissance": "35-80HP", "Dents": "5-11"},
            ar: {"العرض": "1000-1800 ملم", "العمق": "100-240 ملم", "القوة": "35-80 حصان", "الأسنان": "5-11"},
            ru: {"Ширина": "1000-1800 мм", "Глубина": "100-240 мм", "Мощность": "35-80 л.с.", "Стойки": "5-11"},
            pt: {"Largura": "1000-1800mm", "Profundidade": "100-240mm", "Potência": "35-80HP", "Hastes": "5-11"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },


    // ============================================================
    //  ✂️ 农机具 → 割草机械 (Mowing Equipment)
    // ============================================================
    {
        id: "MW-001",
        category: "farm-machinery",
        subCategory: "mowing",
        image: "/image/mower2.jpg",
        name: {
            en: "Disc Mower",
            es: "Segadora de Discos",
            fr: "Faucheuse à Disques",
            ar: "آلة قص قرصية",
            ru: "Дисковая косилка",
            pt: "Ceifeira de Discos"
        },
        desc: {
            en: "High-performance disc mower for clean, even cutting of grass and forage crops. Suitable for hay and silage production.",
            es: "Segadora de discos de alto rendimiento para corte limpio y uniforme de pasto y cultivos forrajeros. Adecuada para producción de heno y ensilaje.",
            fr: "Faucheuse à disques haute performance pour une coupe nette et régulière de l'herbe et des cultures fourragères.",
            ar: "آلة قص قرصية عالية الأداء للقص النظيف والمتساوي للأعشاب ومحاصيل العلف.",
            ru: "Высокопроизводительная дисковая косилка для чистой и ровной резки травы и кормовых культур.",
            pt: "Ceifeira de discos de alto desempenho para corte limpo e uniforme de grama e culturas forrageiras."
        },
        features: {
            en: ["Clean cutting action", "Adjustable cutting height", "Durable disc system", "Easy maintenance", "High working speed"],
            es: ["Corte limpio", "Altura de corte ajustable", "Sistema de discos duradero", "Fácil mantenimiento", "Alta velocidad de trabajo"],
            fr: ["Coupe nette", "Hauteur de coupe réglable", "Système de disques durable", "Entretien facile", "Haute vitesse de travail"],
            ar: ["قص نظيف", "ارتفاع قص قابل للتعديل", "نظام قرصي متين", "صيانة سهلة", "سرعة عمل عالية"],
            ru: ["Чистый срез", "Регулируемая высота среза", "Прочная дисковая система", "Легкое обслуживание", "Высокая рабочая скорость"],
            pt: ["Corte limpo", "Altura de corte ajustável", "Sistema de discos durável", "Manutenção fácil", "Alta velocidade de trabalho"]
        },
        specs: {
            en: {"Working Width": "1.5-3.0m", "Cutting Height": "30-80mm", "Discs": "3-7", "Power": "30-80HP"},
            es: {"Ancho": "1.5-3.0m", "Altura": "30-80mm", "Discos": "3-7", "Potencia": "30-80HP"},
            fr: {"Largeur": "1.5-3.0m", "Hauteur": "30-80mm", "Disques": "3-7", "Puissance": "30-80HP"},
            ar: {"العرض": "1.5-3.0 م", "الارتفاع": "30-80 ملم", "الأقراص": "3-7", "القوة": "30-80 حصان"},
            ru: {"Ширина": "1.5-3.0 м", "Высота": "30-80 мм", "Диски": "3-7", "Мощность": "30-80 л.с."},
            pt: {"Largura": "1.5-3.0m", "Altura": "30-80mm", "Discos": "3-7", "Potência": "30-80HP"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 (Fertilizing Equipment)
    // ============================================================
    {
        id: "FT-001",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/spreader.jpg",
        name: {
            en: "Tractor Mounted Fertilizer Spreader",
            es: "Esparcidor de Fertilizante Montado",
            fr: "Épandeur d'Engrais Porté",
            ar: "ناشر أسمدة مثبت على الجرار",
            ru: "Навесной разбрасыватель удобрений",
            pt: "Espalhador de Fertilizante Montado"
        },
        desc: {
            en: "Heavy-duty fertilizer spreader for accurate and uniform application of granular fertilizers. Suitable for all farm types.",
            es: "Esparcidor de fertilizante pesado para aplicación precisa y uniforme de fertilizantes granulares. Adecuado para todo tipo de granjas.",
            fr: "Épandeur d'engrais lourd pour une application précise et uniforme des engrais granulaires. Convient à tous les types d'exploitations.",
            ar: "ناشر أسمدة ثقيل للتطبيق الدقيق والموحد للأسمدة الحبيبية. مناسب لجميع أنواع المزارع.",
            ru: "Тяжелый разбрасыватель удобрений для точного и равномерного внесения гранулированных удобрений. Подходит для всех типов ферм.",
            pt: "Espalhador de fertilizante pesado para aplicação precisa e uniforme de fertilizantes granulares. Adequado para todos os tipos de fazendas."
        },
        features: {
            en: ["Precise application rate", "Uniform spread pattern", "Large capacity", "Adjustable spread width", "Durable build"],
            es: ["Tasa de aplicación precisa", "Patrón de esparcimiento uniforme", "Gran capacidad", "Ancho de esparcimiento ajustable", "Construcción duradera"],
            fr: ["Taux d'application précis", "Motif d'épandage uniforme", "Grande capacité", "Largeur d'épandage réglable", "Construction durable"],
            ar: ["معدل تطبيق دقيق", "نمط نشر موحد", "سعة كبيرة", "عرض نثر قابل للتعديل", "بناء متين"],
            ru: ["Точная норма внесения", "Равномерный рисунок разбрасывания", "Большая емкость", "Регулируемая ширина разбрасывания", "Прочная конструкция"],
            pt: ["Taxa de aplicação precisa", "Padrão de espalhamento uniforme", "Grande capacidade", "Largura de espalhamento ajustável", "Construção durável"]
        },
        specs: {
            en: {"Capacity": "600-1200L", "Spread Width": "10-20m", "Weight": "200-400kg", "Power": "30-80HP"},
            es: {"Capacidad": "600-1200L", "Ancho": "10-20m", "Peso": "200-400kg", "Potencia": "30-80HP"},
            fr: {"Capacité": "600-1200L", "Largeur": "10-20m", "Poids": "200-400kg", "Puissance": "30-80HP"},
            ar: {"السعة": "600-1200 لتر", "العرض": "10-20 م", "الوزن": "200-400 كجم", "القوة": "30-80 حصان"},
            ru: {"Емкость": "600-1200 л", "Ширина": "10-20 м", "Вес": "200-400 кг", "Мощность": "30-80 л.с."},
            pt: {"Capacidade": "600-1200L", "Largura": "10-20m", "Peso": "200-400kg", "Potência": "30-80HP"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 (Other Farm Equipment)
    // ============================================================
    {
        id: "OT-001",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/trailer.jpg",
        name: {
            en: "7C Series Farm Trailer",
            es: "Remolque Agrícola Serie 7C",
            fr: "Remorque Agricole Série 7C",
            ar: "مقطورة زراعية سلسلة 7C",
            ru: "Сельскохозяйственный прицеп серии 7C",
            pt: "Reboque Agrícola Série 7C"
        },
        desc: {
            en: "Heavy-duty farm trailer with hydraulic tipping. Available in multiple capacities from 0.5 to 15 tons.",
            es: "Remolque agrícola pesado con volquete hidráulico. Disponible en múltiples capacidades de 0.5 a 15 toneladas.",
            fr: "Remorque agricole lourde avec basculement hydraulique. Disponible en plusieurs capacités de 0.5 à 15 tonnes.",
            ar: "مقطورة زراعية ثقيلة مع قلب هيدروليكي. متوفرة بسعات متعددة من 0.5 إلى 15 طنًا.",
            ru: "Тяжелый сельскохозяйственный прицеп с гидравлической разгрузкой. Доступен в нескольких вариантах от 0.5 до 15 тонн.",
            pt: "Reboque agrícola pesado com tombamento hidráulico. Disponível em várias capacidades de 0.5 a 15 toneladas."
        },
        features: {
            en: ["Hydraulic tipping", "Multiple capacity options", "Durable steel construction", "Easy towing", "Versatile applications"],
            es: ["Volquete hidráulico", "Múltiples opciones de capacidad", "Construcción de acero duradero", "Fácil remolque", "Aplicaciones versátiles"],
            fr: ["Basculement hydraulique", "Plusieurs options de capacité", "Construction en acier durable", "Remorquage facile", "Applications polyvalentes"],
            ar: ["قلب هيدروليكي", "خيارات سعة متعددة", "بناء صلب متين", "سحب سهل", "تطبيقات متنوعة"],
            ru: ["Гидравлическая разгрузка", "Несколько вариантов емкости", "Прочная стальная конструкция", "Легкая буксировка", "Универсальные применения"],
            pt: ["Tombamento hidráulico", "Múltiplas opções de capacidade", "Construção em aço durável", "Reboque fácil", "Aplicações versáteis"]
        },
        specs: {
            en: {"Capacity": "0.5-15 tons", "Tipping Type": "Hydraulic", "Tractor Power": "8-120HP", "Body": "Steel"},
            es: {"Capacidad": "0.5-15 toneladas", "Tipo de volquete": "Hidráulico", "Potencia del tractor": "8-120HP", "Cuerpo": "Acero"},
            fr: {"Capacité": "0.5-15 tonnes", "Type de basculement": "Hydraulique", "Puissance tracteur": "8-120HP", "Corps": "Acier"},
            ar: {"السعة": "0.5-15 طن", "نوع القلب": "هيدروليكي", "قوة الجرار": "8-120 حصان", "الهيكل": "صلب"},
            ru: {"Грузоподъемность": "0.5-15 т", "Тип разгрузки": "Гидравлический", "Мощность трактора": "8-120 л.с.", "Кузов": "Сталь"},
            pt: {"Capacidade": "0.5-15 toneladas", "Tipo de tombamento": "Hidráulico", "Potência do trator": "8-120HP", "Corpo": "Aço"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },
    {
        id: "OT-002",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/1gln.jpg",
        name: {
            en: "1GN Series Rotary Tiller",
            es: "Cultivador Rotativo Serie 1GN",
            fr: "Motoculteur Série 1GN",
            ar: "آلة حراثة دوارة سلسلة 1GN",
            ru: "Ротационная фреза серии 1GN",
            pt: "Cultivador Rotativo Série 1GN"
        },
        desc: {
            en: "Rotary tiller for seedbed preparation. Suitable for both dry land and paddy field operations. Wide working width.",
            es: "Cultivador rotativo para preparación de lechos de siembra. Adecuado para operaciones en tierra seca y arrozales.",
            fr: "Motoculteur pour la préparation du lit de semences. Convient aux opérations en terre sèche et en rizière.",
            ar: "آلة حراثة دوارة لإعداد أحواض البذور. مناسبة للعمليات في الأراضي الجافة والأراضي المروية.",
            ru: "Ротационная фреза для подготовки грядок. Подходит для сухих и заливных полей.",
            pt: "Cultivador rotativo para preparação de canteiros. Adequado para operações em terra seca e arrozais."
        },
        features: {
            en: ["Wide working width", "Suitable for dry and wet fields", "Good soil pulverization", "Stable operation", "Easy mounting"],
            es: ["Ancho de trabajo amplio", "Adecuado para campos secos y húmedos", "Buena pulverización del suelo", "Operación estable", "Montaje fácil"],
            fr: ["Large largeur de travail", "Convient aux champs secs et humides", "Bonne pulvérisation du sol", "Fonctionnement stable", "Montage facile"],
            ar: ["عرض عمل واسع", "مناسب للحقول الجافة والرطبة", "تفكيك جيد للتربة", "تشغيل مستقر", "تركيب سهل"],
            ru: ["Большая рабочая ширина", "Подходит для сухих и влажных полей", "Хорошее измельчение почвы", "Стабильная работа", "Легкий монтаж"],
            pt: ["Grande largura de trabalho", "Adequado para campos secos e úmidos", "Boa pulverização do solo", "Operação estável", "Montagem fácil"]
        },
        specs: {
            en: {"Working Width": "1000-2000mm", "Depth": "120-180mm", "Power": "12-120HP", "Blades": "24-52"},
            es: {"Ancho": "1000-2000mm", "Profundidad": "120-180mm", "Potencia": "12-120HP", "Cuchillas": "24-52"},
            fr: {"Largeur": "1000-2000mm", "Profondeur": "120-180mm", "Puissance": "12-120HP", "Lames": "24-52"},
            ar: {"العرض": "1000-2000 ملم", "العمق": "120-180 ملم", "القوة": "12-120 حصان", "الشفرات": "24-52"},
            ru: {"Ширина": "1000-2000 мм", "Глубина": "120-180 мм", "Мощность": "12-120 л.с.", "Ножи": "24-52"},
            pt: {"Largura": "1000-2000mm", "Profundidade": "120-180mm", "Potência": "12-120HP", "Lâminas": "24-52"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  🏗️ 工程机械 (Construction Machinery)
    // ============================================================
    {
        id: "CM-001",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/ht85w.png",
        name: {
            en: "HT85W Wheel Excavator",
            es: "Excavadora de Ruedas HT85W",
            fr: "Excavatrice sur Roues HT85W",
            ar: "حفارة بعجلات HT85W",
            ru: "Колёсный экскаватор HT85W",
            pt: "Escavadora sobre Rodas HT85W"
        },
        desc: {
            en: "Compact wheel excavator with zero tail swing and telescopic chassis. Perfect for urban construction and landscaping.",
            es: "Excavadora de ruedas compacta con giro cero y chasis telescópico. Perfecta para construcción urbana y paisajismo.",
            fr: "Excavatrice compacte sur roues avec balayage zéro et châssis télescopique.",
            ar: "حفارة بعجلات مدمجة مع دوران خلفي صفري وهيكل تلسكوبي.",
            ru: "Компактный колёсный экскаватор с нулевым вылетом хвостовой части и телескопическим шасси.",
            pt: "Escavadora sobre rodas compacta com giro zero e chassi telescópico."
        },
        features: {
            en: ["Zero tail swing", "Telescopic chassis", "Hydraulic pilot control", "Fuel efficient engine", "Easy transport"],
            es: ["Giro cero", "Chasis telescópico", "Control piloto hidráulico", "Motor eficiente", "Transporte fácil"],
            fr: ["Balayage zéro", "Châssis télescopique", "Commande hydraulique", "Moteur économique", "Transport facile"],
            ar: ["دوران خلفي صفري", "هيكل تلسكوبي", "تحكم هيدروليكي", "محرك موفر للوقود", "نقل سهل"],
            ru: ["Нулевой вылет хвостовой части", "Телескопическое шасси", "Гидравлическое управление", "Экономичный двигатель", "Легкая транспортировка"],
            pt: ["Giro zero", "Chassi telescópico", "Controle piloto hidráulico", "Motor eficiente", "Transporte fácil"]
        },
        specs: {
            en: {"Engine": "Yanmar 14.1kW", "Weight": "1940kg", "Bucket": "0.06m³", "Dig Depth": "3105mm"},
            es: {"Motor": "Yanmar 14.1kW", "Peso": "1940kg", "Cucharón": "0.06m³", "Profundidad": "3105mm"},
            fr: {"Moteur": "Yanmar 14.1kW", "Poids": "1940kg", "Godet": "0.06m³", "Profondeur": "3105mm"},
            ar: {"المحرك": "Yanmar 14.1 كيلوواط", "الوزن": "1940 كجم", "الدلو": "0.06 م³", "عمق الحفر": "3105 ملم"},
            ru: {"Двигатель": "Yanmar 14.1 кВт", "Вес": "1940 кг", "Ковш": "0.06 м³", "Глубина": "3105 мм"},
            pt: {"Motor": "Yanmar 14.1kW", "Peso": "1940kg", "Caçamba": "0.06m³", "Profundidade": "3105mm"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    {
        id: "IR-002",
        category: "irrigation",
        subCategory: null,
        image: "/image/sprayer2.jpg",
        name: {
            en: "Lithium Battery Sprayer",
            es: "Pulverizador a Batería de Litio",
            fr: "Pulvérisateur à Batterie Lithium",
            ar: "رشاش ببطارية ليثيوم",
            ru: "Литий-ионный опрыскиватель",
            pt: "Pulverizador com Bateria de Lítio"
        },
        desc: {
            en: "High-pressure sprayer with long-lasting lithium battery. Save chemicals and time with precision application.",
            es: "Pulverizador de alta presión con batería de litio de larga duración. Ahorra químicos y tiempo con aplicación precisa.",
            fr: "Pulvérisateur haute pression avec batterie lithium longue durée. Économise les produits chimiques et le temps.",
            ar: "رشاش عالي الضغط مع بطارية ليثيوم طويلة الأمد. يوفر المواد الكيميائية والوقت.",
            ru: "Высоконапорный опрыскиватель с литий-ионной батареей. Экономит химикаты и время.",
            pt: "Pulverizador de alta pressão com bateria de lítio de longa duração. Economiza produtos químicos e tempo."
        },
        features: {
            en: ["Lithium battery", "Extended runtime", "Adjustable spray pattern", "Lightweight design", "Precision delivery"],
            es: ["Batería de litio", "Larga duración", "Patrón de pulverización ajustable", "Diseño ligero", "Aplicación precisa"],
            fr: ["Batterie lithium", "Longue autonomie", "Motif de pulvérisation réglable", "Design léger", "Distribution précise"],
            ar: ["بطارية ليثيوم", "مدة تشغيل طويلة", "نمط رش قابل للتعديل", "تصميم خفيف", "توصيل دقيق"],
            ru: ["Литий-ионный аккумулятор", "Длительное время работы", "Регулируемый рисунок распыла", "Легкая конструкция", "Точная подача"],
            pt: ["Bateria de lítio", "Longa duração", "Padrão de pulverização ajustável", "Design leve", "Entrega precisa"]
        },
        specs: {
            en: {"Battery": "Lithium", "Pressure": "15-25 bar", "Tank": "15-20L", "Coverage": "Up to 8 hours"},
            es: {"Batería": "Litio", "Presión": "15-25 bar", "Tanque": "15-20L", "Cobertura": "Hasta 8 horas"},
            fr: {"Batterie": "Lithium", "Pression": "15-25 bar", "Réservoir": "15-20L", "Autonomie": "Jusqu'à 8 heures"},
            ar: {"البطارية": "ليثيوم", "الضغط": "15-25 بار", "الخزان": "15-20 لتر", "التغطية": "حتى 8 ساعات"},
            ru: {"Аккумулятор": "Литий", "Давление": "15-25 бар", "Бак": "15-20 л", "Время работы": "До 8 часов"},
            pt: {"Bateria": "Lítio", "Pressão": "15-25 bar", "Tanque": "15-20L", "Autonomia": "Até 8 horas"}
        },
        inquiry: { minOrder: "10 units", leadTime: "15-30 days", warranty: "12 months", moq: "10 units" }
    },
        // ============================================================
    //  💧 灌溉设备 → 卷盘式喷灌机
    // ============================================================
    {
        id: "IR-003",
        category: "irrigation",
        subCategory: null,
        image: "/image/irrigation-reel.jpg",
        name: {
            en: "Traveling Hose Reel Irrigation System - Large Area Sprinkler",
            es: "Sistema de Riego por Carrete Enrollable - Aspersor de Gran Superficie",
            fr: "Système d'Irrigation à Enrouleur Automatique - Asperseur Grande Surface",
            ar: "نظام ري بخرطوم ملفوف - رشاش مساحات واسعة",
            ru: "Дождевальная машина с наматывающимся шлангом - Орошение больших площадей",
            pt: "Sistema de Irrigação com Carretel Enrolável - Aspersor de Grande Área"
        },
        desc: {
            en: "The traveling hose reel irrigation system is a high-efficiency sprinkler designed for large-scale agricultural irrigation. Powered by water turbine or electric motor, it automatically rewinds the PE pipe while irrigating. Features uniform water distribution, low working pressure, excellent atomization, and significant water & energy savings. Ideal for grain crops, vegetables, orchards, and pasture irrigation.",
            es: "El sistema de riego por carrete enrollable es un aspersor de alta eficiencia para riego agrícola a gran escala. Accionado por turbina hidráulica o motor eléctrico, enrolla automáticamente la tubería PE mientras riega. Ideal para cereales, hortalizas, frutales y pastos.",
            fr: "Le système d'irrigation à enrouleur automatique est un asperseur haute efficacité pour l'irrigation agricole à grande échelle. Entraîné par turbine à eau ou moteur électrique, il enroule automatiquement le tuyau PE. Idéal pour les céréales, légumes, vergers et pâturages.",
            ar: "نظام الري بخرطوم ملفوف هو رشاش عالي الكفاءة للري الزراعي واسع النطاق. يعمل بالتوربين المائي أو المحرك الكهربائي، ويلف الأنبوب تلقائياً. مثالي للحبوب والخضروات والبساتين والمراعي.",
            ru: "Дождевальная машина с наматывающимся шлангом - высокоэффективная система для орошения больших площадей. Приводится в действие водяной турбиной или электродвигателем. Идеальна для зерновых, овощей, садов и пастбищ.",
            pt: "O sistema de irrigação com carretel enrolável é um aspersor de alta eficiência para irrigação agrícola em grande escala. Acionado por turbina de água ou motor elétrico, enrola automaticamente o tubo PE. Ideal para grãos, vegetais, pomares e pastagens."
        },
        features: {
            en: [
                "Electric motor or water turbine drive options for flexible power source",
                "Automatic PE pipe rewind during operation — labor saving",
                "360° rotation for full coverage irrigation",
                "High-quality PE pipe — wear-resistant and anti-aging for long service life",
                "Original Italian Sime gun with excellent atomization and long lifespan",
                "Left-right swing arm drive for uniform water distribution",
                "Excellent performance even at medium pressure",
                "Auxiliary hydraulic support and wide anti-sink tires for stability in muddy fields"
            ],
            es: [
                "Opciones de motor eléctrico o turbina hidráulica",
                "Enrollado automático del tubo PE — ahorro de mano de obra",
                "Rotación 360° para cobertura total",
                "Tubo PE de alta calidad — resistente al desgaste",
                "Pistola italiana Sime con excelente atomización",
                "Brazo oscilante para distribución uniforme",
                "Buen rendimiento incluso a presión media",
                "Soporte hidráulico y neumáticos anchos"
            ],
            fr: [
                "Options moteur électrique ou turbine à eau",
                "Enroulement automatique du tuyau PE",
                "Rotation 360° pour couverture totale",
                "Tuyau PE de haute qualité",
                "Pistolet italien Sime - excellente atomisation",
                "Bras oscillant pour distribution uniforme",
                "Bonnes performances à pression moyenne",
                "Support hydraulique et pneus larges"
            ],
            ar: [
                "خيارات محرك كهربائي أو توربين مائي",
                "لف تلقائي لأنبوب PE",
                "دوران 360 درجة لتغطية كاملة",
                "أنبوب PE عالي الجودة",
                "بندقية Sime إيطالية برذاذ ممتاز",
                "ذراع متأرجح للتوزيع المتساوي",
                "أداء جيد حتى في الضغط المتوسط",
                "دعامة هيدروليكية وإطارات عريضة"
            ],
            ru: [
                "Варианты электродвигателя или водяной турбины",
                "Автоматическая намотка шланга",
                "Поворот на 360° для полного покрытия",
                "Высококачественный шланг PE",
                "Итальянская пушка Sime",
                "Качающийся механизм для равномерного распределения",
                "Хорошая производительность при среднем давлении",
                "Гидравлическая опора и широкие шины"
            ],
            pt: [
                "Opções de motor elétrico ou turbina de água",
                "Enrolamento automático do tubo PE",
                "Rotação 360° para cobertura total",
                "Tubo PE de alta qualidade",
                "Pistola italiana Sime com excelente atomização",
                "Braço oscilante para distribuição uniforme",
                "Bom desempenho mesmo em pressão média",
                "Suporte hidráulico e pneus largos"
            ]
        },
        specs: {
            en: {
                "Model": "75-300 / 75-400 (Electric / Water Turbine)",
                "Machine Weight": "1570kg / 1690kg",
                "PE Pipe Length": "300m / 400m",
                "Nozzle Diameter": "14-20mm",
                "Machine Size (L×W×H)": "5400×2340×2600mm",
                "Tire Type": "10.0/80-12",
                "Drive Type": "Electric Motor / Water Turbine",
                "Rotation": "360°",
                "Suitable For": "Grain crops, vegetables, orchards, pastures",
                "Key Feature": "Automatic rewind, Italian gun, uniform distribution"
            },
            es: {
                "Modelo": "75-300 / 75-400 (Eléctrico / Turbina)",
                "Peso": "1570kg / 1690kg",
                "Longitud tubo PE": "300m / 400m",
                "Diámetro boquilla": "14-20mm",
                "Tamaño (L×A×H)": "5400×2340×2600mm",
                "Neumáticos": "10.0/80-12",
                "Tipo de accionamiento": "Motor eléctrico / Turbina",
                "Rotación": "360°",
                "Adecuado para": "Cereales, verduras, frutales, pastos",
                "Característica": "Enrollado automático, pistola italiana"
            },
            fr: {
                "Modèle": "75-300 / 75-400 (Électrique / Turbine)",
                "Poids": "1570kg / 1690kg",
                "Longueur tuyau PE": "300m / 400m",
                "Diamètre buse": "14-20mm",
                "Taille (L×l×H)": "5400×2340×2600mm",
                "Pneus": "10.0/80-12",
                "Entraînement": "Moteur électrique / Turbine",
                "Rotation": "360°",
                "Convient": "Céréales, légumes, vergers, pâturages"
            },
            ar: {
                "الموديل": "75-300 / 75-400 (كهربائي / توربين)",
                "الوزن": "1570 كجم / 1690 كجم",
                "طول أنبوب PE": "300 م / 400 م",
                "قطر الفوهة": "14-20 ملم",
                "الحجم (طول×عرض×ارتفاع)": "5400×2340×2600 ملم",
                "الإطارات": "10.0/80-12",
                "نوع التشغيل": "محرك كهربائي / توربين مائي",
                "الدوران": "360°",
                "مناسب لـ": "الحبوب والخضروات والبساتين والمراعي"
            },
            ru: {
                "Модель": "75-300 / 75-400 (Электрический / Турбина)",
                "Вес": "1570кг / 1690кг",
                "Длина шланга": "300м / 400м",
                "Диаметр сопла": "14-20мм",
                "Размеры": "5400×2340×2600мм",
                "Шины": "10.0/80-12",
                "Привод": "Электродвигатель / Турбина",
                "Поворот": "360°",
                "Подходит для": "Зерновых, овощей, садов, пастбищ"
            },
            pt: {
                "Modelo": "75-300 / 75-400 (Elétrico / Turbina)",
                "Peso": "1570kg / 1690kg",
                "Comprimento tubo PE": "300m / 400m",
                "Diâmetro bocal": "14-20mm",
                "Tamanho": "5400×2340×2600mm",
                "Pneus": "10.0/80-12",
                "Acionamento": "Motor elétrico / Turbina",
                "Rotação": "360°",
                "Adequado para": "Grãos, vegetais, pomares, pastagens"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale agricultural irrigation, grain crops, vegetables, orchards, pastures",
            customization: "Electric motor or water turbine option available, pipe length 300m or 400m"
        }
    },

    
    // ============================================================
    //  🏗️ 工程机械 → 挖掘机
    // ============================================================
    
    // ============================================================
    //  HT20 微型挖掘机
    // ============================================================
    {
        id: "CM-003",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/20.png",
        name: {
            en: "HT20 Mini Excavator",
            es: "Miniexcavadora HT20",
            fr: "Mini Excavatrice HT20",
            ar: "حفارة صغيرة HT20",
            ru: "Мини-экскаватор HT20",
            pt: "Mini Escavadora HT20"
        },
        desc: {
            en: "Compact mini excavator with telescopic chassis and zero tail swing. Powered by Yanmar engine, perfect for urban construction and landscaping.",
            es: "Miniexcavadora compacta con chasis telescópico y giro cero. Motor Yanmar, perfecta para construcción urbana y paisajismo.",
            fr: "Mini excavatrice compacte avec châssis télescopique et balayage zéro. Moteur Yanmar, parfaite pour la construction urbaine et l'aménagement paysager.",
            ar: "حفارة صغيرة مدمجة مع هيكل تلسكوبي ودوران خلفي صفري. محرك Yanmar، مثالية للبناء الحضري وتنسيق الحدائق.",
            ru: "Компактный мини-экскаватор с телескопическим шасси и нулевым вылетом хвостовой части. Двигатель Yanmar, идеален для городского строительства и ландшафтного дизайна.",
            pt: "Mini escavadora compacta com chassi telescópico e giro zero. Motor Yanmar, perfeita para construção urbana e paisagismo."
        },
        features: {
            en: [
                "Telescopic chassis (990-1300mm adjustable)",
                "Zero tail swing for narrow spaces",
                "Yanmar engine for reliable performance",
                "Compact design for easy transport",
                "Hydraulic pilot control system"
            ],
            es: [
                "Chasis telescópico (990-1300mm ajustable)",
                "Giro cero para espacios reducidos",
                "Motor Yanmar para rendimiento confiable",
                "Diseño compacto para transporte fácil",
                "Sistema de control piloto hidráulico"
            ],
            fr: [
                "Châssis télescopique (990-1300mm réglable)",
                "Balayage zéro pour espaces restreints",
                "Moteur Yanmar pour une performance fiable",
                "Conception compacte pour transport facile",
                "Système de commande hydraulique"
            ],
            ar: [
                "هيكل تلسكوبي (990-1300 ملم قابل للتعديل)",
                "دوران خلفي صفري للمساحات الضيقة",
                "محرك Yanmar لأداء موثوق",
                "تصميم مدمج لسهولة النقل",
                "نظام تحكم هيدروليكي"
            ],
            ru: [
                "Телескопическое шасси (990-1300 мм регулировка)",
                "Нулевой вылет хвостовой части для узких пространств",
                "Двигатель Yanmar для надежной работы",
                "Компактный дизайн для легкой транспортировки",
                "Гидравлическая система управления"
            ],
            pt: [
                "Chassi telescópico (990-1300mm ajustável)",
                "Giro zero para espaços estreitos",
                "Motor Yanmar para desempenho confiável",
                "Design compacto para transporte fácil",
                "Sistema de controle hidráulico"
            ]
        },
        specs: {
            en: {
                "Engine": "Yanmar 3TNV76-PCT",
                "Power": "14.1kW/2200rpm",
                "Weight": "1940kg",
                "Bucket Capacity": "0.06m³",
                "Digging Depth": "2300mm",
                "Digging Radius": "4120mm",
                "Hydraulic Pressure": "18.6MPa",
                "Travel Speed": "2-3km/h"
            },
            es: {
                "Motor": "Yanmar 3TNV76-PCT",
                "Potencia": "14.1kW/2200rpm",
                "Peso": "1940kg",
                "Capacidad del cucharón": "0.06m³",
                "Profundidad de excavación": "2300mm",
                "Radio de excavación": "4120mm",
                "Presión hidráulica": "18.6MPa",
                "Velocidad de desplazamiento": "2-3km/h"
            },
            fr: {
                "Moteur": "Yanmar 3TNV76-PCT",
                "Puissance": "14.1kW/2200rpm",
                "Poids": "1940kg",
                "Capacité du godet": "0.06m³",
                "Profondeur d'excavation": "2300mm",
                "Rayon d'excavation": "4120mm",
                "Pression hydraulique": "18.6MPa",
                "Vitesse de déplacement": "2-3km/h"
            },
            ar: {
                "المحرك": "Yanmar 3TNV76-PCT",
                "القوة": "14.1 كيلوواط/2200 دورة",
                "الوزن": "1940 كجم",
                "سعة الدلو": "0.06 م³",
                "عمق الحفر": "2300 ملم",
                "نصف قطر الحفر": "4120 ملم",
                "الضغط الهيدروليكي": "18.6 ميجا باسكال",
                "سرعة السير": "2-3 كم/ساعة"
            },
            ru: {
                "Двигатель": "Yanmar 3TNV76-PCT",
                "Мощность": "14.1 кВт/2200 об/мин",
                "Вес": "1940 кг",
                "Емкость ковша": "0.06 м³",
                "Глубина копания": "2300 мм",
                "Радиус копания": "4120 мм",
                "Гидравлическое давление": "18.6 МПа",
                "Скорость передвижения": "2-3 км/ч"
            },
            pt: {
                "Motor": "Yanmar 3TNV76-PCT",
                "Potência": "14.1kW/2200rpm",
                "Peso": "1940kg",
                "Capacidade da caçamba": "0.06m³",
                "Profundidade de escavação": "2300mm",
                "Raio de escavação": "4120mm",
                "Pressão hidráulica": "18.6MPa",
                "Velocidade de deslocamento": "2-3km/h"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available"
        }
    },

    // ============================================================
    //  HT35G 微型挖掘机
    // ============================================================
    {
        id: "CM-004",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/ht35g.png",
        name: {
            en: "HT35G Mini Excavator",
            es: "Miniexcavadora HT35G",
            fr: "Mini Excavatrice HT35G",
            ar: "حفارة صغيرة HT35G",
            ru: "Мини-экскаватор HT35G",
            pt: "Mini Escavadora HT35G"
        },
        desc: {
            en: "Powerful mini excavator with Yanmar engine and hydraulic pilot control. Offers excellent digging performance with 3105mm digging depth. Ideal for construction and agricultural applications.",
            es: "Potente miniexcavadora con motor Yanmar y control piloto hidráulico. Excelente rendimiento de excavación con 3105mm de profundidad. Ideal para construcción y agricultura.",
            fr: "Mini excavatrice puissante avec moteur Yanmar et commande hydraulique. Excellentes performances d'excavation avec 3105mm de profondeur. Idéale pour la construction et l'agriculture.",
            ar: "حفارة صغيرة قوية مع محرك Yanmar وتحكم هيدروليكي. أداء حفر ممتاز بعمق 3105 ملم. مثالية للبناء والزراعة.",
            ru: "Мощный мини-экскаватор с двигателем Yanmar и гидравлическим управлением. Отличные показатели копания с глубиной 3105 мм. Идеален для строительства и сельского хозяйства.",
            pt: "Mini escavadora potente com motor Yanmar e controle hidráulico. Excelente desempenho de escavação com 3105mm de profundidade. Ideal para construção e agricultura."
        },
        features: {
            en: [
                "Yanmar 3TNV88F-ESSY engine (18.2kW)",
                "Hydraulic pilot control system",
                "Excellent digging performance",
                "Strong bucket digging force (30.5kN)",
                "Reliable and durable construction"
            ],
            es: [
                "Motor Yanmar 3TNV88F-ESSY (18.2kW)",
                "Sistema de control piloto hidráulico",
                "Excelente rendimiento de excavación",
                "Fuerza de excavación del cucharón (30.5kN)",
                "Construcción confiable y duradera"
            ],
            fr: [
                "Moteur Yanmar 3TNV88F-ESSY (18.2kW)",
                "Système de commande hydraulique",
                "Excellentes performances d'excavation",
                "Force d'excavation du godet (30.5kN)",
                "Construction fiable et durable"
            ],
            ar: [
                "محرك Yanmar 3TNV88F-ESSY (18.2 كيلوواط)",
                "نظام تحكم هيدروليكي",
                "أداء حفر ممتاز",
                "قوة حفر الدلو (30.5 كيلو نيوتن)",
                "بناء موثوق ومتين"
            ],
            ru: [
                "Двигатель Yanmar 3TNV88F-ESSY (18.2 кВт)",
                "Гидравлическая система управления",
                "Отличные показатели копания",
                "Сила копания ковша (30.5 кН)",
                "Надежная и долговечная конструкция"
            ],
            pt: [
                "Motor Yanmar 3TNV88F-ESSY (18.2kW)",
                "Sistema de controle hidráulico",
                "Excelente desempenho de escavação",
                "Força de escavação da caçamba (30.5kN)",
                "Construção confiável e durável"
            ]
        },
        specs: {
            en: {
                "Engine": "Yanmar 3TNV88F-ESSY",
                "Power": "18.2kW/2200rpm",
                "Weight": "3600kg",
                "Bucket Capacity": "0.12m³",
                "Digging Depth": "3105mm",
                "Digging Radius": "5465mm",
                "Digging Height": "4855mm",
                "Unloading Height": "3460mm",
                "Hydraulic Pressure": "24.5MPa",
                "Hydraulic Flow": "88L/min",
                "Bucket Digging Force": "30.5kN",
                "Stick Digging Force": "18.5kN",
                "Travel Speed": "2.2-4.4km/h"
            },
            es: {
                "Motor": "Yanmar 3TNV88F-ESSY",
                "Potencia": "18.2kW/2200rpm",
                "Peso": "3600kg",
                "Capacidad del cucharón": "0.12m³",
                "Profundidad de excavación": "3105mm",
                "Radio de excavación": "5465mm",
                "Altura de excavación": "4855mm",
                "Altura de descarga": "3460mm",
                "Presión hidráulica": "24.5MPa",
                "Caudal hidráulico": "88L/min",
                "Fuerza de excavación del cucharón": "30.5kN",
                "Fuerza de excavación del brazo": "18.5kN",
                "Velocidad de desplazamiento": "2.2-4.4km/h"
            },
            fr: {
                "Moteur": "Yanmar 3TNV88F-ESSY",
                "Puissance": "18.2kW/2200rpm",
                "Poids": "3600kg",
                "Capacité du godet": "0.12m³",
                "Profondeur d'excavation": "3105mm",
                "Rayon d'excavation": "5465mm",
                "Hauteur d'excavation": "4855mm",
                "Hauteur de déchargement": "3460mm",
                "Pression hydraulique": "24.5MPa",
                "Débit hydraulique": "88L/min",
                "Force d'excavation du godet": "30.5kN",
                "Force d'excavation du bras": "18.5kN",
                "Vitesse de déplacement": "2.2-4.4km/h"
            },
            ar: {
                "المحرك": "Yanmar 3TNV88F-ESSY",
                "القوة": "18.2 كيلوواط/2200 دورة",
                "الوزن": "3600 كجم",
                "سعة الدلو": "0.12 م³",
                "عمق الحفر": "3105 ملم",
                "نصف قطر الحفر": "5465 ملم",
                "ارتفاع الحفر": "4855 ملم",
                "ارتفاع التفريغ": "3460 ملم",
                "الضغط الهيدروليكي": "24.5 ميجا باسكال",
                "التدفق الهيدروليكي": "88 لتر/دقيقة",
                "قوة حفر الدلو": "30.5 كيلو نيوتن",
                "قوة حفر الذراع": "18.5 كيلو نيوتن",
                "سرعة السير": "2.2-4.4 كم/ساعة"
            },
            ru: {
                "Двигатель": "Yanmar 3TNV88F-ESSY",
                "Мощность": "18.2 кВт/2200 об/мин",
                "Вес": "3600 кг",
                "Емкость ковша": "0.12 м³",
                "Глубина копания": "3105 мм",
                "Радиус копания": "5465 мм",
                "Высота копания": "4855 мм",
                "Высота выгрузки": "3460 мм",
                "Гидравлическое давление": "24.5 МПа",
                "Гидравлический поток": "88 л/мин",
                "Сила копания ковша": "30.5 кН",
                "Сила копания рукояти": "18.5 кН",
                "Скорость передвижения": "2.2-4.4 км/ч"
            },
            pt: {
                "Motor": "Yanmar 3TNV88F-ESSY",
                "Potência": "18.2kW/2200rpm",
                "Peso": "3600kg",
                "Capacidade da caçamba": "0.12m³",
                "Profundidade de escavação": "3105mm",
                "Raio de escavação": "5465mm",
                "Altura de escavação": "4855mm",
                "Altura de descarga": "3460mm",
                "Pressão hidráulica": "24.5MPa",
                "Fluxo hidráulico": "88L/min",
                "Força de escavação da caçamba": "30.5kN",
                "Força de escavação do braço": "18.5kN",
                "Velocidade de deslocamento": "2.2-4.4km/h"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available"
        }
    },
        // ============================================================
    //  🏗️ 工程机械 → 挖掘装载机
    // ============================================================
    {
        id: "CM-005",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/backhoe loader.png",
        name: {
            en: "HT4CX-WZ Backhoe Loader - Multi-Purpose Construction Machine",
            es: "Cargadora Retroexcavadora HT4CX-WZ - Máquina de Construcción Multiusos",
            fr: "Chargeuse Rétrocaveuse HT4CX-WZ - Machine de Construction Polyvalente",
            ar: "حفارة-محمل HT4CX-WZ - آلة بناء متعددة الأغراض",
            ru: "Погрузчик-экскаватор HT4CX-WZ - Многоцелевая строительная машина",
            pt: "Carregadeira Retroescavadeira HT4CX-WZ - Máquina de Construção Multiuso"
        },
        desc: {
            en: "The HT4CX-WZ Backhoe Loader combines excavation and loading capabilities in one versatile machine. Powered by YUCHAI engine with 75kW power, this 10-ton machine delivers exceptional performance for construction, road maintenance, and agricultural projects. Features 0.3m³ backhoe capacity and 1.2m³ loader bucket.",
            es: "La HT4CX-WZ combina capacidades de excavación y carga en una máquina versátil. Motor YUCHAI de 75kW, 10 toneladas de peso, excelente rendimiento para construcción y agricultura.",
            fr: "La HT4CX-WZ combine excavation et chargement dans une machine polyvalente. Moteur YUCHAI 75kW, 10 tonnes, excellente performance pour la construction et l'agriculture.",
            ar: "تجمع HT4CX-WZ بين الحفر والتحميل في آلة واحدة متعددة الاستخدامات. محرك YUCHAI بقوة 75 كيلوواط، وزن 10 طن، أداء استثنائي للبناء والزراعة.",
            ru: "HT4CX-WZ сочетает возможности экскавации и погрузки в одной машине. Двигатель YUCHAI 75 кВт, вес 10 тонн, отличная производительность.",
            pt: "A HT4CX-WZ combina escavação e carregamento em uma máquina versátil. Motor YUCHAI 75kW, 10 toneladas, excelente desempenho para construção e agricultura."
        },
        features: {
            en: [
                "YUCHAI YC4A105Z-T20 engine (75kW) - fuel efficient and reliable",
                "1.2m³ loader bucket capacity for high productivity",
                "0.3m³ backhoe bucket for precise excavation work",
                "Maximum digging depth of 5070mm",
                "Hydraulic pilot control system for smooth operation",
                "36km/h travel speed for quick site-to-site movement",
                "180° swing angle for enhanced flexibility",
                "Stable 10050kg operating weight for heavy-duty work"
            ],
            es: [
                "Motor YUCHAI YC4A105Z-T20 (75kW) - eficiente y confiable",
                "Capacidad de cucharón cargador de 1.2m³ para alta productividad",
                "Cucharón retroexcavador de 0.3m³ para trabajo preciso",
                "Profundidad máxima de excavación de 5070mm",
                "Sistema de control piloto hidráulico para operación suave",
                "Velocidad de desplazamiento de 36km/h para movilidad",
                "Ángulo de giro de 180° para flexibilidad",
                "Peso operativo estable de 10050kg"
            ],
            fr: [
                "Moteur YUCHAI YC4A105Z-T20 (75kW) - efficace et fiable",
                "Capacité du godet chargeur 1.2m³ pour productivité élevée",
                "Godet rétrocaveuse 0.3m³ pour travail précis",
                "Profondeur d'excavation maximale 5070mm",
                "Commande hydraulique pour opération douce",
                "Vitesse de déplacement 36km/h",
                "Angle de pivotement 180° pour flexibilité",
                "Poids opérationnel stable 10050kg"
            ],
            ar: [
                "محرك YUCHAI YC4A105Z-T20 (75 كيلوواط) - موفر للوقود وموثوق",
                "سعة دلو المحمل 1.2 م³ لإنتاجية عالية",
                "دلو الحفار الخلفي 0.3 م³ للعمل الدقيق",
                "عمق حفر أقصى 5070 ملم",
                "نظام تحكم هيدروليكي للتشغيل السلس",
                "سرعة سير 36 كم/ساعة للتنقل السريع",
                "زاوية دوران 180 درجة للمرونة",
                "وزن تشغيلي ثابت 10050 كجم"
            ],
            ru: [
                "Двигатель YUCHAI YC4A105Z-T20 (75 кВт) - экономичный и надежный",
                "Емкость ковша погрузчика 1.2 м³ для высокой производительности",
                "Ковш экскаватора 0.3 м³ для точной работы",
                "Максимальная глубина копания 5070 мм",
                "Гидравлическая система управления",
                "Скорость передвижения 36 км/ч",
                "Угол поворота 180° для гибкости",
                "Стабильный вес 10050 кг"
            ],
            pt: [
                "Motor YUCHAI YC4A105Z-T20 (75kW) - eficiente e confiável",
                "Capacidade da caçamba carregadeira 1.2m³",
                "Caçamba retroescavadeira 0.3m³",
                "Profundidade máxima de escavação 5070mm",
                "Sistema de controle hidráulico",
                "Velocidade de deslocamento 36km/h",
                "Ângulo de giro 180° para flexibilidade",
                "Peso operacional estável 10050kg"
            ]
        },
        specs: {
            en: {
                "Engine": "YUCHAI YC4A105Z-T20",
                "Power": "75kW / 2200rpm",
                "Operating Weight": "10050kg",
                "Loader Bucket Capacity": "1.2m³",
                "Backhoe Capacity": "0.3m³",
                "Max Digging Depth": "5070mm",
                "Max Digging Radius": "8140mm",
                "Loading Lifting Capacity": "2500kg",
                "Breakout Force": "54kN",
                "Hydraulic Pressure": "25MPa",
                "Travel Speed": "36km/h",
                "Fuel Tank": "130L"
            },
            es: {
                "Motor": "YUCHAI YC4A105Z-T20",
                "Potencia": "75kW / 2200rpm",
                "Peso operativo": "10050kg",
                "Capacidad cucharón cargador": "1.2m³",
                "Capacidad retroexcavadora": "0.3m³",
                "Profundidad máxima": "5070mm",
                "Radio máximo": "8140mm",
                "Capacidad de elevación": "2500kg",
                "Fuerza de arranque": "54kN",
                "Presión hidráulica": "25MPa",
                "Velocidad": "36km/h",
                "Tanque combustible": "130L"
            },
            fr: {
                "Moteur": "YUCHAI YC4A105Z-T20",
                "Puissance": "75kW / 2200rpm",
                "Poids opérationnel": "10050kg",
                "Capacité chargeuse": "1.2m³",
                "Capacité rétrocaveuse": "0.3m³",
                "Profondeur max": "5070mm",
                "Rayon max": "8140mm",
                "Capacité de levage": "2500kg",
                "Force d'arrachement": "54kN",
                "Pression hydraulique": "25MPa",
                "Vitesse": "36km/h",
                "Réservoir": "130L"
            },
            ar: {
                "المحرك": "YUCHAI YC4A105Z-T20",
                "القوة": "75 كيلوواط / 2200 دورة",
                "الوزن التشغيلي": "10050 كجم",
                "سعة دلو المحمل": "1.2 م³",
                "سعة الحفار الخلفي": "0.3 م³",
                "أقصى عمق حفر": "5070 ملم",
                "أقصى نصف قطر حفر": "8140 ملم",
                "قدرة الرفع": "2500 كجم",
                "قوة الاقتلاع": "54 كيلو نيوتن",
                "الضغط الهيدروليكي": "25 ميجا باسكال",
                "السرعة": "36 كم/ساعة",
                "خزان الوقود": "130 لتر"
            },
            ru: {
                "Двигатель": "YUCHAI YC4A105Z-T20",
                "Мощность": "75 кВт / 2200 об/мин",
                "Вес": "10050 кг",
                "Емкость ковша погрузчика": "1.2 м³",
                "Емкость экскаватора": "0.3 м³",
                "Глубина": "5070 мм",
                "Радиус": "8140 мм",
                "Грузоподъемность": "2500 кг",
                "Сила": "54 кН",
                "Давление": "25 МПа",
                "Скорость": "36 км/ч",
                "Бак": "130 л"
            },
            pt: {
                "Motor": "YUCHAI YC4A105Z-T20",
                "Potência": "75kW / 2200rpm",
                "Peso operacional": "10050kg",
                "Capacidade carregadeira": "1.2m³",
                "Capacidade retroescavadeira": "0.3m³",
                "Profundidade max": "5070mm",
                "Raio max": "8140mm",
                "Capacidade de elevação": "2500kg",
                "Força de arranque": "54kN",
                "Pressão hidráulica": "25MPa",
                "Velocidade": "36km/h",
                "Tanque": "130L"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Construction, road maintenance, agricultural projects, landscaping"
        }
    },

    // ============================================================
    //  🏗️ 工程机械 → 伸缩臂高空叉车
    // ============================================================
    {
        id: "CM-006",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/teelescopic handler.png",
        name: {
            en: "HTG Telescopic Handler - High Reach Multi-Purpose Machine",
            es: "Manipulador Telescópico HTG - Máquina Multipropósito de Alto Alcance",
            fr: "Manipulateur Télescopique HTG - Machine Polyvalente Haute Portée",
            ar: "مناول تلسكوبي HTG - آلة متعددة الأغراض عالية الوصول",
            ru: "Телескопический погрузчик HTG - Многоцелевая машина",
            pt: "Manipulador Telescópico HTG - Máquina Multiuso de Alto Alcance"
        },
        desc: {
            en: "The HTG Series Telescopic Handler is a versatile off-road lift truck with exceptional reach and lifting capacity. Available in 3.5T and 4.0T configurations with working heights up to 17.6m. Features 4WD and 4-wheel steering for superior maneuverability on rough terrain. Ideal for construction, agricultural, and industrial applications.",
            es: "El manipulador telescópico HTG es una carretilla elevadora todoterreno versátil con excepcional alcance. Disponible en configuraciones de 3.5T y 4.0T con alturas de trabajo hasta 17.6m.",
            fr: "Le manipulateur télescopique HTG est un chariot élévateur tout-terrain polyvalent. Disponible en 3.5T et 4.0T avec hauteurs de travail jusqu'à 17.6m.",
            ar: "المناول التلسكوبي HTG هو رافعة شوكية متعددة الاستخدامات بارتفاع وصول استثنائي. متوفر بتكوينات 3.5 طن و 4.0 طن مع ارتفاعات عمل تصل إلى 17.6 متر.",
            ru: "Телескопический погрузчик HTG - универсальный внедорожный подъемник. Доступен в конфигурациях 3.5T и 4.0T с высотой подъема до 17.6м.",
            pt: "O manipulador telescópico HTG é uma empilhadeira off-road versátil. Disponível em 3.5T e 4.0T com alturas de trabalho até 17.6m."
        },
        features: {
            en: [
                "Choice of 3.5T (HTG735) or 4.0T (HTG1840) capacity models",
                "Maximum working height up to 17.6m (HTG1840)",
                "4WD and 4-wheel steering for all-terrain performance",
                "Fork carriage leveling for safe load handling",
                "Compact turning radius (4.2m) for confined spaces",
                "Hydraulic frame tilt (±9°) for rough ground stability",
                "Quick attachment change system for versatility",
                "Cab with full visibility and ergonomic controls"
            ],
            es: [
                "Modelos de 3.5T (HTG735) o 4.0T (HTG1840)",
                "Altura máxima de trabajo hasta 17.6m",
                "Tracción 4x4 y dirección 4 ruedas",
                "Nivelación de horquillas para carga segura",
                "Radio de giro compacto 4.2m",
                "Inclinación de chasis ±9°",
                "Cambio rápido de accesorios",
                "Cabina con visibilidad total"
            ],
            fr: [
                "Modèles 3.5T (HTG735) ou 4.0T (HTG1840)",
                "Hauteur de travail jusqu'à 17.6m",
                "4 roues motrices et direction 4 roues",
                "Nivellement des fourches",
                "Rayon de braquage compact 4.2m",
                "Inclinaison du châssis ±9°",
                "Changement rapide d'accessoires",
                "Cabine avec visibilité totale"
            ],
            ar: [
                "نماذج بسعة 3.5 طن أو 4.0 طن",
                "ارتفاع عمل أقصى يصل إلى 17.6 متر",
                "دفع رباعي وتوجيه بأربع عجلات",
                "تسوية الشوكة لتحميل آمن",
                "نصف قطر دوران مدمج 4.2 متر",
                "إمالة هيكل هيدروليكي ±9°",
                "نظام تغيير سريع للملحقات",
                "كابينة مع رؤية كاملة"
            ],
            ru: [
                "Модели 3.5T (HTG735) или 4.0T (HTG1840)",
                "Высота подъема до 17.6м",
                "Полный привод и 4-колесное рулевое",
                "Выравнивание вил",
                "Радиус поворота 4.2м",
                "Наклон рамы ±9°",
                "Быстрая смена навесок",
                "Кабина с полным обзором"
            ],
            pt: [
                "Modelos 3.5T (HTG735) ou 4.0T (HTG1840)",
                "Altura máxima de trabalho até 17.6m",
                "Tração 4x4 e direção 4 rodas",
                "Nivelamento de garfos",
                "Raio de viragem compacto 4.2m",
                "Inclinação do chassi ±9°",
                "Troca rápida de acessórios",
                "Cabine com visibilidade total"
            ]
        },
        specs: {
            en: {
                "Models": "HTG735 (3.5T) / HTG1840 (4.0T)",
                "Working Height": "7.0m / 17.6m",
                "Horizontal Reach": "3.9m / 13.1m",
                "Engine Power": "140kW / 2200rpm",
                "Operating Weight": "7000kg / 12350kg",
                "Drive Type": "4WD, 4WS",
                "Turning Radius": "4.2m",
                "Frame Tilt": "±5° / ±9°",
                "Tires": "400/80R24 / 440/80R24",
                "Fuel Tank": "100L / 150L"
            },
            es: {
                "Modelos": "HTG735 (3.5T) / HTG1840 (4.0T)",
                "Altura de trabajo": "7.0m / 17.6m",
                "Alcance horizontal": "3.9m / 13.1m",
                "Potencia": "140kW / 2200rpm",
                "Peso": "7000kg / 12350kg",
                "Tracción": "4x4, 4WS",
                "Radio de giro": "4.2m",
                "Inclinación": "±5° / ±9°",
                "Neumáticos": "400/80R24 / 440/80R24",
                "Tanque": "100L / 150L"
            },
            fr: {
                "Modèles": "HTG735 (3.5T) / HTG1840 (4.0T)",
                "Hauteur": "7.0m / 17.6m",
                "Portée": "3.9m / 13.1m",
                "Puissance": "140kW / 2200rpm",
                "Poids": "7000kg / 12350kg",
                "Transmission": "4x4, 4WS",
                "Rayon": "4.2m",
                "Inclinaison": "±5° / ±9°",
                "Pneus": "400/80R24 / 440/80R24",
                "Réservoir": "100L / 150L"
            },
            ar: {
                "الموديلات": "HTG735 (3.5 طن) / HTG1840 (4.0 طن)",
                "ارتفاع العمل": "7.0 م / 17.6 م",
                "الوصول الأفقي": "3.9 م / 13.1 م",
                "قوة المحرك": "140 كيلوواط / 2200 دورة",
                "الوزن": "7000 كجم / 12350 كجم",
                "نظام الدفع": "دفع رباعي، توجيه رباعي",
                "نصف قطر الدوران": "4.2 م",
                "إمالة الهيكل": "±5° / ±9°",
                "الإطارات": "400/80R24 / 440/80R24",
                "خزان الوقود": "100 لتر / 150 لتر"
            },
            ru: {
                "Модели": "HTG735 (3.5T) / HTG1840 (4.0T)",
                "Высота": "7.0м / 17.6м",
                "Вылет": "3.9м / 13.1м",
                "Мощность": "140 кВт / 2200 об/мин",
                "Вес": "7000кг / 12350кг",
                "Привод": "4WD, 4WS",
                "Радиус": "4.2м",
                "Наклон": "±5° / ±9°",
                "Шины": "400/80R24 / 440/80R24",
                "Бак": "100л / 150л"
            },
            pt: {
                "Modelos": "HTG735 (3.5T) / HTG1840 (4.0T)",
                "Altura": "7.0m / 17.6m",
                "Alcance": "3.9m / 13.1m",
                "Potência": "140kW / 2200rpm",
                "Peso": "7000kg / 12350kg",
                "Tração": "4x4, 4WS",
                "Raio": "4.2m",
                "Inclinação": "±5° / ±9°",
                "Pneus": "400/80R24 / 440/80R24",
                "Tanque": "100L / 150L"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Construction sites, agricultural operations, warehouse logistics, industrial maintenance"
        }
    },

    // ============================================================
    //  🏗️ 工程机械 → 加长臂轮式挖掘机
    // ============================================================
    {
        id: "CM-007",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/215h.jpg",
        name: {
            en: "HT215H Extended Arm Wheel Excavator - Extra Long Reach Specialist",
            es: "Excavadora de Ruedas HT215H - Especialista en Alcance Extra Largo",
            fr: "Excavatrice sur Roues HT215H - Spécialiste de la Portée Extra Longue",
            ar: "حفارة بعجلات HT215H - متخصصة في الوصول الطويل",
            ru: "Колёсный экскаватор HT215H - Специалист по сверхдлинному вылету",
            pt: "Escavadora sobre Rodas HT215H - Especialista em Alcance Extra Longo"
        },
        desc: {
            en: "The HT215H Extended Arm Wheel Excavator delivers exceptional reach for deep excavation and high-reach applications. Featuring a 10,000mm boom and 8,000mm arm, it achieves a maximum digging depth of 15.8m and radius of 19.2m. Powered by a 140kW B5.9 engine, this 23-ton machine is designed for large-scale construction, mining, and infrastructure projects.",
            es: "La excavadora HT215H ofrece alcance excepcional para excavación profunda. Con pluma de 10,000mm y brazo de 8,000mm, profundidad de excavación de 15.8m y radio de 19.2m. Motor 140kW, 23 toneladas.",
            fr: "L'excavatrice HT215H offre une portée exceptionnelle. Avec flèche de 10,000mm et bras de 8,000mm, profondeur de 15.8m. Moteur 140kW, 23 tonnes.",
            ar: "توفر حفارة HT215H وصولاً استثنائياً للحفر العميق. مع بوم 10000 ملم وذراع 8000 ملم، عمق حفر 15.8 متر. محرك 140 كيلوواط، 23 طن.",
            ru: "Экскаватор HT215H обеспечивает исключительный вылет. Стрела 10000 мм, рукоять 8000 мм, глубина 15.8 м. Двигатель 140 кВт, 23 тонны.",
            pt: "A escavadora HT215H oferece alcance excecional. Lança 10000mm, braço 8000mm, profundidade 15.8m. Motor 140kW, 23 toneladas."
        },
        features: {
            en: [
                "Extended 10,000mm boom and 8,000mm arm for maximum reach",
                "Maximum digging depth of 15.8m for deep excavation",
                "Maximum digging radius of 19.2m for wide working area",
                "Powerful 140kW B5.9 engine for demanding conditions",
                "0.4m³ bucket capacity for efficient material handling",
                "Hydraulic system with 2×239L/min flow for fast cycles",
                "30km/h travel speed for excellent mobility",
                "23,000kg operating weight for stability on challenging terrain"
            ],
            es: [
                "Pluma extendida de 10,000mm y brazo de 8,000mm",
                "Profundidad de excavación de 15.8m",
                "Radio de excavación de 19.2m",
                "Motor B5.9 de 140kW",
                "Cucharón de 0.4m³",
                "Sistema hidráulico 2×239L/min",
                "Velocidad 30km/h",
                "Peso 23,000kg"
            ],
            fr: [
                "Flèche 10,000mm et bras 8,000mm",
                "Profondeur d'excavation 15.8m",
                "Rayon d'excavation 19.2m",
                "Moteur B5.9 140kW",
                "Godet 0.4m³",
                "Hydraulique 2×239L/min",
                "Vitesse 30km/h",
                "Poids 23,000kg"
            ],
            ar: [
                "بوم ممتد 10000 ملم وذراع 8000 ملم",
                "عمق حفر 15.8 متر",
                "نصف قطر حفر 19.2 متر",
                "محرك B5.9 بقوة 140 كيلوواط",
                "سعة دلو 0.4 م³",
                "نظام هيدروليكي 2×239 لتر/دقيقة",
                "سرعة 30 كم/ساعة",
                "وزن 23,000 كجم"
            ],
            ru: [
                "Удлиненная стрела 10000 мм и рукоять 8000 мм",
                "Глубина копания 15.8 м",
                "Радиус копания 19.2 м",
                "Двигатель B5.9 140 кВт",
                "Ковш 0.4 м³",
                "Гидравлика 2×239 л/мин",
                "Скорость 30 км/ч",
                "Вес 23,000 кг"
            ],
            pt: [
                "Lança 10000mm e braço 8000mm",
                "Profundidade de escavação 15.8m",
                "Raio de escavação 19.2m",
                "Motor B5.9 140kW",
                "Caçamba 0.4m³",
                "Hidráulico 2×239L/min",
                "Velocidade 30km/h",
                "Peso 23,000kg"
            ]
        },
        specs: {
            en: {
                "Engine": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "Power": "140kW / 2200rpm (132kW export)",
                "Operating Weight": "23000kg",
                "Boom Length": "10000mm",
                "Arm Length": "8000mm",
                "Bucket Capacity": "0.4m³",
                "Max Digging Depth": "15829mm",
                "Max Digging Radius": "19237mm",
                "Max Digging Height": "15534mm",
                "Max Unloading Height": "12596mm",
                "Bucket Digging Force": "152.1kN",
                "Stick Digging Force": "119.5kN",
                "Hydraulic Flow": "2×239L/min",
                "Travel Speed": "30km/h",
                "Gradeability": "≥60%"
            },
            es: {
                "Motor": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "Potencia": "140kW / 2200rpm (132kW export)",
                "Peso": "23000kg",
                "Pluma": "10000mm",
                "Brazo": "8000mm",
                "Cucharón": "0.4m³",
                "Profundidad max": "15829mm",
                "Radio max": "19237mm",
                "Altura max": "15534mm",
                "Descarga max": "12596mm",
                "Fuerza excavación": "152.1kN",
                "Fuerza brazo": "119.5kN",
                "Flujo hidráulico": "2×239L/min",
                "Velocidad": "30km/h",
                "Pendiente": "≥60%"
            },
            fr: {
                "Moteur": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "Puissance": "140kW / 2200rpm (132kW export)",
                "Poids": "23000kg",
                "Flèche": "10000mm",
                "Bras": "8000mm",
                "Godet": "0.4m³",
                "Profondeur max": "15829mm",
                "Rayon max": "19237mm",
                "Hauteur max": "15534mm",
                "Déchargement max": "12596mm",
                "Force excavation": "152.1kN",
                "Force bras": "119.5kN",
                "Débit hydraulique": "2×239L/min",
                "Vitesse": "30km/h",
                "Pente": "≥60%"
            },
            ar: {
                "المحرك": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "القوة": "140 كيلوواط / 2200 دورة",
                "الوزن": "23000 كجم",
                "طول البوم": "10000 ملم",
                "طول الذراع": "8000 ملم",
                "سعة الدلو": "0.4 م³",
                "أقصى عمق حفر": "15829 ملم",
                "أقصى نصف قطر حفر": "19237 ملم",
                "أقصى ارتفاع حفر": "15534 ملم",
                "أقصى ارتفاع تفريغ": "12596 ملم",
                "قوة حفر الدلو": "152.1 كيلو نيوتن",
                "قوة حفر الذراع": "119.5 كيلو نيوتن",
                "التدفق الهيدروليكي": "2×239 لتر/دقيقة",
                "السرعة": "30 كم/ساعة",
                "تسلق التلال": "≥60%"
            },
            ru: {
                "Двигатель": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "Мощность": "140 кВт / 2200 об/мин",
                "Вес": "23000 кг",
                "Стрела": "10000 мм",
                "Рукоять": "8000 мм",
                "Ковш": "0.4 м³",
                "Глубина": "15829 мм",
                "Радиус": "19237 мм",
                "Высота": "15534 мм",
                "Выгрузка": "12596 мм",
                "Сила копания": "152.1 кН",
                "Сила рукояти": "119.5 кН",
                "Поток": "2×239 л/мин",
                "Скорость": "30 км/ч",
                "Уклон": "≥60%"
            },
            pt: {
                "Motor": "B5.9CS4 190C / 6BTA5.9-C180-II",
                "Potência": "140kW / 2200rpm",
                "Peso": "23000kg",
                "Lança": "10000mm",
                "Braço": "8000mm",
                "Caçamba": "0.4m³",
                "Profundidade": "15829mm",
                "Raio": "19237mm",
                "Altura": "15534mm",
                "Descarga": "12596mm",
                "Força escavação": "152.1kN",
                "Força braço": "119.5kN",
                "Fluxo": "2×239L/min",
                "Velocidade": "30km/h",
                "Inclinação": "≥60%"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale construction, mining, infrastructure projects, deep excavation"
        }
    },

    // ============================================================
    //  🏗️ 工程机械 → 自上料混凝土搅拌车
    // ============================================================
    {
        id: "CM-008",
        category: "construction-machinery",
        subCategory: null,
        image: "/image/self-loading.png",
        name: {
            en: "HT Self-Loading Concrete Mixer - All-in-One Concrete Solution",
            es: "Hormigonera Autocargable HT - Solución Integral de Concreto",
            fr: "Bétonnière Auto-chargeuse HT - Solution Béton Tout-en-Un",
            ar: "خلاطة خرسانة ذاتية التحميل HT - حل خرساني متكامل",
            ru: "Самоходный бетоносмеситель HT - Комплексное решение для бетона",
            pt: "Betoneira Auto-Carregável HT - Solução Completa de Concreto"
        },
        desc: {
            en: "The HT Self-Loading Concrete Mixer is a mobile batching plant that loads, mixes, and transports concrete in one machine. Available in 3.5m³ and 6.5m³ capacities with YUCHAI engines. Features full hydraulic drive, 4WD and 4-wheel steering. Perfect for remote construction sites, road building, and infrastructure projects where ready-mix concrete is unavailable.",
            es: "La hormigonera autocargable HT es una planta móvil que carga, mezcla y transporta concreto. Disponible en 3.5m³ y 6.5m³ con motores YUCHAI. Tracción 4x4 y dirección 4 ruedas.",
            fr: "La bétonnière auto-chargeuse HT est une centrale mobile. Disponible en 3.5m³ et 6.5m³ avec moteurs YUCHAI. 4x4 et direction 4 roues.",
            ar: "خلاطة الخرسانة ذاتية التحميل HT هي محطة متنقلة. متوفرة بسعات 3.5 م³ و 6.5 م³ مع محركات YUCHAI. دفع رباعي وتوجيه رباعي.",
            ru: "Самоходный бетоносмеситель HT - мобильный завод. Доступен в 3.5м³ и 6.5м³ с двигателями YUCHAI. Полный привод.",
            pt: "A betoneira auto-carregável HT é uma central móvel. Disponível em 3.5m³ e 6.5m³ com motores YUCHAI. Tração 4x4."
        },
        features: {
            en: [
                "3.5m³ (HT3500) or 6.5m³ (HT6500) concrete output per batch",
                "YUCHAI YC4A125Z or YUCHAI 6105 turbo diesel engine (92kW)",
                "Full hydraulic drive system with variable pumps and motors",
                "4WD and 4-wheel steering for excellent off-road capability",
                "Hydraulic self-loading bucket with 650cm³ capacity",
                "Electronic weighing system for precise batching",
                "Hydraulic water pump (40m³/h) and high-pressure cleaning gun",
                "Tiltable discharge chute for flexible pour positioning",
                "Up to 4 batches per hour for high productivity"
            ],
            es: [
                "Producción de 3.5m³ o 6.5m³ por carga",
                "Motor diésel YUCHAI de 92kW",
                "Sistema hidráulico completo",
                "Tracción 4x4 y dirección 4 ruedas",
                "Cucharón autocargable de 650cm³",
                "Sistema de pesaje electrónico",
                "Bomba hidráulica 40m³/h",
                "Canaleta inclinable",
                "4 cargas por hora"
            ],
            fr: [
                "Production de 3.5m³ ou 6.5m³ par charge",
                "Moteur diesel YUCHAI 92kW",
                "Système hydraulique complet",
                "4x4 et direction 4 roues",
                "Godet auto-chargeur 650cm³",
                "Système de pesage électronique",
                "Pompe hydraulique 40m³/h",
                "Goulotte inclinable",
                "4 chargements/heure"
            ],
            ar: [
                "إنتاج 3.5 م³ أو 6.5 م³ لكل دفعة",
                "محرك ديزل YUCHAI 92 كيلوواط",
                "نظام هيدروليكي كامل",
                "دفع رباعي وتوجيه رباعي",
                "دلو تحميل ذاتي 650 سم³",
                "نظام وزن إلكتروني",
                "مضخة هيدروليكية 40 م³/ساعة",
                "ميزاب تفريغ مائل",
                "4 دفعات في الساعة"
            ],
            ru: [
                "3.5м³ или 6.5м³ за загрузку",
                "Дизельный двигатель YUCHAI 92 кВт",
                "Полная гидравлическая система",
                "Полный привод",
                "Ковш 650 см³",
                "Электронная система взвешивания",
                "Гидронасос 40 м³/ч",
                "Наклонный желоб",
                "4 загрузки в час"
            ],
            pt: [
                "Produção de 3.5m³ ou 6.5m³ por carga",
                "Motor diesel YUCHAI 92kW",
                "Sistema hidráulico completo",
                "Tração 4x4 e direção 4 rodas",
                "Caçamba auto-carregável 650cm³",
                "Sistema de pesagem eletrónico",
                "Bomba hidráulica 40m³/h",
                "Calha inclinável",
                "4 cargas por hora"
            ]
        },
        specs: {
            en: {
                "Model": "HT3500 (3.5m³) / HT6500 (6.5m³)",
                "Drum Capacity": "5.3m³ / 9m³",
                "Concrete Output": "3.5m³ / 6.5m³ per batch",
                "Engine": "YUCHAI YC4A125Z / YUCHAI 6105 Turbo",
                "Power": "92kW / 2200rpm",
                "Drive Type": "Full hydraulic, 4WD & 4WS",
                "Travel Speed": "0-10km/h (low) / 0-20km/h (high)",
                "Dimensions (L×W×H)": "7200×2500×3300mm / 8450×3050×4830mm",
                "Operating Weight": "8600kg / 12520kg",
                "Water Tank": "2×350L / 1465L",
                "Fuel Tank": "170L / 342L",
                "Tires": "16/70-20"
            },
            es: {
                "Modelo": "HT3500 (3.5m³) / HT6500 (6.5m³)",
                "Tambor": "5.3m³ / 9m³",
                "Producción": "3.5m³ / 6.5m³ por carga",
                "Motor": "YUCHAI YC4A125Z / YUCHAI 6105 Turbo",
                "Potencia": "92kW / 2200rpm",
                "Tracción": "Hidráulica, 4x4 & 4WS",
                "Velocidad": "0-10km/h / 0-20km/h",
                "Dimensiones": "7200×2500×3300mm / 8450×3050×4830mm",
                "Peso": "8600kg / 12520kg",
                "Agua": "2×350L / 1465L",
                "Combustible": "170L / 342L",
                "Neumáticos": "16/70-20"
            },
            fr: {
                "Modèle": "HT3500 (3.5m³) / HT6500 (6.5m³)",
                "Tambour": "5.3m³ / 9m³",
                "Production": "3.5m³ / 6.5m³ par charge",
                "Moteur": "YUCHAI YC4A125Z / YUCHAI 6105 Turbo",
                "Puissance": "92kW / 2200rpm",
                "Transmission": "Hydraulique, 4x4 & 4WS",
                "Vitesse": "0-10km/h / 0-20km/h",
                "Dimensions": "7200×2500×3300mm / 8450×3050×4830mm",
                "Poids": "8600kg / 12520kg",
                "Eau": "2×350L / 1465L",
                "Carburant": "170L / 342L",
                "Pneus": "16/70-20"
            },
            ar: {
                "الموديل": "HT3500 (3.5 م³) / HT6500 (6.5 م³)",
                "سعة الأسطوانة": "5.3 م³ / 9 م³",
                "إنتاج الخرسانة": "3.5 م³ / 6.5 م³ لكل دفعة",
                "المحرك": "YUCHAI YC4A125Z / YUCHAI 6105 توربو",
                "القوة": "92 كيلوواط / 2200 دورة",
                "نظام الدفع": "هيدروليكي بالكامل، دفع رباعي وتوجيه رباعي",
                "السرعة": "0-10 كم/ساعة / 0-20 كم/ساعة",
                "الأبعاد": "7200×2500×3300 ملم / 8450×3050×4830 ملم",
                "الوزن": "8600 كجم / 12520 كجم",
                "خزان الماء": "2×350 لتر / 1465 لتر",
                "خزان الوقود": "170 لتر / 342 لتر",
                "الإطارات": "16/70-20"
            },
            ru: {
                "Модель": "HT3500 (3.5м³) / HT6500 (6.5м³)",
                "Барабан": "5.3м³ / 9м³",
                "Производство": "3.5м³ / 6.5м³",
                "Двигатель": "YUCHAI YC4A125Z / YUCHAI 6105 Turbo",
                "Мощность": "92 кВт / 2200 об/мин",
                "Привод": "Гидравлика, 4WD & 4WS",
                "Скорость": "0-10км/ч / 0-20км/ч",
                "Размеры": "7200×2500×3300мм / 8450×3050×4830мм",
                "Вес": "8600кг / 12520кг",
                "Вода": "2×350л / 1465л",
                "Топливо": "170л / 342л",
                "Шины": "16/70-20"
            },
            pt: {
                "Modelo": "HT3500 (3.5m³) / HT6500 (6.5m³)",
                "Tambor": "5.3m³ / 9m³",
                "Produção": "3.5m³ / 6.5m³ por carga",
                "Motor": "YUCHAI YC4A125Z / YUCHAI 6105 Turbo",
                "Potência": "92kW / 2200rpm",
                "Tração": "Hidráulica, 4x4 & 4WS",
                "Velocidade": "0-10km/h / 0-20km/h",
                "Dimensões": "7200×2500×3300mm / 8450×3050×4830mm",
                "Peso": "8600kg / 12520kg",
                "Água": "2×350L / 1465L",
                "Combustível": "170L / 342L",
                "Pneus": "16/70-20"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Remote construction sites, road building, dam construction, infrastructure projects"
        }
    },
        // ============================================================
    //  🌾 农机具 → 播种机械 → 马铃薯播种机
    // ============================================================
    {
        id: "PL-003",
        category: "farm-machinery",
        subCategory: "planting",
        image: "/image/potatoplanter.jpg",
        name: {
            en: "2CM Series Potato Planter - Precision Potato Planting Machine",
            es: "Sembradora de Patatas Serie 2CM - Máquina de Siembra de Precisión",
            fr: "Planteuse de Pommes de Terre Série 2CM - Machine de Plantation de Précision",
            ar: "آلة زراعة البطاطس سلسلة 2CM - آلة زراعة دقيقة",
            ru: "Картофелесажалка серии 2CM - Прецизионная машина для посадки картофеля",
            pt: "Plantadeira de Batata Série 2CM - Máquina de Plantio de Precisão"
        },
        desc: {
            en: "The 2CM Series Potato Planter is a professional potato planting machine designed for efficient and precise tuber planting. Available in single-row, double-row, and double-row four-line configurations to suit different farm scales and soil conditions. Features adjustable row spacing, planting distance, and large seed and fertilizer tanks for continuous operation. Ideal for potato farmers looking to increase planting efficiency and crop yield.",
            es: "La sembradora de patatas 2CM es una máquina profesional para siembra eficiente y precisa. Disponible en configuraciones de una fila, dos filas y dos filas de cuatro líneas. Ideal para agricultores que buscan aumentar la eficiencia y el rendimiento.",
            fr: "La planteuse de pommes de terre 2CM est une machine professionnelle pour une plantation efficace et précise. Disponible en configurations mono-rang, double-rang et double-rang quatre lignes. Idéale pour les agriculteurs cherchant à augmenter leur rendement.",
            ar: "آلة زراعة البطاطس 2CM هي آلة احترافية للزراعة الفعالة والدقيقة. متوفرة بتكوينات صف واحد، صف مزدوج، وصف مزدوج بأربعة خطوط. مثالية لزيادة كفاءة الزراعة والإنتاج.",
            ru: "Картофелесажалка 2CM - профессиональная машина для эффективной и точной посадки. Доступна в конфигурациях с одним, двумя рядами и двумя рядами с четырьмя линиями. Идеально подходит для повышения эффективности и урожайности.",
            pt: "A plantadeira de batata 2CM é uma máquina profissional para plantio eficiente e preciso. Disponível em configurações de uma linha, duas linhas e duas linhas com quatro fileiras. Ideal para aumentar a eficiência e a produtividade."
        },
        features: {
            en: [
                "Three configurable models: 2CM-1 (single row), 2CM-2 (double ridge), 2CM-2A (double ridge four lines)",
                "Adjustable row spacing from 500-1000mm to suit different farming practices",
                "Adjustable planting distance from 180-350mm for optimal tuber spacing",
                "Large seed tank capacity (0.24m³ per row) for continuous operation",
                "Integrated fertilizer tank for simultaneous fertilization",
                "Working efficiency up to 1 hm²/h for large-scale planting",
                "Compatible with 20-90 HP tractors",
                "Durable construction with reliable planting mechanism"
            ],
            es: [
                "Tres modelos configurables: 2CM-1, 2CM-2, 2CM-2A",
                "Espaciado entre hileras ajustable 500-1000mm",
                "Distancia de plantación ajustable 180-350mm",
                "Gran capacidad de tolva de semillas 0.24m³",
                "Tolva de fertilizante integrada",
                "Eficiencia hasta 1 hm²/h",
                "Compatible con tractores 20-90 HP",
                "Construcción duradera"
            ],
            fr: [
                "Trois modèles configurables: 2CM-1, 2CM-2, 2CM-2A",
                "Espacement des rangs ajustable 500-1000mm",
                "Distance de plantation ajustable 180-350mm",
                "Grande capacité de trémie 0.24m³",
                "Trémie d'engrais intégrée",
                "Efficacité jusqu'à 1 hm²/h",
                "Compatible avec tracteurs 20-90 HP",
                "Construction durable"
            ],
            ar: [
                "ثلاثة موديلات قابلة للتكوين: 2CM-1، 2CM-2، 2CM-2A",
                "تباعد الصفوف قابل للتعديل 500-1000 ملم",
                "مسافة الزراعة قابلة للتعديل 180-350 ملم",
                "سعة خزان بذور كبيرة 0.24 م³",
                "خزان أسمدة مدمج",
                "كفاءة عمل تصل إلى 1 هكتار/ساعة",
                "متوافق مع جرارات 20-90 حصان",
                "بناء متين"
            ],
            ru: [
                "Три конфигурации: 2CM-1, 2CM-2, 2CM-2A",
                "Регулируемое расстояние между рядами 500-1000 мм",
                "Регулируемое расстояние посадки 180-350 мм",
                "Большой бункер для семян 0.24м³",
                "Встроенный бункер для удобрений",
                "Производительность до 1 га/ч",
                "Совместимость с тракторами 20-90 л.с.",
                "Прочная конструкция"
            ],
            pt: [
                "Três modelos configuráveis: 2CM-1, 2CM-2, 2CM-2A",
                "Espaçamento entre linhas ajustável 500-1000mm",
                "Distância de plantio ajustável 180-350mm",
                "Grande capacidade de depósito 0.24m³",
                "Depósito de fertilizante integrado",
                "Eficiência até 1 hm²/h",
                "Compatível com tratores 20-90 HP",
                "Construção durável"
            ]
        },
        specs: {
            en: {
                "Models": "2CM-1 / 2CM-2 / 2CM-2A",
                "Configuration": "Single row / Double ridge / Double ridge four lines",
                "Weight": "180kg / 200kg / 380kg",
                "Row Spacing": "500-800mm / 500-800mm / 500-1000mm",
                "Planting Distance": "180-350mm (all models)",
                "Seed Tank Capacity": "0.24m³ × 1 / 0.24m³ × 2 / 0.24m³ × 2",
                "Fertilizer Tank": "0.08m³ × 1 / 0.08m³ × 1 / 0.08m³ × 2",
                "Working Efficiency": "0.1-0.3 / 0.4-0.6 / 0.6-1 hm²/h",
                "Matched Power": "20-35 HP / 20-35 HP / 50-90 HP"
            },
            es: {
                "Modelos": "2CM-1 / 2CM-2 / 2CM-2A",
                "Configuración": "Una fila / Doble surco / Doble surco cuatro líneas",
                "Peso": "180kg / 200kg / 380kg",
                "Espaciado": "500-800mm / 500-800mm / 500-1000mm",
                "Distancia de siembra": "180-350mm",
                "Capacidad de semillas": "0.24m³×1 / 0.24m³×2 / 0.24m³×2",
                "Fertilizante": "0.08m³×1 / 0.08m³×1 / 0.08m³×2",
                "Eficiencia": "0.1-0.3 / 0.4-0.6 / 0.6-1 hm²/h",
                "Potencia": "20-35 HP / 20-35 HP / 50-90 HP"
            },
            fr: {
                "Modèles": "2CM-1 / 2CM-2 / 2CM-2A",
                "Configuration": "Monorang / Double rang / Double rang quatre lignes",
                "Poids": "180kg / 200kg / 380kg",
                "Espacement": "500-800mm / 500-800mm / 500-1000mm",
                "Distance plantation": "180-350mm",
                "Capacité semences": "0.24m³×1 / 0.24m³×2 / 0.24m³×2",
                "Engrais": "0.08m³×1 / 0.08m³×1 / 0.08m³×2",
                "Efficacité": "0.1-0.3 / 0.4-0.6 / 0.6-1 hm²/h",
                "Puissance": "20-35 HP / 20-35 HP / 50-90 HP"
            },
            ar: {
                "الموديلات": "2CM-1 / 2CM-2 / 2CM-2A",
                "التكوين": "صف واحد / صف مزدوج / صف مزدوج أربعة خطوط",
                "الوزن": "180 كجم / 200 كجم / 380 كجم",
                "تباعد الصفوف": "500-800 ملم / 500-800 ملم / 500-1000 ملم",
                "مسافة الزراعة": "180-350 ملم",
                "سعة خزان البذور": "0.24 م³×1 / 0.24 م³×2 / 0.24 م³×2",
                "خزان الأسمدة": "0.08 م³×1 / 0.08 م³×1 / 0.08 م³×2",
                "الكفاءة": "0.1-0.3 / 0.4-0.6 / 0.6-1 هكتار/ساعة",
                "القوة الملائمة": "20-35 حصان / 20-35 حصان / 50-90 حصان"
            },
            ru: {
                "Модели": "2CM-1 / 2CM-2 / 2CM-2A",
                "Конфигурация": "Однорядная / Двухрядная / Двухрядная четыре линии",
                "Вес": "180кг / 200кг / 380кг",
                "Расстояние": "500-800мм / 500-800мм / 500-1000мм",
                "Расстояние посадки": "180-350мм",
                "Бункер семян": "0.24м³×1 / 0.24м³×2 / 0.24м³×2",
                "Удобрения": "0.08м³×1 / 0.08м³×1 / 0.08м³×2",
                "Производительность": "0.1-0.3 / 0.4-0.6 / 0.6-1 га/ч",
                "Мощность": "20-35 л.с. / 20-35 л.с. / 50-90 л.с."
            },
            pt: {
                "Modelos": "2CM-1 / 2CM-2 / 2CM-2A",
                "Configuração": "Uma linha / Duas linhas / Duas linhas quatro fileiras",
                "Peso": "180kg / 200kg / 380kg",
                "Espaçamento": "500-800mm / 500-800mm / 500-1000mm",
                "Distância plantio": "180-350mm",
                "Capacidade sementes": "0.24m³×1 / 0.24m³×2 / 0.24m³×2",
                "Fertilizante": "0.08m³×1 / 0.08m³×1 / 0.08m³×2",
                "Eficiência": "0.1-0.3 / 0.4-0.6 / 0.6-1 hm²/h",
                "Potência": "20-35 HP / 20-35 HP / 50-90 HP"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Potato farming, large-scale agriculture, precision planting operations"
        }
    },

    // ============================================================
    //  🌾 农机具 → 收获机械 → 马铃薯收获机
    // ============================================================
    {
        id: "HV-002",
        category: "farm-machinery",
        subCategory: "harvesting",
        image: "/image/potatoharvester.jpg",
        name: {
            en: "4U Series Potato Harvester - Efficient Potato Digging & Collecting Machine",
            es: "Cosechadora de Patatas Serie 4U - Máquina Eficiente de Recolección",
            fr: "Arracheuse de Pommes de Terre Série 4U - Machine de Récolte Efficace",
            ar: "آلة حصاد البطاطس سلسلة 4U - آلة حفر وجمع فعالة",
            ru: "Картофелеуборочная машина серии 4U - Эффективная машина для копки и сбора",
            pt: "Colhedora de Batata Série 4U - Máquina Eficiente de Escavação e Recolha"
        },
        desc: {
            en: "The 4U Series Potato Harvester is a professional potato digging and collecting machine designed for efficient tuber harvesting. Available in single-row and double-row configurations with various functions including scattering, hand-tractor compatibility, and bunched dumping. Features adjustable row spacing, working depth, and high productivity. Ideal for potato farmers looking to reduce labor costs and increase harvesting efficiency.",
            es: "La cosechadora de patatas 4U es una máquina profesional de recolección. Disponible en configuraciones de una y dos filas. Ideal para reducir costos laborales y aumentar la eficiencia.",
            fr: "L'arracheuse de pommes de terre 4U est une machine professionnelle de récolte. Disponible en configurations mono-rang et double-rang. Idéale pour réduire les coûts de main-d'œuvre.",
            ar: "آلة حصاد البطاطس 4U هي آلة احترافية للحفر والجمع. متوفرة بتكوينات صف واحد وصف مزدوج. مثالية لتقليل تكاليف العمالة.",
            ru: "Картофелеуборочная машина 4U - профессиональная машина для копки и сбора. Доступна в однорядной и двухрядной конфигурациях.",
            pt: "A colhedora de batata 4U é uma máquina profissional de escavação e recolha. Disponível em configurações de uma e duas linhas."
        },
        features: {
            en: [
                "Multiple models: 4U-1 (single row scattering), 4U-1A (hand tractor compatible), 4U-1B (bunched dumping), 4U-2/2B (double row bunched dumping)",
                "Adjustable row spacing from 500-800mm to suit different row configurations",
                "Adjustable working depth (200-250mm) for optimal tuber extraction",
                "Working width up to 1300mm for double-row models",
                "High productivity up to 8 mu/h for efficient harvesting",
                "Compatible with 8-80 HP tractors across different models",
                "Durable construction for long service life",
                "Self-dumping and bunched discharge options for labor saving"
            ],
            es: [
                "Múltiples modelos: 4U-1, 4U-1A, 4U-1B, 4U-2/2B",
                "Espaciado ajustable 500-800mm",
                "Profundidad ajustable 200-250mm",
                "Ancho hasta 1300mm",
                "Productividad hasta 8 mu/h",
                "Compatibilidad con tractores 8-80 HP",
                "Construcción duradera",
                "Opciones de descarga automática"
            ],
            fr: [
                "Modèles multiples: 4U-1, 4U-1A, 4U-1B, 4U-2/2B",
                "Espacement ajustable 500-800mm",
                "Profondeur ajustable 200-250mm",
                "Largeur jusqu'à 1300mm",
                "Productivité jusqu'à 8 mu/h",
                "Compatibilité tracteurs 8-80 HP",
                "Construction durable",
                "Options de déchargement automatique"
            ],
            ar: [
                "موديلات متعددة: 4U-1، 4U-1A، 4U-1B، 4U-2/2B",
                "تباعد صفوف قابل للتعديل 500-800 ملم",
                "عمق عمل قابل للتعديل 200-250 ملم",
                "عرض عمل يصل إلى 1300 ملم",
                "إنتاجية تصل إلى 8 مو/ساعة",
                "متوافق مع جرارات 8-80 حصان",
                "بناء متين",
                "خيارات تفريغ ذاتي"
            ],
            ru: [
                "Несколько моделей: 4U-1, 4U-1A, 4U-1B, 4U-2/2B",
                "Регулируемое расстояние 500-800 мм",
                "Регулируемая глубина 200-250 мм",
                "Ширина до 1300 мм",
                "Производительность до 8 му/ч",
                "Совместимость с тракторами 8-80 л.с.",
                "Прочная конструкция",
                "Опции саморазгрузки"
            ],
            pt: [
                "Múltiplos modelos: 4U-1, 4U-1A, 4U-1B, 4U-2/2B",
                "Espaçamento ajustável 500-800mm",
                "Profundidade ajustável 200-250mm",
                "Largura até 1300mm",
                "Produtividade até 8 mu/h",
                "Compatibilidade com tratores 8-80 HP",
                "Construção durável",
                "Opções de descarga automática"
            ]
        },
        specs: {
            en: {
                "Models": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "Rows": "Single / Single / Single / Double",
                "Function": "Scattering / Hand tractor / Bunched dumping / Bunched dumping",
                "Row Spacing": "550-800mm / 500-650mm / 550-800mm / 550-800mm",
                "Working Depth": "250mm / 200mm / 250mm / 250mm",
                "Working Width": "650mm / 560mm / 650mm / 1300mm",
                "Weight": "180kg / 100kg / 120kg / 400-500kg",
                "Productivity": "3-5 mu/h / - / - / 5-8 mu/h",
                "Matched Power": "22-35 HP / 8-15 HP / 22-35 HP / 50-80 HP"
            },
            es: {
                "Modelos": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "Filas": "Una / Una / Una / Doble",
                "Función": "Esparcimiento / Tractor de mano / Apilado / Apilado",
                "Espaciado": "550-800mm / 500-650mm / 550-800mm / 550-800mm",
                "Profundidad": "250mm / 200mm / 250mm / 250mm",
                "Ancho": "650mm / 560mm / 650mm / 1300mm",
                "Peso": "180kg / 100kg / 120kg / 400-500kg",
                "Productividad": "3-5 mu/h / - / - / 5-8 mu/h",
                "Potencia": "22-35 HP / 8-15 HP / 22-35 HP / 50-80 HP"
            },
            fr: {
                "Modèles": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "Rangs": "Un / Un / Un / Double",
                "Fonction": "Épandage / Tracteur manuel / Déchargement / Déchargement",
                "Espacement": "550-800mm / 500-650mm / 550-800mm / 550-800mm",
                "Profondeur": "250mm / 200mm / 250mm / 250mm",
                "Largeur": "650mm / 560mm / 650mm / 1300mm",
                "Poids": "180kg / 100kg / 120kg / 400-500kg",
                "Productivité": "3-5 mu/h / - / - / 5-8 mu/h",
                "Puissance": "22-35 HP / 8-15 HP / 22-35 HP / 50-80 HP"
            },
            ar: {
                "الموديلات": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "الصفوف": "واحد / واحد / واحد / مزدوج",
                "الوظيفة": "نثر / جرار يدوي / تفريغ مكدس / تفريغ مكدس",
                "تباعد الصفوف": "550-800 ملم / 500-650 ملم / 550-800 ملم / 550-800 ملم",
                "عمق العمل": "250 ملم / 200 ملم / 250 ملم / 250 ملم",
                "عرض العمل": "650 ملم / 560 ملم / 650 ملم / 1300 ملم",
                "الوزن": "180 كجم / 100 كجم / 120 كجم / 400-500 كجم",
                "الإنتاجية": "3-5 مو/ساعة / - / - / 5-8 مو/ساعة",
                "القوة الملائمة": "22-35 حصان / 8-15 حصان / 22-35 حصان / 50-80 حصان"
            },
            ru: {
                "Модели": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "Ряды": "Один / Один / Один / Двойной",
                "Функция": "Разбрасывание / Мотоблок / Кучная выгрузка / Кучная выгрузка",
                "Расстояние": "550-800мм / 500-650мм / 550-800мм / 550-800мм",
                "Глубина": "250мм / 200мм / 250мм / 250мм",
                "Ширина": "650мм / 560мм / 650мм / 1300мм",
                "Вес": "180кг / 100кг / 120кг / 400-500кг",
                "Производительность": "3-5 му/ч / - / - / 5-8 му/ч",
                "Мощность": "22-35 л.с. / 8-15 л.с. / 22-35 л.с. / 50-80 л.с."
            },
            pt: {
                "Modelos": "4U-1 / 4U-1A / 4U-1B / 4U-2/2B",
                "Linhas": "Uma / Uma / Uma / Dupla",
                "Função": "Espalhamento / Trator manual / Descarga / Descarga",
                "Espaçamento": "550-800mm / 500-650mm / 550-800mm / 550-800mm",
                "Profundidade": "250mm / 200mm / 250mm / 250mm",
                "Largura": "650mm / 560mm / 650mm / 1300mm",
                "Peso": "180kg / 100kg / 120kg / 400-500kg",
                "Produtividade": "3-5 mu/h / - / - / 5-8 mu/h",
                "Potência": "22-35 HP / 8-15 HP / 22-35 HP / 50-80 HP"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Potato harvesting, root crop harvesting, small to medium scale farming"
        }
    },

            // ============================================================
    //  🌾 农机具 → 耕整地机械 → 圆盘犁系列
    //  根据 product catalog_05.png 生成
    // ============================================================
    
    // ============================================================
    //  1LYT系列 单向圆盘犁 (2-7铧)
    // ============================================================
    {
        id: "TL-004",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/1lyt.jpg",
        name: {
            en: "1LYT Series One-Way Disc Plough - Heavy-Duty Tillage Equipment",
            es: "Arado de Discos Unidireccional Serie 1LYT - Equipo de Labranza Pesada",
            fr: "Charrue à Disques Unidirectionnelle Série 1LYT - Matériel de Travail du Sol Lourd",
            ar: "محراث قرصي أحادي الاتجاه سلسلة 1LYT - معدات حراثة ثقيلة",
            ru: "Односторонний дисковый плуг серии 1LYT - Тяжелое почвообрабатывающее оборудование",
            pt: "Arado de Discos Unidirecional Série 1LYT - Equipamento de Preparo do Solo Pesado"
        },
        desc: {
            en: "The 1LYT Series One-Way Disc Plough is designed for ploughing cultivated land and virgin land, especially suitable for green manure fields with rice or wheat stubble. Features excellent soil penetration, good covering quality, and low working resistance. Available in 2 to 7 disc configurations with working widths from 500-1750mm. Ideal for large-scale farming operations requiring efficient primary tillage.",
            es: "El arado de discos 1LYT está diseñado para tierras cultivadas y vírgenes. Excelente penetración y calidad de cobertura. Disponible en configuraciones de 2 a 7 discos.",
            fr: "La charrue à disques 1LYT est conçue pour les terres cultivées et vierges. Excellente pénétration et qualité de couverture. Disponible en configurations de 2 à 7 disques.",
            ar: "محراث الأقراص 1LYT مصمم للأراضي المزروعة والبكر. اختراق ممتاز وجودة تغطية. متوفر بتكوينات من 2 إلى 7 أقراص.",
            ru: "Плуг 1LYT предназначен для пахотных и целинных земель. Отличное проникновение и качество укрытия. Доступен в конфигурациях от 2 до 7 дисков.",
            pt: "O arado de discos 1LYT é projetado para terras cultivadas e virgens. Excelente penetração e qualidade de cobertura. Disponível em configurações de 2 a 7 discos."
        },
        features: {
            en: [
                "2 to 7 disc configurations for flexible working width selection",
                "Working width from 500-1750mm to suit different tractor sizes",
                "Working depth 250-350mm for deep tillage",
                "Disc diameter 660/710mm for excellent soil penetration",
                "Category II three-point linkage for easy mounting",
                "Low working resistance for fuel efficiency",
                "Durable construction for long service life",
                "Suitable for stubble fields and virgin land"
            ],
            es: [
                "Configuraciones de 2 a 7 discos",
                "Ancho de trabajo 500-1750mm",
                "Profundidad 250-350mm",
                "Diámetro del disco 660/710mm",
                "Enganche de tres puntos Categoría II",
                "Baja resistencia al trabajo",
                "Construcción duradera",
                "Adecuado para rastrojos y tierras vírgenes"
            ],
            fr: [
                "Configurations de 2 à 7 disques",
                "Largeur de travail 500-1750mm",
                "Profondeur 250-350mm",
                "Diamètre du disque 660/710mm",
                "Attelage trois points Catégorie II",
                "Faible résistance au travail",
                "Construction durable",
                "Convient aux chaumes et terres vierges"
            ],
            ar: [
                "تكوينات من 2 إلى 7 أقراص",
                "عرض العمل 500-1750 ملم",
                "عمق العمل 250-350 ملم",
                "قطر القرص 660/710 ملم",
                "توصيل ثلاث نقاط الفئة II",
                "مقاومة عمل منخفضة",
                "بناء متين",
                "مناسب للحقول المزروعة والأراضي البكر"
            ],
            ru: [
                "Конфигурации от 2 до 7 дисков",
                "Рабочая ширина 500-1750 мм",
                "Глубина 250-350 мм",
                "Диаметр диска 660/710 мм",
                "Трехточечная навеска категории II",
                "Низкое сопротивление работе",
                "Прочная конструкция",
                "Подходит для стерни и целины"
            ],
            pt: [
                "Configurações de 2 a 7 discos",
                "Largura de trabalho 500-1750mm",
                "Profundidade 250-350mm",
                "Diâmetro do disco 660/710mm",
                "Engate de três pontos Categoria II",
                "Baixa resistência ao trabalho",
                "Construção durável",
                "Adequado para restolho e terras virgens"
            ]
        },
        specs: {
            en: {
                "Models": "1LYT-225J to 1LYTJ-725J",
                "Discs": "2 / 3 / 4 / 5 / 6 / 7",
                "Working Width": "500mm / 750mm / 1000mm / 1250mm / 1500mm / 1750mm",
                "Working Depth": "250-350mm (all models)",
                "Disc Diameter": "660/710mm",
                "Weight": "350kg / 500kg / 600kg / 700kg / 800kg / 1150kg",
                "Linkage": "Category II Three-Point Mounted"
            },
            es: {
                "Modelos": "1LYT-225J a 1LYTJ-725J",
                "Discos": "2 / 3 / 4 / 5 / 6 / 7",
                "Ancho": "500mm / 750mm / 1000mm / 1250mm / 1500mm / 1750mm",
                "Profundidad": "250-350mm",
                "Diámetro": "660/710mm",
                "Peso": "350kg / 500kg / 600kg / 700kg / 800kg / 1150kg",
                "Enganche": "Tres Puntos Categoría II"
            },
            fr: {
                "Modèles": "1LYT-225J à 1LYTJ-725J",
                "Disques": "2 / 3 / 4 / 5 / 6 / 7",
                "Largeur": "500mm / 750mm / 1000mm / 1250mm / 1500mm / 1750mm",
                "Profondeur": "250-350mm",
                "Diamètre": "660/710mm",
                "Poids": "350kg / 500kg / 600kg / 700kg / 800kg / 1150kg",
                "Attelage": "Trois Points Catégorie II"
            },
            ar: {
                "الموديلات": "1LYT-225J إلى 1LYTJ-725J",
                "الأقراص": "2 / 3 / 4 / 5 / 6 / 7",
                "العرض": "500 ملم / 750 ملم / 1000 ملم / 1250 ملم / 1500 ملم / 1750 ملم",
                "العمق": "250-350 ملم",
                "القطر": "660/710 ملم",
                "الوزن": "350 كجم / 500 كجم / 600 كجم / 700 كجم / 800 كجم / 1150 كجم",
                "التوصيل": "ثلاث نقاط الفئة II"
            },
            ru: {
                "Модели": "1LYT-225J до 1LYTJ-725J",
                "Диски": "2 / 3 / 4 / 5 / 6 / 7",
                "Ширина": "500мм / 750мм / 1000мм / 1250мм / 1500мм / 1750мм",
                "Глубина": "250-350мм",
                "Диаметр": "660/710мм",
                "Вес": "350кг / 500кг / 600кг / 700кг / 800кг / 1150кг",
                "Навеска": "Трехточечная категории II"
            },
            pt: {
                "Modelos": "1LYT-225J a 1LYTJ-725J",
                "Discos": "2 / 3 / 4 / 5 / 6 / 7",
                "Largura": "500mm / 750mm / 1000mm / 1250mm / 1500mm / 1750mm",
                "Profundidade": "250-350mm",
                "Diâmetro": "660/710mm",
                "Peso": "350kg / 500kg / 600kg / 700kg / 800kg / 1150kg",
                "Engate": "Três Pontos Categoria II"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Primary tillage, stubble management, virgin land development, large-scale farming"
        }
    },

    // ============================================================
    //  1LYQ系列 单向圆盘犁 (轻量型)
    // ============================================================
    {
        id: "TL-005",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/1lyq.jpg",
        name: {
            en: "1LYQ Series Light-Duty Disc Plough - Versatile Primary Tillage Tool",
            es: "Arado de Discos Ligero Serie 1LYQ - Herramienta Versátil de Labranza",
            fr: "Charrue à Disques Légère Série 1LYQ - Outil de Travail du Sol Polyvalent",
            ar: "محراث قرصي خفيف سلسلة 1LYQ - أداة حراثة متعددة الاستخدامات",
            ru: "Легкий дисковый плуг серии 1LYQ - Универсальное орудие для основной обработки",
            pt: "Arado de Discos Leve Série 1LYQ - Ferramenta Versátil de Preparo do Solo"
        },
        desc: {
            en: "The 1LYQ Series Light-Duty Disc Plough is a versatile primary tillage tool suitable for various soil conditions. Features 3-4 disc configurations with working widths from 460-800mm. Lightweight design reduces tractor power requirements while maintaining excellent soil penetration and covering quality. Ideal for small to medium farms and operations with lower horsepower tractors.",
            es: "El arado 1LYQ es una herramienta versátil para diversas condiciones de suelo. Diseño ligero que reduce los requisitos de potencia. Ideal para granjas pequeñas y medianas.",
            fr: "La charrue 1LYQ est un outil polyvalent pour diverses conditions de sol. Conception légère réduisant les besoins en puissance. Idéal pour les petites et moyennes exploitations.",
            ar: "محراث 1LYQ هو أداة متعددة الاستخدامات لمختلف ظروف التربة. تصميم خفيف يقلل من متطلبات الطاقة. مثالي للمزارع الصغيرة والمتوسطة.",
            ru: "Плуг 1LYQ - универсальное орудие для различных почвенных условий. Легкая конструкция снижает требования к мощности. Идеален для малых и средних ферм.",
            pt: "O arado 1LYQ é uma ferramenta versátil para várias condições de solo. Design leve reduz os requisitos de potência. Ideal para pequenas e médias fazendas."
        },
        features: {
            en: [
                "3-4 disc configurations for flexible operation",
                "Working width 460-800mm for versatile applications",
                "Lightweight design (170-250kg) for easy handling",
                "Disc diameter 450-510mm for good penetration",
                "Category II three-point linkage",
                "Low power requirement for smaller tractors",
                "Easy operation and adjustment",
                "Suitable for various soil conditions"
            ],
            es: [
                "Configuraciones de 3-4 discos",
                "Ancho 460-800mm",
                "Diseño ligero 170-250kg",
                "Diámetro 450-510mm",
                "Enganche tres puntos Categoría II",
                "Bajo requerimiento de potencia",
                "Fácil operación y ajuste",
                "Adecuado para varias condiciones de suelo"
            ],
            fr: [
                "Configurations de 3-4 disques",
                "Largeur 460-800mm",
                "Conception légère 170-250kg",
                "Diamètre 450-510mm",
                "Attelage trois points Catégorie II",
                "Faible besoin en puissance",
                "Facile à utiliser et ajuster",
                "Convient à diverses conditions de sol"
            ],
            ar: [
                "تكوينات 3-4 أقراص",
                "عرض 460-800 ملم",
                "تصميم خفيف 170-250 كجم",
                "قطر 450-510 ملم",
                "توصيل ثلاث نقاط الفئة II",
                "متطلبات طاقة منخفضة",
                "تشغيل وتعديل سهل",
                "مناسب لمختلف ظروف التربة"
            ],
            ru: [
                "Конфигурации 3-4 дисков",
                "Ширина 460-800 мм",
                "Легкая конструкция 170-250 кг",
                "Диаметр 450-510 мм",
                "Трехточечная навеска категории II",
                "Низкие требования к мощности",
                "Легкая эксплуатация и регулировка",
                "Подходит для различных почв"
            ],
            pt: [
                "Configurações de 3-4 discos",
                "Largura 460-800mm",
                "Design leve 170-250kg",
                "Diâmetro 450-510mm",
                "Engate três pontos Categoria II",
                "Baixo requisito de potência",
                "Operação e ajuste fáceis",
                "Adequado para várias condições de solo"
            ]
        },
        specs: {
            en: {
                "Models": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "Discs": "3 / 3 / 4",
                "Working Width": "460mm / 600mm / 800mm",
                "Working Depth": "180mm / 200mm / 200mm",
                "Disc Diameter": "450mm / 500mm / 510mm",
                "Weight": "170kg / 190kg / 250kg",
                "Linkage": "Category II Three-Point Mounted"
            },
            es: {
                "Modelos": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "Discos": "3 / 3 / 4",
                "Ancho": "460mm / 600mm / 800mm",
                "Profundidad": "180mm / 200mm / 200mm",
                "Diámetro": "450mm / 500mm / 510mm",
                "Peso": "170kg / 190kg / 250kg",
                "Enganche": "Tres Puntos Categoría II"
            },
            fr: {
                "Modèles": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "Disques": "3 / 3 / 4",
                "Largeur": "460mm / 600mm / 800mm",
                "Profondeur": "180mm / 200mm / 200mm",
                "Diamètre": "450mm / 500mm / 510mm",
                "Poids": "170kg / 190kg / 250kg",
                "Attelage": "Trois Points Catégorie II"
            },
            ar: {
                "الموديلات": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "الأقراص": "3 / 3 / 4",
                "العرض": "460 ملم / 600 ملم / 800 ملم",
                "العمق": "180 ملم / 200 ملم / 200 ملم",
                "القطر": "450 ملم / 500 ملم / 510 ملم",
                "الوزن": "170 كجم / 190 كجم / 250 كجم",
                "التوصيل": "ثلاث نقاط الفئة II"
            },
            ru: {
                "Модели": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "Диски": "3 / 3 / 4",
                "Ширина": "460мм / 600мм / 800мм",
                "Глубина": "180мм / 200мм / 200мм",
                "Диаметр": "450мм / 500мм / 510мм",
                "Вес": "170кг / 190кг / 250кг",
                "Навеска": "Трехточечная категории II"
            },
            pt: {
                "Modelos": "1LYQ-315 / 1LYQ-320 / 1LYQ-420",
                "Discos": "3 / 3 / 4",
                "Largura": "460mm / 600mm / 800mm",
                "Profundidade": "180mm / 200mm / 200mm",
                "Diâmetro": "450mm / 500mm / 510mm",
                "Peso": "170kg / 190kg / 250kg",
                "Engate": "Três Pontos Categoria II"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Small to medium farms, green manure fields, stubble management, light to medium soil conditions"
        }
    },

    // ============================================================
    //  1LYX系列 重型圆盘犁 (复杂地形)
    // ============================================================
    {
        id: "TL-006",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/1lyx-main.jpg",
        name: {
            en: "1LYX Series Heavy-Duty Disc Plough - Extreme Soil Condition Specialist",
            es: "Arado de Discos Pesado Serie 1LYX - Especialista en Condiciones Extremas",
            fr: "Charrue à Disques Lourde Série 1LYX - Spécialiste des Conditions Extrêmes",
            ar: "محراث قرصي ثقيل سلسلة 1LYX - متخصص في ظروف التربة القاسية",
            ru: "Тяжелый дисковый плуг серии 1LYX - Специалист по экстремальным почвам",
            pt: "Arado de Discos Pesado Série 1LYX - Especialista em Condições Extremas"
        },
        desc: {
            en: "The 1LYX Series Heavy-Duty Disc Plough is designed for challenging conditions including weedy fields, heavy soil resistance, and fields with stones and debris. Features rotating disc action that cuts through grass and stalks without clogging or blocking. Available in 2-6 disc configurations with working widths from 600-1800mm. Ideal for rough terrain and difficult ploughing conditions where standard ploughs fail.",
            es: "El arado 1LYX está diseñado para condiciones difíciles: campos con maleza, resistencia pesada y piedras. Acción rotativa que corta sin obstrucciones. Ideal para terrenos difíciles.",
            fr: "La charrue 1LYX est conçue pour les conditions difficiles. Action rotative qui coupe sans obstruction. Idéale pour les terrains difficiles.",
            ar: "محراث 1LYX مصمم للظروف الصعبة. حركة دوارة تقطع دون انسداد. مثالي للأراضي الوعرة.",
            ru: "Плуг 1LYX предназначен для сложных условий. Вращающееся действие режет без забивания. Идеален для пересеченной местности.",
            pt: "O arado 1LYX é projetado para condições difíceis. Ação rotativa que corta sem obstrução. Ideal para terrenos acidentados."
        },
        features: {
            en: [
                "2-6 disc configurations for flexible operation",
                "Working width 600-1800mm for various field sizes",
                "Working depth 250-350mm for deep tillage",
                "Rotating disc action prevents clogging and blocking",
                "Cuts through grass, stalks, and crop residues easily",
                "Overcomes stones and debris in the field",
                "High working efficiency with good quality",
                "Easy to adjust and durable construction"
            ],
            es: [
                "Configuraciones 2-6 discos",
                "Ancho 600-1800mm",
                "Profundidad 250-350mm",
                "Acción rotativa sin obstrucciones",
                "Corta pasto y tallos fácilmente",
                "Supera piedras y escombros",
                "Alta eficiencia y calidad",
                "Fácil ajuste y construcción duradera"
            ],
            fr: [
                "Configurations 2-6 disques",
                "Largeur 600-1800mm",
                "Profondeur 250-350mm",
                "Action rotative sans obstruction",
                "Coupe herbe et tiges facilement",
                "Surmonte pierres et débris",
                "Haute efficacité et qualité",
                "Réglage facile et construction durable"
            ],
            ar: [
                "تكوينات 2-6 أقراص",
                "عرض 600-1800 ملم",
                "عمق 250-350 ملم",
                "حركة دوارة تمنع الانسداد",
                "يقطع الأعشاب والسيقان بسهولة",
                "يتغلب على الحجارة والحطام",
                "كفاءة عالية وجودة جيدة",
                "تعديل سهل وبناء متين"
            ],
            ru: [
                "Конфигурации 2-6 дисков",
                "Ширина 600-1800 мм",
                "Глубина 250-350 мм",
                "Вращательное действие без забивания",
                "Легко режет траву и стебли",
                "Преодолевает камни и мусор",
                "Высокая эффективность и качество",
                "Легкая регулировка и прочная конструкция"
            ],
            pt: [
                "Configurações 2-6 discos",
                "Largura 600-1800mm",
                "Profundidade 250-350mm",
                "Ação rotativa sem obstrução",
                "Corta grama e caules facilmente",
                "Supera pedras e detritos",
                "Alta eficiência e qualidade",
                "Ajuste fácil e construção durável"
            ]
        },
        specs: {
            en: {
                "Models": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "Discs": "2 / 3 / 4 / 5 / 6",
                "Working Width": "600mm / 900mm / 1200mm / 1500mm / 1800mm",
                "Working Depth": "250-350mm (all models)",
                "Weight": "280kg / 350kg / 430kg / 500kg / 580kg",
                "Linkage": "Category II Three-Point Mounted"
            },
            es: {
                "Modelos": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "Discos": "2 / 3 / 4 / 5 / 6",
                "Ancho": "600mm / 900mm / 1200mm / 1500mm / 1800mm",
                "Profundidad": "250-350mm",
                "Peso": "280kg / 350kg / 430kg / 500kg / 580kg",
                "Enganche": "Tres Puntos Categoría II"
            },
            fr: {
                "Modèles": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "Disques": "2 / 3 / 4 / 5 / 6",
                "Largeur": "600mm / 900mm / 1200mm / 1500mm / 1800mm",
                "Profondeur": "250-350mm",
                "Poids": "280kg / 350kg / 430kg / 500kg / 580kg",
                "Attelage": "Trois Points Catégorie II"
            },
            ar: {
                "الموديلات": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "الأقراص": "2 / 3 / 4 / 5 / 6",
                "العرض": "600 ملم / 900 ملم / 1200 ملم / 1500 ملم / 1800 ملم",
                "العمق": "250-350 ملم",
                "الوزن": "280 كجم / 350 كجم / 430 كجم / 500 كجم / 580 كجم",
                "التوصيل": "ثلاث نقاط الفئة II"
            },
            ru: {
                "Модели": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "Диски": "2 / 3 / 4 / 5 / 6",
                "Ширина": "600мм / 900мм / 1200мм / 1500мм / 1800мм",
                "Глубина": "250-350мм",
                "Вес": "280кг / 350кг / 430кг / 500кг / 580кг",
                "Навеска": "Трехточечная категории II"
            },
            pt: {
                "Modelos": "1LYX-230 / 1LYX-330 / 1LYX-430 / 1LYX-530 / 1LYX-630",
                "Discos": "2 / 3 / 4 / 5 / 6",
                "Largura": "600mm / 900mm / 1200mm / 1500mm / 1800mm",
                "Profundidade": "250-350mm",
                "Peso": "280kg / 350kg / 430kg / 500kg / 580kg",
                "Engate": "Três Pontos Categoria II"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Weedy fields, stony terrain, heavy soil, rough farmland, challenging ploughing conditions"
        }
    },
        // ============================================================
    //  🌾 农机具 → 耕整地机械 → 悬挂式轻型圆盘耙
    // ============================================================
    {
        id: "TL-007",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/1bqx.jpg",
        name: {
            en: "1BQX Series Mounted Light-Duty Disc Harrow - Seedbed Preparation",
            es: "Grada de Discos Ligera Montada Serie 1BQX - Preparación de Lecho de Siembra",
            fr: "Herse à Disques Légère Portée Série 1BQX - Préparation du Lit de Semences",
            ar: "مشط قرصي خفيف مثبت سلسلة 1BQX - تجهيز أحواض البذور",
            ru: "Навесная легкая дисковая борона серии 1BQX - Подготовка грядок",
            pt: "Grade de Discos Leve Montada Série 1BQX - Preparação de Canteiros"
        },
        desc: {
            en: "The 1BQX Series Mounted Light-Duty Disc Harrow is designed for crushing clods after tillage, preparing soil before seeding, mixing soil and fertilizer, and stubble cleaning in light soil fields. Features a durable structure with strong raking ability. Available in working widths from 600-5000mm with disc counts from 8 to 60. Compatible with 10-100 HP tractors. Ideal for small to medium farms requiring efficient seedbed preparation.",
            es: "La grada de discos ligera 1BQX está diseñada para desmenuzar terrones, preparar el suelo antes de la siembra y mezclar fertilizante. Disponible en anchos de 600-5000mm. Compatible con tractores de 10-100 HP. Ideal para granjas pequeñas y medianas.",
            fr: "La herse à disques légère 1BQX est conçue pour briser les mottes, préparer le sol avant le semis et mélanger l'engrais. Disponible en largeurs de 600-5000mm. Compatible avec tracteurs de 10-100 HP.",
            ar: "مشط الأقراص الخفيف 1BQX مصمم لتفتيت الكتل بعد الحراثة وتحضير التربة للزراعة. متوفر بعروض عمل من 600-5000 ملم. متوافق مع جرارات 10-100 حصان.",
            ru: "Легкая дисковая борона 1BQX предназначена для рыхления комьев после вспашки и подготовки почвы к посеву. Ширина от 600 до 5000 мм. Совместима с тракторами 10-100 л.с.",
            pt: "A grade de discos leve 1BQX é projetada para quebrar torrões e preparar o solo para o plantio. Disponível em larguras de 600-5000mm. Compatível com tratores de 10-100 HP."
        },
        features: {
            en: [
                "Wide range of working widths: 600mm to 5000mm for flexible field operations",
                "Disc count from 8 to 60 discs for different soil conditions",
                "460mm disc diameter for effective soil penetration and clod crushing",
                "Strong raking ability with good soil pulverization",
                "Durable construction for long service life",
                "Easy to use and maintain with simple linkage",
                "Suitable for light soil fields and stubble cleaning",
                "Working depth 100-140mm for optimal seedbed preparation"
            ],
            es: [
                "Amplia gama de anchos: 600mm a 5000mm",
                "De 8 a 60 discos para diferentes condiciones de suelo",
                "Diámetro de disco de 460mm",
                "Fuerte capacidad de desmenuzado",
                "Construcción duradera",
                "Fácil de usar y mantener",
                "Adecuado para suelos ligeros",
                "Profundidad de trabajo 100-140mm"
            ],
            fr: [
                "Large gamme de largeurs: 600mm à 5000mm",
                "De 8 à 60 disques",
                "Diamètre de disque 460mm",
                "Bonne capacité de pulvérisation",
                "Construction durable",
                "Facile à utiliser et entretenir",
                "Convient aux sols légers",
                "Profondeur de travail 100-140mm"
            ],
            ar: [
                "مجموعة واسعة من عروض العمل: 600 إلى 5000 ملم",
                "من 8 إلى 60 قرصاً",
                "قطر القرص 460 ملم",
                "قوة تمشيط عالية",
                "بناء متين",
                "سهل الاستخدام والصيانة",
                "مناسب للتربة الخفيفة",
                "عمق العمل 100-140 ملم"
            ],
            ru: [
                "Широкий диапазон ширины: от 600 до 5000 мм",
                "От 8 до 60 дисков",
                "Диаметр диска 460 мм",
                "Высокая способность к рыхлению",
                "Прочная конструкция",
                "Легкость в использовании и обслуживании",
                "Подходит для легких почв",
                "Глубина обработки 100-140 мм"
            ],
            pt: [
                "Ampla gama de larguras: 600mm a 5000mm",
                "De 8 a 60 discos",
                "Diâmetro do disco 460mm",
                "Alta capacidade de pulverização",
                "Construção durável",
                "Fácil de usar e manter",
                "Adequado para solos leves",
                "Profundidade de trabalho 100-140mm"
            ]
        },
        specs: {
            en: {
                "Models": "1BQS-0.6 to 1BQX-5.0 (14 models)",
                "Working Width": "600-5000mm",
                "Working Depth": "100-140mm",
                "Disc Diameter": "460mm",
                "Disc Count": "8-60 discs",
                "Weight": "80-1550kg",
                "Linkage": "Mounted / Trailed",
                "Matched Power": "10-100 HP"
            },
            es: {
                "Modelos": "1BQS-0.6 a 1BQX-5.0 (14 modelos)",
                "Ancho": "600-5000mm",
                "Profundidad": "100-140mm",
                "Diámetro": "460mm",
                "Discos": "8-60 discos",
                "Peso": "80-1550kg",
                "Enganche": "Montado / Remolcado",
                "Potencia": "10-100 HP"
            },
            fr: {
                "Modèles": "1BQS-0.6 à 1BQX-5.0 (14 modèles)",
                "Largeur": "600-5000mm",
                "Profondeur": "100-140mm",
                "Diamètre": "460mm",
                "Disques": "8-60 disques",
                "Poids": "80-1550kg",
                "Attelage": "Porté / Remorqué",
                "Puissance": "10-100 HP"
            },
            ar: {
                "الموديلات": "1BQS-0.6 إلى 1BQX-5.0 (14 موديل)",
                "عرض العمل": "600-5000 ملم",
                "عمق العمل": "100-140 ملم",
                "قطر القرص": "460 ملم",
                "عدد الأقراص": "8-60 قرصاً",
                "الوزن": "80-1550 كجم",
                "التوصيل": "مثبت / مقطور",
                "القوة الملائمة": "10-100 حصان"
            },
            ru: {
                "Модели": "1BQS-0.6 до 1BQX-5.0 (14 моделей)",
                "Ширина": "600-5000 мм",
                "Глубина": "100-140 мм",
                "Диаметр": "460 мм",
                "Диски": "8-60 дисков",
                "Вес": "80-1550 кг",
                "Навеска": "Навесная / Прицепная",
                "Мощность": "10-100 л.с."
            },
            pt: {
                "Modelos": "1BQS-0.6 a 1BQX-5.0 (14 modelos)",
                "Largura": "600-5000mm",
                "Profundidade": "100-140mm",
                "Diâmetro": "460mm",
                "Discos": "8-60 discos",
                "Peso": "80-1550kg",
                "Engate": "Montado / Rebocado",
                "Potência": "10-100 HP"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Seedbed preparation, stubble cleaning, light soil fields, small to medium farms"
        }
    },

    // ============================================================
    //  🌾 农机具 → 耕整地机械 → 对置式轻型圆盘耙
    // ============================================================
    {
        id: "TL-008",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/harrow-main.jpg",
        name: {
            en: "1BQDX Series Opposed Light-Duty Disc Harrow - Fine Soil Preparation",
            es: "Grada de Discos Ligera Oponente Serie 1BQDX - Preparación Fina del Suelo",
            fr: "Herse à Disques Légère Opposée Série 1BQDX - Préparation Fine du Sol",
            ar: "مشط قرصي خفيف متقابل سلسلة 1BQDX - تحضير دقيق للتربة",
            ru: "Легкая противоходная дисковая борона серии 1BQDX - Тонкая подготовка почвы",
            pt: "Grade de Discos Leve Oposta Série 1BQDX - Preparação Fina do Solo"
        },
        desc: {
            en: "The 1BQDX Series Opposed Light-Duty Disc Harrow is designed for crushing clods after tillage, preparing soil before seeding, mixing soil and fertilizer, and stubble cleaning in light to medium soil fields. Features opposed disc arrangement for balanced soil penetration and smooth operation. Available in working widths from 1300-3000mm with disc counts from 16 to 36. Compatible with 30-100 HP tractors. Ideal for farms requiring fine seedbed preparation.",
            es: "La grada de discos opuesta 1BQDX está diseñada para desmenuzar terrones y preparar el suelo. Disposición de discos opuesta para operación suave. Disponible en anchos de 1300-3000mm. Compatible con tractores de 30-100 HP.",
            fr: "La herse à disques opposée 1BQDX est conçue pour briser les mottes et préparer le sol. Disposition opposée des disques pour un fonctionnement en douceur. Disponible en largeurs de 1300-3000mm.",
            ar: "مشط الأقراص المتقابل 1BQDX مصمم لتفتيت الكتل وتحضير التربة. ترتيب أقراص متقابل للتشغيل السلس. متوفر بعروض عمل 1300-3000 ملم.",
            ru: "Противоходная борона 1BQDX предназначена для рыхления почвы. Противоходное расположение дисков обеспечивает плавную работу. Ширина 1300-3000 мм.",
            pt: "A grade de discos oposta 1BQDX é projetada para quebrar torrões e preparar o solo. Disposição oposta de discos para operação suave. Largura de 1300-3000mm."
        },
        features: {
            en: [
                "Opposed disc arrangement for balanced soil penetration",
                "Working widths from 1300-3000mm for medium to large fields",
                "Disc count from 16 to 36 discs for effective soil preparation",
                "460mm disc diameter for good soil pulverization",
                "Working depth 100-140mm for optimal seedbed preparation",
                "Strong raking ability with smooth operation",
                "Durable and easy to maintain",
                "Suitable for light to medium soil fields"
            ],
            es: [
                "Disposición opuesta de discos para penetración equilibrada",
                "Anchos de 1300-3000mm",
                "De 16 a 36 discos",
                "Diámetro de disco 460mm",
                "Profundidad 100-140mm",
                "Operación suave",
                "Durable y fácil de mantener",
                "Adecuado para suelos ligeros a medios"
            ],
            fr: [
                "Disposition opposée des disques",
                "Largeurs de 1300-3000mm",
                "De 16 à 36 disques",
                "Diamètre 460mm",
                "Profondeur 100-140mm",
                "Fonctionnement en douceur",
                "Durable et facile à entretenir",
                "Convient aux sols légers à moyens"
            ],
            ar: [
                "ترتيب أقراص متقابل للاختراق المتوازن",
                "عروض عمل 1300-3000 ملم",
                "من 16 إلى 36 قرصاً",
                "قطر القرص 460 ملم",
                "عمق العمل 100-140 ملم",
                "تشغيل سلس",
                "متين وسهل الصيانة",
                "مناسب للتربة الخفيفة إلى المتوسطة"
            ],
            ru: [
                "Противоходное расположение дисков",
                "Ширина 1300-3000 мм",
                "От 16 до 36 дисков",
                "Диаметр 460 мм",
                "Глубина 100-140 мм",
                "Плавная работа",
                "Долговечная и простая в обслуживании",
                "Подходит для легких и средних почв"
            ],
            pt: [
                "Disposição oposta de discos",
                "Larguras de 1300-3000mm",
                "De 16 a 36 discos",
                "Diâmetro 460mm",
                "Profundidade 100-140mm",
                "Operação suave",
                "Durável e fácil de manter",
                "Adequado para solos leves a médios"
            ]
        },
        specs: {
            en: {
                "Models": "1BQDX-1.3 to 1BQDX-3.0 (6 models)",
                "Working Width": "1300-3000mm",
                "Working Depth": "100-140mm",
                "Disc Diameter": "460mm",
                "Disc Count": "16-36 discs",
                "Weight": "300-650kg",
                "Linkage": "Mounted",
                "Matched Power": "30-100 HP"
            },
            es: {
                "Modelos": "1BQDX-1.3 a 1BQDX-3.0 (6 modelos)",
                "Ancho": "1300-3000mm",
                "Profundidad": "100-140mm",
                "Diámetro": "460mm",
                "Discos": "16-36 discos",
                "Peso": "300-650kg",
                "Enganche": "Montado",
                "Potencia": "30-100 HP"
            },
            fr: {
                "Modèles": "1BQDX-1.3 à 1BQDX-3.0 (6 modèles)",
                "Largeur": "1300-3000mm",
                "Profondeur": "100-140mm",
                "Diamètre": "460mm",
                "Disques": "16-36 disques",
                "Poids": "300-650kg",
                "Attelage": "Porté",
                "Puissance": "30-100 HP"
            },
            ar: {
                "الموديلات": "1BQDX-1.3 إلى 1BQDX-3.0 (6 موديلات)",
                "عرض العمل": "1300-3000 ملم",
                "عمق العمل": "100-140 ملم",
                "قطر القرص": "460 ملم",
                "عدد الأقراص": "16-36 قرصاً",
                "الوزن": "300-650 كجم",
                "التوصيل": "مثبت",
                "القوة الملائمة": "30-100 حصان"
            },
            ru: {
                "Модели": "1BQDX-1.3 до 1BQDX-3.0 (6 моделей)",
                "Ширина": "1300-3000 мм",
                "Глубина": "100-140 мм",
                "Диаметр": "460 мм",
                "Диски": "16-36 дисков",
                "Вес": "300-650 кг",
                "Навеска": "Навесная",
                "Мощность": "30-100 л.с."
            },
            pt: {
                "Modelos": "1BQDX-1.3 a 1BQDX-3.0 (6 modelos)",
                "Largura": "1300-3000mm",
                "Profundidade": "100-140mm",
                "Diâmetro": "460mm",
                "Discos": "16-36 discos",
                "Peso": "300-650kg",
                "Engate": "Montado",
                "Potência": "30-100 HP"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Seedbed preparation, fine soil preparation, light to medium soil fields, stubble cleaning"
        }
    },

    // ============================================================
    //  🌾 农机具 → 耕整地机械 → 悬挂式中型圆盘耙
    // ============================================================
    {
        id: "TL-009",
        category: "farm-machinery",
        subCategory: "tillage",
        image: "/image/1bjx-main.jpg",
        name: {
            en: "1BJX Series Mounted Middle-Duty Disc Harrow - Heavy-Duty Seedbed Preparation",
            es: "Grada de Discos Mediana Montada Serie 1BJX - Preparación Pesada de Lecho de Siembra",
            fr: "Herse à Disques Moyenne Portée Série 1BJX - Préparation Lourde du Lit de Semences",
            ar: "مشط قرصي متوسط مثبت سلسلة 1BJX - تجهيز ثقيل لأحواض البذور",
            ru: "Навесная средняя дисковая борона серии 1BJX - Тяжелая подготовка грядок",
            pt: "Grade de Discos Média Montada Série 1BJX - Preparação Pesada de Canteiros"
        },
        desc: {
            en: "The 1BJX Series Mounted Middle-Duty Disc Harrow is designed for crushing clods after tillage, preparing soil before seeding, mixing soil and fertilizer, and stubble cleaning in light to medium soil fields. Features a rugged construction with 560mm discs for deeper soil penetration and better pulverization. Available in working widths from 1100-6000mm with disc counts from 10 to 56. Compatible with 25-140 HP tractors. Ideal for medium to large farms requiring heavy-duty seedbed preparation.",
            es: "La grada de discos mediana 1BJX está diseñada para desmenuzar terrones y preparar el suelo. Construcción robusta con discos de 560mm. Disponible en anchos de 1100-6000mm. Compatible con tractores de 25-140 HP.",
            fr: "La herse à disques moyenne 1BJX est conçue pour briser les mottes et préparer le sol. Construction robuste avec disques de 560mm. Disponible en largeurs de 1100-6000mm.",
            ar: "مشط الأقراص المتوسط 1BJX مصمم لتفتيت الكتل وتحضير التربة. بناء قوي مع أقراص 560 ملم. متوفر بعروض عمل 1100-6000 ملم.",
            ru: "Средняя борона 1BJX предназначена для рыхления почвы. Прочная конструкция с дисками 560 мм. Ширина от 1100 до 6000 мм.",
            pt: "A grade de discos média 1BJX é projetada para quebrar torrões e preparar o solo. Construção robusta com discos de 560mm. Largura de 1100-6000mm."
        },
        features: {
            en: [
                "560mm disc diameter for deeper soil penetration",
                "Working widths from 1100-6000mm for large fields",
                "Disc count from 10 to 56 discs for heavy-duty operation",
                "Working depth up to 140mm for thorough soil preparation",
                "Strong raking ability with good soil pulverization",
                "Rugged construction for long service life",
                "Easy to use and maintain",
                "Suitable for light to medium soil fields"
            ],
            es: [
                "Diámetro de disco de 560mm para penetración más profunda",
                "Anchos de 1100-6000mm",
                "De 10 a 56 discos",
                "Profundidad hasta 140mm",
                "Fuerte capacidad de desmenuzado",
                "Construcción robusta",
                "Fácil de usar y mantener",
                "Adecuado para suelos ligeros a medios"
            ],
            fr: [
                "Diamètre de disque 560mm",
                "Largeurs de 1100-6000mm",
                "De 10 à 56 disques",
                "Profondeur jusqu'à 140mm",
                "Bonne capacité de pulvérisation",
                "Construction robuste",
                "Facile à utiliser et entretenir",
                "Convient aux sols légers à moyens"
            ],
            ar: [
                "قطر القرص 560 ملم لاختراق أعمق",
                "عروض عمل 1100-6000 ملم",
                "من 10 إلى 56 قرصاً",
                "عمق يصل إلى 140 ملم",
                "قوة تمشيط عالية",
                "بناء قوي",
                "سهل الاستخدام والصيانة",
                "مناسب للتربة الخفيفة إلى المتوسطة"
            ],
            ru: [
                "Диаметр диска 560 мм",
                "Ширина 1100-6000 мм",
                "От 10 до 56 дисков",
                "Глубина до 140 мм",
                "Высокая способность к рыхлению",
                "Прочная конструкция",
                "Легкость в использовании",
                "Подходит для легких и средних почв"
            ],
            pt: [
                "Diâmetro do disco 560mm",
                "Larguras de 1100-6000mm",
                "De 10 a 56 discos",
                "Profundidade até 140mm",
                "Alta capacidade de pulverização",
                "Construção robusta",
                "Fácil de usar e manter",
                "Adequado para solos leves a médios"
            ]
        },
        specs: {
            en: {
                "Models": "1BJX-1.1 to 1BJX-5.0 (13 models)",
                "Working Width": "1100-6000mm",
                "Working Depth": "Up to 140mm",
                "Disc Diameter": "560mm",
                "Disc Count": "10-56 discs",
                "Weight": "320-2600kg",
                "Linkage": "Mounted / Trailed",
                "Matched Power": "25-140 HP"
            },
            es: {
                "Modelos": "1BJX-1.1 a 1BJX-5.0 (13 modelos)",
                "Ancho": "1100-6000mm",
                "Profundidad": "Hasta 140mm",
                "Diámetro": "560mm",
                "Discos": "10-56 discos",
                "Peso": "320-2600kg",
                "Enganche": "Montado / Remolcado",
                "Potencia": "25-140 HP"
            },
            fr: {
                "Modèles": "1BJX-1.1 à 1BJX-5.0 (13 modèles)",
                "Largeur": "1100-6000mm",
                "Profondeur": "Jusqu'à 140mm",
                "Diamètre": "560mm",
                "Disques": "10-56 disques",
                "Poids": "320-2600kg",
                "Attelage": "Porté / Remorqué",
                "Puissance": "25-140 HP"
            },
            ar: {
                "الموديلات": "1BJX-1.1 إلى 1BJX-5.0 (13 موديلاً)",
                "عرض العمل": "1100-6000 ملم",
                "عمق العمل": "حتى 140 ملم",
                "قطر القرص": "560 ملم",
                "عدد الأقراص": "10-56 قرصاً",
                "الوزن": "320-2600 كجم",
                "التوصيل": "مثبت / مقطور",
                "القوة الملائمة": "25-140 حصان"
            },
            ru: {
                "Модели": "1BJX-1.1 до 1BJX-5.0 (13 моделей)",
                "Ширина": "1100-6000 мм",
                "Глубина": "До 140 мм",
                "Диаметр": "560 мм",
                "Диски": "10-56 дисков",
                "Вес": "320-2600 кг",
                "Навеска": "Навесная / Прицепная",
                "Мощность": "25-140 л.с."
            },
            pt: {
                "Modelos": "1BJX-1.1 a 1BJX-5.0 (13 modelos)",
                "Largura": "1100-6000mm",
                "Profundidade": "Até 140mm",
                "Diâmetro": "560mm",
                "Discos": "10-56 discos",
                "Peso": "320-2600kg",
                "Engate": "Montado / Rebocado",
                "Potência": "25-140 HP"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Heavy-duty seedbed preparation, large fields, medium soil fields, stubble cleaning"
        }
    },
        // ============================================================
    //  🔧 配件 → 农机圆盘犁片 / 耙片 (Disc Blades)
    // ============================================================
    {
        id: "PT-002",
        category: "parts",
        subCategory: null,
        image: "/image/disc-blade.jpg",
        name: {
            en: "Agricultural Disc Harrow & Plough Blades - Premium Tractor Spare Parts",
            es: "Discos de Grada y Arado Agrícola - Repuestos Premium para Tractor",
            fr: "Lames de Herse et Charrue Agricole - Pièces Détachées Premium pour Tracteur",
            ar: "شفرات الأقراص للمشط والمحراث الزراعي - قطع غيار ممتازة للجرار",
            ru: "Диски для борон и плугов - Премиальные запасные части для тракторов",
            pt: "Discos de Grade e Arado Agrícola - Peças de Reposição Premium para Trator"
        },
        desc: {
            en: "High-quality agricultural disc blades for disc harrows and disc ploughs. Available in plain and notched designs, with diameters from 10 to 36 inches and thicknesses from 2mm to 12mm. Manufactured from wear-resistant steel for long service life. Suitable for various tillage implements and compatible with major tractor brands. Ideal for farm maintenance, spare parts replacement, and OEM applications.",
            es: "Discos agrícolas de alta calidad para gradas y arados de discos. Disponibles en diseños lisos y dentados, con diámetros de 10 a 36 pulgadas y espesores de 2mm a 12mm. Fabricados en acero resistente al desgaste. Ideales para mantenimiento de granjas y reposición de piezas.",
            fr: "Lames de disques agricoles de haute qualité pour herses et charrues à disques. Disponibles en versions lisses et crantées, avec des diamètres de 10 à 36 pouces et des épaisseurs de 2mm à 12mm. Idéales pour l'entretien des fermes et le remplacement de pièces.",
            ar: "شفرات أقراص زراعية عالية الجودة للمشاط والمحاريث القرصية. متوفرة بتصاميم عادية ومسننة، بأقطار من 10 إلى 36 بوصة وسماكات من 2 ملم إلى 12 ملم. مثالية لصيانة المزارع واستبدال قطع الغيار.",
            ru: "Высококачественные диски для дисковых борон и плугов. Доступны в гладком и зубчатом исполнении, диаметром от 10 до 36 дюймов и толщиной от 2 до 12 мм. Идеальны для обслуживания ферм и замены запчастей.",
            pt: "Discos agrícolas de alta qualidade para grades e arados de discos. Disponíveis em designs lisos e dentados, com diâmetros de 10 a 36 polegadas e espessuras de 2mm a 12mm. Ideais para manutenção de fazendas e reposição de peças."
        },
        features: {
            en: [
                "Wide size range: 10\" to 36\" diameter, 2mm to 12mm thickness",
                "Plain and notched edge designs for different soil conditions",
                "Wear-resistant steel for extended service life",
                "Standard package quantities: 100 pcs, 50 pcs, or 25 pcs per carton",
                "Compatible with most disc harrow and disc plough brands",
                "Available in various hole configurations (center hole and bolt holes)",
                "Suitable for light, medium, and heavy-duty tillage",
                "Cost-effective OEM quality replacement parts"
            ],
            es: [
                "Amplia gama de tamaños: 10\" a 36\" de diámetro, 2mm a 12mm de espesor",
                "Bordes lisos y dentados para diferentes condiciones de suelo",
                "Acero resistente al desgaste",
                "Paquetes estándar: 100, 50 o 25 piezas por cajón",
                "Compatibles con la mayoría de las marcas de gradas y arados",
                "Configuraciones de orificios variadas",
                "Adecuados para labranza ligera, media y pesada",
                "Repuestos de calidad OEM a precio competitivo"
            ],
            fr: [
                "Large gamme de tailles: 10\" à 36\" de diamètre, 2mm à 12mm d'épaisseur",
                "Bords lisses et crantés pour différentes conditions de sol",
                "Acier résistant à l'usure",
                "Conditionnement standard: 100, 50 ou 25 pièces par carton",
                "Compatibles avec la plupart des marques de herses et charrues",
                "Configurations de trous variées",
                "Adaptés au travail du sol léger, moyen et lourd",
                "Pièces de rechange qualité OEM à prix compétitif"
            ],
            ar: [
                "مجموعة واسعة من الأحجام: قطر 10 إلى 36 بوصة، سمك 2 إلى 12 ملم",
                "حواف عادية ومسننة لظروف التربة المختلفة",
                "صلب مقاوم للتآكل",
                "تغليف قياسي: 100 أو 50 أو 25 قطعة لكل كرتون",
                "متوافقة مع معظم ماركات المشاط والمحاريث",
                "تكوينات ثقوب متنوعة",
                "مناسبة للحراثة الخفيفة والمتوسطة والثقيلة",
                "قطع غيار بجودة OEM وبأسعار تنافسية"
            ],
            ru: [
                "Широкий размерный ряд: диаметр 10-36 дюймов, толщина 2-12 мм",
                "Гладкие и зубчатые края для разных почв",
                "Износостойкая сталь",
                "Стандартная упаковка: 100, 50 или 25 шт. в коробке",
                "Совместимость с большинством марок борон и плугов",
                "Различные конфигурации отверстий",
                "Подходит для легкой, средней и тяжелой обработки",
                "Качество OEM по конкурентоспособной цене"
            ],
            pt: [
                "Ampla gama de tamanhos: diâmetro de 10\" a 36\", espessura de 2mm a 12mm",
                "Bordas lisas e dentadas para diferentes condições de solo",
                "Aço resistente ao desgaste",
                "Embalagem padrão: 100, 50 ou 25 peças por caixa",
                "Compatível com a maioria das marcas de grades e arados",
                "Configurações de furos variadas",
                "Adequado para preparo do solo leve, médio e pesado",
                "Peças de reposição com qualidade OEM a preço competitivo"
            ]
        },
        specs: {
            en: {
                "Material": "Wear-resistant steel (Boron steel / 65Mn)",
                "Type": "Plain / Notched",
                "Diameter Range": "10\" - 36\" (254mm - 914mm)",
                "Thickness Range": "2mm - 12mm",
                "Weight Range": "0.86kg - 67.61kg",
                "Package": "25 / 50 / 100 pcs per carton",
                "Compatibility": "Disc harrows, disc ploughs, tillage equipment",
                "Application": "Agricultural tillage, seedbed preparation, stubble cleaning"
            },
            es: {
                "Material": "Acero resistente al desgaste (Boro / 65Mn)",
                "Tipo": "Liso / Dentado",
                "Diámetro": "10\" - 36\" (254mm - 914mm)",
                "Espesor": "2mm - 12mm",
                "Peso": "0.86kg - 67.61kg",
                "Embalaje": "25 / 50 / 100 piezas por cajón",
                "Compatibilidad": "Gradas y arados de discos",
                "Aplicación": "Labranza agrícola, preparación de lecho de siembra"
            },
            fr: {
                "Matériau": "Acier résistant à l'usure (Bore / 65Mn)",
                "Type": "Lisse / Cranté",
                "Diamètre": "10\" - 36\" (254mm - 914mm)",
                "Épaisseur": "2mm - 12mm",
                "Poids": "0.86kg - 67.61kg",
                "Emballage": "25 / 50 / 100 pièces par carton",
                "Compatibilité": "Herses et charrues à disques",
                "Application": "Travail du sol agricole, préparation du lit de semences"
            },
            ar: {
                "المادة": "صلب مقاوم للتآكل (صلب البورون / 65Mn)",
                "النوع": "عادي / مسنن",
                "القطر": "10 - 36 بوصة (254 - 914 ملم)",
                "السماكة": "2 - 12 ملم",
                "الوزن": "0.86 - 67.61 كجم",
                "التغليف": "25 / 50 / 100 قطعة لكل كرتون",
                "التوافق": "المشاط والمحاريث القرصية",
                "التطبيق": "الحراثة الزراعية، تجهيز أحواض البذور"
            },
            ru: {
                "Материал": "Износостойкая сталь (борсодержащая / 65Mn)",
                "Тип": "Гладкий / Зубчатый",
                "Диаметр": "10-36 дюймов (254-914 мм)",
                "Толщина": "2-12 мм",
                "Вес": "0.86-67.61 кг",
                "Упаковка": "25 / 50 / 100 шт. в коробке",
                "Совместимость": "Дисковые бороны и плуги",
                "Применение": "Обработка почвы, подготовка грядок"
            },
            pt: {
                "Material": "Aço resistente ao desgaste (Boro / 65Mn)",
                "Tipo": "Liso / Dentado",
                "Diâmetro": "10\" - 36\" (254mm - 914mm)",
                "Espessura": "2mm - 12mm",
                "Peso": "0.86kg - 67.61kg",
                "Embalagem": "25 / 50 / 100 peças por caixa",
                "Compatibilidade": "Grades e arados de discos",
                "Aplicação": "Preparo do solo agrícola, preparação de canteiros"
            }
        },
        inquiry: {
            minOrder: "100 pcs (small sizes) / 25 pcs (large sizes)",
            leadTime: "15-30 days",
            warranty: "6-12 months",
            moq: "25 pcs",
            shipping: "FOB Qingdao / CIF available",
            application: "Disc harrow and disc plough replacement parts, agricultural tillage equipment maintenance",
            customization: "Plain or notched design, size and thickness customization available"
        }
    },
        // ============================================================
    //  🚜 拖拉机 → TTB系列 (90-120HP 重型拖拉机)
    // ============================================================
    {
        id: "TR-003",
        category: "tractors",
        subCategory: null,
        image: "/image/ttb90.jpg",
        name: {
            en: "TTB Series Heavy-Duty Tractor (90-120HP) - Large Scale Farming Power",
            es: "Tractor Pesado Serie TTB (90-120HP) - Potencia para Agricultura a Gran Escala",
            fr: "Tracteur Lourd Série TTB (90-120HP) - Puissance pour l'Agriculture à Grande Échelle",
            ar: "جرار ثقيل سلسلة TTB (90-120 حصان) - قوة للزراعة واسعة النطاق",
            ru: "Тяжелый трактор серии TTB (90-120 л.с.) - Мощность для крупномасштабного сельского хозяйства",
            pt: "Trator Pesado Série TTB (90-120HP) - Potência para Agricultura em Grande Escala"
        },
        desc: {
            en: "The TTB Series heavy-duty tractor delivers 90-120HP of reliable power for large-scale farming operations. Features a 12×12 transmission with shuttle shift for wide speed range, strong hydraulic lifting capacity, and double-speed PTO. The streamline hood design offers excellent visibility while the side-shifting transmission ensures easy operation. Ideal for heavy tillage, transport, and demanding agricultural applications.",
            es: "El tractor pesado TTB ofrece 90-120HP de potencia confiable para operaciones agrícolas a gran escala. Transmisión 12×12 con cambio de lanzadera, fuerte capacidad de elevación hidráulica y TDF de doble velocidad. Ideal para labranza pesada y transporte.",
            fr: "Le tracteur lourd TTB offre 90-120HP de puissance fiable pour les opérations agricoles à grande échelle. Transmission 12×12 avec navette, forte capacité de levage hydraulique et prise de force à double vitesse.",
            ar: "يوفر الجرار الثقيل TTB قوة 90-120 حصاناً للعمليات الزراعية واسعة النطاق. ناقل حركة 12×12 مع مكوك، قدرة رفع هيدروليكية قوية، و PTO مزدوج السرعة.",
            ru: "Тяжелый трактор TTB обеспечивает 90-120 л.с. надежной мощности для крупномасштабных сельскохозяйственных работ. Трансмиссия 12×12, мощная гидравлика и двойной ВОМ.",
            pt: "O trator pesado TTB oferece 90-120HP de potência confiável para operações agrícolas em grande escala. Transmissão 12×12 com shuttle, forte capacidade de elevação hidráulica e TDP de dupla velocidade."
        },
        features: {
            en: [
                "12×12 transmission with shuttle shift for wide speed range and easy operation",
                "Streamline hood design for improved visibility and elegant appearance",
                "Side-shifting transmission with compact structure and optimized layout",
                "Strong hydraulic lifting capacity for heavy implements",
                "Double-speed PTO (540/720 rpm) for versatile implement matching",
                "Stepless rear wheel adjustment for wide application range",
                "Short wheelbase with small turning radius for excellent maneuverability",
                "Optional dual-stage clutch for enhanced working efficiency",
                "High traction force (≥19.7kN) for demanding field conditions",
                "Available in 90HP (TTB904), 100HP (TTB1004), and 120HP (TTB1204) models"
            ],
            es: [
                "Transmisión 12×12 con cambio de lanzadera",
                "Diseño de capó aerodinámico",
                "Transmisión lateral con estructura compacta",
                "Fuerte capacidad de elevación hidráulica",
                "TDF de doble velocidad (540/720 rpm)",
                "Ajuste trasero sin escalas",
                "Radio de giro reducido",
                "Embrague de doble etapa opcional",
                "Fuerza de tracción ≥19.7kN",
                "Modelos de 90HP, 100HP y 120HP"
            ],
            fr: [
                "Transmission 12×12 avec navette",
                "Capot profilé pour meilleure visibilité",
                "Transmission latérale compacte",
                "Forte capacité de levage hydraulique",
                "Prise de force double vitesse (540/720 rpm)",
                "Réglage arrière sans graduation",
                "Rayon de braquage réduit",
                "Embrayage double étage optionnel",
                "Force de traction ≥19.7kN",
                "Modèles 90HP, 100HP et 120HP"
            ],
            ar: [
                "ناقل حركة 12×12 مع مكوك",
                "تصميم غطاء انسيابي",
                "ناقل حركة جانبي مدمج",
                "قدرة رفع هيدروليكية قوية",
                "PTO مزدوج السرعة (540/720 دورة)",
                "تعديل خلفي غير متدرج",
                "نصف قطر دوران صغير",
                "قابض مزدوج المرحلة اختياري",
                "قوة جر ≥19.7 كيلو نيوتن",
                "موديلات 90 و 100 و 120 حصاناً"
            ],
            ru: [
                "Трансмиссия 12×12 с шаттлом",
                "Обтекаемый капот",
                "Боковая компактная трансмиссия",
                "Мощная гидравлика",
                "Двойной ВОМ (540/720 об/мин)",
                "Бесступенчатая регулировка",
                "Малый радиус поворота",
                "Опциональное двухдисковое сцепление",
                "Сила тяги ≥19.7 кН",
                "Модели 90, 100 и 120 л.с."
            ],
            pt: [
                "Transmissão 12×12 com shuttle",
                "Design de capô aerodinâmico",
                "Transmissão lateral compacta",
                "Forte capacidade de elevação hidráulica",
                "TDP de dupla velocidade (540/720 rpm)",
                "Ajuste traseiro sem degraus",
                "Raio de viragem reduzido",
                "Embreagem de dupla etapa opcional",
                "Força de tração ≥19.7kN",
                "Modelos 90HP, 100HP e 120HP"
            ]
        },
        specs: {
            en: {
                "Model": "TTB904 / TTB1004 / TTB1204",
                "Engine Power": "66.2kW (90HP) / 73.5kW (100HP) / 88.2kW (120HP)",
                "PTO Speed": "540/720 rpm (dual speed)",
                "Transmission": "12×12 with shuttle shift",
                "Front Tread": "1350, 1450, 1550mm (adjustable)",
                "Rear Tread": "1500-1800mm (stepless adjustable)",
                "Max Traction Force": "≥19.7kN",
                "Wheelbase": "Short wheelbase for maneuverability",
                "Hydraulic System": "Strong pressure lifter",
                "Clutch": "Optional dual-stage clutch",
                "Steering": "Hydraulic power steering"
            },
            es: {
                "Modelo": "TTB904 / TTB1004 / TTB1204",
                "Potencia": "66.2kW (90HP) / 73.5kW (100HP) / 88.2kW (120HP)",
                "Velocidad TDF": "540/720 rpm (doble velocidad)",
                "Transmisión": "12×12 con cambio de lanzadera",
                "Vía delantera": "1350, 1450, 1550mm (ajustable)",
                "Vía trasera": "1500-1800mm (ajuste sin escalas)",
                "Tracción máxima": "≥19.7kN",
                "Sistema hidráulico": "Elevador de presión fuerte",
                "Embrague": "Doble etapa opcional",
                "Dirección": "Dirección hidráulica asistida"
            },
            fr: {
                "Modèle": "TTB904 / TTB1004 / TTB1204",
                "Puissance": "66.2kW (90HP) / 73.5kW (100HP) / 88.2kW (120HP)",
                "Vitesse PTO": "540/720 rpm (double vitesse)",
                "Transmission": "12×12 avec navette",
                "Voie avant": "1350, 1450, 1550mm (réglable)",
                "Voie arrière": "1500-1800mm (réglage continu)",
                "Traction max": "≥19.7kN",
                "Système hydraulique": "Vérin à pression forte",
                "Embrayage": "Double étage optionnel",
                "Direction": "Direction hydraulique assistée"
            },
            ar: {
                "الموديل": "TTB904 / TTB1004 / TTB1204",
                "قوة المحرك": "66.2 كيلوواط (90 حصان) / 73.5 كيلوواط (100 حصان) / 88.2 كيلوواط (120 حصان)",
                "سرعة PTO": "540/720 دورة/دقيقة (سرعة مزدوجة)",
                "ناقل الحركة": "12×12 مع مكوك",
                "المسار الأمامي": "1350، 1450، 1550 ملم (قابل للتعديل)",
                "المسار الخلفي": "1500-1800 ملم (تعديل مستمر)",
                "قوة الجر القصوى": "≥19.7 كيلو نيوتن",
                "النظام الهيدروليكي": "رافع ضغط قوي",
                "القابض": "مزدوج المرحلة اختياري",
                "التوجيه": "توجيه هيدروليكي معزز"
            },
            ru: {
                "Модель": "TTB904 / TTB1004 / TTB1204",
                "Мощность": "66.2кВт (90 л.с.) / 73.5кВт (100 л.с.) / 88.2кВт (120 л.с.)",
                "Скорость ВОМ": "540/720 об/мин (двойная)",
                "Трансмиссия": "12×12 с шаттлом",
                "Передняя колея": "1350, 1450, 1550 мм (регулируемая)",
                "Задняя колея": "1500-1800 мм (бесступенчатая)",
                "Тяговое усилие": "≥19.7 кН",
                "Гидравлика": "Мощный подъемник",
                "Сцепление": "Опциональное двухдисковое",
                "Рулевое": "Гидроусилитель"
            },
            pt: {
                "Modelo": "TTB904 / TTB1004 / TTB1204",
                "Potência": "66.2kW (90HP) / 73.5kW (100HP) / 88.2kW (120HP)",
                "Velocidade TDP": "540/720 rpm (dupla velocidade)",
                "Transmissão": "12×12 com shuttle",
                "Via dianteira": "1350, 1450, 1550mm (ajustável)",
                "Via traseira": "1500-1800mm (ajuste contínuo)",
                "Tração máxima": "≥19.7kN",
                "Sistema hidráulico": "Elevador de pressão forte",
                "Embreagem": "Dupla etapa opcional",
                "Direção": "Direção hidráulica assistida"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale farming, heavy tillage, transport, plantation operations"
        }
    },
        // ============================================================
    //  🚜 拖拉机 → TTE系列 (70-80HP 中马力拖拉机)
    // ============================================================
    {
        id: "TR-004",
        category: "tractors",
        subCategory: null,
        image: "/image/tte70.jpg",
        name: {
            en: "TTE Series Medium-Duty Tractor (70-80HP) - Versatile Farm Power",
            es: "Tractor de Potencia Media Serie TTE (70-80HP) - Potencia Agrícola Versátil",
            fr: "Tracteur de Puissance Moyenne Série TTE (70-80HP) - Puissance Agricole Polyvalente",
            ar: "جرار متوسط القدرة سلسلة TTE (70-80 حصان) - قوة زراعية متعددة الاستخدامات",
            ru: "Трактор средней мощности серии TTE (70-80 л.с.) - Универсальная сельхозмощность",
            pt: "Trator de Potência Média Série TTE (70-80HP) - Potência Agrícola Versátil"
        },
        desc: {
            en: "The TTE Series medium-duty tractor delivers 70-80HP of reliable power for versatile farming operations. Features an 8+2 transmission with optional shuttle shift for wide speed range, strong hydraulic lifting capacity up to 14.11kN, and double-speed PTO (540/720 rpm). The streamline hood design offers excellent visibility while the side-shifting transmission ensures compact structure and easy operation. Ideal for diversified farming, medium-scale tillage, transport, and implement operations.",
            es: "El tractor de potencia media TTE ofrece 70-80HP de potencia confiable para operaciones agrícolas versátiles. Transmisión 8+2 con cambio de lanzadera opcional, capacidad de elevación hidráulica de hasta 14.11kN y TDF de doble velocidad. Ideal para agricultura diversificada y labranza mediana.",
            fr: "Le tracteur de puissance moyenne TTE offre 70-80HP de puissance fiable pour des opérations agricoles polyvalentes. Transmission 8+2 avec navette optionnelle, capacité de levage hydraulique jusqu'à 14.11kN et prise de force double vitesse.",
            ar: "يوفر الجرار متوسط القدرة TTE قوة 70-80 حصاناً للعمليات الزراعية المتنوعة. ناقل حركة 8+2 مع مكوك اختياري، قدرة رفع هيدروليكية تصل إلى 14.11 كيلو نيوتن، و PTO مزدوج السرعة.",
            ru: "Трактор средней мощности TTE обеспечивает 70-80 л.с. надежной мощности для разнообразных сельхозработ. Трансмиссия 8+2 с опциональным шаттлом, гидравлика до 14.11 кН, двойной ВОМ.",
            pt: "O trator de potência média TTE oferece 70-80HP de potência confiável para operações agrícolas versáteis. Transmissão 8+2 com shuttle opcional, capacidade de elevação hidráulica até 14.11kN e TDP de dupla velocidade."
        },
        features: {
            en: [
                "8+2 transmission with optional shuttle shift for wide speed range",
                "Streamline hood design for improved visibility and elegant appearance",
                "Side-shifting transmission with compact structure and optimized layout",
                "Strong hydraulic lifting capacity up to 14.11kN for medium implements",
                "Double-speed PTO (540/720 rpm) for versatile implement matching",
                "Stepless rear wheel adjustment for wide application range",
                "Short wheelbase with small turning radius for excellent maneuverability",
                "Optional dual-stage clutch for enhanced working efficiency",
                "High traction force (≥15.69kN) for demanding field conditions",
                "Available in 70HP (TTE700/704) and 80HP (TTE800/804) models with 2WD/4WD options"
            ],
            es: [
                "Transmisión 8+2 con cambio de lanzadera opcional",
                "Diseño de capó aerodinámico",
                "Transmisión lateral con estructura compacta",
                "Capacidad de elevación hidráulica hasta 14.11kN",
                "TDF de doble velocidad (540/720 rpm)",
                "Ajuste trasero sin escalas",
                "Radio de giro reducido",
                "Embrague de doble etapa opcional",
                "Fuerza de tracción ≥15.69kN",
                "Modelos de 70HP y 80HP con opción 2WD/4WD"
            ],
            fr: [
                "Transmission 8+2 avec navette optionnelle",
                "Capot profilé pour meilleure visibilité",
                "Transmission latérale compacte",
                "Capacité de levage hydraulique jusqu'à 14.11kN",
                "Prise de force double vitesse (540/720 rpm)",
                "Réglage arrière sans graduation",
                "Rayon de braquage réduit",
                "Embrayage double étage optionnel",
                "Force de traction ≥15.69kN",
                "Modèles 70HP et 80HP avec option 2WD/4WD"
            ],
            ar: [
                "ناقل حركة 8+2 مع مكوك اختياري",
                "تصميم غطاء انسيابي",
                "ناقل حركة جانبي مدمج",
                "قدرة رفع هيدروليكية تصل إلى 14.11 كيلو نيوتن",
                "PTO مزدوج السرعة (540/720 دورة)",
                "تعديل خلفي غير متدرج",
                "نصف قطر دوران صغير",
                "قابض مزدوج المرحلة اختياري",
                "قوة جر ≥15.69 كيلو نيوتن",
                "موديلات 70 و 80 حصاناً مع خيار 2WD/4WD"
            ],
            ru: [
                "Трансмиссия 8+2 с опциональным шаттлом",
                "Обтекаемый капот",
                "Боковая компактная трансмиссия",
                "Гидравлика до 14.11 кН",
                "Двойной ВОМ (540/720 об/мин)",
                "Бесступенчатая регулировка",
                "Малый радиус поворота",
                "Опциональное двухдисковое сцепление",
                "Сила тяги ≥15.69 кН",
                "Модели 70 и 80 л.с. с опцией 2WD/4WD"
            ],
            pt: [
                "Transmissão 8+2 com shuttle opcional",
                "Design de capô aerodinâmico",
                "Transmissão lateral compacta",
                "Capacidade de elevação hidráulica até 14.11kN",
                "TDP de dupla velocidade (540/720 rpm)",
                "Ajuste traseiro sem degraus",
                "Raio de viragem reduzido",
                "Embreagem de dupla etapa opcional",
                "Força de tração ≥15.69kN",
                "Modelos 70HP e 80HP com opção 2WD/4WD"
            ]
        },
        specs: {
            en: {
                "Model": "TTE700 / TTE704 / TTE800 / TTE804",
                "Engine Power": "51.5kW (70HP) / 58.8kW (80HP)",
                "PTO Speed": "540/720 rpm (dual speed)",
                "Transmission": "8+2 with optional shuttle shift",
                "Front Tread": "1130, 1230, 1330, 1430mm (adjustable) / 1180, 1400mm (adjustable)",
                "Rear Tread": "1100-1500mm (stepless adjustable)",
                "Max Traction Force": "≥9.3kN (2WD) / ≥15.69kN (4WD)",
                "Max Lift Force": "12.36kN / 14.11kN",
                "Wheelbase": "Short wheelbase for maneuverability",
                "Hydraulic System": "Strong pressure lifter",
                "Clutch": "Optional dual-stage clutch",
                "Steering": "Hydraulic power steering",
                "Drive Options": "2WD (TTE700/800) / 4WD (TTE704/804)"
            },
            es: {
                "Modelo": "TTE700 / TTE704 / TTE800 / TTE804",
                "Potencia": "51.5kW (70HP) / 58.8kW (80HP)",
                "Velocidad TDF": "540/720 rpm (doble velocidad)",
                "Transmisión": "8+2 con cambio de lanzadera opcional",
                "Vía delantera": "1130, 1230, 1330, 1430mm (ajustable) / 1180, 1400mm (ajustable)",
                "Vía trasera": "1100-1500mm (ajuste sin escalas)",
                "Tracción máxima": "≥9.3kN (2WD) / ≥15.69kN (4WD)",
                "Elevación máxima": "12.36kN / 14.11kN",
                "Sistema hidráulico": "Elevador de presión fuerte",
                "Embrague": "Doble etapa opcional",
                "Dirección": "Dirección hidráulica asistida",
                "Opciones de tracción": "2WD / 4WD"
            },
            fr: {
                "Modèle": "TTE700 / TTE704 / TTE800 / TTE804",
                "Puissance": "51.5kW (70HP) / 58.8kW (80HP)",
                "Vitesse PTO": "540/720 rpm (double vitesse)",
                "Transmission": "8+2 avec navette optionnelle",
                "Voie avant": "1130, 1230, 1330, 1430mm (réglable) / 1180, 1400mm (réglable)",
                "Voie arrière": "1100-1500mm (réglage continu)",
                "Traction max": "≥9.3kN (2WD) / ≥15.69kN (4WD)",
                "Levage max": "12.36kN / 14.11kN",
                "Système hydraulique": "Vérin à pression forte",
                "Embrayage": "Double étage optionnel",
                "Direction": "Direction hydraulique assistée",
                "Options de traction": "2WD / 4WD"
            },
            ar: {
                "الموديل": "TTE700 / TTE704 / TTE800 / TTE804",
                "قوة المحرك": "51.5 كيلوواط (70 حصان) / 58.8 كيلوواط (80 حصان)",
                "سرعة PTO": "540/720 دورة/دقيقة (سرعة مزدوجة)",
                "ناقل الحركة": "8+2 مع مكوك اختياري",
                "المسار الأمامي": "1130، 1230، 1330، 1430 ملم (قابل للتعديل) / 1180، 1400 ملم (قابل للتعديل)",
                "المسار الخلفي": "1100-1500 ملم (تعديل مستمر)",
                "قوة الجر القصوى": "≥9.3 كيلو نيوتن (2WD) / ≥15.69 كيلو نيوتن (4WD)",
                "قوة الرفع القصوى": "12.36 كيلو نيوتن / 14.11 كيلو نيوتن",
                "النظام الهيدروليكي": "رافع ضغط قوي",
                "القابض": "مزدوج المرحلة اختياري",
                "التوجيه": "توجيه هيدروليكي معزز",
                "خيارات الدفع": "2WD / 4WD"
            },
            ru: {
                "Модель": "TTE700 / TTE704 / TTE800 / TTE804",
                "Мощность": "51.5кВт (70 л.с.) / 58.8кВт (80 л.с.)",
                "Скорость ВОМ": "540/720 об/мин (двойная)",
                "Трансмиссия": "8+2 с опциональным шаттлом",
                "Передняя колея": "1130, 1230, 1330, 1430 мм / 1180, 1400 мм",
                "Задняя колея": "1100-1500 мм (бесступенчатая)",
                "Тяговое усилие": "≥9.3 кН (2WD) / ≥15.69 кН (4WD)",
                "Подъемная сила": "12.36 кН / 14.11 кН",
                "Гидравлика": "Мощный подъемник",
                "Сцепление": "Опциональное двухдисковое",
                "Рулевое": "Гидроусилитель",
                "Опции привода": "2WD / 4WD"
            },
            pt: {
                "Modelo": "TTE700 / TTE704 / TTE800 / TTE804",
                "Potência": "51.5kW (70HP) / 58.8kW (80HP)",
                "Velocidade TDP": "540/720 rpm (dupla velocidade)",
                "Transmissão": "8+2 com shuttle opcional",
                "Via dianteira": "1130, 1230, 1330, 1430mm (ajustável) / 1180, 1400mm (ajustável)",
                "Via traseira": "1100-1500mm (ajuste contínuo)",
                "Tração máxima": "≥9.3kN (2WD) / ≥15.69kN (4WD)",
                "Elevação máxima": "12.36kN / 14.11kN",
                "Sistema hidráulico": "Elevador de pressão forte",
                "Embreagem": "Dupla etapa opcional",
                "Direção": "Direção hidráulica assistida",
                "Opções de tração": "2WD / 4WD"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Medium-scale farming, diversified agriculture, transport, implement operations, orchard work"
        }
    },
        // ============================================================
    //  🚜 拖拉机 → TTS系列 (45-50HP 果园/温室专用拖拉机)
    // ============================================================
    {
        id: "TR-005",
        category: "tractors",
        subCategory: null,
        image: "/image/tts45.png",
        name: {
            en: "TTS Series Orchard & Greenhouse Tractor (45-50HP) - Narrow Width Specialist",
            es: "Tractor para Huertos e Invernaderos Serie TTS (45-50HP) - Especialista en Anchura Estrecha",
            fr: "Tracteur de Verger et Serre Série TTS (45-50HP) - Spécialiste de la Largeur Étroite",
            ar: "جرار البساتين والدفيئات سلسلة TTS (45-50 حصان) - متخصص في العرض الضيق",
            ru: "Трактор для садов и теплиц серии TTS (45-50 л.с.) - Специалист по узкой колее",
            pt: "Trator para Pomares e Estufas Série TTS (45-50HP) - Especialista em Largura Estreita"
        },
        desc: {
            en: "The TTS Series Orchard & Greenhouse Tractor delivers 45-50HP of reliable power in a narrow-width design (as narrow as 960mm wheel track). Features 8+2 transmission with optional 10+2, dual-speed PTO (540/750/1000 rpm), and hydraulic power steering. High ground clearance ensures excellent passability in rough terrain. Optional multi-channel hydraulic output for various implements. Ideal for orchards, vineyards, greenhouses, and specialized crop farming.",
            es: "El tractor para huertos e invernaderos TTS ofrece 45-50HP de potencia confiable en diseño de anchura estrecha (hasta 960mm de vía). Transmisión 8+2 con opción 10+2, TDF de doble velocidad y dirección hidráulica. Ideal para huertos, viñedos e invernaderos.",
            fr: "Le tracteur de verger et serre TTS offre 45-50HP de puissance fiable en conception étroite (voie jusqu'à 960mm). Transmission 8+2 avec option 10+2, prise de force double vitesse et direction hydraulique. Idéal pour les vergers, vignobles et serres.",
            ar: "يوفر جرار البساتين والدفيئات TTS قوة 45-50 حصاناً بتصميم ضيق (مسار يصل إلى 960 ملم). ناقل حركة 8+2 مع خيار 10+2، PTO مزدوج السرعة وتوجيه هيدروليكي. مثالي للبساتين والكروم والدفيئات.",
            ru: "Трактор для садов и теплиц TTS обеспечивает 45-50 л.с. в узком исполнении (колея до 960 мм). Трансмиссия 8+2 с опцией 10+2, двойной ВОМ и гидравлическое рулевое. Идеален для садов, виноградников и теплиц.",
            pt: "O trator para pomares e estufas TTS oferece 45-50HP de potência confiável em design de largura estreita (via até 960mm). Transmissão 8+2 com opção 10+2, TDP de dupla velocidade e direção hidráulica. Ideal para pomares, vinhedos e estufas."
        },
        features: {
            en: [
                "Narrow wheel track design (960mm optional) for orchard and greenhouse operations",
                "8+2 transmission with optional 10+2 for flexible speed matching",
                "Dual-speed PTO (540/750/1000 rpm) for versatile implement matching",
                "Hydraulic power steering for easy and precise operation",
                "High ground clearance for excellent passability in rough terrain",
                "Optional multi-channel hydraulic output for various implements",
                "Optional dual-stage clutch for enhanced working efficiency",
                "China Stage III emission-compliant engine with high torque reserve",
                "Multiple engine brand options (Laidong, Xichai, etc.) for customer preference",
                "Available in 45HP (TTS450/454) and 50HP (TTS500/504) models with 2WD/4WD options"
            ],
            es: [
                "Diseño de vía estrecha (960mm opcional) para huertos e invernaderos",
                "Transmisión 8+2 con opción 10+2",
                "TDF de doble velocidad (540/750/1000 rpm)",
                "Dirección hidráulica asistida",
                "Alta distancia al suelo",
                "Salida hidráulica multicanal opcional",
                "Embrague de doble etapa opcional",
                "Motor con emisiones China Etapa III",
                "Múltiples opciones de motor (Laidong, Xichai, etc.)",
                "Modelos de 45HP y 50HP con opción 2WD/4WD"
            ],
            fr: [
                "Conception de voie étroite (960mm optionnel) pour vergers et serres",
                "Transmission 8+2 avec option 10+2",
                "Prise de force double vitesse (540/750/1000 rpm)",
                "Direction hydraulique assistée",
                "Garde au sol élevée",
                "Sortie hydraulique multicanal optionnelle",
                "Embrayage double étage optionnel",
                "Moteur conforme aux émissions Chine Stage III",
                "Multiples options de moteur (Laidong, Xichai, etc.)",
                "Modèles 45HP et 50HP avec option 2WD/4WD"
            ],
            ar: [
                "تصميم مسار ضيق (960 ملم اختياري) للبساتين والدفيئات",
                "ناقل حركة 8+2 مع خيار 10+2",
                "PTO مزدوج السرعة (540/750/1000 دورة)",
                "توجيه هيدروليكي معزز",
                "خلوص أرضي عالٍ",
                "مخرج هيدروليكي متعدد القنوات اختياري",
                "قابض مزدوج المرحلة اختياري",
                "محرك متوافق مع معايير الانبعاثات الصينية المرحلة III",
                "خيارات متعددة للمحرك (Laidong، Xichai، إلخ)",
                "موديلات 45 و 50 حصاناً مع خيار 2WD/4WD"
            ],
            ru: [
                "Узкая колея (опция 960 мм) для садов и теплиц",
                "Трансмиссия 8+2 с опцией 10+2",
                "Двойной ВОМ (540/750/1000 об/мин)",
                "Гидравлическое рулевое управление",
                "Высокий дорожный просвет",
                "Опциональный многоканальный гидравлический выход",
                "Опциональное двухдисковое сцепление",
                "Двигатель с нормами выбросов China Stage III",
                "Несколько вариантов двигателя (Laidong, Xichai и др.)",
                "Модели 45 и 50 л.с. с опцией 2WD/4WD"
            ],
            pt: [
                "Design de via estreita (960mm opcional) para pomares e estufas",
                "Transmissão 8+2 com opção 10+2",
                "TDP de dupla velocidade (540/750/1000 rpm)",
                "Direção hidráulica assistida",
                "Alta distância do solo",
                "Saída hidráulica multicanal opcional",
                "Embreagem de dupla etapa opcional",
                "Motor com emissões China Estágio III",
                "Múltiplas opções de motor (Laidong, Xichai, etc.)",
                "Modelos 45HP e 50HP com opção 2WD/4WD"
            ]
        },
        specs: {
            en: {
                "Model": "TTS450 / TTS454 / TTS500 / TTS504",
                "Engine Power": "33.1kW (45HP) / 36.8kW (50HP)",
                "PTO Speed": "540/750 / 540/1000 / 750/1000 rpm",
                "Transmission": "8+2 (optional 10+2)",
                "Front Tread": "1210mm (adjustable) / 1250mm (non-adjustable) / 1200mm (adjustable)",
                "Rear Tread": "1200mm (adjustable) / 1200mm (adjustable) / 1200mm (adjustable) / 1200mm (adjustable)",
                "Max Traction Force": "8.3-9.2kN",
                "Min Operating Weight": "≥7.4-8.5 tons",
                "High Ground Clearance": "Yes",
                "Optional Narrow Track": "960mm for greenhouse and orchard",
                "Drive Options": "2WD (TTS450/500) / 4WD (TTS454/504)"
            },
            es: {
                "Modelo": "TTS450 / TTS454 / TTS500 / TTS504",
                "Potencia": "33.1kW (45HP) / 36.8kW (50HP)",
                "Velocidad TDF": "540/750 / 540/1000 / 750/1000 rpm",
                "Transmisión": "8+2 (opción 10+2)",
                "Vía delantera": "1210mm (ajustable) / 1250mm (fijo) / 1200mm (ajustable)",
                "Vía trasera": "1200mm (ajustable)",
                "Tracción máxima": "8.3-9.2kN",
                "Peso mínimo": "≥7.4-8.5 toneladas",
                "Vía estrecha opcional": "960mm para invernaderos",
                "Opciones de tracción": "2WD / 4WD"
            },
            fr: {
                "Modèle": "TTS450 / TTS454 / TTS500 / TTS504",
                "Puissance": "33.1kW (45HP) / 36.8kW (50HP)",
                "Vitesse PTO": "540/750 / 540/1000 / 750/1000 rpm",
                "Transmission": "8+2 (option 10+2)",
                "Voie avant": "1210mm (réglable) / 1250mm (fixe) / 1200mm (réglable)",
                "Voie arrière": "1200mm (réglable)",
                "Traction max": "8.3-9.2kN",
                "Poids min": "≥7.4-8.5 tonnes",
                "Voie étroite optionnelle": "960mm pour serres",
                "Options de traction": "2WD / 4WD"
            },
            ar: {
                "الموديل": "TTS450 / TTS454 / TTS500 / TTS504",
                "قوة المحرك": "33.1 كيلوواط (45 حصان) / 36.8 كيلوواط (50 حصان)",
                "سرعة PTO": "540/750 / 540/1000 / 750/1000 دورة/دقيقة",
                "ناقل الحركة": "8+2 (خيار 10+2)",
                "المسار الأمامي": "1210 ملم (قابل للتعديل) / 1250 ملم (ثابت) / 1200 ملم (قابل للتعديل)",
                "المسار الخلفي": "1200 ملم (قابل للتعديل)",
                "قوة الجر القصوى": "8.3-9.2 كيلو نيوتن",
                "الوزن الأدنى": "≥7.4-8.5 طن",
                "مسار ضيق اختياري": "960 ملم للدفيئات",
                "خيارات الدفع": "2WD / 4WD"
            },
            ru: {
                "Модель": "TTS450 / TTS454 / TTS500 / TTS504",
                "Мощность": "33.1кВт (45 л.с.) / 36.8кВт (50 л.с.)",
                "Скорость ВОМ": "540/750 / 540/1000 / 750/1000 об/мин",
                "Трансмиссия": "8+2 (опция 10+2)",
                "Передняя колея": "1210мм / 1250мм / 1200мм",
                "Задняя колея": "1200мм (регулируемая)",
                "Тяговое усилие": "8.3-9.2 кН",
                "Мин. вес": "≥7.4-8.5 тонн",
                "Опция узкой колеи": "960 мм для теплиц",
                "Опции привода": "2WD / 4WD"
            },
            pt: {
                "Modelo": "TTS450 / TTS454 / TTS500 / TTS504",
                "Potência": "33.1kW (45HP) / 36.8kW (50HP)",
                "Velocidade TDP": "540/750 / 540/1000 / 750/1000 rpm",
                "Transmissão": "8+2 (opção 10+2)",
                "Via dianteira": "1210mm (ajustável) / 1250mm (fixo) / 1200mm (ajustável)",
                "Via traseira": "1200mm (ajustável)",
                "Tração máxima": "8.3-9.2kN",
                "Peso mínimo": "≥7.4-8.5 toneladas",
                "Via estreita opcional": "960mm para estufas",
                "Opções de tração": "2WD / 4WD"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Orchards, vineyards, greenhouses, specialized crop farming, narrow-row crops"
        }
    },

    // ============================================================
    //  🚜 拖拉机 → TTE系列 (50-60HP 中马力拖拉机)
    // ============================================================
    {
        id: "TR-006",
        category: "tractors",
        subCategory: null,
        image: "/image/tte50.jpg",
        name: {
            en: "TTE Series Medium Tractor (50-60HP) - Versatile Farm Power",
            es: "Tractor de Potencia Media Serie TTE (50-60HP) - Potencia Agrícola Versátil",
            fr: "Tracteur de Puissance Moyenne Série TTE (50-60HP) - Puissance Agricole Polyvalente",
            ar: "جرار متوسط القدرة سلسلة TTE (50-60 حصان) - قوة زراعية متعددة الاستخدامات",
            ru: "Трактор средней мощности серии TTE (50-60 л.с.) - Универсальная сельхозмощность",
            pt: "Trator de Potência Média Série TTE (50-60HP) - Potência Agrícola Versátil"
        },
        desc: {
            en: "The TTE Series medium tractor delivers 50-60HP of reliable power for versatile farming operations. Features 8+2 transmission with optional shuttle shift for wide speed range, strong hydraulic lifting capacity up to 9.95kN, and double-speed PTO (540/720 rpm). The streamline hood design offers excellent visibility while the side-shifting transmission ensures compact structure. Ideal for diversified farming, medium-scale tillage, transport, and implement operations.",
            es: "El tractor medio TTE ofrece 50-60HP de potencia confiable para operaciones agrícolas versátiles. Transmisión 8+2 con cambio de lanzadera opcional, capacidad de elevación hidráulica de hasta 9.95kN y TDF de doble velocidad. Ideal para agricultura diversificada y labranza mediana.",
            fr: "Le tracteur moyen TTE offre 50-60HP de puissance fiable pour des opérations agricoles polyvalentes. Transmission 8+2 avec navette optionnelle, capacité de levage hydraulique jusqu'à 9.95kN et prise de force double vitesse.",
            ar: "يوفر الجرار المتوسط TTE قوة 50-60 حصاناً للعمليات الزراعية المتنوعة. ناقل حركة 8+2 مع مكوك اختياري، قدرة رفع هيدروليكية تصل إلى 9.95 كيلو نيوتن، و PTO مزدوج السرعة.",
            ru: "Трактор средней мощности TTE обеспечивает 50-60 л.с. надежной мощности для разнообразных сельхозработ. Трансмиссия 8+2 с опциональным шаттлом, гидравлика до 9.95 кН, двойной ВОМ.",
            pt: "O trator médio TTE oferece 50-60HP de potência confiável para operações agrícolas versáteis. Transmissão 8+2 com shuttle opcional, capacidade de elevação hidráulica até 9.95kN e TDP de dupla velocidade."
        },
        features: {
            en: [
                "8+2 transmission with optional shuttle shift for wide speed range",
                "Streamline hood design for improved visibility and elegant appearance",
                "Side-shifting transmission with compact structure and optimized layout",
                "Strong hydraulic lifting capacity up to 9.95kN for medium implements",
                "Double-speed PTO (540/720 rpm) for versatile implement matching",
                "Stepless rear wheel adjustment for wide application range",
                "Short wheelbase with small turning radius for excellent maneuverability",
                "Optional dual-stage clutch for enhanced working efficiency",
                "High traction force (≥9.3-13.97kN) for demanding field conditions",
                "Available in 50HP (TTE500/504) and 60HP (TTE600/604) models with 2WD/4WD options"
            ],
            es: [
                "Transmisión 8+2 con cambio de lanzadera opcional",
                "Diseño de capó aerodinámico",
                "Transmisión lateral con estructura compacta",
                "Capacidad de elevación hidráulica hasta 9.95kN",
                "TDF de doble velocidad (540/720 rpm)",
                "Ajuste trasero sin escalas",
                "Radio de giro reducido",
                "Embrague de doble etapa opcional",
                "Fuerza de tracción ≥9.3-13.97kN",
                "Modelos de 50HP y 60HP con opción 2WD/4WD"
            ],
            fr: [
                "Transmission 8+2 avec navette optionnelle",
                "Capot profilé pour meilleure visibilité",
                "Transmission latérale compacte",
                "Capacité de levage hydraulique jusqu'à 9.95kN",
                "Prise de force double vitesse (540/720 rpm)",
                "Réglage arrière sans graduation",
                "Rayon de braquage réduit",
                "Embrayage double étage optionnel",
                "Force de traction ≥9.3-13.97kN",
                "Modèles 50HP et 60HP avec option 2WD/4WD"
            ],
            ar: [
                "ناقل حركة 8+2 مع مكوك اختياري",
                "تصميم غطاء انسيابي",
                "ناقل حركة جانبي مدمج",
                "قدرة رفع هيدروليكية تصل إلى 9.95 كيلو نيوتن",
                "PTO مزدوج السرعة (540/720 دورة)",
                "تعديل خلفي غير متدرج",
                "نصف قطر دوران صغير",
                "قابض مزدوج المرحلة اختياري",
                "قوة جر ≥9.3-13.97 كيلو نيوتن",
                "موديلات 50 و 60 حصاناً مع خيار 2WD/4WD"
            ],
            ru: [
                "Трансмиссия 8+2 с опциональным шаттлом",
                "Обтекаемый капот",
                "Боковая компактная трансмиссия",
                "Гидравлика до 9.95 кН",
                "Двойной ВОМ (540/720 об/мин)",
                "Бесступенчатая регулировка",
                "Малый радиус поворота",
                "Опциональное двухдисковое сцепление",
                "Сила тяги ≥9.3-13.97 кН",
                "Модели 50 и 60 л.с. с опцией 2WD/4WD"
            ],
            pt: [
                "Transmissão 8+2 com shuttle opcional",
                "Design de capô aerodinâmico",
                "Transmissão lateral compacta",
                "Capacidade de elevação hidráulica até 9.95kN",
                "TDP de dupla velocidade (540/720 rpm)",
                "Ajuste traseiro sem degraus",
                "Raio de viragem reduzido",
                "Embreagem de dupla etapa opcional",
                "Força de tração ≥9.3-13.97kN",
                "Modelos 50HP e 60HP com opção 2WD/4WD"
            ]
        },
        specs: {
            en: {
                "Model": "TTE500 / TTE504 / TTE600 / TTE604",
                "Engine Power": "36.8kW (50HP) / 44.2kW (60HP)",
                "PTO Speed": "540/720 rpm (dual speed)",
                "Transmission": "8+2 with optional shuttle shift",
                "Front Tread": "1190-1490mm (adjustable) / 1200mm (non-adjustable) / 1130-1430mm (adjustable) / 1180-1400mm (adjustable)",
                "Rear Tread": "1200-1400mm (adjustable) / 1100-1500mm (adjustable) / 1205mm (adjustable)",
                "Max Traction Force": "9.6-10.1kN (2WD) / ≥9.3-13.97kN (4WD)",
                "Max Lift Force": "≥8.3kN / 9.95kN",
                "Wheelbase": "Short wheelbase for maneuverability",
                "Hydraulic System": "Strong pressure lifter",
                "Clutch": "Optional dual-stage clutch",
                "Steering": "Hydraulic power steering",
                "Drive Options": "2WD (TTE500/600) / 4WD (TTE504/604)"
            },
            es: {
                "Modelo": "TTE500 / TTE504 / TTE600 / TTE604",
                "Potencia": "36.8kW (50HP) / 44.2kW (60HP)",
                "Velocidad TDF": "540/720 rpm (doble velocidad)",
                "Transmisión": "8+2 con cambio de lanzadera opcional",
                "Vía delantera": "1190-1490mm (ajustable) / 1200mm (fijo) / 1130-1430mm (ajustable) / 1180-1400mm (ajustable)",
                "Vía trasera": "1200-1400mm (ajustable) / 1100-1500mm (ajustable) / 1205mm (ajustable)",
                "Tracción máxima": "9.6-10.1kN (2WD) / ≥9.3-13.97kN (4WD)",
                "Elevación máxima": "≥8.3kN / 9.95kN",
                "Sistema hidráulico": "Elevador de presión fuerte",
                "Embrague": "Doble etapa opcional",
                "Dirección": "Dirección hidráulica asistida",
                "Opciones de tracción": "2WD / 4WD"
            },
            fr: {
                "Modèle": "TTE500 / TTE504 / TTE600 / TTE604",
                "Puissance": "36.8kW (50HP) / 44.2kW (60HP)",
                "Vitesse PTO": "540/720 rpm (double vitesse)",
                "Transmission": "8+2 avec navette optionnelle",
                "Voie avant": "1190-1490mm (réglable) / 1200mm (fixe) / 1130-1430mm (réglable) / 1180-1400mm (réglable)",
                "Voie arrière": "1200-1400mm (réglable) / 1100-1500mm (réglable) / 1205mm (réglable)",
                "Traction max": "9.6-10.1kN (2WD) / ≥9.3-13.97kN (4WD)",
                "Levage max": "≥8.3kN / 9.95kN",
                "Système hydraulique": "Vérin à pression forte",
                "Embrayage": "Double étage optionnel",
                "Direction": "Direction hydraulique assistée",
                "Options de traction": "2WD / 4WD"
            },
            ar: {
                "الموديل": "TTE500 / TTE504 / TTE600 / TTE604",
                "قوة المحرك": "36.8 كيلوواط (50 حصان) / 44.2 كيلوواط (60 حصان)",
                "سرعة PTO": "540/720 دورة/دقيقة (سرعة مزدوجة)",
                "ناقل الحركة": "8+2 مع مكوك اختياري",
                "المسار الأمامي": "1190-1490 ملم (قابل للتعديل) / 1200 ملم (ثابت) / 1130-1430 ملم (قابل للتعديل) / 1180-1400 ملم (قابل للتعديل)",
                "المسار الخلفي": "1200-1400 ملم (قابل للتعديل) / 1100-1500 ملم (قابل للتعديل) / 1205 ملم (قابل للتعديل)",
                "قوة الجر القصوى": "9.6-10.1 كيلو نيوتن (2WD) / ≥9.3-13.97 كيلو نيوتن (4WD)",
                "قوة الرفع القصوى": "≥8.3 كيلو نيوتن / 9.95 كيلو نيوتن",
                "النظام الهيدروليكي": "رافع ضغط قوي",
                "القابض": "مزدوج المرحلة اختياري",
                "التوجيه": "توجيه هيدروليكي معزز",
                "خيارات الدفع": "2WD / 4WD"
            },
            ru: {
                "Модель": "TTE500 / TTE504 / TTE600 / TTE604",
                "Мощность": "36.8кВт (50 л.с.) / 44.2кВт (60 л.с.)",
                "Скорость ВОМ": "540/720 об/мин (двойная)",
                "Трансмиссия": "8+2 с опциональным шаттлом",
                "Передняя колея": "1190-1490мм / 1200мм / 1130-1430мм / 1180-1400мм",
                "Задняя колея": "1200-1400мм / 1100-1500мм / 1205мм",
                "Тяговое усилие": "9.6-10.1 кН (2WD) / ≥9.3-13.97 кН (4WD)",
                "Подъемная сила": "≥8.3 кН / 9.95 кН",
                "Гидравлика": "Мощный подъемник",
                "Сцепление": "Опциональное двухдисковое",
                "Рулевое": "Гидроусилитель",
                "Опции привода": "2WD / 4WD"
            },
            pt: {
                "Modelo": "TTE500 / TTE504 / TTE600 / TTE604",
                "Potência": "36.8kW (50HP) / 44.2kW (60HP)",
                "Velocidade TDP": "540/720 rpm (dupla velocidade)",
                "Transmissão": "8+2 com shuttle opcional",
                "Via dianteira": "1190-1490mm (ajustável) / 1200mm (fixo) / 1130-1430mm (ajustável) / 1180-1400mm (ajustável)",
                "Via traseira": "1200-1400mm (ajustável) / 1100-1500mm (ajustável) / 1205mm (ajustável)",
                "Tração máxima": "9.6-10.1kN (2WD) / ≥9.3-13.97kN (4WD)",
                "Elevação máxima": "≥8.3kN / 9.95kN",
                "Sistema hidráulico": "Elevador de pressão forte",
                "Embreagem": "Dupla etapa opcional",
                "Direção": "Direção hidráulica assistida",
                "Opções de tração": "2WD / 4WD"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-30 days",
            warranty: "12 months / 2000 hours",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Medium-scale farming, diversified agriculture, transport, implement operations, mixed farming"
        }
    },
        // ============================================================
    //  🧪 农机具 → 施肥机械 → 牵引式搅拌加肥机
    // ============================================================
    {
        id: "FT-002",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/mixer-trailed.jpg",
        name: {
            en: "Trailed Fertilizer Mixer & Spreader - 1.2-2T Capacity",
            es: "Mezclador y Esparcidor de Fertilizante Remolcado - Capacidad 1.2-2T",
            fr: "Mélangeur et Épandeur d'Engrais Remorqué - Capacité 1.2-2T",
            ar: "خلاط وناشر أسمدة مقطور - سعة 1.2-2 طن",
            ru: "Прицепной смеситель и разбрасыватель удобрений - 1.2-2 т",
            pt: "Misturador e Espalhador de Fertilizante Reboque - Capacidade 1.2-2T"
        },
        desc: {
            en: "The Trailed Fertilizer Mixer & Spreader is a versatile machine for mixing and spreading granular fertilizers, grain, wheat bran, corn flour, and feed. Powered by tractor PTO or diesel engine, it features a spiral auger for thorough mixing and 360° rotating discharge pipe. Available in 1.2m³ and 2m³ capacities with load capacities up to 2 tons. Ideal for large-scale farming operations requiring efficient fertilizer handling and application.",
            es: "El mezclador y esparcidor de fertilizante remolcado es una máquina versátil para mezclar y esparcir fertilizantes granulares, granos y piensos. Disponible en capacidades de 1.2m³ y 2m³. Ideal para operaciones agrícolas a gran escala.",
            fr: "Le mélangeur et épandeur d'engrais remorqué est une machine polyvalente pour mélanger et épandre des engrais granulaires. Disponible en capacités de 1.2m³ et 2m³. Idéal pour les opérations agricoles à grande échelle.",
            ar: "خلاط وناشر الأسمدة المقطور هو آلة متعددة الاستخدامات لخلط ونشر الأسمدة الحبيبية. متوفر بسعات 1.2 م³ و 2 م³. مثالي للعمليات الزراعية واسعة النطاق.",
            ru: "Прицепной смеситель-разбрасыватель - универсальная машина для смешивания и разбрасывания гранулированных удобрений. Доступен в 1.2м³ и 2м³.",
            pt: "O misturador e espalhador de fertilizante reboque é uma máquina versátil para misturar e espalhar fertilizantes granulares. Disponível em 1.2m³ e 2m³."
        },
        features: {
            en: [
                "1.2m³ or 2m³ hopper capacity for flexible operation",
                "Load capacity up to 2 tons for efficient handling",
                "Spiral auger mixing design for thorough fertilizer blending",
                "360° rotating discharge pipe for easy positioning",
                "Prevents fertilizer adhesion to pipe walls with spiral design",
                "Thickened carbon steel body for durability",
                "Heavy-duty tires for stability and safety",
                "Minimum 30kW tractor power requirement",
                "Suitable for grain, fertilizer, bran, corn flour, and feed"
            ],
            es: [
                "Capacidad de tolva de 1.2m³ o 2m³",
                "Capacidad de carga hasta 2 toneladas",
                "Diseño de mezcla con sinfín espiral",
                "Tubo de descarga giratorio 360°",
                "Evita la adhesión de fertilizante a las paredes",
                "Cuerpo de acero al carbono reforzado",
                "Neumáticos resistentes",
                "Requiere tractor de ≥30kW",
                "Adecuado para granos, fertilizantes y piensos"
            ],
            fr: [
                "Capacité de trémie 1.2m³ ou 2m³",
                "Capacité de charge jusqu'à 2 tonnes",
                "Mélange par vis sans fin",
                "Tube de décharge rotatif 360°",
                "Évite l'adhésion du fertilisant aux parois",
                "Corps en acier au carbone renforcé",
                "Pneus résistants",
                "Tracteur ≥30kW requis",
                "Convient aux céréales, engrais et aliments"
            ],
            ar: [
                "سعة قادوس 1.2 م³ أو 2 م³",
                "سعة تحميل تصل إلى 2 طن",
                "تصميم خلط لولبي حلزوني",
                "أنبوب تفريغ دوار 360°",
                "يمنع التصاق الأسمدة بالجدران",
                "هيكل من الصلب الكربوني السميك",
                "إطارات مقاومة",
                "يتطلب جرار ≥30 كيلوواط",
                "مناسب للحبوب والأسمدة والأعلاف"
            ],
            ru: [
                "Емкость бункера 1.2м³ или 2м³",
                "Грузоподъемность до 2 тонн",
                "Спиральный шнек для смешивания",
                "Поворотная труба 360°",
                "Предотвращает прилипание удобрений",
                "Корпус из толстой углеродистой стали",
                "Прочные шины",
                "Трактор ≥30 кВт",
                "Подходит для зерна, удобрений и кормов"
            ],
            pt: [
                "Capacidade de tremonha 1.2m³ ou 2m³",
                "Capacidade de carga até 2 toneladas",
                "Mistura com rosca helicoidal",
                "Tubo de descarga rotativo 360°",
                "Evita aderência de fertilizante",
                "Corpo em aço carbono reforçado",
                "Pneus resistentes",
                "Trator ≥30kW necessário",
                "Adequado para grãos, fertilizantes e ração"
            ]
        },
        specs: {
            en: {
                "Models": "1.2m³ / 2m³",
                "Hopper Volume": "1.2m³ / 2m³",
                "Load Capacity": "1t / 2t",
                "Power Requirement": "≥30kW",
                "Machine Size (L×W×H)": "3400×1790×2650mm / 3750×1850×2800mm",
                "Discharge Height": "2.2m / 2.4m",
                "Discharge Radius": "3.2m (both models)",
                "Weight": "390kg / 560kg",
                "Tire Type": "165/70R13 / 10.0/75-15.3"
            },
            es: {
                "Modelos": "1.2m³ / 2m³",
                "Volumen de tolva": "1.2m³ / 2m³",
                "Capacidad de carga": "1t / 2t",
                "Potencia requerida": "≥30kW",
                "Tamaño (L×A×H)": "3400×1790×2650mm / 3750×1850×2800mm",
                "Altura de descarga": "2.2m / 2.4m",
                "Radio de descarga": "3.2m",
                "Peso": "390kg / 560kg",
                "Neumáticos": "165/70R13 / 10.0/75-15.3"
            },
            fr: {
                "Modèles": "1.2m³ / 2m³",
                "Volume trémie": "1.2m³ / 2m³",
                "Capacité de charge": "1t / 2t",
                "Puissance requise": "≥30kW",
                "Taille (L×l×H)": "3400×1790×2650mm / 3750×1850×2800mm",
                "Hauteur de décharge": "2.2m / 2.4m",
                "Rayon de décharge": "3.2m",
                "Poids": "390kg / 560kg",
                "Pneus": "165/70R13 / 10.0/75-15.3"
            },
            ar: {
                "الموديلات": "1.2 م³ / 2 م³",
                "سعة القادوس": "1.2 م³ / 2 م³",
                "سعة التحميل": "1 طن / 2 طن",
                "القوة المطلوبة": "≥30 كيلوواط",
                "الحجم (طول×عرض×ارتفاع)": "3400×1790×2650 ملم / 3750×1850×2800 ملم",
                "ارتفاع التفريغ": "2.2 م / 2.4 م",
                "نصف قطر التفريغ": "3.2 م",
                "الوزن": "390 كجم / 560 كجم",
                "الإطارات": "165/70R13 / 10.0/75-15.3"
            },
            ru: {
                "Модели": "1.2м³ / 2м³",
                "Объем бункера": "1.2м³ / 2м³",
                "Грузоподъемность": "1т / 2т",
                "Мощность": "≥30 кВт",
                "Размеры": "3400×1790×2650мм / 3750×1850×2800мм",
                "Высота выгрузки": "2.2м / 2.4м",
                "Радиус выгрузки": "3.2м",
                "Вес": "390кг / 560кг",
                "Шины": "165/70R13 / 10.0/75-15.3"
            },
            pt: {
                "Modelos": "1.2m³ / 2m³",
                "Volume tremonha": "1.2m³ / 2m³",
                "Capacidade de carga": "1t / 2t",
                "Potência necessária": "≥30kW",
                "Tamanho (C×L×A)": "3400×1790×2650mm / 3750×1850×2800mm",
                "Altura de descarga": "2.2m / 2.4m",
                "Raio de descarga": "3.2m",
                "Peso": "390kg / 560kg",
                "Pneus": "165/70R13 / 10.0/75-15.3"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale farming, fertilizer blending and application, grain handling, feed processing"
        }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 → 悬挂式加肥机
    // ============================================================
    {
        id: "FT-003",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/spreader-mounted.png",
        name: {
            en: "Mounted Fertilizer Spreader - Electric & Hydraulic Drive Options",
            es: "Esparcidor de Fertilizante Montado - Opciones de Accionamiento Eléctrico e Hidráulico",
            fr: "Épandeur d'Engrais Porté - Options d'Entraînement Électrique et Hydraulique",
            ar: "ناشر أسمدة مثبت - خيارات محرك كهربائي وهيدروليكي",
            ru: "Навесной разбрасыватель удобрений - Электрический и гидравлический привод",
            pt: "Espalhador de Fertilizante Montado - Opções de Acionamento Elétrico e Hidráulico"
        },
        desc: {
            en: "The Mounted Fertilizer Spreader is a versatile and efficient machine for fertilizer application. Available in electric motor and hydraulic motor drive options. Features stainless steel construction for corrosion resistance, 500kg/200kg tank capacity options, and 180° rotating discharge pipe. The spiral auger design prevents fertilizer adhesion to pipe walls. Quick connection to 12V battery or tractor hydraulic system. Ideal for farms seeking labor-saving fertilizer application solutions.",
            es: "El esparcidor de fertilizante montado es una máquina versátil y eficiente. Disponible con motor eléctrico o hidráulico. Construcción en acero inoxidable, capacidad de 500/200kg y tubo giratorio 180°. Ideal para ahorrar mano de obra.",
            fr: "L'épandeur d'engrais porté est une machine polyvalente. Disponible avec moteur électrique ou hydraulique. Construction en acier inoxydable, capacité 500/200kg et tube rotatif 180°.",
            ar: "ناشر الأسمدة المثبت هو آلة متعددة الاستخدامات. متوفر بمحرك كهربائي أو هيدروليكي. هيكل من الفولاذ المقاوم للصدأ، سعة 500/200 كجم وأنبوب دوار 180°.",
            ru: "Навесной разбрасыватель удобрений - универсальная машина. Доступен с электродвигателем или гидромотором. Корпус из нержавеющей стали, емкость 500/200 кг.",
            pt: "O espalhador de fertilizante montado é uma máquina versátil. Disponível com motor elétrico ou hidráulico. Construção em aço inoxidável, capacidade 500/200kg."
        },
        features: {
            en: [
                "Electric motor or hydraulic motor drive options",
                "Stainless steel construction for corrosion resistance",
                "500kg or 200kg tank capacity options",
                "180° rotating discharge pipe for flexible positioning",
                "Spiral auger design prevents fertilizer adhesion",
                "Quick connection to 12V battery or tractor hydraulics",
                "Fast application speed up to 300kg/min",
                "Adjustable discharge height (1.8-2.2m)",
                "Durable and reliable operation"
            ],
            es: [
                "Opciones de motor eléctrico o hidráulico",
                "Construcción en acero inoxidable",
                "Capacidad de tanque de 500kg o 200kg",
                "Tubo de descarga giratorio 180°",
                "Diseño de sinfín espiral",
                "Conexión rápida a batería 12V",
                "Velocidad de hasta 300kg/min",
                "Altura ajustable 1.8-2.2m",
                "Operación duradera y confiable"
            ],
            fr: [
                "Options moteur électrique ou hydraulique",
                "Construction en acier inoxydable",
                "Capacité de réservoir 500kg ou 200kg",
                "Tube de décharge rotatif 180°",
                "Conception à vis sans fin",
                "Connexion rapide à la batterie 12V",
                "Vitesse jusqu'à 300kg/min",
                "Hauteur réglable 1.8-2.2m",
                "Fonctionnement durable"
            ],
            ar: [
                "خيارات محرك كهربائي أو هيدروليكي",
                "هيكل من الفولاذ المقاوم للصدأ",
                "سعة خزان 500 كجم أو 200 كجم",
                "أنبوب تفريغ دوار 180°",
                "تصميم لولبي حلزوني",
                "اتصال سريع ببطارية 12 فولت",
                "سرعة تصل إلى 300 كجم/دقيقة",
                "ارتفاع قابل للتعديل 1.8-2.2 م",
                "تشغيل متين وموثوق"
            ],
            ru: [
                "Опции электродвигателя или гидромотора",
                "Корпус из нержавеющей стали",
                "Емкость бака 500кг или 200кг",
                "Поворотная труба 180°",
                "Шнек для предотвращения налипания",
                "Подключение к 12В аккумулятору",
                "Скорость до 300 кг/мин",
                "Регулируемая высота 1.8-2.2м",
                "Надежная работа"
            ],
            pt: [
                "Opções de motor elétrico ou hidráulico",
                "Construção em aço inoxidável",
                "Capacidade do tanque 500kg ou 200kg",
                "Tubo de descarga rotativo 180°",
                "Design de rosca helicoidal",
                "Conexão rápida à bateria 12V",
                "Velocidade até 300kg/min",
                "Altura ajustável 1.8-2.2m",
                "Operação durável"
            ]
        },
        specs: {
            en: {
                "Drive Options": "Electric Motor / Hydraulic Motor",
                "Tank Capacity": "500kg / 200kg",
                "Application Speed": "300kg/min",
                "Discharge Height": "1.8-2.2m (adjustable)",
                "Machine Size (L×W×H)": "1350×600×750mm / 1050×500×600mm",
                "Tube Diameter": "168mm / 140mm",
                "Weight": "190kg / 150kg",
                "Power Source": "12V Battery / Tractor Hydraulics"
            },
            es: {
                "Opciones de accionamiento": "Motor eléctrico / Motor hidráulico",
                "Capacidad del tanque": "500kg / 200kg",
                "Velocidad": "300kg/min",
                "Altura de descarga": "1.8-2.2m (ajustable)",
                "Tamaño (L×A×H)": "1350×600×750mm / 1050×500×600mm",
                "Diámetro del tubo": "168mm / 140mm",
                "Peso": "190kg / 150kg",
                "Fuente de alimentación": "Batería 12V / Hidráulica del tractor"
            },
            fr: {
                "Options d'entraînement": "Moteur électrique / Moteur hydraulique",
                "Capacité du réservoir": "500kg / 200kg",
                "Vitesse": "300kg/min",
                "Hauteur de décharge": "1.8-2.2m (réglable)",
                "Taille": "1350×600×750mm / 1050×500×600mm",
                "Diamètre du tube": "168mm / 140mm",
                "Poids": "190kg / 150kg",
                "Alimentation": "Batterie 12V / Hydraulique tracteur"
            },
            ar: {
                "خيارات التشغيل": "محرك كهربائي / محرك هيدروليكي",
                "سعة الخزان": "500 كجم / 200 كجم",
                "السرعة": "300 كجم/دقيقة",
                "ارتفاع التفريغ": "1.8-2.2 م (قابل للتعديل)",
                "الحجم (طول×عرض×ارتفاع)": "1350×600×750 ملم / 1050×500×600 ملم",
                "قطر الأنبوب": "168 ملم / 140 ملم",
                "الوزن": "190 كجم / 150 كجم",
                "مصدر الطاقة": "بطارية 12 فولت / هيدروليك الجرار"
            },
            ru: {
                "Привод": "Электродвигатель / Гидромотор",
                "Емкость": "500кг / 200кг",
                "Скорость": "300 кг/мин",
                "Высота": "1.8-2.2м",
                "Размеры": "1350×600×750мм / 1050×500×600мм",
                "Диаметр": "168мм / 140мм",
                "Вес": "190кг / 150кг",
                "Питание": "12В / Гидравлика"
            },
            pt: {
                "Opções de acionamento": "Motor elétrico / Motor hidráulico",
                "Capacidade do tanque": "500kg / 200kg",
                "Velocidade": "300kg/min",
                "Altura de descarga": "1.8-2.2m (ajustável)",
                "Tamanho": "1350×600×750mm / 1050×500×600mm",
                "Diâmetro do tubo": "168mm / 140mm",
                "Peso": "190kg / 150kg",
                "Fonte de energia": "Bateria 12V / Hidráulica do trator"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Fertilizer application, grain handling, small to medium farms, greenhouse operations"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 自走式三轮高炮运粮加肥车
    // ============================================================
    {
        id: "OT-003",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/self-propelled.jpg",
        name: {
            en: "Self-Propelled 3-Wheel Grain & Fertilizer Transporter - 3m³ Capacity",
            es: "Transportador Autopropulsado de Grano y Fertilizante de 3 Ruedas - Capacidad 3m³",
            fr: "Transporteur Automoteur de Grain et Engrais à 3 Roues - Capacité 3m³",
            ar: "ناقل حبوب وأسمدة ذاتي الحركة 3 عجلات - سعة 3 م³",
            ru: "Самоходный 3-колесный транспортер зерна и удобрений - 3м³",
            pt: "Transportador Autopropulsado de Grão e Fertilizante de 3 Rodas - Capacidade 3m³"
        },
        desc: {
            en: "The Self-Propelled 3-Wheel Grain & Fertilizer Transporter is a versatile machine for grain and fertilizer handling in large-scale farming. Features a Wuzheng chassis with Changchai engine, thickened steel body, and hydraulic control system. The 3m³ hopper with auger delivery system enables fast loading and unloading with 360° rotating discharge pipe. LED lights for night operation. Ideal for rice, wheat, rapeseed, and other granular crop transport and fertilizer application.",
            es: "El transportador autopropulsado de 3 ruedas es una máquina versátil para el manejo de granos y fertilizantes. Chasis Wuzheng con motor Changchai, cuerpo de acero reforzado y sistema hidráulico. Ideal para arroz, trigo y otros cultivos.",
            fr: "Le transporteur automoteur à 3 roues est une machine polyvalente pour la manutention des grains et engrais. Châssis Wuzheng avec moteur Changchai. Idéal pour le riz, le blé et autres cultures.",
            ar: "ناقل الحبوب والأسمدة ذاتي الحركة هو آلة متعددة الاستخدامات. هيكل Wuzheng مع محرك Changchai. مثالي للأرز والقمح والمحاصيل الأخرى.",
            ru: "Самоходный 3-колесный транспортер - универсальная машина для зерна и удобрений. Шасси Wuzheng с двигателем Changchai.",
            pt: "O transportador autopropulsado de 3 rodas é uma máquina versátil. Chassi Wuzheng com motor Changchai."
        },
        features: {
            en: [
                "Wuzheng chassis with Changchai engine for reliability",
                "Thickened steel body for durability",
                "3m³ hopper capacity for efficient transport",
                "Hydraulic control system for easy operation",
                "360° rotating discharge pipe with height adjustment",
                "Internal auger for fast loading and unloading",
                "LED lights for night operation",
                "Heavy-duty tires for stability",
                "Spreader disc option available (customizable)",
                "4-ton load capacity for large-scale operations"
            ],
            es: [
                "Chasis Wuzheng con motor Changchai",
                "Cuerpo de acero reforzado",
                "Capacidad de tolva de 3m³",
                "Sistema de control hidráulico",
                "Tubo de descarga giratorio 360°",
                "Sinfín interno para carga rápida",
                "Luces LED para operación nocturna",
                "Neumáticos resistentes",
                "Disco esparcidor opcional (personalizable)",
                "Capacidad de carga de 4 toneladas"
            ],
            fr: [
                "Châssis Wuzheng avec moteur Changchai",
                "Corps en acier renforcé",
                "Capacité de trémie 3m³",
                "Système de contrôle hydraulique",
                "Tube de décharge rotatif 360°",
                "Vis sans fin pour chargement rapide",
                "Lumières LED pour fonctionnement nocturne",
                "Pneus résistants",
                "Disque d'épandage optionnel",
                "Capacité de charge 4 tonnes"
            ],
            ar: [
                "هيكل Wuzheng مع محرك Changchai",
                "هيكل صلب سميك",
                "سعة قادوس 3 م³",
                "نظام تحكم هيدروليكي",
                "أنبوب تفريغ دوار 360°",
                "مثقب داخلي للتحميل السريع",
                "أضواء LED للعمل الليلي",
                "إطارات مقاومة",
                "قرص نثر اختياري",
                "سعة تحميل 4 طن"
            ],
            ru: [
                "Шасси Wuzheng с двигателем Changchai",
                "Утолщенный стальной корпус",
                "Бункер 3м³",
                "Гидравлическое управление",
                "Поворотная труба 360°",
                "Шнек для быстрой загрузки",
                "Светодиодные фары",
                "Прочные шины",
                "Опция разбрасывающего диска",
                "Грузоподъемность 4 т"
            ],
            pt: [
                "Chassi Wuzheng com motor Changchai",
                "Corpo em aço reforçado",
                "Capacidade de tremonha 3m³",
                "Sistema de controle hidráulico",
                "Tubo de descarga rotativo 360°",
                "Rosca para carregamento rápido",
                "Luzes LED para operação noturna",
                "Pneus resistentes",
                "Disco espalhador opcional",
                "Capacidade de carga 4 toneladas"
            ]
        },
        specs: {
            en: {
                "Hopper Volume": "3m³",
                "Load Capacity": "4 tons",
                "Engine Power": "≥32kW (Changchai)",
                "Machine Size (L×W×H)": "5300×1600×2300mm",
                "Discharge Height": "3.8m",
                "Weight": "1880kg",
                "Wheelbase": "1300mm",
                "Tire Type": "Front 6.00-14 / Rear 7.5-16 (customizable)",
                "Chassis": "Wuzheng"
            },
            es: {
                "Volumen de tolva": "3m³",
                "Capacidad de carga": "4 toneladas",
                "Potencia del motor": "≥32kW (Changchai)",
                "Tamaño": "5300×1600×2300mm",
                "Altura de descarga": "3.8m",
                "Peso": "1880kg",
                "Distancia entre ejes": "1300mm",
                "Neumáticos": "Del. 6.00-14 / Tras. 7.5-16",
                "Chasis": "Wuzheng"
            },
            fr: {
                "Volume trémie": "3m³",
                "Capacité de charge": "4 tonnes",
                "Puissance moteur": "≥32kW (Changchai)",
                "Taille": "5300×1600×2300mm",
                "Hauteur de décharge": "3.8m",
                "Poids": "1880kg",
                "Empattement": "1300mm",
                "Pneus": "Av. 6.00-14 / Arr. 7.5-16",
                "Châssis": "Wuzheng"
            },
            ar: {
                "سعة القادوس": "3 م³",
                "سعة التحميل": "4 طن",
                "قوة المحرك": "≥32 كيلوواط (Changchai)",
                "الحجم (طول×عرض×ارتفاع)": "5300×1600×2300 ملم",
                "ارتفاع التفريغ": "3.8 م",
                "الوزن": "1880 كجم",
                "قاعدة العجلات": "1300 ملم",
                "الإطارات": "أمامي 6.00-14 / خلفي 7.5-16",
                "الهيكل": "Wuzheng"
            },
            ru: {
                "Объем бункера": "3м³",
                "Грузоподъемность": "4 т",
                "Двигатель": "≥32 кВт (Changchai)",
                "Размеры": "5300×1600×2300мм",
                "Высота": "3.8м",
                "Вес": "1880кг",
                "Колесная база": "1300мм",
                "Шины": "Перед 6.00-14 / Зад 7.5-16",
                "Шасси": "Wuzheng"
            },
            pt: {
                "Volume tremonha": "3m³",
                "Capacidade de carga": "4 toneladas",
                "Potência do motor": "≥32kW (Changchai)",
                "Tamanho": "5300×1600×2300mm",
                "Altura de descarga": "3.8m",
                "Peso": "1880kg",
                "Distância entre eixos": "1300mm",
                "Pneus": "Dianteiro 6.00-14 / Traseiro 7.5-16",
                "Chassi": "Wuzheng"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale farming, grain transport, fertilizer application, rice/wheat/corn harvesting support"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 牵引式高炮运粮加肥撒肥机
    // ============================================================
    {
        id: "OT-004",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/grain-trailer.jpg",
        name: {
            en: "Trailed Grain & Fertilizer Transporter - 3-9m³ Capacity",
            es: "Transportador de Grano y Fertilizante Remolcado - Capacidad 3-9m³",
            fr: "Transporteur de Grain et Engrais Remorqué - Capacité 3-9m³",
            ar: "ناقل حبوب وأسمدة مقطور - سعة 3-9 م³",
            ru: "Прицепной транспортер зерна и удобрений - 3-9м³",
            pt: "Transportador de Grão e Fertilizante Reboque - Capacidade 3-9m³"
        },
        desc: {
            en: "The Trailed Grain & Fertilizer Transporter is a versatile machine for grain and fertilizer handling in large-scale farming. Powered by tractor PTO, it features a large-capacity hopper (3-9m³) with auger delivery system and 360° rotating discharge pipe. Available in 3m³, 6m³, and 9m³ models with load capacities from 4 to 11 tons. Ideal for rice, wheat, corn, rapeseed, and other granular crop transport and fertilizer application in large fields.",
            es: "El transportador remolcado de grano y fertilizante es una máquina versátil para el manejo en agricultura a gran escala. Disponible en modelos de 3, 6 y 9m³ con capacidades de carga de 4 a 11 toneladas.",
            fr: "Le transporteur remorqué de grain et engrais est une machine polyvalente. Disponible en 3, 6 et 9m³ avec capacités de charge de 4 à 11 tonnes.",
            ar: "ناقل الحبوب والأسمدة المقطور هو آلة متعددة الاستخدامات. متوفر بسعات 3 و 6 و 9 م³ بسعات تحميل 4 إلى 11 طن.",
            ru: "Прицепной транспортер зерна и удобрений - универсальная машина. Доступен в 3, 6 и 9м³ с грузоподъемностью от 4 до 11 тонн.",
            pt: "O transportador de grão e fertilizante reboque é uma máquina versátil. Disponível em 3, 6 e 9m³ com capacidades de carga de 4 a 11 toneladas."
        },
        features: {
            en: [
                "3m³, 6m³, or 9m³ hopper capacity for flexible operation",
                "Load capacity from 4 to 11 tons for efficient transport",
                "PTO-driven auger delivery system",
                "360° rotating discharge pipe with height adjustment",
                "Hydraulic control for easy operation",
                "Thickened steel body for durability",
                "Heavy-duty tires for stability",
                "Spreader disc option available (customizable)",
                "Applicable to rice, wheat, corn, rapeseed, and granular fertilizers"
            ],
            es: [
                "Capacidad de tolva de 3, 6 o 9m³",
                "Capacidad de carga de 4 a 11 toneladas",
                "Sistema de descarga por sinfín accionado por TDF",
                "Tubo de descarga giratorio 360°",
                "Control hidráulico",
                "Cuerpo de acero reforzado",
                "Neumáticos resistentes",
                "Disco esparcidor opcional",
                "Adecuado para arroz, trigo, maíz y fertilizantes"
            ],
            fr: [
                "Capacité de trémie 3, 6 ou 9m³",
                "Capacité de charge de 4 à 11 tonnes",
                "Système de décharge par vis sans fin entraînée par PTO",
                "Tube de décharge rotatif 360°",
                "Contrôle hydraulique",
                "Corps en acier renforcé",
                "Pneus résistants",
                "Disque d'épandage optionnel",
                "Convient au riz, blé, maïs et engrais"
            ],
            ar: [
                "سعة قادوس 3 و 6 و 9 م³",
                "سعة تحميل 4 إلى 11 طن",
                "نظام تفريغ لولبي يعمل بـ PTO",
                "أنبوب تفريغ دوار 360°",
                "تحكم هيدروليكي",
                "هيكل صلب سميك",
                "إطارات مقاومة",
                "قرص نثر اختياري",
                "مناسب للأرز والقمح والذرة والأسمدة"
            ],
            ru: [
                "Бункер 3, 6 или 9м³",
                "Грузоподъемность от 4 до 11 тонн",
                "Шнек с приводом от ВОМ",
                "Поворотная труба 360°",
                "Гидравлическое управление",
                "Утолщенный стальной корпус",
                "Прочные шины",
                "Опция разбрасывающего диска",
                "Подходит для зерна и удобрений"
            ],
            pt: [
                "Capacidade de tremonha 3, 6 ou 9m³",
                "Capacidade de carga de 4 a 11 toneladas",
                "Sistema de descarga por rosca acionado por TDP",
                "Tubo de descarga rotativo 360°",
                "Controle hidráulico",
                "Corpo em aço reforçado",
                "Pneus resistentes",
                "Disco espalhador opcional",
                "Adequado para arroz, trigo, milho e fertilizantes"
            ]
        },
        specs: {
            en: {
                "Models": "3m³ / 6m³ / 9m³",
                "Hopper Volume": "3m³ / 6m³ / 9m³",
                "Load Capacity": "4t / 7t / 11t",
                "Power Requirement": "≥40kW / ≥60kW / ≥90kW",
                "Machine Size (L×W×H)": "4050×1600×2000mm / 4580×2060×2500mm / 5170×2400×2900mm",
                "Discharge Height": "3.5m / 4.3m / 4.9m",
                "Weight": "1100kg / 1300kg / 1900kg",
                "Wheelbase": "1300mm / 1700mm / 2030mm",
                "Tire Type": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            },
            es: {
                "Modelos": "3m³ / 6m³ / 9m³",
                "Volumen de tolva": "3m³ / 6m³ / 9m³",
                "Capacidad de carga": "4t / 7t / 11t",
                "Potencia requerida": "≥40kW / ≥60kW / ≥90kW",
                "Tamaño": "4050×1600×2000mm / 4580×2060×2500mm / 5170×2400×2900mm",
                "Altura de descarga": "3.5m / 4.3m / 4.9m",
                "Peso": "1100kg / 1300kg / 1900kg",
                "Distancia entre ejes": "1300mm / 1700mm / 2030mm",
                "Neumáticos": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            },
            fr: {
                "Modèles": "3m³ / 6m³ / 9m³",
                "Volume trémie": "3m³ / 6m³ / 9m³",
                "Capacité de charge": "4t / 7t / 11t",
                "Puissance requise": "≥40kW / ≥60kW / ≥90kW",
                "Taille": "4050×1600×2000mm / 4580×2060×2500mm / 5170×2400×2900mm",
                "Hauteur de décharge": "3.5m / 4.3m / 4.9m",
                "Poids": "1100kg / 1300kg / 1900kg",
                "Empattement": "1300mm / 1700mm / 2030mm",
                "Pneus": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            },
            ar: {
                "الموديلات": "3 م³ / 6 م³ / 9 م³",
                "سعة القادوس": "3 م³ / 6 م³ / 9 م³",
                "سعة التحميل": "4 طن / 7 طن / 11 طن",
                "القوة المطلوبة": "≥40 كيلوواط / ≥60 كيلوواط / ≥90 كيلوواط",
                "الحجم (طول×عرض×ارتفاع)": "4050×1600×2000 ملم / 4580×2060×2500 ملم / 5170×2400×2900 ملم",
                "ارتفاع التفريغ": "3.5 م / 4.3 م / 4.9 م",
                "الوزن": "1100 كجم / 1300 كجم / 1900 كجم",
                "قاعدة العجلات": "1300 ملم / 1700 ملم / 2030 ملم",
                "الإطارات": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            },
            ru: {
                "Модели": "3м³ / 6м³ / 9м³",
                "Объем бункера": "3м³ / 6м³ / 9м³",
                "Грузоподъемность": "4т / 7т / 11т",
                "Мощность": "≥40кВт / ≥60кВт / ≥90кВт",
                "Размеры": "4050×1600×2000мм / 4580×2060×2500мм / 5170×2400×2900мм",
                "Высота": "3.5м / 4.3м / 4.9м",
                "Вес": "1100кг / 1300кг / 1900кг",
                "Колесная база": "1300мм / 1700мм / 2030мм",
                "Шины": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            },
            pt: {
                "Modelos": "3m³ / 6m³ / 9m³",
                "Volume tremonha": "3m³ / 6m³ / 9m³",
                "Capacidade de carga": "4t / 7t / 11t",
                "Potência necessária": "≥40kW / ≥60kW / ≥90kW",
                "Tamanho": "4050×1600×2000mm / 4580×2060×2500mm / 5170×2400×2900mm",
                "Altura de descarga": "3.5m / 4.3m / 4.9m",
                "Peso": "1100kg / 1300kg / 1900kg",
                "Distância entre eixos": "1300mm / 1700mm / 2030mm",
                "Pneus": "11.5/80-15.3 / 14-17.5 / 40/60-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale grain transport, fertilizer application, rice/wheat/corn farming, bulk material handling"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 12方牵引式高炮运粮加肥机
    // ============================================================
    {
        id: "OT-005",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/12.jpg",
        name: {
            en: "12m³ Trailed Grain & Fertilizer Transporter - Large Capacity Bulk Handler",
            es: "Transportador de Grano y Fertilizante Remolcado 12m³ - Manejo a Granel de Gran Capacidad",
            fr: "Transporteur de Grain et Engrais Remorqué 12m³ - Manutention en Vrac Grande Capacité",
            ar: "ناقل حبوب وأسمدة مقطور 12 م³ - مناولة سائبة كبيرة السعة",
            ru: "12м³ Прицепной транспортер зерна и удобрений - Большой объем",
            pt: "Transportador de Grão e Fertilizante Reboque 12m³ - Grande Capacidade"
        },
        desc: {
            en: "The 12m³ Trailed Grain & Fertilizer Transporter is a large-capacity machine for bulk grain and fertilizer handling in large-scale agricultural operations. Powered by tractor PTO (≥100kW), it features a 12m³ hopper with 14-ton load capacity, auger delivery system, and 360° rotating discharge pipe with 5.5m height. Ideal for rice, wheat, corn, and other granular crops, as well as fertilizer application in extensive farming operations.",
            es: "El transportador remolcado de 12m³ es una máquina de gran capacidad para el manejo a granel en operaciones agrícolas extensivas. Capacidad de tolva de 12m³ y carga de 14 toneladas. Ideal para arroz, trigo, maíz y fertilizantes.",
            fr: "Le transporteur remorqué 12m³ est une machine de grande capacité pour la manutention en vrac. Capacité de trémie 12m³ et charge de 14 tonnes. Idéal pour le riz, le blé, le maïs et les engrais.",
            ar: "ناقل الحبوب والأسمدة المقطور 12 م³ هو آلة كبيرة السعة. سعة قادوس 12 م³ وحمولة 14 طن. مثالي للأرز والقمح والذرة والأسمدة.",
            ru: "12м³ прицепной транспортер - машина большой емкости. Бункер 12м³ и грузоподъемность 14 тонн. Подходит для зерна и удобрений.",
            pt: "O transportador reboque 12m³ é uma máquina de grande capacidade. Tremonha de 12m³ e carga de 14 toneladas. Ideal para grãos e fertilizantes."
        },
        features: {
            en: [
                "12m³ hopper capacity for bulk material handling",
                "14-ton load capacity for efficient transport",
                "PTO-driven auger delivery system (≥100kW tractor)",
                "360° rotating discharge pipe with height adjustment",
                "Hydraulic control for easy operation",
                "Thickened steel body for durability",
                "Heavy-duty tires for stability",
                "Rear large discharge port for fast unloading",
                "Spreader disc option available (customizable)",
                "Applicable to rice, wheat, corn, rapeseed, and granular fertilizers"
            ],
            es: [
                "Capacidad de tolva de 12m³",
                "Capacidad de carga de 14 toneladas",
                "Sistema de descarga por sinfín accionado por TDF",
                "Tubo de descarga giratorio 360°",
                "Control hidráulico",
                "Cuerpo de acero reforzado",
                "Neumáticos resistentes",
                "Puerto de descarga trasero grande",
                "Disco esparcidor opcional",
                "Adecuado para arroz, trigo, maíz y fertilizantes"
            ],
            fr: [
                "Capacité de trémie 12m³",
                "Capacité de charge 14 tonnes",
                "Système de décharge par vis sans fin entraînée par PTO",
                "Tube de décharge rotatif 360°",
                "Contrôle hydraulique",
                "Corps en acier renforcé",
                "Pneus résistants",
                "Grande porte de décharge arrière",
                "Disque d'épandage optionnel",
                "Convient au riz, blé, maïs et engrais"
            ],
            ar: [
                "سعة قادوس 12 م³",
                "سعة تحميل 14 طن",
                "نظام تفريغ لولبي يعمل بـ PTO",
                "أنبوب تفريغ دوار 360°",
                "تحكم هيدروليكي",
                "هيكل صلب سميك",
                "إطارات مقاومة",
                "منفذ تفريغ خلفي كبير",
                "قرص نثر اختياري",
                "مناسب للأرز والقمح والذرة والأسمدة"
            ],
            ru: [
                "Бункер 12м³",
                "Грузоподъемность 14 тонн",
                "Шнек с приводом от ВОМ",
                "Поворотная труба 360°",
                "Гидравлическое управление",
                "Утолщенный стальной корпус",
                "Прочные шины",
                "Большой задний патрубок",
                "Опция разбрасывающего диска",
                "Подходит для зерна и удобрений"
            ],
            pt: [
                "Capacidade de tremonha 12m³",
                "Capacidade de carga 14 toneladas",
                "Sistema de descarga por rosca acionado por TDP",
                "Tubo de descarga rotativo 360°",
                "Controle hidráulico",
                "Corpo em aço reforçado",
                "Pneus resistentes",
                "Grande porta de descarga traseira",
                "Disco espalhador opcional",
                "Adequado para arroz, trigo, milho e fertilizantes"
            ]
        },
        specs: {
            en: {
                "Hopper Volume": "12m³",
                "Load Capacity": "14 tons",
                "Power Requirement": "≥100kW",
                "Machine Size (L×W×H)": "6140×2560×2860mm",
                "Discharge Height": "5.5m",
                "Weight": "2500kg",
                "Wheelbase": "2120mm",
                "Tire Type": "600/50-22.5"
            },
            es: {
                "Volumen de tolva": "12m³",
                "Capacidad de carga": "14 toneladas",
                "Potencia requerida": "≥100kW",
                "Tamaño": "6140×2560×2860mm",
                "Altura de descarga": "5.5m",
                "Peso": "2500kg",
                "Distancia entre ejes": "2120mm",
                "Neumáticos": "600/50-22.5"
            },
            fr: {
                "Volume trémie": "12m³",
                "Capacité de charge": "14 tonnes",
                "Puissance requise": "≥100kW",
                "Taille": "6140×2560×2860mm",
                "Hauteur de décharge": "5.5m",
                "Poids": "2500kg",
                "Empattement": "2120mm",
                "Pneus": "600/50-22.5"
            },
            ar: {
                "سعة القادوس": "12 م³",
                "سعة التحميل": "14 طن",
                "القوة المطلوبة": "≥100 كيلوواط",
                "الحجم": "6140×2560×2860 ملم",
                "ارتفاع التفريغ": "5.5 م",
                "الوزن": "2500 كجم",
                "قاعدة العجلات": "2120 ملم",
                "الإطارات": "600/50-22.5"
            },
            ru: {
                "Объем бункера": "12м³",
                "Грузоподъемность": "14 т",
                "Мощность": "≥100 кВт",
                "Размеры": "6140×2560×2860мм",
                "Высота": "5.5м",
                "Вес": "2500кг",
                "Колесная база": "2120мм",
                "Шины": "600/50-22.5"
            },
            pt: {
                "Volume tremonha": "12m³",
                "Capacidade de carga": "14 toneladas",
                "Potência necessária": "≥100kW",
                "Tamanho": "6140×2560×2860mm",
                "Altura de descarga": "5.5m",
                "Peso": "2500kg",
                "Distância entre eixos": "2120mm",
                "Pneus": "600/50-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale grain transport, fertilizer application, bulk material handling, extensive farming operations"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 20方牵引式高炮运粮加肥机
    // ============================================================
    {
        id: "OT-006",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/20.jpg",
        name: {
            en: "20m³ Trailed Grain & Fertilizer Transporter - Ultra-Large Capacity Bulk Handler",
            es: "Transportador de Grano y Fertilizante Remolcado 20m³ - Manejo a Granel de Ultra Gran Capacidad",
            fr: "Transporteur de Grain et Engrais Remorqué 20m³ - Manutention en Vrac Ultra Grande Capacité",
            ar: "ناقل حبوب وأسمدة مقطور 20 م³ - مناولة سائبة فائقة السعة",
            ru: "20м³ Прицепной транспортер зерна и удобрений - Сверхбольшой объем",
            pt: "Transportador de Grão e Fertilizante Reboque 20m³ - Ultra Grande Capacidade"
        },
        desc: {
            en: "The 20m³ Trailed Grain & Fertilizer Transporter is an ultra-large-capacity machine for bulk grain and fertilizer handling in large-scale agricultural operations. Powered by tractor PTO (≥220kW), it features a 20m³ hopper with 24-ton load capacity, auger delivery system, and 360° rotating discharge pipe with 6.3m height. Features Italian Adir axle and reinforced crossbeam for exceptional durability. Ideal for extensive farming, grain storage facilities, and large-scale fertilizer application.",
            es: "El transportador remolcado de 20m³ es una máquina de ultra gran capacidad para el manejo a granel en operaciones agrícolas extensivas. Capacidad de tolva de 20m³ y carga de 24 toneladas. Ideal para agricultura extensiva y grandes almacenes de grano.",
            fr: "Le transporteur remorqué 20m³ est une machine de ultra grande capacité pour la manutention en vrac. Capacité de trémie 20m³ et charge de 24 tonnes. Idéal pour l'agriculture extensive.",
            ar: "ناقل الحبوب والأسمدة المقطور 20 م³ هو آلة فائقة السعة. سعة قادوس 20 م³ وحمولة 24 طن. مثالي للزراعة الواسعة.",
            ru: "20м³ прицепной транспортер - машина сверхбольшой емкости. Бункер 20м³ и грузоподъемность 24 тонны.",
            pt: "O transportador reboque 20m³ é uma máquina de ultra grande capacidade. Tremonha de 20m³ e carga de 24 toneladas."
        },
        features: {
            en: [
                "20m³ hopper capacity for ultra-large bulk material handling",
                "24-ton load capacity for maximum efficiency",
                "PTO-driven auger delivery system (≥220kW tractor)",
                "360° rotating discharge pipe with height adjustment",
                "Hydraulic control for easy operation",
                "Italian Adir axle for exceptional durability",
                "Reinforced crossbeam for added strength",
                "Thickened steel body for long service life",
                "Heavy-duty tires for stability",
                "Spreader disc option available (customizable)"
            ],
            es: [
                "Capacidad de tolva de 20m³",
                "Capacidad de carga de 24 toneladas",
                "Sistema de descarga por sinfín accionado por TDF",
                "Tubo de descarga giratorio 360°",
                "Control hidráulico",
                "Eje italiano Adir",
                "Viga transversal reforzada",
                "Cuerpo de acero reforzado",
                "Neumáticos resistentes",
                "Disco esparcidor opcional"
            ],
            fr: [
                "Capacité de trémie 20m³",
                "Capacité de charge 24 tonnes",
                "Système de décharge par vis sans fin entraînée par PTO",
                "Tube de décharge rotatif 360°",
                "Contrôle hydraulique",
                "Essieu italien Adir",
                "Poutre transversale renforcée",
                "Corps en acier renforcé",
                "Pneus résistants",
                "Disque d'épandage optionnel"
            ],
            ar: [
                "سعة قادوس 20 م³",
                "سعة تحميل 24 طن",
                "نظام تفريغ لولبي يعمل بـ PTO",
                "أنبوب تفريغ دوار 360°",
                "تحكم هيدروليكي",
                "محور Adir إيطالي",
                "عارضة عرضية معززة",
                "هيكل صلب سميك",
                "إطارات مقاومة",
                "قرص نثر اختياري"
            ],
            ru: [
                "Бункер 20м³",
                "Грузоподъемность 24 тонны",
                "Шнек с приводом от ВОМ",
                "Поворотная труба 360°",
                "Гидравлическое управление",
                "Ось Adir (Италия)",
                "Усиленная поперечная балка",
                "Утолщенный стальной корпус",
                "Прочные шины",
                "Опция разбрасывающего диска"
            ],
            pt: [
                "Capacidade de tremonha 20m³",
                "Capacidade de carga 24 toneladas",
                "Sistema de descarga por rosca acionado por TDP",
                "Tubo de descarga rotativo 360°",
                "Controle hidráulico",
                "Eixo italiano Adir",
                "Viga transversal reforçada",
                "Corpo em aço reforçado",
                "Pneus resistentes",
                "Disco espalhador opcional"
            ]
        },
        specs: {
            en: {
                "Hopper Volume": "20m³",
                "Load Capacity": "24 tons",
                "Power Requirement": "≥220kW",
                "Machine Size (L×W×H)": "7400×2960×3400mm",
                "Discharge Height": "6.3m",
                "Weight": "5210kg",
                "Wheelbase": "2300mm",
                "Tire Type": "500/60-22.5 (dual axle)",
                "Axle": "Italian Adir axle"
            },
            es: {
                "Volumen de tolva": "20m³",
                "Capacidad de carga": "24 toneladas",
                "Potencia requerida": "≥220kW",
                "Tamaño": "7400×2960×3400mm",
                "Altura de descarga": "6.3m",
                "Peso": "5210kg",
                "Distancia entre ejes": "2300mm",
                "Neumáticos": "500/60-22.5 (eje dual)",
                "Eje": "Eje italiano Adir"
            },
            fr: {
                "Volume trémie": "20m³",
                "Capacité de charge": "24 tonnes",
                "Puissance requise": "≥220kW",
                "Taille": "7400×2960×3400mm",
                "Hauteur de décharge": "6.3m",
                "Poids": "5210kg",
                "Empattement": "2300mm",
                "Pneus": "500/60-22.5 (essieu double)",
                "Essieu": "Essieu italien Adir"
            },
            ar: {
                "سعة القادوس": "20 م³",
                "سعة التحميل": "24 طن",
                "القوة المطلوبة": "≥220 كيلوواط",
                "الحجم": "7400×2960×3400 ملم",
                "ارتفاع التفريغ": "6.3 م",
                "الوزن": "5210 كجم",
                "قاعدة العجلات": "2300 ملم",
                "الإطارات": "500/60-22.5 (محور مزدوج)",
                "المحور": "محور Adir إيطالي"
            },
            ru: {
                "Объем бункера": "20м³",
                "Грузоподъемность": "24 т",
                "Мощность": "≥220 кВт",
                "Размеры": "7400×2960×3400мм",
                "Высота": "6.3м",
                "Вес": "5210кг",
                "Колесная база": "2300мм",
                "Шины": "500/60-22.5 (двойная ось)",
                "Ось": "Ось Adir (Италия)"
            },
            pt: {
                "Volume tremonha": "20m³",
                "Capacidade de carga": "24 toneladas",
                "Potência necessária": "≥220kW",
                "Tamanho": "7400×2960×3400mm",
                "Altura de descarga": "6.3m",
                "Peso": "5210kg",
                "Distância entre eixos": "2300mm",
                "Pneus": "500/60-22.5 (eixo duplo)",
                "Eixo": "Eixo italiano Adir"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "25-40 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Extensive grain transport, large-scale fertilizer application, bulk material handling, mega-farm operations"
        }
    },
        // ============================================================
    //  🧪 农机具 → 施肥机械 → 双竖绞龙撒肥机 (6-16方)
    // ============================================================
    {
        id: "FT-004",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/manure-spreader-vertical.jpg",
        name: {
            en: "Twin Vertical Auger Manure Spreader - 6-16m³ Capacity",
            es: "Esparcidor de Estiércol de Doble Sinfín Vertical - Capacidad 6-16m³",
            fr: "Épandeur de Fumier à Double Vis Verticale - Capacité 6-16m³",
            ar: "ناشر سماد بمثقبين عموديين - سعة 6-16 م³",
            ru: "Разбрасыватель навоза с двумя вертикальными шнеками - 6-16м³",
            pt: "Espalhador de Esterco com Dupla Rosca Vertical - Capacidade 6-16m³"
        },
        desc: {
            en: "The Twin Vertical Auger Manure Spreader is a professional fertilizer application machine designed for spreading various types of manure, organic fertilizer, distiller's grains, frozen fertilizer, and wet manure (moisture ≤80%). Features strong crushing capability, uniform spreading (8-15m width), and large capacity up to 16m³. Available in 6m³ to 16m³ models with load capacities from 7 to 19 tons. Ideal for large-scale livestock farms and organic farming operations.",
            es: "El esparcidor de estiércol de doble sinfín vertical es una máquina profesional para esparcir diversos tipos de estiércol y fertilizante orgánico. Capacidad de 6-16m³ y ancho de esparcimiento de 8-15m. Ideal para granjas ganaderas y agricultura orgánica.",
            fr: "L'épandeur de fumier à double vis verticale est une machine professionnelle pour épandre divers types de fumier et engrais organique. Capacité 6-16m³ et largeur d'épandage 8-15m.",
            ar: "ناشر السماد ذو المثقبين العموديين هو آلة احترافية لنشر أنواع مختلفة من السماد والأسمدة العضوية. سعة 6-16 م³ وعرض نثر 8-15 م.",
            ru: "Разбрасыватель навоза с двумя вертикальными шнеками - профессиональная машина для внесения различных видов навоза и органических удобрений. Емкость 6-16м³.",
            pt: "O espalhador de esterco com dupla rosca vertical é uma máquina profissional para espalhar vários tipos de esterco e fertilizante orgânico. Capacidade 6-16m³."
        },
        features: {
            en: [
                "6m³ to 16m³ hopper capacity for flexible operation",
                "Load capacity from 7 to 19 tons for efficient transport",
                "Twin vertical auger design for excellent crushing and mixing",
                "Spreading width 8-15m for wide coverage",
                "Chain conveyor for fast delivery (5 minutes per load)",
                "Thickened steel body with hydraulic oil tank and cooling system",
                "Heavy-duty tires for stability and safety",
                "Import reducer and precision hydraulic speed control valve",
                "Adjustable discharge opening for different application rates",
                "Suitable for manure, organic fertilizer, distiller's grains, and wet manure"
            ],
            es: [
                "Capacidad de tolva de 6-16m³",
                "Capacidad de carga de 7-19 toneladas",
                "Doble sinfín vertical para excelente trituración",
                "Ancho de esparcimiento 8-15m",
                "Transportador de cadena para entrega rápida",
                "Cuerpo de acero reforzado con sistema hidráulico",
                "Neumáticos resistentes",
                "Válvula de control de velocidad hidráulica de precisión",
                "Apertura de descarga ajustable",
                "Adecuado para estiércol y fertilizante orgánico"
            ],
            fr: [
                "Capacité de trémie 6-16m³",
                "Capacité de charge 7-19 tonnes",
                "Double vis verticale pour excellent broyage",
                "Largeur d'épandage 8-15m",
                "Convoyeur à chaîne pour livraison rapide",
                "Corps en acier renforcé avec système hydraulique",
                "Pneus résistants",
                "Vanne de régulation hydraulique de précision",
                "Ouverture de décharge réglable",
                "Convient au fumier et engrais organique"
            ],
            ar: [
                "سعة قادوس 6-16 م³",
                "سعة تحميل 7-19 طن",
                "مثقبان عموديان للتكسير الممتاز",
                "عرض نثر 8-15 م",
                "ناقل سلسلة للتسليم السريع",
                "هيكل صلب سميك مع نظام هيدروليكي",
                "إطارات مقاومة",
                "صمام تحكم هيدروليكي دقيق",
                "فتحة تفريغ قابلة للتعديل",
                "مناسب للسماد والأسمدة العضوية"
            ],
            ru: [
                "Бункер 6-16м³",
                "Грузоподъемность 7-19 тонн",
                "Два вертикальных шнека для отличного измельчения",
                "Ширина разбрасывания 8-15м",
                "Цепной конвейер для быстрой подачи",
                "Утолщенный стальной корпус с гидросистемой",
                "Прочные шины",
                "Точный гидравлический клапан регулировки скорости",
                "Регулируемое выходное отверстие",
                "Подходит для навоза и органических удобрений"
            ],
            pt: [
                "Capacidade de tremonha 6-16m³",
                "Capacidade de carga 7-19 toneladas",
                "Dupla rosca vertical para excelente trituração",
                "Largura de espalhamento 8-15m",
                "Transportador de corrente para entrega rápida",
                "Corpo em aço reforçado com sistema hidráulico",
                "Pneus resistentes",
                "Válvula de controle hidráulico de precisão",
                "Abertura de descarga ajustável",
                "Adequado para esterco e fertilizante orgânico"
            ]
        },
        specs: {
            en: {
                "Models": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Hopper Volume": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Load Capacity": "7t / 10t / 12t / 14t / 19t",
                "Power Requirement": "≥80kW / ≥80kW / ≥100kW / ≥140kW / ≥180kW",
                "Machine Size (L×W×H)": "6450×2650×2130mm / 6050×2640×2180mm / 6370×2820×2310mm / 7200×2970×2500mm / 8520×2850×3060mm",
                "Spreading Width": "8-15m (all models)",
                "Weight": "2580kg / 2980kg / 3140kg / 4100kg / 5900kg",
                "Wheelbase": "2220mm / 2230mm / 2300mm / 2350mm / 2350mm",
                "Tire Type": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5 (dual)"
            },
            es: {
                "Modelos": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Volumen de tolva": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Capacidad de carga": "7t / 10t / 12t / 14t / 19t",
                "Potencia requerida": "≥80kW / ≥80kW / ≥100kW / ≥140kW / ≥180kW",
                "Tamaño": "6450×2650×2130mm / 6050×2640×2180mm / 6370×2820×2310mm / 7200×2970×2500mm / 8520×2850×3060mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "2580kg / 2980kg / 3140kg / 4100kg / 5900kg",
                "Distancia entre ejes": "2220mm / 2230mm / 2300mm / 2350mm / 2350mm",
                "Neumáticos": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5"
            },
            fr: {
                "Modèles": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Volume trémie": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Capacité de charge": "7t / 10t / 12t / 14t / 19t",
                "Puissance requise": "≥80kW / ≥80kW / ≥100kW / ≥140kW / ≥180kW",
                "Taille": "6450×2650×2130mm / 6050×2640×2180mm / 6370×2820×2310mm / 7200×2970×2500mm / 8520×2850×3060mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "2580kg / 2980kg / 3140kg / 4100kg / 5900kg",
                "Empattement": "2220mm / 2230mm / 2300mm / 2350mm / 2350mm",
                "Pneus": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5"
            },
            ar: {
                "الموديلات": "6 م³ / 8 م³ / 10 م³ / 12 م³ / 16 م³",
                "سعة القادوس": "6 م³ / 8 م³ / 10 م³ / 12 م³ / 16 م³",
                "سعة التحميل": "7 طن / 10 طن / 12 طن / 14 طن / 19 طن",
                "القوة المطلوبة": "≥80 كيلوواط / ≥80 كيلوواط / ≥100 كيلوواط / ≥140 كيلوواط / ≥180 كيلوواط",
                "الحجم (طول×عرض×ارتفاع)": "6450×2650×2130 ملم / 6050×2640×2180 ملم / 6370×2820×2310 ملم / 7200×2970×2500 ملم / 8520×2850×3060 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "2580 كجم / 2980 كجم / 3140 كجم / 4100 كجم / 5900 كجم",
                "قاعدة العجلات": "2220 ملم / 2230 ملم / 2300 ملم / 2350 ملم / 2350 ملم",
                "الإطارات": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5"
            },
            ru: {
                "Модели": "6м³ / 8м³ / 10м³ / 12м³ / 16м³",
                "Объем бункера": "6м³ / 8м³ / 10м³ / 12м³ / 16м³",
                "Грузоподъемность": "7т / 10т / 12т / 14т / 19т",
                "Мощность": "≥80кВт / ≥80кВт / ≥100кВт / ≥140кВт / ≥180кВт",
                "Размеры": "6450×2650×2130мм / 6050×2640×2180мм / 6370×2820×2310мм / 7200×2970×2500мм / 8520×2850×3060мм",
                "Ширина": "8-15м",
                "Вес": "2580кг / 2980кг / 3140кг / 4100кг / 5900кг",
                "Колесная база": "2220мм / 2230мм / 2300мм / 2350мм / 2350мм",
                "Шины": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5"
            },
            pt: {
                "Modelos": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Volume tremonha": "6m³ / 8m³ / 10m³ / 12m³ / 16m³",
                "Capacidade de carga": "7t / 10t / 12t / 14t / 19t",
                "Potência necessária": "≥80kW / ≥80kW / ≥100kW / ≥140kW / ≥180kW",
                "Tamanho": "6450×2650×2130mm / 6050×2640×2180mm / 6370×2820×2310mm / 7200×2970×2500mm / 8520×2850×3060mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "2580kg / 2980kg / 3140kg / 4100kg / 5900kg",
                "Distância entre eixos": "2220mm / 2230mm / 2300mm / 2350mm / 2350mm",
                "Pneus": "16/70-20 / 16/70-20 / 500/60-22.5 / 600/55-26.5 / 500/60-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Large-scale livestock farms, organic farming, manure management, agricultural waste recycling"
        }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 → 横绞龙撒肥机 (8-10方)
    // ============================================================
    {
        id: "FT-005",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/manure-spreader-horizontal.jpg",
        name: {
            en: "Horizontal Auger Manure Spreader - 8-10m³ Capacity",
            es: "Esparcidor de Estiércol de Sinfín Horizontal - Capacidad 8-10m³",
            fr: "Épandeur de Fumier à Vis Horizontale - Capacité 8-10m³",
            ar: "ناشر سماد بمثقب أفقي - سعة 8-10 م³",
            ru: "Разбрасыватель навоза с горизонтальным шнеком - 8-10м³",
            pt: "Espalhador de Esterco com Rosca Horizontal - Capacidade 8-10m³"
        },
        desc: {
            en: "The Horizontal Auger Manure Spreader is a professional fertilizer application machine designed for spreading fresh manure, wet manure, hard manure, and various types of livestock waste including cow, pig, sheep, and chicken manure. Features horizontal auger design with powerful crushing capability, uniform spreading (8-15m width), and large capacity. Available in 8m³ and 10m³ models with load capacities up to 12 tons. Ideal for livestock farms and organic fertilizer application.",
            es: "El esparcidor de estiércol de sinfín horizontal es una máquina profesional para esparcir estiércol fresco, húmedo y duro. Capacidad de 8-10m³ y ancho de esparcimiento de 8-15m. Ideal para granjas ganaderas.",
            fr: "L'épandeur de fumier à vis horizontale est une machine professionnelle pour épandre du fumier frais, humide et dur. Capacité 8-10m³ et largeur d'épandage 8-15m.",
            ar: "ناشر السماد ذو المثقب الأفقي هو آلة احترافية لنشر السماد الطازج والرطب والصلب. سعة 8-10 م³ وعرض نثر 8-15 م.",
            ru: "Разбрасыватель навоза с горизонтальным шнеком - профессиональная машина для внесения свежего, влажного и твердого навоза. Емкость 8-10м³.",
            pt: "O espalhador de esterco com rosca horizontal é uma máquina profissional para espalhar esterco fresco, úmido e duro. Capacidade 8-10m³."
        },
        features: {
            en: [
                "8m³ or 10m³ hopper capacity for flexible operation",
                "Load capacity up to 12 tons for efficient transport",
                "Horizontal auger design for effective crushing and uniform spreading",
                "Spreading width 8-15m for wide coverage",
                "Chain conveyor for fast delivery (5 minutes per load)",
                "Thickened steel body with hydraulic oil tank and cooling system",
                "Heavy-duty tires for stability",
                "Import reducer and precision hydraulic speed control valve",
                "Adjustable discharge opening for different application rates",
                "Suitable for cow, pig, sheep, and chicken manure"
            ],
            es: [
                "Capacidad de tolva de 8-10m³",
                "Capacidad de carga hasta 12 toneladas",
                "Sinfín horizontal para trituración efectiva",
                "Ancho de esparcimiento 8-15m",
                "Transportador de cadena para entrega rápida",
                "Cuerpo de acero reforzado con sistema hidráulico",
                "Neumáticos resistentes",
                "Válvula de control de velocidad hidráulica de precisión",
                "Apertura de descarga ajustable",
                "Adecuado para estiércol de vaca, cerdo, oveja y pollo"
            ],
            fr: [
                "Capacité de trémie 8-10m³",
                "Capacité de charge jusqu'à 12 tonnes",
                "Vis horizontale pour broyage efficace",
                "Largeur d'épandage 8-15m",
                "Convoyeur à chaîne pour livraison rapide",
                "Corps en acier renforcé avec système hydraulique",
                "Pneus résistants",
                "Vanne de régulation hydraulique de précision",
                "Ouverture de décharge réglable",
                "Convient au fumier de vache, porc, mouton et poulet"
            ],
            ar: [
                "سعة قادوس 8-10 م³",
                "سعة تحميل تصل إلى 12 طن",
                "مثقب أفقي للتكسير الفعال",
                "عرض نثر 8-15 م",
                "ناقل سلسلة للتسليم السريع",
                "هيكل صلب سميك مع نظام هيدروليكي",
                "إطارات مقاومة",
                "صمام تحكم هيدروليكي دقيق",
                "فتحة تفريغ قابلة للتعديل",
                "مناسب لسماد البقر والخنزير والأغنام والدجاج"
            ],
            ru: [
                "Бункер 8-10м³",
                "Грузоподъемность до 12 тонн",
                "Горизонтальный шнек для эффективного измельчения",
                "Ширина разбрасывания 8-15м",
                "Цепной конвейер для быстрой подачи",
                "Утолщенный стальной корпус с гидросистемой",
                "Прочные шины",
                "Точный гидравлический клапан регулировки скорости",
                "Регулируемое выходное отверстие",
                "Подходит для навоза КРС, свиней, овец и кур"
            ],
            pt: [
                "Capacidade de tremonha 8-10m³",
                "Capacidade de carga até 12 toneladas",
                "Rosca horizontal para trituração eficaz",
                "Largura de espalhamento 8-15m",
                "Transportador de corrente para entrega rápida",
                "Corpo em aço reforçado com sistema hidráulico",
                "Pneus resistentes",
                "Válvula de controle hidráulico de precisão",
                "Abertura de descarga ajustável",
                "Adequado para esterco de vaca, porco, ovelha e frango"
            ]
        },
        specs: {
            en: {
                "Models": "8m³ / 10m³",
                "Hopper Volume": "8m³ / 10m³",
                "Load Capacity": "10t / 12t",
                "Power Requirement": "≥80kW / ≥100kW",
                "Machine Size (L×W×H)": "6050×2450×2200mm / 6500×2750×2400mm",
                "Spreading Width": "8-15m (both models)",
                "Weight": "2540kg / 2860kg",
                "Wheelbase": "2030mm / 2200mm",
                "Tire Type": "16/70-20 / 500/60-22.5"
            },
            es: {
                "Modelos": "8m³ / 10m³",
                "Volumen de tolva": "8m³ / 10m³",
                "Capacidad de carga": "10t / 12t",
                "Potencia requerida": "≥80kW / ≥100kW",
                "Tamaño": "6050×2450×2200mm / 6500×2750×2400mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "2540kg / 2860kg",
                "Distancia entre ejes": "2030mm / 2200mm",
                "Neumáticos": "16/70-20 / 500/60-22.5"
            },
            fr: {
                "Modèles": "8m³ / 10m³",
                "Volume trémie": "8m³ / 10m³",
                "Capacité de charge": "10t / 12t",
                "Puissance requise": "≥80kW / ≥100kW",
                "Taille": "6050×2450×2200mm / 6500×2750×2400mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "2540kg / 2860kg",
                "Empattement": "2030mm / 2200mm",
                "Pneus": "16/70-20 / 500/60-22.5"
            },
            ar: {
                "الموديلات": "8 م³ / 10 م³",
                "سعة القادوس": "8 م³ / 10 م³",
                "سعة التحميل": "10 طن / 12 طن",
                "القوة المطلوبة": "≥80 كيلوواط / ≥100 كيلوواط",
                "الحجم": "6050×2450×2200 ملم / 6500×2750×2400 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "2540 كجم / 2860 كجم",
                "قاعدة العجلات": "2030 ملم / 2200 ملم",
                "الإطارات": "16/70-20 / 500/60-22.5"
            },
            ru: {
                "Модели": "8м³ / 10м³",
                "Объем бункера": "8м³ / 10м³",
                "Грузоподъемность": "10т / 12т",
                "Мощность": "≥80кВт / ≥100кВт",
                "Размеры": "6050×2450×2200мм / 6500×2750×2400мм",
                "Ширина": "8-15м",
                "Вес": "2540кг / 2860кг",
                "Колесная база": "2030мм / 2200мм",
                "Шины": "16/70-20 / 500/60-22.5"
            },
            pt: {
                "Modelos": "8m³ / 10m³",
                "Volume tremonha": "8m³ / 10m³",
                "Capacidade de carga": "10t / 12t",
                "Potência necessária": "≥80kW / ≥100kW",
                "Tamanho": "6050×2450×2200mm / 6500×2750×2400mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "2540kg / 2860kg",
                "Distância entre eixos": "2030mm / 2200mm",
                "Pneus": "16/70-20 / 500/60-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Livestock farms, manure management, organic fertilizer application, pasture fertilization"
        }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 → 双圆盘撒肥机 (8-10方)
    // ============================================================
    {
        id: "FT-006",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/fertilizer-spreader-double-disc.jpg",
        name: {
            en: "Twin Disc Fertilizer Spreader - 8-10m³ Capacity",
            es: "Esparcidor de Fertilizante de Doble Disco - Capacidad 8-10m³",
            fr: "Épandeur d'Engrais à Double Disque - Capacité 8-10m³",
            ar: "ناشر أسمدة بقرصين مزدوجين - سعة 8-10 م³",
            ru: "Разбрасыватель удобрений с двумя дисками - 8-10м³",
            pt: "Espalhador de Fertilizante com Disco Duplo - Capacidade 8-10m³"
        },
        desc: {
            en: "The Twin Disc Fertilizer Spreader is a professional machine designed for spreading organic fertilizer, distiller's grains, sugar residue granules, and manure. Features twin disc spreading mechanism for uniform distribution (8-15m width), large capacity up to 10m³, and versatile application for various fertilizer types. Available in 8m³ and 10m³ models with load capacities up to 12 tons. Ideal for farms, pastures, and agricultural operations requiring efficient fertilizer application.",
            es: "El esparcidor de fertilizante de doble disco es una máquina profesional para esparcir fertilizante orgánico, granos de destilería y estiércol. Capacidad de 8-10m³ y ancho de esparcimiento de 8-15m.",
            fr: "L'épandeur d'engrais à double disque est une machine professionnelle pour épandre des engrais organiques et du fumier. Capacité 8-10m³ et largeur d'épandage 8-15m.",
            ar: "ناشر الأسمدة ذو القرصين المزدوجين هو آلة احترافية لنشر الأسمدة العضوية. سعة 8-10 م³ وعرض نثر 8-15 م.",
            ru: "Разбрасыватель удобрений с двумя дисками - профессиональная машина для внесения органических удобрений и навоза. Емкость 8-10м³.",
            pt: "O espalhador de fertilizante com disco duplo é uma máquina profissional para espalhar fertilizante orgânico e esterco. Capacidade 8-10m³."
        },
        features: {
            en: [
                "8m³ or 10m³ hopper capacity for flexible operation",
                "Load capacity up to 12 tons for efficient transport",
                "Twin disc spreading mechanism for uniform distribution",
                "Spreading width 8-15m for wide coverage",
                "Chain conveyor for fast delivery (5 minutes per load)",
                "Thickened steel body with hydraulic oil tank and cooling system",
                "Heavy-duty tires for stability",
                "Import reducer and precision hydraulic speed control valve",
                "Adjustable discharge opening for different application rates",
                "Suitable for powder fertilizer, granular fertilizer, and manure"
            ],
            es: [
                "Capacidad de tolva de 8-10m³",
                "Capacidad de carga hasta 12 toneladas",
                "Mecanismo de doble disco para distribución uniforme",
                "Ancho de esparcimiento 8-15m",
                "Transportador de cadena para entrega rápida",
                "Cuerpo de acero reforzado con sistema hidráulico",
                "Neumáticos resistentes",
                "Válvula de control de velocidad hidráulica de precisión",
                "Apertura de descarga ajustable",
                "Adecuado para fertilizante en polvo y granulado"
            ],
            fr: [
                "Capacité de trémie 8-10m³",
                "Capacité de charge jusqu'à 12 tonnes",
                "Mécanisme à double disque pour distribution uniforme",
                "Largeur d'épandage 8-15m",
                "Convoyeur à chaîne pour livraison rapide",
                "Corps en acier renforcé avec système hydraulique",
                "Pneus résistants",
                "Vanne de régulation hydraulique de précision",
                "Ouverture de décharge réglable",
                "Convient aux engrais en poudre et granulés"
            ],
            ar: [
                "سعة قادوس 8-10 م³",
                "سعة تحميل تصل إلى 12 طن",
                "آلية قرصين للتوزيع الموحد",
                "عرض نثر 8-15 م",
                "ناقل سلسلة للتسليم السريع",
                "هيكل صلب سميك مع نظام هيدروليكي",
                "إطارات مقاومة",
                "صمام تحكم هيدروليكي دقيق",
                "فتحة تفريغ قابلة للتعديل",
                "مناسب للأسمدة البودرة والحبيبية"
            ],
            ru: [
                "Бункер 8-10м³",
                "Грузоподъемность до 12 тонн",
                "Двухдисковый механизм для равномерного распределения",
                "Ширина разбрасывания 8-15м",
                "Цепной конвейер для быстрой подачи",
                "Утолщенный стальной корпус с гидросистемой",
                "Прочные шины",
                "Точный гидравлический клапан регулировки скорости",
                "Регулируемое выходное отверстие",
                "Подходит для порошковых и гранулированных удобрений"
            ],
            pt: [
                "Capacidade de tremonha 8-10m³",
                "Capacidade de carga até 12 toneladas",
                "Mecanismo de disco duplo para distribuição uniforme",
                "Largura de espalhamento 8-15m",
                "Transportador de corrente para entrega rápida",
                "Corpo em aço reforçado com sistema hidráulico",
                "Pneus resistentes",
                "Válvula de controle hidráulico de precisão",
                "Abertura de descarga ajustável",
                "Adequado para fertilizante em pó e granulado"
            ]
        },
        specs: {
            en: {
                "Models": "8m³ / 10m³",
                "Hopper Volume": "8m³ / 10m³",
                "Load Capacity": "10t / 12t",
                "Power Requirement": "≥80kW / ≥100kW",
                "Machine Size (L×W×H)": "6150×2450×2200mm / 6500×2750×2400mm",
                "Spreading Width": "8-15m (both models)",
                "Weight": "2540kg / 2860kg",
                "Wheelbase": "2030mm / 2200mm",
                "Tire Type": "16/70-20 / 500/60-22.5"
            },
            es: {
                "Modelos": "8m³ / 10m³",
                "Volumen de tolva": "8m³ / 10m³",
                "Capacidad de carga": "10t / 12t",
                "Potencia requerida": "≥80kW / ≥100kW",
                "Tamaño": "6150×2450×2200mm / 6500×2750×2400mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "2540kg / 2860kg",
                "Distancia entre ejes": "2030mm / 2200mm",
                "Neumáticos": "16/70-20 / 500/60-22.5"
            },
            fr: {
                "Modèles": "8m³ / 10m³",
                "Volume trémie": "8m³ / 10m³",
                "Capacité de charge": "10t / 12t",
                "Puissance requise": "≥80kW / ≥100kW",
                "Taille": "6150×2450×2200mm / 6500×2750×2400mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "2540kg / 2860kg",
                "Empattement": "2030mm / 2200mm",
                "Pneus": "16/70-20 / 500/60-22.5"
            },
            ar: {
                "الموديلات": "8 م³ / 10 م³",
                "سعة القادوس": "8 م³ / 10 م³",
                "سعة التحميل": "10 طن / 12 طن",
                "القوة المطلوبة": "≥80 كيلوواط / ≥100 كيلوواط",
                "الحجم": "6150×2450×2200 ملم / 6500×2750×2400 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "2540 كجم / 2860 كجم",
                "قاعدة العجلات": "2030 ملم / 2200 ملم",
                "الإطارات": "16/70-20 / 500/60-22.5"
            },
            ru: {
                "Модели": "8м³ / 10м³",
                "Объем бункера": "8м³ / 10м³",
                "Грузоподъемность": "10т / 12т",
                "Мощность": "≥80кВт / ≥100кВт",
                "Размеры": "6150×2450×2200мм / 6500×2750×2400мм",
                "Ширина": "8-15м",
                "Вес": "2540кг / 2860кг",
                "Колесная база": "2030мм / 2200мм",
                "Шины": "16/70-20 / 500/60-22.5"
            },
            pt: {
                "Modelos": "8m³ / 10m³",
                "Volume tremonha": "8m³ / 10m³",
                "Capacidade de carga": "10t / 12t",
                "Potência necessária": "≥80kW / ≥100kW",
                "Tamanho": "6150×2450×2200mm / 6500×2750×2400mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "2540kg / 2860kg",
                "Distância entre eixos": "2030mm / 2200mm",
                "Pneus": "16/70-20 / 500/60-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Organic fertilizer application, pasture fertilization, agricultural waste recycling, granular fertilizer spreading"
        }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 → 液态肥撒肥机 (6-10方)
    // ============================================================
    {
        id: "FT-007",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/liquid-manure-spreader.jpg",
        name: {
            en: "Liquid Manure Spreader - 6-10m³ Capacity",
            es: "Esparcidor de Estiércol Líquido - Capacidad 6-10m³",
            fr: "Épandeur de Fumier Liquide - Capacité 6-10m³",
            ar: "ناشر سماد سائل - سعة 6-10 م³",
            ru: "Разбрасыватель жидкого навоза - 6-10м³",
            pt: "Espalhador de Esterco Líquido - Capacidade 6-10m³"
        },
        desc: {
            en: "The Liquid Manure Spreader is a professional machine for applying liquid organic fertilizer, livestock urine, liquid manure, biogas slurry, and other liquid media. Powered by tractor PTO, it features a vacuum pump for suction and spraying, uniform application (10-15m range), and high-strength steel tank with anti-corrosion coating. Available in 6m³ and 10m³ models. Ideal for livestock farms, biogas plants, and liquid organic fertilizer application.",
            es: "El esparcidor de estiércol líquido es una máquina profesional para aplicar fertilizante orgánico líquido, orina de ganado y purines. Capacidad de 6-10m³ y alcance de 10-15m. Ideal para granjas ganaderas y plantas de biogás.",
            fr: "L'épandeur de fumier liquide est une machine professionnelle pour appliquer des engrais organiques liquides. Capacité 6-10m³ et portée 10-15m.",
            ar: "ناشر السماد السائل هو آلة احترافية لتطبيق الأسمدة العضوية السائلة. سعة 6-10 م³ ومدى 10-15 م.",
            ru: "Разбрасыватель жидкого навоза - профессиональная машина для внесения жидких органических удобрений. Емкость 6-10м³.",
            pt: "O espalhador de esterco líquido é uma máquina profissional para aplicar fertilizante orgânico líquido. Capacidade 6-10m³."
        },
        features: {
            en: [
                "6m³ or 10m³ tank capacity for flexible operation",
                "Vacuum pump for suction and spraying (≥1m³/min)",
                "Spraying range 10-15m for wide coverage",
                "High-strength steel tank with anti-corrosion coating",
                "Anti-surge baffles inside tank for stability",
                "Liquid level indicator for real-time monitoring",
                "Heavy-duty tires for stability",
                "High-quality pump, control valve, and axle",
                "Pressure gauge and anti-overflow valve for safety",
                "Suitable for liquid manure, biogas slurry, and livestock urine"
            ],
            es: [
                "Capacidad de tanque de 6-10m³",
                "Bomba de vacío para succión y pulverización",
                "Alcance de pulverización 10-15m",
                "Tanque de acero de alta resistencia con revestimiento anticorrosión",
                "Deflectores antivuelco en el interior",
                "Indicador de nivel de líquido",
                "Neumáticos resistentes",
                "Bomba y válvula de control de alta calidad",
                "Manómetro y válvula antivuelco",
                "Adecuado para purines y lodos de biogás"
            ],
            fr: [
                "Capacité de réservoir 6-10m³",
                "Pompe à vide pour aspiration et pulvérisation",
                "Portée de pulvérisation 10-15m",
                "Réservoir en acier haute résistance avec revêtement anticorrosion",
                "Déflecteurs anti-soulèvement",
                "Indicateur de niveau de liquide",
                "Pneus résistants",
                "Pompe et vanne de contrôle de haute qualité",
                "Manomètre et vanne anti-débordement",
                "Convient aux purins et boues de biogaz"
            ],
            ar: [
                "سعة خزان 6-10 م³",
                "مضخة تفريغ للشفط والرش",
                "مدى رش 10-15 م",
                "خزان فولاذي عالي المقاومة مع طلاء مضاد للتآكل",
                "حواجز مضادة للتموج في الداخل",
                "مؤشر مستوى السائل",
                "إطارات مقاومة",
                "مضخة وصمام تحكم عالي الجودة",
                "مقياس ضغط وصمام مانع للفيضان",
                "مناسب للسماد السائل والحمأة الحيوية"
            ],
            ru: [
                "Бак 6-10м³",
                "Вакуумный насос для всасывания и распыления",
                "Дальность распыления 10-15м",
                "Высокопрочный стальной бак с антикоррозионным покрытием",
                "Антиволновые перегородки внутри",
                "Индикатор уровня жидкости",
                "Прочные шины",
                "Высококачественный насос и клапан",
                "Манометр и антипереливной клапан",
                "Подходит для жидкого навоза и биогазовой жижи"
            ],
            pt: [
                "Capacidade do tanque 6-10m³",
                "Bomba de vácuo para sucção e pulverização",
                "Alcance de pulverização 10-15m",
                "Tanque de aço de alta resistência com revestimento anticorrosão",
                "Defletores anti-onda no interior",
                "Indicador de nível de líquido",
                "Pneus resistentes",
                "Bomba e válvula de controle de alta qualidade",
                "Manômetro e válvula anti-transbordamento",
                "Adequado para chorume e lama de biogás"
            ]
        },
        specs: {
            en: {
                "Models": "6m³ / 10m³",
                "Tank Capacity": "6m³ / 10m³",
                "Power Requirement": "≥70kW / ≥100kW",
                "Machine Size (L×W×H)": "6100×2000×2700mm / 7340×2540×2700mm",
                "Spraying Speed": "≥1m³/min (both models)",
                "Spraying Range": "10-15m (both models)",
                "Weight": "2100kg / 3210kg",
                "Wheelbase": "1600mm / 1940mm",
                "Tire Type": "400/55-22.5 / 500/60-22.5"
            },
            es: {
                "Modelos": "6m³ / 10m³",
                "Capacidad del tanque": "6m³ / 10m³",
                "Potencia requerida": "≥70kW / ≥100kW",
                "Tamaño": "6100×2000×2700mm / 7340×2540×2700mm",
                "Velocidad de pulverización": "≥1m³/min",
                "Alcance de pulverización": "10-15m",
                "Peso": "2100kg / 3210kg",
                "Distancia entre ejes": "1600mm / 1940mm",
                "Neumáticos": "400/55-22.5 / 500/60-22.5"
            },
            fr: {
                "Modèles": "6m³ / 10m³",
                "Capacité du réservoir": "6m³ / 10m³",
                "Puissance requise": "≥70kW / ≥100kW",
                "Taille": "6100×2000×2700mm / 7340×2540×2700mm",
                "Vitesse de pulvérisation": "≥1m³/min",
                "Portée de pulvérisation": "10-15m",
                "Poids": "2100kg / 3210kg",
                "Empattement": "1600mm / 1940mm",
                "Pneus": "400/55-22.5 / 500/60-22.5"
            },
            ar: {
                "الموديلات": "6 م³ / 10 م³",
                "سعة الخزان": "6 م³ / 10 م³",
                "القوة المطلوبة": "≥70 كيلوواط / ≥100 كيلوواط",
                "الحجم": "6100×2000×2700 ملم / 7340×2540×2700 ملم",
                "سرعة الرش": "≥1 م³/دقيقة",
                "مدى الرش": "10-15 م",
                "الوزن": "2100 كجم / 3210 كجم",
                "قاعدة العجلات": "1600 ملم / 1940 ملم",
                "الإطارات": "400/55-22.5 / 500/60-22.5"
            },
            ru: {
                "Модели": "6м³ / 10м³",
                "Емкость бака": "6м³ / 10м³",
                "Мощность": "≥70кВт / ≥100кВт",
                "Размеры": "6100×2000×2700мм / 7340×2540×2700мм",
                "Скорость": "≥1м³/мин",
                "Дальность": "10-15м",
                "Вес": "2100кг / 3210кг",
                "Колесная база": "1600мм / 1940мм",
                "Шины": "400/55-22.5 / 500/60-22.5"
            },
            pt: {
                "Modelos": "6m³ / 10m³",
                "Capacidade do tanque": "6m³ / 10m³",
                "Potência necessária": "≥70kW / ≥100kW",
                "Tamanho": "6100×2000×2700mm / 7340×2540×2700mm",
                "Velocidade de pulverização": "≥1m³/min",
                "Alcance de pulverização": "10-15m",
                "Peso": "2100kg / 3210kg",
                "Distância entre eixos": "1600mm / 1940mm",
                "Pneus": "400/55-22.5 / 500/60-22.5"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Livestock farms, biogas plants, liquid organic fertilizer application, manure management"
        }
    },

    // ============================================================
    //  🧪 农机具 → 施肥机械 → 开沟施肥回填一体撒肥机
    // ============================================================
    {
        id: "FT-008",
        category: "farm-machinery",
        subCategory: "fertilizing",
        image: "/image/trench-fertilizer-backfill.jpg",
        name: {
            en: "Trenching Fertilizer & Backfill Spreader - All-in-One Orchard Fertilizer Solution",
            es: "Esparcidor de Fertilizante con Zanjeo y Relleno - Solución Integral para Huertos",
            fr: "Épandeur d'Engrais avec Tranchage et Remblayage - Solution Tout-en-Un pour Vergers",
            ar: "ناشر أسمدة مع حفر وخندق وردم - حل متكامل للبساتين",
            ru: "Разбрасыватель удобрений с траншеей и обратной засыпкой - Комплексное решение для садов",
            pt: "Espalhador de Fertilizante com Vala e Reaterro - Solução Completa para Pomares"
        },
        desc: {
            en: "The Trenching Fertilizer & Backfill Spreader is a professional all-in-one machine for orchard fertilization. It performs trenching (25-35cm depth), fertilizer application, and backfill in a single pass. Powered by tractor PTO (≥60kW), it features a 2m³ hopper with 2-ton capacity, manganese steel trenching blades for durability, and adjustable discharge opening. Ideal for orchards, vineyards, and fruit farms requiring efficient fertilization.",
            es: "El esparcidor con zanjeo y relleno es una máquina profesional todo en uno para la fertilización de huertos. Realiza zanjeo (25-35cm), aplicación de fertilizante y relleno en una sola pasada. Ideal para huertos y viñedos.",
            fr: "L'épandeur avec tranchage et remblayage est une machine professionnelle tout-en-un pour la fertilisation des vergers. Réalise le tranchage (25-35cm) et le remblayage en un seul passage.",
            ar: "ناشر الأسمدة مع الحفر والردم هو آلة احترافية متكاملة لتسميد البساتين. يقوم بالحفر (25-35 سم) والردم في تمريرة واحدة.",
            ru: "Разбрасыватель с траншеей и обратной засыпкой - профессиональная машина для удобрения садов. Выполняет траншею (25-35 см) и обратную засыпку за один проход.",
            pt: "O espalhador com vala e reaterro é uma máquina profissional completa para fertilização de pomares. Realiza vala (25-35cm) e reaterro em uma única passagem."
        },
        features: {
            en: [
                "2m³ hopper capacity for efficient fertilization",
                "2-ton load capacity for extended operation",
                "Trenching depth 25-35cm (hydraulically adjustable)",
                "Chain conveyor for fast and consistent delivery",
                "Manganese steel trenching blades for wear resistance",
                "Twin disc spreading mechanism for uniform distribution",
                "Side spreading function for orchard row application",
                "Adjustable discharge opening for different application rates",
                "Thickened steel body with hydraulic oil tank and electric radiator",
                "High-quality oil pump, motor, reducer, and hydraulic valve"
            ],
            es: [
                "Capacidad de tolva de 2m³",
                "Capacidad de carga de 2 toneladas",
                "Profundidad de zanjeo 25-35cm (ajustable hidráulicamente)",
                "Transportador de cadena para entrega rápida",
                "Cuchillas de zanjeo de acero al manganeso",
                "Mecanismo de doble disco para distribución uniforme",
                "Función de esparcimiento lateral",
                "Apertura de descarga ajustable",
                "Cuerpo de acero reforzado con radiador eléctrico",
                "Bomba y motor de alta calidad"
            ],
            fr: [
                "Capacité de trémie 2m³",
                "Capacité de charge 2 tonnes",
                "Profondeur de tranchage 25-35cm (réglable hydrauliquement)",
                "Convoyeur à chaîne pour livraison rapide",
                "Lames de tranchage en acier au manganèse",
                "Mécanisme à double disque pour distribution uniforme",
                "Fonction d'épandage latéral",
                "Ouverture de décharge réglable",
                "Corps en acier renforcé avec radiateur électrique",
                "Pompe et moteur de haute qualité"
            ],
            ar: [
                "سعة قادوس 2 م³",
                "سعة تحميل 2 طن",
                "عمق الحفر 25-35 سم (قابل للتعديل هيدروليكياً)",
                "ناقل سلسلة للتسليم السريع",
                "شفرات حفر من الصلب المنغنيزي",
                "آلية قرصين للتوزيع الموحد",
                "وظيفة نثر جانبية",
                "فتحة تفريغ قابلة للتعديل",
                "هيكل صلب سميك مع رادياتير كهربائي",
                "مضخة ومحرك عالي الجودة"
            ],
            ru: [
                "Бункер 2м³",
                "Грузоподъемность 2 тонны",
                "Глубина траншеи 25-35 см (гидравлическая регулировка)",
                "Цепной конвейер для быстрой подачи",
                "Ножи из марганцевой стали",
                "Двухдисковый механизм для равномерного распределения",
                "Боковое разбрасывание",
                "Регулируемое выходное отверстие",
                "Утолщенный стальной корпус с электрорадиатором",
                "Высококачественный насос и двигатель"
            ],
            pt: [
                "Capacidade de tremonha 2m³",
                "Capacidade de carga 2 toneladas",
                "Profundidade de vala 25-35cm (ajustável hidraulicamente)",
                "Transportador de corrente para entrega rápida",
                "Lâminas de vala em aço manganês",
                "Mecanismo de disco duplo para distribuição uniforme",
                "Função de espalhamento lateral",
                "Abertura de descarga ajustável",
                "Corpo em aço reforçado com radiador elétrico",
                "Bomba e motor de alta qualidade"
            ]
        },
        specs: {
            en: {
                "Hopper Volume": "2m³",
                "Load Capacity": "2 tons",
                "Power Requirement": "≥60kW",
                "Machine Size (L×W×H)": "4510×1800×1700mm",
                "Trenching Depth": "25-35cm (adjustable)",
                "Weight": "1300kg",
                "Wheelbase": "1400mm",
                "Tire Type": "10.0/75-15.3"
            },
            es: {
                "Volumen de tolva": "2m³",
                "Capacidad de carga": "2 toneladas",
                "Potencia requerida": "≥60kW",
                "Tamaño": "4510×1800×1700mm",
                "Profundidad de zanjeo": "25-35cm (ajustable)",
                "Peso": "1300kg",
                "Distancia entre ejes": "1400mm",
                "Neumáticos": "10.0/75-15.3"
            },
            fr: {
                "Volume trémie": "2m³",
                "Capacité de charge": "2 tonnes",
                "Puissance requise": "≥60kW",
                "Taille": "4510×1800×1700mm",
                "Profondeur de tranchage": "25-35cm (réglable)",
                "Poids": "1300kg",
                "Empattement": "1400mm",
                "Pneus": "10.0/75-15.3"
            },
            ar: {
                "سعة القادوس": "2 م³",
                "سعة التحميل": "2 طن",
                "القوة المطلوبة": "≥60 كيلوواط",
                "الحجم": "4510×1800×1700 ملم",
                "عمق الحفر": "25-35 سم (قابل للتعديل)",
                "الوزن": "1300 كجم",
                "قاعدة العجلات": "1400 ملم",
                "الإطارات": "10.0/75-15.3"
            },
            ru: {
                "Объем бункера": "2м³",
                "Грузоподъемность": "2 т",
                "Мощность": "≥60 кВт",
                "Размеры": "4510×1800×1700мм",
                "Глубина": "25-35 см",
                "Вес": "1300кг",
                "Колесная база": "1400мм",
                "Шины": "10.0/75-15.3"
            },
            pt: {
                "Volume tremonha": "2m³",
                "Capacidade de carga": "2 toneladas",
                "Potência necessária": "≥60kW",
                "Tamanho": "4510×1800×1700mm",
                "Profundidade de vala": "25-35cm (ajustável)",
                "Peso": "1300kg",
                "Distância entre eixos": "1400mm",
                "Pneus": "10.0/75-15.3"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Orchards, vineyards, fruit farms, row crop fertilization, tree farming"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 自走式三轮撒肥车
    // ============================================================
    {
        id: "OT-007",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/self-propelled-3wheel-spreader.jpg",
        name: {
            en: "Self-Propelled 3-Wheel Manure Spreader - 1.5-2.5m³ Capacity",
            es: "Esparcidor de Estiércol Autopropulsado de 3 Ruedas - Capacidad 1.5-2.5m³",
            fr: "Épandeur de Fumier Automoteur à 3 Roues - Capacité 1.5-2.5m³",
            ar: "ناشر سماد ذاتي الحركة 3 عجلات - سعة 1.5-2.5 م³",
            ru: "Самоходный 3-колесный разбрасыватель навоза - 1.5-2.5м³",
            pt: "Espalhador de Esterco Autopropulsado de 3 Rodas - Capacidade 1.5-2.5m³"
        },
        desc: {
            en: "The Self-Propelled 3-Wheel Manure Spreader is a versatile machine for fertilizer application in various terrains. Features Wuzheng chassis with 32kW engine, 1.5-2.5m³ hopper capacity, and hydraulic control. Available with twin disc or horizontal auger spreading mechanism. LED lights for night operation. Ideal for greenhouses, farmland, orchards, and pastures.",
            es: "El esparcidor de estiércol autopropulsado de 3 ruedas es una máquina versátil para la aplicación de fertilizantes. Capacidad de 1.5-2.5m³ y control hidráulico. Ideal para invernaderos, campos y huertos.",
            fr: "L'épandeur de fumier automoteur à 3 roues est une machine polyvalente. Capacité 1.5-2.5m³ et contrôle hydraulique. Idéal pour les serres et les vergers.",
            ar: "ناشر السماد ذاتي الحركة 3 عجلات هو آلة متعددة الاستخدامات. سعة 1.5-2.5 م³ وتحكم هيدروليكي.",
            ru: "Самоходный 3-колесный разбрасыватель навоза - универсальная машина. Емкость 1.5-2.5м³ и гидравлическое управление.",
            pt: "O espalhador de esterco autopropulsado de 3 rodas é uma máquina versátil. Capacidade 1.5-2.5m³ e controle hidráulico."
        },
        features: {
            en: [
                "Wuzheng chassis with 32kW engine for reliable power",
                "1.5m³ or 2.5m³ hopper capacity (customizable)",
                "Load capacity up to 3 tons for efficient operation",
                "Twin disc or horizontal auger spreading mechanism",
                "Hydraulic control for speed and application rate adjustment",
                "Spreading width 8-15m for wide coverage",
                "Thickened steel body for durability",
                "Heavy-duty tires for stability",
                "LED lights for night operation",
                "Suitable for greenhouses, farmland, orchards, and pastures"
            ],
            es: [
                "Chasis Wuzheng con motor de 32kW",
                "Capacidad de tolva de 1.5-2.5m³ (personalizable)",
                "Capacidad de carga hasta 3 toneladas",
                "Mecanismo de doble disco o sinfín horizontal",
                "Control hidráulico",
                "Ancho de esparcimiento 8-15m",
                "Cuerpo de acero reforzado",
                "Neumáticos resistentes",
                "Luces LED para operación nocturna",
                "Adecuado para invernaderos, campos y huertos"
            ],
            fr: [
                "Châssis Wuzheng avec moteur 32kW",
                "Capacité de trémie 1.5-2.5m³ (personnalisable)",
                "Capacité de charge jusqu'à 3 tonnes",
                "Mécanisme à double disque ou vis horizontale",
                "Contrôle hydraulique",
                "Largeur d'épandage 8-15m",
                "Corps en acier renforcé",
                "Pneus résistants",
                "Lumières LED pour fonctionnement nocturne",
                "Convient aux serres, champs et vergers"
            ],
            ar: [
                "هيكل Wuzheng مع محرك 32 كيلوواط",
                "سعة قادوس 1.5-2.5 م³ (قابل للتخصيص)",
                "سعة تحميل تصل إلى 3 طن",
                "آلية قرصين أو مثقب أفقي",
                "تحكم هيدروليكي",
                "عرض نثر 8-15 م",
                "هيكل صلب سميك",
                "إطارات مقاومة",
                "أضواء LED للعمل الليلي",
                "مناسب للدفيئات والحقول والبساتين"
            ],
            ru: [
                "Шасси Wuzheng с двигателем 32 кВт",
                "Бункер 1.5-2.5м³ (на заказ)",
                "Грузоподъемность до 3 тонн",
                "Двухдисковый или горизонтальный шнек",
                "Гидравлическое управление",
                "Ширина 8-15м",
                "Утолщенный стальной корпус",
                "Прочные шины",
                "Светодиодные фары",
                "Подходит для теплиц, полей и садов"
            ],
            pt: [
                "Chassi Wuzheng com motor 32kW",
                "Capacidade de tremonha 1.5-2.5m³ (personalizável)",
                "Capacidade de carga até 3 toneladas",
                "Mecanismo de disco duplo ou rosca horizontal",
                "Controle hidráulico",
                "Largura de espalhamento 8-15m",
                "Corpo em aço reforçado",
                "Pneus resistentes",
                "Luzes LED para operação noturna",
                "Adequado para estufas, campos e pomares"
            ]
        },
        specs: {
            en: {
                "Models": "1.5m³ / 2.5m³",
                "Hopper Volume": "1.5m³ / 2.5m³ (customizable)",
                "Load Capacity": "2t / 3t",
                "Engine Power": "32kW (Changchai)",
                "Machine Size (L×W×H)": "4550×1400×1500mm / 4650×1400×1700mm",
                "Spreading Width": "8-15m (both models)",
                "Weight": "1480kg / 1540kg",
                "Tire Type": "Front 6.00-14 / Rear 7.00-16"
            },
            es: {
                "Modelos": "1.5m³ / 2.5m³",
                "Volumen de tolva": "1.5m³ / 2.5m³ (personalizable)",
                "Capacidad de carga": "2t / 3t",
                "Potencia del motor": "32kW (Changchai)",
                "Tamaño": "4550×1400×1500mm / 4650×1400×1700mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "1480kg / 1540kg",
                "Neumáticos": "Del. 6.00-14 / Tras. 7.00-16"
            },
            fr: {
                "Modèles": "1.5m³ / 2.5m³",
                "Volume trémie": "1.5m³ / 2.5m³ (personnalisable)",
                "Capacité de charge": "2t / 3t",
                "Puissance moteur": "32kW (Changchai)",
                "Taille": "4550×1400×1500mm / 4650×1400×1700mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "1480kg / 1540kg",
                "Pneus": "Av. 6.00-14 / Arr. 7.00-16"
            },
            ar: {
                "الموديلات": "1.5 م³ / 2.5 م³",
                "سعة القادوس": "1.5 م³ / 2.5 م³ (قابل للتخصيص)",
                "سعة التحميل": "2 طن / 3 طن",
                "قوة المحرك": "32 كيلوواط (Changchai)",
                "الحجم": "4550×1400×1500 ملم / 4650×1400×1700 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "1480 كجم / 1540 كجم",
                "الإطارات": "أمامي 6.00-14 / خلفي 7.00-16"
            },
            ru: {
                "Модели": "1.5м³ / 2.5м³",
                "Объем бункера": "1.5м³ / 2.5м³",
                "Грузоподъемность": "2т / 3т",
                "Двигатель": "32 кВт (Changchai)",
                "Размеры": "4550×1400×1500мм / 4650×1400×1700мм",
                "Ширина": "8-15м",
                "Вес": "1480кг / 1540кг",
                "Шины": "Перед 6.00-14 / Зад 7.00-16"
            },
            pt: {
                "Modelos": "1.5m³ / 2.5m³",
                "Volume tremonha": "1.5m³ / 2.5m³ (personalizável)",
                "Capacidade de carga": "2t / 3t",
                "Potência do motor": "32kW (Changchai)",
                "Tamanho": "4550×1400×1500mm / 4650×1400×1700mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "1480kg / 1540kg",
                "Pneus": "Dianteiro 6.00-14 / Traseiro 7.00-16"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Greenhouses, farmland, orchards, pastures, small to medium farms"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 自走式五轮撒肥车
    // ============================================================
    {
        id: "OT-008",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/self-propelled-5wheel-spreader.jpg",
        name: {
            en: "Self-Propelled 5-Wheel Manure Spreader - 1.5-3m³ Capacity",
            es: "Esparcidor de Estiércol Autopropulsado de 5 Ruedas - Capacidad 1.5-3m³",
            fr: "Épandeur de Fumier Automoteur à 5 Roues - Capacité 1.5-3m³",
            ar: "ناشر سماد ذاتي الحركة 5 عجلات - سعة 1.5-3 م³",
            ru: "Самоходный 5-колесный разбрасыватель навоза - 1.5-3м³",
            pt: "Espalhador de Esterco Autopropulsado de 5 Rodas - Capacidade 1.5-3m³"
        },
        desc: {
            en: "The Self-Propelled 5-Wheel Manure Spreader is a powerful and stable machine for fertilizer application. Features 5-wheel chassis with 32kW engine, 1.5-3m³ hopper capacity, and hydraulic control. Available with twin disc or horizontal auger spreading mechanism. LED lights for night operation. Ideal for greenhouses, farmland, orchards, and pastures requiring stable and efficient fertilizer application.",
            es: "El esparcidor de estiércol autopropulsado de 5 ruedas es una máquina potente y estable. Capacidad de 1.5-3m³ y control hidráulico. Ideal para invernaderos, campos y huertos.",
            fr: "L'épandeur de fumier automoteur à 5 roues est une machine puissante et stable. Capacité 1.5-3m³ et contrôle hydraulique.",
            ar: "ناشر السماد ذاتي الحركة 5 عجلات هو آلة قوية ومستقرة. سعة 1.5-3 م³ وتحكم هيدروليكي.",
            ru: "Самоходный 5-колесный разбрасыватель навоза - мощная и стабильная машина. Емкость 1.5-3м³.",
            pt: "O espalhador de esterco autopropulsado de 5 rodas é uma máquina potente e estável. Capacidade 1.5-3m³."
        },
        features: {
            en: [
                "5-wheel chassis with 32kW engine for superior stability",
                "1.5m³ or 3m³ hopper capacity (customizable)",
                "Load capacity up to 4 tons for efficient operation",
                "Twin disc or horizontal auger spreading mechanism",
                "Hydraulic control for speed and application rate adjustment",
                "Spreading width 8-15m for wide coverage",
                "Thickened steel body for durability",
                "Heavy-duty tires for stability",
                "LED lights for night operation",
                "Suitable for greenhouses, farmland, orchards, and pastures"
            ],
            es: [
                "Chasis de 5 ruedas con motor de 32kW",
                "Capacidad de tolva de 1.5-3m³ (personalizable)",
                "Capacidad de carga hasta 4 toneladas",
                "Mecanismo de doble disco o sinfín horizontal",
                "Control hidráulico",
                "Ancho de esparcimiento 8-15m",
                "Cuerpo de acero reforzado",
                "Neumáticos resistentes",
                "Luces LED",
                "Adecuado para invernaderos, campos y huertos"
            ],
            fr: [
                "Châssis 5 roues avec moteur 32kW",
                "Capacité de trémie 1.5-3m³ (personnalisable)",
                "Capacité de charge jusqu'à 4 tonnes",
                "Mécanisme à double disque ou vis horizontale",
                "Contrôle hydraulique",
                "Largeur d'épandage 8-15m",
                "Corps en acier renforcé",
                "Pneus résistants",
                "Lumières LED",
                "Convient aux serres, champs et vergers"
            ],
            ar: [
                "هيكل 5 عجلات مع محرك 32 كيلوواط",
                "سعة قادوس 1.5-3 م³ (قابل للتخصيص)",
                "سعة تحميل تصل إلى 4 طن",
                "آلية قرصين أو مثقب أفقي",
                "تحكم هيدروليكي",
                "عرض نثر 8-15 م",
                "هيكل صلب سميك",
                "إطارات مقاومة",
                "أضواء LED",
                "مناسب للدفيئات والحقول والبساتين"
            ],
            ru: [
                "5-колесное шасси с двигателем 32 кВт",
                "Бункер 1.5-3м³ (на заказ)",
                "Грузоподъемность до 4 тонн",
                "Двухдисковый или горизонтальный шнек",
                "Гидравлическое управление",
                "Ширина 8-15м",
                "Утолщенный стальной корпус",
                "Прочные шины",
                "Светодиодные фары",
                "Подходит для теплиц, полей и садов"
            ],
            pt: [
                "Chassi de 5 rodas com motor 32kW",
                "Capacidade de tremonha 1.5-3m³ (personalizável)",
                "Capacidade de carga até 4 toneladas",
                "Mecanismo de disco duplo ou rosca horizontal",
                "Controle hidráulico",
                "Largura de espalhamento 8-15m",
                "Corpo em aço reforçado",
                "Pneus resistentes",
                "Luzes LED",
                "Adequado para estufas, campos e pomares"
            ]
        },
        specs: {
            en: {
                "Models": "1.5m³ / 3m³",
                "Hopper Volume": "1.5m³ / 3m³ (customizable)",
                "Load Capacity": "2t / 4t",
                "Engine Power": "32kW (Changchai)",
                "Machine Size (L×W×H)": "4600×1850×1500mm / 4700×1850×1830mm",
                "Spreading Width": "8-15m (both models)",
                "Weight": "1490kg / 1640kg",
                "Tire Type": "Front 6.00-14 / Rear 7.00-16"
            },
            es: {
                "Modelos": "1.5m³ / 3m³",
                "Volumen de tolva": "1.5m³ / 3m³ (personalizable)",
                "Capacidad de carga": "2t / 4t",
                "Potencia del motor": "32kW (Changchai)",
                "Tamaño": "4600×1850×1500mm / 4700×1850×1830mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "1490kg / 1640kg",
                "Neumáticos": "Del. 6.00-14 / Tras. 7.00-16"
            },
            fr: {
                "Modèles": "1.5m³ / 3m³",
                "Volume trémie": "1.5m³ / 3m³ (personnalisable)",
                "Capacité de charge": "2t / 4t",
                "Puissance moteur": "32kW (Changchai)",
                "Taille": "4600×1850×1500mm / 4700×1850×1830mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "1490kg / 1640kg",
                "Pneus": "Av. 6.00-14 / Arr. 7.00-16"
            },
            ar: {
                "الموديلات": "1.5 م³ / 3 م³",
                "سعة القادوس": "1.5 م³ / 3 م³ (قابل للتخصيص)",
                "سعة التحميل": "2 طن / 4 طن",
                "قوة المحرك": "32 كيلوواط (Changchai)",
                "الحجم": "4600×1850×1500 ملم / 4700×1850×1830 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "1490 كجم / 1640 كجم",
                "الإطارات": "أمامي 6.00-14 / خلفي 7.00-16"
            },
            ru: {
                "Модели": "1.5м³ / 3м³",
                "Объем бункера": "1.5м³ / 3м³",
                "Грузоподъемность": "2т / 4т",
                "Двигатель": "32 кВт (Changchai)",
                "Размеры": "4600×1850×1500мм / 4700×1850×1830мм",
                "Ширина": "8-15м",
                "Вес": "1490кг / 1640кг",
                "Шины": "Перед 6.00-14 / Зад 7.00-16"
            },
            pt: {
                "Modelos": "1.5m³ / 3m³",
                "Volume tremonha": "1.5m³ / 3m³ (personalizável)",
                "Capacidade de carga": "2t / 4t",
                "Potência do motor": "32kW (Changchai)",
                "Tamanho": "4600×1850×1500mm / 4700×1850×1830mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "1490kg / 1640kg",
                "Pneus": "Dianteiro 6.00-14 / Traseiro 7.00-16"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Greenhouses, farmland, orchards, pastures, medium farms"
        }
    },

    // ============================================================
    //  🔩 农机具 → 其他农机具 → 履带式撒肥车
    // ============================================================
    {
        id: "OT-009",
        category: "farm-machinery",
        subCategory: "other-farm",
        image: "/image/tracked-spreader.jpg",
        name: {
            en: "Tracked Manure Spreader - 3-5m³ Capacity (All-Terrain)",
            es: "Esparcidor de Estiércol con Orugas - Capacidad 3-5m³ (Todo Terreno)",
            fr: "Épandeur de Fumier à Chenilles - Capacité 3-5m³ (Tout Terrain)",
            ar: "ناشر سماد مجنزر - سعة 3-5 م³ (جميع التضاريس)",
            ru: "Гусеничный разбрасыватель навоза - 3-5м³ (вездеход)",
            pt: "Espalhador de Esterco com Esteiras - Capacidade 3-5m³ (Todo Terreno)"
        },
        desc: {
            en: "The Tracked Manure Spreader is a powerful all-terrain machine for fertilizer application in challenging conditions. Features tracked chassis with 490 engine, 3-5m³ hopper capacity, and hydraulic control. Available with twin disc or horizontal auger spreading mechanism with reinforced crushing blades for excellent breaking capability. Ideal for greenhouses, farmland, paddy fields, orchards, and wet or soft terrain.",
            es: "El esparcidor de estiércol con orugas es una máquina todoterreno potente. Capacidad de 3-5m³ y control hidráulico. Ideal para invernaderos, campos, arrozales y terrenos húmedos.",
            fr: "L'épandeur de fumier à chenilles est une machine tout-terrain puissante. Capacité 3-5m³ et contrôle hydraulique. Idéal pour les serres, champs et rizières.",
            ar: "ناشر السماد المجنزر هو آلة قوية لجميع التضاريس. سعة 3-5 م³ وتحكم هيدروليكي. مثالي للدفيئات والحقول والأراضي الرطبة.",
            ru: "Гусеничный разбрасыватель навоза - мощная вездеходная машина. Емкость 3-5м³ и гидравлическое управление. Идеален для теплиц, полей и влажных почв.",
            pt: "O espalhador de esterco com esteiras é uma máquina todo-terreno potente. Capacidade 3-5m³ e controle hidráulico. Ideal para estufas, campos e terrenos úmidos."
        },
        features: {
            en: [
                "Tracked chassis with 490 engine for excellent traction",
                "3m³ or 5m³ hopper capacity (customizable)",
                "Load capacity up to 6 tons for efficient operation",
                "Twin disc or horizontal auger spreading mechanism",
                "Reinforced crushing blades for excellent breaking capability",
                "Hydraulic control for speed and application rate adjustment",
                "Spreading width 8-15m for wide coverage",
                "Thickened steel body for durability",
                "Import reducer and precision hydraulic speed control valve",
                "Suitable for greenhouses, farmland, paddy fields, orchards, and wet terrain"
            ],
            es: [
                "Chasis con orugas y motor 490",
                "Capacidad de tolva de 3-5m³ (personalizable)",
                "Capacidad de carga hasta 6 toneladas",
                "Mecanismo de doble disco o sinfín horizontal",
                "Cuchillas de trituración reforzadas",
                "Control hidráulico",
                "Ancho de esparcimiento 8-15m",
                "Cuerpo de acero reforzado",
                "Válvula de control de velocidad hidráulica de precisión",
                "Adecuado para invernaderos, campos, arrozales y terrenos húmedos"
            ],
            fr: [
                "Châssis à chenilles avec moteur 490",
                "Capacité de trémie 3-5m³ (personnalisable)",
                "Capacité de charge jusqu'à 6 tonnes",
                "Mécanisme à double disque ou vis horizontale",
                "Lames de broyage renforcées",
                "Contrôle hydraulique",
                "Largeur d'épandage 8-15m",
                "Corps en acier renforcé",
                "Vanne de régulation hydraulique de précision",
                "Convient aux serres, champs, rizières et terrains humides"
            ],
            ar: [
                "هيكل مجنزر مع محرك 490",
                "سعة قادوس 3-5 م³ (قابل للتخصيص)",
                "سعة تحميل تصل إلى 6 طن",
                "آلية قرصين أو مثقب أفقي",
                "شفرات تكسير معززة",
                "تحكم هيدروليكي",
                "عرض نثر 8-15 م",
                "هيكل صلب سميك",
                "صمام تحكم هيدروليكي دقيق",
                "مناسب للدفيئات والحقول والأراضي الرطبة"
            ],
            ru: [
                "Гусеничное шасси с двигателем 490",
                "Бункер 3-5м³ (на заказ)",
                "Грузоподъемность до 6 тонн",
                "Двухдисковый или горизонтальный шнек",
                "Усиленные ножи для измельчения",
                "Гидравлическое управление",
                "Ширина 8-15м",
                "Утолщенный стальной корпус",
                "Точный гидравлический клапан регулировки скорости",
                "Подходит для теплиц, полей, рисовых полей и влажных почв"
            ],
            pt: [
                "Chassi com esteiras e motor 490",
                "Capacidade de tremonha 3-5m³ (personalizável)",
                "Capacidade de carga até 6 toneladas",
                "Mecanismo de disco duplo ou rosca horizontal",
                "Lâminas de trituração reforçadas",
                "Controle hidráulico",
                "Largura de espalhamento 8-15m",
                "Corpo em aço reforçado",
                "Válvula de controle hidráulico de precisão",
                "Adequado para estufas, campos, arrozais e terrenos úmidos"
            ]
        },
        specs: {
            en: {
                "Models": "3m³ / 5m³",
                "Hopper Volume": "3m³ / 5m³ (customizable)",
                "Load Capacity": "4t / 6t",
                "Engine": "490 engine",
                "Machine Size (L×W×H)": "3650×1950×1700mm / 4200×2100×2120mm",
                "Spreading Width": "8-15m (both models)",
                "Weight": "2210kg / 2450kg",
                "Track Size": "320×90×56 (both models)"
            },
            es: {
                "Modelos": "3m³ / 5m³",
                "Volumen de tolva": "3m³ / 5m³ (personalizable)",
                "Capacidad de carga": "4t / 6t",
                "Motor": "Motor 490",
                "Tamaño": "3650×1950×1700mm / 4200×2100×2120mm",
                "Ancho de esparcimiento": "8-15m",
                "Peso": "2210kg / 2450kg",
                "Tamaño de oruga": "320×90×56"
            },
            fr: {
                "Modèles": "3m³ / 5m³",
                "Volume trémie": "3m³ / 5m³ (personnalisable)",
                "Capacité de charge": "4t / 6t",
                "Moteur": "Moteur 490",
                "Taille": "3650×1950×1700mm / 4200×2100×2120mm",
                "Largeur d'épandage": "8-15m",
                "Poids": "2210kg / 2450kg",
                "Taille de chenille": "320×90×56"
            },
            ar: {
                "الموديلات": "3 م³ / 5 م³",
                "سعة القادوس": "3 م³ / 5 م³ (قابل للتخصيص)",
                "سعة التحميل": "4 طن / 6 طن",
                "المحرك": "محرك 490",
                "الحجم": "3650×1950×1700 ملم / 4200×2100×2120 ملم",
                "عرض النثر": "8-15 م",
                "الوزن": "2210 كجم / 2450 كجم",
                "حجم الجنزير": "320×90×56"
            },
            ru: {
                "Модели": "3м³ / 5м³",
                "Объем бункера": "3м³ / 5м³",
                "Грузоподъемность": "4т / 6т",
                "Двигатель": "Двигатель 490",
                "Размеры": "3650×1950×1700мм / 4200×2100×2120мм",
                "Ширина": "8-15м",
                "Вес": "2210кг / 2450кг",
                "Гусеницы": "320×90×56"
            },
            pt: {
                "Modelos": "3m³ / 5m³",
                "Volume tremonha": "3m³ / 5m³ (personalizável)",
                "Capacidade de carga": "4t / 6t",
                "Motor": "Motor 490",
                "Tamanho": "3650×1950×1700mm / 4200×2100×2120mm",
                "Largura de espalhamento": "8-15m",
                "Peso": "2210kg / 2450kg",
                "Tamanho da esteira": "320×90×56"
            }
        },
        inquiry: {
            minOrder: "1 unit",
            leadTime: "20-35 days",
            warranty: "12 months",
            moq: "1 unit",
            shipping: "FOB Qingdao / CIF available",
            application: "Wet terrain, paddy fields, orchards, greenhouses, soft soil, all-terrain farming"
        }
    },
        // ============================================================
    //  🔧 配件 → 风冷式液压油冷却器 KY系列
    // ============================================================
    
    // ============================================================
    //  KY-40 风冷式液压油冷却器
    // ============================================================
    {
        id: "PT-003",
        category: "parts",
        subCategory: null,
        image: "/image/oil-cooler-ky40.jpg",
        name: {
            en: "KY-40 Air Cooled Hydraulic Oil Cooler - 40L/min Capacity",
            es: "Enfriador de Aceite Hidráulico Refrigerado por Aire KY-40 - Capacidad 40L/min",
            fr: "Refroidisseur d'Huile Hydraulique Refroidi par Air KY-40 - Capacité 40L/min",
            ar: "مبردة زيت هيدروليكي مبردة بالهواء KY-40 - سعة 40 لتر/دقيقة",
            ru: "Воздушный маслоохладитель KY-40 - Производительность 40 л/мин",
            pt: "Resfriador de Óleo Hidráulico Refrigerado a Ar KY-40 - Capacidade 40L/min"
        },
        desc: {
            en: "The KY-40 air cooled hydraulic oil cooler is a compact and efficient cooling solution for hydraulic systems, lubrication systems, and industrial equipment. Features high-performance axial fan with powerful heat sink, suitable for oil drain cooling and return oil cooling. Available with AC220/380V, DC12/24V fan options. Ideal for hydraulic power stations, machine tools, gearboxes, and agricultural machinery hydraulic systems.",
            es: "El enfriador de aceite hidráulico KY-40 es una solución compacta y eficiente para sistemas hidráulicos. Disponible con opciones de ventilador AC220/380V y DC12/24V. Ideal para centrales hidráulicas y maquinaria agrícola.",
            fr: "Le refroidisseur d'huile hydraulique KY-40 est une solution compacte et efficace pour les systèmes hydrauliques. Disponible avec options de ventilateur AC220/380V et DC12/24V.",
            ar: "مبردة الزيت الهيدروليكي KY-40 هي حل مضغوط وفعال للأنظمة الهيدروليكية. متوفرة بخيارات مروحة AC220/380V و DC12/24V.",
            ru: "Маслоохладитель KY-40 - компактное и эффективное решение для гидравлических систем. Доступен с вентиляторами AC220/380V и DC12/24V.",
            pt: "O resfriador de óleo hidráulico KY-40 é uma solução compacta e eficiente para sistemas hidráulicos. Disponível com opções de ventilador AC220/380V e DC12/24V."
        },
        features: {
            en: [
                "Compact design with high-performance axial fan",
                "Oil passing capacity up to 40L/min at 10MPa",
                "Powerful heat sink for efficient cooling",
                "Cooling capacity up to 34.4W/°C",
                "Multiple voltage options: AC220/380V, DC12/24V",
                "Low power consumption (25-38W)",
                "Suitable for oil drain cooling and return oil cooling",
                "Test pressure: 2.8MPa strength test, 1.8MPa air tightness test",
                "Operating temperature: -2°C to +55°C",
                "Fan default suction type, IP protection available"
            ],
            es: [
                "Diseño compacto con ventilador axial de alto rendimiento",
                "Capacidad de paso de aceite hasta 40L/min a 10MPa",
                "Disipador de calor potente",
                "Capacidad de refrigeración hasta 34.4W/°C",
                "Múltiples opciones de voltaje",
                "Bajo consumo de energía (25-38W)",
                "Adecuado para refrigeración de retorno",
                "Presión de prueba: 2.8MPa",
                "Temperatura de operación: -2°C a +55°C"
            ],
            fr: [
                "Conception compacte avec ventilateur axial haute performance",
                "Capacité de passage d'huile jusqu'à 40L/min à 10MPa",
                "Dissipateur thermique puissant",
                "Capacité de refroidissement jusqu'à 34.4W/°C",
                "Multiples options de tension",
                "Faible consommation (25-38W)",
                "Convient au refroidissement de retour",
                "Pression d'essai: 2.8MPa",
                "Température de fonctionnement: -2°C à +55°C"
            ],
            ar: [
                "تصميم مضغوط مع مروحة محورية عالية الأداء",
                "سعة مرور الزيت تصل إلى 40 لتر/دقيقة عند 10 ميجا باسكال",
                "مشتت حراري قوي",
                "سعة تبريد تصل إلى 34.4 واط/درجة مئوية",
                "خيارات جهد متعددة",
                "استهلاك منخفض للطاقة (25-38 واط)",
                "مناسب لتبريد زيت العودة",
                "ضغط اختبار: 2.8 ميجا باسكال",
                "درجة حرارة التشغيل: -2 درجة مئوية إلى +55 درجة مئوية"
            ],
            ru: [
                "Компактная конструкция с высокопроизводительным осевым вентилятором",
                "Пропускная способность до 40 л/мин при 10 МПа",
                "Мощный радиатор",
                "Охлаждающая способность до 34.4 Вт/°C",
                "Несколько вариантов напряжения",
                "Низкое энергопотребление (25-38 Вт)",
                "Подходит для обратного охлаждения",
                "Давление испытания: 2.8 МПа",
                "Температура: -2°C до +55°C"
            ],
            pt: [
                "Design compacto com ventilador axial de alto desempenho",
                "Capacidade de passagem de óleo até 40L/min a 10MPa",
                "Dissipador de calor potente",
                "Capacidade de refrigeração até 34.4W/°C",
                "Múltiplas opções de tensão",
                "Baixo consumo de energia (25-38W)",
                "Adequado para refrigeração de retorno",
                "Pressão de teste: 2.8MPa",
                "Temperatura de operação: -2°C a +55°C"
            ]
        },
        specs: {
            en: {
                "Model": "KY-40",
                "Oil Passing Capacity": "≤40L/min (10MPa) / ≤30L/min (15MPa) / ≤20L/min (20MPa) / ≤10L/min (25MPa)",
                "Cooling Capacity": "34.4W/°C (10L/min flow)",
                "Fan Voltage": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Fan Power": "36W / 38W / 25W / 25W",
                "Fan Current": "0.23A / 0.12A / 2.0A / 1.0A",
                "Test Pressure": "2.8MPa (strength) / 1.8MPa (air tightness)",
                "Operating Temp": "-2°C to +55°C",
                "Application": "Oil drain cooling / Return oil cooling"
            },
            es: {
                "Modelo": "KY-40",
                "Capacidad de paso de aceite": "≤40L/min (10MPa) / ≤30L/min (15MPa) / ≤20L/min (20MPa) / ≤10L/min (25MPa)",
                "Capacidad de refrigeración": "34.4W/°C",
                "Voltaje del ventilador": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potencia del ventilador": "36W / 38W / 25W / 25W",
                "Corriente": "0.23A / 0.12A / 2.0A / 1.0A",
                "Presión de prueba": "2.8MPa / 1.8MPa",
                "Temperatura": "-2°C a +55°C"
            },
            fr: {
                "Modèle": "KY-40",
                "Capacité de passage": "≤40L/min (10MPa) / ≤30L/min (15MPa) / ≤20L/min (20MPa) / ≤10L/min (25MPa)",
                "Capacité de refroidissement": "34.4W/°C",
                "Tension ventilateur": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Puissance ventilateur": "36W / 38W / 25W / 25W",
                "Courant": "0.23A / 0.12A / 2.0A / 1.0A",
                "Pression d'essai": "2.8MPa / 1.8MPa",
                "Température": "-2°C à +55°C"
            },
            ar: {
                "الموديل": "KY-40",
                "سعة مرور الزيت": "≤40 لتر/دقيقة (10 ميجا باسكال) / ≤30 لتر/دقيقة (15 ميجا باسكال) / ≤20 لتر/دقيقة (20 ميجا باسكال) / ≤10 لتر/دقيقة (25 ميجا باسكال)",
                "سعة التبريد": "34.4 واط/درجة مئوية",
                "جهد المروحة": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "قوة المروحة": "36 واط / 38 واط / 25 واط / 25 واط",
                "التيار": "0.23 أمبير / 0.12 أمبير / 2.0 أمبير / 1.0 أمبير",
                "ضغط الاختبار": "2.8 ميجا باسكال / 1.8 ميجا باسكال",
                "درجة الحرارة": "-2 درجة مئوية إلى +55 درجة مئوية"
            },
            ru: {
                "Модель": "KY-40",
                "Пропускная способность": "≤40 л/мин (10МПа) / ≤30 л/мин (15МПа) / ≤20 л/мин (20МПа) / ≤10 л/мин (25МПа)",
                "Охлаждающая способность": "34.4 Вт/°C",
                "Напряжение вентилятора": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Мощность вентилятора": "36Вт / 38Вт / 25Вт / 25Вт",
                "Ток": "0.23А / 0.12А / 2.0А / 1.0А",
                "Давление": "2.8МПа / 1.8МПа",
                "Температура": "-2°C до +55°C"
            },
            pt: {
                "Modelo": "KY-40",
                "Capacidade de passagem": "≤40L/min (10MPa) / ≤30L/min (15MPa) / ≤20L/min (20MPa) / ≤10L/min (25MPa)",
                "Capacidade de refrigeração": "34.4W/°C",
                "Tensão do ventilador": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potência do ventilador": "36W / 38W / 25W / 25W",
                "Corrente": "0.23A / 0.12A / 2.0A / 1.0A",
                "Pressão de teste": "2.8MPa / 1.8MPa",
                "Temperatura": "-2°C a +55°C"
            }
        },
        inquiry: {
            minOrder: "10 units",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "5 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Hydraulic power stations, machine tools, gearboxes, agricultural machinery hydraulic systems"
        }
    },

    // ============================================================
    //  KY-60 风冷式液压油冷却器
    // ============================================================
    {
        id: "PT-004",
        category: "parts",
        subCategory: null,
        image: "/image/oil-cooler-ky60.jpg",
        name: {
            en: "KY-60 Air Cooled Hydraulic Oil Cooler - 60L/min Capacity",
            es: "Enfriador de Aceite Hidráulico Refrigerado por Aire KY-60 - Capacidad 60L/min",
            fr: "Refroidisseur d'Huile Hydraulique Refroidi par Air KY-60 - Capacité 60L/min",
            ar: "مبردة زيت هيدروليكي مبردة بالهواء KY-60 - سعة 60 لتر/دقيقة",
            ru: "Воздушный маслоохладитель KY-60 - Производительность 60 л/мин",
            pt: "Resfriador de Óleo Hidráulico Refrigerado a Ar KY-60 - Capacidade 60L/min"
        },
        desc: {
            en: "The KY-60 air cooled hydraulic oil cooler is a medium-capacity cooling solution for hydraulic and lubrication systems. Features high-performance axial fan with optimized heat sink design for efficient heat dissipation. Available with AC220/380V, DC12/24V fan options. Suitable for oil drain cooling and return oil cooling in industrial and agricultural applications.",
            es: "El enfriador de aceite hidráulico KY-60 es una solución de refrigeración de capacidad media. Disponible con opciones de ventilador AC220/380V y DC12/24V.",
            fr: "Le refroidisseur d'huile hydraulique KY-60 est une solution de refroidissement de capacité moyenne. Disponible avec options de ventilateur AC220/380V et DC12/24V.",
            ar: "مبردة الزيت الهيدروليكي KY-60 هي حل تبريد متوسط السعة. متوفرة بخيارات مروحة AC220/380V و DC12/24V.",
            ru: "Маслоохладитель KY-60 - решение средней мощности для гидравлических систем. Доступен с вентиляторами AC220/380V и DC12/24V.",
            pt: "O resfriador de óleo hidráulico KY-60 é uma solução de refrigeração de média capacidade. Disponível com opções de ventilador AC220/380V e DC12/24V."
        },
        features: {
            en: [
                "Medium capacity design for hydraulic systems",
                "Oil passing capacity up to 60L/min at 10MPa",
                "Cooling capacity up to 43.0W/°C",
                "Multiple voltage options: AC220/380V, DC12/24V",
                "Low power consumption (25-38W)",
                "Suitable for oil drain cooling and return oil cooling",
                "Test pressure: 2.8MPa strength test, 1.8MPa air tightness test",
                "Operating temperature: -2°C to +55°C",
                "Fan default suction type"
            ],
            es: [
                "Diseño de capacidad media",
                "Capacidad de paso de aceite hasta 60L/min a 10MPa",
                "Capacidad de refrigeración hasta 43.0W/°C",
                "Múltiples opciones de voltaje",
                "Bajo consumo de energía",
                "Adecuado para refrigeración de retorno",
                "Presión de prueba: 2.8MPa"
            ],
            fr: [
                "Conception de capacité moyenne",
                "Capacité de passage jusqu'à 60L/min à 10MPa",
                "Capacité de refroidissement jusqu'à 43.0W/°C",
                "Multiples options de tension",
                "Faible consommation",
                "Convient au refroidissement de retour",
                "Pression d'essai: 2.8MPa"
            ],
            ar: [
                "تصميم متوسط السعة",
                "سعة مرور الزيت تصل إلى 60 لتر/دقيقة عند 10 ميجا باسكال",
                "سعة تبريد تصل إلى 43.0 واط/درجة مئوية",
                "خيارات جهد متعددة",
                "استهلاك منخفض للطاقة",
                "مناسب لتبريد زيت العودة",
                "ضغط اختبار: 2.8 ميجا باسكال"
            ],
            ru: [
                "Конструкция средней мощности",
                "Пропускная способность до 60 л/мин при 10 МПа",
                "Охлаждающая способность до 43.0 Вт/°C",
                "Несколько вариантов напряжения",
                "Низкое энергопотребление",
                "Подходит для обратного охлаждения",
                "Давление испытания: 2.8 МПа"
            ],
            pt: [
                "Design de média capacidade",
                "Capacidade de passagem até 60L/min a 10MPa",
                "Capacidade de refrigeração até 43.0W/°C",
                "Múltiplas opções de tensão",
                "Baixo consumo de energia",
                "Adequado para refrigeração de retorno",
                "Pressão de teste: 2.8MPa"
            ]
        },
        specs: {
            en: {
                "Model": "KY-60",
                "Oil Passing Capacity": "≤60L/min (10MPa) / ≤35L/min (15MPa) / ≤25L/min (20MPa) / ≤15L/min (25MPa)",
                "Cooling Capacity": "43.0W/°C (10L/min flow)",
                "Fan Voltage": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Fan Power": "36W / 38W / 25W / 25W",
                "Fan Current": "0.23A / 0.12A / 2.0A / 1.0A",
                "Test Pressure": "2.8MPa (strength) / 1.8MPa (air tightness)",
                "Operating Temp": "-2°C to +55°C",
                "Application": "Oil drain cooling / Return oil cooling"
            },
            es: {
                "Modelo": "KY-60",
                "Capacidad de paso": "≤60L/min (10MPa) / ≤35L/min (15MPa) / ≤25L/min (20MPa) / ≤15L/min (25MPa)",
                "Capacidad de refrigeración": "43.0W/°C",
                "Voltaje del ventilador": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potencia del ventilador": "36W / 38W / 25W / 25W",
                "Corriente": "0.23A / 0.12A / 2.0A / 1.0A",
                "Presión de prueba": "2.8MPa / 1.8MPa"
            },
            fr: {
                "Modèle": "KY-60",
                "Capacité de passage": "≤60L/min (10MPa) / ≤35L/min (15MPa) / ≤25L/min (20MPa) / ≤15L/min (25MPa)",
                "Capacité de refroidissement": "43.0W/°C",
                "Tension ventilateur": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Puissance ventilateur": "36W / 38W / 25W / 25W",
                "Courant": "0.23A / 0.12A / 2.0A / 1.0A",
                "Pression d'essai": "2.8MPa / 1.8MPa"
            },
            ar: {
                "الموديل": "KY-60",
                "سعة مرور الزيت": "≤60 لتر/دقيقة (10 ميجا باسكال) / ≤35 لتر/دقيقة (15 ميجا باسكال) / ≤25 لتر/دقيقة (20 ميجا باسكال) / ≤15 لتر/دقيقة (25 ميجا باسكال)",
                "سعة التبريد": "43.0 واط/درجة مئوية",
                "جهد المروحة": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "قوة المروحة": "36 واط / 38 واط / 25 واط / 25 واط",
                "التيار": "0.23 أمبير / 0.12 أمبير / 2.0 أمبير / 1.0 أمبير",
                "ضغط الاختبار": "2.8 ميجا باسكال / 1.8 ميجا باسكال"
            },
            ru: {
                "Модель": "KY-60",
                "Пропускная способность": "≤60 л/мин (10МПа) / ≤35 л/мин (15МПа) / ≤25 л/мин (20МПа) / ≤15 л/мин (25МПа)",
                "Охлаждающая способность": "43.0 Вт/°C",
                "Напряжение": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Мощность": "36Вт / 38Вт / 25Вт / 25Вт",
                "Ток": "0.23А / 0.12А / 2.0А / 1.0А",
                "Давление": "2.8МПа / 1.8МПа"
            },
            pt: {
                "Modelo": "KY-60",
                "Capacidade de passagem": "≤60L/min (10MPa) / ≤35L/min (15MPa) / ≤25L/min (20MPa) / ≤15L/min (25MPa)",
                "Capacidade de refrigeração": "43.0W/°C",
                "Tensão do ventilador": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potência do ventilador": "36W / 38W / 25W / 25W",
                "Corrente": "0.23A / 0.12A / 2.0A / 1.0A",
                "Pressão de teste": "2.8MPa / 1.8MPa"
            }
        },
        inquiry: {
            minOrder: "10 units",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "5 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Hydraulic systems, lubrication systems, industrial equipment, agricultural machinery"
        }
    },

    // ============================================================
    //  KY-150 风冷式液压油冷却器
    // ============================================================
    {
        id: "PT-005",
        category: "parts",
        subCategory: null,
        image: "/image/oil-cooler-ky150.jpg",
        name: {
            en: "KY-150 Air Cooled Hydraulic Oil Cooler - 150L/min Capacity",
            es: "Enfriador de Aceite Hidráulico Refrigerado por Aire KY-150 - Capacidad 150L/min",
            fr: "Refroidisseur d'Huile Hydraulique Refroidi par Air KY-150 - Capacité 150L/min",
            ar: "مبردة زيت هيدروليكي مبردة بالهواء KY-150 - سعة 150 لتر/دقيقة",
            ru: "Воздушный маслоохладитель KY-150 - Производительность 150 л/мин",
            pt: "Resfriador de Óleo Hidráulico Refrigerado a Ar KY-150 - Capacidade 150L/min"
        },
        desc: {
            en: "The KY-150 air cooled hydraulic oil cooler is a high-capacity cooling solution for large hydraulic systems and industrial applications. Features high-performance axial fan with IP54/IP56 protection, powerful heat sink, and cooling capacity up to 35.2W/°C. Available with AC220/380V, DC12/24V fan options. Suitable for heavy-duty hydraulic systems, lubrication systems, and industrial machinery cooling.",
            es: "El enfriador de aceite hidráulico KY-150 es una solución de alta capacidad para sistemas hidráulicos grandes. Protección IP54/IP56, capacidad de refrigeración hasta 35.2W/°C.",
            fr: "Le refroidisseur d'huile hydraulique KY-150 est une solution haute capacité pour les grands systèmes hydrauliques. Protection IP54/IP56, capacité de refroidissement jusqu'à 35.2W/°C.",
            ar: "مبردة الزيت الهيدروليكي KY-150 هي حل عالي السعة للأنظمة الهيدروليكية الكبيرة. حماية IP54/IP56، سعة تبريد تصل إلى 35.2 واط/درجة مئوية.",
            ru: "Маслоохладитель KY-150 - высокопроизводительное решение для крупных гидравлических систем. Защита IP54/IP56, охлаждение до 35.2 Вт/°C.",
            pt: "O resfriador de óleo hidráulico KY-150 é uma solução de alta capacidade para grandes sistemas hidráulicos. Proteção IP54/IP56, capacidade de refrigeração até 35.2W/°C."
        },
        features: {
            en: [
                "High capacity design for large hydraulic systems",
                "Oil passing capacity up to 150L/min at 10MPa",
                "Cooling capacity up to 35.2W/°C",
                "IP54/IP56 protection for harsh environments",
                "Multiple voltage options: AC220/380V, DC12/24V",
                "Low noise operation (56-60 dB)",
                "Test pressure: 3.5MPa strength, 2.5MPa air tightness",
                "Operating temperature: -20°C to +75°C",
                "Suitable for heavy-duty hydraulic and lubrication systems"
            ],
            es: [
                "Diseño de alta capacidad",
                "Capacidad de paso hasta 150L/min a 10MPa",
                "Capacidad de refrigeración hasta 35.2W/°C",
                "Protección IP54/IP56",
                "Múltiples opciones de voltaje",
                "Bajo nivel de ruido (56-60 dB)",
                "Presión de prueba: 3.5MPa"
            ],
            fr: [
                "Conception haute capacité",
                "Capacité de passage jusqu'à 150L/min à 10MPa",
                "Capacité de refroidissement jusqu'à 35.2W/°C",
                "Protection IP54/IP56",
                "Multiples options de tension",
                "Faible bruit (56-60 dB)",
                "Pression d'essai: 3.5MPa"
            ],
            ar: [
                "تصميم عالي السعة",
                "سعة مرور تصل إلى 150 لتر/دقيقة عند 10 ميجا باسكال",
                "سعة تبريد تصل إلى 35.2 واط/درجة مئوية",
                "حماية IP54/IP56",
                "خيارات جهد متعددة",
                "ضجيج منخفض (56-60 ديسيبل)",
                "ضغط اختبار: 3.5 ميجا باسكال"
            ],
            ru: [
                "Высокопроизводительная конструкция",
                "Пропускная способность до 150 л/мин при 10 МПа",
                "Охлаждающая способность до 35.2 Вт/°C",
                "Защита IP54/IP56",
                "Несколько вариантов напряжения",
                "Низкий уровень шума (56-60 дБ)",
                "Давление испытания: 3.5 МПа"
            ],
            pt: [
                "Design de alta capacidade",
                "Capacidade de passagem até 150L/min a 10MPa",
                "Capacidade de refrigeração até 35.2W/°C",
                "Proteção IP54/IP56",
                "Múltiplas opções de tensão",
                "Baixo ruído (56-60 dB)",
                "Pressão de teste: 3.5MPa"
            ]
        },
        specs: {
            en: {
                "Model": "KY-150",
                "Oil Passing Capacity": "≤150L/min (10MPa) / ≤110L/min (15MPa) / ≤80L/min (20MPa) / ≤50L/min (25MPa)",
                "Cooling Capacity": "35.2W/°C (10L/min flow)",
                "Fan Voltage": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Fan Power": "95W / 95W / ≤16.0A / ≤8.5A",
                "Protection Class": "IP54 / IP54 / IP56 / IP56",
                "Noise Level": "56dB / 56dB / 60dB / 60dB",
                "Test Pressure": "3.5MPa (strength) / 2.5MPa (air tightness)",
                "Operating Temp": "-20°C to +75°C"
            },
            es: {
                "Modelo": "KY-150",
                "Capacidad de paso": "≤150L/min (10MPa) / ≤110L/min (15MPa) / ≤80L/min (20MPa) / ≤50L/min (25MPa)",
                "Capacidad de refrigeración": "35.2W/°C",
                "Voltaje del ventilador": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potencia": "95W / 95W / ≤16.0A / ≤8.5A",
                "Protección": "IP54 / IP54 / IP56 / IP56",
                "Ruido": "56dB / 56dB / 60dB / 60dB",
                "Presión de prueba": "3.5MPa / 2.5MPa"
            },
            fr: {
                "Modèle": "KY-150",
                "Capacité de passage": "≤150L/min (10MPa) / ≤110L/min (15MPa) / ≤80L/min (20MPa) / ≤50L/min (25MPa)",
                "Capacité de refroidissement": "35.2W/°C",
                "Tension": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Puissance": "95W / 95W / ≤16.0A / ≤8.5A",
                "Protection": "IP54 / IP54 / IP56 / IP56",
                "Bruit": "56dB / 56dB / 60dB / 60dB",
                "Pression d'essai": "3.5MPa / 2.5MPa"
            },
            ar: {
                "الموديل": "KY-150",
                "سعة مرور الزيت": "≤150 لتر/دقيقة (10 ميجا باسكال) / ≤110 لتر/دقيقة (15 ميجا باسكال) / ≤80 لتر/دقيقة (20 ميجا باسكال) / ≤50 لتر/دقيقة (25 ميجا باسكال)",
                "سعة التبريد": "35.2 واط/درجة مئوية",
                "جهد المروحة": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "القوة": "95 واط / 95 واط / ≤16.0 أمبير / ≤8.5 أمبير",
                "الحماية": "IP54 / IP54 / IP56 / IP56",
                "الضجيج": "56 ديسيبل / 56 ديسيبل / 60 ديسيبل / 60 ديسيبل",
                "ضغط الاختبار": "3.5 ميجا باسكال / 2.5 ميجا باسكال"
            },
            ru: {
                "Модель": "KY-150",
                "Пропускная способность": "≤150 л/мин (10МПа) / ≤110 л/мин (15МПа) / ≤80 л/мин (20МПа) / ≤50 л/мин (25МПа)",
                "Охлаждающая способность": "35.2 Вт/°C",
                "Напряжение": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Мощность": "95Вт / 95Вт / ≤16.0А / ≤8.5А",
                "Защита": "IP54 / IP54 / IP56 / IP56",
                "Шум": "56дБ / 56дБ / 60дБ / 60дБ",
                "Давление": "3.5МПа / 2.5МПа"
            },
            pt: {
                "Modelo": "KY-150",
                "Capacidade de passagem": "≤150L/min (10MPa) / ≤110L/min (15MPa) / ≤80L/min (20MPa) / ≤50L/min (25MPa)",
                "Capacidade de refrigeração": "35.2W/°C",
                "Tensão": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potência": "95W / 95W / ≤16.0A / ≤8.5A",
                "Proteção": "IP54 / IP54 / IP56 / IP56",
                "Ruído": "56dB / 56dB / 60dB / 60dB",
                "Pressão de teste": "3.5MPa / 2.5MPa"
            }
        },
        inquiry: {
            minOrder: "10 units",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "5 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Large hydraulic systems, industrial machinery, heavy equipment cooling, lubrication systems"
        }
    },

    // ============================================================
    //  KY-200 风冷式液压油冷却器
    // ============================================================
    {
        id: "PT-006",
        category: "parts",
        subCategory: null,
        image: "/image/oil-cooler-ky200.png",
        name: {
            en: "KY-200 Air Cooled Hydraulic Oil Cooler - 200L/min Capacity",
            es: "Enfriador de Aceite Hidráulico Refrigerado por Aire KY-200 - Capacidad 200L/min",
            fr: "Refroidisseur d'Huile Hydraulique Refroidi par Air KY-200 - Capacité 200L/min",
            ar: "مبردة زيت هيدروليكي مبردة بالهواء KY-200 - سعة 200 لتر/دقيقة",
            ru: "Воздушный маслоохладитель KY-200 - Производительность 200 л/мин",
            pt: "Resfriador de Óleo Hidráulico Refrigerado a Ar KY-200 - Capacidade 200L/min"
        },
        desc: {
            en: "The KY-200 air cooled hydraulic oil cooler is a high-performance cooling solution for heavy-duty hydraulic systems and industrial applications. Features powerful axial fan with IP54/IP56 protection, robust heat sink design, and cooling capacity optimized for large oil flows. Available with AC220/380V, DC12/24V fan options. Suitable for heavy machinery, construction equipment, and large industrial hydraulic systems.",
            es: "El enfriador de aceite hidráulico KY-200 es una solución de refrigeración de alto rendimiento para sistemas hidráulicos pesados. Protección IP54/IP56, capacidad optimizada para grandes caudales de aceite.",
            fr: "Le refroidisseur d'huile hydraulique KY-200 est une solution de refroidissement haute performance pour les systèmes hydrauliques lourds. Protection IP54/IP56, capacité optimisée pour les grands débits d'huile.",
            ar: "مبردة الزيت الهيدروليكي KY-200 هي حل تبريد عالي الأداء للأنظمة الهيدروليكية الثقيلة. حماية IP54/IP56، سعة محسنة للتدفقات الكبيرة.",
            ru: "Маслоохладитель KY-200 - высокопроизводительное решение для тяжелых гидравлических систем. Защита IP54/IP56, оптимизирован для больших потоков масла.",
            pt: "O resfriador de óleo hidráulico KY-200 é uma solução de refrigeração de alto desempenho para sistemas hidráulicos pesados. Proteção IP54/IP56, capacidade otimizada para grandes fluxos."
        },
        features: {
            en: [
                "High performance cooling for heavy-duty systems",
                "Oil passing capacity up to 200L/min at 10MPa",
                "Cooling capacity optimized for large oil flows",
                "IP54/IP56 protection for demanding environments",
                "Multiple voltage options: AC220/380V, DC12/24V",
                "High power fan (120-135W AC, up to 16A DC)",
                "Noise level: 64-68 dB",
                "Test pressure: 3.5MPa strength, 2.5MPa air tightness",
                "Operating temperature: -20°C to +75°C",
                "Suitable for construction equipment and heavy machinery"
            ],
            es: [
                "Refrigeración de alto rendimiento",
                "Capacidad de paso hasta 200L/min a 10MPa",
                "Protección IP54/IP56",
                "Múltiples opciones de voltaje",
                "Ventilador de alta potencia (120-135W AC)",
                "Nivel de ruido: 64-68 dB",
                "Presión de prueba: 3.5MPa"
            ],
            fr: [
                "Refroidissement haute performance",
                "Capacité de passage jusqu'à 200L/min à 10MPa",
                "Protection IP54/IP56",
                "Multiples options de tension",
                "Ventilateur haute puissance (120-135W AC)",
                "Niveau de bruit: 64-68 dB",
                "Pression d'essai: 3.5MPa"
            ],
            ar: [
                "تبريد عالي الأداء",
                "سعة مرور تصل إلى 200 لتر/دقيقة عند 10 ميجا باسكال",
                "حماية IP54/IP56",
                "خيارات جهد متعددة",
                "مروحة عالية الطاقة (120-135 واط AC)",
                "مستوى الضجيج: 64-68 ديسيبل",
                "ضغط اختبار: 3.5 ميجا باسكال"
            ],
            ru: [
                "Высокопроизводительное охлаждение",
                "Пропускная способность до 200 л/мин при 10 МПа",
                "Защита IP54/IP56",
                "Несколько вариантов напряжения",
                "Мощный вентилятор (120-135 Вт AC)",
                "Уровень шума: 64-68 дБ",
                "Давление испытания: 3.5 МПа"
            ],
            pt: [
                "Refrigeração de alto desempenho",
                "Capacidade de passagem até 200L/min a 10MPa",
                "Proteção IP54/IP56",
                "Múltiplas opções de tensão",
                "Ventilador de alta potência (120-135W AC)",
                "Nível de ruído: 64-68 dB",
                "Pressão de teste: 3.5MPa"
            ]
        },
        specs: {
            en: {
                "Model": "KY-200",
                "Oil Passing Capacity": "≤200L/min (10MPa) / ≤140L/min (15MPa) / ≤120L/min (20MPa) / ≤70L/min (25MPa)",
                "Fan Voltage": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Fan Power": "120W/1.0A / 135W/0.46A / ≤16.0A / ≤8.5A",
                "Protection Class": "IP54 / IP54 / IP56 / IP56",
                "Noise Level": "64dB / 64dB / 68dB / 68dB",
                "Test Pressure": "3.5MPa (strength) / 2.5MPa (air tightness)",
                "Operating Temp": "-20°C to +75°C"
            },
            es: {
                "Modelo": "KY-200",
                "Capacidad de paso": "≤200L/min (10MPa) / ≤140L/min (15MPa) / ≤120L/min (20MPa) / ≤70L/min (25MPa)",
                "Voltaje": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potencia": "120W/1.0A / 135W/0.46A / ≤16.0A / ≤8.5A",
                "Protección": "IP54 / IP54 / IP56 / IP56",
                "Ruido": "64dB / 64dB / 68dB / 68dB",
                "Presión": "3.5MPa / 2.5MPa"
            },
            fr: {
                "Modèle": "KY-200",
                "Capacité de passage": "≤200L/min (10MPa) / ≤140L/min (15MPa) / ≤120L/min (20MPa) / ≤70L/min (25MPa)",
                "Tension": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Puissance": "120W/1.0A / 135W/0.46A / ≤16.0A / ≤8.5A",
                "Protection": "IP54 / IP54 / IP56 / IP56",
                "Bruit": "64dB / 64dB / 68dB / 68dB",
                "Pression": "3.5MPa / 2.5MPa"
            },
            ar: {
                "الموديل": "KY-200",
                "سعة مرور الزيت": "≤200 لتر/دقيقة (10 ميجا باسكال) / ≤140 لتر/دقيقة (15 ميجا باسكال) / ≤120 لتر/دقيقة (20 ميجا باسكال) / ≤70 لتر/دقيقة (25 ميجا باسكال)",
                "جهد المروحة": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "القوة": "120 واط/1.0 أمبير / 135 واط/0.46 أمبير / ≤16.0 أمبير / ≤8.5 أمبير",
                "الحماية": "IP54 / IP54 / IP56 / IP56",
                "الضجيج": "64 ديسيبل / 64 ديسيبل / 68 ديسيبل / 68 ديسيبل",
                "ضغط الاختبار": "3.5 ميجا باسكال / 2.5 ميجا باسكال"
            },
            ru: {
                "Модель": "KY-200",
                "Пропускная способность": "≤200 л/мин (10МПа) / ≤140 л/мин (15МПа) / ≤120 л/мин (20МПа) / ≤70 л/мин (25МПа)",
                "Напряжение": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Мощность": "120Вт/1.0А / 135Вт/0.46А / ≤16.0А / ≤8.5А",
                "Защита": "IP54 / IP54 / IP56 / IP56",
                "Шум": "64дБ / 64дБ / 68дБ / 68дБ",
                "Давление": "3.5МПа / 2.5МПа"
            },
            pt: {
                "Modelo": "KY-200",
                "Capacidade de passagem": "≤200L/min (10MPa) / ≤140L/min (15MPa) / ≤120L/min (20MPa) / ≤70L/min (25MPa)",
                "Tensão": "AC220V/50Hz / AC380V/50Hz / DC12V / DC24V",
                "Potência": "120W/1.0A / 135W/0.46A / ≤16.0A / ≤8.5A",
                "Proteção": "IP54 / IP54 / IP56 / IP56",
                "Ruído": "64dB / 64dB / 68dB / 68dB",
                "Pressão": "3.5MPa / 2.5MPa"
            }
        },
        inquiry: {
            minOrder: "10 units",
            leadTime: "15-25 days",
            warranty: "12 months",
            moq: "5 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Heavy machinery, construction equipment, large hydraulic systems, industrial cooling"
        }
    },

    // ============================================================
    //  KY-600/KY-700 大型风冷式液压油冷却器
    // ============================================================
    {
        id: "PT-007",
        category: "parts",
        subCategory: null,
        image: "/image/oil-cooler-ky600.jpg",
        name: {
            en: "KY-600/KY-700 Heavy-Duty Air Cooled Oil Cooler - 550-650L/min Capacity",
            es: "Enfriador de Aceite Refrigerado por Aire KY-600/KY-700 - Capacidad 550-650L/min",
            fr: "Refroidisseur d'Huile Refroidi par Air KY-600/KY-700 - Capacité 550-650L/min",
            ar: "مبردة زيت مبردة بالهواء KY-600/KY-700 - سعة 550-650 لتر/دقيقة",
            ru: "Маслоохладитель KY-600/KY-700 - Производительность 550-650 л/мин",
            pt: "Resfriador de Óleo Refrigerado a Ar KY-600/KY-700 - Capacidade 550-650L/min"
        },
        desc: {
            en: "The KY-600/KY-700 series air cooled oil coolers are industrial-grade cooling solutions for large hydraulic systems, power stations, and heavy machinery. Features high-power external rotor fans (750-800W), IP54/IP56 protection, and exceptional cooling capacity for oil flows up to 650L/min. Available with AC380V, DC12/24V, and hydraulic motor drive options. Ideal for mining equipment, large construction machinery, and industrial hydraulic power units.",
            es: "Los enfriadores de aceite KY-600/KY-700 son soluciones de refrigeración de grado industrial. Ventiladores de rotor externo de alta potencia (750-800W), protección IP54/IP56, capacidad de refrigeración excepcional. Ideales para equipos de minería y maquinaria de construcción.",
            fr: "Les refroidisseurs d'huile KY-600/KY-700 sont des solutions de refroidissement de qualité industrielle. Ventilateurs à rotor externe haute puissance (750-800W), protection IP54/IP56. Idéaux pour les équipements miniers.",
            ar: "مبرادات الزيت KY-600/KY-700 هي حلول تبريد صناعية. مراوح دوار خارجي عالية الطاقة (750-800 واط)، حماية IP54/IP56. مثالية لمعدات التعدين.",
            ru: "Маслоохладители KY-600/KY-700 - промышленные решения для охлаждения. Вентиляторы с внешним ротором (750-800 Вт), защита IP54/IP56. Идеальны для горного оборудования.",
            pt: "Os resfriadores de óleo KY-600/KY-700 são soluções de refrigeração de grau industrial. Ventiladores de rotor externo de alta potência (750-800W), proteção IP54/IP56. Ideais para equipamentos de mineração."
        },
        features: {
            en: [
                "Industrial-grade cooling for large hydraulic systems",
                "Oil passing capacity: ≤550-650L/min at 10MPa",
                "High-power external rotor fan (750-800W)",
                "IP54/IP56 protection for demanding industrial environments",
                "Multiple drive options: AC380V, DC12/24V, Hydraulic motor",
                "High air flow for maximum cooling efficiency",
                "Robust construction for continuous heavy-duty operation",
                "Test pressure: 3.5MPa strength, 2.5MPa air tightness",
                "Operating temperature: -20°C to +75°C",
                "Suitable for mining, construction, and industrial applications"
            ],
            es: [
                "Refrigeración de grado industrial",
                "Capacidad de paso: ≤550-650L/min a 10MPa",
                "Ventilador de rotor externo de alta potencia (750-800W)",
                "Protección IP54/IP56",
                "Múltiples opciones de accionamiento",
                "Construcción robusta",
                "Presión de prueba: 3.5MPa"
            ],
            fr: [
                "Refroidissement de qualité industrielle",
                "Capacité de passage: ≤550-650L/min à 10MPa",
                "Ventilateur à rotor externe haute puissance (750-800W)",
                "Protection IP54/IP56",
                "Multiples options d'entraînement",
                "Construction robuste",
                "Pression d'essai: 3.5MPa"
            ],
            ar: [
                "تبريد صناعي",
                "سعة مرور: ≤550-650 لتر/دقيقة عند 10 ميجا باسكال",
                "مروحة دوار خارجي عالية الطاقة (750-800 واط)",
                "حماية IP54/IP56",
                "خيارات تشغيل متعددة",
                "بناء قوي",
                "ضغط اختبار: 3.5 ميجا باسكال"
            ],
            ru: [
                "Промышленное охлаждение",
                "Пропускная способность: ≤550-650 л/мин при 10 МПа",
                "Вентилятор с внешним ротором (750-800 Вт)",
                "Защита IP54/IP56",
                "Несколько вариантов привода",
                "Прочная конструкция",
                "Давление испытания: 3.5 МПа"
            ],
            pt: [
                "Refrigeração de grau industrial",
                "Capacidade de passagem: ≤550-650L/min a 10MPa",
                "Ventilador de rotor externo de alta potência (750-800W)",
                "Proteção IP54/IP56",
                "Múltiplas opções de acionamento",
                "Construção robusta",
                "Pressão de teste: 3.5MPa"
            ]
        },
        specs: {
            en: {
                "Models": "KY-600 / KY-700",
                "Oil Passing Capacity": "≤550L/min (10MPa) / ≤650L/min (10MPa)",
                "Fan Type": "External rotor fan / Axial flow fan / DC fan / Hydraulic motor",
                "Fan Power": "750W/3.6A / 800W/7.0A / ≤8.0A×4 / ≤8.5A×4",
                "Protection Class": "IP54 / IP54 / IP56 / IP56",
                "Noise Level": "75dB (all models)",
                "Test Pressure": "3.5MPa (strength) / 2.5MPa (air tightness)",
                "Operating Temp": "-20°C to +75°C"
            },
            es: {
                "Modelos": "KY-600 / KY-700",
                "Capacidad de paso": "≤550L/min (10MPa) / ≤650L/min (10MPa)",
                "Tipo de ventilador": "Rotor externo / Flujo axial / DC / Motor hidráulico",
                "Potencia": "750W/3.6A / 800W/7.0A / ≤8.0A×4 / ≤8.5A×4",
                "Protección": "IP54 / IP54 / IP56 / IP56",
                "Ruido": "75dB",
                "Presión": "3.5MPa / 2.5MPa"
            },
            fr: {
                "Modèles": "KY-600 / KY-700",
                "Capacité de passage": "≤550L/min (10MPa) / ≤650L/min (10MPa)",
                "Type de ventilateur": "Rotor externe / Flux axial / DC / Moteur hydraulique",
                "Puissance": "750W/3.6A / 800W/7.0A / ≤8.0A×4 / ≤8.5A×4",
                "Protection": "IP54 / IP54 / IP56 / IP56",
                "Bruit": "75dB",
                "Pression": "3.5MPa / 2.5MPa"
            },
            ar: {
                "الموديلات": "KY-600 / KY-700",
                "سعة مرور الزيت": "≤550 لتر/دقيقة (10 ميجا باسكال) / ≤650 لتر/دقيقة (10 ميجا باسكال)",
                "نوع المروحة": "دوار خارجي / تدفق محوري / DC / محرك هيدروليكي",
                "القوة": "750 واط/3.6 أمبير / 800 واط/7.0 أمبير / ≤8.0 أمبير×4 / ≤8.5 أمبير×4",
                "الحماية": "IP54 / IP54 / IP56 / IP56",
                "الضجيج": "75 ديسيبل",
                "ضغط الاختبار": "3.5 ميجا باسكال / 2.5 ميجا باسكال"
            },
            ru: {
                "Модели": "KY-600 / KY-700",
                "Пропускная способность": "≤550 л/мин (10МПа) / ≤650 л/мин (10МПа)",
                "Тип вентилятора": "Внешний ротор / Осевой / DC / Гидромотор",
                "Мощность": "750Вт/3.6А / 800Вт/7.0А / ≤8.0А×4 / ≤8.5А×4",
                "Защита": "IP54 / IP54 / IP56 / IP56",
                "Шум": "75дБ",
                "Давление": "3.5МПа / 2.5МПа"
            },
            pt: {
                "Modelos": "KY-600 / KY-700",
                "Capacidade de passagem": "≤550L/min (10MPa) / ≤650L/min (10MPa)",
                "Tipo de ventilador": "Rotor externo / Fluxo axial / DC / Motor hidráulico",
                "Potência": "750W/3.6A / 800W/7.0A / ≤8.0A×4 / ≤8.5A×4",
                "Proteção": "IP54 / IP54 / IP56 / IP56",
                "Ruído": "75dB",
                "Pressão": "3.5MPa / 2.5MPa"
            }
        },
        inquiry: {
            minOrder: "5 units",
            leadTime: "20-30 days",
            warranty: "12 months",
            moq: "2 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Mining equipment, large construction machinery, industrial hydraulic power units, power stations"
        }
    },
        // ============================================================
    //  🌱 农机具 → 播种机械 → 手提播种器
    // ============================================================
    {
        id: "PL-004",
        category: "farm-machinery",
        subCategory: "planting",
        image: "/image/handheld-seeder.jpg",
        name: {
            en: "Handheld Push Seeder - Portable Manual Planter for Small Farms & Gardens",
            es: "Sembradora Manual Portátil - Plantadora Manual para Pequeñas Granjas y Jardines",
            fr: "Semoir Manuel Portatif - Planteuse Manuelle pour Petites Fermes et Jardins",
            ar: "بذارة يدوية محمولة - آلة زراعة يدوية للمزارع الصغيرة والحدائق",
            ru: "Ручная сеялка - Портативное ручное посадочное устройство для малых ферм и садов",
            pt: "Semeadeira Manual Portátil - Plantadora Manual para Pequenas Fazendas e Jardins"
        },
        desc: {
            en: "The Handheld Push Seeder is a lightweight, portable manual planting tool designed for efficient seed sowing in small farms, vegetable gardens, greenhouses, and orchards. Features an ergonomic design with adjustable seeding depth, suitable for various seed types including vegetables, grains, and flowers. Available in three models with different seed hopper capacities. Ideal for small-scale farmers, home gardeners, and horticulture enthusiasts looking for a cost-effective planting solution.",
            es: "La sembradora manual portátil es una herramienta de siembra ligera y portátil para granjas pequeñas, huertos, invernaderos y huertos frutales. Diseño ergonómico con profundidad de siembra ajustable. Ideal para agricultores pequeños y jardineros.",
            fr: "Le semoir manuel portatif est un outil de semis léger et portable pour les petites fermes, potagers, serres et vergers. Conception ergonomique avec profondeur de semis réglable.",
            ar: "البذارة اليدوية المحمولة هي أداة زراعة خفيفة الوزن للمزارع الصغيرة والحدائق والدفيئات. تصميم مريح مع عمق زراعة قابل للتعديل.",
            ru: "Ручная сеялка - легкий портативный инструмент для посева на малых фермах, в огородах и теплицах. Эргономичный дизайн с регулируемой глубиной посева.",
            pt: "A semeadeira manual portátil é uma ferramenta de plantio leve e portátil para pequenas fazendas, hortas e estufas. Design ergonômico com profundidade de plantio ajustável."
        },
        features: {
            en: [
                "Lightweight and portable design for easy operation",
                "Ergonomic handle for comfortable extended use",
                "Adjustable seeding depth for different seed types",
                "Suitable for vegetables, grains, flowers, and herbs",
                "Three models: FR-VPS (standard), FR-HHN (heavy-duty), FR-HHD (heavy-duty with larger hopper)",
                "Compact size for easy storage and transport",
                "High loading capacity: 1200-1500pcs per container",
                "Durable construction for long service life",
                "Ideal for small farms, home gardens, greenhouses, and orchards"
            ],
            es: [
                "Diseño ligero y portátil",
                "Mango ergonómico para uso prolongado",
                "Profundidad de siembra ajustable",
                "Adecuado para verduras, granos y flores",
                "Tres modelos disponibles",
                "Tamaño compacto para fácil almacenamiento",
                "Alta capacidad de carga",
                "Construcción duradera"
            ],
            fr: [
                "Conception légère et portable",
                "Poignée ergonomique",
                "Profondeur de semis réglable",
                "Convient aux légumes, céréales et fleurs",
                "Trois modèles disponibles",
                "Taille compacte",
                "Haute capacité de chargement",
                "Construction durable"
            ],
            ar: [
                "تصميم خفيف ومحمول",
                "مقبض مريح للاستخدام المطول",
                "عمق زراعة قابل للتعديل",
                "مناسب للخضروات والحبوب والزهور",
                "ثلاثة موديلات متوفرة",
                "حجم مضغوط للتخزين السهل",
                "سعة تحميل عالية",
                "بناء متين"
            ],
            ru: [
                "Легкая и портативная конструкция",
                "Эргономичная ручка",
                "Регулируемая глубина посева",
                "Подходит для овощей, зерновых и цветов",
                "Три модели",
                "Компактный размер",
                "Высокая загрузочная способность",
                "Прочная конструкция"
            ],
            pt: [
                "Design leve e portátil",
                "Cabo ergonômico",
                "Profundidade de plantio ajustável",
                "Adequado para vegetais, grãos e flores",
                "Três modelos disponíveis",
                "Tamanho compacto",
                "Alta capacidade de carga",
                "Construção durável"
            ]
        },
        specs: {
            en: {
                "Models": "FR-VPS / FR-HHN / FR-HHD",
                "Net Weight": "1.5kg / 2.0kg / 2.35kg",
                "Gross Weight": "1.8kg / 2.25kg / 2.6kg",
                "Dimensions": "150×150×820mm / 150×150×820mm / 200×140×820mm",
                "Container Loading": "1500pcs / 3680pcs (20ft) / 1500pcs / 3680pcs (20ft) / 1200pcs / 2950pcs (20ft)",
                "Application": "Vegetables, grains, flowers, herbs",
                "Type": "Manual push seeder",
                "Features": "Adjustable depth, ergonomic handle"
            },
            es: {
                "Modelos": "FR-VPS / FR-HHN / FR-HHD",
                "Peso neto": "1.5kg / 2.0kg / 2.35kg",
                "Peso bruto": "1.8kg / 2.25kg / 2.6kg",
                "Dimensiones": "150×150×820mm / 150×150×820mm / 200×140×820mm",
                "Carga en contenedor": "1500pcs / 3680pcs (20ft) / 1500pcs / 3680pcs (20ft) / 1200pcs / 2950pcs (20ft)",
                "Aplicación": "Verduras, granos, flores, hierbas",
                "Tipo": "Sembradora manual de empuje"
            },
            fr: {
                "Modèles": "FR-VPS / FR-HHN / FR-HHD",
                "Poids net": "1.5kg / 2.0kg / 2.35kg",
                "Poids brut": "1.8kg / 2.25kg / 2.6kg",
                "Dimensions": "150×150×820mm / 150×150×820mm / 200×140×820mm",
                "Chargement conteneur": "1500pcs / 3680pcs (20ft) / 1500pcs / 3680pcs (20ft) / 1200pcs / 2950pcs (20ft)",
                "Application": "Légumes, céréales, fleurs, herbes",
                "Type": "Semoir manuel à pousser"
            },
            ar: {
                "الموديلات": "FR-VPS / FR-HHN / FR-HHD",
                "الوزن الصافي": "1.5 كجم / 2.0 كجم / 2.35 كجم",
                "الوزن الإجمالي": "1.8 كجم / 2.25 كجم / 2.6 كجم",
                "الأبعاد": "150×150×820 ملم / 150×150×820 ملم / 200×140×820 ملم",
                "تحميل الحاوية": "1500 قطعة / 3680 قطعة (20 قدم) / 1500 قطعة / 3680 قطعة (20 قدم) / 1200 قطعة / 2950 قطعة (20 قدم)",
                "التطبيق": "خضروات، حبوب، زهور، أعشاب",
                "النوع": "بذارة دفع يدوية"
            },
            ru: {
                "Модели": "FR-VPS / FR-HHN / FR-HHD",
                "Вес нетто": "1.5кг / 2.0кг / 2.35кг",
                "Вес брутто": "1.8кг / 2.25кг / 2.6кг",
                "Размеры": "150×150×820мм / 150×150×820мм / 200×140×820мм",
                "Загрузка контейнера": "1500шт / 3680шт (20ft) / 1500шт / 3680шт (20ft) / 1200шт / 2950шт (20ft)",
                "Применение": "Овощи, зерновые, цветы, травы",
                "Тип": "Ручная толкающая сеялка"
            },
            pt: {
                "Modelos": "FR-VPS / FR-HHN / FR-HHD",
                "Peso líquido": "1.5kg / 2.0kg / 2.35kg",
                "Peso bruto": "1.8kg / 2.25kg / 2.6kg",
                "Dimensões": "150×150×820mm / 150×150×820mm / 200×140×820mm",
                "Carga no contêiner": "1500pcs / 3680pcs (20ft) / 1500pcs / 3680pcs (20ft) / 1200pcs / 2950pcs (20ft)",
                "Aplicação": "Vegetais, grãos, flores, ervas",
                "Tipo": "Semeadeira manual de empurrar"
            }
        },
        inquiry: {
            minOrder: "50 units",
            leadTime: "15-20 days",
            warranty: "6 months",
            moq: "20 units",
            shipping: "FOB Qingdao / CIF available",
            application: "Small farms, home gardens, greenhouses, orchards, vegetable planting, horticulture"
        }
    },
];

// ============================================================
//  导出数据供其他页面使用
// ============================================================
window.ProductsData = {
    categories: Categories,
    subCategories: SubCategories,
    products: Products,
    categoryIcons: CategoryIcons,
    subCategoryIcons: SubCategoryIcons,
    
    // 获取一级分类名称
    getCategoryName: function(categoryKey, lang) {
        if (this.categories[categoryKey] && this.categories[categoryKey][lang]) {
            return this.categories[categoryKey][lang];
        }
        return this.categories[categoryKey]?.en || categoryKey;
    },
    
    // 获取二级分类名称
    getSubCategoryName: function(subKey, lang) {
        if (this.subCategories[subKey] && this.subCategories[subKey][lang]) {
            return this.subCategories[subKey][lang];
        }
        return this.subCategories[subKey]?.en || subKey;
    },
    
    // 获取产品多语言字段
    getLocalized: function(product, field, lang) {
        if (product[field] && product[field][lang]) {
            return product[field][lang];
        }
        return product[field]?.en || '';
    },
    
    // 按一级分类获取产品
    getProductsByCategory: function(categoryKey) {
        if (categoryKey === 'all') return this.products;
        return this.products.filter(p => p.category === categoryKey);
    },
    
    // 按二级分类获取产品
    getProductsBySubCategory: function(subKey) {
        if (subKey === 'all') return this.products;
        return this.products.filter(p => p.subCategory === subKey);
    },
    
    // 根据ID获取产品
    getProductById: function(id) {
        return this.products.find(p => p.id === id);
    },
    
    // 获取所有一级分类
    getAllCategories: function() {
        return Object.keys(this.categories);
    },
    
    // 获取所有二级分类
    getAllSubCategories: function() {
        return Object.keys(this.subCategories);
    },
    
    // 获取某个一级分类下的所有二级分类
    getSubCategoriesForCategory: function(categoryKey) {
        const subs = new Set();
        this.products
            .filter(p => p.category === categoryKey && p.subCategory)
            .forEach(p => subs.add(p.subCategory));
        return Array.from(subs);
    }
};