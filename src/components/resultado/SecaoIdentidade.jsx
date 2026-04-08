import React from 'react';
import { Palette, Type, Camera, Layout, Sparkles } from 'lucide-react';
import ColorSwatch from '../ui/ColorSwatch';
import TagList from '../ui/TagList';

export default function SecaoIdentidade({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-12">
      {/* Personalidade Visual */}
      <div className="space-y-4">
        <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Personalidade Visual
        </h3>
        <p className="text-xl text-white leading-relaxed max-w-3xl">
          {data.personalidade_visual}
        </p>
      </div>

      {/* Paleta de Cores */}
      <div className="space-y-6">
        <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
          <Palette className="w-4 h-4" /> Paleta de Cores
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch {...data.paleta.cor_primaria} />
          <ColorSwatch {...data.paleta.cor_secundaria} />
          <ColorSwatch {...data.paleta.cor_de_apoio} />
          <ColorSwatch {...data.paleta.cor_neutra} />
        </div>
      </div>

      {/* Tipografia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Type className="w-4 h-4" /> Tipografia
          </h4>
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-4 block">Fonte para Títulos</span>
              <div className="text-4xl mb-4 text-white" style={{ fontFamily: data.tipografia.fonte_titulo.nome }}>
                {data.tipografia.fonte_titulo.nome}
              </div>
              <p className="text-sm text-gray-400">{data.tipografia.fonte_titulo.racional}</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase font-bold mb-4 block">Fonte para Corpo</span>
              <div className="text-lg mb-4 text-gray-300" style={{ fontFamily: data.tipografia.fonte_corpo.nome }}>
                A estética é a harmonia entre o que se vê e o que se sente.
              </div>
              <p className="text-sm text-gray-400">{data.tipografia.fonte_corpo.racional}</p>
            </div>
          </div>
        </div>

        {/* Linguagem Fotográfica */}
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Camera className="w-4 h-4" /> Linguagem Fotográfica
          </h4>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 space-y-4">
            <p className="text-sm text-gray-300">{data.linguagem_fotografica.estilo_geral}</p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-500 font-bold block mb-1">Iluminação</span>
                <span className="text-white">{data.linguagem_fotografica.iluminacao}</span>
              </div>
              <div>
                <span className="text-gray-500 font-bold block mb-1">Composição</span>
                <span className="text-white">{data.linguagem_fotografica.composicao}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <span className="text-[10px] text-red-400 uppercase font-bold mb-2 block">O que evitar</span>
              <TagList tags={data.linguagem_fotografica.o_que_evitar} variant="negative" />
            </div>
          </div>
        </div>
      </div>

      {/* Moodboard & Arquetipia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-gray-800/50 to-transparent p-8 rounded-3xl border border-white/5">
          <h4 className="text-gray-400 text-xs font-bold uppercase mb-4">Moodboard Descritivo</h4>
          <p className="text-gray-300 leading-relaxed italic">
            {data.moodboard_descritivo}
          </p>
          <div className="mt-6">
            <TagList tags={data.linguagem_arquetipia.mood_palavras} variant="accent" />
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 space-y-4">
          <h4 className="text-gray-400 text-xs font-bold uppercase flex items-center gap-2">
            <Layout className="w-4 h-4" /> Metáforas Visuais
          </h4>
          <ul className="space-y-3">
            {data.linguagem_arquetipia.metaforas_visuais.map((meta, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span> {meta}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
