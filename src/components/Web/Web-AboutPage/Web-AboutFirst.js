import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import AboutImage from "../../../assets/img/AboutLogo.png";
import AboutFrame from "../../../assets/img/AboutFrame.png";
import React, { useState, useEffect } from "react";
import { pardDATA } from "../../../utils/data.constant";

function AboutFirst() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <AboutLogo src={AboutImage} alt="AboutLogo" />
          <TextContainer>
            <Header2>
              Pay it Forward 문화를 실천하는
              <br />
              대학생 IT 협업 동아리 PARD
            </Header2>
          </TextContainer>
        </ThemeProvider>
        <AboutFrame1 src={AboutFrame} alt="AboutFrame" />
      </PartDiv>
    </Div>
  );
}

export default AboutFirst;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: white;
  font-family: "NanumSquare Neo";
  line-height: 84px;
  margin-bottom: 43px;
  white-space: pre-line;
  text-align: center;
  width: 900px;
  height: 168px;
  left: 307px;
  top: 275px;
`;

const PartDiv = styled.div`
  position: relative;
  padding-left: 268px;
  padding-right: 268px;
  padding-bottom: 130px;
  padding-top: ${pardDATA.displayBanner ? "330px" : "230px"};
  height: 390px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  background-color: #1a1a1a;
  transition: background-color 0.3s ease;
`;

const AboutLogo = styled.img`
  position: absolute;
  width: 1020.27px;
  height: 390px;
  margin-left: 1005px;
  margin-top: 140px;
  transform: translate(-50%, -50%);
  opacity: 1;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AboutFrame1 = styled.img`
  position: absolute;
  height: 40px;
  width: 100%;
  bottom: 0%;
  border-radius: 0px;
  padding: 0px 30px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: ${pardDATA.displayBanner ? "calc(45% + 100px)" : "45%"};
  left: 50%;
  transform: translate(-50%, -50%);
`;
