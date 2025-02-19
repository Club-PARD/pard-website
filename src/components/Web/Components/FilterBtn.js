import React from "react";
import styled from "styled-components";

function FilterBtn({ part, setPart, selected }) {
  return (
    <Button
      part={part}
      selected={selected}
      onClick={() => setPart(part.toLowerCase())}
    >
      <p>{part}</p>
    </Button>
  );
}

const Button = styled.button`
  width: 158px;
  height: 58px;
  font-family: "NanumSquare Neo";
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  border-radius: 2000px;
  border: none;
  color: ${(props) =>
    props.part.toLowerCase() === props.selected.toLowerCase()
      ? "#fff"
      : "#000"};
  background-color: ${(props) =>
    props.part.toLowerCase() === props.selected.toLowerCase()
      ? "#7B3FEF"
      : "#fff"};
  cursor: pointer;
  p {
    margin-top: 16px;
  }
`;

export default FilterBtn;