
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async analyzePlate(imageData: string) {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: SYSTEM_PROMPT },
            { 
              inlineData: { 
                mimeType: "image/jpeg", 
                data: imageData.split(',')[1] 
              } 
            }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plateNumber: { type: Type.STRING },
            color: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            summary: { type: Type.STRING }
          },
          required: ["plateNumber", "color", "confidence"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  }
}
