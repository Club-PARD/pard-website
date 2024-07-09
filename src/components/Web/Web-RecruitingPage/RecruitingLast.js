import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import { RecruitmentStatusButtonWeb } from "../Components/RecruitmentStatusButtonWeb";

function RecruitingLast() {
  const handleClick = () => {
    window.open("https://pard-notice.oopy.io", "_blank");
  };
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>협업에 미친 파드의 여정에 동참하고 싶다면</Header7>
          <RecruitmentStatusButtonWeb
            theme={theme}
            backgroundColor={theme.MainColor.PrimaryGreen}
          />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingLast;

const PartDiv = styled.div`
  height: 624px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 80px;
`;
const Div = styled.div`
  margin: 0px auto;
  justify-content: center;
  display: flex;
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
  margin-bottom: 70px;
`;
