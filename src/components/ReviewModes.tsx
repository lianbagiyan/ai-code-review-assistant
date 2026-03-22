import type { ReviewMode } from "../types/review";

type ReviewModesProps = {
  selectedMode: ReviewMode;
  onSelectMode: (mode: ReviewMode) => void;
  onRunReview: () => void;
  isLoading?: boolean;
};

const modes: { value: ReviewMode; label: string; description: string }[] = [
  {
    value: "readability",
    label: "Readability",
    description: "Check clarity, naming, and code readability.",
  },
  {
    value: "best_practices",
    label: "Best practices",
    description: "Review general frontend coding practices.",
  },
  {
    value: "react_patterns",
    label: "React patterns",
    description: "Check hooks, state, effects, and component design.",
  },
  {
    value: "performance_risks",
    label: "Performance risks",
    description: "Spot possible render and optimization issues.",
  },
  {
    value: "release_risk",
    label: "Release risk",
    description: "Identify fragile logic and production-readiness concerns.",
  },
];

export default function ReviewModes({
  selectedMode,
  onSelectMode,
  onRunReview,
  isLoading = false,
}: ReviewModesProps) {
  return (
    <div className="panel sidebar-panel">
      <div className="panel-header">
        <h2>Review Mode</h2>
        <span className="panel-subtitle">
          Choose how AI should review the code
        </span>
      </div>

      <div className="mode-list">
        {modes.map((mode) => {
          const active = selectedMode === mode.value;

          return (
            <button
              key={mode.value}
              className={`mode-card ${active ? "active" : ""}`}
              onClick={() => onSelectMode(mode.value)}
              type="button"
            >
              <div className="mode-card-title">{mode.label}</div>
              <div className="mode-card-description">{mode.description}</div>
            </button>
          );
        })}
      </div>

      <button
        className="run-button"
        onClick={onRunReview}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? "Reviewing..." : "Run Review"}
      </button>
    </div>
  );
}
