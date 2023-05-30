import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from 'react';
import Bar from "../../../assets/img/숏_롱Frame.png";
import Card2 from "./Card4";


const Header7_1 = styled.div`
    font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
    font-weight: ${(props) => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    justify-content: start; 
    white-space: pre-line;
    margin-top: 70px;
`;

const Header7_2 = styled.div`
    font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
    font-weight: ${(props) => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    justify-content: start; 
    white-space: pre-line;
    margin-top: 70px;
`;

const Header4 = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  margin-top: 50px;
`;

const Body2 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  line-height: 19.6px;
  display: flex;
`;

const Body2_1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #7B3FEF;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  line-height: 19.6px;
  display: flex;
  margin-top: 30px;
`;

const SeminarDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: auto 0;
width: 375px;
height: 907px;
padding: 0 20px;
margin-left: 47px;

`;

const CardnBtn = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    height: 360px;
`;

const Seminar_Bar = styled.img`
    width: 100%;
    height: auto;
    margin-top: 100px;
    margin-bottom: auto;
`;

function ProgramShort_Mob() {
  return (
    <ThemeProvider theme={theme}>
      <SeminarDiv>
        <Header7_1></Header7_1>
        <Header7_2>숏커톤</Header7_2>
        <Header4>빠른 실패와 검증</Header4>
        <Body2_1>PARD는 빠르고 작은 성공을 수집합니다.</Body2_1>
        <Body2>
          무박 2일 간의 해커톤을 통해<br></br>
          기획자, 디자이너, 개발자가 함께 소통하여<br></br>
          최소 기능 제품을 구현하며<br></br>
          제품 개발 협업의 첫 발을 내딛습니다.<br></br>
        </Body2>

        <CardnBtn>
          <Card2 />
        </CardnBtn>
      </SeminarDiv>
      <Seminar_Bar src={Bar} alt="Bar" />
    </ThemeProvider>
  );
}

export default ProgramShort_Mob;
