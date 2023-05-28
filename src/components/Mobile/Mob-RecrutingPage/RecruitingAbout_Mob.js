import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PartDiv = styled.div`
    padding-top: 131px;
    height: 750px;
    width: 375px;
    padding-left: 24px;
    
`;


function RecruitingAboutMob() {
    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>RecruitingAboutMob</Header7>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default RecruitingAboutMob;
