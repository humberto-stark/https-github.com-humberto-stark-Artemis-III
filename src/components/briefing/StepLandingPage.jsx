import React from 'react';

export default function StepLandingPage({ data, onChange }) {
  const layouts = [
    { id: 'hero-centralizado', label: 'Hero Centralizado', desc: 'Foco total na mensagem principal.' },
    { id: 'split-hero', label: 'Split Hero', desc: 'Equilíbrio entre imagem e texto.' },
    { id: 'visual-first', label: 'Visual First', desc: 'Imagens grandes e imersivas.' },
  ];

  const secoes = [
    'Sobre o Profissional', 'Tratamentos/Serviços', 'Depoimentos', 
    'Antes e Depois', 'Localização', 'FAQ', 'Formulário de Contato'
  ];

  const handleToggleSecao = (secao) => {
    const current = data.secoesLP || [];
    if (current.includes(secao)) {
      onChange({ ...data, secoesLP: current.filter(s => s !== secao) });
    } else {
      onChange({ ...data, secoesLP: [...current, secao] });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Landing Page</h2>
      <p className="text-gray-500">Como deve ser a estrutura da sua página de vendas?</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Estilo de Layout</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => onChange({ ...data, layoutLP: layout.id })}
                className={`p-4 text-left rounded-xl border-2 transition-all ${
                  data.layoutLP === layout.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-100 bg-white hover:border-purple-200'
                }`}
              >
                <h4 className="font-bold text-sm text-gray-800">{layout.label}</h4>
                <p className="text-xs text-gray-500 mt-1">{layout.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Seções Desejadas</label>
          <div className="flex flex-wrap gap-2">
            {secoes.map((secao) => (
              <button
                key={secao}
                onClick={() => handleToggleSecao(secao)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  data.secoesLP?.includes(secao)
                    ? 'bg-purple-600 border-purple-600 text-white font-bold'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'
                }`}
              >
                {secao}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Chamada para Ação (CTA) Principal</label>
          <input
            type="text"
            name="ctaPrincipal"
            value={data.ctaPrincipal}
            onChange={(e) => onChange({ ...data, ctaPrincipal: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Ex: Agendar Consulta via WhatsApp"
          />
        </div>
      </div>
    </div>
  );
}
