import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  text-align : center;
  margin-top : 15.0694vw;
  margin-bottom: 15.4667vw;
  white-space: pre-line;
  line-height : 140%;
`;

const Line = styled.div`
display : flex;
justify-content: space-between;
`;

const Shape = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  width:3.4667vw;
  height:4.0000vw;
  display: flex;
  color: #5262F5;
  margin-bottom: 2.9333vw;
`;

const PartDiv = styled.div`
    padding-left:7.7333vw;
    padding-right: 8.0000vw;
    padding-top: 45px;
    height: 216.5333vw;
`;

const Header6 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  line-height : 7.4667vw;
  margin-left : 5vw;
  margin-right : 6.6667vw;
  text-align : center;
  color : #FFFFFF;
  width : 70.9333vw;
  height: 22.4000vw;
  margin-bottom : 4.8000vw;
`;

const Subtitle2 = styled.div`
font-size: 2.6667vw;
font-weight : 106.6667 vw;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 25.6000vw;
`;

const Button1 = styled.button`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
font-weight: ${props => props.theme.fontWeights.Subtitle2};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 2.3333vw;
    width: 58.6667vw;
    height: 12.8000vw;
    background-color: #5262F5;
    justify-content: center;
    margin-left: 12.8000vw;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
`;

function HomeLastMob() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>진짜 협업을<br></br>경험하고 싶다면</Header7>
            <Line>
                <Shape>"</Shape>
                <Shape>"</Shape>
            </Line>
            <Header6>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도<br></br>선수들의 역량이에요</Header6>
            <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
            <Button1>지금 바로 2기 지원하기</Button1>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomeLastMob;