import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import AboutImage from '../../../assets/img/AboutLogo.png';
import AboutFrame from '../../../assets/img/AboutFrame.png';

const Header8 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 42px;
  margin-bottom: 29px;
  white-space: pre-line;
  text-align: center;
  font-style: normal;
  width: 280px;
  height: 168px;
  margin-left: 40px;
`;

const PartDiv = styled.div`
  padding-top: 289px;
  padding-left: 47px;
  padding-right: 47px;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  overflow-x: hidden;
  width: 100%; /* 전체 너비 차지 */
`;

const AboutLogo = styled.img`
  position: absolute;
  width: 301px;
  height: 123px;
  opacity: 0.5;
  left: 53%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AboutFrame1 = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  bottom: 0px;
  margin: 0;
`;

function AboutFirst_Mob() {
  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <AboutLogo src={AboutImage} alt="AboutLogo" />
        <Header8>
          Pay it forward<br/>문화를 실천하는<br/>대학생 IT 협업 동아리<br/>PARD
        </Header8>
      </ThemeProvider>
      <AboutFrame1 src={AboutFrame} alt="AboutFrame" />
    </PartDiv>
  );
}

export default AboutFirst_Mob;
