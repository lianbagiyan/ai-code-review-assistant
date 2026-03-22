import type { ReviewMode } from "../types/review";

export function getPrompt(mode: ReviewMode, code: string) {
  const base = `
You are a senior frontend engineer.

Analyze the following code and return a structured JSON response.

Code:
${code}

Return JSON in this format:
{
  "summary": "string",
  "issues": [
    {
      "title": "string",
      "severity": "low | medium | high",
      "category": "string",
      "line": number,
      "explanation": "string",
      "suggestion": "string"
    }
  ],
  "strengths": ["string"]
}
`;

  const modeInstructions: Record<ReviewMode, string> = {
    readability: "Focus on clarity, naming, and readability.",
    best_practices: "Focus on frontend best practices.",
    react_patterns: "Focus on React hooks, state, effects.",
    performance_risks: "Focus on performance issues and re-renders.",
    release_risk: "Focus on potential production risks and edge cases.",
  };

  return base + "\n" + modeInstructions[mode];
}
