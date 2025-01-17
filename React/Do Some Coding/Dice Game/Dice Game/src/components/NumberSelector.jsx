import { useContext, useState } from "react";
import styled from "styled-components"
import { MyContext } from "../MyContext";

const NumberSelector = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const { selectedNumber, setSelectedNumber, numberSelectorError, setNumberSelectorError} =  useContext(MyContext);
 

  return (
    <OuterContainer>
      <h3 className="error">{numberSelectorError}</h3>
      <InnerContainer>
        {
          numbers.map((number, index) => <NumberBox key={index} onClick={() => { setSelectedNumber(number); setNumberSelectorError("") }} isSelected={number === selectedNumber} >{number}</NumberBox>)
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
  h3 {
    color: red;
    font-style: italic;
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
    background-color: ${(props) => { return props.isSelected ? "black" : "white" }};
    color: ${({ isSelected }) => isSelected ? "white": "black"};
`

export default NumberSelector