import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(100);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>
      <p style={styles.count}>{count}</p>
      <div style={styles.buttonContainer}>
        <button onClick={decrement } style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  count: {
    fontSize: '48px',
    margin: '20px 0'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default CounterApp;
