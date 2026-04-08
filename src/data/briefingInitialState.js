export const briefingInitialState = {
  // Empresa
  nomeEmpresa: '',
  segmento: '',
  siteRedesSociais: '',
  descricaoEmpresa: '',
  statusLogo: '', // 'nenhum' | 'refazer' | 'manter' | 'rascunho'

  // Público & Tom
  faixaEtaria: '',
  generoPredominante: '',
  estiloVida: '',
  tomDeVoz: [], // múltipla seleção, max 3
  adjetivos: '',

  // Cores
  paletasSelecionadas: [], // múltipla seleção

  // Tipografia
  estilosFonte: [], // múltipla seleção

  // Landing Page
  layoutLP: '', // 'hero-centralizado' | 'split-hero' | 'visual-first'
  secoesLP: [], // múltipla seleção
  ctaPrincipal: '',

  // Social Media
  plataformas: [], // múltipla seleção
  frequenciaPostagem: '',
  referenciasVisuais: '',

  // Extras
  prazoEntrega: '',
  observacoesExtras: '',
}
