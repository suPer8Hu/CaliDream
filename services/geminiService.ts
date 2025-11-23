
import { GoogleGenAI, Type } from "@google/genai";
import { AiInsight, Language } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelInsights = async (
  dayTitle: string,
  route: string,
  locations: string[],
  language: Language
): Promise<AiInsight | null> => {
  try {
    const modelId = "gemini-2.5-flash";
    const locationString = locations.join(", ");
    
    // Prompt engineered for Social Media (Xiaohongshu/Instagram) style based on language
    const prompt = `
      You are a top travel influencer with millions of followers. You are planning a road trip from LA to SF on Highway 1 for New Year's.
      
      Current Itinerary Info:
      - Title: ${dayTitle}
      - Route: ${route}
      - Key Stops: ${locationString}
      - Time: Early Jan (Winter, approx 10-18°C / 50-65°F)

      Please generate a JSON response containing the following fields (Answer in ${language === 'zh' ? 'Chinese (Mainland, Xiaohongshu style, lively)' : 'English (Instagram influencer style, trendy)'}):
      1. ootd: Outfit suggestion for the weather and activities. Be specific about items/colors.
      2. hiddenGem: A hidden/niche spot nearby, NOT listed in Key Stops.
      3. photographyAdvice: Professional photo/editing tip.
      4. hashtags: 5 trending hashtags for ${language === 'zh' ? 'Xiaohongshu' : 'Instagram'}.

      Do not use Markdown formatting in the response text, just plain JSON.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ootd: { type: Type.STRING },
            hiddenGem: { type: Type.STRING },
            photographyAdvice: { type: Type.STRING },
            hashtags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AiInsight;
    }
    return null;

  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    // Fallback data
    if (language === 'zh') {
        return {
            ootd: "加州冬天早晚温差大，建议洋葱式穿搭！里面穿一件又辣又酷的吊带，外面套一件Oversize的奶油色针织开衫，下身搭配复古微喇牛仔裤，既保暖又出片。",
            hiddenGem: "路边的一家不起眼的 Tacos 餐车，味道比米其林还正宗！",
            photographyAdvice: "利用好加州的 Golden Hour（日落前一小时），逆光拍摄发丝会发光哦！",
            hashtags: ["#加州一号公路", "#OOTD", "#旅行碎片", "#治愈系风景", "#跨年"]
        };
    } else {
        return {
            ootd: "Layers are key for Cali winter! Rock a cute crop top under an oversized chunky knit cardigan. Pair with vintage flair jeans for that effortless look.",
            hiddenGem: "A random taco truck on the side of the road that tastes better than fine dining!",
            photographyAdvice: "Catch the Golden Hour right before sunset. Backlighting makes your hair glow!",
            hashtags: ["#CaliforniaDreaming", "#Highway1", "#RoadTrip", "#OOTD", "#TravelGram"]
        };
    }
  }
};
