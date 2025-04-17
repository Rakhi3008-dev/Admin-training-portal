import { useState } from 'react';
import ConfidenceChart from './ConfidenceChart';

export default function Dashboard() {
  const [queries, setQueries] = useState([
    { id: 1, text: 'What is school timing?', confidence: 0.4 },
    { id: 2, text: 'Fee structure?', confidence: 0.5 },
  ]);

  return (
    <div>
      <h2>Low Confidence Queries</h2>
      {queries.map((query) => (
        <div key={query.id} className="query-card">
          <p>{query.text}</p>
          <p className={query.confidence < 0.6 ? 'text-red' : 'text-green'}>
            Confidence: {query.confidence}
          </p>
          <button>Mark Resolved</button>
          <button>Flag</button>
        </div>
      ))}
      <ConfidenceChart />
    </div>
  );
}