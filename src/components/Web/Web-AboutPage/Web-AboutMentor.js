import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Flickity = require('react-flickity-component');


// Or for ES2015 module
function getFlickityOptions(props){
    
    const align = props == null ? "center" : props;
    console.log(align);
    return {
        initialIndex: 1,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: 1500,
        pageDots: false,
        friction: 1,
        pauseAutoPlayOnHover: false,
        draggable: false,
        on: {
            ready: function() {
                this.off( 'uiChange', this.stopPlayer );
                this.off( 'pointerDown', this.stopPlayer );
            }
        }
    }
}

function FlickityCarousel(props) {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={getFlickityOptions(props.cellAlign)} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        {props.cardInfos.map((card) => (
            <MentorCard key={card.id} content={card}></MentorCard>
          ))}
    </Flickity>
  )
}

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
text-align : start;
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
    text-align : start;
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
    margin-right: 3.472vw;
`

const VerticalGap = styled.div`
    height: ${props=>props.height != null ? props.height : "0px"};
`
const CardsList = ({ cardsData }) => {
    const firstRow = cardsData.filter((card) => card.id % 2 !== 0);
    const secondRow = cardsData.filter((card) => card.id % 2 === 0);
  
    return (
        <>
        <FlickityCarousel cardInfos={firstRow}></FlickityCarousel>
        <VerticalGap height={'50px'}></VerticalGap>
        <FlickityCarousel cardInfos={secondRow}></FlickityCarousel>
        </>

        
    );
  };

  function getColor(roleId){
    const defaultColor = "#FFFFFF";
    var found = roleList.filter(role => (role.id === roleId));
    return found.length === 0 ? defaultColor : found[0].theme;
  }

function MentorCard(props){
    return <ContentWrapper key={props.id} color = {getColor(props.content.roleId)}>
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

const roleList = [
    {
        id: 1,
        role: 'admin',
        theme: "#64C59A",
    },
    {
        id: 2,
        role: 'developer',
        theme: "#FF5C00",
    },
    {
        id: 3,
        role: 'designer',
        theme: "#7B3FEF",
    },
    {
        id: 4,
        role: 'pm',
        theme: "#5262F5",
    }
]

const metorDb = [
    {
        id: 1,
        title: "노을 前 대표",
        sub_title: "파드 전체 운영 고문",
        name: "이동영",
        roleId: 1
    },
    {
        id: 2,
        title: "뱅크 샐러드 개발자",
        sub_title: "롱커톤 멘토링",
        name: "김난",
        roleId: 2
    },
    {
        id: 3,
        title: "Apple Developer Academy 디자인 멘토 ",
        sub_title: "대외 프로젝트 리드",
        name: "구민정",
        roleId: 3,
    },
    {
        id: 4,
        title: "구름 PO",
        sub_title: "롱커톤 멘토링",
        name: "변지혜",
        roleId: 4,
    },
    {
        id: 5,
        title: "프리랜서 (전 SK C&C) 개발자",
        sub_title: "대외 프로젝트 리드",
        name: "이민아",
        roleId: 2,
    },
    {
        id: 6,
        title: "s2w 프로덕트 디자이너",
        sub_title: "파드 브랜딩 디자인",
        name: "김다정",
        roleId: 3,
    },
    {
        id: 7,
        title: "LG U+ 프로덕트 디자이너",
        sub_title: "세미나 세션 진행",
        name: "장지현",
        roleId: 3,
    },
    {
        id: 8,
        title: "카카오 T 서비스 기획자",
        sub_title: "롱커톤 멘토링",
        name: "정서영",
        roleId: 4,
    },
    {
        id: 9,
        title: "당근마켓 개발자",
        sub_title: "운영/대외협력 멘토링",
        name: "하조은",
        roleId: 2,
    },
    {
        id: 10,
        title: "S&P 프로덕트 디자이너",
        sub_title: "롱커톤 멘토링 참여",
        name: "Yeo Kyeong Chung",
        roleId: 3,
    },
    {
        id: 11,
        title: "한동대학교 교수",
        sub_title: "서핑데이 세션 진행",
        name: "손성찬",
        roleId: 1,
    },
    {
        id: 12,
        title: "CJ AI Center PM",
        sub_title: "운영/대외협력 멘토링",
        name: "김선엽",
        roleId: 1,
    },
    {
        id: 13,
        title: "한동대학교 교수",
        sub_title: "파드 전체 운영 고문",
        name: "이원섭",
        roleId: 1,
    },
    {
        id: 14,
        title: "토스 PO",
        sub_title: "연합세미나 세션 진행",
        name: "김강학",
        roleId: 4,
    },
    {
        id: 15,
        title: "Microsoft PM",
        sub_title: "롱커톤 멘토링 참여",
        name: "정유진",
        roleId: 4,
    },
    {
        id: 16,
        title: "쿠팡 Product Designer",
        sub_title: "롱커톤 멘토링 참여",
        name: "윤하지",
        roleId: 3,
    },
    {
        id: 17,
        title: "네이버 개발자",
        sub_title: "연합세미나 세션",
        name: "전주현",
        roleId: 2,
    },
];