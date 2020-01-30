import React, { createContext, useState, useContext } from "react";

/**
 * Contexts are another way to share values among children.
 *
 * It can be cumbersome to keep on drilling the props to its final destination.
 *
 * Context values are passed down through the use of Provider components.
 * Context values persist as long as the provider is still mounted.
 */
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
