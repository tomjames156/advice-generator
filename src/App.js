import AdviceContext from "./context/AdviceContext";
import {useContext} from "react";

function App() {
  const advice = useContext(AdviceContext);
  // "It is easy to sit up and take notice what is difficult is getting up and taking action"

  return (
    <div className="bg-dark-bg w-screen h-screen grid grid-cols-1 justify-center items-center">
      <div className="w-[24rem] h-[15rem] relative mx-auto bg-gray-bg p-4 flex flex-col gap-4 text-center rounded-xl sm:w-[25rem] sm:h-[15rem]">
        <h2 className="text-green-bg text-[0.8rem]">ADVICE #117</h2>
        <p className="text-whitish-text font-bold text-xl indent-[2.5rem]">{advice}</p>
        <img className="mt-4 md:block sm:hidden lg:block" src="images/pattern-divider-desktop.svg" alt="screen-divider"/>
        <img className="mt-4 sm:block md:hidden lg:hidden" src="images/pattern-divider-mobile.svg" alt="screen-divider"/>
        <div className="absolute mx-[10.25rem] align-center flex justify-center p-3 -bottom-4 bg-green-bg rounded-full hover:shadow-dice cursor-pointer">
          <img className="w-4" src="images/icon-dice.svg" alt="advice-die" />
        </div>
      </div>
    </div>
  );
}

export default App;
