import styled from "styled-components";
import diceImage from "../../public/images/cubes_gambling_n_02 1.png";
import dice1 from "../../public/images/dice_1.png";
import dice2 from "../../public/images/dice_2.png";
import dice3 from "../../public/images/dice_3.png";
import dice4 from "../../public/images/dice_4.png";
import dice5 from "../../public/images/dice_5.png";
import dice6 from "../../public/images/dice_6.png";
import { useState } from "react";

function RollDice() {
  const [diceValue, setDiceValue] = useState();
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  console.log(diceValue)
  return (
    <Container>
      
      <div onClick={() => {setDiceValue(Math.ceil(Math.random()*6))}}>
        <img src={diceImages[diceValue-1]} alt="dice image" />
      </div>
      <p>Click on Dice to roll</p>
      <ButtonOutlined>Reset Score</ButtonOutlined>
      <ButtonBlacked>Show Rules</ButtonBlacked>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 450px;
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



export default RollDice;