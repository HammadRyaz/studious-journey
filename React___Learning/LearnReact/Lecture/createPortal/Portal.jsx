import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "./../ErrorBound/ErrorBoundary";

const Portal = () => {
  const [mounted, setMounted] = useState(false);
  const portalRoot = document.getElementById("space");

  function handleClick(params) {
    setMounted((prev) => !prev);
  }

  return (
    <>
      <p className="fixed p-2 opacity-70">Protal.jsx</p>
      <div
        className={`mt-2 flex h-50 w-full items-center justify-center border border-red-600`}
      >
        <button
          onClick={() => handleClick()}
          className="cursor-pointer rounded-md bg-red-500 px-4 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
        >
          Show Popup
        </button>
        {mounted && createPortal(<Modal setMounted={setMounted} />, portalRoot)}
      </div>
    </>
  );
};

export default Portal;
