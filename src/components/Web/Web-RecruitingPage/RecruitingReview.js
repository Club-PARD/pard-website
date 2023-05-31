import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React, { useState, useEffect, useRef } from 'react';
import leftvector from '../../../assets/img/RPLeftButton.svg';
import noleftvector from '../../../assets/img/RLeftButton.svg';
import norightvector from '../../../assets/img/RRightButton.svg';
import rightvector from '../../../assets/img/RPRightButton.svg';
import review1Image from '../../../assets/img/Review조민.png';
import review2Image from '../../../assets/img/Review배예진.png';
import review3Image from '../../../assets/img/Review정승훈.png';
import review4Image from '../../../assets/img/Review김민혁.png';

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
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Header6 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

const Body2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Body2};
  font-weight: ${props => props.theme.fontWeights.Body2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
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
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  font-family: 'NanumSquare Neo';
  display: flex;
  align-items: center;
  width: 248px;
  height: 48px;
  background-color: #64C59A;
  justify-content: center;
  color: #000000;
  border-radius: 10px;
  border : none;
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
  margin-top:100px;
  margin-bottom:21px;
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


function RecruitingReview() {
  const cards = useRef([
    {
      id: 1,
      src: review1Image,
      title: '1기 디자인파트 조민님의 연합 세미나 후기',
      link: 'https://disquiet.io/@hguhimin/makerlog/9020',
      word: <>"그만큼 '파드'가 간절했다. 왜냐하면 나는 잘하고 싶었고 성장하고 싶었고 <br />
        더 대단한 사람들과 함께하고 싶었기 때문이다."</>
    },
    {
      id: 2,
      src: review2Image,
      title: '1기 기획파트 배예진님의 기획 세미나 후기',
      link: 'https://disquiet.io/@yepotter/makerlog/8795',
      word: <>“세미나 전의 나는 기획자, 프로젝트 매니저는 뭐 하는 사람인가요? 라는 질문에 <br />
        확실한 대답을 하지 못했다면, 지금은 명확하게 말할 수 있다.”</>
    },
    {
      id: 3,
      src: review3Image,
      title: '1기 웹파트 정승훈님의 html/css 스터디 후기',
      link: 'https://disquiet.io/@jshooni/makerlog/7690',
      word: <>“스터디를 열어준 PARD에 감사하고, 앞으로 더 열심히 공부하여<br />
        컴맹이 훌륭한 개발자가 되는 과정을 보여주겠다.“</>
    },
    {
      id: 4,
      src: review4Image,
      title: "1기 앱파트 김민혁님의 ‘함께자라기' 북 스터디 후기",
      link: 'https://disquiet.io/@alsgur/makerlog/7747',
      word: <>“사람과의 관계 문제 때문에 프로젝트가 힘들었던 전날의 예시들을 나누면서<br />
        논리성과 객관성에 대한 환상이 협업에 정말로 작용하는구나 라는 것을 느꼈다.”</>
    }
  ]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`
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
    window.open(link, '_blank');
  };
  const handleButtonClick = () => {
    // Redirect to the specified link
    window.open('https://disquiet.io/club/pard', '_blank');
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드 어땠나요?</Header7>
          <Header6>여전히 지원하기 망설여지나요?  먼저 파드를 경험한 1기 파디들의 진짜 이야기를 들어보세요!</Header6>
          <Container>
            <Slide>
              {current > 0 && (
                <BTNL onClick={() => { moveSlide(-1); }} style={{ marginRight: '32px' }}>
                  <LeftVector src={leftvector} />
                </BTNL>
              )}
              {current === 0 && (
                <BTNL>
                  <LeftVector src={noleftvector} />
                </BTNL>
              )}
              <Window>
              {current === 0 && (
                <FlexBox style={style}>
                  {cards.current.map((card) => (
                    <CardDiv key={card.id} onClick={() => handleCardClick(card.link)} style={{ marginLeft: '32px' }}>
                      <Image style={{ backgroundImage: `url(${card.src})` }}></Image>
                      <Header6>{card.title}</Header6>
                      <Body2>{card.word}</Body2>
                    </CardDiv>
                  ))}
                </FlexBox>
              )}
              {current >= 1 && (
                <FlexBox style={style}>
                  {cards.current.map((card) => (
                    <CardDiv key={card.id} onClick={() => handleCardClick(card.link)} style={{ marginRight: '31px' }}>
                      <Image style={{ backgroundImage: `url(${card.src})` }}></Image>
                      <Header6>{card.title}</Header6>
                      <Body2>{card.word}</Body2>
                    </CardDiv>
                  ))}
                </FlexBox>
              )}
              </Window>
              {current < 1 && (
                <BTNR onClick={() => { moveSlide(1); }} style={{ marginLeft: '32px' }}>
                  <RightVector src={rightvector} />
                </BTNR>
              )}
              {current >= 1 && (
                <BTNR>
                  <RightVector src={norightvector} />
                </BTNR>
              )}
            </Slide>
          </Container>
          <DivButton>
            <Button onClick={handleButtonClick} style={{ cursor: 'pointer' }}>조금 더 들어볼래요!</Button>
          </DivButton>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingReview;
