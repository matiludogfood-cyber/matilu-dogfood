import { useEffect, useRef, useState } from 'react';
import { Leaf, Shield, ChefHat, Home, Dog, Heart, ArrowRight } from 'lucide-react';
import type { Section } from '@/types';

interface BenefitsSectionProps {
  onSectionChange?: (section: Section) => void;
}

export function BenefitsSection({ onSectionChange }: BenefitsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
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

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Natural',
      description: 'Ingredientes frescos y naturales, sin químicos ni procesados industriales.',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sin Conservantes',
      description: 'Elaborado sin conservantes artificiales, colorantes ni aditivos.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Balanceado Nutricionalmente',
      description: 'Fórmulas diseñadas por especialistas para una dieta completa y equilibrada.',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Cocido a Baja Temperatura',
      description: 'Preservamos todos los nutrientes esenciales con cocción lenta y controlada.',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Hecho en Casa',
      description: 'Preparado artesanalmente como en casa, con el mismo cuidado y dedicación.',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: 'Todas las Razas',
      description: 'Opciones adaptadas para perros de todos los tamaños, edades y necesidades.',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section ref={sectionRef} className="section-matilu bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-matilu mb-4 inline-block">Beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Nuestro alimento está pensado para brindar{' '}
            <span className="text-[#007bff]">la mejor nutrición</span> a tu perro
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu perro merece ingredientes que entiendas. Sin químicos, sin misterios.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => onSectionChange?.('catalogo')}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white">{benefit.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>

              {/* Link */}
              <div className="flex items-center gap-2 text-[#007bff] group-hover:text-[#002B5C] transition-colors text-sm font-medium">
                Ver productos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => onSectionChange?.('calculadora')}
            className="btn-matilu-primary inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Descubrí el plan para tu perro
          </button>
        </div>
      </div>
    </section>
  );
}