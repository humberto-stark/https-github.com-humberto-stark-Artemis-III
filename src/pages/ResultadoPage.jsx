import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Printer, Download, ChevronRight, AlertCircle } from 'lucide-react';

import SecaoDiagnostico from '../components/resultado/SecaoDiagnostico';
import SecaoIdentidade from '../components/resultado/SecaoIdentidade';
import SecaoLandingPage from '../components/resultado/SecaoLandingPage';
import SecaoSocialMedia from '../components/resultado/SecaoSocialMedia';

export default function ResultadoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`resultado_${id}`);
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      setError(true);
    }
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (error) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-sm">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Resultado não encontrado</h2>
          <p className="text-gray-400">O link que você acessou é inválido ou o resultado expirou.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans selection:bg-purple-600 selection:text-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-white/5 z-50 px-6 sm:px-12 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center font-black italic text-white">S</div>
          <h1 className="text-lg font-black tracking-tighter uppercase italic hidden sm:block">
            Stark <span className="text-gray-500 not-italic">Briefing Engine</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold transition-colors border border-white/10"
          >
            <Printer className="w-4 h-4" /> <span className="hidden sm:inline">Exportar PDF</span>
          </button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 sm:px-12 max-w-6xl mx-auto space-y-24">
        {/* Intro */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-purple-500 text-xs font-bold uppercase tracking-widest">
            <span>Diagnóstico Estratégico</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-500">ID: {id.split('-')[0]}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            {data.diagnostico.posicionamento.split(' ').slice(0, 3).join(' ')} <br />
            <span className="text-purple-600">{data.diagnostico.posicionamento.split(' ').slice(3).join(' ')}</span>
          </h2>
        </section>

        {/* Seções */}
        <section id="diagnostico" className="scroll-mt-32">
          <SecaoDiagnostico data={data.diagnostico} />
        </section>

        <section id="identidade" className="scroll-mt-32 pt-12 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-purple-600">01.</span> Identidade Visual
          </h2>
          <SecaoIdentidade data={data.identidade_visual} />
        </section>

        <section id="landing-page" className="scroll-mt-32 pt-12 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-purple-600">02.</span> Landing Page
          </h2>
          <SecaoLandingPage data={data.landing_page} />
        </section>

        <section id="social-media" className="scroll-mt-32 pt-12 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-purple-600">03.</span> Social Media
          </h2>
          <SecaoSocialMedia data={data.social_media} />
        </section>

        {/* Extras */}
        <section className="pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest">Sugestões de Tagline</h4>
            <div className="space-y-4">
              {data.extras.tagline_sugestoes.map((tag, idx) => (
                <div key={idx} className="text-2xl font-serif italic text-white border-l-2 border-purple-600 pl-6 py-2">
                  "{tag}"
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest">Próximos Passos</h4>
            <div className="space-y-3">
              {data.extras.proximos_passos.map((passo, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-300">{passo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Final */}
        <footer className="pt-24 text-center space-y-6">
          <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto flex items-center justify-center font-black italic text-white text-xl">S</div>
          <p className="text-gray-500 text-sm">
            Este diagnóstico foi gerado automaticamente pelo Stark Briefing Engine MVP.<br />
            &copy; {new Date().getFullYear()} Stark Marketing.
          </p>
        </footer>
      </main>

      {/* Estilos para Impressão */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background: white !important; color: black !important; }
          .bg-[#0F0F0F], .bg-[#1A1A1A] { background: white !important; }
          .text-white, .text-gray-300, .text-gray-400 { color: black !important; }
          .border-white/5, .border-white/10 { border-color: #eee !important; }
          .shadow-xl, .shadow-lg { box-shadow: none !important; }
          header, button { display: none !important; }
          main { padding-top: 0 !important; }
          section { page-break-inside: avoid; }
        }
      `}} />
    </div>
  );
}
