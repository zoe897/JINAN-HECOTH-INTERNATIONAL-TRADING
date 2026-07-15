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
        image: "/image/telescopic handler.png",
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