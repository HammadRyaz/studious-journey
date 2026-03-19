import { useEffect, useState } from "react";


export function useMouse() {
    const [pos, setpos] = useState({ x: 0, y: 0 })
    useEffect(() => {

        const fn = e => setpos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", fn)

        return () => {
            window.removeEventListener("mousemove", fn)
        }
    }, [])
    return pos
}