import React from "react";
import { useToggle } from "./useToggle";

const HookToggle_App = () => {
    const [val, toggle, setTrue, setFalse] = useToggle();
    const [alert, , ShowAlert, CloseAlert] = useToggle();
    return (
        <>
            <div className={`card m-2 ${val && " bg-black text-white"} `}>
                <button
                    className={`btn-sm btn float-end ${val && " bg-white text-black "}`}
                    onClick={() => toggle()}
                >
                    Mode{" "}
                </button>
                <h2>Hello Developer </h2>
            </div>
            <button className={`btn m-2 bg-red-600`} onClick={ShowAlert}>
                Show Alert
            </button>
            {alert && (
                <div className="alert-error m-2 flex w-fit justify-between p-2">
                    <span className="my-auto text-xl font-bold">This is an alert </span>
                    <button
                        onClick={CloseAlert}
                        className={`btn m-2 bg-red-600 text-white`}
                    >
                        X
                    </button>
                </div>
            )}
        </>
    );
};

export default HookToggle_App;
