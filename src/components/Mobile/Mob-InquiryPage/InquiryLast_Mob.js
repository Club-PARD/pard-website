import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";

function InquiryLast() {
  const handleClick = () => {
    window.location.href = "https://pard.channel.io/lounge";
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>
            더 궁금하신<br></br>내용이 있거나<br></br>문의사항이<br></br>
            있으신가요?
          </Header7>
          <Subtitle3>
            동아리 관련, 프로젝트, 후원 등<br></br>언제든지 문의해 주세요.
          </Subtitle3>
          <Frame15 onClick={handleClick}>
            <Header5>문의하기</Header5>
          </Frame15>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default InquiryLast;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  margin-bottom: 60px;
  white-space: pre-line;
  text-align: center;
`;

const PartDiv = styled.div`
  // width 정해주고 가운데 정렬 하기
  height: 900px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  //정해진 width를 또 가운데 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Subtitle3 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 28px;
  white-space: pre-line;
  text-align: center;
`;

const Frame15 = styled.button`
  align-items: center;
  gap: 5px;
  margin-top: 50px;
  width: 220px;
  height: 52px;
  justify-content: center;
  border: none;
  background: #5262f5;
  border-radius: 10px;
  cursor: pointer;
`;

const Header5 = styled.div`
  /* font-size: ${(props) => props.theme.Mob_fontSizes.ButtonText1}; */
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  white-space: nowrap;
`;
