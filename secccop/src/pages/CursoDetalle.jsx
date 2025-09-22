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
          <div className="text-6xl text-gray-400">
            <i className="fas fa-search"></i>
          </div>
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
      case 'Comunicación':
        return 'bg-blue-100 text-blue-800';
      case 'Arte y Oficios':
        return 'bg-amber-100 text-amber-800';
      case 'Técnico Especializado':
        return 'bg-red-100 text-red-800';
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
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link
            to="/cursos"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white font-semibold mb-8 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Volver a Cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl text-blue-200">
                  <i className={course.icon}></i>
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                      <i className="fas fa-star"></i> Destacado
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
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-users"></i>
                  <span>{course.students.toLocaleString()} estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-100">
                <i className="fas fa-chalkboard-teacher"></i>
                <span>Instructor: <span className="font-semibold">{course.instructor}</span></span>
              </div>
            </div>

            {/* Hero Course Image - Clean Design */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating icon badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <i className={`${course.icon} text-blue-600 text-2xl`}></i>
              </div>
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
                  <i className="fas fa-bullseye text-blue-600"></i>
                  Lo que aprenderás
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <i className="fas fa-check text-green-500 mt-1"></i>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Section */}
              {course.gallery && course.gallery.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i className="fas fa-images text-blue-600"></i>
                    Galería del curso
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {course.gallery.map((image, i) => (
                      <div 
                        key={i} 
                        className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100 hover:shadow-lg transition-all duration-300"
                        onClick={() => {
                          // Simple lightbox effect
                          const modal = document.createElement('div');
                          modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
                          modal.innerHTML = `
                            <div class="relative max-w-4xl max-h-full p-4">
                              <button class="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 z-10">
                                <i class="fas fa-times"></i>
                              </button>
                              <img src="${image}" alt="Galería ${i + 1}" class="max-w-full max-h-full object-contain rounded-lg" />
                            </div>
                          `;
                          document.body.appendChild(modal);
                          modal.onclick = (e) => {
                            if (e.target === modal || e.target.closest('button')) {
                              document.body.removeChild(modal);
                            }
                          };
                        }}
                      >
                        <img
                          src={image}
                          alt={`Galería ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <i className="fas fa-search-plus text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    <i className="fas fa-info-circle mr-1"></i>
                    Haz clic en cualquier imagen para verla en tamaño completo
                  </p>
                </div>
              )}

              {/* Course content preview */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <i className="fas fa-book text-blue-600"></i>
                  Contenido del curso
                </h2>
                <div className="space-y-6">
                  {(course.courseContent || [
                    { title: "Módulo 1", lessons: 5, duration: "1.5h", topics: ["Contenido por definir"] },
                    { title: "Módulo 2", lessons: 8, duration: "3h", topics: ["Contenido por definir"] },
                    { title: "Módulo 3", lessons: 6, duration: "2h", topics: ["Contenido por definir"] }
                  ]).map((module, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-600 text-sm font-bold px-2.5 py-1 rounded-full">
                            {i + 1}
                          </span>
                          {module.title}
                        </h3>
                        <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          {module.lessons} lecciones • {module.duration}
                        </div>
                      </div>
                      {module.topics && (
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-gray-700">Temas a desarrollar:</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600 leading-relaxed">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <i className="fas fa-clipboard-list text-blue-600"></i>
                  Requisitos
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-circle text-blue-500 text-xs mt-2"></i>
                    <span>Ganas de aprender y dedicación para practicar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-circle text-blue-500 text-xs mt-2"></i>
                    <span>Computadora con conexión a internet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-circle text-blue-500 text-xs mt-2"></i>
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
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
                          <span className="text-2xl text-blue-600">
                            <i className={relatedCourse.icon}></i>
                          </span>
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
