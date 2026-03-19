import React, { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Hamster" }), []);

  console.log("Parent Render");

  return (
    <>
      <h1 className="text-6xl">Count : {count}</h1>
      <button
        className="text-4xl bg-amber-500 rounded m-4 p-2.5 hover:p-2 transition-all"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +1
      </button>
      <Child data={user.name} />
    </>
  );
};

export default Parent;
