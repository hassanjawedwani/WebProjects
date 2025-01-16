import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

function GamePlay() {
  return (
    <>
    <Container>
      <TotalScore />
      <NumberSelector />
    </Container>
    <RollDice />
    </>
  );
}

const Container = styled.div `
  max-width: 1280px;
  max-height: 158px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export default GamePlay;