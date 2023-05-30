import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom:70px;
  margin-top: 100px;
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
  margin-bottom: 18px;
  line-height : 140%;
`;

const Div = styled.div`
   margin: 0px auto;
    justify-content: center;
`;

const PartDiv = styled.div`
   display: flex;
   flex-direction: column;
    height: 750px;
    align-items: center;
    margin: 0px auto;
    width: 1330px;
    justify-content: center;
    padding-bottom: 100px;

`;

const Subtitle2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.subtitle2};
    font-weight: ${props => props.theme.fontWeights.subtitle3};
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 90px;
`;

const Button1 = styled.button`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 34px;
    width: 479px;
    height: 64px;
    background-color: #5262F5;
    justify-content: center;
    margin-top: 15px;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    cursor: pointer;
`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:18px;
  height:26px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
  margin-right: 600px;
`;

const Shape2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  width:18px;
  height:26px;
  line-height: 53px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
`;

const Line = styled.div`
  display:flex;
  justify-content: space-between;
  margin-left: 55px;
  margin-right: 37px;
`;

function HomeLast() {
  const handleClick = () => {
    window.open("https://tally.so/r/w4BxRd", "_blank");
  };
  return (
    <Div>
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header2>진짜 협업을 경험하고 싶다면</Header2>
        <Line>
          <Shape1>"</Shape1>
          <Shape2>"</Shape2>
        </Line>
        <Header4>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Header4>
        <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
        <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1>
      </ThemeProvider>
    </PartDiv>
    </Div>
  );
}

export default HomeLast;