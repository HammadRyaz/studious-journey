import React from "react";

const Child = React.memo(({ data }) => {
  console.log("Child Render");
  return <div>Child {data} </div>;
});

export default Child;
