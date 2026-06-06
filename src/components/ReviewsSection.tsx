import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Lista de tus reseñas (imágenes)
const reviews = [
  {
    id: 1,
    image: '/images/reviews/review-1.jpg',
    alt: 'Reseña de cliente feliz con Matilú',
  },
  {
    id: 2,
    image: '/images/reviews/review-2.jpg',
    alt: 'Reseña de dueño de perro satisfecho',
  },
  {
    id: 3,
    image: '/images/reviews/review-3.jpg',
    alt: 'Testimonio de cliente de Matilú Dog Food',
  },
  {
    id: 4,
    image: '/images/reviews/review-4.jpg',
    alt: 'Reseña positiva de alimentación natural',
  },
  {
    id: 5,
    image: '/images/reviews/review-5.jpg',
    alt: 'Cliente recomienda Matilú',
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="section-matilu bg-gradient-to-br from-[#f8f9fa] via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="font-medium">Lo que dicen nuestros clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Reseñas <span className="text-[#007bff]">reales</span> 🐕
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dueños de perros que ya confían en Matilú y ven los resultados.
          </p>
        </div>

        {/* Carrusel de reseñas */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Contenedor principal */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="w-full flex-shrink-0 p-4 md:p-8"
                >
                  <div className="max-w-2xl mx-auto">
                    {/* Marco decorativo */}
                    <div className="relative">
                      {/* Comillas decorativas */}
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00c8ff] opacity-30" />
                      
                      {/* Imagen de la reseña */}
                      <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden">
                        <img 
                          src={review.image}
                          alt={review.alt}
                          className="w-full h-auto rounded-xl shadow-sm"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#002B5C]" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="w-6 h-6 text-[#002B5C]" />
            </button>
          </div>

          {/* Indicadores (puntos) */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#002B5C] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
                aria-label={`Ver reseña ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <p className="text-center text-gray-500 text-sm mt-4">
            {currentIndex + 1} de {reviews.length} reseñas
          </p>
        </div>

        {/* CTA de confianza */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-green-500" />
            <span className="font-medium">+1000 perros felices ya comen Matilú</span>
          </div>
        </div>
      </div>
    </section>
  );
}