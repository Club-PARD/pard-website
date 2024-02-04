import styled, { ThemeProvider } from "styled-components";
import { FaInstagram, FaGithub, FaInvision } from "react-icons/fa";
import { theme } from "../../../styles/theme";
import CHJ from "../../../assets/img/최현종.png";
import SYC from "../../../assets/img/송예찬(부회장).png";
import KKI from "../../../assets/img/김광일.png";
import KGS from "../../../assets/img/김진서.png";
import KHR from "../../../assets/img/김하람.png";
import PJG from "../../../assets/img/박정규.png";
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
import LinkedIn from "../../../assets/img/LinkedInLogo.png";
import WebLogo from "../../../assets/img/WebLogo.png";

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 50px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;

const Subtitle3 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle3};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle3};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 170px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;

const Subtitle1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 38px;
  left: 58%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-bottom: -10px;
  white-space: pre-line;
  text-align: left;
`;
const Caption = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Caption};
  font-weight: ${(props) => props.theme.fontWeights.Caption};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 0%;
  left: 58%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-bottom: 10px;
  white-space: pre-line;
  text-align: left;
`;

const PartDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  justify-items: center;
  width: 1050px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); //4개씩 넣고 각 넓이는 1fr이다
  row-gap: 27px; //서로 20px의 차이가 있도록
  column-gap: 0px;
  grid-auto-rows: 1.5fr;
`;
const Column = styled.div`
  //나중에 이미지 넣을 공간
  position: relative;
  max-width: 333px;
`;
const TextWrap = styled.div`
  position: absolute;
  width: 250px;
  height: 22%;
  top: 78%;
  border-bottom-left-radius: 19.5px;
  border-bottom-right-radius: 19.5px;
  background-color: ${({ position }) =>
    position === "Developer"
      ? "rgba(255,92,0,0.5)"
      : position === "Designer"
      ? "rgba(123,63,239,0.5)"
      : position === "Operator"
      ? "rgba(100, 197, 154, 0.5)"
      : "rgba(82,98,245,0.5)"};
  transition: 0.3s;
`;

const ImageWrapper = styled.div`
  max-width: 250px;
  width: 250px;
  height: 300px;
  display: block;

  &:hover {
    ${TextWrap} {
      width: 250px;
      height: 300px;
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
const IconWrapper = styled.div`
  display: none;
  ${ImageWrapper}:hover & {
    display: flex;
    justify-content: flex-end;
  }
`;

const Image = styled.img`
  max-width: 250px;
  width: 250px;
  height: 300px;
  display: block;
`;
const IconBackground = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: 13px;
  margin-left: -5px;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;
`;
const Icon = styled.a`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function InquiryManagement() {
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
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>
          거친 파도를 뚫고 나가는<br></br>파드 3기 운영진을 소개합니다.
        </Header7>
        <Subtitle3>
          함께 했을 때 더 큰 일을<br></br>이룰 수 있음을 강하게 믿고 있어요.
        </Subtitle3>
        <GridContainer>
          {managerData.map((content) => (
            <Column key={content.id}>
              <ImageWrapper>
                <Image src={content.imgsrc} alt={`Image ${content.id}`}></Image>
                <TextWrap position={content.position}>
                  <Subtitle1>{content.name}</Subtitle1>
                  <Caption>{content.position}</Caption>
                  <IconWrapper>
                    {content.site.map((site) => (
                      <IconBackground
                        key={site.name}
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          href={site.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {site.name === "instagram" ? (
                            <FaInstagram
                              style={{
                                color: "black",
                                width: "22px",
                                height: "22px",
                              }}
                            />
                          ) : site.name === "linkedin" ? (
                            <img
                              src={LinkedIn}
                              alt="LinkedIn Logo"
                              style={{ width: "20px", height: "20px" }}
                            />
                          ) : site.name === "github" ? (
                            <FaGithub
                              style={{
                                color: "black",
                                width: "24px",
                                height: "24px",
                              }}
                            />
                          ) : site.name === "web" ? (
                            <img
                              src={WebLogo}
                              alt="Web Logo"
                              style={{ width: "24px", height: "24px" }}
                            />
                          ) : (
                            <img
                              src={disquiet}
                              alt="Disquiet Logo"
                              style={{
                                width: "22px",
                                height: "17px",
                                marginLeft: "4.5px",
                              }}
                            />
                          )}
                        </Icon>
                      </IconBackground>
                    ))}
                  </IconWrapper>
                </TextWrap>
              </ImageWrapper>
            </Column>
          ))}
        </GridContainer>
      </ThemeProvider>
    </PartDiv>
  );
}

export default InquiryManagement;
