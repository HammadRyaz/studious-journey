import React, { useState } from "react";

const MultiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData.email, "\n", formData.name);
  }
  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="false">
        <h2>Multi Form</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input type="submit" name="" />
      </form>
    </>
  );
};

export default MultiForm;
