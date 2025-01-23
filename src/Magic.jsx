import React, { useState, useRef } from 'react';

const MagicalTimer = () => {
  const [time, setTime] = useState(10); // Countdown time state
  const [message, setMessage] = useState(''); // Time's Up message
  const timerRef = useRef(null); // Reference to the timer ID
  const inputRef = useRef(null); // Reference to the text box

  // Automatically focus on the input box when the page loads
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Start Timer Function
  const startTimer = () => {
    setMessage(''); // Clear "Time's Up!" message if present
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          } else {
            clearInterval(timerRef.current); // Stop the timer when it reaches 0
            timerRef.current = null;
            setMessage('Time’s Up!'); // Show "Time's Up!" message
            return 0;
          }
        });
      }, 1000);
    }
  };

  // Stop Timer Function
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Reset Timer Function
  const resetTimer = () => {
    stopTimer();
    setTime(10);
    setMessage('');
  };

  // Focus Input Box Function
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Magical Timer and Input Box</h1>

      {/* Text Box */}
      <div style={{ marginBottom: '10px' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
        />
      </div>
      <button onClick={focusInput} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        Focus Box
      </button>

      {/* Countdown Timer */}
      <div style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>
        {time > 0 ? time : <span style={{ color: 'red' }}>{message}</span>}
      </div>
      <button onClick={startTimer} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Start Timer
      </button>
      <button onClick={stopTimer} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Stop Timer
      </button>
      <button onClick={resetTimer} style={{ padding: '10px 20px' }}>
        Reset Timer
      </button>
    </div>
  );
};

export default MagicalTimer;
