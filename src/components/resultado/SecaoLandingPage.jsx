import React from 'react';
import { Globe, MousePointer2, CheckCircle2 } from 'lucide-react';

export default function SecaoLandingPage({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Globe className="w-4 h-4" /> Estratégia de Landing Page
          </h3>
          <p className="text-xl text-white font-bold">{data.layout_recomendado}</p>
        </div>
        <div className="bg-purple-600 px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg shadow-purple-900/20">
          <MousePointer2 className="w-5 h-5 text-white" />
          <div>
            <span className="text-[10px] text-purple-200 uppercase font-bold block">CTA Principal</span>
            <span className="text-white font-bold">{data.cta_principal}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.secoes.map((secao, idx) => (
          <div key={idx} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 space-y-4 flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-900/50 text-purple-400 text-xs flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <h4 className="font-bold text-white">{secao.nome}</h4>
            </div>
            <p className="text-xs text-purple-400 font-medium bg-purple-900/20 self-start px-2 py-1 rounded">
              {secao.objetivo}
            </p>
            <p className="text-sm text-gray-400 flex-1 italic">
              "{secao.copy_sugerido}"
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
        <h4 className="text-gray-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" /> Diretrizes Visuais da LP
        </h4>
        <p className="text-gray-300 leading-relaxed">
          {data.diretrizes_visuais}
        </p>
      </div>
    </div>
  );
}
