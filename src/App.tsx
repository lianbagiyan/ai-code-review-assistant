import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewModes from "./components/ReviewModes";
import ReviewResults from "./components/ReviewResults";
// import { mockReview } from "./data/mockReview";
import type { ReviewMode, ReviewResponse } from "./types/review";
import { runAIReview } from "./lib/review";

const initialCode = `import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Clicked {count} times</button>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
`;

export default function App() {
  const [code, setCode] = useState(initialCode);
  const [selectedMode, setSelectedMode] =
    useState<ReviewMode>("react_patterns");
  const [review, setReview] = useState<ReviewResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunReview = async () => {
    setIsLoading(true);

    try {
      const result = await runAIReview(code, selectedMode);
      setReview(result);
    } catch (e) {
      console.error(e);
      setReview({
        summary: "Error running AI review",
        issues: [],
        strengths: [],
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>AI Code Review Assistant</h1>
          <p>
            Frontend-focused review tool for readability, React patterns, and
            release risks
          </p>
        </div>
      </header>

      <main className="layout">
        <section className="left-column">
          <CodeEditor value={code} onChange={setCode} />
        </section>

        <section className="right-column">
          <ReviewModes
            selectedMode={selectedMode}
            onSelectMode={setSelectedMode}
            onRunReview={handleRunReview}
            isLoading={isLoading}
          />

          <ReviewResults review={review} />
        </section>
      </main>
    </div>
  );
}
