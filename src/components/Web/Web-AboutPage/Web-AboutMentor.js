import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 9.514vw;
  white-space: pre-line;
  text-align : center;
  `;

const Header6 = styled.div`
font-size: ${props => props.theme.Web_fontSizes.Header6};
font-weight: ${props => props.theme.fontWeights.Header6};
color: #FFFFFF;
font-family: 'NanumSquare Neo';
line-height: 1.45;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const Title = styled(Header6)`
    margin-right: 5.555vw;
`
const Name = styled(Header6)`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.250vw 1.389vw;
`
const Body1 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body1};
    font-weight: ${props => props.theme.fontWeights.Body1};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    line-height: 1.45;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5.555vw;
    margin-top: 0.347vw;
`

const PartDiv = styled.div`
    padding-top: 11.111vw;
    padding-bottom: 12.986vw;
    height: 100%;
    background: rgba(255, 255, 255);
`;

const ContentWrapper = styled.div`
    position: relative;
    min-width: 27.778vw;
    width: fit-content;
    border-radius: 20px;
    height: 9.028vw;
    padding: 1.250vw 1.389vw;
    background: ${props => props.color == null ? "rgba(255, 255, 255, 0)" : props.color};
`

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`

const CardRow = styled.div`
    margin-left: ${props => props.hasMargin == null ? 0 : "10.764vw"};
    gap: 3.472vw;
    display: flex;
`;

const VerticalGap = styled.div`
    height: ${props=>props.height != null ? props.height : "0px"};
`

const CardsList = ({ cardsData }) => {
    const firstRow = cardsData.filter((card) => card.id % 2 !== 0);
    const secondRow = cardsData.filter((card) => card.id % 2 === 0);
  
    return (
      <CardsWrapper>
        <CardRow>
          {firstRow.map((card) => (
            <MentorCard content={card}></MentorCard>
          ))}
        </CardRow>
        <VerticalGap height={"3.472vw"}/>
        <CardRow hasMargin = {true}>
          {secondRow.map((card) => (
            <MentorCard content={card}></MentorCard>
          ))}
        </CardRow>
      </CardsWrapper>
    );
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function MentorCard(props){
    return <ContentWrapper key={props.id} color = {colorList[randomNumberInRange(0, colorList.length-1)]}>
        <Title>{props.content.title}</Title>
        <Body1>{props.content.sub_title}</Body1>
        <Name>{props.content.name}</Name>
    </ContentWrapper>
}

function AboutMentor() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>파드와 함께하는 멘토진</Header7>
                <CardsList cardsData={metorDb}/>
            </ThemeProvider>
        </PartDiv>
    );
}

export default AboutMentor;

const colorList = [
    "#64C59A", "#FF5C00", "#7B3FEF", "#5262F5",
]

const metorDb = [
    {
        id: 1,
        title: "노을 대표",
        sub_title: "파드 전체 운영 고문",
        name: "이동영",
    },
    {
        id: 2,
        title: "뱅크 샐러드 개발자",
        sub_title: "롱커톤 멘토링",
        name: "김난",
    },
    {
        id: 3,
        title: "Apple Developer Academy 디자인 멘토 ",
        sub_title: "대외 프로젝트 리드",
        name: "구민정",
    },
    {
        id: 4,
        title: "구름 PO",
        sub_title: "롱커톤 멘토링",
        name: "변지혜",
    },
    {
        id: 5,
        title: "프리랜서 (전 SK C&C) 개발자",
        sub_title: "대외 프로젝트 리드",
        name: "이민아",
    },
    {
        id: 6,
        title: "s2w 프로덕트 디자이너",
        sub_title: "파드 브랜딩 디자인",
        name: "김다정",
    },
    {
        id: 7,
        title: "LG U+ 프로덕트 디자이너",
        sub_title: "세미나 세션 진행",
        name: "장지현",
    },
    {
        id: 8,
        title: "카카오 T 서비스 기획자",
        sub_title: "롱커톤 멘토링",
        name: "정서영",
    },
    {
        id: 9,
        title: "당근마켓 개발자",
        sub_title: "운영/대외협력 멘토링",
        name: "하조은",
    },
    {
        id: 10,
        title: "S&P 프로덕트 디자이너",
        sub_title: "롱커톤 멘토링 참여",
        name: "Yeo Kyeong Chung",
    },
    {
        id: 11,
        title: "한동대학교 교수",
        sub_title: "서핑데이 세션 진행",
        name: "손성찬",
    },
];