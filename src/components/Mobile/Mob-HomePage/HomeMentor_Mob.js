import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
// import PlanerImage from '../../../assets/img/Planner_parts.png';
import 하조은 from "../../../assets/img/하조은.png";
import 주영민 from "../../../assets/img/주영민.png";
import 김강학 from "../../../assets/img/김강학.png";
import 김선엽 from "../../../assets/img/김선엽.png";

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 25px;
  white-space: pre-line;
  margin-right: 120px;
`;

const Sub3 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle3};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle3};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 14px;
  white-space: pre-line;
  margin-right: 55px;
`;

const Header6 = styled.div`
  font-size: ${(props) =>
    props.id === 3
      ? props.theme.Mob_fontSizes.ButtonText1
      : props.theme.Mob_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => (props.color == null ? "#FFFFFF" : props.color)};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  display: flex;
  margin-top: ${(props) => (props.id === 1 ? "-5px" : "20px")};
  margin-left: ${(props) => (props.id === 1 ? "10px" : "0")};
  margin-bottom: 15px;
`;
const Header3 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header3};
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
    props.id === 1 ? "160%" : props.isname ? "140%" : "140%"};
  display: flex;
  text-align: right;
  position: absolute;
  bottom: ${(props) => (props.isname ? "9vw" : "4.267vw")};
  right: 20px;
`;

const PartContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  margin-top: 110px;
`;

const PartWrapper = styled.div``;

const ContentWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 270px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  position: relative;
`;

const TextWrapper = styled.div`
  padding: 0px 42px;
  word-break: keep-all;
  align-items: center;
`;

const TextWrapper2 = styled.div`
  margin-top: 23px;
  height: 0;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;

const Image = styled.img`
  margin-top: -60px;
  width: 120px;
  height: 120px;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
`;

const PartDiv = styled.div`
  padding-top: 30px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
        <Header3 color={props.content.color}>"</Header3>
        <Header3 color={props.content.color}>"</Header3>
      </TextWrapper2>
      <TextWrapper>
        <Header6 id={props.content.id}>{props.content.title}</Header6>
      </TextWrapper>
      <Body2 isname={true} id={props.content.id}>
        {props.content.mentor_name}
      </Body2>
      <Body2 isname={false}>{props.content.mentor_from}</Body2>
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
  ];

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>멘토 추천사</Header7>
          <Sub3>함께 할 수 밖에 없는 이유</Sub3>
          <PartContents>
            {contentsData.map((content) => (
              <PartWrapper key={content.id}>
                <MentorCard content={content}></MentorCard>
              </PartWrapper>
            ))}
          </PartContents>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomeMentor;
