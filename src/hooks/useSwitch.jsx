import { useState } from "react";

function useSwitch(initialValue = false) {

    const [value, setValue] = useState(initialValue);

    // Funzione che cambia stato 
    const toggle = () => {
        setValue(currValue => !currValue);
    }
    
    return [value, toggle]
}

export default useSwitch;