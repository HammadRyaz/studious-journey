import React, { useState } from "react";

const AdvanceForm = () => {
  const [formData, setFormData] = useState({
    agree: false,
    gender: false,
    country: "Pak",
    name: "",
    email: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prv) => ({
      ...prv,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Advance Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender}
            onChange={handleChange}
          />
          Female
        </div>
        <label>
          Select Country :
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="Pak">Pak</option>
            <option value="Iran">Iran</option>
            <option value="Jap">Jap</option>
          </select>
        </label>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />{" "}
          agree to submit
        </div>
        <input type="submit" name="" />
      </form>
    </>
  );
};

export default AdvanceForm;
