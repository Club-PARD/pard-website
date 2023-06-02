import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import React from 'react';
import AboutImage from '../assets/img/임시화면로고.png';
import ProgramFrame from '../assets/img/HomeEditFrame.png';

const Header6 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: white;
  font-family: 'NanumSquare Neo';
  line-height: 42px;
  white-space: pre-line;
  text-align: center;
  font-style: normal;
  width: 300px;
  position: relative;
  line-height: 140%;
  margin-top: 19px;
  margin-bottom: 32px;
`;

const Body1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Body1};
  font-weight: ${props => props.theme.fontWeights.Body1};
  font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 140%;
color: rgba(255, 255, 255, 1);
position: relative;
text-align: center;
margin-bottom: 119px;
`;

const PartDiv = styled.div`
  height: 700px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  background-color: #1A1A1A;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  align-items: center;
`;

const AboutLogo = styled.img`
  width: 240px;
  height: 60px;
  margin-left: 20px;
`;

const Button1 = styled.button`
    font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
    font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 34px;
    width: 220px;
    height: 52px;
    background-color: #FF5C00;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    cursor: pointer;
  `

const ProgramFrame1 = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  bottom: 0px;
`;

function TemporaryPage() {

    const handleClick = () => {
        window.open("https://tally.so/r/w4BxRd", "_blank");
      };

    return (
        <Div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <AboutLogo src={AboutImage} alt="AboutLogo" />
                    <Header6>모바일 페이지는 제작 중이에요! </Header6>
                    <Body1>파드의 자세한 내용이 궁금하시다면<br/>PC로 확인해주세요</Body1>
                    <Header6>진짜 협업을 경험하고 싶다면</Header6>
                    <Button1  onClick={handleClick}>지금 바로 2기 지원하기</Button1>
                </ThemeProvider>
                <ProgramFrame1 src={ProgramFrame} alt="AboutFrame" />
            </PartDiv>
        </Div>
    );
}

export default TemporaryPage;
