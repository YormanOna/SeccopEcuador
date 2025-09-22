import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      href: "mailto:seccop.ec@gmail.com",
    },
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/593996727387",
    },
    {
      icon: "fab fa-facebook",
      label: "Facebook",
      href: "https://facebook.com/seccop.ec",
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      href: "https://instagram.com/seccop.ec",
    },
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Asesoría", href: "/asesoria" },
  ];

  const categories = [
    { label: "Comunicación", href: "/cursos?category=Comunicación" },
    { label: "Arte y Oficios", href: "/cursos?category=Arte y Oficios" },
    {
      label: "Técnico Especializado",
      href: "/cursos?category=Técnico Especializado",
    },
    { label: "Lengua de Señas", href: "/cursos?search=Lengua de Señas" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo_seccop.webp"
                alt="SECCOP Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">SECCOP</h3>
                <p className="text-gray-400 text-sm">Centro de Capacitación</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Centro de Capacitación especializado en Lengua de Señas
              Ecuatoriana, artes y oficios. Ofrecemos cursos presenciales y
              online.
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
                  <i className={`${social.icon} text-lg`}></i>
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
                  href="mailto:seccop.ec@gmail.com"
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
              <i className="fas fa-map-marker-alt text-2xl text-blue-400"></i>
              <div>
                <h5 className="font-semibold">Ubicación</h5>
                <p className="text-gray-400 text-sm">
                  Av. Gran Colombia y José Martí E4-10. Alameda
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fas fa-phone text-2xl text-amber-400"></i>
              <div>
                <h5 className="font-semibold">Teléfono</h5>
                <p className="text-gray-400 text-sm">099 672 7387</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fas fa-envelope text-2xl text-red-400"></i>
              <div>
                <h5 className="font-semibold">Email</h5>
                <p className="text-gray-400 text-sm">seccop.ec@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} SECCOP. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
