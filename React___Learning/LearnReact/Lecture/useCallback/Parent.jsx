import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent Render");

  const div = useRef();
  const [width, setwidth] = useState(0);
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Child Render");
  }, []);
  useLayoutEffect(() => {
    setwidth(div.current.clientWidth);
  }, []);


  return (
    <>
      <div
        ref={div}
        className={`flex justify-center flex-col gap-10 items-center h-screen border-2 `}
      >
        <h1 className="text-5xl ">Count : {count} </h1>
        <div>
          <button
            className={`text-lg m-2 p-2 border-2 cursor-pointer ${width >= 1044 && "bg-red-400"} `}
            style={{ width: width / 2 + "px" }}
            onClick={() => setCount((prev) => prev + 1)}
          >
            Parent Button
          </button>
          <Child click={handleClick} />
        </div>
        <h1>{width}</h1>
      </div>
    </>
  );
};

export default Parent;
