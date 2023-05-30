import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from 'react';
import Bar from "../../../assets/img/서핑데이Frame.png";
import Card3 from "./Card3";


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
  color: #FF5C00;
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

function ProgramSurfing_Mob() {
  return (
    <ThemeProvider theme={theme}>
      <SeminarDiv>
        <Header7_1></Header7_1>
        <Header7_2>서핑데이</Header7_2>
        <Header4>진짜 협업의 시작</Header4>
        <Body2_1>PARD는 조직 문화의 힘을 신뢰합니다.</Body2_1>
        <Body2>
          1박 2일의 워크샵을 통해 구성원들이 생각하는<br></br>
          협업의 정의를 묻고, 좋은 협업을 위한<br></br>
          커뮤니케이션에 대해 다함께 고민합니다.
        </Body2>

        <CardnBtn>
          <Card3 />
        </CardnBtn>
      </SeminarDiv>
      <Seminar_Bar src={Bar} alt="Bar" />
    </ThemeProvider>
  );
}

export default ProgramSurfing_Mob;
