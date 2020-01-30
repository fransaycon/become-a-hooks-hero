import React, { useState } from "react";

/**
 * FIX ME: Persist state even after unmounting.
 */
const CheckPointState = () => {
  const [hide, toggle] = useState(false);

  return (
    <div>
      <button onClick={() => toggle(v => !v)}>
        {hide ? "Show " : "Destroy"}
      </button>
      {!hide && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>Current Count is {count}.</h1>
      </div>
      <button
        onClick={() => {
          setCount(c => c + 1);
        }}
      >
        Increase Me
      </button>
    </div>
  );
};

export default CheckPointState;
