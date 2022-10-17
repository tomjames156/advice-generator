import {createContext, useEffect, useState} from "react";
const AdviceContext = createContext();

function AdviceProvider({children}) {
    const [advice, setAdvice] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {getAdvice()}, []);

    const getAdvice = async () => {
        setIsLoading(true);
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const {slip} = await response.json();
        setAdvice(slip);
        setIsLoading(false);
    }

    return (
        <AdviceContext.Provider value={{
            advice, 
            isLoading, 
            getAdvice,
        }}>{children}
        </AdviceContext.Provider>
    )
}

export default AdviceContext;
export {AdviceProvider};