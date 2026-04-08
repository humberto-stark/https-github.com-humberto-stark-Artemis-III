import React from 'react';
import { Target, MessageSquare, Zap, Quote } from 'lucide-react';
import TagList from '../ui/TagList';

export default function SecaoDiagnostico({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8">
      {/* Síntese */}
      <div className="bg-gradient-to-br from-purple-900/20 to-transparent p-8 rounded-3xl border border-purple-500/20">
        <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
          <Target className="w-4 h-4" /> Síntese da Marca
        </h3>
        <p className="text-2xl font-medium text-white leading-relaxed">
          {data.sintese}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arquétipos */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 space-y-4">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" /> Arquétipos
          </h4>
          <div className="space-y-4">
            <div>
              <span className="text-purple-400 font-bold block">{data.arquetipos.dominante}</span>
              <p className="text-sm text-gray-400 mt-1">{data.arquetipos.dominante_justificativa}</p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <span className="text-purple-300 font-bold block">{data.arquetipos.secundario}</span>
              <p className="text-sm text-gray-400 mt-1">{data.arquetipos.secundario_justificativa}</p>
            </div>
          </div>
        </div>

        {/* Tom de Voz */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 space-y-4">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-500" /> Tom de Voz
          </h4>
          <p className="text-sm text-gray-300">{data.tom_de_voz.perfil}</p>
          <div className="space-y-3">
            <div>
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-2 block">Palavras que usa</span>
              <TagList tags={data.tom_de_voz.palavras_que_usa} variant="positive" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-2 block">Palavras que evita</span>
              <TagList tags={data.tom_de_voz.palavras_que_evita} variant="negative" />
            </div>
          </div>
        </div>
      </div>

      {/* Posicionamento */}
      <div className="relative bg-purple-600/10 p-8 rounded-3xl border-l-4 border-purple-600">
        <Quote className="absolute top-4 right-4 w-12 h-12 text-purple-600/20" />
        <h4 className="text-purple-400 text-xs font-bold uppercase mb-2">Posicionamento Estratégico</h4>
        <p className="text-xl italic text-white font-serif">
          "{data.posicionamento}"
        </p>
      </div>

      {/* Oportunidades */}
      <div className="space-y-4">
        <h4 className="text-gray-400 text-xs font-bold uppercase">Oportunidades de Mercado</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.oportunidades.map((op, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 flex gap-3">
              <span className="text-purple-500 font-bold">0{idx + 1}.</span>
              <p className="text-sm text-gray-300">{op}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
