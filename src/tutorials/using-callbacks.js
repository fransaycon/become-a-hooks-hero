import React, { useState, memo, useCallback } from "react";

const Customer = memo(({ sayThankYou }) => {
  console.log("CUSTOMER IS RENDERED!");
  const callbackRef = useCallback(node => {
    if (node !== null) {
      console.log(node);
    }
  }, []);

  return (
    <div>
      <span ref={callbackRef}>I'm A Customer</span>
      <button onClick={sayThankYou}>Say Thank You</button>
    </div>
  );
});

const Farmer = ({ crops, getMoreCrops, sayThankYou }) => {
  console.log("FARMER RENDERED!");
  return (
    <div>
      <button onClick={getMoreCrops}>Get Crops!</button>
      <ul>
        {!!crops && crops.map((crop, i) => <li key={`KEY_${i}`}>{crop}</li>)}
      </ul>
      <Customer sayThankYou={sayThankYou} />
    </div>
  );
};

const Farm = () => {
  const cropsToBeHarvested = [
    "Singkamas",
    "Talong",
    "Sigarilyas",
    "Mani",
    "Sitaw",
    "Bataw",
    "Patani"
  ];
  const [crops, setCrops] = useState([]);

  const getMoreCrops = () => {
    setCrops([
      ...crops,
      cropsToBeHarvested[Math.floor(Math.random() * cropsToBeHarvested.length)]
    ]);
  };

  const sayThankYou = useCallback(() => {
    alert("Thank You!");
  }, []);

  return (
    <Farmer
      crops={crops}
      getMoreCrops={getMoreCrops}
      sayThankYou={sayThankYou}
    />
  );
};

export default Farm;
