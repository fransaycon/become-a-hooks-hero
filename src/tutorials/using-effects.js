import React, { useState, useEffect } from "react";

/**
 * One way to trigger side effects given a state change is by using the useEffect hooks.
 *
 * useEffect runs on mount and given the second parameter of dependecies,
 * it will run the effect when one or more of the dependecies changed.
 *
 * It is good practice to declare everything that you will use inside the effect as dependencies.
 * Except for window functions and react state functions
 */

const Timer = () => {
  const [time, setTime] = useState(2020);
  const [timerStart, toggleTimer] = useState(false);

  useEffect(() => {
    if (timerStart && time > 0) {
      const tick = setTimeout(() => setTime(t => t - 1), 500);
      return () => clearTimeout(tick);
    }
  }, [time, timerStart]);

  return (
    <div>
      <div>
        <span>Time Left: {time}</span>
      </div>
      <button onClick={() => toggleTimer(true)}>Start Timer</button>
    </div>
  );
};

export default Timer;
