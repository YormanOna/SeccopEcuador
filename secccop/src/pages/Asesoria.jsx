import { useState } from "react";

export default function Asesoria() {
  const [form, setForm] = useState({ 
    nombre: "", 
    correo: "", 
    empresa: "",
    telefono: "",
    tipoAsesoria: "",
    mensaje: "" 
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a tu backend o API
    console.log("Formulario enviado:", form);
    setSent(true);
    setForm({ nombre: "", correo: "", empresa: "", telefono: "", tipoAsesoria: "", mensaje: "" });
  };

  const servicios = [
    {
      icon: "🎯",
      title: "Consultoría Estratégica",
      description: "Análisis y diagnóstico de necesidades tecnológicas de tu organización",
      features: ["Auditoría tecnológica", "Roadmap de implementación", "KPIs y métricas"]
    },
    {
      icon: "👥",
      title: "Capacitación Corporativa",
      description: "Programas de formación personalizados para equipos de trabajo",
      features: ["Cursos in-company", "Mentorías grupales", "Certificaciones"]
    },
    {
      icon: "🚀",
      title: "Transformación Digital",
      description: "Acompañamiento en procesos de modernización y digitalización",
      features: ["Migración a la nube", "Automatización", "Buenas prácticas DevOps"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Asesoría Profesional Especializada
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Diagnosticamos necesidades, diseñamos planes de mejora y acompañamos la
              implementación para asegurar resultados sostenibles en tu organización.
            </p>
            <div className="flex items-center justify-center gap-8 text-purple-100">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Empresas asesoradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Satisfacción cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Años experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Asesoría
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu organización
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {servicios.map((servicio, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{servicio.title}</h3>
                <p className="text-gray-600 mb-6">{servicio.description}</p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✅</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Listo para transformar tu organización?
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Nuestro equipo de expertos está aquí para ayudarte a alcanzar tus objetivos.
                  Programa una consulta gratuita y descubre cómo podemos impulsar tu éxito.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Nuestro proceso:</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Diagnóstico inicial", desc: "Evaluamos tu situación actual y necesidades" },
                    { step: "2", title: "Propuesta personalizada", desc: "Diseñamos un plan específico para tu organización" },
                    { step: "3", title: "Implementación", desc: "Ejecutamos la estrategia con acompañamiento constante" },
                    { step: "4", title: "Seguimiento", desc: "Monitoreamos resultados y ajustamos según sea necesario" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Consulta gratuita</h3>
                <p className="text-blue-700 text-sm">
                  Agenda una sesión de 30 minutos sin costo para evaluar tu situación actual 
                  y conocer cómo podemos ayudarte.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu consulta</h3>
              
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-green-600 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-600 mb-6">
                    Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo 
                    en las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de asesoría
                    </label>
                    <select
                      name="tipoAsesoria"
                      value={form.tipoAsesoria}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="estrategica">Consultoría Estratégica</option>
                      <option value="corporativa">Capacitación Corporativa</option>
                      <option value="transformacion">Transformación Digital</option>
                      <option value="otra">Otra (especificar en mensaje)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Cuéntanos sobre tus necesidades y objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    🚀 Solicitar consulta gratuita
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
                    para brindarte información sobre nuestros servicios.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
