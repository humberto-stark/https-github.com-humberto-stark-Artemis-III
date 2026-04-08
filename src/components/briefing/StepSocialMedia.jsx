import React from 'react';

export default function StepSocialMedia({ data, onChange }) {
  const plataformas = ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Pinterest', 'YouTube'];

  const handleTogglePlataforma = (plat) => {
    const current = data.plataformas || [];
    if (current.includes(plat)) {
      onChange({ ...data, plataformas: current.filter(p => p !== plat) });
    } else {
      onChange({ ...data, plataformas: [...current, plat] });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Social Media</h2>
      <p className="text-gray-500">Onde sua marca estará presente?</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Plataformas Prioritárias</label>
          <div className="flex flex-wrap gap-2">
            {plataformas.map((plat) => (
              <button
                key={plat}
                onClick={() => handleTogglePlataforma(plat)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  data.plataformas?.includes(plat)
                    ? 'bg-purple-600 border-purple-600 text-white font-bold'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Frequência de Postagem</label>
          <select
            name="frequenciaPostagem"
            value={data.frequenciaPostagem}
            onChange={(e) => onChange({ ...data, frequenciaPostagem: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="">Selecione...</option>
            <option value="diaria">Diária</option>
            <option value="3-vezes">3 vezes por semana</option>
            <option value="semanal">Semanal</option>
            <option value="conforme-demanda">Conforme demanda</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Referências Visuais (Links ou Nomes)</label>
          <textarea
            name="referenciasVisuais"
            value={data.referenciasVisuais}
            onChange={(e) => onChange({ ...data, referenciasVisuais: e.target.value })}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Quais perfis você admira? O que gosta neles?"
          />
        </div>
      </div>
    </div>
  );
}
