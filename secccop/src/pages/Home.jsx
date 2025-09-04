import { Link } from "react-router-dom";
import courses from "../data/courses";
import Card from "../components/Card";

export default function Home() {
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);
  const stats = [
    { icon: "👥", number: "1,500+", label: "Estudiantes formados" },
    { icon: "📚", number: "6+", label: "Cursos especializados" },
    { icon: "⭐", number: "4.7", label: "Calificación promedio" },
    { icon: "🏆", number: "92%", label: "Tasa de satisfacción" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Plataforma líder en capacitación profesional
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Desarrolla nuevas 
                  <span className="text-blue-600"> habilidades profesionales</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  En <strong className="text-blue-600">SECCOP</strong> ofrecemos capacitación especializada en 
                  Lengua de Señas Ecuatoriana, artes, oficios y técnicas profesionales para 
                  impulsar tu crecimiento personal y profesional.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/cursos"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🎓 Explorar cursos
                </Link>
                <Link
                  to="/asesoria"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  💼 Solicitar asesoría
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-red-600 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="text-6xl">🎯</div>
                    <h3 className="text-2xl font-bold">Aprende con los mejores</h3>
                    <p className="text-red-100">Más de 10 años formando profesionales</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir SECCOP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos formación especializada con metodologías prácticas, certificaciones oficiales y horarios flexibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤟",
                title: "Lengua de Señas Ecuatoriana",
                description: "Cursos certificados de LSEC con aval del Ministerio de Educación, modalidad presencial y online.",
                color: "blue"
              },
              {
                icon: "�",
                title: "Artes y Oficios",
                description: "Formación práctica en decoración con globos, porcelana fría, fomix y técnicas artísticas especializadas.",
                color: "red"
              },
              {
                icon: "�",
                title: "Técnicas Especializadas",
                description: "Cursos técnicos de fabricación de moldes, emprendimiento y habilidades aplicables a negocios.",
                color: "yellow"
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
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
              Descubre nuestros programas especializados y comienza tu transformación personal y profesional
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
              ¿Listo para desarrollar nuevas habilidades?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a cientos de personas que han desarrollado nuevas competencias con nuestros cursos especializados
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/cursos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                🎓 Comenzar ahora
              </Link>
              <Link
                to="/asesoria"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                💬 Hablar con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
