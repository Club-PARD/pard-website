import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from "react";
import PM from "../../../assets/img/PM_info.png";
import Web from "../../../assets/img/Web_info.png";
import Design from "../../../assets/img/Design_info.png";
import App from "../../../assets/img/iOS_info.png";
import Server from "../../../assets/img/Server_info.png";

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  margin-bottom: 745px;
  text-align: left;
  position: absolute;
  bottom: 0;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: ${(props) => props.color};
  opacity: ${(props) => (props.selected ? "1" : "0")};
  margin-left: 648px;
  position: absolute;
  margin-bottom: 461px;
  bottom: 0;
  white-space: pre-wrap;
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  font-family: "NanumSquare Neo";
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  margin-left: 648px;
  bottom: 0;
  white-space: pre-wrap;
  margin-bottom: 144px;
  line-height: 160%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const PartDiv = styled.div`
  padding-top: 150px;
  padding-left: 110px;
  padding-right: 112px;
  padding-bottom: 114px;
  height: 720px;
  background-color: #ffffff;
  position: relative;
  display: block;
  width: 1072px;
  margin: 0 auto;
`;

const ListWrap = styled.ul`
  display: flex;
  width: 87%;
  list-style: none;
  padding: 0;
  margin-bottom: 641px;
  position: absolute;
  bottom: 0;
`;
const ImageBorder = styled.div`
  width: 550px;
  height: 30px;
  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 21px 21px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  background-color: ${(props) => (props.selected ? props.color : "#ff0")};
  margin-bottom: 144px;
`;
const ImageText = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Caption1};
  font-weight: ${(props) => props.theme.fontWeights.Caption1};
  margin-left: 32px;
  margin-top: 9px;
  color: white;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const List = styled.li`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: inline-block;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
`;
const ListButton = styled.button`
  width: 20%;
  border: none;
  background-color: ${(props) => (props.selected ? props.color : "#fff")};
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 550px;
  height: 440px;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  position: absolute;
  float: left;
  bottom: 0;

  margin-bottom: 144px;
`;
const Down = styled.div``;
function AboutPart() {
  const [part, setPart] = useState([
    {
      id: 1,
      part: "서비스 기획",
      border_color: "#5262F5",
      imgsrc: PM,
      selected: true,
      partEng: "Product Manager",
      context: (
        <>
          사용자의 문제를 찾고, 해결할 수 있는 서비스를 기획합니다.
          <br />
          아이디어 발상에서 그치는 것이 아닌 프로덕트 구현의 모든 과정에서
          <br />
          관리자 역할을 수행합니다. 이 과정에서 실무 기획에서 사용되는
          <br />
          IA, Flow-Chart, 화면 설계서 등의 기획 산출물을 작성하고 산출물
          기반으로
          <br />
          디자이너/개발자와 소통합니다.
          <br />
          <br />
          서비스 기획에 필요한 문제 정의, 데이터 기반 솔루션 도출, UX 설계 뿐만
          아니라
          <br />
          프로젝트 매니징을 위한 프레임워크, 회고 방법 등에 기반해 <br />
          서비스 기획자 및 PM의 마인드를 가질 수 있습니다.
        </>
      ),
      homework: "서비스 화면 설계서 작성",
    },
    {
      id: 2,
      part: "UI/UX 디자인",
      border_color: "#7B3FEF",
      imgsrc: Design,
      selected: false,
      partEng: "Designer",
      context: (
        <>
          UX/UI 디자인 이론을 배우며, 사용자 중심 사고를 기르고
          <br />
          개발 가능한 디자인을 구현합니다.
          <br />
          각자 하나의 App/Web Product를 선택해 배운 내용들을
          <br />
          적용해보고 다각도에서 분석하면서 다양한 역량을 키우고 동시에
          <br />
          유의미한 포트폴리오를 구축합니다.
          <br />
          <br />
          현업 실무자 분들, 그리고 타 파트와의 협업을 통해 디자인 뿐 아니라
          <br />
          기획, 사용자 조사, 데이터 도출, 개발자와 협업 등 비즈니스에 대한
          <br />
          이해와 전문성을 갖추어 협업에 최적화된 디자이너로 성장합니다.
        </>
      ),
      homework: "서비스 리디자인 프로젝트",
    },
    {
      id: 3,
      part: "앱(iOS)",
      border_color: "#FF5C00",
      imgsrc: App,
      selected: false,
      partEng: "iOS Developer",
      context: (
        <>
          iOS 앱과 서비스 개발을 위한 이론을 배우고 실습/협업 합니다. <br />
          개인이 아닌 팀으로 이루어진 개발 과제와 프로젝트를 통해
          <br />
          Github의 활용과 응용은 물론 프로젝트 파일 생성부터 배포까지의 과정을
          <br />
          경험할 수 있습니다.
          <br />
          <br />
          프레임 워크에 대한 깊은 분석과 역량을 키우고, <br />
          IT 프로덕트 제작 과정을 경험함으로써 유의미한
          <br />
          포트폴리오를 가진 개발자로 성장합니다.
          <br />* 1기는 Flutter를, 2기부터는 iOS 기반으로 학습합니다.
        </>
      ),
      homework: "netflix 앱 클론 코딩",
    },
    {
      id: 4,
      part: "웹(WEB)",
      border_color: "#FF5C00",
      imgsrc: Web,
      selected: false,
      partEng: "Web Developer",
      context: (
        <>
          <br />
          웹과 서비스 개발을 위한 이론을 배우고 실습/협업 합니다.
          <br />
          HTML/CSS/JS에 대해 기초를 빠르게 다지고
          <br />
          React 라이브러리를 기반으로 웹 서비스를 개발할 뿐 아니라
          <br />팀 프로젝트를 통해 이론으로 습득할 수 없는 실제적 경험과 역량을
          <br />
          극대화합니다.
          <br />
          <br />
          기획, 디자인 직군과의 실제 배포를 위한 제대로 된 협업을 통해서
          <br />
          인공지능이 대체할 수 없는 커뮤니케이션 능력을 갖추고,
          <br />
          기획자와 디자이너를 이해할 수 있는 개발자로 성장합니다.
        </>
      ),
      homework: "Instagram 웹 클론 코딩",
    },
    {
      id: 5,
      part: "서버(SERVER)",
      border_color: "#FF5C00",
      imgsrc: Server,
      selected: false,
      partEng: "Server Developer",
      context: (
        <>
          <br />
          실제 서비스를 운영하기 위해 데이터 설계부터 서버를 관리하고,
          <br />
          전반적인 시스템 인프라를 구축 및 배포 및 운영합니다. 자바의
          <br />
          객체지향, 서버, 관계형 데이터베이스를 이해하고, Spring Boot의
          <br />
          기본기를 다지며 다양한 API를 구현하는 개발자로 성장합니다.
          <br /> <br />
          클라이언트를 담당하는 앱/웹 파트와 협업하며 의사소통 능력을
          <br />
          키우고, CI/CD를 구축할 수 있는 개발자로 성장합니다.
        </>
      ),
      homework: "ERD(Entity Relationship Diagram)",
    },
  ]);

  const handleButtonClick = (id) => {
    setPart((prevPart) =>
      prevPart.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            selected: true,
          };
        } else {
          return {
            ...p,
            selected: false,
          };
        }
      })
    );
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드를 구성하는 파트</Header7>
          <ListWrap>
            {part.map((content) => (
              <ListButton
                key={content.id}
                onClick={() => handleButtonClick(content.id)}
                selected={content.selected}
                color={content.border_color}
              >
                <List key={content.id} selected={content.selected}>
                  {content.part}
                </List>
              </ListButton>
            ))}
          </ListWrap>
          {part.map((props) => (
            <Down key={props.id}>
              <Image
                src={props.imgsrc}
                alt={`Image ${props.id}`}
                selected={props.selected}
                color={props.border_color}
              />
              <ImageBorder selected={props.selected} color={props.border_color}>
                {" "}
                <ImageText selected={props.selected}>
                  {props.homework}
                </ImageText>{" "}
              </ImageBorder>
              <Header5 selected={props.selected} color={props.border_color}>
                {props.partEng} of PARD
              </Header5>
              <Body1 selected={props.selected}>{props.context}</Body1>
            </Down>
          ))}
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutPart;
