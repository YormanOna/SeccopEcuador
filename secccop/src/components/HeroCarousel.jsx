import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = ({ slides, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoPlayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex, isAutoPlaying, slides.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">SECCOP Ecuador</h1>
          <p className="text-xl">Centro de Capacitación Profesional</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/30">
                    <i className="fas fa-graduation-cap"></i> 
                    {slide.badge || "Servicio Ecuatoriano de Capacitación por Competencias Profesionales"}
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to={slide.primaryButton.link}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <i className={slide.primaryButton.icon}></i>
                      {slide.primaryButton.text}
                    </Link>
                    <Link
                      to={slide.secondaryButton.link}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/30"
                    >
                      <i className={slide.secondaryButton.icon}></i>
                      {slide.secondaryButton.text}
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 z-20 border border-white/30"
        aria-label="Anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 z-20 border border-white/30"
        aria-label="Siguiente"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
};

export default HeroCarousel;