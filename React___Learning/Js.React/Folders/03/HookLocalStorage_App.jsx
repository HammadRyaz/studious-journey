import React, { useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

const HookLocalStorage_App = () => {
    // 1. clearNames no longer needs the "users" string passed to it
    const [names, setNames, clearNames] = useLocalStorage("users", []);
    const [value, setValue] = useState("");
    const [err, setErr] = useState("");
    const [showErr, setShowErr] = useState(false);

    // 2. Optimized function with useCallback
    const handleSave = useCallback(() => {
        if (!value.trim()) {
            setErr("Please Enter A Value");
            setShowErr(true);
            return;
        }

        // Prevent duplicate entries if desired, or just add
        setNames((prev) => [...prev, value.trim()]);
        setValue("");
        setShowErr(false); // Clear error on success
    }, [value, setNames]);

    // 3. Simplified Auto-hide error logic
    useEffect(() => {
        if (showErr) {
            const timer = setTimeout(() => setShowErr(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showErr]);

    return (
        <div className="card m-2">
            {showErr && (
                <div className="alert-error p-1 m-1 transition-opacity"> {err} </div>
            )}

            <h2 className="py-3 text-center text-3xl">useLocalStorage</h2>

            <div className="flex flex-col gap-2">
                <input
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    value={value}
                    type="text"
                    className="input"
                    placeholder="Enter Your Name.."
                />
                <div className="flex gap-2">
                    <button onClick={handleSave} className="btn-sm btn flex-1">
                        Save
                    </button>
                    <button
                        onClick={clearNames}
                        className="btn-sm btn bg-red-600"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <ul className="my-4">
                {names.map((name, index) => (
                    <li
                        key={`${name}-${index}`}
                        className="alert w-full my-1 border-b-mist-800 border-b-2 p-2 text-lg text-black shadow flex justify-between"
                    >
                        <span>{index + 1} : {name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HookLocalStorage_App;

