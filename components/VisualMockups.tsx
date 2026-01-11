
import React from 'react';
import { ClipboardCheck, Fuel, Droplets, PenTool, CheckCircle2 } from 'lucide-react';

export const LogoPlaceholder = () => (
  <div className="flex items-center font-black tracking-tighter text-2xl">
    <span className="text-[#00558C]">FLEET</span>
    <span className="text-[#94a3b8]">LOG</span>
  </div>
);

export const DashboardMockup = () => (
  <div className="bg-[#0a0f1d] w-full h-full rounded-2xl overflow-hidden flex flex-col border border-white/5 shadow-2xl">
    <div className="p-4 bg-[#111827] border-b border-white/5 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[10px] text-[#00558C] font-bold uppercase tracking-wider">Painel Operacional</span>
        <span className="text-white font-bold text-sm">Bom dia, Gestor</span>
      </div>
      <div className="bg-[#1e293b] border border-white/10 rounded px-2 py-1 text-[10px] text-slate-400 font-mono">STATUS: OK</div>
    </div>
    <div className="p-4 grid grid-cols-2 gap-4 flex-1">
      <div className="bg-[#00558C] rounded-2xl p-4 text-white flex flex-col items-center justify-center space-y-3 shadow-lg border border-white/10 hover:brightness-110 transition-all">
        <div className="p-2 bg-white/10 rounded-lg"><ClipboardCheck size={20} /></div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-center">Checklist</span>
      </div>
      <div className="bg-[#10b981] rounded-2xl p-4 text-white flex flex-col items-center justify-center space-y-3 shadow-lg border border-white/10 hover:brightness-110 transition-all">
        <div className="p-2 bg-white/10 rounded-lg"><Fuel size={20} /></div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-center">Abastecimento</span>
      </div>
      <div className="bg-[#f59e0b] rounded-2xl p-4 text-white flex flex-col items-center justify-center space-y-3 shadow-lg border border-white/10 hover:brightness-110 transition-all">
        <div className="p-2 bg-white/10 rounded-lg"><Droplets size={20} /></div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-center">Lubrificante</span>
      </div>
      <div className="bg-[#ef4444] rounded-2xl p-4 text-white flex flex-col items-center justify-center space-y-3 shadow-lg border border-white/10 hover:brightness-110 transition-all">
        <div className="p-2 bg-white/10 rounded-lg"><PenTool size={20} /></div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-center">Oficina</span>
      </div>
    </div>
    <div className="p-3 bg-[#0f172a] text-center border-t border-white/5">
       <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold italic">FleetLog v2.5 Management System</div>
    </div>
  </div>
);

export const ChecklistMockup = () => (
  <div className="bg-[#0a0f1d] w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5 shadow-2xl">
    <div className="p-8 bg-[#111827] border-b border-white/5 flex justify-between items-start">
      <div>
        <h3 className="text-white font-bold text-2xl tracking-tight">Etapa 1: Desligado</h3>
        <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mt-1">Preencha todos os campos (*)</p>
      </div>
      <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-xs font-black">1/3</div>
    </div>
    <div className="p-8 space-y-10 overflow-y-auto bg-slate-950/50">
      <div>
        <div className="inline-block px-4 py-1.5 bg-[#00558C]/10 border border-[#00558C]/20 rounded-xl text-[#00558C] text-[10px] font-black uppercase tracking-[0.2em] mb-8">MOTOR</div>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h4 className="text-white text-sm font-bold leading-tight max-w-md uppercase tracking-tight">1. NÍVEL DE ÓLEO HIDRÁULICO - RECOLHER PISTÕES *</h4>
            <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 shrink-0">
              <button className="px-5 py-2 bg-[#00558C] text-white text-[10px] font-black rounded-lg shadow-lg">SIM</button>
              <button className="px-5 py-2 text-slate-600 text-[10px] font-black">NÃO</button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <button className="py-5 border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-[#00558C] hover:text-white transition-all">OK</button>
            <button className="py-5 border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-yellow-500 hover:text-white transition-all">FALTA</button>
            <button className="py-5 border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-red-500 hover:text-white transition-all">DEFEITO</button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5">
        <div className="inline-block px-4 py-1.5 bg-[#00558C]/10 border border-[#00558C]/20 rounded-xl text-[#00558C] text-[10px] font-black uppercase tracking-[0.2em] mb-8">CABINE INTERNA/EXTERNA</div>
        <div className="h-20 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center">
            <span className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">Próximos Itens</span>
        </div>
      </div>
    </div>
  </div>
);

export const HistoryMockup = () => (
  <div className="bg-[#0a0f1d] w-full h-full rounded-2xl overflow-hidden flex flex-col border border-white/5">
    <div className="p-4 bg-[#111827] border-b border-white/5 flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white">←</div>
      <span className="font-bold text-white text-sm uppercase tracking-wide">Histórico Recente</span>
    </div>
    <div className="p-4 space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-white tracking-wider uppercase">Veículo Log-00{i}</span>
            <span className="text-[9px] text-slate-500">Hoje às 14:30</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-bold text-emerald-400">45.5 L</span>
            <span className="text-[9px] text-slate-500 font-mono tracking-tighter">Diesel S10</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
