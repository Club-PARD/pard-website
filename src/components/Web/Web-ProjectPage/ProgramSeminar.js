import styled, { ThemeProvider } from "styled-components";
import img1 from "../../../assets/img/세미나1.png";
import img2 from "../../../assets/img/세미나2.png";
import img3 from "../../../assets/img/세미나3.png";
import ProgramStudy from "./ProgramStudy";

function ProgramSeminar() {
  const cardData = [
    {
      id: 1,
      image: img1,
      description: "8주간 직무별 역량 강화를 위해\n진행하는 파트별 세미나 세션",
    },
    {
      id: 2,
      image: img2,
      description: "탄탄한 커리큘럼으로 이루어진\n이론과 실습 진행",
    },
    {
      id: 3,
      image: img3,
      description: "타 직군에 대해 이해하고\n함께 성장하는 연합 세미나 세션",
    },
  ];

  return (
    <SeminarDiv>
      <FirstCard>
        <Header4>프로덕트 메이킹의 기반</Header4>
        <Box />
        <Body2_1>PARD는 기본에 충실합니다.</Body2_1>
        <Body2>
          {/* 이렇게 할 시 영상과 길이가 다름 */}
          IT 프로덕트를 완성하기 위해 필요한 지식을 서로 공유하고, 기술적으로
          성장할 수 있도록 돕습니다. 파트별 전문가나 선배들의 초밀착 멘토링을
          통해, 실무에서 활용할 수 있는 팁과 노하우를 배웁니다.
        </Body2>
      </FirstCard>
      {cardData.map((content) => (
        <Card key={content.id}>
          <CardImage src={content.image} alt={`Card ${content.id}`} />
          <CardContent>
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}
    </SeminarDiv>
  );
}

export default ProgramSeminar;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const Body2_1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #64c59a;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const SeminarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 310px; //원래 크기 310px;
  height: 370px; //원래 크기 370px;
  margin-right: 40px;
  background-color: #d9d9d9;
  border-radius: 20px 20px 20px 20px;
`;
const FirstCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 339px;
  height: 370px;
  border-radius: 20px 20px 20px 20px;
  margin-right: 70px;
  background-color: #1a1a1a;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  height: 20%;
  background-color: #64c59a;
  border-radius: 0px 0px 20px 20px;
`;

const CardImage = styled.img`
  // object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
`;

const Box = styled.div`
  width: 100%;
  height: 60%;
  background-color: #1a1a1a;
`;
