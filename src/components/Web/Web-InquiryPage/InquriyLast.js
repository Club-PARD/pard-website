import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
  text-align : center;
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 112px;
    padding-top: 100px;
    height: 62vw;
`;

function AboutLast() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>더 궁금하신 내용이 있거나<br></br>문의사항이 있으신가요?</Header7>
            </ThemeProvider>
        </PartDiv>
    );
}

export default AboutLast;