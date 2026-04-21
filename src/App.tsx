import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { HeroSection } from '@/sections/HeroSection';
import { CatalogSection } from '@/sections/CatalogSection';
import { CalculatorSection } from '@/sections/CalculatorSection';
import { AboutSection } from '@/sections/AboutSection';
import { ContactSection } from '@/sections/ContactSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { MembershipSteps } from '@/components/MembershipSteps';
import { Toaster } from '@/components/ui/sonner';
import type { Section } from '@/types';

// ==========================================
// CONFIGURACIÓN
// ==========================================
const WHATSAPP_NUMBER = '5491151774724';
const WHATSAPP_MESSAGE = 'Hola Matilú! 👋 Vi su página y quiero conocer los planes de alimentación para mi perro. 🐶';
const LOGO_URL = '/images/logo-matilu.png';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('inicio');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  // Show WhatsApp button and sticky header after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowWhatsAppButton(scrollY > 300);
      setShowStickyHeader(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  // URL de WhatsApp con mensaje predefinido
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return (
          <>
            <HeroSection onSectionChange={setCurrentSection} />
            <BenefitsSection />
            <MembershipSteps onSectionChange={setCurrentSection} />
          </>
        );
      case 'catalogo':
        return <CatalogSection onCartClick={() => setIsCartOpen(true)} />;
      case 'calculadora':
        return <CalculatorSection onSectionChange={(section) => setCurrentSection(section as Section)} />;
      case 'nosotros':
        return <AboutSection />;
      case 'contacto':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection onSectionChange={setCurrentSection} />
            <BenefitsSection />
            <MembershipSteps onSectionChange={setCurrentSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* ========================================== */}
      {/* STICKY HEADER - aparece al hacer scroll    */}
      {/* ========================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ease-out ${
          showStickyHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => setCurrentSection('inicio')}
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <img 
                src={LOGO_URL} 
                alt="Matilú Dog Food" 
                className="h-10 w-auto"
              />
            </button>

            {/* Navegación - visible en tablet/desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setCurrentSection('inicio')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'inicio' ? 'text-[#25D366]' : 'text-slate-600 hover:text-[#25D366]'
                }`}
              >
                Inicio
              </button>
              <button 
                onClick={() => setCurrentSection('catalogo')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'catalogo' ? 'text-[#25D366]' : 'text-slate-600 hover:text-[#25D366]'
                }`}
              >
                Productos
              </button>
              <button 
                onClick={() => setCurrentSection('calculadora')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'calculadora' ? 'text-[#25D366]' : 'text-slate-600 hover:text-[#25D366]'
                }`}
              >
                Calculadora
              </button>
              <button 
                onClick={() => setCurrentSection('nosotros')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'nosotros' ? 'text-[#25D366]' : 'text-slate-600 hover:text-[#25D366]'
                }`}
              >
                Nosotros
              </button>
              <button 
                onClick={() => setCurrentSection('contacto')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'contacto' ? 'text-[#25D366]' : 'text-slate-600 hover:text-[#25D366]'
                }`}
              >
                Contacto
              </button>
            </nav>

            {/* CTA WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
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

      {/* Header original (solo visible al inicio) */}
      <div className={`transition-opacity duration-300 ${showStickyHeader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Header
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
          onCartClick={() => setIsCartOpen(true)}
        />
      </div>

      {/* Main Content */}
      <main className="pt-20">
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* ========================================== */}
      {/* FLOATING WHATSAPP BUTTON - mejorado        */}
      {/* ========================================== */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Matilú Dog Food"
        className={`fixed bottom-6 right-6 z-50 
          flex items-center justify-center gap-2
          bg-gradient-to-br from-[#25D366] to-[#128C7E] 
          text-white rounded-full shadow-lg
          hover:scale-110 hover:-translate-y-1 
          transition-all duration-300 ease-out
          ${showWhatsAppButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-3.5
          group`}
        style={{
          animation: showWhatsAppButton ? 'whatsapp-pulse 2s infinite' : 'none',
        }}
      >
        {/* Icono WhatsApp */}
        <svg 
          viewBox="0 0 32 32" 
          className="w-7 h-7 md:w-6 md:h-6 fill-current"
        >
          <path d="M16.002 2.001c-7.732 0-14 6.268-14 14 0 2.47.642 4.868 1.86 6.987L2.001 29.999l7.175-1.862A13.936 13.936 0 0016.002 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm8.236 19.836c-.342.964-1.998 1.774-2.78 1.89-.742.11-1.476.106-2.14-.034-.492-.106-1.116-.27-1.886-.528-3.316-1.152-5.486-4.108-5.65-4.326-.164-.218-1.348-1.794-1.348-3.424 0-1.63.854-2.428 1.156-2.76.302-.332.664-.416.886-.416.222 0 .444.002.638.012.204.01.476-.078.746.568.27.646.92 2.244 1.002 2.408.082.164.136.356.026.576-.11.22-.166.356-.332.544-.166.188-.348.394-.498.53-.166.148-.34.31-.146.608.194.298.862 1.42 1.848 2.298 1.27 1.126 2.34 1.474 2.674 1.638.334.164.53.136.726-.082.196-.218.832-.968 1.054-1.302.222-.334.444-.278.746-.166.302.112 1.924.908 2.254 1.072.33.164.55.248.63.388.08.14.058.814-.284 1.778z"/>
        </svg>
        
        {/* Texto visible solo en desktop */}
        <span className="hidden md:inline font-semibold text-sm whitespace-nowrap">
          Consultanos
        </span>
      </a>

      {/* Toast notifications */}
      <Toaster position="bottom-right" />

      {/* Estilos de animación */}
      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;