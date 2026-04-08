import React from 'react';

export default function StepResumo({ data }) {
  const Section = ({ title, children }) => (
    <div className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">{title}</h4>
      <div className="text-sm text-gray-700 space-y-1">{children}</div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-900">Resumo do Briefing</h2>
      <p className="text-gray-500">Revise suas informações antes de enviar para análise da IA.</p>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 max-h-[400px] overflow-y-auto">
        <Section title="Empresa">
          <p><strong>Nome:</strong> {data.nomeEmpresa || '-'}</p>
          <p><strong>Segmento:</strong> {data.segmento || '-'}</p>
          <p><strong>Status Logo:</strong> {data.statusLogo || '-'}</p>
        </Section>

        <Section title="Público & Tom">
          <p><strong>Público:</strong> {data.faixaEtaria} | {data.generoPredominante}</p>
          <p><strong>Tom de Voz:</strong> {data.tomDeVoz?.join(', ') || '-'}</p>
        </Section>

        <Section title="Visual">
          <p><strong>Paletas:</strong> {data.paletasSelecionadas?.join(', ') || '-'}</p>
          <p><strong>Fontes:</strong> {data.estilosFonte?.join(', ') || '-'}</p>
        </Section>

        <Section title="Landing Page">
          <p><strong>Layout:</strong> {data.layoutLP || '-'}</p>
          <p><strong>Seções:</strong> {data.secoesLP?.join(', ') || '-'}</p>
        </Section>

        <Section title="Social Media">
          <p><strong>Plataformas:</strong> {data.plataformas?.join(', ') || '-'}</p>
          <p><strong>Frequência:</strong> {data.frequenciaPostagem || '-'}</p>
        </Section>

        <Section title="Extras">
          <p><strong>Prazo:</strong> {data.prazoEntrega || '-'}</p>
        </Section>
      </div>

      <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
        <p className="text-xs text-purple-700 leading-relaxed">
          Ao clicar em <strong>Briefing Completo</strong>, nossa inteligência artificial processará seus dados para gerar um diagnóstico estratégico. Isso pode levar alguns segundos.
        </p>
      </div>
    </div>
  );
}
