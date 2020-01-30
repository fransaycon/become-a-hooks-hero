import React, { useState, memo, useCallback } from "react";

/**
 * We sometimes pass a function to a pure component.
 * In javascript, functions inside functions get new references every time
 * the parent function reruns.
 *r
 * We make use of the hook useCallback to persist the function reference across enders
 * as long as the component is still mounted.
 *
 * We could also use the hook to trigger a call back if the reference of a host component
 * is available.
 */
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
