import { GoogleGenAI } from "@google/genai";
import { buildPrompt } from '../utils/buildPrompt';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function processarBriefing(briefingData) {
  const prompt = buildPrompt(briefingData);

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  const text = response.text;

  // Remove possíveis blocos de código markdown que o Gemini pode adicionar
  const clean = text.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(clean);
  } catch (error) {
    console.error("Erro ao parsear JSON do Gemini:", error);
    console.log("Texto original:", text);
    throw new Error("Falha ao processar o briefing. Tente novamente.");
  }
}
