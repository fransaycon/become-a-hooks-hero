import React, { useState } from "react";

/**
 * A component in React follows a specific lifecycle.
 *
 * For now, consider these,
 * When it mounts. (appears)
 * When it unmounts. (disappears)
 * When it updates. (rerender)
 *
 * React components by default rerenders when its state or props change
 * and IF ITS PARENT RERENDERS.
 *
 * State is a value that persist every render as long as the component is still mounted.
 * To declare a state, we need to use a hook called useState.
 *
 * Hooks gives access to the React state and lifecycles.
 * When a component rerenders, the functional component is executed once more.
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
