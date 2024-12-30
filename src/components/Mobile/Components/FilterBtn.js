import React from "react";
import styled from "styled-components";

function FilterBtn({ part, setPart, selected }) {
  return (
    <Button
      isSelected={part.toLowerCase() === selected.toLowerCase()}
      onClick={() => setPart(part.toLowerCase())}
    >
      {part}
    </Button>
  );
}

const Button = styled.button`
  width: 94px;
  height: 34px;
  font-family: "NanumSquare Neo";
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  border-radius: 1200px;
  border: none;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  background-color: ${(props) => (props.isSelected ? "#7B3FEF" : "#fff")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
`;

export default FilterBtn;