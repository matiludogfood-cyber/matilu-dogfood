// src/components/StickyHeader.tsx
import React, { useState, useEffect } from 'react';

interface StickyHeaderProps {
  logoSrc: string;
  phoneNumber: string;
  whatsappMessage?: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  logoSrc,
  phoneNumber,
  whatsappMessage = 'Hola Matilú! Quiero hacer mi primer pedido 🐶',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const showThreshold = 300; // Mostrar después de 300px de scroll
      
      // Mostrar si bajó más del umbral
      if (currentScrollY > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 
        bg-white/95 backdrop-blur-md shadow-sm
        transition-transform duration-300 ease-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src={logoSrc} 
              alt="Matilú Dog Food" 
              className="h-10 w-auto"
            />
          </a>

          {/* Navegación - visible en tablet/desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-slate-700 hover:text-[#25D366] text-sm font-medium transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-slate-700 hover:text-[#25D366] text-sm font-medium transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-slate-700 hover:text-[#25D366] text-sm font-medium transition-colors"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="text-slate-700 hover:text-[#25D366] text-sm font-medium transition-colors"
            >
              Calculadora
            </button>
          </nav>

          {/* CTA WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 
              bg-gradient-to-r from-[#25D366] to-[#128C7E]
              text-white px-4 py-2 rounded-full
              text-sm font-semibold
              hover:shadow-lg hover:-translate-y-0.5
              transition-all duration-200"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
              <path d="M16.002 2.001c-7.732 0-14 6.268-14 14 0 2.47.642 4.868 1.86 6.987L2.001 29.999l7.175-1.862A13.936 13.936 0 0016.002 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm8.236 19.836c-.342.964-1.998 1.774-2.78 1.89-.742.11-1.476.106-2.14-.034-.492-.106-1.116-.27-1.886-.528-3.316-1.152-5.486-4.108-5.65-4.326-.164-.218-1.348-1.794-1.348-3.424 0-1.63.854-2.428 1.156-2.76.302-.332.664-.416.886-.416.222 0 .444.002.638.012.204.01.476-.078.746.568.27.646.92 2.244 1.002 2.408.082.164.136.356.026.576-.11.22-.166.356-.332.544-.166.188-.348.394-.498.53-.166.148-.34.31-.146.608.194.298.862 1.42 1.848 2.298 1.27 1.126 2.34 1.474 2.674 1.638.334.164.53.136.726-.082.196-.218.832-.968 1.054-1.302.222-.334.444-.278.746-.166.302.112 1.924.908 2.254 1.072.33.164.55.248.63.388.08.14.058.814-.284 1.778z"/>
            </svg>
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
            <span className="sm:hidden">Pedir</span>
          </a>

        </div>
      </div>
    </header>
  );
};

export default StickyHeader;