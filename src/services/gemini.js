import { GoogleGenAI } from "@google/genai";
import { buildPrompt } from '../utils/buildPrompt';

export async function processarBriefing(briefingData) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY não encontrada.');
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = buildPrompt(briefingData);

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  const text = response.candidates[0].content.parts[0].text;
  const clean = text.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(clean);
  } catch (error) {
    console.error("Erro ao parsear JSON do Gemini:", error);
    console.log("Texto original:", text);
    throw new Error("Falha ao processar o briefing. Tente novamente.");
  }
}
