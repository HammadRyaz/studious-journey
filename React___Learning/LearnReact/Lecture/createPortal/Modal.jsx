import React from "react";
import { ErrorBoundary } from "./../ErrorBound/ErrorBoundary";

const Modal = ({ setMounted }) => {
  function handleMount(params) {
    setMounted(false);
  }
  return (
    <>
      <div className="m-20 flex flex-col items-start gap-2 rounded-lg bg-gray-200 p-5 text-black">
        <h1>This Is Modal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
        <button
          className="cursor-pointer rounded-md bg-red-500 px-1 py-1 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
          onClick={handleMount}
        >
          Close
        </button>
        <p className="self-end opacity-70">Modal.jsx</p>
      </div>
    </>
  );
};

export default Modal;
