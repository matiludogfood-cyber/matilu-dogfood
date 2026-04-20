import { useEffect, useState, useCallback } from 'react';
import { ArrowRight, Sparkles, Percent, Truck, Shield, Bone, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Section } from '@/types';

interface HeroSectionProps {
  onSectionChange: (section: Section) => void;
}

// IMÁGENES DEL CARRUSEL - TUS 3 FOTOS
const carouselImages = [
  {
    src: '/images/1.png',
    alt: 'Matilú Dog Food - Banner 1',
    title: 'Comida Real',
    subtitle: 'Nutrición natural para tu perro',
  },
  {
    src: '/images/2.png',
    alt: 'Matilú Dog Food - Banner 2',
    title: 'Snacks Premium',
    subtitle: 'Deshidratados 100% naturales',
  },
  {
    src: '/images/3.png',
    alt: 'Matilú Dog Food - Banner 3',
    title: 'Membresías',
    subtitle: 'Ahorra con suscripción mensual',
  },
];

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cambiar slide automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const benefits = [
    { icon: <Percent className="w-5 h-5" />, text: '10% OFF con Fiel Pet' },
    { icon: <Truck className="w-5 h-5" />, text: 'Envío gratis en membresía Oro' },
    { icon: <Shield className="w-5 h-5" />, text: '100% Natural' },
  ];

  const features = [
    { icon: <Bone className="w-6 h-6" />, title: 'Snacks Premium', desc: 'Deshidratados naturales' },
    { icon: <Heart className="w-6 h-6" />, title: 'Membresías', desc: 'Ahorra con suscripción' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Calculadora', desc: 'Ración personalizada' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#002B5C] via-[#003d7a] to-[#004a9e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#00c8ff] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#007bff] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#00c8ff]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* CARRUSEL BANNER - A TODO EL ANCHO */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#001a3d] w-full">
            {/* Contenedor de imágenes */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[450px]">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay con texto */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002B5C]/90 via-[#002B5C]/50 to-transparent p-6 pt-20">
                    <h3 className="text-white font-bold text-2xl mb-1">{image.title}</h3>
                    <p className="text-white/80 text-lg">{image.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicadores (puntos) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-10' 
                      : 'bg-white/50 hover:bg-white/70 w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#00c8ff]" />
              <span className="text-white/90 text-sm font-medium">Unión con Fiel Pet Seguro</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Comida{' '}
              <span className="text-[#00c8ff]">real</span>
              <br />
              para perros{' '}
              <span className="relative">
                felices
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#00c8ff" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Alimentación natural cocida a baja temperatura. Sin conservantes, 
              100% nutritiva y hecha con amor para tu mejor amigo.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <span className="text-[#00c8ff]">{benefit.icon}</span>
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onSectionChange('catalogo')}
                className="btn-matilu-secondary flex items-center gap-2 group"
              >
                Ver Catálogo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onSectionChange('calculadora')}
                className="btn-matilu-outline border-white text-white hover:bg-white hover:text-[#002B5C] flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Calcular Ración
              </button>
            </div>
          </div>

          {/* Right Content - Features Cards */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Main Feature Card */}
              <div className="sm:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#00c8ff] rounded-2xl flex items-center justify-center">
                    <Percent className="w-7 h-7 text-[#002B5C]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">10% OFF</h3>
                    <p className="text-white/70 text-sm">En cualquier compra con Fiel Pet</p>
                  </div>
                </div>
                <a
                  href="https://www.fielpet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00c8ff] hover:text-white transition-colors text-sm font-medium"
                >
                  Conocer Fiel Pet
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Feature Cards */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    if (feature.title === 'Calculadora') onSectionChange('calculadora');
                    else if (feature.title === 'Membresías') onSectionChange('catalogo');
                    else onSectionChange('catalogo');
                  }}
                >
                  <div className="w-12 h-12 bg-[#007bff]/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-[#00c8ff]">{feature.icon}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-[#00c8ff] to-[#007bff] rounded-full border-2 border-[#002B5C] flex items-center justify-center"
                  >
                    <Dog className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">+1000 perros felices</p>
                <p className="text-white/60 text-xs">Ya comen Matilú</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8f9fa"
          />
        </svg>
      </div>
    </section>
  );
}

// Dog icon component for the trust badge
function Dog({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.855-1.24 2.344-2.5"/>
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.24-2.344-2.5"/>
      <path d="M8 14v.5"/>
      <path d="M16 14v.5"/>
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/>
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
    </svg>
  );
}