import { Phone, Mail, Clock, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const productLinks = [
    { label: 'Snacks Naturales', href: '#catalogo' },
    { label: 'Membresías', href: '#catalogo' },
    { label: 'Compra sin Suscripción', href: '#catalogo' },
    { label: 'Gomitas', href: '#catalogo' },
    { label: 'Gelatinas', href: '#catalogo' },
  ];

  return (
    <footer className="bg-[#002B5C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo-matilu.png" 
                alt="Matilú Dog Food" 
                className="w-14 h-14 object-contain"
              />
              <span className="text-2xl font-bold">Matilú</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Comida real para perros felices. Alimentación natural cocida a baja temperatura, 
              sin conservantes y 100% nutritiva.
            </p>
            <div className="flex items-center gap-2 text-[#00c8ff]">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Hecho con amor en Argentina</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#00c8ff] rounded-full"></span>
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#00c8ff] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#007bff] rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#00c8ff] rounded-full"></span>
              Productos
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#00c8ff] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#007bff] rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#00c8ff] rounded-full"></span>
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00c8ff] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/5491151774724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#00c8ff] text-sm transition-colors"
                  >
                    +54 9 11 5177-4724
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00c8ff] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a 
                    href="mailto:matiludogfood@gmail.com"
                    className="text-white/80 hover:text-[#00c8ff] text-sm transition-colors"
                  >
                    matiludogfood@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00c8ff] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Horario</p>
                  <p className="text-white/80 text-sm">
                    Lun - Sáb: 8:00 - 20:00
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-[#00c8ff] mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <a 
                    href="https://instagram.com/Matilú.dog.food"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#00c8ff] text-sm transition-colors"
                  >
                    @Matilú.dog.food
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Matilú Dog Food. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/5491151774724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Escribinos
              </a>
              <a 
                href="https://instagram.com/Matilú.dog.food"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
