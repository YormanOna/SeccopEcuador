import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import galleryData, { getAllImages, getCategories } from '../data/gallery';

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const categories = getCategories();
  const allImages = getAllImages();

  // Inicializar imágenes - SIMPLIFICADO
  useEffect(() => {
    setFilteredImages(allImages);
  }, []);

  // Filtrar imágenes por categoría - SIMPLIFICADO
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(allImages);
    } else {
      const categoryData = galleryData.find(cat => cat.category === selectedCategory);
      if (categoryData) {
        const imagesWithCategory = categoryData.images.map(img => ({
          ...img,
          category: categoryData.category,
          categoryColor: categoryData.color,
          categoryIcon: categoryData.icon
        }));
        setFilteredImages(imagesWithCategory);
      }
    }
  }, [selectedCategory]);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-100 border-blue-200',
      pink: 'from-pink-500 to-pink-600 text-pink-600 bg-pink-100 border-pink-200',
      purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-100 border-purple-200',
      emerald: 'from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-100 border-emerald-200',
      amber: 'from-amber-500 to-amber-600 text-amber-600 bg-amber-100 border-amber-200'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600 text-gray-600 bg-gray-100 border-gray-200';
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction, event) => {
    if (event) {
      event.stopPropagation();
    }
    
    if (!lightboxImage || filteredImages.length === 0) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setLightboxImage(filteredImages[newIndex]);
  };

  // Navegación con teclado - SIMPLIFICADO
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyPress = (event) => {
      switch(event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, filteredImages]);

  // Cleanup básico al desmontar
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <i className="fas fa-images text-2xl"></i>
              <span className="text-lg font-medium">Galería SECCOP</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Descubre Nuestros
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Proyectos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Explora la creatividad y el talento de nuestros estudiantes a través de una colección 
              inspiradora de trabajos realizados en nuestros cursos especializados
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="fas fa-camera text-yellow-300"></i>
                <span>+{allImages.length} Imágenes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="fas fa-palette text-green-300"></i>
                <span>{categories.length} Especialidades</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="fas fa-award text-orange-300"></i>
                <span>Calidad Profesional</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl"></div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-th-large"></i>
              <span>Todas</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{allImages.length}</span>
            </button>
            
            {categories.map((category) => {
              const colors = getColorClasses(category.color);
              const isActive = selectedCategory === category.name;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} text-white shadow-lg`
                      : `${colors.split(' ')[3]} ${colors.split(' ')[2]} hover:shadow-md`
                  }`}
                >
                  <i className={category.icon}></i>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.imageCount}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory !== 'all' && (
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${getColorClasses(categories.find(c => c.name === selectedCategory)?.color).split(' ')[3]} rounded-full flex items-center justify-center`}>
                  <i className={`${categories.find(c => c.name === selectedCategory)?.icon} ${getColorClasses(categories.find(c => c.name === selectedCategory)?.color).split(' ')[2]} text-xl`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{selectedCategory}</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {categories.find(c => c.name === selectedCategory)?.description}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredImages.map((image, index) => {
              const colors = getColorClasses(image.categoryColor);
              
              return (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <div className="flex items-center gap-2 text-xs">
                        <i className={image.categoryIcon}></i>
                        <span>{image.category}</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <i className="fas fa-search-plus text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className={`absolute top-3 left-3 ${colors.split(' ')[3]} ${colors.split(' ')[2]} px-2 py-1 rounded-full text-xs font-medium opacity-90`}>
                    <i className={`${image.categoryIcon} mr-1`}></i>
                    <span className="hidden sm:inline">{image.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Pronto más contenido!</h3>
              <p className="text-gray-600">Estamos preparando más imágenes increíbles para esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te Inspiraste? ¡Únete a Nosotros!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Descubre tu potencial creativo y forma parte de nuestra comunidad de artistas y profesionales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <i className="fas fa-graduation-cap"></i>
              Ver Cursos
            </Link>
            <Link
              to="/asesoria"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <i className="fas fa-comments"></i>
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // Solo cerrar si se hace click en el overlay, no en los controles
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="relative max-w-6xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors z-30 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Cerrar galería"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Image counter */}
            <div className="absolute -top-12 left-0 text-white text-sm bg-black/50 rounded-full px-4 py-2">
              {filteredImages.findIndex(img => img.id === lightboxImage.id) + 1} / {filteredImages.length}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => navigateLightbox('prev', e)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm z-20"
              aria-label="Imagen anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button
              onClick={(e) => navigateLightbox('next', e)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm z-20"
              aria-label="Imagen siguiente"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">{lightboxImage.title}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <i className={lightboxImage.categoryIcon}></i>
                    <span>{lightboxImage.category}</span>
                  </div>
                  <span>•</span>
                  <span>{lightboxImage.alt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
