import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: async () => {
      const res = await fetch("https://dummyjson.com/users/" + random);
      const data = await res.json();
      return {
        name: data.firstName,
        email: data.email,
        age: data.age,
      };
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
  const random = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ml-4 flex h-full w-full flex-col justify-center gap-4 overflow-hidden py-20"
      >
        <h1 className="text-3xl font-black">React Hook Form</h1>
        <input
          className="w-80 rounded-sm border px-4 py-1"
          type="text"
          placeholder={errors.name ? errors.name.message : "Enter name"}
          name="name"
          {...register("name", {
            required: "Name is Required",
            minLength: {
              value: 3,
              message: "Name Must be 3 letter",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name?.message}</p>
        )}
        <input
          className="w-80 rounded-sm border px-4 py-1"
          type="text"
          placeholder={errors.name ? errors.email.message : "Enter Email"}
          name="email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email?.message}</p>
        )}
        <input
          className="w-80 rounded-sm border px-4 py-1"
          type="text"
          placeholder="Enter Age"
          name="age"
          {...register("age", {
            required: "Age is Required",
            valueAsNumber: true,
            min: {
              value: 18,
              message: "Value Must be 18",
            },
          })}
        />
        <button className="hover:bg-reen-600 cursor-pointer self-start rounded-md bg-green-500 px-4 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;
