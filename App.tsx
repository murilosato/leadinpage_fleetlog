
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppTour from './components/AppTour';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-1">Veículos Ativos</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">30%</p>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-1">Economia Média</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">Zero</p>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-1">Uso de Papel</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">100%</p>
                <p className="text-slate-500 text-sm uppercase tracking-wide mt-1">Nacional</p>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <AppTour />

        {/* CTA Banner */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#00558C] to-indigo-900 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl shadow-blue-600/20 relative overflow-hidden group border border-blue-400/20">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Simplifique sua frota agora</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Junte-se a dezenas de gestores que já abandonaram o papel e as planilhas. 
                O FleetLog25 é o controle total na palma da sua mão.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://fleetlog25.vercel.app" 
                  target="_blank"
                  className="bg-white text-[#00558C] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1"
                >
                  Abrir Sistema
                </a>
                <a 
                  href="#booking" 
                  className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
                >
                  Agendar Demonstração
                </a>
              </div>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />

      {/* Floating WhatsApp for Mobile */}
      <a 
        href="https://wa.me/5567991917463" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 md:hidden"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
