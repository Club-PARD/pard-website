import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header8 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
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


function RecruitingFirstMob() {
    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header8>RecruitingFirstMob</Header8>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default RecruitingFirstMob;
