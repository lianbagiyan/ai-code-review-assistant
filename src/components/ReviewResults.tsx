import type { ReviewResponse } from "../types/review";

type ReviewResultsProps = {
  review: ReviewResponse | null;
};

export default function ReviewResults({ review }: ReviewResultsProps) {
  if (!review) {
    return (
      <div className="panel results-panel empty-state">
        <h2>Review Results</h2>
        <p>No review yet. Choose a mode and run the review.</p>
      </div>
    );
  }

  return (
    <div className="panel results-panel">
      <div className="panel-header">
        <h2>Review Results</h2>
        <span className="panel-subtitle">Structured AI feedback</span>
      </div>

      <section className="result-section">
        <h3>Summary</h3>
        <div className="summary-box">{review.summary}</div>
      </section>

      <section className="result-section">
        <h3>Strengths</h3>
        <ul className="strength-list">
          {review.strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="result-section">
        <h3>Issues</h3>
        <div className="issue-list">
          {review.issues.map((issue, index) => (
            <div key={index} className="issue-card">
              <div className="issue-top">
                <div>
                  <div className="issue-title">{issue.title}</div>
                  <div className="issue-meta">
                    <span className={`severity severity-${issue.severity}`}>
                      {issue.severity.toUpperCase()}
                    </span>
                    <span>{issue.category}</span>
                    {issue.line ? <span>Line {issue.line}</span> : null}
                  </div>
                </div>
              </div>

              <div className="issue-block">
                <strong>Explanation</strong>
                <p>{issue.explanation}</p>
              </div>

              <div className="issue-block">
                <strong>Suggestion</strong>
                <p>{issue.suggestion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
