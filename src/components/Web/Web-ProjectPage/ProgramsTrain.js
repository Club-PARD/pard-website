import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import ProgramSeminar from "./ProgramSeminar";
import ProgramStudy from "./ProgramStudy";
import ProgramSurfing from "./ProgramSurfing";
import ProgramShort from "./ProgramShort";
import ProgramLong from "./ProgramLong";

const programComponents = {
  1: <ProgramSeminar />, 
  2: <ProgramStudy />, 
  3: <ProgramSurfing />, 
  4: <ProgramShort />, 
  5: <ProgramLong />,
};

const buttonColors = {
  1: "#64C59A",
  2: "#5262F5",
  3: "#FF5C00",
  4: "#7B3FEF",
  5: "#7B3FEF",
};

function ProgramsTrain() {
  const [selectedProgram, setSelectedProgram] = useState(1);

  return (
    <DivContainer>
      <ThemeProvider theme={theme}>
        <Header2>PROGRAMS</Header2>
        <ButtonContainer>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedProgram(num)}
              className={selectedProgram === num ? "active" : ""}
              style={{ backgroundColor: selectedProgram === num ? buttonColors[num] : "#1A1A1A" }}
            >
              {num === 1 ? "세미나" : num === 2 ? "스터디" : num === 3 ? "서핑데이" : num === 4 ? "숏커톤" : "롱커톤"}
            </button>
          ))}
        </ButtonContainer>
        <Container>
          <ScrollContainer>
            <Div>{programComponents[selectedProgram]}</Div>
          </ScrollContainer>
        </Container>
      </ThemeProvider>
    </DivContainer>
  );
}
export default ProgramsTrain;

const DivContainer = styled.div`
  margin: 0px auto;
  height: 850px;
  justify-content: center;
  width: 1330px;
  margin-bottom: 233px;
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  padding-right: 40px;
  padding-left: 125px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 368px;
  padding-left: 125px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 40px;
  padding-left: 125px;

  button {
    width: auto;
    height: auto;
    padding-top: 7.76px;
    padding-bottom: 7.76px;
    padding-right: 15px;
    padding-left: 15px;
    background-color: #1A1A1A;
    color: white;
    font-family: "NanumSquare Neo";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    cursor: pointer;
    border-radius: 1551.402px;
    border: 1px solid #FFF;
  }

  button.active {
    border: none;
  }
`;

const ScrollContainer = styled.div`
  width: 100%;
  max-width: 1802px;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  animation: scroll 15s linear infinite; /* 15초마다 스크롤이 자동으로 반복됨 */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 92px;
`;