import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 3.000vw;
  white-space: pre-line;
  text-align : center;
  `;

    const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 7.7778vw;
    padding-bottom: 6.9444vw;
    height: 100%;
    `;

function AboutProgram() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>AboutProgram</Header7>
            </ThemeProvider>
        </PartDiv>
    );
}

export default AboutProgram;