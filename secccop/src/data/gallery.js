const galleryData = [
  {
    id: 1,
    category: "Lengua de Señas Ecuatoriana",
    icon: "fas fa-hands",
    color: "blue",
    description: "Aprende comunicación inclusiva con la Lengua de Señas Ecuatoriana",
    images: [
      {
        id: 1,
        src: "/images/Lengua de señas/Galeria/1.webp",
        alt: "Clase práctica de LSEC",
        title: "Sesión de aprendizaje"
      },
      {
        id: 2,
        src: "/images/Lengua de señas/Galeria/2.webp",
        alt: "Estudiantes practicando señas",
        title: "Práctica grupal"
      },
      {
        id: 3,
        src: "/images/Lengua de señas/Galeria/3.webp",
        alt: "Instructor enseñando LSEC",
        title: "Metodología especializada"
      },
      {
        id: 4,
        src: "/images/Lengua de señas/Galeria/4.webp",
        alt: "Material didáctico LSEC",
        title: "Recursos de aprendizaje"
      },
      {
        id: 5,
        src: "/images/Lengua de señas/Galeria/5.webp",
        alt: "Evaluación práctica",
        title: "Certificación oficial"
      },
      {
        id: 6,
        src: "/images/Lengua de señas/Galeria/6.webp",
        alt: "Graduación LSEC",
        title: "Logros alcanzados"
      }
    ]
  },
  {
    id: 2,
    category: "Decoración con Globos",
    icon: "fas fa-birthday-cake",
    color: "pink",
    description: "Convierte eventos en experiencias mágicas con decoraciones profesionales",
    images: [
      {
        id: 7,
        src: "/images/Globos/Galeria/1.webp",
        alt: "Arco orgánico de globos",
        title: "Arcos decorativos"
      },
      {
        id: 8,
        src: "/images/Globos/Galeria/2.webp",
        alt: "Columnas de globos",
        title: "Estructuras verticales"
      },
      {
        id: 9,
        src: "/images/Globos/Galeria/3.webp",
        alt: "Decoración de eventos",
        title: "Ambientación completa"
      },
      {
        id: 10,
        src: "/images/Globos/Galeria/4.webp",
        alt: "Técnicas de globoflexia",
        title: "Arte en globos"
      }
    ]
  },
  {
    id: 3,
    category: "Arte en Fomix",
    icon: "fas fa-palette",
    color: "purple",
    description: "Crea figuras artísticas únicas con técnicas profesionales de moldeo",
    images: [
      {
        id: 11,
        src: "/images/Fomix/Galeria/1.webp",
        alt: "Figuras en fomix",
        title: "Creaciones artísticas"
      },
      {
        id: 12,
        src: "/images/Fomix/Galeria/2.webp",
        alt: "Técnicas de termo formado",
        title: "Proceso de moldeo"
      },
      {
        id: 13,
        src: "/images/Fomix/Galeria/3.webp",
        alt: "Pintura en fomix",
        title: "Acabados profesionales"
      },
      {
        id: 14,
        src: "/images/Fomix/Galeria/4.webp",
        alt: "Proyectos terminados",
        title: "Resultados finales"
      },
      {
        id: 15,
        src: "/images/Fomix/Galeria/5.webp",
        alt: "Decoración artística",
        title: "Detalles únicos"
      }
    ]
  },
  {
    id: 4,
    category: "Porcelana Fría",
    icon: "fas fa-shapes",
    color: "emerald",
    description: "Domina las técnicas de modelado para crear piezas decorativas extraordinarias",
    images: [
      {
        id: 16,
        src: "/images/Porcelana/Galeria/1.webp",
        alt: "Modelado básico",
        title: "Técnicas fundamentales"
      },
      {
        id: 17,
        src: "/images/Porcelana/Galeria/2.webp",
        alt: "Figuras en porcelana",
        title: "Creaciones detalladas"
      },
      {
        id: 18,
        src: "/images/Porcelana/Galeria/3.webp",
        alt: "Texturizado avanzado",
        title: "Acabados especializados"
      },
      {
        id: 19,
        src: "/images/Porcelana/Galeria/4.webp",
        alt: "Pintura decorativa",
        title: "Arte en color"
      },
      {
        id: 20,
        src: "/images/Porcelana/Galeria/5.webp",
        alt: "Proyectos creativos",
        title: "Inspiración artística"
      },
      {
        id: 21,
        src: "/images/Porcelana/Galeria/6.webp",
        alt: "Obras terminadas",
        title: "Masterpieces"
      }
    ]
  },
  {
    id: 5,
    category: "Moldes en Silicón",
    icon: "fas fa-tools",
    color: "amber",
    description: "Aprende técnicas profesionales para fabricar moldes de alta calidad",
    images: [
      {
        id: 22,
        src: "/images/Silicon/Galeria/1.webp",
        alt: "Preparación de moldes",
        title: "Proceso técnico"
      },
      {
        id: 23,
        src: "/images/Silicon/Galeria/2.webp",
        alt: "Moldes 3D",
        title: "Diseños complejos"
      },
      {
        id: 24,
        src: "/images/Silicon/Galeria/3.webp",
        alt: "Técnicas de vaciado",
        title: "Métodos profesionales"
      },
      {
        id: 25,
        src: "/images/Silicon/Galeria/4.webp",
        alt: "Herramientas especializadas",
        title: "Equipamiento técnico"
      },
      {
        id: 26,
        src: "/images/Silicon/Galeria/5.webp",
        alt: "Réplicas terminadas",
        title: "Resultados perfectos"
      }
    ]
  }
];

// Función para obtener todas las imágenes
export const getAllImages = () => {
  return galleryData.flatMap(category => 
    category.images.map(image => ({
      ...image,
      category: category.category,
      categoryColor: category.color,
      categoryIcon: category.icon
    }))
  );
};

// Función para obtener imágenes por categoría
export const getImagesByCategory = (categoryName) => {
  const category = galleryData.find(cat => cat.category === categoryName);
  return category ? category.images : [];
};

// Función para obtener categorías
export const getCategories = () => {
  return galleryData.map(cat => ({
    id: cat.id,
    name: cat.category,
    icon: cat.icon,
    color: cat.color,
    description: cat.description,
    imageCount: cat.images.length
  }));
};

export default galleryData;
