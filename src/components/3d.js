import { useRef, useEffect } from "react";
import { world } from "../lib/three.js";

export default function HOME() {
    const canvasref = useRef(null)
    useEffect(() => {
        if (canvasref.current) {
            const cleanup = world(canvasref.current);
            return () => cleanup();
        }
    }, []);
    return (
        <div className="w-full  h-200 flex items-center justify-center">
            <canvas ref={canvasref} className="mt-30 pointer-events-auto relative"></canvas>
        </div>
    )
}