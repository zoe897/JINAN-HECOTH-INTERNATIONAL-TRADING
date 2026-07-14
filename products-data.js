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
    }
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
    }
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
        image: "/images/tractor-tts.jpg",
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
        image: "/images/tractor-tte.jpg",
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
        image: "/images/disc-plough.jpg",
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
        image: "/images/disc-harrow.jpg",
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
        image: "/images/subsoiler.jpg",
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
        image: "/images/corn-seeder.jpg",
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
        image: "/images/spreader.jpg",
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
        image: "/images/cultivator.jpg",
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
    //  🌽 农机具 → 收获机械 (Harvesting Equipment)
    // ============================================================
    {
        id: "HV-001",
        category: "farm-machinery",
        subCategory: "harvesting",
        image: "/images/combine-harvester.jpg",
        name: {
            en: "Grain Combine Harvester",
            es: "Cosechadora Combinada de Granos",
            fr: "Moissonneuse-Batteuse",
            ar: "حصادة حبوب",
            ru: "Зерноуборочный комбайн",
            pt: "Colheitadeira Combinada de Grãos"
        },
        desc: {
            en: "High-efficiency combine harvester for wheat, rice, corn, and soybean. Advanced cleaning system for clean grain.",
            es: "Cosechadora combinada de alta eficiencia para trigo, arroz, maíz y soja. Sistema de limpieza avanzado para grano limpio.",
            fr: "Moissonneuse-batteuse à haut rendement pour blé, riz, maïs et soja. Système de nettoyage avancé pour un grain propre.",
            ar: "حصادة حبوب عالية الكفاءة للقمح والأرز والذرة وفول الصويا. نظام تنظيف متقدم للحبوب النظيفة.",
            ru: "Высокоэффективный зерноуборочный комбайн для пшеницы, риса, кукурузы и сои. Усовершенствованная система очистки.",
            pt: "Colheitadeira combinada de alta eficiência para trigo, arroz, milho e soja. Sistema de limpeza avançado para grãos limpos."
        },
        features: {
            en: ["High efficiency harvesting", "Advanced cleaning system", "Adjustable cutting height", "Large grain tank", "Comfortable cab"],
            es: ["Cosecha de alta eficiencia", "Sistema de limpieza avanzado", "Altura de corte ajustable", "Gran tanque de grano", "Cabina cómoda"],
            fr: ["Récolte à haut rendement", "Système de nettoyage avancé", "Hauteur de coupe réglable", "Grand réservoir à grains", "Cabine confortable"],
            ar: ["حصاد عالي الكفاءة", "نظام تنظيف متقدم", "ارتفاع قطع قابل للتعديل", "خزان حبوب كبير", "كابينة مريحة"],
            ru: ["Высокоэффективная уборка", "Усовершенствованная система очистки", "Регулируемая высота среза", "Большой зерновой бункер", "Удобная кабина"],
            pt: ["Colheita de alta eficiência", "Sistema de limpeza avançado", "Altura de corte ajustável", "Grande tanque de grãos", "Cabine confortável"]
        },
        specs: {
            en: {"Cutting Width": "2.5-4.5m", "Engine Power": "80-200HP", "Grain Tank": "2-4m³", "Weight": "4500-8000kg"},
            es: {"Ancho de corte": "2.5-4.5m", "Potencia": "80-200HP", "Tanque": "2-4m³", "Peso": "4500-8000kg"},
            fr: {"Largeur de coupe": "2.5-4.5m", "Puissance": "80-200HP", "Réservoir": "2-4m³", "Poids": "4500-8000kg"},
            ar: {"عرض القطع": "2.5-4.5 م", "القوة": "80-200 حصان", "الخزان": "2-4 م³", "الوزن": "4500-8000 كجم"},
            ru: {"Ширина среза": "2.5-4.5 м", "Мощность": "80-200 л.с.", "Бункер": "2-4 м³", "Вес": "4500-8000 кг"},
            pt: {"Largura de corte": "2.5-4.5m", "Potência": "80-200HP", "Tanque": "2-4m³", "Peso": "4500-8000kg"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "30-45 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  ✂️ 农机具 → 割草机械 (Mowing Equipment)
    // ============================================================
    {
        id: "MW-001",
        category: "farm-machinery",
        subCategory: "mowing",
        image: "/images/disc-mower.jpg",
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
        image: "/images/fertilizer-spreader.jpg",
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
        image: "/images/trailer.jpg",
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
        image: "/images/rotary-tiller.jpg",
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
        image: "/images/excavator-ht85w.jpg",
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
        id: "CM-002",
        category: "construction-machinery",
        subCategory: null,
        image: "/images/wheel-loader.jpg",
        name: {
            en: "Wheel Loader 3 Ton",
            es: "Cargadora de Ruedas 3 Toneladas",
            fr: "Chargeuse sur Pneus 3 Tonnes",
            ar: "محمل بعجلات 3 طن",
            ru: "Колёсный погрузчик 3 т",
            pt: "Carregadora sobre Rodas 3 Toneladas"
        },
        desc: {
            en: "Compact wheel loader for material handling in construction, farming, and landscaping. Reliable and easy to operate.",
            es: "Cargadora de ruedas compacta para manejo de materiales en construcción, agricultura y paisajismo. Confiable y fácil de operar.",
            fr: "Chargeuse sur pneus compacte pour la manutention de matériaux en construction, agriculture et paysagisme.",
            ar: "محمل بعجلات مدمج لمناولة المواد في البناء والزراعة وتنسيق الحدائق.",
            ru: "Компактный колёсный погрузчик для погрузочно-разгрузочных работ в строительстве, сельском хозяйстве и ландшафтном дизайне.",
            pt: "Carregadora sobre rodas compacta para manuseio de materiais em construção, agricultura e paisagismo."
        },
        features: {
            en: ["Powerful lifting capacity", "Compact design", "Easy operation", "Durable construction", "Versatile attachments"],
            es: ["Capacidad de elevación potente", "Diseño compacto", "Operación fácil", "Construcción duradera", "Accesorios versátiles"],
            fr: ["Puissante capacité de levage", "Conception compacte", "Utilisation facile", "Construction durable", "Accessoires polyvalents"],
            ar: ["قدرة رفع قوية", "تصميم مدمج", "تشغيل سهل", "بناء متين", "ملحقات متنوعة"],
            ru: ["Большая грузоподъемность", "Компактный дизайн", "Легкое управление", "Прочная конструкция", "Универсальные навески"],
            pt: ["Forte capacidade de elevação", "Design compacto", "Operação fácil", "Construção durável", "Acessórios versáteis"]
        },
        specs: {
            en: {"Bucket": "1.8m³", "Operating Weight": "5200kg", "Engine": "92HP", "Dump Height": "2.8m"},
            es: {"Cucharón": "1.8m³", "Peso": "5200kg", "Motor": "92HP", "Altura": "2.8m"},
            fr: {"Godet": "1.8m³", "Poids": "5200kg", "Moteur": "92HP", "Hauteur": "2.8m"},
            ar: {"الدلو": "1.8 م³", "الوزن": "5200 كجم", "المحرك": "92 حصان", "الارتفاع": "2.8 م"},
            ru: {"Ковш": "1.8 м³", "Вес": "5200 кг", "Двигатель": "92 л.с.", "Высота": "2.8 м"},
            pt: {"Caçamba": "1.8m³", "Peso": "5200kg", "Motor": "92HP", "Altura": "2.8m"}
        },
        inquiry: { minOrder: "1 unit", leadTime: "15-30 days", warranty: "12 months", moq: "1 unit" }
    },

    // ============================================================
    //  💧 灌溉设备 (Irrigation Equipment)
    // ============================================================
    {
        id: "IR-001",
        category: "irrigation",
        subCategory: null,
        image: "/images/drip-irrigation.jpg",
        name: {
            en: "Smart Drip Irrigation System",
            es: "Sistema de Riego por Goteo Inteligente",
            fr: "Système d'Irrigation Goutte-à-Goutte Intelligent",
            ar: "نظام ري ذكي بالتنقيط",
            ru: "Умная система капельного полива",
            pt: "Sistema de Irrigação por Gotejamento Inteligente"
        },
        desc: {
            en: "IoT-enabled smart drip irrigation system with remote monitoring and control. Save up to 40% water compared to traditional methods.",
            es: "Sistema de riego por goteo inteligente con monitoreo y control remoto. Ahorra hasta 40% de agua comparado con métodos tradicionales.",
            fr: "Système d'irrigation goutte-à-goutte intelligent avec surveillance et contrôle à distance. Économise jusqu'à 40% d'eau.",
            ar: "نظام ري ذكي بالتنقيط مع مراقبة وتحكم عن بعد. يوفر ما يصل إلى 40% من الماء مقارنة بالطرق التقليدية.",
            ru: "Умная система капельного полива с удаленным мониторингом и управлением. Экономит до 40% воды.",
            pt: "Sistema de irrigação por gotejamento inteligente com monitoramento e controle remoto. Economiza até 40% de água."
        },
        features: {
            en: ["WiFi/4G remote control", "Soil moisture sensors", "Precise water delivery", "Timer and scheduler", "Water saving up to 40%"],
            es: ["Control remoto WiFi/4G", "Sensores de humedad del suelo", "Entrega precisa de agua", "Temporizador", "Ahorro de agua hasta 40%"],
            fr: ["Contrôle à distance WiFi/4G", "Capteurs d'humidité du sol", "Distribution précise de l'eau", "Minuteur", "Économie d'eau jusqu'à 40%"],
            ar: ["تحكم عن بعد WiFi/4G", "مستشعرات رطوبة التربة", "توصيل دقيق للماء", "مؤقت وجدولة", "توفير ماء يصل إلى 40%"],
            ru: ["Удаленное управление WiFi/4G", "Датчики влажности почвы", "Точная подача воды", "Таймер и планировщик", "Экономия воды до 40%"],
            pt: ["Controle remoto WiFi/4G", "Sensores de umidade do solo", "Entrega precisa de água", "Temporizador", "Economia de água até 40%"]
        },
        specs: {
            en: {"Flow Rate": "2L/h per emitter", "Pressure": "1-4 bar", "Filter": "120 mesh", "Controller": "WiFi/4G"},
            es: {"Caudal": "2L/h por gotero", "Presión": "1-4 bar", "Filtro": "120 mallas", "Controlador": "WiFi/4G"},
            fr: {"Débit": "2L/h par goutteur", "Pression": "1-4 bar", "Filtre": "120 mailles", "Contrôleur": "WiFi/4G"},
            ar: {"معدل التدفق": "2 لتر/ساعة لكل منقط", "الضغط": "1-4 بار", "الفلتر": "120 شبكة", "التحكم": "WiFi/4G"},
            ru: {"Расход": "2 л/ч на один эмиттер", "Давление": "1-4 бар", "Фильтр": "120 меш", "Контроллер": "WiFi/4G"},
            pt: {"Vazão": "2L/h por emissor", "Pressão": "1-4 bar", "Filtro": "120 malhas", "Controlador": "WiFi/4G"}
        },
        inquiry: { minOrder: "1000 meters", leadTime: "15-30 days", warranty: "12 months", moq: "500 meters" }
    },
    {
        id: "IR-002",
        category: "irrigation",
        subCategory: null,
        image: "/images/sprayer-lithium.jpg",
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
    //  🔧 配件 (Spare Parts)
    // ============================================================
    {
        id: "PT-001",
        category: "parts",
        subCategory: null,
        image: "/images/tractor-parts.jpg",
        name: {
            en: "Tractor Spare Parts Kit",
            es: "Kit de Repuestos para Tractor",
            fr: "Kit de Pièces Détachées pour Tracteur",
            ar: "طقم قطع غيار الجرار",
            ru: "Комплект запасных частей для трактора",
            pt: "Kit de Peças de Reposição para Trator"
        },
        desc: {
            en: "Complete spare parts kit for tractors including filters, clutch discs, brake pads, and bearings. OEM quality guaranteed.",
            es: "Kit completo de repuestos para tractores incluyendo filtros, discos de embrague, pastillas de freno y rodamientos.",
            fr: "Kit complet de pièces détachées pour tracteurs comprenant filtres, disques d'embrayage, plaquettes de frein et roulements.",
            ar: "طقم قطع غيار كامل للجرارات يشمل الفلاتر وأقراص القابض ووسائد الفرامل والمحامل.",
            ru: "Полный комплект запасных частей для тракторов, включая фильтры, диски сцепления, тормозные колодки и подшипники.",
            pt: "Kit completo de peças de reposição para tratores incluindo filtros, discos de embreagem, pastilhas de freio e rolamentos."
        },
        features: {
            en: ["OEM quality", "Comprehensive kit", "Easy installation", "Durable materials", "Wide compatibility"],
            es: ["Calidad OEM", "Kit completo", "Instalación fácil", "Materiales duraderos", "Amplia compatibilidad"],
            fr: ["Qualité OEM", "Kit complet", "Installation facile", "Matériaux durables", "Large compatibilité"],
            ar: ["جودة OEM", "طقم شامل", "تركيب سهل", "مواد متينة", "توافق واسع"],
            ru: ["Качество OEM", "Комплектный набор", "Легкая установка", "Прочные материалы", "Широкая совместимость"],
            pt: ["Qualidade OEM", "Kit abrangente", "Instalação fácil", "Materiais duráveis", "Ampla compatibilidade"]
        },
        specs: {
            en: {"Includes": "Filters, Clutch, Brake pads, Bearings", "Compatibility": "JD, Farmtrac, Mahindra", "Quality": "OEM Standard"},
            es: {"Incluye": "Filtros, Embrague, Pastillas, Rodamientos", "Compatibilidad": "JD, Farmtrac, Mahindra", "Calidad": "Estándar OEM"},
            fr: {"Comprend": "Filtres, Embrayage, Plaquettes, Roulements", "Compatibilité": "JD, Farmtrac, Mahindra", "Qualité": "Standard OEM"},
            ar: {"يتضمن": "فلاتر، قابض، وسائد، محامل", "التوافق": "JD، Farmtrac، Mahindra", "الجودة": "معيار OEM"},
            ru: {"Включает": "Фильтры, Сцепление, Колодки, Подшипники", "Совместимость": "JD, Farmtrac, Mahindra", "Качество": "Стандарт OEM"},
            pt: {"Inclui": "Filtros, Embreagem, Pastilhas, Rolamentos", "Compatibilidade": "JD, Farmtrac, Mahindra", "Qualidade": "Padrão OEM"}
        },
        inquiry: { minOrder: "5 kits", leadTime: "15-30 days", warranty: "6 months", moq: "5 kits" }
    }
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