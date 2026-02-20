import { useEffect, useState } from "react";

function useCustomPointer(cursore) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", updatePosition);

        // Cleanup function
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

        return (
            <div
                style={{
                    position: "fixed",
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: "translate(-50%, -50%)",
                    fontSize: 24
                }}
            >
                {cursore}
            </div>
        );
}

export default useCustomPointer;