import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  const location = useLocation();

  // Forzar cleanup cuando cambie la ruta
  useEffect(() => {
    // Restaurar scroll body cuando cambie la página
    document.body.style.overflow = 'unset';
    
    // Scroll to top cuando cambie la página
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Outlet key={location.pathname} />
      </main>
      <Footer />
    </div>
  );
}
