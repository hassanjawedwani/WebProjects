import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../MyContext";

function TotalScore() {
  const { totalScore } = useContext(MyContext);
  return (
    <Container>
        <h1>{totalScore}</h1>
        <p>Total Score</p>
    </Container>
  )
}

const Container = styled.div`
    width: 135px;
    height: 150px;
    text-align: center;
    h1 {
    font-size: 100px;
    line-height: 100px;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      white-space: nowrap;
    }

`;

export default TotalScore;