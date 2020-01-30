import React, { useState, useRef, useLayoutEffect } from "react";

/**
 * If we want to have access to the new state of the DOM before browser has
 * the chance to paint it,
 *
 * we make use of the hook useLayoutEffect.
 * It's like useEffect but runs BEFORE browser paint.
 *
 * Be careful using this since it blocks browser paint.
 * Most of the time useEffect is enough and a much better choice since it
 * is an asynchronous process after paints.
 */
const MeasureTracker = () => {
  const [text, setText] = useState("I'm a short text");
  const [width, setWidth] = useState(0);
  const spanRef = useRef();

  useLayoutEffect(() => {
    setWidth(spanRef.current.offsetWidth);
  }, [text]);

  return (
    <div>
      <span ref={spanRef}>{text}</span>
      <br />
      <span>Width of Span Above: {width}</span>
      <br />
      <button onClick={() => setText("I'm very very very very long text.")}>
        Make It Longer
      </button>
    </div>
  );
};

export default MeasureTracker;
