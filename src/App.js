import {useContext} from "react";
import Spinner from "./components/Spinner";
import { AdviceProvider } from "./context/AdviceContext";
import AdviceContext from "./context/AdviceContext";

function App() {
  const {advice, isLoading, getAdvice} = useContext(AdviceContext);

  return (
    <AdviceProvider>
    <div className="bg-dark-bg w-full h-screen grid grid-cols-1 justify-center items-center w-full">
      <div className="w-[24rem] h-[15rem] relative mx-auto bg-gray-bg p-4 flex flex-col gap-4 justify-items-center text-center rounded-xl sm:w-[25rem] relative">
        <h2 className="text-green-bg text-[0.8rem]">ADVICE #{!isLoading? advice.id : "..."}</h2>
        {!isLoading ? <p className="text-whitish-text font-bold text-xl indent-[2.5rem]">"{advice.advice}"</p>: <Spinner/>}
        <img className="mt-4" src="images/pattern-divider-desktop.svg" alt="screen-divider"/>
        {/* <img className="mt-4 lg:block md:hidden sm:hidden" src="images/pattern-divider-mobile.svg" alt="screen-divider"/> */}
        <div className="absolute flex bg-green-bg p-3 left-[45.5%] rounded-full hover:shadow-dice cursor-pointer -bottom-5">
          <img className="w-4" src="images/icon-dice.svg" onClick={getAdvice} alt="advice-die" />
        </div>
      </div>
    </div>
    </AdviceProvider>
  );
}

export default App;
