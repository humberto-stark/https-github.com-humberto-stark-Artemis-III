import { buildPrompt } from '../utils/buildPrompt';

export async function processarBriefing(briefingData) {
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_CLAUDE_API_KEY não encontrada.');
  }

  const prompt = buildPrompt(briefingData);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(`Erro Claude: ${err.error?.message}`);
  }

  const data = await response.json();
  const text = data.content[0].text;
  const clean = text.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(clean);
  } catch (error) {
    console.error("Erro ao parsear JSON:", error);
    console.log("Texto original:", text);
    throw new Error("Falha ao processar o briefing. Tente novamente.");
  }
}
