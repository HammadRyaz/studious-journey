import { useEffect, useRef } from "react";

export default function CursorCanvas() {

    const canvasRef = useRef(null);

    const mouse = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const circle = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();

        window.addEventListener("resize", resize);

        const move = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", move);

        let animationFrame;

        const render = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            circle.current.x +=
                (mouse.current.x - circle.current.x) * 0.12;

            circle.current.y +=
                (mouse.current.y - circle.current.y) * 0.12;

            ctx.beginPath();

            ctx.arc(
                circle.current.x,
                circle.current.y,
                20,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "rgba(59,130,246,0.8)";
            ctx.shadowColor = "#3b82f6";
            ctx.shadowBlur = 40;

            ctx.fill();

            animationFrame = requestAnimationFrame(render);
        };

        render();

        return () => {

            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                "mousemove",
                move
            );

            window.removeEventListener(
                "resize",
                resize
            );
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="
                fixed
                inset-0
                pointer-events-none
                z-[9999]
            "
        />
    );
}