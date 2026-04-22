import { useEffect, useRef, useState } from 'react';
import { Heart, Leaf, ChefHat, Shield, Award, Users, Check } from 'lucide-react';

export function AboutSection() {
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

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hecho con amor',
      description: 'Cada porción está preparada pensando en la salud y felicidad de tu perro.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Natural',
      description: 'Sin conservantes artificiales, colorantes ni aditivos químicos.',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Cocido artesanal',
      description: 'Elaborado a baja temperatura para preservar todos los nutrientes.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Calidad garantizada',
      description: 'Ingredientes seleccionados y procesos controlados.',
    },
  ];

  const benefits = [
    'Piel y pelaje más saludable',
    'Mayor energía y vitalidad',
    'Digestión mejorada',
    'Menos heces y olor',
    'Peso ideal',
    'Sistema inmune fortalecido',
  ];

  const stats = [
    { number: '1000+', label: 'Perros felices' },
    { number: '15+', label: 'Variedades de snacks' },
    { number: '3', label: 'Niveles de membresía' },
    { number: '100%', label: 'Natural' },
  ];

  return (
    <section ref={sectionRef} className="section-matilu bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="badge-matilu mb-4 inline-block">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
              La historia de <span className="text-[#007bff]">Matilú</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Matilú nació de un amor incondicional por los perros y la convicción de que merecen 
                comida real, nutritiva y deliciosa. Todo comenzó cuando nuestra fundadora, buscando 
                la mejor alimentación para sus propios perros, decidió crear recetas caseras que 
                combinaran nutrición y sabor.
              </p>
              <p>
                Lo que empezó como un proyecto personal rápidamente se convirtió en una misión: 
                democratizar el acceso a la alimentación natural para perros en Argentina. 
                Hoy, Matilú alimenta a mas de 200 perros felices.
              </p>
              <p>
                Nuestro nombre viene de "Maia" "Titan" y "Luna", los tres perritos que inspiraron 
                este sueño. Cada bolsa de Matilú lleva ese mismo amor que les tenemos a ellos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-[#f8f9fa] rounded-xl">
                  <p className="text-2xl font-bold text-[#002B5C]">{stat.number}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* FOTO DE LOS PERROS - MAIA, TITAN Y LUNA */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/familia.png" 
                  alt="Maia, Titan y Luna - Los perritos que inspiraron Matilú"
                  className="w-full h-full object-cover"
                />
                {/* Overlay sutil con el texto */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Maia, Titan y Luna</p>
                  <p className="text-white/80 text-sm">Los perritos que inspiraron Matilú</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#002B5C]">Aprobado por</p>
                    <p className="text-sm text-gray-500">veterinarios</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#002B5C]">Calidad</p>
                    <p className="text-sm text-gray-500">premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4">
              Nuestros valores
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lo que nos mueve cada día a dar lo mejor para tu perro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#002B5C] to-[#007bff] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white">{value.icon}</span>
                </div>
                <h4 className="font-bold text-[#002B5C] mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-[#FFF8E7] rounded-3xl overflow-hidden relative">
              {/* 👇 REEMPLAZA ESTA RUTA CON TU FOTO */}
              <img 
                src="/images/perro-beneficios.png" 
                alt="Perro feliz y saludable con Matilú"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4">
              ¿Por qué elegir Matilú?
            </h3>
            <p className="text-gray-600 mb-8">
              La alimentación natural tiene beneficios que se notan desde las primeras semanas. 
              Nuestros clientes reportan mejoras significativas en la salud y bienestar de sus perros.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team/Community */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#002B5C] to-[#004a9e] rounded-3xl p-8 md:p-12">
            <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Únete a la comunidad Matilú
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Miles de familias ya eligieron Matilú para alimentar a sus perros. 
              Sé parte de nuestra comunidad y comparte la experiencia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/Matilú.dog.food"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#002B5C] px-6 py-3 rounded-xl font-semibold hover:bg-[#00c8ff] hover:text-white transition-colors"
              >
                Seguir en Instagram
              </a>
              <a
                href="https://wa.me/5491151774724"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                Unirse al grupo de WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}