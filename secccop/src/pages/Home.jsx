import { Link } from "react-router-dom";
import courses from "../data/courses";
import Card from "../components/Card";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);
  
  // Estadísticas de SECCOP
  const stats = [
    { icon: "fas fa-users", number: "1,500+", label: "Estudiantes formados" },
    { icon: "fas fa-book", number: "6+", label: "Cursos especializados" },
    { icon: "fas fa-star", number: "4.7", label: "Calificación promedio" },
    { icon: "fas fa-trophy", number: "92%", label: "Tasa de satisfacción" }
  ];

  // Imágenes para el carrusel del hero
  const heroImages = [
    {
      src: "/images/Seccop.webp",
      alt: "SECCOP - Centro de Capacitación Profesional"
    },
    {
      src: "/images/Lengua de señas/LenguaDeSeñas.webp",
      alt: "Curso de Lengua de Señas Ecuatoriana - SECCOP"
    },
    {
      src: "/images/Fomix/Fomix.webp",
      alt: "Taller de Arte en Fomix - Emprendimiento Creativo"
    },
    {
      src: "/images/Globos/globos.webp",
      alt: "Decoración de Eventos con Globos - Curso Práctico"
    },
    {
      src: "/images/Porcelana/Porcelana.webp",
      alt: "Pintura en Porcelana - Arte y Tradición"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-graduation-cap"></i> Servicio Ecuatoriano de Capacitación por Competencias Profesionales
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Adquiere las competencias 
                  <span className="text-blue-600"> profesionales que necesitas</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Somos una empresa que brinda servicios de <strong className="text-blue-600">asesoría y capacitación personalizada</strong> a empresas 
                  y público en general. Ofrecemos cursos regulares e intensivos en modalidades online y presencial.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/cursos"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <i className="fas fa-graduation-cap"></i>
                  Explorar cursos
                </Link>
                <Link
                  to="/asesoria"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <i className="fas fa-briefcase"></i>
                  Solicitar asesoría
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-0">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-1 text-blue-600">
                      <i className={stat.icon}></i>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative lg:mt-[-2rem]">
              <div className="relative h-96 lg:h-[500px]">
                <ImageCarousel 
                  images={heroImages} 
                  interval={5000}
                  className="h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conoce SECCOP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una institución comprometida con la formación integral y el desarrollo profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Quiénes Somos */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-4xl text-blue-600 mb-6">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Quiénes Somos?</h3>
              <p className="text-gray-700 leading-relaxed">
                Somos una empresa que brinda servicios de asesoría y capacitación personalizada a empresas 
                y público en general. Contamos con metodologías validadas a nivel nacional y la experiencia 
                suficiente para garantizar la calidad de nuestros servicios.
              </p>
            </div>

            {/* Misión */}
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-4xl text-amber-600 mb-6">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Brindar soluciones de capacitación que permitan acceder a más y mejores oportunidades laborales 
                a través de programas de formación inclusiva que faciliten la adquisición de competencias 
                necesarias para desempeñarse con éxito en el ámbito laboral.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="text-4xl text-red-600 mb-6">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la institución líder en formación por competencias profesionales en Ecuador, 
                reconocida por la calidad de nuestros servicios educativos y nuestro compromiso 
                con el desarrollo integral de las personas.
              </p>
            </div>
          </div>

          {/* Público Objetivo */}
          <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Nuestros Servicios están Dirigidos a:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "fas fa-users", title: "Personas en general", desc: "Que deseen adquirir nuevas competencias" },
                { icon: "fas fa-building", title: "Empresas", desc: "Que requieran capacitación especializada" },
                { icon: "fas fa-graduation-cap", title: "Estudiantes", desc: "En busca de formación complementaria" },
                { icon: "fas fa-briefcase", title: "Profesionales", desc: "Que busquen actualizar sus conocimientos" }
              ].map((target, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl mb-3 text-blue-600">
                    <i className={target.icon}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{target.title}</h4>
                  <p className="text-gray-600 text-sm">{target.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con metodologías validadas a nivel nacional y la experiencia necesaria para garantizar la calidad de nuestros servicios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-bullseye",
                title: "Formación por Competencias",
                description: "Programas de formación inclusiva que permiten adquirir competencias necesarias para desempeñarse con éxito en el ámbito laboral.",
                color: "blue"
              },
              {
                icon: "fas fa-building",
                title: "Modalidades Flexibles",
                description: "Ofrecemos cursos regulares e intensivos tanto en modalidad online como presencial, adaptados a tus necesidades.",
                color: "red"
              },
              {
                icon: "fas fa-star",
                title: "Metodologías Validadas",
                description: "Utilizamos metodologías validadas a nivel nacional y variadas para el logro de los objetivos de aprendizaje.",
                color: "yellow"
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 text-blue-600">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cursos destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conoce nuestros programas especializados diseñados para que puedas acceder a más y mejores oportunidades laborales
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <div key={course.id} className="relative">
                <Card course={course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver todos los cursos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Listo para adquirir nuevas competencias?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Brindamos soluciones de capacitación que permiten acceder a más y mejores oportunidades laborales
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/cursos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-graduation-cap"></i>
                Comenzar ahora
              </Link>
              <Link
                to="/asesoria"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-comments"></i>
                Hablar con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
