import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

export default function Card({ course }) {
  const {
    id,
    title,
    shortDescription,
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
    <div className={`relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-star"></i> Destacado
          </span>
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(id)}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label={isFavorite(id) ? "Quitar de favoritos" : "Añadir a favoritos"}
      >
        <span className={`text-lg ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'}`}>
          <i className={`${isFavorite(id) ? 'fas fa-heart' : 'far fa-heart'}`}></i>
        </span>
      </button>
      
      <div className="flex items-start justify-between mb-4 pr-8">
        <div className="flex items-center gap-3">
          <div className="text-3xl text-blue-600">
            <i className={icon}></i>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <i className="fas fa-chalkboard-teacher text-gray-500"></i>
              <span>{instructor}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex flex-col items-end">
            {originalPrice && discount && (
              <div className="text-sm text-gray-500 line-through">{originalPrice}</div>
            )}
            <div className="text-2xl font-bold text-blue-600">{price}</div>
            {discount && (
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                -{discount} OFF
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>

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

      <Link
        to={`/cursos/${id}`}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium"
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
  );
}
