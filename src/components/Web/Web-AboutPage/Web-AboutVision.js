import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";

function AboutVision() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드의 비전</Header7>
          <Cover>
            <First>01</First>
            <Down1>
              <Mainblack>
                파드는<strong className="Orange"> 몰입이 필요한 동아리 </strong>
                입니다.
              </Mainblack>
            </Down1>
          </Cover>
          <Cover>
            <Verticalline1></Verticalline1>
            <Subblack1>
              파드는 단순한 지식 습득과 프로젝트 경험을 위한 동아리가 아닙니다.
              <br></br>
              혼자보다는 함께 성장에 대한 끊임없는 열망으로<br></br>
              서비스 기획-디자인-개발 과정을 거쳐 완성도 높은 서비스를 만들어
              냅니다.
            </Subblack1>
          </Cover>
          <Cover>
            <Second>02</Second>
            <Down2>
              <Mainblack>
                <strong className="Orange">좋은 협업</strong>이란 무엇인지
                끊임없이 함께 고민합니다.
              </Mainblack>
            </Down2>
          </Cover>
          <Cover>
            <Verticalline2></Verticalline2>
            <Subblack1>
              단순히 일을 잘 분배하고 최선을 다한다는 것이 협업의 전부라고
              생각하지 않습니다.<br></br>
              모두가 공감하는 목표를 추구하고, 모든 의견과 피드백은 선명한
              솔직함에 기반하며,<br></br>
              모자란 점을 투명하게 공유하고, 함께 보완하는 것이 진짜 협업이라고
              믿고 실천합니다.
            </Subblack1>
          </Cover>
          <Cover>
            <Third>03</Third>
            <Down2>
              <Mainblack>
                현업 실무진 분들과
                <strong className="Orange"> 함께 성장하는 커뮤니티</strong>를
                꿈꿉니다.
              </Mainblack>
            </Down2>
          </Cover>
          <Cover>
            <Verticalline3></Verticalline3>
            <Subblack1>
              동아리원 소속 대학의 알럼나이 분들과 대학 재학생들을 잇는 교두보
              역할을 수행합니다.<br></br>
              동아리원들은 실무자분들로부터 현실적인 조언을 구하고 성장합니다.
              <br></br>
              Pay it forward에 공감하는 사람들이 모여 교류하고 소통함으로 IT
              생태계를 확장합니다.
            </Subblack1>
          </Cover>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutVision;

const Div = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  /* padding-left:360px; */
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: black;
  font-family: "NanumSquare Neo";
  line-height: 140%;
  margin-bottom: 60px;
  white-space: pre-line;
`;

const PartDiv = styled.div`
  padding-top: 188px;
  padding-bottom: 100px;
  justify-content: center;
  height: 850px;
  /* width: 1440px; */
  width: 1080px;
  border-radius: 0px;
  background: #ffffff;
  margin: 0 auto;
`;

const Cover = styled.div`
  display: flex;
`;

const Down1 = styled.div`
  margin-top: 4px;
  display: flex;
`;

const Down2 = styled.div`
  margin-top: 4px;
  display: flex;
`;

const First = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  margin-left: 4px;
  margin-right: 76px;
  margin-bottom: 30px;
`;

const Second = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  margin-left: 136px;
  margin-right: 73px;
  margin-bottom: 30px;
`;

const Third = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  margin-left: 312px;
  margin-right: 73px;
  margin-bottom: 30px;
`;

const Mainblack = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: black;
  white-space: pre-wrap;

  .Orange {
    color: #ff5c00;
    white-space: pre-wrap;
    font-size: ${(props) => props.theme.Mob_fontSizes.Header5};
    font-weight: ${(props) => props.theme.fontWeights.Header5};
  }
`;

const Mainorange = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ff5c00;
  white-space: pre-wrap;
`;

const Subblack1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  display: flex;
  color: black;
  line-height: 160%;
  margin-top: -1px;
  text-align: start;
`;

const Verticalline1 = styled.div`
  margin-left: 22px;
  border: 1px solid #ff5c00;
  height: 150px;
  width: 0px;
  margin-right: 95px;
  margin-bottom: 68px;
`;

const Verticalline2 = styled.div`
  margin-left: 157px;
  border: 1px solid #ff5c00;
  height: 150px;
  width: 0px;
  margin-right: 95px;
  margin-bottom: 68px;
`;

const Verticalline3 = styled.div`
  margin-left: 334px;
  border: 1px solid #ff5c00;
  height: 150px;
  width: 0px;
  margin-right: 95px;
  margin-bottom: 68px;
`;
