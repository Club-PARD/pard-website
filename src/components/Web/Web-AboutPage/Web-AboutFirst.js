import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import AboutImage from '../../../assets/img/AboutLogo.png'; 
import AboutFrame from '../../../assets/img/AboutFrame.png'; 
import React, { useState, useEffect } from 'react';

const Header2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header2};
    font-weight: ${props => props.theme.fontWeights.Header2};
    color: ${props => props.scroll > 300 ? '#000000' : 'white'};;
    font-family: 'NanumSquare Neo';
    line-height:  84px;
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
    padding-bottom: 274px;
    padding-top: 330px;
    height: 225px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    background-color: ${props => props.scroll < 300 ? '#000000' : 'white'};
    transition: background-color 0.3s ease; /* 배경색 변경 시 부드럽게 전환되도록 설정 */
`;

const AboutLogo = styled.img`
    position: absolute;
    width: 1020.27px;
    height: 417px;
    margin-left: 1005px;
    margin-top: 100px;
    transform: translate(-50%, -50%);
    opacity: 0.5;
`;

const AboutFrame1 = styled.img`
    position: absolute;
    height: 40px;
    width: 100%;
    bottom: 0px;
    border-radius: 0px;
    padding: 0px 30px;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function AboutFirst() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <PartDiv scroll={scroll}>
            <ThemeProvider theme={theme}>
                <AboutLogo src={AboutImage} alt="AboutLogo" />
                <TextContainer>
                    <Header2 scroll={scroll}>
                        Pay it forward 문화를 실천하는<br />대학생 IT 협업 동아리 PARD
                    </Header2>   
                </TextContainer>
            </ThemeProvider>  
            <AboutFrame1 src={AboutFrame} alt="AboutFrame" />  
        </PartDiv>
    );
}

export default AboutFirst;
