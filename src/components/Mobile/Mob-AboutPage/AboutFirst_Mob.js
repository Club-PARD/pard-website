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
  white-space: pre-line;
  text-align: center;
  font-style: normal;
  width: 280px;
  height: 168px;
`;

const PartDiv = styled.div`
  height: 756px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

const Div = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  align-items: center;
`;

const AboutLogo = styled.img`
  width: 301px;
  height: 123px;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  left: 50%;
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
`;

function AboutFirst_Mob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <AboutLogo src={AboutImage} alt="AboutLogo" />
          <Header8>
            Pay it forward<br/>문화를 실천하는<br/>대학생 IT 협업 동아리<br/>PARD
          </Header8>
        </ThemeProvider>
        <AboutFrame1 src={AboutFrame} alt="AboutFrame" />
      </PartDiv>
    </Div>
  );
}

export default AboutFirst_Mob;
