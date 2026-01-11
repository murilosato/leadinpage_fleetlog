
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DashboardMockup, HistoryMockup, ChecklistMockup, OficinaMockup, ReportsMockup } from './VisualMockups.tsx';

const screenshots = [
  {
    title: 'Painel Operacional',
    description: 'Interface limpa com acesso rápido aos quatro pilares da gestão da sua frota.',
    component: <DashboardMockup />,
    image: 'input_file_3.png'
  },
  {
    title: 'Checklists Digitais',
    description: 'Vistorias passo a passo por categorias (Motor, Cabine, Pneus) com registro de status em tempo real.',
    component: <ChecklistMockup />,
    image: 'input_file_2.png'
  },
  {
    title: 'Histórico de Abastecimento',
    description: 'Controle preciso de litros, KM e horímetro com filtros inteligentes para auditoria.',
    component: <HistoryMockup />,
    image: 'input_file_5.png'
  },
  {
    title: 'Oficina e Manutenções',
    description: 'Acompanhamento em tempo real de paradas para manutenção preventiva e corretiva.',
    component: <OficinaMockup />,
    image: 'input_file_6.png'
  },
  {
    title: 'Relatórios Gerenciais',
    description: 'Transforme dados operacionais em decisões estratégicas com relatórios exportáveis.',
    component: <ReportsMockup />,
    image: 'input_file_4.png'
  }
];

const AppTour: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { offsetWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -offsetWidth : offsetWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="tour" className="py-32 bg-slate-950 overflow-hidden border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Experiência do Usuário</h2>
        <p className="text-4xl sm:text-5xl font-extrabold text-white mb-8 tracking-tight">
          Feito para quem vive o <span className="text-[#00558C] italic underline decoration-blue-500/30">chão de fábrica</span>
        </p>
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto rounded-full"></div>
      </div>

      <div className="relative group max-w-[1400px] mx-auto">
        {/* Setas de Navegação */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#00558C] transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#00558C] transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
          aria-label="Próximo"
        >
          <ChevronRight size={32} />
        </button>

        {/* Container do Carrossel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-10 gap-6 sm:gap-10 px-4 sm:px-[10%] no-scrollbar snap-x snap-mandatory"
        >
          {screenshots.map((screen, idx) => (
            <div key={idx} className="flex-none w-[85vw] sm:w-[500px] lg:w-[850px] snap-center">
              <div className="group/card bg-[#0a0f1d] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl transition-all duration-700 hover:border-[#00558C]/50">
                <div className="px-6 sm:px-10 py-5 sm:py-7 bg-[#111827] border-b border-white/5 flex justify-between items-center">
                   <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                      <span className="text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] ml-2 hidden sm:inline">{screen.title}</span>
                   </div>
                   <div className="text-[10px] text-blue-500 font-black bg-blue-500/10 px-4 py-1.5 rounded-full uppercase tracking-widest">FleetLog v2.5</div>
                </div>
                
                <div className="aspect-[16/9] p-4 sm:p-8 bg-slate-950 relative">
                  <div className="w-full h-full relative z-10 flex items-center justify-center">
                    <img 
                      src={screen.image} 
                      alt={screen.title} 
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const sibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                        if (sibling) sibling.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full">
                      {screen.component}
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
                </div>

                <div className="px-8 sm:px-16 py-8 sm:py-12 bg-[#0f172a] border-t border-white/5">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 tracking-tight">{screen.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">{screen.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Posição (Dots) */}
        <div className="flex justify-center mt-8 space-x-3">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const width = scrollRef.current.offsetWidth;
                  scrollRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#00558C]' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AppTour;
