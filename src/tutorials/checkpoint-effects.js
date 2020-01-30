import React, { useEffect, useLayoutEffect } from "react";

/**
 * Which console.log will print first?
 */
const GonnaMount = () => {
  useEffect(() => {
    console.log("USE EFFECT!");
  });

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT!");
  });

  return <span>I HAVE MOUNTED!! BUWAHAHAHA!</span>;
};

export default GonnaMount;
