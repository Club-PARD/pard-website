import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import ProjectGrid from "./ProjectPagination";

function ProjectLast() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
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