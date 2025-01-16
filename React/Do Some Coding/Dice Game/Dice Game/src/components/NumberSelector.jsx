import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);
  return (
    <OuterContainer>
      <InnerContainer>
        {
          numbers.map((number, index) => <NumberBox key={index} onClick={() => {setSelectedNumber(number)}} isSelected={ number === selectedNumber} >{number}</NumberBox>)
        }
      </InnerContainer>
      <p>Select Number</p>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 552px;
  gap: 24px;
  p {
    font-size: 24px;
    font-weight: bold;
    text-align: end;
  }
`;

const InnerContainer = styled.div `
  display: flex;
  gap: 2rem;
  ;
  
`
const NumberBox = styled.div `
    border: 1px solid black;
    width: 72px;
    height: 72px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    };
    background-color: ${(props) => { console.log(props.isSelected); return props.isSelected ? "black" : "white" }};
    color: ${({ isSelected }) => isSelected ? "white": "black"};
`

export default NumberSelector