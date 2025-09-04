import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "📧", label: "Email", href: "mailto:info@seccop.edu.ec" },
    { icon: "📱", label: "WhatsApp", href: "https://wa.me/593987654321" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/company/seccop" },
    { icon: "�", label: "Facebook", href: "https://facebook.com/seccop" }
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Asesoría", href: "/asesoria" }
  ];

  const categories = [
    { label: "Comunicación", href: "/cursos?category=Comunicación" },
    { label: "Arte y Oficios", href: "/cursos?category=Arte y Oficios" },
    { label: "Técnico Especializado", href: "/cursos?category=Técnico Especializado" },
    { label: "Lengua de Señas", href: "/cursos?search=Lengua de Señas" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">📧 Mantente actualizado</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Recibe las últimas noticias sobre nuevos cursos, tendencias tecnológicas y ofertas especiales
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold">
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="text-2xl font-bold">SECCOP</h3>
                <p className="text-gray-400 text-sm">Centro de Capacitación</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Somos un centro de capacitación especializado en Lengua de Señas Ecuatoriana, 
              artes, oficios y técnicas especializadas. Formamos personas con certificaciones 
              oficiales y metodologías prácticas desde hace más de 10 años.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@seccop.edu.ec"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categorías</h4>
            <ul className="space-y-3">
              {categories.map((category, i) => (
                <li key={i}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h5 className="font-semibold">Ubicación</h5>
                <p className="text-gray-400 text-sm">Ciudad Principal, País</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <h5 className="font-semibold">Teléfono</h5>
                <p className="text-gray-400 text-sm">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">✉️</span>
              <div>
                <h5 className="font-semibold">Email</h5>
                <p className="text-gray-400 text-sm">info@capacitapro.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CapacitaPro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
