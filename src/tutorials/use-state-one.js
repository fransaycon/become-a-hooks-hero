import React from "react";

const UseStateIntroduction = () => {
  const [greeting, setGreeting] = useState("Hello World!");
  const handleClick = () => setGreeting("Hello Everyone!");

  return (
    <div>
      <h3>{greeting}</h3>
      <button onClick={handleClick}>Change Greeting</button>
    </div>
  );
};

export default UseStateIntroduction;
