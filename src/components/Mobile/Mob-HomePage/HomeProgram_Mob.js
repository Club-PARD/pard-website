import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
    padding-left:24px;
    padding-top: 45px;
    height: 2445px;
`;


function HomeProgramMob() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>Program</Header7>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomeProgramMob;