import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import Ask from "./InquiryContact_Web_Asked";
import { pardDATA } from "../../../utils/data.constant";

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

const PartDiv = styled.div`
  margin: 0px auto;
  justify-content: center;
  margin-top: ${pardDATA.displayBanner ? "230px" : "130px"};
  height: 893px;
  width: 1440px;
`;
