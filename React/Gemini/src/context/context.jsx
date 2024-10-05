import { createContext, useState } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    },75 * index )
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input);
    const responseArray = response.split("**");
    let newResponse;
    const l = responseArray.length;
    for (let i = 0; i < l; i++) {
      if (i === 0 || i % 2 !== 0) {
        newResponse += responseArray[i];
      }
      else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br>")
    let newResponseArray = newResponse2.split(" ");
    const l2 = newResponseArray.length;
    for (let i = 0; i < l2; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord+" ");
    }

    setLoading(false);
    setInput("");
  }

  const contextValue = {
    previousPrompts,
    setPreviousPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;