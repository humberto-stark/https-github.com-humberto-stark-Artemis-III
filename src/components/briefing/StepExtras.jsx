import React from 'react';

export default function StepExtras({ data, onChange }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Extras & Prazo</h2>
      <p className="text-gray-500">Últimos detalhes para fecharmos o briefing.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prazo de Entrega Desejado</label>
          <input
            type="text"
            name="prazoEntrega"
            value={data.prazoEntrega}
            onChange={(e) => onChange({ ...data, prazoEntrega: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Ex: 15 dias úteis"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Observações Extras</label>
          <textarea
            name="observacoesExtras"
            value={data.observacoesExtras}
            onChange={(e) => onChange({ ...data, observacoesExtras: e.target.value })}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Algo mais que não perguntamos mas é importante?"
          />
        </div>
      </div>
    </div>
  );
}
