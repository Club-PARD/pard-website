import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import ArrowIdeal from '../../../assets/img/Arrow_Ideal.png'; 


const PartDiv = styled.div`
  height: 750px;
  position: relative;
  margin-top: 150px;
`;

const Div = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  margin-left: 170px;
`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 140%;
  margin-bottom: 100px;
  margin-right: 800px;
`;

const Header6 = styled.div` //내용
    display: inline-block;
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    font-family: 'NanumSquare Neo';
    color: ${props=>props.color} ;
    color: #FFFFFF;
    .Green{
    color: #64C59A;
    }
    .Orange{
      color: #FF5C00;
    }
`;

const Header5 = styled.div` //숫자
  font-size: ${props => props.theme.Web_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  white-space: pre-wrap;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  //flex-direction: column;
  margin-bottom: 140px;
  //margin-right: 184px;
  align-items: flex-start;
`;

const Line = styled.div`
  width: 10px;
  height: 100%;
  margin-right: 37px;
  background-color: #64C59A;
`;

const ArrowImage = styled.div`
  display:  flex;
  flex-direction: column;
  //margin-top: 60px;
`;


function RecruitingIdeal() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드는 이런 분을 기다려요</Header7>
          <Container>
            <Line/>    
            <div>
              <Header5>01</Header5>
              <Header6><strong className="Green">매주 토요일, 오후 1~5시</strong>에 진행되는<br/> 정규 프로그램에 참여할 수 있는 분</Header6>               
            </div>
            <div>
              <Header5>02</Header5>
              <Header6>기획자, 디자이너, 개발자와 함께<br/> <strong className="Green">IT 프로덕트 개발의 A to Z</strong>를<br/> 경험해보고 싶으신 분</Header6>
            </div>
            <div>
              <Header5>03</Header5>
              <Header6>자신의 성장 뿐만이 아니라<br/> <strong className="Green">팀의 성장, 동료의 성장</strong>에 기꺼이<br/> 헌신할 준비가 되어 있으신 분</Header6>
            </div>
          </Container>      
          <Container>
            <Line/>
            <div>
              <Header5>04</Header5>
              <Header6>우선순위를 정립하고<br/> 함께 추구하는 목표에 대한 <strong className="Green">열정</strong>을<br/> 불태울 수 있으신 분</Header6>
            </div>
            <div>
              <Header5>05</Header5>
              <Header6>빠르게 실패하되 작은 성공을<br/> 수집하며 파드 활동을 <strong className="Green">책임감</strong>있게<br/> 수행할 수 있으신 분</Header6>
            </div>
            <div>
              <Header5>AND...</Header5>
              <Header6><strong className="Orange">파드랑 같이 노실 분!</strong><br/> 파드의 좌충우돌 사생활이<br/> 궁금하다면?</Header6>
            </div>
          </Container>                     
                {/* <Header5>
              01 <strong className="Green">매주 토요일, 오후 1~5시</strong>에 진행되는 정규 프로그램에 참여할 수 있는 분
              02 기획자, 디자이너, 개발자와 함께 <strong className="Green">IT 프로덕트 개발의 A to Z</strong>를 경험해보고 싶으신 분
              03 자신의 성장 뿐만이 아니라 <strong className="Green">팀의 성장, 동료의 성장</strong>에 기꺼이 헌신할 준비가 되어 있으신 분
              04 우선순위를 정립하고 함께 추구하는 목표에 대한 <strong className="Green">열정</strong>을 불태울 수 있으신 분
              05 빠르게 실패하되 작은 성공을 수집하며 파드 활동을 <strong className="Green">책임감</strong>있게 수행할 수 있으신 분
              </Header5> */}            
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingIdeal;
