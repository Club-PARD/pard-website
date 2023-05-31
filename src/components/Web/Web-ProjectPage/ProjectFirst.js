import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import AboutImage from '../../../assets/img/AboutLogo.png';
import ProgramFrame from '../../../assets/img/ProgramFrame.png';
import React, { useState, useEffect } from 'react';

const Header2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header2};
    font-weight: ${props => props.theme.fontWeights.Header2};
    color: white;
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
    padding-bottom: 130px;
    padding-top: 230px;
    height: 390px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    background-color: #1A1A1A;
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

const ProgramFrame1 = styled.img`
    position: absolute;
    height: 40px;
    width: 100%;
    /* margin-top: 550px; */
    bottom: 0%;
    border-radius: 0px;
    padding: 0px 30px;

`;

const TextContainer = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const Header5 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    color: white;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    /* or 34px */

    text-align: center;
`;


function Projectirst() {

    return (
        <Div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <AboutLogo src={AboutImage} alt="AboutLogo" />
                    <TextContainer>
                        <Header2>
                            PARD가 진행한<br />프로젝트를 보여드릴게요
                        </Header2>
                        <Header5>
                            PARD는 기획자・디자이너・개발자 간 협업을 바탕으로
                            <br />독창적이면서도 사용자의 문제를 효과적으로 해결할 수 있는
                            <br />다양한 프로젝트들을 선보이고 있습니다.
                        </Header5>
                    </TextContainer>
                </ThemeProvider>
                <ProgramFrame1 src={ProgramFrame} alt="AboutFrame" />
            </PartDiv>
        </Div>
    );
}

export default Projectirst;
