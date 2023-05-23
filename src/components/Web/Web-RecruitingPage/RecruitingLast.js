import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const PartDiv = styled.div`
  height: 624px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Div = styled.div`
  margin: 0px auto;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 140%;
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
    margin-top: 70px;
    color: #000000;
    border-radius: 10px;
    border : none;
`;


function RecruitingLast() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>협업에 미친 파드의 여정에 동참하고 싶다면</Header7>
          <Button>2기 모집 알림 신청하기</Button>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingLast;
