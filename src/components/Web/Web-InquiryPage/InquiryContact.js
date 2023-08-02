import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import Ask from "./InquiryContact_Web_Asked";

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 54px;
  white-space: pre-line;
`;

const PartDiv = styled.div`
  margin: 0px auto;
  justify-content: center;
  margin-top: 130px;
  height: 893px;
  width: 1440px;
`;

function InquiryContact() {
  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Ask />
      </ThemeProvider>
    </PartDiv>
  );
}

export default InquiryContact;
