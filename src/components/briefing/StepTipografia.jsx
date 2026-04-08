import React from 'react';

export default function StepTipografia({ data, onChange }) {
  const estilos = [
    { id: 'serif', label: 'Serifada (Clássica)', desc: 'Elegância, tradição e luxo.', example: 'Aa' },
    { id: 'sans', label: 'Sem Serifa (Moderna)', desc: 'Limpeza, minimalismo e clareza.', example: 'Aa' },
    { id: 'script', label: 'Cursiva (Manuscrita)', desc: 'Personalidade, toque humano e delicadeza.', example: 'Aa' },
    { id: 'display', label: 'Display (Impacto)', desc: 'Ousadia, modernidade e força.', example: 'Aa' },
  ];

  const handleToggleEstilo = (id) => {
    const current = data.estilosFonte || [];
    if (current.includes(id)) {
      onChange({ ...data, estilosFonte: current.filter(e => e !== id) });
    } else {
      onChange({ ...data, estilosFonte: [...current, id] });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Tipografia</h2>
      <p className="text-gray-500">Como você quer que as pessoas leiam sua marca?</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {estilos.map((estilo) => (
          <button
            key={estilo.id}
            onClick={() => handleToggleEstilo(estilo.id)}
            className={`p-5 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
              data.estilosFonte?.includes(estilo.id)
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 bg-white hover:border-purple-200'
            }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl border ${
              estilo.id === 'serif' ? 'font-serif' : 
              estilo.id === 'sans' ? 'font-sans' : 
              estilo.id === 'script' ? 'italic' : 'font-black'
            }`}>
              {estilo.example}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">{estilo.label}</h4>
              <p className="text-xs text-gray-500">{estilo.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
