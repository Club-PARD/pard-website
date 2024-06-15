import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { FaInstagram, FaGithub, FaInvision } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { theme } from "../../../styles/theme";
import CHJ from "../../../assets/img/최현종.png";
import SYC from "../../../assets/img/송예찬(부회장).png";
import KKI from "../../../assets/img/김광일.png";
import KGS from "../../../assets/img/김진서.png";
import KHR from "../../../assets/img/김하람.png";
import KCR from "../../../assets/img/김채린.png";
import KSJ from "../../../assets/img/김성준.png";
import KHSS from "../../../assets/img/김현승.png";
import PMJ from "../../../assets/img/박민지.png";
import CJH from "../../../assets/img/천주현.png";
import LJE from "../../../assets/img/이지은.png";
import LJA from "../../../assets/img/이지애.png";
import SGS from "../../../assets/img/신지수.png";
import CYJ from "../../../assets/img/최영준.png";
import JSJ from "../../../assets/img/진세진.png";
import JSH from "../../../assets/img/조세희.png";
import JH from "../../../assets/img/조환.png";
import PYY from "../../../assets/img/백예은.png";
import disquiet from "../../../assets/img/disquiet.png";
import WebLogo from "../../../assets/img/WebLogo.png";

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 50px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;
const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
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
  background-color: ${({ position }) =>
    position === "Developer"
      ? "rgba(255,92,0,0.5)"
      : position === "Designer"
      ? "rgba(123,63,239,0.5)"
      : position === "Operator"
      ? "rgba(100, 197, 154, 0.5)"
      : "rgba(82,98,245,0.5)"};
  transition: 0.3s;
  &:hover {
    top: 0%;
    width: 150px;
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    background-color: ${({ position }) =>
      position === "Developer"
        ? "rgba(255, 92, 0, 0.8)"
        : position === "Designer"
        ? "rgba(123, 63, 239, 0.8)"
        : position === "Operator"
        ? "rgba(100, 197, 154, 0.8)"
        : "rgba(82, 98, 245, 0.8)"};
    width: ${({ position }) => (position ? "150px" : "initial")};
    height: ${({ position }) => (position ? "190px" : "initial")};
  }
`;
const Subtitle1 = styled.div`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 26px;
  left: 61%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-bottom: 1px;
  white-space: pre-line;
  text-align: left;
`;
const Caption = styled.div`
  font-size: 12px;
  font-weight: ${(props) => props.theme.fontWeights.Caption};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 6px;
  left: 61%;
  width: 100%;
  transform: translate(-50%, -50%);
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
`;
const Column = styled.div`
  //나중에 이미지 넣을 공간
  position: relative;
  max-width: 65px;
  margin-left: ${(props) =>
    props.even ? "11px" : "20px"}; // 짝수번째 이미지에만 다른 마진을 설정
  margin-top: 10px;
`;
const Image = styled.img`
  width: 150px;
  height: 190px;
  display: block;
  margin: 0px auto;
`;
const IconWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  ${TextWrap}:hover & {
    display: flex;
    justify-content: flex-end;
  }

  &:hover {
    ${TextWrap} {
      width: 100%;
      height: 100%;
      top: 0%;
      border-top-left-radius: 19.5px;
      border-top-right-radius: 19.5px;
      background-color: ${({ position }) =>
        position === "Developer"
          ? "rgba(255, 92, 0, 0.8)"
          : position === "Designer"
          ? "rgba(123, 63, 239, 0.8)"
          : position === "Operator"
          ? "rgba(100, 197, 154, 0.8)"
          : "rbga(255,0,0,0.8)"};
    }
  }
`;
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
      imgsrc: JSH,
      name: "조세희(회장)",
      position: "Operator",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/sayjo2/",
        },
        { name: "instagram", link: "https://www.instagram.com/say_chee2se/" },
        { name: "disquiet", link: "https://disquiet.io/@sehijo" },
      ],
    },
    {
      id: 2,
      imgsrc: JH,
      name: "조환(부회장)",
      position: "Operator",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/hwan-jho-조환-70491b200/",
        },
        { name: "instagram", link: "https://www.instagram.com/hwanjho__75/" },
        {
          name: "disquiet",
          link: "https://disquiet.io/@jhohwan",
        },
      ],
    },

    {
      id: 3,
      imgsrc: KGS,
      name: "김진서",
      position: "Operator",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/jinseo-kim-51b575262/",
        },
        { name: "disquiet", link: "https://disquiet.io/@eunoia_" },
        { name: "github", link: "https://github.com/eunoia-jason" },
      ],
    },
    {
      id: 4,
      imgsrc: LJA,
      name: "이지애",
      position: "Operator",
      site: [
        { name: "instagram", link: "https://www.instagram.com/ana_jiae/" },
      ],
    },
    {
      id: 5,
      imgsrc: KCR,
      name: "김채린",
      position: "Operator",
      site: [
        { name: "instagram", link: "https://www.instagram.com/rlacofls_/" },
        { name: "disquiet", link: "https://disquiet.io/@rlacofls" },
        { name: "github", link: "https://github.com/seizethedaylyn" },
      ],
    },
    {
      id: 6,
      imgsrc: KSJ,
      name: "김성준",
      position: "Operator",
      site: [
        { name: "instagram", link: "https://www.instagram.com/__lakewood_/" },
      ],
    },
    {
      id: 7,
      imgsrc: KHR,
      name: "김하람",
      position: "Developer",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/하람-김-482773263/",
        },
        { name: "instagram", link: "https://www.instagram.com/ram2__dev/" },
        { name: "github", link: "https://github.com/haram22" },
      ],
    },
    {
      id: 8,
      imgsrc: JSJ,
      name: "진세진",
      position: "Developer",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/세진-진-309b11266/",
        },
        { name: "instagram", link: "https://www.instagram.com/jinsejin2/" },
        { name: "github", link: "https://github.com/jinsejin" },
      ],
    },
    {
      id: 9,
      imgsrc: PMJ,
      name: "박민지",
      position: "Developer",
      site: [
        {
          name: "instagram",
          link: "https://www.instagram.com/__min.zzi/",
        },
        { name: "disquiet", link: "https://disquiet.io/@minzzi0068" },
        { name: "github", link: "https://github.com/minzziPark" },
      ],
    },
    {
      id: 10,
      imgsrc: KKI,
      name: "김광일",
      position: "Developer",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/kwangil-kim-79822a2aa",
        },
        { name: "disquiet", link: "https://disquiet.io/@oksk6689" },
        { name: "github", link: "https://github.com/pangil5634" },
      ],
    },
    {
      id: 11,
      imgsrc: KHSS,
      name: "김현승",
      position: "Developer",
      site: [
        { name: "instagram", link: "https://www.instagram.com/hyunseung_99/" },
        { name: "github", link: "https://github.com/KimRPG" },
        ,
      ],
    },
    {
      id: 12,
      imgsrc: CJH,
      name: "천주현",
      position: "Developer",
      site: [
        {
          name: "instagram",
          link: "https://www.instagram.com/zoohyxnn/",
        },
        { name: "github", link: "https://github.com/millejuice" },
      ],
    },
    {
      id: 13,
      imgsrc: SGS,
      name: "신지수",
      position: "Designer",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/지수-신-a443b7219/",
        },
        { name: "instagram", link: "https://www.instagram.com/s.jisu001/" },
        { name: "disquiet", link: "https://disquiet.io/@shinji0609" },
      ],
    },
    {
      id: 14,
      imgsrc: CYJ,
      name: "최영준",
      position: "Designer",
      site: [
        {
          name: "instagram",
          link: "https://www.instagram.com/iam_grit___._?igsh=MXRnMDA4MHlncjlzNA%3D%3D&utm_source=qr",
        },
        { name: "disquiet", link: "https://disquiet.io/@cyj7230" },
      ],
    },
    {
      id: 15,
      imgsrc: PYY,
      name: "백예은",
      position: "Product Manager",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/예은-백-794b8a249/",
        },
        { name: "instagram", link: "https://www.instagram.com/100yeah._.e/" },
        { name: "disquiet", link: "https://disquiet.io/@313dpdms" },
      ],
    },
    {
      id: 17,
      imgsrc: LJE,
      name: "이지은",
      position: "Product Manager",
      site: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/ezn/",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/ana_jieun/",
        },
        { name: "disquiet", link: "https://disquiet.io/@twins24j" },
      ],
    },
  ];
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            거친 파도를 <br />
            뚫고 나가는
            <br /> 파드 3기 운영진을
            <br />
            소개합니다.
          </Header8>
          <Body1>
            함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요.
          </Body1>
          <GridContainer>
            {managerData.map((content, index) => (
              <Column key={content.id} even={index % 2 === 1}>
                <Image src={content.imgsrc} alt={`Image ${content.id}`}></Image>

                <TextWrap position={content.position}>
                  <Subtitle1>{content.name}</Subtitle1>
                  <Caption>{content.position}</Caption>
                  <IconWrapper>
                    {content.site.map((site) => (
                      <IconBackground key={site.name}>
                        <Icon href={site.link}>
                          {site.name === "instagram" ? (
                            <FaInstagram style={{ color: "black" }} />
                          ) : site.name === "linkedin" ? (
                            <FaInvision style={{ color: "black" }} />
                          ) : site.name === "github" ? (
                            <FaGithub style={{ color: "black" }} />
                          ) : site.name === "web" ? (
                            <img
                              src={WebLogo}
                              alt="Web Logo"
                              style={{ width: "16px", height: "16px" }}
                            />
                          ) : (
                            <img
                              src={disquiet}
                              alt="Disquiet Logo"
                              style={{
                                width: "20px",
                                height: "12px",
                                marginLeft: "3.0px",
                              }}
                            />
                          )}
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
