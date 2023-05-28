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

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  margin-bottom: 68px;
  font-size: 30px;
  margin-left: 36px;
`;
const Subtitle2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${props => props.theme.fontWeights.Subtitle2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;
const CardOneDiv = styled.div`
  margin-left:32px;
`;
const Caption1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Body2};
  font-weight: ${props => props.theme.fontWeights.Body2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
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
  margin-top:40px;
  margin-bottom:13px;
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
    height: 995px;
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
            title: '1기 디자인파트 조민님의 연합 세미나 후기',
            link: 'https://disquiet.io/@hguhimin/makerlog/9020',
            word: <>"그만큼 '파드'가 간절했다. 왜냐하면 나는 잘하고 <br />
            싶었고 성장하고 싶었고 더 대단한 사람들과 함게하고<br /> 
            싶었기 때문이다."</>
        },
        {
            id: 2,
            src: review2Image,
            title: '1기 기획파트 배예진님의 기획 세미나 후기',
            link: 'https://disquiet.io/@yepotter/makerlog/8795',
            word: <>“세미나 전의 나는 기획자, 프로젝트 매니저는 뭐하는<br />
            사람인가요? 라는 질문에 확실한 대답을 하지 <br />
            못했다면, 지금은 명확하게 말할 수 있다.”</>
        },
        {
            id: 3,
            src: review3Image,
            title: '1기 웹파트 정승훈님의 html/css 스터디 후기',
            link: 'https://disquiet.io/@jshooni/makerlog/7690',
            word: <>“스터디를 열어준 PARD에 감사하고, 앞으로 더<br />
            열심히 공부하여 컴맹이 훌륭한 개발자가 되는 과정을<br />
            보여주겠다.“</>
        },
        {
            id: 4,
            src: review4Image,
            title: "1기 앱파트 김민혁님의 ‘함께자라기' 북 스터디 후기",
            link: 'https://disquiet.io/@alsgur/makerlog/7747',
            word: <>“사람과의 관계 문제 때문에 프로젝트가 힘들었던 전날<br />
            의 예시들을 나누면서 논리성과 객관성에 대한 환상이<br />
            협업에 정말로 작용하는구나 라는 것을 느꼈다.”</>
        }
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
        window.open(link, '_blank');
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
                                <CardDiv key={card.id} onClick={() => handleCardClick(card.link)}>
                                <CardOneDiv>
                                    <Image style={{ backgroundImage: `url(${card.src})` }}></Image>
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
                            <BTNL onClick={() => { moveSlide(-1); }}>
                            <LeftVector src={leftvector} />
                            </BTNL>
                        )}
                        {current === 0 && (
                            <BTNL>
                            <LeftVector src={noleftvector} />
                            </BTNL>
                        )}
                        {current < 1 && (
                            <BTNR onClick={() => { moveSlide(1); }}>
                            <RightVector src={rightvector} />
                            </BTNR>
                        )}
                        {current >= 1 && (
                            <BTNR>
                            <RightVector src={norightvector} />
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
