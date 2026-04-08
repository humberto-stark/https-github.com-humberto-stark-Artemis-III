import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { briefingInitialState } from '../data/briefingInitialState';
import { processarBriefing } from '../services/gemini';
import { enviarEmailDesigner } from '../services/email';

import ProgressBar from '../components/ui/ProgressBar';
import StepNav from '../components/ui/StepNav';

import StepEmpresa from '../components/briefing/StepEmpresa';
import StepPublico from '../components/briefing/StepPublico';
import StepCores from '../components/briefing/StepCores';
import StepTipografia from '../components/briefing/StepTipografia';
import StepLandingPage from '../components/briefing/StepLandingPage';
import StepSocialMedia from '../components/briefing/StepSocialMedia';
import StepExtras from '../components/briefing/StepExtras';
import StepResumo from '../components/briefing/StepResumo';

export default function BriefingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [briefingData, setBriefingData] = useState(briefingInitialState);
  const navigate = useNavigate();

  const totalSteps = 8;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    navigate('/processando');
    
    try {
      const resultado = await processarBriefing(briefingData);
      const id = uuidv4();
      
      localStorage.setItem(`resultado_${id}`, JSON.stringify(resultado));
      
      try {
        await enviarEmailDesigner(id);
      } catch (emailError) {
        console.error("Erro ao enviar e-mail:", emailError);
        // Prosseguimos mesmo se o e-mail falhar, o resultado está no localStorage
      }
      
      navigate('/confirmacao');
    } catch (error) {
      console.error("Erro no processamento:", error);
      alert("Ocorreu um erro ao processar seu briefing. Por favor, tente novamente.");
      navigate('/');
    }
  };

  const renderStep = () => {
    const props = { data: briefingData, onChange: setBriefingData };
    switch (currentStep) {
      case 0: return <StepEmpresa {...props} />;
      case 1: return <StepPublico {...props} />;
      case 2: return <StepCores {...props} />;
      case 3: return <StepTipografia {...props} />;
      case 4: return <StepLandingPage {...props} />;
      case 5: return <StepSocialMedia {...props} />;
      case 6: return <StepExtras {...props} />;
      case 7: return <StepResumo data={briefingData} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-purple-600 tracking-tighter uppercase italic">
            Stark <span className="text-gray-900 not-italic">Briefing Engine</span>
          </h1>
          <p className="text-gray-500 mt-2">Construindo identidades visuais de alto impacto.</p>
        </header>

        <main className="bg-white rounded-2xl shadow-xl shadow-purple-100 p-8 border border-gray-100">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          
          <div className="min-h-[400px]">
            {renderStep()}
          </div>

          <StepNav 
            currentStep={currentStep} 
            totalSteps={totalSteps} 
            onBack={handleBack} 
            onNext={handleNext}
            isLastStep={currentStep === totalSteps - 1}
          />
        </main>

        <footer className="mt-8 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Stark Marketing. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
