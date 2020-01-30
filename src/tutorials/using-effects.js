import React, { useState, useEffect, useRef } from "react";
import MayanCalendar from "../atoms/mayan-calendar";

/**
 * We add to the list of lifecycles we know.
 * mounts, unmounts, updates
 *
 * Let's add browser paint which happens when the virtual dom is committed to the physical dom.
 *
 * React makes use of a virtual dom to reconciliate all state changes and sideeffects
 * and to help generate the next view.
 *
 * The virtual dom is an exact copy of the physical dom.
 *
 * At the end of every mount and update, the virtual dom is diffed to the physical dom
 * then rerender all components that React considers changed.
 *
 * To have access to side effects, we use the hook useEffect.
 *
 * The defined effects in useEffect occurs AFTER browser paint.
 */

const Timer = () => {
  const [time, setTime] = useState(2020);
  const [timerHasStarted, startTimer] = useState(false);
  const initialMount = useRef(true);

  useEffect(() => {
    console.log("Will only print once per mount!");
  }, []);

  useEffect(() => {
    if (timerHasStarted && time > 0) {
      const tick = setTimeout(() => setTime(t => t - 1), 500);
      return () => {
        console.log("Will print everytime this produces a new effect!");
        clearTimeout(tick);
      };
    }
  }, [time, timerHasStarted]);

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
      <button onClick={() => startTimer(true)}>Start Timer</button>
      {time !== 2012 && <MayanCalendar />}
    </div>
  );
};

export default Timer;
