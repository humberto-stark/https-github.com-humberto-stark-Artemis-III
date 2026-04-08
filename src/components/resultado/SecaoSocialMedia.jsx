import React from 'react';
import { Share2, Calendar, Edit3 } from 'lucide-react';
import TagList from '../ui/TagList';

export default function SecaoSocialMedia({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Share2 className="w-4 h-4" /> Estratégia de Social Media
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-gray-400 text-sm mr-2">Plataformas Prioritárias:</span>
          <TagList tags={data.plataformas_prioritarias} variant="accent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pilares de Conteúdo */}
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-500" /> Pilares de Conteúdo
          </h4>
          <div className="space-y-4">
            {data.pilares_de_conteudo.map((pilar, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 space-y-2">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-white">{pilar.nome}</h5>
                  <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded uppercase font-bold">
                    {pilar.frequencia_sugerida}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{pilar.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diretrizes Visuais e Tom */}
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-pink-500" /> Diretrizes de Criação
          </h4>
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-3 block">Estética do Feed</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {data.diretrizes_visuais_feed}
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-3 block">Tom nas Legendas</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {data.tom_nas_legendas}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
