import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

// CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = '5491151774724';
const WHATSAPP_MESSAGE = 'Hola Matilú! 👋 Vi su página y quiero consultarles. 🐶';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// 🎯 FUNCIÓN DE TRACKING
const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    petName: '',
    petBreed: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🎯 EVENTO: Envío de formulario de contacto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tracking del evento
    trackEvent('submit_contact_form', {
      event_category: 'engagement',
      event_label: 'formulario_contacto_enviado',
      subject: formData.subject,
    });

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }

    // Simular envío (en producción, acá iría el envío real)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSent(true);
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSent(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        petName: '',
        petBreed: '',
      });
    }, 3000);
  };

  // 🎯 EVENTO: Click en WhatsApp
  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', {
      event_category: 'engagement',
      event_label: 'contacto_whatsapp',
    });
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact');
    }
  };

  // 🎯 EVENTO: Click en email
  const handleEmailClick = () => {
    trackEvent('click_email', {
      event_category: 'engagement',
      event_label: 'contacto_email',
    });
  };

  // 🎯 EVENTO: Click en teléfono
  const handlePhoneClick = () => {
    trackEvent('click_phone', {
      event_category: 'engagement',
      event_label: 'contacto_telefono',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      content: '+54 11 5177-4724',
      action: 'Llamar',
      href: 'tel:+541151774724',
      onClick: handlePhoneClick,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'hola@matiludogfood.com',
      action: 'Enviar email',
      href: 'mailto:hola@matiludogfood.com',
      onClick: handleEmailClick,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      content: 'Buenos Aires, Argentina',
      action: 'Ver mapa',
      href: '#',
      onClick: () => trackEvent('click_location', { event_category: 'engagement', event_label: 'contacto_ubicacion' }),
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horario',
      content: 'Lun a Vie: 9:00 - 18:00',
      action: null,
      href: null,
      onClick: null,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="section-matilu bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-matilu mb-4 inline-block">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            ¿Hablamos? <span className="text-[#007bff]">🐕</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos acá para ayudarte a elegir la mejor alimentación para tu perro. 
            Escribinos por WhatsApp, email o completá el formulario.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#002B5C]">{info.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{info.content}</p>
                    {info.action && info.href && (
                      <a
                        href={info.href}
                        onClick={info.onClick || undefined}
                        className="text-[#007bff] text-sm font-medium mt-2 inline-block hover:underline"
                      >
                        {info.action} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA Card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="block bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <p className="text-white/80 text-sm">Respuesta en minutos</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-white text-[#25D366] py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
                Chatear ahora
              </button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#002B5C] mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#007bff]" />
                Envianos un mensaje
              </h3>

              {isSent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-[#002B5C] mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-600">Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ej: María González"
                        className="input-matilu"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Ej: maria@email.com"
                        className="input-matilu"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ej: 11 5177-4724"
                        className="input-matilu"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-matilu"
                      >
                        <option value="">Seleccioná un asunto</option>
                        <option value="consulta">Consulta general</option>
                        <option value="membresia">Membresías</option>
                        <option value="productos">Productos</option>
                        <option value="envio">Envíos</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Pet Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de tu perro
                      </label>
                      <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        placeholder="Ej: Firulais"
                        className="input-matilu"
                      />
                    </div>

                    {/* Pet Breed */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Raza
                      </label>
                      <input
                        type="text"
                        name="petBreed"
                        value={formData.petBreed}
                        onChange={handleChange}
                        placeholder="Ej: Labrador"
                        className="input-matilu"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Contanos en qué podemos ayudarte..."
                      className="input-matilu resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-matilu-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    También podés escribirnos directo por WhatsApp para una respuesta más rápida.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}