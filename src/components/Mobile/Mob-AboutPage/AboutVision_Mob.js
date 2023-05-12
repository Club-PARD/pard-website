import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 58px;
  white-space: pre-line;
  text-align : center;
  `;

const PartDiv = styled.div`
  padding-left:174px;
  padding-right: 149px;
  padding-top: 133px;
  height: 806px;
  position: relative;
`;


function AboutVision_Mob() {

  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>소개 모바일 비전</Header7>
      </ThemeProvider>
    </PartDiv>
  );
}

export default AboutVision_Mob;