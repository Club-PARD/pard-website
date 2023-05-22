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

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 140%;
margin-top: 550px;
`;



function RecruitingAbout() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>
          RecruitingAbout
          </Header7>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingAbout;
