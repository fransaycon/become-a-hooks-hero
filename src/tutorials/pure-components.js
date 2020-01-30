import React, { memo, useState } from "react";

const LastStage = memo(({ count }) => {
  console.log("LAST STAGE RENDERED!");

  return <span>Last Stage Count: {count}</span>;
});

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

export default StageOne;
