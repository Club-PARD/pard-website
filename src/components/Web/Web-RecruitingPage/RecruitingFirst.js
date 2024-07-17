import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import { RecruitmentStatusButtonWeb } from "../Components/RecruitmentStatusButtonWeb";
import { pardDATA } from "../../../utils/data.constant";

function RecruitingFirst() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header2>함께 성장하며 최고의 팀을 만들어가는 곳</Header2>
          <Header5>
            단순히 같이 일하는 것이 협업이라고 생각하시나요?
            <br />
            PARD에서 서로의 전문성을 이해하고, 솔직하게 대립하고, 빠르게
            실행해요.
          </Header5>
          <RecruitmentStatusButtonWeb
            theme={theme}
            backgroundColor={theme.MainColor.PrimaryGreen}
          />
          <DownLogo
            src={require("../../../assets/img/DownScrollLogo.png")}
            alt="downLogo"
          />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingFirst;

const PartDiv = styled.div`
  height: 950px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  margin-top: ${pardDATA.displayBanner ? "100px" : "0px"};
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 102px;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
  margin-top: 101px;
`;
