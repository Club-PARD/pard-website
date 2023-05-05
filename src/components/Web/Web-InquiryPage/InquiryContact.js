import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import Ask from './InquiryContact_Web_Asked';

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
    padding-right: 112px;
    padding-top: 100px;
    height: 62vw;
`;
//<Header2>PARD에 대해<br></br>무엇이든 물어보세요!</Header2>
function InquiryContact() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
             <Ask/>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryContact;