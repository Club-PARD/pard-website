import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 7.2222vw;
  white-space: pre-line;
  display : flex;
  margin-top: 217px;  
`;

const PartDiv = styled.div`
    padding-left:24.7222vw;
    padding-right: 22.7222vw;
    padding-top: 15.0694vw;
    height: 1000px;
    position: relative;
`;

const Div = styled.div`
`;


function HomeFirst() {
    return (
        <Div>
            <ThemeProvider theme={theme}>
                <PartDiv>
                    <Header2>asdf</Header2>
                </PartDiv>
            </ThemeProvider>
        </Div>
    );
}

export default HomeFirst;