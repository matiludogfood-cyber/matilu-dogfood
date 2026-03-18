import { useEffect, useRef, useState } from 'react';
import { Leaf, Home, Thermometer, PawPrint, Check, Snowflake, Package, Clock, AlertCircle } from 'lucide-react';

export function BenefitsSection() {
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
      description: 'Ingredientes frescos y naturales, sin procesos industriales.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Sin conservantes',
      description: 'Sin aditivos químicos, colorantes ni preservantes artificiales.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Hecho en casa',
      description: 'Elaborado artesanalmente con los mismos estándares que usarías en tu hogar.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Cocido a baja temperatura',
      description: 'Preservamos todos los nutrientes naturales de los ingredientes.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: 'Apto para todas las razas',
      description: 'Desde perros mini hasta gigantes, todos pueden disfrutar Matilú.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Balanceado nutricionalmente',
      description: 'Fórmulas desarrolladas con base en estándares nutricionales veterinarios.',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  const instructions = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: 'Conservación',
      steps: [
        'Refrigeración: Mantener en la heladera hasta por 5 días',
        'Congelación: Conservar en el freezer hasta 3 meses sin perder nutrientes.',
        'Calidad intacta: Respetar siempre la cadena de frío para asegurar la integridad del alimento',
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Descongelado',
      steps: [
        'Descongelar en heladera',
        'Evitar: No descongelar a temperatura ambiente para prevenir bacterias',
        'Consumir en 48 hs',
      ],
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Porcionado',
      steps: [
        'Consultá nuestra calculadora para conocer la cantidad exacta según el peso.',
        'Recomendamos dividir la porción diaria en 2 o 3 comidas',
        'Ajustar la cantidad según el nivel de energía y actividad de tu perro.',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="section-matilu bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Benefits Grid */}
        <div className="text-center mb-16">
          <span className="badge-matilu mb-4 inline-block">Beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            ¿Por qué elegir Matilú?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra comida está pensada para brindar la mejor nutrición a tu perro
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Instructions Section */}
        <div className="bg-gradient-to-br from-[#002B5C] to-[#004a9e] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Instrucciones de uso
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Sigue estas recomendaciones para conservar y servir Matilú correctamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {instructions.map((instruction, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
                  {instruction.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{instruction.title}</h4>
                <ul className="space-y-2">
                  {instruction.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-[#00c8ff]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-8 bg-amber-500/20 rounded-2xl p-6 border border-amber-500/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-300 mb-1">Importante</h4>
                <p className="text-white/80 text-sm">
                  La transición a comida natural debe hacerse gradualmente durante 7-10 días. 
                  Mezcla Matilú con la comida actual aumentando la proporción gradualmente. 
                  Consulta con tu veterinario si tu perro tiene condiciones médicas especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
