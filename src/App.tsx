import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Instagram, Calculator, BookOpen } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import type { Section } from '@/types';

interface HeaderProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
  onCartClick: () => void;
}

export function Header({ currentSection, onSectionChange, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; section: Section; icon?: React.ReactNode }[] = [
    { label: 'Inicio', section: 'inicio' },
    { label: 'Catálogo', section: 'catalogo' },
    { label: 'Calculadora', section: 'calculadora', icon: <Calculator className="w-4 h-4" /> },
    { label: 'Blog', section: 'blog', icon: <BookOpen className="w-4 h-4" /> }, // ← BLOG AGREGADO
    { label: 'Nosotros', section: 'nosotros' },
    { label: 'Contacto', section: 'contacto' },
  ];

  const handleNavClick = (section: Section) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#002B5C]/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-[#002B5C] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo-matilu.png" 
              alt="Matilú Dog Food" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              Matilú
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  currentSection === item.section
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5491151774724"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Matilú.dog.food"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg hover:scale-110 transition-transform"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 bg-[#007bff] hover:bg-[#00c8ff] rounded-lg transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5 text-white group-hover:text-[#002B5C] transition-colors" />
              {totalItems > 0 && (
                <span className="cart-badge animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center gap-3 ${
                    currentSection === item.section
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
                <a
                  href="https://wa.me/5491151774724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-medium"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/Matilú.dog.food"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}