import styled from "styled-components";

function StartGame({toggle}) {
  return (
    <div>
      <Container>
        <img src="/images/dices1.png" />
        <div>
          <h1>Dice Game</h1>
          <div className="playbtn"><Button onClick={() => {toggle()}}>Play Now</Button></div>
        </div>
      </Container>
    </div>
  )
}


const Container = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 96px;
    white-space: nowrap;;
    margin: 0;
  }
  button {
    font-size: 16px;
  }
  .playbtn {
    display: flex;;
    justify-content: flex-end;
  }
`;

const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
width: 220px;
height: 44px;
border: none;
border-radius: 5px;;
cursor: pointer;
&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}
`;

export default StartGame;
