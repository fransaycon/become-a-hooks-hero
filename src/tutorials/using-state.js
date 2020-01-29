import React, { useState } from "react";

/**
 * Another way for a React component to rerender is a change of state.
 *
 * State are persisted values of a mounted component.
 * To initialize a state, we declare a useState hook.
 *
 * Hooks gives you access to the lifecycles of React.
 *
 * Whenever React rerenders, it runs the function again.
 */

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

export default Counter;
