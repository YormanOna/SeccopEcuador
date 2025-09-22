import { useState, useEffect } from 'react';

export default function CourseHeaderCarousel({ course }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Usar solo las imágenes de la galería (que sabemos que existen)
  const images = course.gallery && course.gallery.length > 0 ? course.gallery : [course.image];
  
  // Auto-play del carrusel
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Cambio cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
        {/* Imagen actual */}
        <div className="relative h-80 lg:h-96">
          <img
            src={images[currentIndex]}
            alt={`${course.title} - Imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          
          {/* Indicador de imagen actual */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Botones de navegación - solo visibles en hover */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Imagen anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Siguiente imagen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores de puntos */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Floating icon badge */}
      <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
        <i className={`${course.icon} text-blue-600 text-2xl`}></i>
      </div>
    </div>
  );
}