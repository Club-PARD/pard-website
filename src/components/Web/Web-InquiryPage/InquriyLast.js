import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 58px;
  white-space: pre-line;
  text-align : center;
  `;

const PartDiv = styled.div`
   display: flex;
   flex-direction: column;
    height: 850px;
    align-items: center;
    justify-content: center;
`;

const Subtitle3 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Subtitle3};
  font-weight: ${props => props.theme.fontWeights.Subtitle3};
  color : #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 72px;
  white-space: pre-line;
  text-align: center;
`;

const Frame15 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13;
  width: 323px;
  height: 85px;
  /* left: calc(50% - 23.0556vw/2); */
  margin-top: 50px;
  border:none;
  background: #5262F5;
  border-radius: 13px;
`;

const Header5 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color : #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 5px;
  white-space: pre-line;
  text-align: center;
  white-space: nowrap;
`

function InquiryLast() {
  const handleClick = () => {
    window.location.href = "https://pard.channel.io/lounge";
  };

  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>더 궁금하신 내용이 있거나<br></br>문의사항이 있으신가요?</Header7>
        <Subtitle3>동아리 관련, 프로젝트, 후원 등 언제든지 문의해 주세요.</Subtitle3>
        <Frame15 onClick={handleClick}>
          <Header5>문의하기</Header5>
        </Frame15>
      </ThemeProvider>
    </PartDiv>
  );
}

export default InquiryLast;