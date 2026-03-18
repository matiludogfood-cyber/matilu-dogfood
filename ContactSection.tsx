import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send, MessageCircle, Check } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '+54 9 11 5177-4724',
      link: 'https://wa.me/5491151774724',
      color: 'bg-green-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'matiludogfood@gmail.com',
      link: 'mailto:matiludogfood@gmail.com',
      color: 'bg-[#007bff]',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horario de atención',
      content: 'Lunes a Sábado: 8:00 - 20:00',
      link: null,
      color: 'bg-orange-500',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      content: '@Matilú.dog.food',
      link: 'https://instagram.com/Matilú.dog.food',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
    },
  ];

  return (
    <section className="section-matilu bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-matilu mb-4 inline-block">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos por cualquier canal y te responderemos 
            a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#002B5C] mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-[#007bff]" />
              Envíanos un mensaje
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-[#002B5C] mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-600">Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    required
                    className="input-matilu"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                      className="input-matilu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 9 11..."
                      className="input-matilu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    rows={5}
                    className="input-matilu resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-matilu-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#002B5C] mb-6">
              Otras formas de contacto
            </h3>

            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link || '#'}
                target={info.link ? '_blank' : undefined}
                rel={info.link ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all ${
                  !info.link && 'cursor-default'
                }`}
              >
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center text-white`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.title}</p>
                  <p className="font-semibold text-[#002B5C]">{info.content}</p>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/5491151774724"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center hover:shadow-lg transition-all"
            >
              <Phone className="w-10 h-10 mx-auto mb-3" />
              <h4 className="text-lg font-bold mb-1">¿Preferís escribir por WhatsApp?</h4>
              <p className="text-green-100 text-sm">Te respondemos en minutos</p>
            </a>
          </div>
        </div>

        {/* Map or Location Info */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-[#007bff] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#002B5C] mb-2">
              ¿Dónde estamos?
            </h3>
            <p className="text-gray-600 mb-4">
              Somos una empresa argentina con base en Buenos Aires. 
              Realizamos envíos a todo el país.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#f8f9fa] px-6 py-3 rounded-xl">
              <span className="text-2xl">🇦🇷</span>
              <span className="font-medium text-[#002B5C]">Envíos a todo Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
