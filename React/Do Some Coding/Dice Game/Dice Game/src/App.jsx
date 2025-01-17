import "./App.css";
import { useState } from "react";
import StartGame from './components/StartGame'
import GamePlay from "./components/GamePlay";
import { MyContext } from "./MyContext";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  function toggle() {
    setIsGameStarted((prev) => !prev);
  }
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceValue, setDiceValue] = useState();
  const [totalScore, setTotalScore] = useState(0);
  const [numberSelectorError, setNumberSelectorError] = useState("");
  
  return (
    <>
      <MyContext.Provider value={{selectedNumber, setSelectedNumber, diceValue, setDiceValue, totalScore, setTotalScore, numberSelectorError, setNumberSelectorError}}>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggle} />
      }
      </MyContext.Provider>
    </>
  )
}

export default App;