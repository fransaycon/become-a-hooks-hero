import React, { useEffect } from "react";

const MayanCalendar = () => {
  useEffect(() => {
    return () => {
      console.log("THE END IS NEAR!");
    };
  }, []);

  return (
    <div>
      <span>It's not yet 2012</span>
    </div>
  );
};

export default MayanCalendar;
