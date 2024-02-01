import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
// import PlanerImage from '../../../assets/img/Planner_parts.png';
import 하조은 from "../../../assets/img/하조은.png";
import 주영민 from "../../../assets/img/주영민.png";
import 김강학 from "../../../assets/img/김강학.png";
import 김선엽 from "../../../assets/img/김선엽.png";

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 25px;
  white-space: pre-line;
  padding-right: 40px;
  padding-left: 125px;
`;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 54px;
  white-space: pre-line;
  padding-right: 40px;
  padding-left: 125px;
`;

const Header6 = styled.div`
  font-size: ${(props) =>
    props.id === 3
      ? props.theme.ButtonText1
      : props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => (props.color == null ? props.color : "#FFFFFF")};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  display: flex;
  margin-top: ${(props) => (props.id === 1 ? "-5px" : "20px")};
  margin-bottom: 15px;
  margin-left: ${(props) => (props.id === 1 ? "10px" : "0")};
  justify-content: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  color: ${(props) => (props.color == null ? "#FFFFFF" : props.color)};
  font-family: "NanumSquare Neo";
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: rgba(255, 255, 255, 0.4);
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: ${(props) =>
    props.id === 1 || props.id === 4 ? "160%" : props.isname ? "140%" : "140%"};
  display: flex;
  text-align: right;
  right: 20px;
`;

//margin-top: 110px = 60(image radius) + 50 px
const PartContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 37px;
  align-items: flex-start;
  margin-top: 110px;
`;

const PartWrapper = styled.div``;

const ContentWrapper = styled.div`
  margin-top: ${(props) => (props.marginTop ? "79px" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 270px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  padding: 0px 42px;
  word-break: keep-all;
  align-items: center;
  width: 167px;
  height: 84px;
  margin-bottom: 27px;
`;

const TextWrapper2 = styled.div`
  margin-top: 15px;
  height: 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;
const TextWrapper3 = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 240px;
  padding-right: 25px;
  margin-top: ${(props) =>
    props.id === 1 || props.id === 4 ? "24px" : "27px"};
`;

const Image = styled.img`
  margin-top: -60px;
  width: 120px;
  height: 120px;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
`;

const Div = styled.div`
  margin: 0px auto;
  height: 850px;
  justify-content: center;
  width: 1330px;
`;

function MentorCard(props) {
  return (
    <ContentWrapper
      key={props.content.id}
      marginTop={props.content.id % 2 !== 0}
    >
      <Image
        src={props.content.imageSrc}
        alt={`Image ${props.content.id}`}
        color={props.content.color}
      />
      <TextWrapper2>
        <Header7 color={props.content.color}>"</Header7>
        <Header7 color={props.content.color}>"</Header7>
      </TextWrapper2>
      <TextWrapper>
        <Header6 id={props.content.id} color={props.content.color}>
          {props.content.title}
        </Header6>
      </TextWrapper>
      <TextWrapper3 id={props.content.id}>
        <Body2 isname={true} id={props.content.id}>
          {props.content.mentor_name}
        </Body2>
        <Body2 isname={false} id={props.content.id}>
          {props.content.mentor_from}
        </Body2>
      </TextWrapper3>
    </ContentWrapper>
  );
}

function HomeMentor() {
  const contentsData = [
    {
      id: 1,
      imageSrc: 주영민,
      title: "Think Big,\nStart Small,\nMove fast,\nPard",
      mentor_name: "주영민",
      mentor_from: "(주)히든피겨스 CEO",
      color: "#7B3FEF",
    },
    {
      id: 2,
      imageSrc: 하조은,
      title: " 1인분 해내는 주니어가 되기 위한 최고의 선택",
      mentor_name: "하조은",
      mentor_from: "당근마켓 Software Engineer",
      color: "#FF5C00",
    },
    {
      id: 3,
      imageSrc: 김강학,
      title:
        "스펙 쌓기용이 아닌, 정말 문제를 해결하고 싶은 사람들이 모여 함께 몰입하고 있습니다",
      mentor_name: "김강학",
      mentor_from: "토스 Product Owner",
      color: "#64C59A",
    },
    {
      id: 4,
      imageSrc: 김선엽,
      title: "실무 경험을 가장 의미있게 해볼 수 있는 놀이터 ",
      mentor_name: "김선엽",
      mentor_from: "CJ OliveNetworks 신사업 전략",
      color: "#5262F5",
    },
  ];

  return (
    <Div>
      <ThemeProvider theme={theme}>
        <Header2>멘토 추천사</Header2>
        <Header4>함께 할 수 밖에 없는 이유</Header4>
        <PartContents>
          {contentsData.map((content) => (
            <PartWrapper key={content.id}>
              <MentorCard key={content.id} content={content}></MentorCard>
            </PartWrapper>
          ))}
        </PartContents>
      </ThemeProvider>
    </Div>
  );
}

export default HomeMentor;
