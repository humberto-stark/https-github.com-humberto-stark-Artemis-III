import React from 'react';

export default function StepNav({ currentStep, totalSteps, onBack, onNext, isLastStep }) {
  return (
    <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
      <button
        onClick={onBack}
        disabled={currentStep === 0}
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
          currentStep === 0 
            ? 'text-gray-300 cursor-not-allowed' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Voltar
      </button>
      <button
        onClick={onNext}
        className="px-8 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
      >
        {isLastStep ? 'Briefing Completo' : 'Próximo'}
      </button>
    </div>
  );
}
