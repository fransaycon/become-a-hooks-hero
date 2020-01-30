import React, { useState, useRef, useLayoutEffect } from "react";

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
