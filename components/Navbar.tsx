
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoPlaceholder } from './VisualMockups';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group flex items-center justify-center min-h-[44px] transition-transform hover:scale-105"
            >
              {!imgError ? (
                <img 
                  src="input_file_0.png" 
                  alt="FleetLog" 
                  className="h-8 sm:h-10 w-auto object-contain block brightness-110 contrast-110"
                  onError={() => setImgError(true)}
                />
              ) : (
                <LogoPlaceholder />
              )}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white text-sm font-semibold tracking-wide transition-colors">Funcionalidades</button>
            <button onClick={() => scrollToSection('tour')} className="text-slate-400 hover:text-white text-sm font-semibold tracking-wide transition-colors">Interface</button>
            <button onClick={() => scrollToSection('booking')} className="text-slate-400 hover:text-white text-sm font-semibold tracking-wide transition-colors">Contato</button>
            <a 
              href="https://fleetlog25.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#00558C] hover:bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
            >
              Acessar Sistema
            </a>
          </div>

          <div className="md:hidden text-white">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/98 backdrop-blur-2xl border-t border-white/5 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <button onClick={() => scrollToSection('features')} className="block w-full text-left text-white text-lg font-medium py-2 border-b border-white/5">Funcionalidades</button>
          <button onClick={() => scrollToSection('tour')} className="block w-full text-left text-white text-lg font-medium py-2 border-b border-white/5">Interface</button>
          <button onClick={() => scrollToSection('booking')} className="block w-full text-left text-white text-lg font-medium py-2 border-b border-white/5">Contato</button>
          <a 
            href="https://fleetlog25.vercel.app" 
            className="block bg-[#00558C] text-white py-4 rounded-2xl font-bold text-center text-lg mt-4 shadow-xl"
          >
            Acessar Sistema
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
