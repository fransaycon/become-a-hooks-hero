import React, { memo, useState } from "react";

/**
 * Another type of component in React is PURE COMPONENTS.
 *
 * These are components that won't rerender if none of their props changed.
 * To create a pure component, wrap the functional component with the memo().
 *
 * Most of the time you don't need this since React is VERY FAST.
 */
const LastStage = memo(({ count }) => {
  console.log("LAST STAGE RENDERED!");

  return <span>Last Stage Count: {count}</span>;
});

const StageTwo = ({ count }) => {
  const [twoCount, setTwoCount] = useState(count);

  console.log("STAGE TWO RENDERED!");

  return (
    <div>
      <div>
        <span>Stage-2 Count: {twoCount}</span>
        <button onClick={() => setTwoCount(twoCount + 1)}>INCREASE!</button>
      </div>
      <LastStage count={count} />
    </div>
  );
};

const StageOne = () => {
  const [count, setCount] = useState(0);
  console.log("STAGE ONE RENDERED!");

  return (
    <div>
      <div>
        <span>Stage-1 Count: {count}</span>
        <button onClick={() => setCount(count + 1)}>INCREASE!</button>
      </div>
      <StageTwo count={count} />
    </div>
  );
};

export default StageOne;
