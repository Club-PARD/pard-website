import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';


const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 62vw;
`;

function HomeProgram() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
             <Header2>Program</Header2>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomeProgram;