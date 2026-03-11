import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Name :  ${name} Email : ${email}`);
  }

  return (
    <form action="" autoComplete="false" onSubmit={handleSubmit}>
      <h2>Simple Form</h2>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type="submit" name="" id="" />
    </form>
  );
};

export default SimpleForm;
