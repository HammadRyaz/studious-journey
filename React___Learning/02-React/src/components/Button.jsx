import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";


const Button = () => {
  console.log("render button.jsx");
  const dispatch = useDispatch();

  function inc() {
    dispatch(counterAction.increament());
  }
  function dec() {
    dispatch(counterAction.increament());
  }
  return (
    <div>
      <button
        type="submit"
        className="w-28 p-2 bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl mx-2"
        onClick={inc}
      >
        (+)1
      </button>

      <button
        type="submit"
        className="w-28 p-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl"
        onClick={dec}
      >
        (-)1
      </button>
    </div>
  );
};

export default Button;
