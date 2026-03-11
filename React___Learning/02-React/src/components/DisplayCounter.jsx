import React from "react";
import { useSelector } from "react-redux";
const DisplayCounter = () => {
  console.log("render display.jsx");

  const { val } = useSelector((store) => store.counter);
  return (
    <>
      <h2 className={`text-6xl font-bold pb-10 ${val < 0 && "text-red-600"}`}>
        {val !== undefined ? val : 0}
      </h2>
    </>
  );
};

export default DisplayCounter;
