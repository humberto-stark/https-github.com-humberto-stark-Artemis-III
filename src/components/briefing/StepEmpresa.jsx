import React from 'react';

export default function StepEmpresa({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Sobre a Empresa</h2>
      <p className="text-gray-500">Conte-nos o básico sobre o seu negócio.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
          <input
            type="text"
            name="nomeEmpresa"
            value={data.nomeEmpresa}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            placeholder="Ex: Clínica Estética Glow"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Segmento</label>
          <input
            type="text"
            name="segmento"
            value={data.segmento}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            placeholder="Ex: Harmonização Facial e Corporal"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Site ou Redes Sociais atuais</label>
          <input
            type="text"
            name="siteRedesSociais"
            value={data.siteRedesSociais}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            placeholder="Ex: @clinica.glow ou www.clinicaglow.com.br"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição da Empresa</label>
          <textarea
            name="descricaoEmpresa"
            value={data.descricaoEmpresa}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            placeholder="O que vocês fazem? Qual o diferencial?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status da Logo Atual</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'nenhum', label: 'Não tenho logo' },
              { id: 'refazer', label: 'Quero refazer do zero' },
              { id: 'manter', label: 'Quero modernizar a atual' },
              { id: 'rascunho', label: 'Tenho apenas um rascunho' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => onChange({ ...data, statusLogo: opt.id })}
                className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                  data.statusLogo === opt.id
                    ? 'bg-purple-50 border-purple-600 text-purple-700 font-bold'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
