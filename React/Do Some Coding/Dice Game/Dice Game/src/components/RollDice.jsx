import styled from "styled-components";
import diceImage from "../../public/images/cubes_gambling_n_02 1.png";
import dice1 from "../../public/images/dice_1.png";
import dice2 from "../../public/images/dice_2.png";
import dice3 from "../../public/images/dice_3.png";
import dice4 from "../../public/images/dice_4.png";
import dice5 from "../../public/images/dice_5.png";
import dice6 from "../../public/images/dice_6.png";
import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

function RollDice() {
  const { diceValue, setDiceValue, selectedNumber, setSelectedNumber, setTotalScore, setNumberSelectorError } = useContext(MyContext);
  const [isShowRules, setIsShowRules] = useState(false);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const handleRollDice = () => {
    if (!selectedNumber) { setNumberSelectorError("please select a roll no before") } else {
      const randomValue = Math.ceil(Math.random() * 6);
      setDiceValue(randomValue); 
      if (randomValue === selectedNumber) {
        setTotalScore(prev => prev + 10);
      } else {
        setTotalScore(prev => prev - 5);
      }
      // setDiceValue();
      setSelectedNumber();
    }
  }
  return (
    <>
    <Container>
      
      <div onClick={handleRollDice}>
        <img src={diceImages[diceValue-1] ?? diceImages[0] } alt="dice image" />
      </div>
      <p>Click on Dice to roll</p>
      <ButtonOutlined onClick={() => {setTotalScore(0)}}>Reset Score</ButtonOutlined>
      <ButtonBlacked onClick={() => setIsShowRules(prev => !prev)}>{isShowRules ? "Hide" : "Show"} Rules</ButtonBlacked>
      
    </Container>
      {
        isShowRules && <Rules className="rules">
        <h4>How to play dice game</h4>
        <p>Select any number</p>
        <p>Click on dice image</p> <p>after click on  dice  if selected number is equal to dice number you will get 10 points</p>
        <p>if you get wrong guess then 5 point will be dedcuted </p>
          </Rules>
    }
      </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  
  margin: 36px auto 0;
  img {
    margin-bottom: 15px;
  }
  p {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  button {
    width: 222px;
    height: 44px;
    margin-bottom: 1rem;
    border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600px;
  }
  
`;

const ButtonOutlined = styled.button `
  background-color: White;
  color: black;
  
  
`

const ButtonBlacked = styled.button `
   background-color: black;
   color: white;
`

const Rules = styled.div `
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #d4c9c9;;
  h4 {
    margin-bottom: 7px;
  }
    p {
      font-size: 14px;
      text-align: left;
    }
  
`



export default RollDice;