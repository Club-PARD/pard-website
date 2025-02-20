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

function RecruitingReviewMob() {
  const cards = useRef([
    {
      id: 1,
      src: review1Image,
      title: "PARD 3,4기 디자인 파트 김규희님의 회고",
      link: "https://disquiet.io/@kim9001/makerlog/%EC%95%88%EB%85%95%ED%95%98%EC%8B%9C%EC%86%8C-%ED%98%91%EC%97%85%EA%B2%BD%ED%97%98-1%EB%8F%84-%EC%97%86%EB%8D%98-%EB%82%B4%EA%B0%80-2025%EB%85%84%EC%97%90%EB%8A%94-%ED%98%91%EC%97%85%EC%99%95",
      word: (
        <>
          “3기는 끝났지만 기존 롱커톤 팀원들과 연락해가며 해당 
          <br />
          프로덕트인 메모러블을 다양한 공모전에 내서 수상도  
          <br />
          해보고, 결국 배포까지 할 수 있었어요.
          <br/>
          진짜 진지하게.. 파드 안들어왔으면... 못했을듯!!”
        </>
      ),
    },
    {
      id: 2,
      src: review2Image,
      title: "4기 서버 파트 김민규님의 롱커톤 회고",
      link: "https://disquiet.io/@min999/makerlog/%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94-1734652120055",
      word: (
        <>
          “이번 주차를 통해 저는 단순히 개발만 잘하는 것이 아니라,
          <br />
          팀원들과의 소통과 얼라인(Align)이 얼마나 중요한지
          <br />
          정말 몸소 깨닫게 되었습니다."
        </>
      ),
    },
    {
      id: 3,
      src: review3Image,
      title: "4기 기획 파트 최수원님의 회고",
      link: "https://disquiet.io/@tndnjsc/makerlog/%EB%A1%B1%EC%BB%A4%ED%86%A4-2%EC%A3%BC%EC%B0%A8%EB%A5%BC-%EB%A7%9E%EC%9D%B4%ED%95%98%EB%A9%B0-%E3%84%B1-%EA%B0%80%EC%A1%B1%EC%9D%B4-%EB%90%98%EC%96%B4%EC%A3%BC%EB%9D%BC",
      word: (
        <>
          “저는 기획자로서 이번 롱커톤을 통해 정말 많은 것을
          <br />배우고 있습니다. 특히 각자의 역할이 다르더라도 목표를
          <br />위해 함께 나아가는 팀워크의 중요성을 깊이 느꼈고, 빠른
          <br />피드백과 유연한 대응이 얼마나 중요한지도 깨달았습니다.”
        </>
      ),
    },
    {
      id: 4,
      src: review4Image,
      title: "4기 서버 파트 김하진님의 회고",
      link: "https://disquiet.io/@hajink_14/makerlog/%ED%95%A8%EA%BB%98-%EC%9D%BC%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%90%98%EA%B3%A0-%EC%8B%B6%EC%96%B4%EC%A1%8C%EB%8B%A4",
      word: (
        <>
          “저는 ‘배운 언어를 가장 효율적인 코드를 짜는 개발자’도
          <br />
          좋겠지만 이보다 ‘해결하고자 하는 문제를 같이 고민하고 그 
          <br />
          해결을 구현해주는 개발자’가 되고 싶은 것 같습니다.
          <br />
          같이 일하고 싶은 좋은 개발자가 되기 위해서는
          <br />
          함께 문제를 알아야할 지도 모르겠다는 생각이 들었어요.”
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
            <Button
                        href="https://disquiet.io/club/pard"
                        target="_blank"
                      >
                        조금 더 들어볼래요!
            </Button>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingReviewMob;

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
  margin-top: 7px;
  /* margin-bottom: 40px; */
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
  height: 670px;
  overflow: hidden;
`;
const Image = styled.div`
  width: 283px;
height: 160px;
  margin-top: 45px;
  margin-bottom: 13px;
  border-radius: 30px;
border: 1px solid var(--Primary-Green, #64C59A);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 52.5%, #FFF 99.5%);
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
  margin-left: 10px;
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


const Button = styled.a`
  cursor: pointer;
  color: white;
  text-decoration-line: none;
  width: 194px;
  height: 52px;
  background-color: #64c59a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: "NanumSquare Neo";
  border-radius: 10px;
  margin-top: 50px;
  line-height: 140%; /* 22.4px */
`;