import { useCallback } from "react";
import { useState } from "react";

export const useLocalStorage = (
    key,
    initValue,
    { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) => {
    const [value, setValue] = useState((prev) => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? deserialize(item) : initValue;
        } catch {
            return initValue;
        }
    });

    const set = useCallback(
        (val) => {
            try {
                const next = typeof val === "function" ? val(value) : val;
                setValue(next)
                localStorage.setItem(key, serialize(next));

            } catch (error) {
                console.error(error);
            }
        },
        [key, value, serialize],
    );

    const del = useCallback(() => {
        localStorage.removeItem(key);
        setValue(initValue);
    }, [key, initValue]);

    return [value, set, del];
};
