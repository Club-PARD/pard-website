import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import AboutImage from "../../../assets/img/AboutLogo.png";
import ProgramFrame from "../../../assets/img/Program_Mob_Bar.png";

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: white;
  font-family: "NanumSquare Neo";
  line-height: 42px;
  white-space: pre-line;
  text-align: center;
  font-style: normal;
  width: 100%;
  /* height: 140px; */
  position: absolute;
  line-height: 140%;
  top: 22%;
`;

const ButtonText1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: white;
  text-align: center;
  position: absolute;
  top: 40%;
`;

const PartDiv = styled.div`
  /* height: 500px; */
  height: 100vh;
  margin-top: 100px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  background-color: #1a1a1a;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const AboutLogo = styled.img`
  width: 301px;
  height: 123px;
  opacity: 1;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProgramFrame1 = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  bottom: 0px;
`;

const CenterText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function ProjectFirst_Mob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <AboutLogo src={AboutImage} alt="AboutLogo" />
          {/* <Header8>
                        PARD가<br />진행한 프로젝트를<br />보여드릴게요
                    </Header8> */}

          <Header8>
            PARD의 프로젝트가
            <br />곧 공개될 예정이에요
          </Header8>
          <ButtonText1>
            PARD는 기획자・디자이너・개발자 간<br />
            협업을 바탕으로 독창적이면서도 <br />
            사용자의 문제를 효과적으로 해결할 수 있는 <br />
            다양한 프로젝트들을 선보이고 있습니다.
            <br />
          </ButtonText1>
        </ThemeProvider>
        <ProgramFrame1 src={ProgramFrame} alt="AboutFrame" />
      </PartDiv>
    </Div>
  );
}

export default ProjectFirst_Mob;
