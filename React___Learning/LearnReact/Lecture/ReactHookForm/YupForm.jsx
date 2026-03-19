import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema/schema";

const YupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onsubmit(data) {
        console.log(data);
        reset()
    }
    const age = watch("age");

    useEffect(() => {
        if (age < 18) {
            setValue("username", "")
            setValue("email", "")
            setValue("password", "")
            setValue("confirmpassword", "")
        }
    }, [age])

    return (
        <>
            <form
                onSubmit={handleSubmit(onsubmit)}
                autoComplete="off"
                className="flex flex-col gap-3 p-10"
            >
                <h2 className="text-3xl">Yup Form</h2>
                <input
                    className={`w-80 border  px-1 py-2`}
                    name="age"
                    type="number"
                    placeholder="Enter Age"
                    {...register("age")}

                />
                {errors.age && (
                    <p className="text-red-500">{errors.age?.message}</p>
                )}
                <input
                    className={`w-80 border  px-1 py-2 ${age < 18 && "opacity-40"}`}
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    disabled={age < 18}
                    {...register("username")}
                />
                {errors.username && (
                    <p className="text-red-500">{errors.username?.message}</p>
                )}
                <input
                    className={`w-80 border  px-1 py-2 ${age < 18 && "opacity-40"}`}
                    name="emal"
                    type="text"
                    placeholder="Enter Email"
                    disabled={age < 18}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email?.message}</p>
                )}
                <input
                    onClick={() => setShowPassword(!showPassword)}
                    className={`w-80 border  px-1 py-2 ${age < 18 && "opacity-40"}`}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    disabled={age < 18}
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password?.message}</p>
                )}
                <input
                    onClick={() => setShowPassword(!showPassword)}
                    className={`w-80 border  px-1 py-2 ${age < 18 && "opacity-40"}`}
                    name="confirmpassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    disabled={age < 18}
                    {...register("confirmpassword")}
                />
                {errors.confirmpassword && (
                    <p className="text-red-500">{errors.confirmpassword?.message}</p>
                )}
                <span>
                    <input className="size-4 accent-green-400" value="agree with policy" type="checkbox" name="agree" {...register("agree")} />
                    &nbsp; agree With Cookie ?
                </span>
                <span>
                    <input className="size-4 accent-green-400" value="agree With Cookie" type="checkbox" name="agree" {...register("agree")} />
                    &nbsp; agree with policy?
                </span>
                {errors.agree && (
                    <p className="text-red-500">{errors.agree?.message}</p>
                )}

                <button
                    className="w-30 cursor-pointer rounded-sm bg-green-600 p-2 hover:bg-green-700"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default YupForm;
