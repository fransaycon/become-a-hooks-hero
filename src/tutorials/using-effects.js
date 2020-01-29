import React, { useState, useEffect, useRef } from "react";
import MayanCalendar from "../atoms/mayan-calendar";

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
  const initialMount = useRef(true);

  useEffect(() => {
    console.log("Will only print once per mount!");
  }, []);

  useEffect(() => {
    if (timerStart && time > 0) {
      const tick = setTimeout(() => setTime(t => t - 1), 500);
      return () => {
        console.log("Will print everytime this produces a new effect!");
        clearTimeout(tick);
      };
    }
  }, [time, timerStart]);

  useEffect(() => {
    console.log("Will print on mount and every update!");
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      console.log("Will print only on updates!");
    }
  });

  return (
    <div>
      <div>
        <span>Time Left: {time}</span>
      </div>
      <button onClick={() => toggleTimer(true)}>Start Timer</button>
      {time !== 2012 && <MayanCalendar />}
    </div>
  );
};

export default Timer;
