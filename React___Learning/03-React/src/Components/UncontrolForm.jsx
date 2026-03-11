import React, { useRef } from "react";

const UncontrolForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
  }
  const name = useRef("");
  const email = useRef("");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Uncontroll Form</h2>
        <input type="text" ref={name} placeholder="Enter Name" />
        <input type="email" ref={email} placeholder="Enter Email" />
        <input type="submit" />
      </form>
    </>
  );
};

export default UncontrolForm;
