import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import ProjectPage from "../../../pages/ProjectPage";

function HomeProgram() {
  document.documentElement.style.overflowX = "scroll";

  return <ProjectPage />;
}

export default HomeProgram;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 3.75vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
  padding-left: 5.5556vw;
  padding-right: 5.5556vw;
  padding-top: 7.9861vw;
  height: 62vw;
`;
