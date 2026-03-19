import React from "react";
import Portal from "./Portal";

const App_Portal = () => {
  return (
    <>
      <Portal />
      <div id="space" className={`mt-12 h-80 w-full border border-yellow-300`}>
        <p className="fixed p-2 opacity-70">App.jsx</p>
      </div>
    </>
  );
};

export default App_Portal;
