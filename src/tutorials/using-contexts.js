import React, { createContext, useState, useContext } from "react";

const BlessingsContext = createContext();

const BlessingsProvider = ({ children }) => {
  const [blessings, setBlessings] = useState(10000);

  return (
    <BlessingsContext.Provider value={{ blessings, setBlessings }}>
      {children}
    </BlessingsContext.Provider>
  );
};

const Angels = () => {
  const { blessings, setBlessings } = useContext(BlessingsContext);

  return (
    <div>
      <span>
        <b>ANGEL:</b> I AM HAPPY THAT I HAVE {blessings} BLESSINGS!
      </span>
      <button onClick={() => setBlessings(b => b + 1)}>PRAY FOR MORE!</button>
    </div>
  );
};

const Devils = () => {
  const { blessings, setBlessings } = useContext(BlessingsContext);

  return (
    <div>
      <span>
        <b>DEVIL:</b> URGH, THAT ANGEL HAS {blessings} BLESSINGS!
      </span>
      <button onClick={() => setBlessings(b => b - 1)}>REDUCE IT!</button>
    </div>
  );
};

const Container = () => (
  <BlessingsProvider>
    <Angels />
    <Devils />
  </BlessingsProvider>
);

export default Container;
