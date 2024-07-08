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

function RecruitingReview() {
  const cards = useRef([
    {
      id: 1,
      src: review1Image,
      title: "2기 서버파트 유채우님의 회고",
      link: "https://disquiet.io/@turbstructor/makerlog/%EC%B6%94%EC%9A%B4-%EA%B2%A8%EC%9A%B8%EC%9D%B4%EB%9D%BC%EA%B3%A0-%EB%B6%88%EC%9D%B4-%EC%95%88-%EB%9C%A8%EA%B2%81%EC%A7%80-%EC%95%8A%EC%9D%84-%ED%85%90%EB%8D%B0",
      word: (
        <>
          “제가 가진 문제점들을 실감하고 그걸 해결하기 위한 생각들을 해볼 수
          <br />
          있었음에 감사합니다. 약 반년, 그런 경험들을 만들어준 모든 사람들에게
          <br />
          감사드립니다.”
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
          “말보다 숫자로 표현하는 것이 더 쉽기 때문에 소통의 물꼬를 트기에
          <br />
          굉장히 유용하기 때문이에요!”
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
          “우승조건은 함께 만들어가는 서비스에 있다는 것을 느꼈고, 숲을 보지
          못한
          <br />
          나의 모습에 반성하게 됐다. 애초에 파드에 협업하러 오지 않았었나..?
          <br />
          협업의 대한 회고를 한번 더 하게 되는 소중한 경험이었다.”
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
          “사소한 부분이라도 내 생각이 들어가고, 그렇지 못한다 하더라도 기획한
          <br />
          사람과 말을 섞으니 그제서야 "내 일"이 이 된 기분이었습니다.
          <br />또 이 즈음부터는 집중하면 일이 조금 손에 잡히기도 했습니다.”
        </>
      ),
    },
  ]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const cardSize = useRef(cards.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = cardSize.current - 1;
    else if (nextIndex >= cardSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };
  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  const handleCardClick = (link) => {
    // Redirect to the provided link
    window.open(link, "_blank");
  };
  const handleButtonClick = () => {
    // Redirect to the specified link
    window.open("https://disquiet.io/club/pard", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드 어땠나요?</Header7>
          <Header6>
            여전히 지원하기 망설여지나요? 먼저 파드를 경험한 2기 파디들의 진짜
            이야기를 들어보세요!
          </Header6>
          <Container>
            <Slide>
              {current > 0 && (
                <BTNL
                  onClick={() => {
                    moveSlide(-1);
                  }}
                  style={{ marginRight: "32px" }}
                >
                  <LeftVector src={leftvector} alt="leftVector" />
                </BTNL>
              )}
              {current === 0 && (
                <BTNL>
                  <LeftVector src={noleftvector} alt="leftVector" />
                </BTNL>
              )}
              <Window>
                {current === 0 && (
                  <FlexBox style={style}>
                    {cards.current.map((card) => (
                      <CardDiv
                        key={card.id}
                        onClick={() => handleCardClick(card.link)}
                        style={{ marginLeft: "32px" }}
                      >
                        <Image
                          style={{ backgroundImage: `url(${card.src})` }}
                        ></Image>
                        <Header6>{card.title}</Header6>
                        <Body2>{card.word}</Body2>
                      </CardDiv>
                    ))}
                  </FlexBox>
                )}
                {current >= 1 && (
                  <FlexBox style={style}>
                    {cards.current.map((card) => (
                      <CardDiv
                        key={card.id}
                        onClick={() => handleCardClick(card.link)}
                        style={{ marginRight: "31px" }}
                      >
                        <Image
                          style={{ backgroundImage: `url(${card.src})` }}
                        ></Image>
                        <Header6>{card.title}</Header6>
                        <Body2>{card.word}</Body2>
                      </CardDiv>
                    ))}
                  </FlexBox>
                )}
              </Window>
              {current < 1 && (
                <BTNR
                  onClick={() => {
                    moveSlide(1);
                  }}
                  style={{ marginLeft: "32px" }}
                >
                  <RightVector src={rightvector} alt="rightVector" />
                </BTNR>
              )}
              {current >= 1 && (
                <BTNR>
                  <RightVector src={norightvector} alt="rightVector" />
                </BTNR>
              )}
            </Slide>
          </Container>
          <DivButton>
            <Button onClick={handleButtonClick} style={{ cursor: "pointer" }}>
              조금 더 들어볼래요!
            </Button>
          </DivButton>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingReview;

const PartDiv = styled.div`
  height: 800px;
  position: relative;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  line-height: 140%;
`;

const LeftVector = styled.img`
  height: 45px;
  width: 30px;
`;

const RightVector = styled.img`
  height: 45px;
  width: 30px;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Button = styled.button`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  display: flex;
  align-items: center;
  width: 248px;
  height: 48px;
  background-color: #64c59a;
  justify-content: center;
  color: #000000;
  border-radius: 10px;
  border: none;
  margin-top: 70px;
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
  width: 990px;
  height: 500px;
  overflow: hidden;
`;
const CardDiv = styled.div`
  cursor: pointer;
`;
const Image = styled.div`
  width: 464px;
  height: 260px;
  margin-top: 100px;
  margin-bottom: 21px;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
`;

const BTNL = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
`;
const BTNR = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: gray;
`;

const FlexBox = styled.div`
  display: flex;
`;
