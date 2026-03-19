import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { ErrorBoundary } from "./ErrorBoundary";

const App_ErrorBound = () => {
  const [first, setFirst] = useState({
    name: "Sir",
  });
  const [second, setSecond] = useState();
  return (
    <>
      <ErrorBoundary>
        <Child1 first={first} />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={"Error in Child2 Component"}
        default={"Error Founded!!!"}
      >
        <Child2 second={second} />
      </ErrorBoundary>
    </>
  );
};

export default App_ErrorBound;
