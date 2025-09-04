import { useState, useMemo } from 'react';
import cronograma from '../data/cronograma';

export default function Cronograma() {
  const [filterText, setFilterText] = useState('');
  const [selectedModalidad, setSelectedModalidad] = useState('Todas');
  const [selectedCiudad, setSelectedCiudad] = useState('Todas');
  const [selectedEstado, setSelectedEstado] = useState('Todos');
  const [sortField, setSortField] = useState('curso');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtros únicos
  const modalidades = ['Todas', ...new Set(cronograma.map(item => item.modalidad))];
  const ciudades = ['Todas', ...new Set(cronograma.map(item => item.ciudad))];
  const estados = ['Todos', ...new Set(cronograma.map(item => item.estado))];

  // Datos filtrados y ordenados
  const filteredAndSortedData = useMemo(() => {
    let filtered = cronograma.filter(item => {
      const matchesText = item.curso.toLowerCase().includes(filterText.toLowerCase()) ||
                         item.instructor.toLowerCase().includes(filterText.toLowerCase()) ||
                         item.ciudad.toLowerCase().includes(filterText.toLowerCase());
      const matchesModalidad = selectedModalidad === 'Todas' || item.modalidad === selectedModalidad;
      const matchesCiudad = selectedCiudad === 'Todas' || item.ciudad === selectedCiudad;
      const matchesEstado = selectedEstado === 'Todos' || item.estado === selectedEstado;
      
      return matchesText && matchesModalidad && matchesCiudad && matchesEstado;
    });

    // Ordenar datos
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortField === 'fechaInicio') {
        const aDate = new Date(aValue);
        const bDate = new Date(bValue);
        return sortDirection === 'asc' ? aDate - bDate : bDate - aDate;
      }
      
      if (typeof aValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [filterText, selectedModalidad, selectedCiudad, selectedEstado, sortField, sortDirection]);

  // Paginación
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getModalidadColor = (modalidad) => {
    const colors = {
      'Presencial': 'bg-blue-100 text-blue-800',
      'Virtual': 'bg-amber-100 text-amber-800',
      'Híbrida': 'bg-red-100 text-red-800'
    };
    return colors[modalidad] || 'bg-gray-100 text-gray-800';
  };

  const getEstadoColor = (estado) => {
    const colors = {
      'Inscripciones Abiertas': 'bg-green-100 text-green-800',
      'Últimos Cupos': 'bg-red-100 text-red-800',
      'Próximamente': 'bg-yellow-100 text-yellow-800',
      'Lleno': 'bg-gray-100 text-gray-800'
    };
    return colors[estado] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              📅 Cronograma de Cursos
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre nuestros próximos cursos de Lengua de Señas, artes y oficios. Horarios flexibles y certificación oficial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{cronograma.length}</div>
                <div className="text-sm text-blue-200">Cursos programados</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{ciudades.length - 1}</div>
                <div className="text-sm text-blue-200">Ciudades</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{modalidades.length - 1}</div>
                <div className="text-sm text-blue-200">Modalidades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar curso, instructor o ciudad..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Modalidad:</label>
                <select
                  value={selectedModalidad}
                  onChange={(e) => setSelectedModalidad(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {modalidades.map(modalidad => (
                    <option key={modalidad} value={modalidad}>{modalidad}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Ciudad:</label>
                <select
                  value={selectedCiudad}
                  onChange={(e) => setSelectedCiudad(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {ciudades.map(ciudad => (
                    <option key={ciudad} value={ciudad}>{ciudad}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Estado:</label>
                <select
                  value={selectedEstado}
                  onChange={(e) => setSelectedEstado(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  {estados.map(estado => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Cronograma Completo
                </h2>
                <div className="text-sm text-gray-600">
                  {filteredAndSortedData.length} de {cronograma.length} cursos mostrados
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('curso')}
                    >
                      <div className="flex items-center">
                        Curso
                        {sortField === 'curso' && (
                          <svg className={`ml-1 w-3 h-3 transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('fechaInicio')}
                    >
                      <div className="flex items-center">
                        Fecha de Inicio
                        {sortField === 'fechaInicio' && (
                          <svg className={`ml-1 w-3 h-3 transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('modalidad')}
                    >
                      <div className="flex items-center">
                        Modalidad
                        {sortField === 'modalidad' && (
                          <svg className={`ml-1 w-3 h-3 transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('ciudad')}
                    >
                      <div className="flex items-center">
                        Ciudad
                        {sortField === 'ciudad' && (
                          <svg className={`ml-1 w-3 h-3 transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duración</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{item.curso}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(item.fechaInicio)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getModalidadColor(item.modalidad)}`}>
                          {item.modalidad}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.ciudad}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.duracion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.instructor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEstadoColor(item.estado)}`}>
                          {item.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredAndSortedData.length)} de {filteredAndSortedData.length} resultados
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Anterior
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-1 text-sm border rounded ${
                            currentPage === pageNum
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-red-50 hover:border-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modalidad Presencial</h3>
              <p className="text-gray-600 text-sm">
                Formación práctica en nuestras instalaciones de Quito con material incluido y certificación oficial.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modalidad Virtual</h3>
              <p className="text-gray-600 text-sm">
                Clases online de Lengua de Señas Ecuatoriana con plataforma virtual y manual digital incluido.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modalidad Híbrida</h3>
              <p className="text-gray-600 text-sm">
                Combinación de clases presenciales y virtuales para mayor flexibilidad y práctica especializada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
