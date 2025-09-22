const courses = [
  {
    id: 1,
    title: "Lengua de Señas Ecuatoriana - Online",
    shortDescription: "Formación profesional completa en Lengua de Señas Ecuatoriana con certificación oficial del Ministerio de Educación. Modalidad 100% virtual con plataforma interactiva, manual digital y acompañamiento de instructores especializados para desarrollar competencias comunicativas inclusivas.",
    longDescription: "Programa integral de formación en Lengua de Señas Ecuatoriana (LSEC) en modalidad virtual, diseñado según los estándares del Ministerio de Educación. Desarrolla competencias comunicativas para la inclusión social y laboral, con metodología interactiva y evaluación continua. Ideal para profesionales de educación, salud, servicio al cliente y personas comprometidas con la inclusión.",
    topics: [
      "Fundamentos históricos y culturales de la comunidad sorda ecuatoriana",
      "Sistema dactilológico y configuraciones manuales básicas",
      "Vocabulario esencial: familia, trabajo, tiempo y espacios",
      "Estructura gramatical específica de la LSEC",
      "Expresiones faciales y corporales como elementos lingüísticos",
      "Conversación contextualizada en situaciones cotidianas y profesionales",
      "Interpretación básica y mediación comunicativa",
      "Marco legal de los derechos de las personas sordas en Ecuador"
    ],
    duration: "3 módulos",
    level: "Principiante",
    price: "$40",
    originalPrice: "$50",
    discount: "20%",
    rating: 4.9,
    students: 850,
    category: "Comunicación",
    icon: "fas fa-hands",
    featured: true,
    instructor: "Especialistas LSEC",
    courseContent: [
      { title: "Módulo 1: Fundamentos de la LSEC", lessons: 6, duration: "8h", topics: ["Historia y cultura sorda", "Dactilología básica", "Configuraciones manuales", "Vocabulario esencial"] },
      { title: "Módulo 2: Comunicación Intermedia", lessons: 8, duration: "12h", topics: ["Gramática LSEC", "Expresiones faciales", "Conversación básica", "Contextos familiares"] },
      { title: "Módulo 3: Aplicación Profesional", lessons: 10, duration: "15h", topics: ["Vocabulario especializado", "Interpretación básica", "Marco legal", "Práctica en contextos reales"] }
    ],
    requirements: [
      "Acceso a internet estable para clases virtuales",
      "Dispositivo con cámara web funcional (para práctica de señas)",
      "Disponibilidad de tiempo para práctica diaria (30 min mínimo)",
      "Actitud de respeto hacia la cultura sorda",
      "Compromiso con el aprendizaje continuo"
    ],
    image: "/images/Lengua de señas/LenguaDeSeñas.webp",
    gallery: [
      "/images/Lengua de señas/Galeria/1.webp",
      "/images/Lengua de señas/Galeria/2.webp",
      "/images/Lengua de señas/Galeria/3.webp",
      "/images/Lengua de señas/Galeria/4.webp",
      "/images/Lengua de señas/Galeria/5.webp",
      "/images/Lengua de señas/Galeria/6.webp"
    ],
    modality: "Online",
    schedule: [
      "Nocturno: L-V 19:00-20:00 (Inicio: 8 sep)",
      "Vespertino: Dom 13:00-15:00 (Inicio: 14 sep)",
      "Intensivo: Mié 18:00-19:30 (Inicio: 3 sep)"
    ],
    includes: ["Manual digital", "Plataforma virtual", "Certificación oficial"],
    certification: "Aval académico Ministerio de Educación"
  },
  {
    id: 2,
    title: "Lengua de Señas Ecuatoriana - Presencial Quito",
    shortDescription: "Capacitación presencial intensiva en Lengua de Señas Ecuatoriana con instructores certificados en nuestras instalaciones de Quito. Incluye práctica directa con la comunidad sorda, material didáctico completo y certificación con aval del Ministerio de Educación válida para concursos públicos.",
    longDescription: "Programa presencial de capacitación en Lengua de Señas Ecuatoriana con énfasis en la práctica interactiva y el aprendizaje colaborativo. Incluye simulacros de situaciones reales, intercambio con la comunidad sorda y desarrollo de habilidades de interpretación básica. Certificación oficial con reconocimiento para el sector público y privado ecuatoriano.",
    topics: [
      "Inmersión cultural: historia y identidad de la comunidad sorda ecuatoriana",
      "Técnicas de expresión manual y configuraciones específicas de la LSEC",
      "Vocabulario especializado por campos: salud, educación, servicios públicos",
      "Sintaxis y morfología de la lengua de señas ecuatoriana",
      "Práctica conversacional con personas sordas nativas",
      "Desarrollo de competencias interpretativas básicas",
      "Aplicación en contextos laborales y sociales ecuatorianos",
      "Tecnologías de apoyo y recursos digitales para personas sordas"
    ],
    duration: "3 módulos",
    level: "Principiante",
    price: "$50",
    originalPrice: "$60",
    discount: "17%",
    rating: 4.8,
    students: 320,
    category: "Comunicación",
    icon: "fas fa-hands",
    featured: true,
    instructor: "Instructores certificados LSEC",
    courseContent: [
      { title: "Módulo 1: Inmersión Cultural", lessons: 4, duration: "6h", topics: ["Identidad sorda ecuatoriana", "Comunicación no verbal", "Dactilología práctica", "Interacción básica"] },
      { title: "Módulo 2: Desarrollo Lingüístico", lessons: 6, duration: "9h", topics: ["Sintaxis LSEC", "Vocabulario contextual", "Práctica conversacional", "Corrección de errores"] },
      { title: "Módulo 3: Competencia Comunicativa", lessons: 8, duration: "12h", topics: ["Interpretación práctica", "Mediación comunicativa", "Aplicación laboral", "Evaluación final"] }
    ],
    requirements: [
      "Asistencia presencial obligatoria en Quito",
      "Puntualidad en todas las sesiones (tolerancia 10 min)",
      "Participación activa en dinámicas grupales",
      "Respeto hacia compañeros y instructores sordos",
      "Compromiso con la práctica entre sesiones"
    ],
    image: "/images/Lengua de señas/LenguaDeSeñas.webp",
    gallery: [
      "/images/Lengua de señas/Galeria/1.webp",
      "/images/Lengua de señas/Galeria/2.webp",
      "/images/Lengua de señas/Galeria/3.webp",
      "/images/Lengua de señas/Galeria/4.webp",
      "/images/Lengua de señas/Galeria/5.webp",
      "/images/Lengua de señas/Galeria/6.webp"
    ],
    modality: "Presencial",
    schedule: ["Sábados 10:00-12:00 (Inicio: 20 sep)"],
    location: "Av. Luis Saa y Sodiro, Parque La Alameda, Edificio Daniel Cadena",
    includes: ["3 módulos completos", "Material para cada clase", "Plataforma de apoyo"],
    certification: "Aval académico Ministerio de Educación"
  },
  {
    id: 3,
    title: "Decoración de Eventos con Globos",
    shortDescription: "Curso intensivo de decoración profesional para eventos corporativos y sociales. Aprende técnicas avanzadas de globoflexia, construcción de arcos orgánicos y diseño creativo. Incluye todos los materiales, certificación avalizada y herramientas para iniciar tu propio emprendimiento en el sector de eventos.",
    longDescription: "Programa intensivo de formación en artes decorativas especializadas en globoflexia y ornamentación de eventos. Desarrolla competencias técnicas para el diseño, planificación y ejecución de decoraciones profesionales. Incluye fundamentos de emprendimiento, costeo de servicios y marketing digital para el sector de eventos en Ecuador.",
    topics: [
      "Fundamentos del diseño decorativo y teoría del color aplicada",
      "Técnicas avanzadas de globoflexia y modelado de figuras",
      "Construcción de arcos orgánicos y estructuras geométricas",
      "Sistemas de anclaje y montaje para eventos exteriores e interiores",
      "Planificación y presupuestación de proyectos decorativos",
      "Gestión de proveedores y control de inventarios",
      "Marketing digital y redes sociales para servicios de decoración",
      "Normativas de seguridad en eventos y manejo de materiales"
    ],
    duration: "1 día intensivo",
    level: "Principiante",
    price: "$45",
    originalPrice: "$55",
    discount: "18%",
    rating: 4.7,
    students: 180,
    category: "Emprendimiento",
    icon: "fas fa-birthday-cake",
    featured: true,
    instructor: "Especialistas en decoración",
    courseContent: [
      { title: "Fundamentos del Diseño", lessons: 3, duration: "2h", topics: ["Teoría del color", "Planificación de eventos", "Herramientas básicas", "Medidas de seguridad"] },
      { title: "Técnicas de Construcción", lessons: 5, duration: "3h", topics: ["Arcos orgánicos", "Columnas decorativas", "Torres y estructuras", "Sistemas de anclaje"] },
      { title: "Globoflexia y Figuras", lessons: 4, duration: "2.5h", topics: ["Modelado básico", "Figuras animales", "Flores y formas", "Combinaciones creativas"] }
    ],
    requirements: [
      "No se requiere experiencia previa en decoración",
      "Disponibilidad para jornada intensiva completa (8 horas)",
      "Ropa cómoda y cerrada (evitar prendas delicadas)",
      "Uñas cortas para manejo seguro de globos",
      "Actitud emprendedora y creativa"
    ],
    image: "/images/Globos/globos.webp",
    gallery: [
      "/images/Globos/Galeria/1.webp",
      "/images/Globos/Galeria/2.webp",
      "/images/Globos/Galeria/3.webp",
      "/images/Globos/Galeria/4.webp"
    ],
    modality: "Presencial",
    schedule: ["Sábado 20 sep: 09:00-16:30 (Intensivo)"],
    location: "Quito, Luis Saa y Sodiro, La Alameda, Edificio Daniel Cadena, 9no piso",
    includes: ["Material de trabajo", "Certificado avalizado", "Garantía de aprendizaje"],
    certification: "Corporación de Apoyo Investigación Educativa Ecuatoriana",
    method: "100% práctico",
    reservation: "Reserva con $10, cupos limitados"
  },
  {
    id: 4,
    title: "Emprendimiento - Arte en Fomix",
    shortDescription: "Domina las técnicas profesionales de termoformado en foamy para crear figuras artísticas comercializables. Curso práctico de 2 días con material incluido, enfocado en el desarrollo de productos únicos para emprendimiento artesanal con alto potencial de mercado en Ecuador.",
    longDescription: "Programa de capacitación artística especializada en el trabajo con foamy (goma eva) utilizando técnicas de termoformado y moldeado profesional. Orientado al desarrollo de productos artesanales con valor comercial, incluyendo aspectos de emprendimiento, diseño de productos y canales de comercialización para el mercado ecuatoriano.",
    topics: [
      "Propiedades físicas y químicas del foamy: tipos y aplicaciones",
      "Técnicas de termoformado y moldeo en caliente controlado",
      "Diseño anatómico y proporciones para figuras artísticas",
      "Procesos de texturización y acabados superficiales",
      "Aplicación de pigmentos y técnicas de pintura especializada",
      "Desarrollo de líneas de productos y diseño de catálogos",
      "Análisis de costos y fijación de precios competitivos",
      "Estrategias de comercialización en ferias artesanales y plataformas digitales"
    ],
    duration: "2 días",
    level: "Principiante",
    price: "$30",
    originalPrice: "$40",
    discount: "25%",
    rating: 4.6,
    students: 95,
    category: "Emprendimiento",
    icon: "fas fa-palette",
    featured: false,
    instructor: "Lic. Mayra Pérez",
    courseContent: [
      { title: "Día 1: Fundamentos Técnicos", lessons: 4, duration: "4h", topics: ["Propiedades del foamy", "Herramientas especializadas", "Técnicas de corte", "Termoformado básico"] },
      { title: "Día 2: Creación Artística", lessons: 5, duration: "4h", topics: ["Diseño anatómico", "Moldeado avanzado", "Técnicas de pintura", "Acabados profesionales"] }
    ],
    image: "/images/Fomix/Fomix.webp",
    gallery: [
      "/images/Fomix/Galeria/1.webp",
      "/images/Fomix/Galeria/2.webp",
      "/images/Fomix/Galeria/3.webp",
      "/images/Fomix/Galeria/4.webp",
      "/images/Fomix/Galeria/5.webp"
    ],
    modality: "Presencial",
    schedule: [
      "Viernes 19 may: 09:00-13:00",
      "Domingo 21 may: 09:00-13:00"
    ],
    location: "Av. Luis Saa y Sodiro, Parque La Alameda, Edificio Daniel Cadena",
    includes: ["Material para proyecto", "Certificado avalizado"],
    method: "100% práctico",
    reservation: "Reserva cupo con $10"
  },
  {
    id: 5,
    title: "Modelado en Porcelana Fría",
    shortDescription: "Especialízate en modelado artístico utilizando pasta cerámica sin cocción para crear obras decorativas y souvenirs únicos. Combina técnicas tradicionales ecuatorianas con tendencias contemporáneas del mercado artesanal. Incluye material completo y certificado de participación.",
    longDescription: "Programa de formación artística especializada en el trabajo con porcelana fría (pasta cerámica sin cocción). Desarrolla competencias técnicas para la creación de piezas decorativas, souvenirs y objetos artísticos. Incluye técnicas tradicionales ecuatorianas adaptadas a tendencias contemporáneas del mercado artesanal nacional e internacional.",
    topics: [
      "Preparación y acondicionamiento de pasta cerámica sin cocción",
      "Técnicas de amasado y conservación del material",
      "Modelado de figuras: anatomía básica y proporciones artísticas",
      "Métodos de texturización y creación de superficies decorativas",
      "Aplicación de engobes y técnicas de policromía tradicional",
      "Procesos de secado controlado y acabados protectores",
      "Desarrollo de productos artesanales con identidad cultural ecuatoriana",
      "Empaque, conservación y comercialización de productos cerámicos"
    ],
    duration: "2-3 días",
    level: "Principiante",
    price: "$30",
    originalPrice: "$40",
    discount: "25%",
    rating: 4.5,
    students: 120,
    category: "Emprendimiento",
    icon: "fas fa-shapes",
    featured: false,
    instructor: "Artistas especialistas",
    courseContent: [
      { title: "Preparación de Materiales", lessons: 3, duration: "2h", topics: ["Tipos de pasta", "Preparación y amasado", "Herramientas básicas", "Conservación"] },
      { title: "Técnicas de Modelado", lessons: 6, duration: "4h", topics: ["Anatomía básica", "Proporciones", "Texturización", "Unión de piezas"] },
      { title: "Acabados y Decoración", lessons: 4, duration: "3h", topics: ["Técnicas de pintura", "Aplicación de engobes", "Secado controlado", "Protección final"] }
    ],
    image: "/images/Porcelana/Porcelana.webp",
    gallery: [
      "/images/Porcelana/Galeria/1.webp",
      "/images/Porcelana/Galeria/2.webp",
      "/images/Porcelana/Galeria/3.webp",
      "/images/Porcelana/Galeria/4.webp",
      "/images/Porcelana/Galeria/5.webp",
      "/images/Porcelana/Galeria/6.webp"
    ],
    modality: "Presencial",
    schedule: [
      "Mar 7 y Mié 8 nov: 09:00-11:30",
      "Sáb 11 nov: 08:00-12:00 (Intensivo)"
    ],
    location: "Av. Luis Saa y Sodiro, Parque La Alameda, Edificio Daniel Cadena",
    includes: ["Material completo", "Certificado de asistencia"],
    reservation: "Reserva con $10, paga resto al iniciar"
  },
  {
    id: 6,
    title: "Fabricación de Moldes en Silicón",
    shortDescription: "Capacitación técnica avanzada en fabricación de moldes industriales con caucho de silicón de grado profesional. Dirigido a emprendedores y artesanos que buscan escalar su producción. Incluye todos los materiales especializados, herramientas y procesos de control de calidad para reproducción en serie.",
    longDescription: "Programa técnico avanzado de fabricación de moldes flexibles utilizando caucho de silicón de grado industrial. Dirigido a emprendedores, artesanos y profesionales técnicos que requieren desarrollar capacidades de reproducción en serie para productos comerciales. Incluye aspectos de control de calidad, costos de producción y escalabilidad industrial.",
    topics: [
      "Propiedades químicas y físicas del caucho de silicón: tipos y especificaciones",
      "Diseño técnico de moldes: análisis de piezas y planificación de procesos",
      "Construcción de camas de moldeo y sistemas de contención",
      "Técnicas de mezclado y aplicación de catalizadores",
      "Procesos de vaciado controlado y eliminación de burbujas",
      "Fabricación de contramoldes y sistemas de ensamble",
      "Control de calidad: tolerancias y especificaciones técnicas",
      "Reproducción en resinas poliuretánicas y materiales termoplásticos",
      "Análisis de costos y viabilidad económica para producción en serie",
      "Normativas de seguridad industrial y manejo de químicos"
    ],
    duration: "10 horas pedagógicas",
    level: "Intermedio",
    price: "$150",
    originalPrice: "$180",
    discount: "17%",
    rating: 4.8,
    students: 75,
    category: "Técnico Especializado",
    icon: "fas fa-tools",
    featured: false,
    instructor: "Fausto Loachamin (Lic. Artes Plásticas)",
    courseContent: [
      { title: "Sábado: Fundamentos Técnicos", lessons: 5, duration: "5h", topics: ["Propiedades del silicón", "Diseño de moldes", "Preparación de materiales", "Construcción de camas"] },
      { title: "Domingo: Aplicación Práctica", lessons: 5, duration: "5h", topics: ["Vaciado controlado", "Contramoldes", "Control de calidad", "Reproducción en resina"] }
    ],
    image: "/images/Silicon/Silicon.webp",
    gallery: [
      "/images/Silicon/Galeria/1.webp",
      "/images/Silicon/Galeria/2.webp",
      "/images/Silicon/Galeria/3.webp",
      "/images/Silicon/Galeria/4.webp",
      "/images/Silicon/Galeria/5.webp"
    ],
    modality: "Presencial",
    schedule: ["Sáb 27 y Dom 28 jul: 09:00-13:00"],
    location: "Quito, oficinas SECCOP, Av. Gran Colombia y José Martí E4-10",
    includes: ["Materiales completos", "Caucho de silicón", "Réplicas en resina y yeso", "Herramientas especializadas"],
    certification: "Certificado de Participación",
    method: "100% práctico",
    discount_until: "20% descuento hasta 20 de julio"
  }
];

export default courses;
