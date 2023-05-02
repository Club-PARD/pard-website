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

function InquiryManagement() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>거친 파도를 뚫고 나가는<br></br>파드 1기 운영진을 소개합니다</Header7>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryManagement;