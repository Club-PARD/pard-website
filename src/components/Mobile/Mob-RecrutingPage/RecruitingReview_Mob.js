import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect, useRef } from "react";
import leftvector from "../../../assets/img/RPLeftButton.svg";
import noleftvector from "../../../assets/img/RLeftButton.svg";
import norightvector from "../../../assets/img/RRightButton.svg";
import rightvector from "../../../assets/img/RPRightButton.svg";
import review1Image from "../../../assets/img/review1Image.png";
import review2Image from "../../../assets/img/review2Image.png";
import review3Image from "../../../assets/img/review3Image.png";
import review4Image from "../../../assets/img/review4Image.png";

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 68px;
  font-size: 30px;
  margin-left: 36px;
`;
const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;
const CardOneDiv = styled.div`
  margin-left: 32px;
`;
const Caption1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 40px;
  line-height: 180%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
`;
const Window = styled.div`
  width: 350px;
  height: 650px;
  overflow: hidden;
`;
const Image = styled.div`
  width: 273px;
  height: 155px;
  margin-top: 40px;
  margin-bottom: 13px;
  background-size: contain;
  background-repeat: no-repeat;
`;
const LeftVector = styled.img`
  height: 30px;
  width: 20px;
`;
const RightVector = styled.img`
  height: 30px;
  width: 20px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PartDiv = styled.div`
  height: 850px;
  width: 375px;
  justify-content: center;
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardDiv = styled.div`
  cursor: pointer;
`;
//아래 버튼 부분
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const BTNL = styled.div`
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
  margin-right: 16px;
`;
const BTNR = styled.div`
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
  margin-left: 16px;
`;

function RecruitingReviewMob() {
  const cards = useRef([
    {
      id: 1,
      src: review1Image,
      title: "2기 서버파트 유채우님의 회고",
      link: "https://disquiet.io/@turbstructor/makerlog/%EC%B6%94%EC%9A%B4-%EA%B2%A8%EC%9A%B8%EC%9D%B4%EB%9D%BC%EA%B3%A0-%EB%B6%88%EC%9D%B4-%EC%95%88-%EB%9C%A8%EA%B2%81%EC%A7%80-%EC%95%8A%EC%9D%84-%ED%85%90%EB%8D%B0",
      word: (
        <>
          “제가 가진 문제점들을 실감하고 그걸 해결하기 위한
          <br />
          생각들을 해볼 수 있었음에 감사합니다. 약 반년, 그런
          <br />
          경험들을 만들어준 모든 사람들에게 감사드립니다.”
        </>
      ),
    },
    {
      id: 2,
      src: review2Image,
      title: "2기 기획파트 전예람님의 팀빌딩 방법론",
      link: "https://disquiet.io/@magniv/makerlog/%EB%82%A8%EC%9E%90-6%EB%AA%85%EC%9D%B4-%EC%82%AC%EC%9A%B0%EB%82%98-%EA%B0%80%EC%84%9C-%ED%8C%80-%EB%B9%8C%EB%94%A9%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0",
      word: (
        <>
          “말보다 숫자로 표현하는 것이 더 쉽기 때문에 소통의
          <br />
          물꼬를 트기에 굉장히 유용하기 때문이에요!”
        </>
      ),
    },
    {
      id: 3,
      src: review3Image,
      title: "2기 iOS파트 김형진의 숏커톤 회고",
      link: "https://disquiet.io/@hyungjin015/makerlog/%EC%9D%B8%EC%83%9D-%EC%B2%AB-%EB%9E%A8%EC%88%98%EB%A9%B4-%EC%8D%B0-%ED%92%80%EC%96%B4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4-%EC%88%8F%EC%BB%A4%ED%86%A4-%ED%9A%8C%EA%B3%A0",
      word: (
        <>
          “우승조건은 함께 만들어가는 서비스에 있다는 것을
          <br />
          느꼈고, 숲을 보지 못한 나의 모습에 반성하게 됐다.
          <br />
          애초에 파드에 협업하러 오지 않았었나..? 협업의
          <br />
          대한 회고를 한번 더 하게 되는 소중한 경험이었다.”
        </>
      ),
    },
    {
      id: 4,
      src: review4Image,
      title: "2기 웹파트 김용현님의 번아웃 극복기",
      link: "https://disquiet.io/@cocomongif/makerlog/%EC%9D%B4%EA%B1%B8-%EC%96%B4%EC%A9%8C%EC%A7%80",
      word: (
        <>
          “사소한 부분이라도 내 생각이 들어가고, 그렇지
          <br />
          못한다 하더라도 기획한사람과 말을 섞으니 그제서야
          <br />
          "내 일"이 이 된 기분이었습니다. 또 이 즈음부터는
          <br />
          집중하면 일이 조금 손에 잡히기도 했습니다.”
        </>
      ),
    },
  ]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginTop: `-${Math.floor(current / 2) * 100}%`, // Adjust marginTop based on current index
  });
  const cardSize = useRef(cards.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i * 2; // Move two cards at a time

    if (nextIndex < 0) nextIndex = cardSize.current - 1;
    else if (nextIndex >= cardSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };
  useEffect(() => {
    setStyle({ marginTop: `-${Math.floor(current) * 96.65}%` }); // Adjust marginTop based on current index
  }, [current]);

  const handleCardClick = (link) => {
    // Redirect to the provided link
    window.open(link, "_blank");
  };
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드 어땠나요?</Header7>
          <Container>
            <Slide>
              <Window>
                <FlexBox style={style}>
                  {cards.current.map((card) => (
                    <CardDiv
                      key={card.id}
                      onClick={() => handleCardClick(card.link)}
                    >
                      <CardOneDiv>
                        <Image
                          style={{ backgroundImage: `url(${card.src})` }}
                        ></Image>
                        <Subtitle2>{card.title}</Subtitle2>
                        <Caption1>{card.word}</Caption1>
                      </CardOneDiv>
                    </CardDiv>
                  ))}
                </FlexBox>
              </Window>
            </Slide>
            <Wrapper>
              {current > 0 && (
                <BTNL
                  onClick={() => {
                    moveSlide(-1);
                  }}
                >
                  <LeftVector src={leftvector} alt="leftvector" />
                </BTNL>
              )}
              {current === 0 && (
                <BTNL>
                  <LeftVector src={noleftvector} alt="leftvector" />
                </BTNL>
              )}
              {current < 1 && (
                <BTNR
                  onClick={() => {
                    moveSlide(1);
                  }}
                >
                  <RightVector src={rightvector} alt="rightvector" />
                </BTNR>
              )}
              {current >= 1 && (
                <BTNR>
                  <RightVector src={norightvector} alt="rightvector" />
                </BTNR>
              )}
            </Wrapper>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingReviewMob;
