import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import AboutImage from "../../../assets/img/AboutLogo.png";
import ProgramFrame from "../../../assets/img/Program_Mob_Bar.png";
import ProjectGrid from "./ProjectPageNation";

const PartDiv = styled.div`
  height: 950px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${require("../../../assets/img/ProjectLast.png")});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ArrowLogo = styled.img`
  width: 80px;
  height: 120px;
  /* margin-left: 100px;
margin-right: 100px; */
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 140%;
  margin-top: 550px;
`;

const LogoDiv = styled.div`
  width: 1000px;
  display: flex;
  margin-bottom: 180px;
  margin-top: 200px;
  justify-content: space-between;
`;

function ProjectLast() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>
            PARD의 첫 프로젝트가
            <br />곧 공개 예정이에요!
          </Header7>
          <LogoDiv>
            <ArrowLogo src={require("../../../assets/img/Arrow_Project.png")} />
            <ArrowLogo src={require("../../../assets/img/Arrow_Project.png")} />
            <ArrowLogo src={require("../../../assets/img/Arrow_Project.png")} />
            <ArrowLogo src={require("../../../assets/img/Arrow_Project.png")} />
          </LogoDiv>
          {/* <ProjectGrid/> */}
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectLast;
