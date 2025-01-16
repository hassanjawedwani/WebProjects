import styled from "styled-components";

function TotalScore() {
  return (
    <Container>
        <h1>0</h1>
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