import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';


const PartDiv = styled.div`
  height: 950px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  margin-right: 430px;
`;

const Header61 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  margin-right: 440px;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  `;

const Box = styled.div`
  width:240px;
  height:100px;
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  border: 2px solid #64C59A;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 37p;
  `
const Header62 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  margin-left: 860px;
  text-align: right;
  `;

const Header5 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  margin-right: 810px;
  text-align: left;
`;

const TextWrap = styled.div`
  margin-left: 125px;
  text-align: left;
`
const Header6 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  line-height: 140%;
  white-space: nowrap;
  

  span.highlight {
    color: #64C59A;
  }
`;

const IconWrap = styled.div`
  position: relative;
  margin-right: 175px;
`;

const Docs = styled.svg`
  width: 30px;
  height: 38px;
  fill: none;
  position: absolute;
`

const Check = styled.svg`
  width: 30px;
  height: 38px;
  fill: none;
  position: absolute;
`


function RecruitingSecond() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>신입 멤버 모집은 이렇게 진행되어요</Header7>
          <Header61>2023년도 9월부터 24년도 1월까지 활동할 2기 멤버들을 모집합니다<br></br>* 일부 일정 변동 가능</Header61>
          <Container>
            <Box style={{ opacity: 0.2 }}>
              <IconWrap>
                <Docs viewBox="0 0 30 38">
                  <path d="M16 37.375H2.875C1.42731 37.375 0.25 36.1977 0.25 34.75V3.25C0.25 1.80231 1.42731 0.625 2.875 0.625H26.5C27.9477 0.625 29.125 1.80231 29.125 3.25V22.9375H26.5V3.25H2.875V34.75H16V37.375Z" fill="white" />
                </Docs>
                <Check viewBox="0 0 30 38">
                  <path d="M17.875 26.6738L14.4756 23.2744L12.625 25.125L17.875 30.375L28.375 19.875L26.5244 18.0244L17.875 26.6738ZM0.8125 13.3125H10V15.9375H0.8125V13.3125ZM0.8125 6.75H16.5625V9.375H0.8125V6.75ZM0.8125 0.1875H16.5625V2.8125H0.8125V0.1875Z" fill="white" />
                </Check>
              </IconWrap>
              서류접수
            </Box>
            <Box style={{ opacity: 0.4 }}>서류 합격 발표</Box>
            <Box style={{ opacity: 0.7 }}>면접</Box>
            <Box style={{ opacity: 1.0 }}>최종합격 발표</Box>
          </Container>
          <Header62>정규 활동일정 자세히 보기</Header62>
          <Header5>지원 방법 및 유의사항</Header5>
          <TextWrap>
            <Container>
              <Header6><span className="highlight">01</span></Header6>
              <Header6>페이지 하단 <span className="highlight">‘지원하기’ 버튼</span> 또는 파트별 상세 <span className="highlight">노션 페이지 내 ‘지원하기’</span> 를 통해 지원해주세요!</Header6>
            </Container>
            <Container>
              <Header6><span className="highlight">02</span></Header6>
              <Header6>기획,디자인 파트의 사전과제는 지원서 접수 시작일인 <span className="highlight">n월n일</span>에 기획,디자인 파트의 <span className="highlight">노션 페이지</span>에 공개됩니다!</Header6>
            </Container>
            <Container>
              <Header6><span className="highlight">03</span></Header6>
              <Header6>지원서 합격/불합격 발표는 지원서 접수 시 <span className="highlight">가입해주신 번호로 문자</span> 안내됩니다.</Header6>
            </Container>
            <Container>
              <Header6><span className="highlight">04</span></Header6>
              <Header6>면접은 <span className="highlight">지원자 2명, 운영진 4명으로</span> 다대다로  <span className="highlight">50분</span>동안 진행되며 시간 선택은 지원서 합격자에 한해서 개별적으로 문자 안내드립니다.</Header6>
            </Container>
          </TextWrap>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingSecond;