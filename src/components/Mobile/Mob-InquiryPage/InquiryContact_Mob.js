import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import Askmobile from "./InquiryContact_Mob_ASked";
import { pardDATA } from "../../../utils/data.constant";

function InquiryContactMob() {
  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Askmobile />
      </ThemeProvider>
    </PartDiv>
  );
}

export default InquiryContactMob;

const PartDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px auto;
  padding-top: ${pardDATA.displayBanner ? "145px" : "45px"};
  height: 800px;
`;
