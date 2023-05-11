import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import AboutImage from '../../../assets/img/AboutLogo.png'; 
import AboutFrame from '../../../assets/img/AboutFrame.png'; 


const Header2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header2};
    font-weight: ${props => props.theme.fontWeights.Header2};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    line-height:  84px;
    margin-bottom: 43px;
    white-space: pre-line;
    text-align : center;
    width: 836px;
    height: 168px;
    left: 307px;
    top: 275px;
  `;

const PartDiv = styled.div`
    position: relative;
    padding-left: 268px;
    padding-right: 268px;
    padding-bottom: 274px;
    padding-top: 274px;
    height: 717px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
`;

const AboutLogo = styled.img`
    position: absolute;
    width: 1020.27px;
    height: 417px;
    left: 209px;
    top: 150px;

    opacity: 0.5;
`;
const AboutFrame1 = styled.img`
    position: absolute;
    height: 40px;
    width: 1440px;
    bottom: 0px;
    border-radius: 0px;
    padding: 10px 30px 10px 30px;
`;


const TextContainer = styled.div`
    position: absolute;
    top: 31%;
    left: 50%;
    transform: translate(-50%, -50%);
`;



function AboutFirst() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
            <AboutLogo src={AboutImage} alt="AboutLogo" />
            <TextContainer>
                <Header2>
                    Pay it foward 문화를 실천하는<br/>대학생 IT 협업 동아리 PARD
                </Header2>   
            </TextContainer>
            </ThemeProvider>  
            <AboutFrame1 src={AboutFrame} alt="AboutFrame" />  
        </PartDiv>
        
    );
}

export default AboutFirst;