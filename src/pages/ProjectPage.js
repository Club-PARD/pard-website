import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/NavBar";
import ProgramsTrain from "../components/Web/Web-ProjectPage/ProgramsTrain";
import ProHeader from "../components/Web/Web-ProjectPage/ProHeader";

function ProjectPage() {
  const ProjectPageComponent = styled.div`
    background-color: "black";
  `;
  return (
    <ProjectPageComponent>
      <Navbar />
      {/* <ProHeader /> */}
      <ProgramsTrain />
    </ProjectPageComponent>
  );
}

export default ProjectPage;
