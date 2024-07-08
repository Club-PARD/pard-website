import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

function ProHeader() {
  return (
    <div>
      <ProgramDiv>
        <ThemeProvider theme={theme}>
          <Header2>PROGRAMS</Header2>
        </ThemeProvider>
      </ProgramDiv>
    </div>
  );
}

export default ProHeader;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 3vw;
  white-space: pre-line;
`;

////////////////// 폰트 끝 ///////////////////////////

const ProgramDiv = styled.div`
  padding-left: 5.5556vw;
  padding-right: 5.5556vw;
  padding-top: 7.9861vw;
`;
