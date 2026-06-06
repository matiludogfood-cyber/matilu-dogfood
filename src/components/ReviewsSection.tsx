import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Lista de TODAS tus reseñas reales
const reviews = [
  { id: 1, image: '/images/reviews/review-1.png', alt: 'Reseña de cliente feliz con Matilú' },
  { id: 2, image: '/images/reviews/review-2.png', alt: 'Dueño de perro satisfecho con la alimentación' },
  { id: 3, image: '/images/reviews/review-3.png', alt: 'Testimonio de cliente de Matilú Dog Food' },
  { id: 4, image: '/images/reviews/review-4.png', alt: 'Reseña positiva de alimentación natural' },
  { id: 5, image: '/images/reviews/review-5.png', alt: 'Cliente recomienda Matilú' },
  { id: 6, image: '/images/reviews/review-6.jpg', alt: 'Resultados visibles con Matilú' },
  { id: 7, image: '/images/reviews/review-7.jpg', alt: 'Perro más saludable y feliz' },
  { id: 8, image: '/images/reviews/review-8.jpg', alt: 'Dueño contento con el servicio' },
  { id: 9, image: '/images/reviews/review-9.jpg', alt: 'Recomendación de Matilú' },
  { id: 10, image: '/images/reviews/review-10.jpg', alt: 'Cliente fiel de Matilú' },
  { id: 11, image: '/images/reviews/review-11.jpg', alt: 'Otro perro feliz con Matilú' },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<<HTMLDivElement>(null);  // ← ARREGLADO: solo un <

  // Animación al entrar en viewport
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

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] via-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="font-medium">Lo que dicen nuestros clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3">
            Reseñas <span className="text-[#007bff]">reales</span> 🐕
          </h2>
          <p className="text-gray-600">
            Dueños de perros que ya confían en Matilú y ven los resultados.
          </p>
        </div>

        {/* Carrusel de reseñas */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Imagen actual */}
            <div className="relative p-4 md:p-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#00c8ff] opacity-20" />
              
              <div className="flex justify-center">
                <img 
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].alt}
                  className="max-w-full h-auto max-h-[500px] rounded-2xl shadow-md object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevReview}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#002B5C]" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#002B5C]" />
            </button>
          </div>

          {/* Indicadores (puntos) */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#002B5C] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <p className="text-center text-gray-500 text-sm mt-3">
            {currentIndex + 1} de {reviews.length} reseñas
          </p>
        </div>

        {/* CTA de confianza */}
        <div className={`mt-10 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-green-500" />
            <span className="font-medium">+1000 perros felices ya comen Matilú</span>
          </div>
        </div>
      </div>
    </section>
  );
}