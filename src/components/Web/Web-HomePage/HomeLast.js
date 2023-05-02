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
  margin-top: 217-70px;  
`;

const Header4 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  color: #FFFFFF;
  text-align: center;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  margin-bottom: 1.2500vw;
  line-height : 140%;
`;

const PartDiv = styled.div`
    padding-left:24.7222vw;
    padding-right: 22.7222vw;
    padding-top: 15.0694vw;
    height: 850px;
`;

const Subtitle2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.subtitle2};
    font-weight: ${props => props.theme.fontWeights.subtitle3};
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 6.5972vw;
`;

const Button1 = styled.button`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 2.3333vw;
    width: 33.2639vw;
    height: 4.4444vw;
    background-color: #5262F5;
    justify-content: center;
    margin-left: 8.6806vw;
    margin-top: 1.0417vw;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.header3};
  font-weight: ${props => props.theme.fontWeights.header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:1.2500vw;
  height:1.8056vw;
  display: flex;
  color: #5262F5;
  margin-bottom: 0.7639vw;
`;

const Shape2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.header3};
  font-weight: ${props => props.theme.fontWeights.header3};
  font-family: 'NanumSquare Neo';
  width:1.2500vw;
  height:1.8056vw;
  line-height: 53px;
  display: flex;
  color: #5262F5;
  margin-bottom: 0.7639vw;
`;

const Line = styled.div`
  display:flex;
  justify-content: space-between;
  margin-left: 3.8194vw;
  margin-right: 2.5694vw;
`;

function HomeLast() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header2>진짜 협업을 경험하고 싶다면</Header2>
                <Line>
                    <Shape1>"</Shape1>
                    <Shape2>"</Shape2>
                </Line>
                <Header4>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Header4>
                <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
                <Button1>지금 바로 2기 지원하기</Button1>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomeLast;