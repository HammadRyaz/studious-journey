import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = () => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        reset,

        formState: {
            errors,
            isDirty,
            isSubmitSuccessful,
            isValid,
            isSubmitting,
            isSubmitted,
        },
    } = useForm({ mode: "onChange", });
    function onSubmit(data) {
        isValid && console.log(data);
    }
    // const watchField = watch(['username', 'email']);
    // console.log(watchField);

    const fnc = {
        getvalue: () => {
            const values = getValues();
            console.log(values);
        },
        setvalue: (el, val) => {
            setValue(el, val);
        },
        resetvalue: () => {
            reset();
        },
    };

    function onError(err) {
        return err;
    }
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful])

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="flex h-full w-full flex-col justify-center gap-4 overflow-hidden py-20 pl-4"
                autoComplete="off"
            >
                <h2 className="mx-10 text-3xl">React Hook Form</h2>
                {(isSubmitSuccessful) && (
                    <p className="text-green-500">Form Submit Successful</p>
                )}
                <input
                    className={`w-80 rounded-sm border px-4 py-1 ${errors.username && "border-red-500 "}`}
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    {...register("username", {

                        minLength: {
                            value: 3,
                            message: "At least 3 letter ",
                        },
                        maxLength: {
                            value: 12,
                            message: "At most 12 letter ",
                        },
                        required: {
                            value: true,
                            message: "Filed is Required",
                        },
                        pattern: {
                            value: /^[A-Za-z0-9_]+$/,
                            message: "Use only 0-9 , a-z , A-Z and _ underscore",
                        },
                    })}
                />
                {errors.username && (
                    <p className="text-red-500"> {errors.username?.message}</p>
                )}
                <input
                    className={`w-80 rounded-sm border px-4 py-1 ${errors.email && "border-red-500 "}`}
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Filed is Required",
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "invalid email",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-red-500"> {errors.email?.message}</p>
                )}

                <input
                    className={`w-80 rounded-sm border px-4 py-1 ${errors.password && "border-red-500 "}`}
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Filed is Required",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-500"> {errors.password?.message}</p>
                )}
                <input
                    className={`w-80 rounded-sm border px-4 py-1 ${errors.compassword && "border-red-500 "}`}
                    type="text"
                    name="compassword"
                    placeholder="Enter Confirm Password"
                    {...register("compassword", {
                        disabled: watch("password") === "",
                        required: {
                            value: true,
                            message: "Filed is Required",
                        },
                    })}
                />
                {errors.compassword && (
                    <p className="text-red-500"> {errors.compassword?.message}</p>
                )}

                <div className="flex w-80 justify-between">
                    <button
                        type="submit"
                        className="mx-1 cursor-pointer self-start rounded-md bg-blue-500 px-2 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="mx-1 cursor-pointer self-start rounded-md bg-green-500 px-2 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
                        onClick={fnc.getvalue}
                    >
                        getValue
                    </button>
                    <button
                        type="button"
                        className="mx-1 cursor-pointer self-start rounded-md bg-amber-500 px-2 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
                    // onClick={fnc.setvalue("username", "Hamster")}
                    >
                        setValue
                    </button>
                    <button
                        type="button"
                        className="mx-1 cursor-pointer self-start rounded-md bg-red-500 px-2 py-3 shadow-md shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg active:translate-y-0.5 active:scale-95 active:shadow-sm"
                        onClick={fnc.resetvalue}
                    >
                        Reset
                    </button>
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default Form2;
