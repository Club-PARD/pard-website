import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import ProjectGrid from "./ProjectPageNation";

function ProjectLast() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>전체 프로젝트</Header7>
          <ProjectGrid />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectLast;

const PartDiv = styled.div`
  /* height: 1800px; */
  height: auto;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
  margin-top: 180px;
  margin-right: 840px;
  margin-bottom: 90px;
`;
