import { useState } from "react";

export function useLocalStorage(key, initial) {
    const [value, setValue] = useState(prev => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initial;
        } catch { return initial }
    })
    const set = val => {
        // setValue(val);
        // localStorage.setItem(key, JSON.stringify(val));
        setValue(prev => {
            const newValue = typeof val === "function" ? val(prev) : val;
            localStorage.setItem(key, JSON.stringify(newValue));
            return newValue;
        });
    }
    const del = (k) => {
        localStorage.removeItem(k)
        setValue(initial)
    }
    return [value, set, del]
} 