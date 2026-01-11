
import React, { useState } from 'react';
import { Instagram, Globe, Mail, Phone } from 'lucide-react';
import { LogoPlaceholder } from './VisualMockups';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="mb-8 inline-block transition-transform hover:scale-105 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              {!imgError ? (
                <img 
                  src="input_file_0.png" 
                  alt="FleetLog Logo" 
                  className="h-9 w-auto block brightness-110"
                  onError={() => setImgError(true)}
                />
              ) : (
                <LogoPlaceholder />
              )}
            </div>
            <p className="max-w-sm mb-10 leading-relaxed text-slate-500 font-medium">
              Tecnologia especializada para gestão de frotas pesadas e logísticas, unindo simplicidade e dados estratégicos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fleet_Log" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-2xl hover:text-[#00558C] hover:bg-white/10 transition-all border border-white/5">
                <Instagram size={22} />
              </a>
              <a href="https://fleetlog25.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-2xl hover:text-[#00558C] hover:bg-white/10 transition-all border border-white/5">
                <Globe size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Plataforma</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition-colors">Funcionalidades</button></li>
              <li><button onClick={() => scrollToSection('tour')} className="hover:text-blue-400 transition-colors">Interface</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="hover:text-blue-400 transition-colors">Agendar Demo</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3 group">
                <Mail size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">murilojoaosato@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+55 67 99191-7463</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} FleetLog25 Hub. Hub de gestão para transporte.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
