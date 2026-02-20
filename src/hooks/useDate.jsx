import { useEffect, useState } from "react";

function useDate() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect( () => {
        const idInterval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000)

        // Cleanup function
        return () => {
            clearInterval(idInterval);
        }
    },[]);

    return currentDate;
}

export default useDate;