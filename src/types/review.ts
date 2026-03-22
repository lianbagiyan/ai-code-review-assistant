export type ReviewMode =
  | "readability"
  | "best_practices"
  | "react_patterns"
  | "performance_risks"
  | "release_risk";

export type ReviewIssue = {
  title: string;
  severity: "low" | "medium" | "high";
  category: string;
  line?: number;
  explanation: string;
  suggestion: string;
};

export type ReviewResponse = {
  summary: string;
  issues: ReviewIssue[];
  strengths: string[];
};
