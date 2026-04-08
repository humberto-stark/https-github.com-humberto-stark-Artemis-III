import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ConfirmacaoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-purple-100 p-10 text-center border border-gray-100 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Briefing enviado com sucesso!</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Nossa equipe já recebeu suas informações e em breve entrará em contato para dar início ao projeto.
        </p>

        <button
          onClick={() => navigate('/')}
          className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
        >
          Voltar ao Início
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex justify-center items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center font-black italic text-white text-[10px]">S</div>
            <span className="text-[10px] font-black tracking-tighter uppercase italic text-gray-400">
              Stark <span className="text-gray-300 not-italic">Briefing Engine</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
