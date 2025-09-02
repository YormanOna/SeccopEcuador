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
    rating,
    students,
    category,
    icon,
    featured,
    instructor
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
    <div className={`relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Destacado
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
          {isFavorite(id) ? '❤️' : '🤍'}
        </span>
      </button>
      
      <div className="flex items-start justify-between mb-4 pr-8">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>👨‍🏫 {instructor}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{price}</div>
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
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            ⏰ {duration}
          </span>
          <span className="flex items-center gap-1">
            👥 {students.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium">{rating}</span>
        </div>
      </div>

      <Link
        to={`/cursos/${id}`}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
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
