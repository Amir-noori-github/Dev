import './Counter.css';
import { useState } from 'react';

const Counter = () => {
  // Theme state
  const [theme, setTheme] = useState('light');

  // Counter state
  const [count, setCount] = useState(0);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>

      {/* Toggle theme button */}
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Display the count */}
      <h2>{count}</h2>

      {/* Counter buttons using callback form */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
