import React, { useEffect, useState } from "react";

const WindowWidth = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    useEffect(() => {
        console.log("Render");
    }, [count]);
    useEffect(() => {
        const int = setInterval(() => {
            // setCount2((prev) => (prev + 1));
            setCount2(prev => {
                return prev + 1
            });

        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, []);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2 + 10)}>Click</button>
        </>
    );
};

export default WindowWidth;
