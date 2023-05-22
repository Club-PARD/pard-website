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


function RecruitingSecond() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>신입 멤버 모집은 이렇게 진행되어요</Header7>
          <Header61>2023년도 9월부터 24년도 1월까지 활동할 2기 멤버들을 모집합니다<br></br>* 일부 일정 변동 가능</Header61>
          <Container>
            <Box>서류접수</Box>
            <Box>서류 합격 발표</Box>
            <Box>면접</Box>
            <Box>최종합격 발표</Box>
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