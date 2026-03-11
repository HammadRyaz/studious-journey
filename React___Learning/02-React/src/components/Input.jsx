import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

const Input = () => {
  console.log("Inputs.jsx");
  const getVal = useRef();
  const dispatch = useDispatch();
  function Add() {
    dispatch(counterAction.addition(getVal.current.value));
    getVal.current.value = "";
  }
  function Sub() {
    dispatch(counterAction.subtraction(getVal.current.value));
    getVal.current.value = "";
  }
  return (
    <div className="flex pt-6 items-center gap-3 w-full max-w-sm">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
        onClick={Sub}
      >
        -
      </button>
      <input
        type="number"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        ref={getVal}
        placeholder="Enter value..."
      />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
        onClick={Add}
      >
        +
      </button>
    </div>
  );
};

export default Input;
