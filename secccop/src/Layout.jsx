import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
      <FloatingWhatsApp
        phoneNumber='593996727387' // Número de SECCOP
        accountName='SECCOP Ecuador' 
        avatar='/images/logo_seccop.webp' 
        initialMessageByServer='¡Hola! ¿Cómo podemos ayudarte hoy? Somos SECCOP, expertos en capacitación profesional.' 
        initialMessageByClient='¡Hola!. Me gustaría informacion sobre los cursos de capacitación...' 
        statusMessage='Disponible para atenderte' 
        startChatText='Iniciar conversación' 
        tooltipText='¿Necesitas ayuda? ¡Escríbenos!' 
        allowEsc={true}
        allowClickAway={true}
        messageDelay={1}
        notification={true}
        notificationDelay={10}
        notificationLoop={2}
      />
      <ScrollToTop />
    </div>
  );
}
