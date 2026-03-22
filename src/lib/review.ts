import client from "./openai";
import { getPrompt } from "./prompts";
import type { ReviewMode, ReviewResponse } from "../types/review";

export async function runAIReview(
  code: string,
  mode: ReviewMode,
): Promise<ReviewResponse> {
  const prompt = getPrompt(mode, code);

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = response.choices[0].message.content || "{}";

  const clean = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(clean);
  } catch {
    return {
      summary: "Failed to parse AI response",
      issues: [],
      strengths: [],
    };
  }
}
