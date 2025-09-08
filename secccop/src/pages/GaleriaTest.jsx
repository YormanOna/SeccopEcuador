import React from 'react';
import { Link } from 'react-router-dom';

export default function GaleriaTest() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Galería SECCOP</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Lengua de Señas</h3>
          <img 
            src="/images/Lengua de señas/Galeria/1.webp" 
            alt="LSEC" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">Aprende comunicación inclusiva</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Decoración con Globos</h3>
          <img 
            src="/images/Globos/Galeria/1.webp" 
            alt="Globos" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">Decoraciones profesionales</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Arte en Fomix</h3>
          <img 
            src="/images/Fomix/Galeria/1.webp" 
            alt="Fomix" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">Creaciones artísticas únicas</p>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/cursos" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver Nuestros Cursos
        </Link>
      </div>
    </div>
  );
}
