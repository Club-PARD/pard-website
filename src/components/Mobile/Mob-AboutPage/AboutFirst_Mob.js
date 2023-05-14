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
  margin-bottom: 58px;
  white-space: pre-line;
  text-align : center;
  font-style: normal;
  position: absolute;
  width: 280px;
  height: 168px;
  left: 47px;
  top: 289px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  `;

const PartDiv = styled.div`
  padding-left:174px;
  padding-right: 149px;
  padding-top: 133px;
  height: 756px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  align-items: center;
`;
const AboutLogo = styled.img`
  position: absolute;
  width: 301px;
  height: 123px;
  left: 37px;
  top: 307px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  opacity: 0.5;
`;
const AboutFrame1 = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 113px;
  position: absolute;
  width: 375px;
  height: 40px;
  left: 0px;
  top: 756px;
  
`;


function AboutFirst_Mob() {

  return (
    <PartDiv>
            <ThemeProvider theme={theme}>
            <AboutLogo src={AboutImage} alt="AboutLogo" />
            <Header8>
                    Pay it foward<br/>문화를 실천하는<br/>대학생 IT 협업 동아리<br/>PARD
            </Header8>   
            </ThemeProvider>  
            <AboutFrame1 src={AboutFrame} alt="AboutFrame" />  
        </PartDiv>
  );
}

export default AboutFirst_Mob;