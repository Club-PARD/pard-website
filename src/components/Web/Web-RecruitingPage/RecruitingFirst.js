import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

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
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
font-style: normal;
line-height: 140%;
margin-top: 183px;
`;

const Header5 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
font-style: normal;
line-height: 140%;
text-align: center;
margin-top: 40px;
`;

const Button = styled.button`
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    font-family: 'NanumSquare Neo';
    display: flex;
    align-items: center;
    width: 440px;
    height: 58px;
    background-color: #64C59A;
    justify-content: center;
    margin-top: 110px;
    color: #000000;
    border-radius: 10px;
    border : none;
`;

const DownLogo = styled.img`
width: 80px;
height: 63px;
margin-top: 101px;
`

function RecruitingFirst() {

  const handleClick = () => {
    window.open("https://tally.so/r/w4BxRd", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header2>협업이 무엇이라고 생각하시나요?</Header2>
          <Header5>파드는 제대로 ‘협업’하고자 하는 사람들이<br/>함께 ‘성장’하고자 모였어요!</Header5>
          <Button onClick={handleClick}>2기 모집 알림 신청하기</Button>
          <DownLogo src={require('../../../assets/img/DownScrollLogo.png')}/>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingFirst;
