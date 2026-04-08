import React from 'react';

export default function StepPublico({ data, onChange }) {
  const tomDeVozOptions = [
    'Sofisticado', 'Acolhedor', 'Autoritário', 'Inovador', 
    'Minimalista', 'Vibrante', 'Científico', 'Luxuoso'
  ];

  const handleToggleTom = (tom) => {
    const current = data.tomDeVoz || [];
    if (current.includes(tom)) {
      onChange({ ...data, tomDeVoz: current.filter(t => t !== tom) });
    } else if (current.length < 3) {
      onChange({ ...data, tomDeVoz: [...current, tom] });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Público & Tom</h2>
      <p className="text-gray-500">Para quem estamos falando e como devemos falar?</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Faixa Etária</label>
            <input
              type="text"
              name="faixaEtaria"
              value={data.faixaEtaria}
              onChange={(e) => onChange({ ...data, faixaEtaria: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Ex: 25 a 45 anos"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gênero Predominante</label>
            <input
              type="text"
              name="generoPredominante"
              value={data.generoPredominante}
              onChange={(e) => onChange({ ...data, generoPredominante: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Ex: Feminino (80%)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estilo de Vida do Cliente</label>
          <textarea
            name="estiloVida"
            value={data.estiloVida}
            onChange={(e) => onChange({ ...data, estiloVida: e.target.value })}
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="O que eles valorizam? O que fazem no tempo livre?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Tom de Voz (Selecione até 3)</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {tomDeVozOptions.map((tom) => (
              <button
                key={tom}
                onClick={() => handleToggleTom(tom)}
                className={`px-3 py-2 text-xs rounded-full border transition-all ${
                  data.tomDeVoz?.includes(tom)
                    ? 'bg-purple-600 border-purple-600 text-white font-bold'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'
                }`}
              >
                {tom}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adjetivos que definem a marca</label>
          <input
            type="text"
            name="adjetivos"
            value={data.adjetivos}
            onChange={(e) => onChange({ ...data, adjetivos: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Ex: Elegante, Moderna, Acolhedora, Premium"
          />
        </div>
      </div>
    </div>
  );
}
