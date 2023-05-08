import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';


const PartDiv = styled.div`
    padding-top: 15.0694vw;
    height: 59vw;
    background-color: #FFFFFF;
`;

const Div = styled.div`
display: flex;
justify-content: center;
background-color: #FFFFFF;
`;

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #000000;
  font-family: 'NanumSquare Neo';
  margin-bottom: 7.2222vw;
  white-space: pre-line;
  display : flex;
  margin-top: 217-70px;  
`;

const Header4 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  color: #000000;
  text-align: center;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  margin-bottom: 1.2500vw;
  line-height : 140%;
`;

const Subtitle2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.subtitle2};
    font-weight: ${props => props.theme.fontWeights.subtitle3};
    text-align: center;
    color: #000000;
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
    background-color: #FF5C00;
    justify-content: center;
    margin-left: 8.6806vw;
    margin-top: 1.0417vw;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:1.2500vw;
  height:1.8056vw;
  display: flex;
  color: #FF5C00;
  margin-bottom: 0.7639vw;
`;


const Line = styled.div`
  display:flex;
  justify-content: space-between;
  margin-left: 3.8194vw;
  margin-right: 2.5694vw;
`;

function AboutLast() {
    return (
        <Div>
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header2>진짜 협업을 경험하고 싶다면</Header2>
                <Line>
                    <Shape1>"</Shape1>
                    <Shape1>"</Shape1>
                </Line>
                <Header4>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Header4>
                <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
                <Button1>지금 바로 2기 지원하기</Button1>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default AboutLast;