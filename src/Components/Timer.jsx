import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeUp }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  return <div className="timer">Time Remaining: {time} seconds</div>;
}

export default Timer;
