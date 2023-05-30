import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  text-align : center;
  margin-top : 57px;
  margin-bottom: 58px;
  white-space: pre-line;
  line-height : 140%;
`;

const Line = styled.div`
display : flex;
justify-content: center;
`;

const Shape = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  width:13px;
  height:15px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
  margin-right: 290px;
`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  width:13px;
  height:15px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
`;

const Div = styled.div` //정해진 width를 또 가운데 정렬 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

const PartDiv = styled.div`
    height: 900px;
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header6 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  line-height : 28px;
  text-align : center;
  color : #FFFFFF;
  width : 300px;
  height: 84px;
  margin-bottom : 18px;
`;

const Subtitle2 = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle2};
font-weight: ${props => props.theme.fontWeights.Subtitle2};
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 96px;
    margin-top: 38px;
`;

const Button1 = styled.button`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
font-weight: ${props => props.theme.fontWeights.Subtitle2};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 9px;
    width: 220px;
    height: 48px;
    background-color: #5262F5;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    cursor: pointer;
`;

function HomeLastMob() {
  const handleClick = () => {
    window.open("https://tally.so/r/w4BxRd", "_blank");
  };
    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>진짜 협업을<br></br>경험하고 싶다면</Header7>
            <Line>
                <Shape>"</Shape>
                <Shape1>"</Shape1>
            </Line>
            <Header6>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도<br></br>선수들의 역량이에요</Header6>
            <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
            <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default HomeLastMob;