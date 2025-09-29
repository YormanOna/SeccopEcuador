import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import courses from "../data/courses";

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const dropdownRef = useRef(null);

  const [form, setForm] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    edad: "",
    cursoInteres: "",
    ciudad: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  // Configuración de EmailJS (reemplazar con las credenciales reales)
  const EMAILJS_SERVICE_ID = "service_3n62iex";
  const EMAILJS_TEMPLATE_ID = "template_g4b7ebd";
  const EMAILJS_PUBLIC_KEY = "rsPD3X118xhp_J6v8";

  // Lista de ciudades principales del Ecuador
  const ciudades = [
    "Quito",
    "Guayaquil",
    "Cuenca",
    "Santo Domingo",
    "Machala",
    "Durán",
    "Manta",
    "Portoviejo",
    "Loja",
    "Ambato",
    "Riobamba",
    "Esmeraldas",
    "Tulcán",
    "Ibarra",
    "La Libertad",
    "Babahoyo",
    "Quevedo",
    "Milagro",
    "Latacunga",
    "Sangolquí",
  ];

  // Filtrar cursos según búsqueda
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Efecto para autoseleccionar curso si viene de parámetros URL
  useEffect(() => {
    const courseId = searchParams.get("curso");
    const courseName = searchParams.get("nombre");

    if (courseId) {
      const course = courses.find((c) => c.id.toString() === courseId);
      if (course) {
        setForm((prev) => ({ ...prev, cursoInteres: course.title }));
      }
    } else if (courseName) {
      setForm((prev) => ({ ...prev, cursoInteres: courseName }));
    }
  }, [searchParams]);

  // Efecto para cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourseDropdown(false);
        setSearchTerm("");
      }
    }

    if (showCourseDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showCourseDropdown]);

  // Validaciones
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nombreCompleto':
        if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(value)) {
          newErrors[name] = 'Solo se permiten letras y espacios';
        } else if (value.length < 2) {
          newErrors[name] = 'El nombre debe tener al menos 2 caracteres';
        } else {
          delete newErrors[name];
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = 'Formato de email inválido';
        } else {
          delete newErrors[name];
        }
        break;
      case 'telefono':
        if (!/^\+?[\d\s\-()]+$/.test(value) || value.length < 10) {
          newErrors[name] = 'Formato de teléfono inválido (mínimo 10 dígitos)';
        } else {
          delete newErrors[name];
        }
        break;
      case 'edad':
        const edad = parseInt(value);
        if (!value || edad < 16 || edad > 100) {
          newErrors[name] = 'La edad debe estar entre 16 y 100 años';
        } else {
          delete newErrors[name];
        }
        break;
      default:
        if (value.trim() === '') {
          newErrors[name] = 'Este campo es requerido';
        } else {
          delete newErrors[name];
        }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Restricciones específicas por campo
    let processedValue = value;
    
    if (name === 'nombreCompleto') {
      // Solo letras, espacios y caracteres especiales del español
      processedValue = value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
    } else if (name === 'telefono') {
      // Solo números, espacios, guiones, paréntesis y signo +
      processedValue = value.replace(/[^\d\s\-()+ ]/g, '');
    } else if (name === 'edad') {
      // Solo números
      processedValue = value.replace(/[^\d]/g, '');
    }

    setForm({
      ...form,
      [name]: processedValue,
    });

    // Validar en tiempo real
    if (processedValue.trim() !== '') {
      validateField(name, processedValue);
    }
  };

  const handleCourseSelect = (courseTitle) => {
    setForm({ ...form, cursoInteres: courseTitle });
    setShowCourseDropdown(false);
    setSearchTerm("");
  };

  // Función para mostrar toast
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000); // Auto-hide después de 5 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos los campos requeridos
    const requiredFields = ['nombreCompleto', 'email', 'telefono', 'edad', 'cursoInteres', 'ciudad'];
    let isValid = true;
    const newErrors = {};

    requiredFields.forEach(field => {
      if (!form[field].trim()) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      } else {
        validateField(field, form[field]);
      }
    });

    if (!isValid || Object.keys(errors).length > 0) {
      setErrors(newErrors);
      showToast("error", "Por favor, corrige los errores en el formulario.");
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        nombreCompleto: form.nombreCompleto,
        email: form.email,
        telefono: form.telefono,
        edad: form.edad,
        cursoInteres: form.cursoInteres,
        ciudad: form.ciudad,
        mensaje: form.mensaje || "Sin mensaje adicional",
        time: new Date().toLocaleString('es-EC', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Guayaquil'
        }),
        reply_to: form.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Formulario enviado exitosamente:", form);
      setSent(true);
      showToast("success", "¡Formulario enviado exitosamente! Nuestro asesor se contactará contigo en breve.");
      setForm({
        nombreCompleto: "",
        email: "",
        telefono: "",
        edad: "",
        cursoInteres: "",
        ciudad: "",
        mensaje: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      showToast("error", "Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-3">
            <div className="text-xl">
              {toast.type === 'success' ? '✅' : '❌'}
            </div>
            <div className="flex-1">{toast.message}</div>
            <button 
              onClick={() => setToast(null)}
              className="text-white hover:text-gray-200 ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <i className="fas fa-graduation-cap text-2xl"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              ¡Transforma tu Futuro!
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Completa el formulario y da el primer paso hacia una carrera exitosa. 
              Nuestros asesores te contactarán en menos de 4 horas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-300"></i>
                <span>Certificación oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-300"></i>
                <span>1,500+ estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-300"></i>
                <span>Modalidad flexible</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Estadísticas rápidas */}
          <div className="lg:col-span-3 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "fas fa-users", number: "1,500+", label: "Estudiantes graduados" },
                { icon: "fas fa-certificate", number: "15+", label: "Cursos disponibles" },
                { icon: "fas fa-clock", number: "4h", label: "Tiempo de respuesta" },
                { icon: "fas fa-star", number: "4.9", label: "Calificación promedio" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <i className={`${stat.icon} text-blue-600`}></i>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="fas fa-info-circle text-blue-600"></i>
                ¿Por qué SECCOP?
              </h2>
              <div className="space-y-6">
                {[
                  { 
                    icon: "fas fa-medal", 
                    title: "Certificación Oficial", 
                    desc: "Cursos avalados por el Ministerio de Educación del Ecuador",
                    color: "text-yellow-600 bg-yellow-50"
                  },
                  { 
                    icon: "fas fa-users-cog", 
                    title: "Instructores Expertos", 
                    desc: "Profesionales certificados con años de experiencia en el sector",
                    color: "text-green-600 bg-green-50"
                  },
                  { 
                    icon: "fas fa-laptop", 
                    title: "Modalidades Flexibles", 
                    desc: "Presencial, virtual o híbrido según tu disponibilidad",
                    color: "text-purple-600 bg-purple-50"
                  },
                  { 
                    icon: "fas fa-handshake", 
                    title: "Bolsa de Trabajo", 
                    desc: "Te ayudamos a conseguir empleo al finalizar tu capacitación",
                    color: "text-blue-600 bg-blue-50"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Información de contacto */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="fas fa-address-book text-blue-600"></i>
                Contáctanos Directamente
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600 text-sm">info@seccop.edu.ec</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Teléfono</div>
                    <div className="text-gray-600 text-sm">+593 99 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-red-600"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Ubicación</div>
                    <div className="text-gray-600 text-sm">Quito, Ecuador</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                  <i className="fas fa-user-edit text-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Solicita Información</h2>
                <p className="text-gray-600">Completa el formulario y nos contactaremos contigo pronto</p>
              </div>
              
              {sent ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <i className="fas fa-check-circle text-green-500 text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">¡Gracias por contactarnos!</h3>
                  <p className="text-lg text-gray-600 mb-2">
                    Nuestro asesor se contactará contigo en breve.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Revisaremos tu información y te enviaremos todos los detalles del curso.
                  </p>
                  <button
                    onClick={() => {setSent(false); setForm({nombreCompleto: "", email: "", telefono: "", edad: "", cursoInteres: "", ciudad: "", mensaje: ""});}}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <i className="fas fa-plus"></i>
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="fas fa-user text-blue-500"></i>
                      Información Personal
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Nombre */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="nombreCompleto"
                          value={form.nombreCompleto}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.nombreCompleto 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          placeholder="Ingresa tu nombre completo"
                        />
                        {errors.nombreCompleto && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.nombreCompleto}
                          </p>
                        )}
                      </div>

                      {/* Edad */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Edad *
                        </label>
                        <input
                          type="number"
                          name="edad"
                          value={form.edad}
                          onChange={handleChange}
                          required
                          min="16"
                          max="100"
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.edad 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          placeholder="Ej: 25"
                        />
                        {errors.edad && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.edad}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Información de Contacto */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="fas fa-address-book text-green-500"></i>
                      Información de Contacto
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.email 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          placeholder="ejemplo@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={form.telefono}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.telefono 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          placeholder="+593 99 123 4567"
                        />
                        {errors.telefono && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.telefono}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Preferencias de Curso */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="fas fa-graduation-cap text-purple-500"></i>
                      Preferencias de Curso
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Curso de Interés */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Curso de Interés *
                        </label>
                        <div className="relative" ref={dropdownRef}>
                          <input
                            type="text"
                            name="cursoInteres"
                            value={form.cursoInteres}
                            onChange={(e) => {
                              setForm({ ...form, cursoInteres: e.target.value });
                              setSearchTerm(e.target.value);
                            }}
                            onFocus={() => setShowCourseDropdown(true)}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl pr-10 transition-all duration-200 ${
                              errors.cursoInteres 
                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                            }`}
                            placeholder="Selecciona o busca un curso"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                          >
                            <i className={`fas fa-chevron-${showCourseDropdown ? "up" : "down"}`}></i>
                          </button>

                          {showCourseDropdown && (
                            <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl max-h-72 overflow-hidden">
                              {/* Buscador */}
                              <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <div className="relative">
                                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                  <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Buscar curso..."
                                    autoFocus
                                  />
                                </div>
                              </div>

                              {/* Lista de cursos */}
                              <div className="max-h-60 overflow-y-auto">
                                {filteredCourses.length > 0 ? (
                                  filteredCourses.map((course) => (
                                    <button
                                      key={course.id}
                                      type="button"
                                      onClick={() => handleCourseSelect(course.title)}
                                      className="w-full text-left px-4 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 focus:bg-blue-50 text-sm border-b border-gray-50 last:border-b-0 transition-all duration-200 group"
                                    >
                                      <div className="font-medium text-gray-900 group-hover:text-blue-700">
                                        {course.title}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                          {course.category}
                                        </span>
                                        <span className="text-gray-400">•</span>
                                        <span>{course.duration}</span>
                                      </div>
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-4 py-6 text-center">
                                    <div className="text-gray-400 text-4xl mb-2">🔍</div>
                                    <div className="text-sm text-gray-500">
                                      No se encontraron cursos con "<strong>{searchTerm}</strong>"
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        {errors.cursoInteres && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.cursoInteres}
                          </p>
                        )}
                      </div>

                      {/* Ciudad */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ciudad *
                        </label>
                        <select
                          name="ciudad"
                          value={form.ciudad}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.ciudad 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                        >
                          <option value="">Selecciona tu ciudad</option>
                          {ciudades.map((ciudad, index) => (
                            <option key={index} value={ciudad}>
                              {ciudad}
                            </option>
                          ))}
                        </select>
                        {errors.ciudad && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.ciudad}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="fas fa-comment text-orange-500"></i>
                      Mensaje Adicional
                    </h3>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Cuéntanos sobre tus objetivos profesionales, horarios preferidos, o cualquier pregunta específica..."
                    ></textarea>
                    <div className="mt-2 text-xs text-gray-500">
                      Este campo es opcional, pero nos ayuda a brindarte un mejor servicio personalizado.
                    </div>
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Enviando tu solicitud...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <i className="fas fa-paper-plane"></i>
                          Solicitar Información
                        </span>
                      )}
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <i className="fas fa-shield-alt text-green-500"></i>
                        Tus datos están seguros y protegidos
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
