import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState("");

  const result = useMemo(() => {
    console.log("cal running");
    let total = 0;
    for (let index = 0; index < 1000000000; index++) {
      total = index;
    }
    return total;
  }, []);
  return (
    <>
      <h1 className="text-4xl py-2">{result} </h1>
      <h1 className="text-4xl py-2">Count : {count} </h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="text-2xl border-2 border-red-500 p-2"
      >
        + 1
      </button>
      <input
        type="text"
        className="border-2 m-2 border-yellow-500 p-2"
        placeholder="Type anything.."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
    </>
  );
};
export default UseMemo;
