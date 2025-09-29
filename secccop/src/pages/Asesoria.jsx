import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Asesoria() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirigir a /contacto manteniendo los parámetros de búsqueda
    navigate(`/contacto${location.search}`, { replace: true });
  }, [navigate, location.search]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo...</p>
      </div>
    </div>
  );
}
