import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header8 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  margin-top: 200px;
`;
const ButtonText1 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
  font-weight: ${props => props.theme.fontWeights.ButtonText1};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  margin-top: 40px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PartDiv = styled.div`
    height: 750px;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const Button = styled.button`
font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 9px;
    width: 220px;
    height: 52px;
    background-color: #64C59A;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    color: black;
`;

const ButtonDiv = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    margin-top: 110px;
`;


function RecruitingFirstMob() {

    const handleClick = () => {
        window.open("https://tally.so/r/w4BxRd", "_blank");
      };
    
    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header8>함께 성장하며 최고의<br/>팀을 만들어가요</Header8>
            <ButtonText1>단순히 같이 일하는 것이
                <br/>협업이라고 생각하시나요?
                <br/>PARD에서 서로의 전문성을 이해하고,
                <br/> 솔직하게 대립하고, 빠르게 실행해요.
                </ButtonText1>
            <ButtonDiv>
            <Button onClick={handleClick}>2기 모집 알림 신청하기</Button>
            </ButtonDiv>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default RecruitingFirstMob;
