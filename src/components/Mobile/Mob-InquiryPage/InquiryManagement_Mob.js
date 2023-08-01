import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { FaInstagram, FaGithub, FaInvision } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { theme } from '../../../styles/theme';
import CHJ from '../../../assets/img/최현종.png';
import SYC from '../../../assets/img/송예찬(부회장).png';
import KYG from '../../../assets/img/김유진.png';
import KGS from '../../../assets/img/김진서.png';
import KHR from '../../../assets/img/김하람.png';
import PJG from '../../../assets/img/박정규.png';
import KHS from '../../../assets/img/김현서.png';
import KHSS from '../../../assets/img/김현승.png';
import WBH from '../../../assets/img/우병희.png';
import PJS from '../../../assets/img/박지성.png';
import LJE from '../../../assets/img/이지은.png';
import SGS from '../../../assets/img/신지수.png';
import LSY from '../../../assets/img/이신영.png';
import JSJ from '../../../assets/img/진세진.png';
import JSH from '../../../assets/img/조세희.png';
import JH from '../../../assets/img/조환.png';
import PYY from '../../../assets/img/백예은.png';
import disquiet from '../../../assets/img/disquiet.png';
import WebLogo from '../../../assets/img/WebLogo.png'

const Header8 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Header8};
    font-weight: ${props => props.theme.fontWeights.Header8};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 50px;
    white-space: pre-line;
    text-align: center;
    line-height: 140%;
`;
const Body1 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body1};
    font-weight: ${props => props.theme.fontWeights.Body1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 100px;
    white-space: pre-line;
    text-align: center;
    line-height: 160%;

`;
const TextWrap = styled.div`
    position: absolute;
    width: 150px;
    height: 66px;
    top: 65.3%;
    border-bottom-left-radius: 12.5px;
    border-bottom-right-radius: 12.5px;
    background-color :  ${({ position }) => position === 'Developer' ? "rgba(255,92,0,0.5)"
        : position === 'Designer'
            ? "rgba(123,63,239,0.5)" : position === 'Operator'
                ? "rgba(100, 197, 154, 0.5)" : "rgba(82,98,245,0.5)"};
    transition: 0.3s;
    &:hover{
        top: 0%;
        width: 150px;
        border-top-left-radius: 12.5px;
            border-top-right-radius: 12.5px;
        background-color: ${({ position }) => position === 'Developer' ? 'rgba(255, 92, 0, 0.8)'
        : position === 'Designer' ? 'rgba(123, 63, 239, 0.8)'
            : position === 'Operator' ? 'rgba(100, 197, 154, 0.8)' : 'rgba(82, 98, 245, 0.8)'};
            width: ${({ position }) => position ? '150px' : 'initial'};
            height: ${({ position }) => position ? '190px' : 'initial'};
    }   
`
const Subtitle1 = styled.div`
    font-size: 16px;
    font-weight: ${props => props.theme.fontWeights.Subtitle1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    position: absolute;
    bottom: 26px;
    left: 61%;
    width: 100%;
    transform: translate(-50%,-50%);
    margin-bottom: 1px;
    white-space: pre-line;
    text-align: left;
`;
const Caption = styled.div`
    font-size: 12px;
    font-weight: ${props => props.theme.fontWeights.Caption};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    position: absolute;
    bottom: 6px;
    left: 61%;
    width: 100%;
    transform: translate(-50%,-50%);
    margin-bottom: 3px;
    white-space: pre-line;
    text-align: left;
`;

const PartDiv = styled.div`
    height: 100%;
    width: 375px;
    `;


const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    /* padding-left: 10px; */

    `;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; //2개씩 넣고 각 넓이는 1fr이다
    /* grid-gap: 5px;//서로 20px의 차이가 있도록 */
    row-gap: 5px;
    column-gap: 0px;
    grid-auto-rows: 1fr;
`
const Column = styled.div`
    //나중에 이미지 넣을 공간
    position: relative;
    max-width: 65px;
    margin-left: ${props => props.even ? '11px' : '20px'}; // 짝수번째 이미지에만 다른 마진을 설정
    margin-top: 10px;
`
const Image = styled.img`
    width: 150px;
    height: 190px;
    display: block; 
    margin: 0px auto;
`
const IconWrapper = styled.div`
    display: none;
    position: absolute;
    right: 0;
    ${TextWrap}:hover & {
    display: flex;
    justify-content: flex-end;
    }

    &:hover{
        ${TextWrap}{ 
            width: 100%;
            height: 100%;
            top: 0%;
            border-top-left-radius: 19.5px;
            border-top-right-radius: 19.5px;
            background-color: ${({ position }) =>
        position === 'Developer' ? 'rgba(255, 92, 0, 0.8)'
            : position === 'Designer' ? 'rgba(123, 63, 239, 0.8)'
                : position === 'Operator' ? 'rgba(100, 197, 154, 0.8)' : 'rbga(255,0,0,0.8)'};
        }
    }
`
const IconBackground = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 6px;
    margin-top: 10px;
    text-align: center;
`;
const Icon = styled.a`
    position: absolute;
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;
function InquiryManagemaentMob() {
    const managerData = [
        {
            id: 1,
            imgsrc: SYC,
            name: '송예찬(회장)',
            position: 'Operator',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/yechan-song-impacter/' },
                { name: 'disquiet', link: 'https://disquiet.io/@impact_yechan' },
                { name: 'web', link: 'https://brunch.co.kr/@songyechan15' },
            ],
        },
        {
            id: 2,
            imgsrc: CHJ,
            name: '최현종',
            position: 'Operator',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/hyunjong-choi/' },
                { name: 'disquiet', link: 'https://disquiet.io/@owen' },
                { name: 'instagram', link: 'https://www.instagram.com/hamjong_e/?hl=ko' },
            ]
        },

        {
            id: 3,
            imgsrc: LSY,
            name: '이신영',
            position: 'Operator',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/%EC%8B%A0%EC%98%81-%EC%9D%B4-4b4419269/' },
                { name: 'disquiet', link: 'https://disquiet.io/@dltlsdud0319' },
                { name: 'instagram', link: 'https://www.instagram.com/shinyoung0319/' },
            ],
        },
        {
            id: 4,
            imgsrc: KHS,
            name: '김현서',
            position: 'Operator',
            site: [
            //    { name: 'linkedin', link: 'https://www.linkedin.com/in/%EC%8B%A0%EC%98%81-%EC%9D%B4-4b4419269/' },
          //      { name: 'disquiet', link: 'https://disquiet.io/@dltlsdud0319' },
                { name: 'instagram', link: 'https://www.instagram.com/hyun._.seo_99/' },
            ],
        },
        {
            id: 5,
            imgsrc: LJE,
            name: '이지은',
            position: 'Operator',
            site: [
             //   { name: 'linkedin', link: 'https://www.linkedin.com/in/%EC%8B%A0%EC%98%81-%EC%9D%B4-4b4419269/' },
              //  { name: 'disquiet', link: 'https://disquiet.io/@dltlsdud0319' },
                { name: 'instagram', link: 'https://www.instagram.com/ana_jieun/' },
            ],
        },
        {
            id: 6,
            imgsrc: WBH,
            name: '우병희',
            position: 'Operator',
            site: [
           //     { name: 'linkedin', link: 'https://www.linkedin.com/in/%EC%8B%A0%EC%98%81-%EC%9D%B4-4b4419269/' },
            //    { name: 'disquiet', link: 'https://disquiet.io/@dltlsdud0319' },
                { name: 'instagram', link: 'https://www.instagram.com/vang.ee/' },
            ],
        },
        {
            id: 7,
            imgsrc: PJG,
            name: '박정규',
            position: 'Developer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/정규-바ᄀ-1223a8263/' },
                { name: 'disquiet', link: 'https://disquiet.io/@quddkflty' },
                { name: 'github', link: 'https://github.com/dasdfadssda' },
            ],
        },
        {
            id: 8,
            imgsrc: KGS,
            name: '김진서',
            position: 'Developer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/학부생-김진서-51b575262/' },
                { name: 'disquiet', link: 'https://disquiet.io/@eunoia_' },
                { name: 'github', link: 'https://github.com/jinseokim-hgu' },
            ],
        },
        {
            id: 9,
            imgsrc: KYG,
            name: '김유진',
            position: 'Developer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/학부생-김유진-4bb385252' },
                { name: 'disquiet', link: 'https://disquiet.io/@22100164' },
                { name: 'github', link: 'https://github.com/YujinKim164' },
            ],
        },
        {
            id: 10,
            imgsrc: PJS,
            name: '박지성',
            position: 'Developer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/학부생-김유진-4bb385252' },
                { name: 'disquiet', link: 'https://disquiet.io/@22100164' },
                { name: 'instagram', link: 'https://www.instagram.com/10_mandarin/' },
            ],
        },
        {
            id: 11,
            imgsrc: KHSS,
            name: '김현승',
            position: 'Developer',
            site: [
             //   { name: 'linkedin', link: 'https://www.linkedin.com/in/%ED%95%98%EB%9E%8C-%EA%B9%80-482773263' },
                { name: 'instagram', link: 'https://www.instagram.com/hyunseung_99/' },
             //   { name: 'github', link: 'https://www.instagram.com/hyunseung_99/ ' },
                ,],
        },
        {
            id: 12,
            imgsrc: KHR,
            name: '김하람',
            position: 'Developer',
            site:[
                { name: 'linkedin', link: 'https://www.linkedin.com/in/%ED%95%98%EB%9E%8C-%EA%B9%80-482773263' },
                { name: 'instagram', link: 'https://instagram.com/ram2__dev?igshid=NTc4MTIwNjQ2YQ==' },
                { name: 'github', link: 'https://github.com/haram22  ' },
                ,],
        },
        {
            id: 13,
            imgsrc: JSJ,
            name: '진세진',
            position: 'Developer',
            site: [
           //     { name: 'linkedin', link: 'https://www.linkedin.com/in/sayjo2/' },
                { name: 'instagram', link: 'https://www.instagram.com/jinsejin2/' },
            //    { name: 'disquiet', link: 'https://disquiet.io/@sehijo' },
            ],
        },
        {
            id: 14,
            imgsrc: JSH,
            name: '조세희',
            position: 'Designer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/sayjo2/' },
                { name: 'instagram', link: 'https://instagram.com/say_chee2se/' },
                { name: 'disquiet', link: 'https://disquiet.io/@sehijo' },
            ],
        },
        {
            id: 15,
            imgsrc: SGS,
            name: '신지수',
            position: 'Designer',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/%EC%A7%80%EC%88%98-%EC%8B%A0-a443b7219/' },
                { name: 'instagram', link: 'https://www.instagram.com/s.jisu001/' },
                { name: 'disquiet', link: 'https://disquiet.io/@shinji0609' },
            ],
        },
        {
            id: 17,
            imgsrc: JH,
            name: '조환',
            position: 'Product Manager',
            site: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/hwan-jho-%EC%A1%B0%ED%99%98-70491b200' },
                { name: 'instagram', link: 'https://instagram.com/hwanjho__75?igshid=NTc4MTIwNjQ2YQ==' },
                { name: 'disquiet', link: 'https://disquiet.io/@jhohwan' },
            ],
        },
        {
            id: 18,
            imgsrc: PYY,
            name: '백예은',
            position: 'Product Manager',
            site: [
                { name: 'instagram', link: 'https://www.instagram.com/100yeah._.e/' },
             //   { name: 'disquiet', link: 'https://disquiet.io/@skbaek0716' },
            ],
        },
]
    return (
        <Div>
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header8>거친 파도를 <br />뚫고 나가는<br /> 파드 1기 운영진을<br />소개합니다.</Header8>
                <Body1>함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요.</Body1>
                <GridContainer>
                    {managerData.map((content, index) => (
                        <Column key={content.id} even={index % 2 === 1}>
                            <Image src={content.imgsrc} alt={`Image ${content.id}`} ></Image>

                            <TextWrap position={content.position}>
                                <Subtitle1>{content.name}</Subtitle1>
                                <Caption>{content.position}</Caption>
                                <IconWrapper>
                                    {content.site.map(site => (
                                        <IconBackground key={site.name}>
                                            <Icon href={site.link}>
                                                {site.name === "instagram" ? <FaInstagram style={{ color: "black" }} />
                                                    : site.name === "linkedin" ? <FaInvision style={{ color: "black" }} />
                                                        : site.name === "github" ? <FaGithub style={{ color: "black" }} />
                                                            : site.name === "web" ? (
                                                                <img src={WebLogo} alt="Web Logo" style={{ width: '16px', height: '16px' }} />)
                                                                :
                                                                <img src={disquiet} alt="Disquiet Logo" style={{ width: '20px', height: '12px', marginLeft: '3.0px' }} />
                                                }
                                            </Icon>
                                        </IconBackground>
                                    ))}
                                </IconWrapper>

                            </TextWrap>
                        </Column>
                    ))}

                </GridContainer>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default InquiryManagemaentMob;