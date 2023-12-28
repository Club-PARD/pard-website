import styled, { ThemeProvider, keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import bandImage1 from '../../../assets/img/band1.svg';
import bandImage3 from '../../../assets/img/band3.svg';

const Header8 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  white-space: pre-line;
  text-align : left;
  margin-right: 25px;
  `;

const PartDiv = styled.div`
    padding-top: 42px;
    padding-bottom: 49px;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255);
`;

const BandAnimation = keyframes`
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(-3676px, 0);
    }
`;

const BandContainer = styled.aside`
    position: relative;
    height: 110px;
    overflow: hidden;

    ::after {
        content: '';
        position: absolute;
        inset: 0 auto auto 0;
        margin-left: ${props => props.hasMargin ? "170px" : "0px"};
        width: 11028px;
        height: 100%;
        background: ${props => `url(${props.src}) repeat-x 0/3676px`};
        animation: ${BandAnimation} 48s infinite linear;
        will-change: transform;
    }
`;

const BandList = styled.ul`
    position: relative;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 100%;
`;

const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 80px;
`;

const BandItem = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    color: transparent;
`;

const BandComponent = ({ mentorInfos, src, hasMargin }) => {
    return (
        <BandContainer src={src} hasMargin={hasMargin ?? false}>
            <BandList >
                {mentorInfos.map((info) => (
                    <BandItem key={info.id}>
                        {info.title}
                    </BandItem>
                ))}
            </BandList>
        </BandContainer>
    );
};

const VerticalGap = styled.div`
    height: ${props=>props.height != null ? props.height : "0px"};
`
const CardsList = ({ cardsData }) => {
    const firstRow = cardsData.filter((card) => card.id % 2 !== 0);
    const secondRow = cardsData.filter((card) => card.id % 2 === 0);
  
    return (
        <>
        <BandComponent mentorInfos={firstRow} src={bandImage1}></BandComponent>
        <VerticalGap height={'30px'}></VerticalGap>
        <BandComponent mentorInfos={secondRow} src={bandImage3} hasMargin = {true}></BandComponent>
        </>
        
    );
  };

function AboutMentor() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <TextDiv>
                <Header8>파드와 함께하는 멘토진</Header8>
                </TextDiv>
                <VerticalGap height={'110px'}></VerticalGap>
                <CardsList cardsData={metorDb}/>
                <VerticalGap height={'100px'}></VerticalGap>
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