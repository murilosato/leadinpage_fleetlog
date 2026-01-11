
import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { DashboardMockup } from './VisualMockups';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="input_file_1.png" 
          alt="" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-[#00558C]/20 border border-[#00558C]/30 px-4 py-2 rounded-full text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase">
              <ShieldCheck size={14} className="animate-pulse" />
              <span>SISTEMA DE GESTÃO ESPECIALIZADO</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-8 tracking-tighter">
              Sua Frota no <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Próximo Nível</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
              Controle abastecimento, lubrificantes, oficina e checklists com um software focado na sua operação. Simples, direto e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollToSection('booking')}
                className="px-10 py-5 bg-[#00558C] hover:bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-blue-900/40 hover:-translate-y-1"
              >
                <span>Agendar Demonstração</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('tour')}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all border border-white/10 backdrop-blur-md"
              >
                <PlayCircle size={20} />
                <span>Ver Interface</span>
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative z-20 rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_0_80px_-12px_rgba(59,130,246,0.4)] backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-700 aspect-[16/10] w-[600px] overflow-hidden">
               <img 
                src="input_file_3.png" 
                alt="FleetLog Dashboard" 
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/5"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full">
                <DashboardMockup />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
