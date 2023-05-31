import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from 'react';
import Bar from "../../../assets/img/숏_롱Frame.png";
import Card5 from "./Card5";


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
width: 340px;
height: 907px;
padding-left: 47px;
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
    margin-bottom: 200px;
`;

function ProgramLong_Mob() {
    return (
        <ThemeProvider theme={theme}>
            <SeminarDiv>
                <Header7_1></Header7_1>
                <Header7_2>롱커톤</Header7_2>
                <Header4>배포 가능한 서비스 설계</Header4>
                <Body2_1>PARD는 반드시 목표를 함께 이루어 냅니다.</Body2_1>
                <Body2>
                    아이디어 검증부터 서비스 런칭까지, 모든 파트가<br></br>
                    한 팀을 이루어 3주간 서비스를 완성합니다.<br></br>
                    파드 활동의 꽃, 데모데이를 통해 깊은 피드백을<br></br>
                    받으며 효과적으로 회고하고 성장합니다.
                </Body2>
                <CardnBtn>
                    <Card5 />
                </CardnBtn>
            </SeminarDiv>
            <Seminar_Bar src={Bar} alt="Bar" />
        </ThemeProvider>
    );
}

export default ProgramLong_Mob;
