
import React, { useState } from 'react';
import { Send, MessageCircle, Instagram, Mail, Calendar } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitação de Demonstração:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const WHATSAPP_NUMBER = '5567991917463';
  const EMAIL_CONTACT = 'murilojoaosato@gmail.com';

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Olá Murilo, gostaria de agendar uma apresentação do FleetLog25 para minha empresa ${formData.company || ''}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Fale com Murilo Sato</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Agende uma Apresentação Personalizada
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg">
              Veja como o FleetLog25 resolve a dor de cabeça da gestão de frota. Mostraremos as telas reais e como automatizar seus alertas hoje mesmo.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-4 p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all group text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">WhatsApp</h4>
                  <p className="text-slate-500 text-xs tracking-wide">Falar Agora</p>
                </div>
              </button>

              <a 
                href="https://instagram.com/fleet_Log" 
                target="_blank" 
                className="flex items-center space-x-4 p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all shadow-inner">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Instagram</h4>
                  <p className="text-slate-500 text-xs tracking-wide">@fleet_Log</p>
                </div>
              </a>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail size={20} />
              </div>
              <span className="font-semibold">{EMAIL_CONTACT}</span>
            </div>
          </div>

          <div className="bg-[#111827] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-3xl relative">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                <p className="text-slate-400">Murilo entrará em contato em breve para confirmar seu horário.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      required
                      placeholder="Nome Completo"
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00558C] transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="text" 
                      required
                      placeholder="Empresa"
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00558C] transition-all"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="E-mail murilojoaosato@gmail.com"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00558C] transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    <input 
                      type="date" 
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00558C] transition-all appearance-none"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 bg-[#00558C] hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center space-x-3 text-lg group"
                >
                  <Calendar size={22} className="group-hover:scale-110 transition-transform" />
                  <span>Agendar Demonstração</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
