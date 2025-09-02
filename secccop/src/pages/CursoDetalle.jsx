import { useParams, Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";

export default function CursoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl">😔</div>
          <h2 className="text-2xl font-bold text-gray-800">Curso no encontrado</h2>
          <p className="text-gray-600">El curso que buscas no existe o ha sido removido.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors"
            >
              ← Volver atrás
            </button>
            <Link
              to="/cursos"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-100 text-blue-800';
      case 'Backend':
        return 'bg-purple-100 text-purple-800';
      case 'DevOps':
        return 'bg-orange-100 text-orange-800';
      case 'Diseño':
        return 'bg-pink-100 text-pink-800';
      case 'Seguridad':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link
            to="/cursos"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{course.icon}</span>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                      ⭐ Destacado
                    </span>
                  )}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                {course.longDescription}
              </p>

              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>{course.students.toLocaleString()} estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-100">
                <span>👨‍🏫</span>
                <span>Instructor: <span className="font-semibold">{course.instructor}</span></span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{course.price}</div>
                <p className="text-gray-600">Acceso completo al curso</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✅</span>
                  <span>Acceso de por vida</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✅</span>
                  <span>Certificado al completar</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✅</span>
                  <span>Soporte del instructor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✅</span>
                  <span>Proyectos prácticos</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                  🎓 Inscribirme ahora
                </button>
                <button className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-semibold">
                  💬 Solicitar información
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                30 días de garantía de devolución
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* What you'll learn */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Lo que aprenderás
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course content preview */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  Contenido del curso
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Introducción y fundamentos", lessons: 5, duration: "1.5h" },
                    { title: "Conceptos intermedios", lessons: 8, duration: "3h" },
                    { title: "Proyectos prácticos", lessons: 12, duration: "5h" },
                    { title: "Casos de estudio avanzados", lessons: 6, duration: "2.5h" },
                    { title: "Mejores prácticas y optimización", lessons: 4, duration: "1.5h" }
                  ].map((module, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        <div className="text-sm text-gray-500">
                          {module.lessons} lecciones • {module.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  Requisitos
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">•</span>
                    <span>Conocimientos básicos de programación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">•</span>
                    <span>Computadora con conexión a internet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">•</span>
                    <span>Ganas de aprender y tiempo para practicar</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor info */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tu instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.instructor}</h4>
                    <p className="text-sm text-gray-600">Especialista en {course.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Profesional con más de 10 años de experiencia en la industria, 
                  especializado en formar desarrolladores de clase mundial.
                </p>
              </div>

              {/* Related courses */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cursos relacionados</h3>
                <div className="space-y-4">
                  {courses
                    .filter(c => c.id !== course.id && c.category === course.category)
                    .slice(0, 2)
                    .map(relatedCourse => (
                      <Link
                        key={relatedCourse.id}
                        to={`/cursos/${relatedCourse.id}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{relatedCourse.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{relatedCourse.title}</h4>
                            <p className="text-xs text-gray-600">{relatedCourse.price}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
