import { useState } from "react";
import Card from "../components/Card";
import courses from "../data/courses";

export default function Cursos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Todos", ...new Set(courses.map(course => course.category))];
  const levels = ["Todos", ...new Set(courses.map(course => course.level))];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "Todos" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Nuestros Cursos Especializados
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Formación en Lengua de Señas Ecuatoriana, artes, oficios y técnicas especializadas
            </p>
            <div className="flex items-center justify-center text-blue-100">
              <span className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <span>{courses.length} cursos disponibles</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar por curso, modalidad o nivel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">Categoría:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">Nivel:</span>
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLevel === level
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron cursos</h3>
              <p className="text-gray-600">Intenta ajustar los filtros o el término de búsqueda</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Ordenar por:</span>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Más populares</option>
                    <option>Mejor calificados</option>
                    <option>Precio: menor a mayor</option>
                    <option>Precio: mayor a menor</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="relative">
                    <Card course={course} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está siempre desarrollando nuevos cursos. Contáctanos y cuéntanos qué te gustaría aprender.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/asesoria"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              💬 Solicitar curso personalizado
            </a>
            <a 
              href="mailto:info@capacitapro.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-medium transition-colors"
            >
              📧 Contactar por email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
