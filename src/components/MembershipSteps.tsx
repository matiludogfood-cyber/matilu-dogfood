import { useEffect, useRef, useState } from 'react';
import { Calculator, Package, MessageCircle, Truck, ArrowRight, Sparkles } from 'lucide-react';
import type { Section } from '@/types';

interface MembershipStepsProps {
  onSectionChange: (section: Section) => void;
}

const WHATSAPP_NUMBER = '5491151774724';
const WHATSAPP_MESSAGE = 'Hola Matilú! 👋 Quiero conocer más sobre las membresías y empezar con mi pedido. 🐶';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const steps = [
  {
    number: '01',
    icon: <Calculator className="w-8 h-8" />,
    title: 'Calculá la ración',
    description: 'Usá nuestra calculadora para establecer la ración diaria ideal para tu perro según su peso, edad y actividad.',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: '02',
    icon: <Package className="w-8 h-8" />,
    title: 'Seleccioná tu plan',
    description: 'Elegí la membresía que se adapte a las necesidades de tu mascota: Básica, Premium u Oro.',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    number: '03',
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Finalizá por WhatsApp',
    description: 'Comunicate con nosotros por WhatsApp para finalizar tu compra o solicitá más asesoría personalizada.',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    number: '04',
    icon: <Truck className="w-8 h-8" />,
    title: 'Recibí en tu casa',
    description: 'Te enviamos el producto directamente a tu domicilio con envío gratis en membresía Oro.',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

export function MembershipSteps({ onSectionChange }: MembershipStepsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-avanzar pasos cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section-matilu bg-gradient-to-br from-[#002B5C] via-[#003d7a] to-[#004a9e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#00c8ff] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#00c8ff]" />
            <span className="text-white/90 text-sm font-medium">Simple y rápido</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cómo funciona nuestra <span className="text-[#00c8ff]">membresía</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            En 4 simples pasos, tu perro empieza a comer saludable
          </p>
        </div>

        {/* Steps - Desktop (horizontal) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setActiveStep(idx)}
            >
              {/* Card */}
              <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full cursor-pointer ${activeStep === idx ? 'ring-2 ring-[#00c8ff] scale-105' : ''}`}>
                {/* Number */}
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-[#00c8ff] mb-3">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 hidden xl:block">
                  <ArrowRight className="w-6 h-6 text-[#00c8ff]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Steps - Mobile (vertical timeline) */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-white/20 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className={`${step.bgColor} rounded-2xl p-5 border ${step.borderColor} flex-1`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#002B5C]">{step.icon}</span>
                  <h3 className="text-[#002B5C] font-bold text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => onSectionChange('calculadora')}
            className="bg-[#00c8ff] hover:bg-[#007bff] text-[#002B5C] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            ¡Empecemos!
          </button>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Asesoramiento por WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Truck className="w-4 h-4 text-[#00c8ff]" />
            <span className="text-white/80 text-sm">Envío gratis en Oro</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Package className="w-4 h-4 text-[#00c8ff]" />
            <span className="text-white/80 text-sm">Paquetes personalizados</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-[#00c8ff]" />
            <span className="text-white/80 text-sm">Cancelá cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  );
}