import React from "react";

const Child = ({ click }) => {
  console.log("Child Render");
  return (
    <button className="text-lg m-2 p-2 border-2 cursor-pointer" onClick={click}>
      Child Button
    </button>
  );
};

export default React.memo(Child);
