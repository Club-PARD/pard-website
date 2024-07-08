import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import Bar from "../../../assets/img/세미나Frame.png";
import Card1 from "./Card1";

function ProgramSeminar_Mob() {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        <SeminarDiv>
          <Header7_1>PROGRAMS</Header7_1>
          <Header7_2>세미나</Header7_2>
          <Header4>프로덕트 메이킹의 기반</Header4>
          <Body2_1>PARD는 기본에 충실합니다.</Body2_1>
          <Body2>
            IT 프로덕트를 완성하기 위해 필요한 지식을 서로 공유
            <br />
            하고, 기술적으로 성장할 수 있도록 돕습니다.
            <br />
            파트별 전문가나 선배들의 초밀착 멘토링을 통해,
            <br />
            실무에서 활용할 수 있는 팁과 노하우를 배웁니다.
            <br />
          </Body2>
          <CardnBtn>
            <Card1 />
          </CardnBtn>
        </SeminarDiv>
        <Seminar_Bar src={Bar} alt="Bar" />
      </ThemeProvider>
    </Div>
  );
}

export default ProgramSeminar_Mob;

const Header7_1 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  justify-content: start;
  white-space: pre-line;
  margin-top: 70px;
  margin-left: 10px;
`;

const Header7_2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  justify-content: start;
  white-space: pre-line;
  margin-top: 70px;
  margin-left: 10px;
`;

const Header4 = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start;
  margin-top: 50px;
  margin-left: 10px;
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
  margin-left: 10px;
`;

const Body2_1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #64c59a;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start;
  line-height: 19.6px;
  display: flex;
  margin-top: 30px;
  margin-left: 10px;
`;

const SeminarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0;
  width: 340px;
  height: 907px;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
