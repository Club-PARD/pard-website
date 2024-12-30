import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import AboutImage from "../../../assets/img/AboutLogo_gray.png";
import { pardDATA } from "../../../utils/data.constant";

function ProjectFirst_Mob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <AboutLogo src={AboutImage} alt="AboutLogo" />
          <Header8>
            PARD가 진행한
            <br />
            프로젝트를 보여드릴게요
          </Header8>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectFirst_Mob;

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
  top: 20%;
`;

const PartDiv = styled.div`
  height: 200px;
  margin-top: ${pardDATA.displayBanner ? "200px" : "100px"};
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