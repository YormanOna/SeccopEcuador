import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../hooks/useFavorites";

export default function Card({ course }) {
  const {
    id,
    title,
    shortDescription,
    longDescription,
    duration,
    level,
    price,
    originalPrice,
    discount,
    rating,
    students,
    category,
    icon,
    featured,
    instructor,
    modality,
    schedule,
    reservation
  } = course;

  const { isFavorite, toggleFavorite } = useFavorites();
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para obtener la imagen del curso basada en el título
  const getCourseImage = () => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('lengua de señas') || titleLower.includes('lengua de senas')) {
      return '/images/Lengua de señas/LenguaDeSeñas.webp';
    }
    if (titleLower.includes('excel')) {
      return '/images/Excel/Excel.webp';
    }
    if (titleLower.includes('fomix') || titleLower.includes('arte en fomix')) {
      return '/images/Fomix/Fomix.webp';
    }
    if (titleLower.includes('globos') || titleLower.includes('decoración')) {
      return '/images/Globos/globos.webp';
    }
    if (titleLower.includes('porcelana') || titleLower.includes('pintura')) {
      return '/images/Porcelana/Porcelana.webp';
    }
    if (titleLower.includes('silicon') || titleLower.includes('manualidades')) {
      return '/images/Silicon/Silicon.webp';
    }
    
    // Imagen por defecto
    return '/images/Seccop.webp';
  };

  // Función para truncar texto
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

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
      case 'Emprendimiento':
        return 'bg-amber-100 text-amber-800';
      case 'Técnico Especializado':
        return 'bg-red-100 text-red-800';
      case 'Frontend':
        return 'bg-blue-100 text-blue-800';
      case 'Backend':
        return 'bg-red-100 text-red-800';
      case 'DevOps':
        return 'bg-amber-100 text-amber-800';
      case 'Diseño':
        return 'bg-orange-100 text-orange-800';
      case 'Seguridad':
        return 'bg-slate-100 text-slate-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`relative rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col overflow-hidden ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      {featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <i className="fas fa-star"></i> Destacado
          </span>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getCourseImage()} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all"
          aria-label={isFavorite(id) ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <span className={`text-sm ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'}`}>
            <i className={`${isFavorite(id) ? 'fas fa-heart' : 'far fa-heart'}`}></i>
          </span>
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {price}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="text-2xl text-blue-600 flex-shrink-0">
              <i className={icon}></i>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-chalkboard-teacher text-gray-500"></i>
                <span className="truncate">{instructor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description with expand/collapse functionality */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isExpanded 
              ? (longDescription || shortDescription)
              : truncateText(shortDescription)
            }
          </p>
          {shortDescription.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>Ver menos</span>
                  <i className="fas fa-minus text-xs"></i>
                </>
              ) : (
                <>
                  <span>Ver más</span>
                  <i className="fas fa-plus text-xs"></i>
                </>
              )}
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}>
            {level}
          </span>
          {modality && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
              {modality}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <i className="fas fa-clock text-gray-500"></i> {duration}
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-users text-gray-500"></i> {students.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Schedule and Reservation Info */}
        {schedule && schedule.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">
              <i className="fas fa-calendar-alt"></i> Horarios disponibles:
            </h4>
            <div className="text-xs text-blue-700">
              {schedule[0]}
              {schedule.length > 1 && (
                <div className="text-blue-600 font-medium mt-1">
                  +{schedule.length - 1} horario{schedule.length > 2 ? 's' : ''} más
                </div>
              )}
            </div>
          </div>
        )}

        {reservation && (
          <div className="mb-4 p-2 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs text-amber-800 font-medium">
              <i className="fas fa-dollar-sign"></i> {reservation}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          <Link
            to={`/cursos/${id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Ver detalles del curso
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
