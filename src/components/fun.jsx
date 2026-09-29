import React, { useState } from 'react';

function FunctionalCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: '0.5rem' }}>+</button>
    </div>
  );
}

export default FunctionalCounter;