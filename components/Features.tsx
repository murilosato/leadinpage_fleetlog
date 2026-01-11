
import React from 'react';
import { Fuel, Droplets, Clock, ClipboardCheck, TrendingUp, Cpu } from 'lucide-react';

const featureList = [
  {
    title: 'Controle de Abastecimento',
    description: 'Monitore cada gota. Acompanhe o consumo médio por veículo e identifique desvios instantaneamente.',
    icon: <Fuel className="text-blue-500" size={32} />,
  },
  {
    title: 'Gestão de Lubrificantes',
    description: 'Nunca perca uma troca de óleo. Alertas automáticos baseados no uso real da sua frota.',
    icon: <Droplets className="text-blue-500" size={32} />,
  },
  {
    title: 'Horas de Manutenção',
    description: 'Planeje preventivas com precisão. Reduza o tempo de máquina parada com cronogramas inteligentes.',
    icon: <Clock className="text-blue-500" size={32} />,
  },
  {
    title: 'Checklist Veicular Digital',
    description: 'Substitua o papel. Realize inspeções rápidas via mobile com registro de fotos e observações.',
    icon: <ClipboardCheck className="text-blue-500" size={32} />,
  },
  {
    title: 'Inteligência de Dados',
    description: 'Dashboards completos para tomada de decisão baseada em fatos, não em palpites.',
    icon: <TrendingUp className="text-blue-500" size={32} />,
  },
  {
    title: 'Expansão Constante',
    description: 'Novas ferramentas sendo adicionadas mensalmente para cobrir todas as suas necessidades.',
    icon: <Cpu className="text-blue-500" size={32} />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">Funcionalidades</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Tudo o que você precisa para uma frota eficiente
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desenvolvido por quem entende de frota para quem vive o dia a dia da operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
