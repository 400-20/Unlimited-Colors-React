import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("#000000");
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const randomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleFirst = () => {
    const id = setInterval(() => {
      const newColor = randomHexColor();
      setColor(newColor);
      document.body.style.backgroundColor = newColor;
    }, 1000);
    setIntervalId(id);
  };

  const handleLast = () => {
    clearInterval(intervalId);
  };

  return (
    <>
      <h2>Unlimited Colors </h2>
      <button className="first" onClick={handleFirst}>
        Start
      </button>
      <button className="last" onClick={handleLast}>
        Stop
      </button>
    </>
  );
}

export default App;
