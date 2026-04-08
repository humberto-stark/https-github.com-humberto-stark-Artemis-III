import React from 'react';

export default function StepCores({ data, onChange }) {
  const paletas = [
    { id: 'luxo-dourado', label: 'Luxo & Ouro', colors: ['#D4AF37', '#1A1A1A', '#F5F5F5'] },
    { id: 'clean-estetica', label: 'Clean & Soft', colors: ['#E8D3D3', '#FFFFFF', '#A8A8A8'] },
    { id: 'moderno-tech', label: 'Moderno & Tech', colors: ['#7C3AED', '#0F172A', '#94A3B8'] },
    { id: 'natureza-calma', label: 'Natural & Zen', colors: ['#84A59D', '#F7EDE2', '#F5CAC3'] },
    { id: 'clinical-trust', label: 'Clínico & Confiança', colors: ['#0056B3', '#FFFFFF', '#E9ECEF'] },
    { id: 'vibrant-energy', label: 'Vibrante & Energia', colors: ['#F27D26', '#FFD166', '#06D6A0'] },
  ];

  const handleTogglePaleta = (id) => {
    const current = data.paletasSelecionadas || [];
    if (current.includes(id)) {
      onChange({ ...data, paletasSelecionadas: current.filter(p => p !== id) });
    } else {
      onChange({ ...data, paletasSelecionadas: [...current, id] });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Cores & Estilo</h2>
      <p className="text-gray-500">Quais cores mais combinam com a sua visão?</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paletas.map((paleta) => (
          <button
            key={paleta.id}
            onClick={() => handleTogglePaleta(paleta.id)}
            className={`p-4 rounded-xl border-2 transition-all text-left space-y-3 ${
              data.paletasSelecionadas?.includes(paleta.id)
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 bg-white hover:border-purple-200'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">{paleta.label}</span>
              {data.paletasSelecionadas?.includes(paleta.id) && (
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {paleta.colors.map((color, idx) => (
                <div 
                  key={idx} 
                  className="w-full h-8 rounded-md shadow-sm" 
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
