import type { ReviewResponse } from "../types/review";

export const mockReview: ReviewResponse = {
  summary:
    "This component is readable overall, but there are a few React-specific and maintainability concerns that could affect scalability.",
  issues: [
    {
      title: "Missing dependency in useEffect",
      severity: "medium",
      category: "React patterns",
      line: 12,
      explanation:
        "The effect depends on a value that is not included in the dependency array, which may lead to stale state or unexpected behavior.",
      suggestion:
        "Add the missing dependency or refactor the effect logic to avoid hidden dependencies.",
    },
    {
      title: "Inline function may trigger unnecessary re-renders",
      severity: "low",
      category: "Performance risks",
      line: 24,
      explanation:
        "An inline handler is recreated on every render. In small components this may be fine, but in larger trees it can become noisy.",
      suggestion:
        "Consider extracting the handler or memoizing it with useCallback where appropriate.",
    },
    {
      title: "Component is taking on too many responsibilities",
      severity: "medium",
      category: "Release risk",
      line: 1,
      explanation:
        "The component combines fetching, state logic, and rendering in one place, which may make future changes riskier.",
      suggestion:
        "Split data logic and UI into smaller focused components or hooks.",
    },
  ],
  strengths: [
    "Clear naming for most state variables",
    "The component structure is easy to scan",
    "UI logic is mostly straightforward",
  ],
};
