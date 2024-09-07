import "./App.css";
import useJobData from "./utils/useJobData";
import Card from "./components/Card";
import { useState } from "react";

const LIMIT = 5;

function App() {
  const [limit, setLimit] = useState(LIMIT);
  const jobIds = useJobData();

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold mb-4">Job Board</h1>
      {jobIds.slice(0, limit).map((j) => (
        <Card key={j} id={j} />
      ))}
      {limit !== jobIds.length && (
        <button
          className="bg-orange-600 text-white p-3 rounded-lg"
          onClick={() => setLimit(Math.min(limit + LIMIT, jobIds.length))}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
