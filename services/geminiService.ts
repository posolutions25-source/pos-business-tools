
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getToolRecommendation = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User asks: ${userInput}`,
      config: {
        systemInstruction: `You are the POS Growth Advisor, an AI assistant for POS Business Tools. 
        Your goal is to recommend the best digital tool from our catalog based on the user's needs.
        Catalog:
        - Digital Calendars: For planning, goal setting, and time management.
        - Guided Journals: For habit building, mindset reset, and accountability.
        - Audiobooks & Audio Guides: For learning on the go and mental reprogramming.
        - Productivity Systems: For workflow automation, templates, and scaling operations.

        Provide a concise, encouraging recommendation. If they seem overwhelmed, suggest the Journal or Audio Guide. If they are scaling, suggest Systems. If they lack focus, suggest Calendars.
        Keep it professional, motivational, and brief (under 100 words).`,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a recommendation right now. Try browsing our 'Shop All' section!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The advisor is currently offline. Please explore our featured tools below!";
  }
};
