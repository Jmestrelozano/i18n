import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button
        data-testid="button-count"
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};