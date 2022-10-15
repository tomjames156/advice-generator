import {createContext, useEffect, useState} from "react";

const AdviceContext = createContext();

export function AdviceProvider({children}) {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        getAdvice()
    }, []);

    const getAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data);
    }
    return (
        <AdviceContext.Provider value={{
            advice}}>
            {children}
        </AdviceContext.Provider>
    )
}

export default AdviceContext;