import styled, { ThemeProvider } from "styled-components";

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
  width: 280px; //원래 크기 310px;
  height: 300px; //원래 크기 370px;
  margin-right: 30px;
  background-color: #d9d9d9;
  border-radius: 20px 20px 20px 20px;
`;
const FirstCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 339px;
  height: 320px;
  border-radius: 20px 20px 20px 20px;
  margin-right: 60px;
  margin-left: 110px; 
  background-color: #1a1a1a;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 86%; //margin-bottom 안먹는 이유
  height: 20%;
  background-color: #64c59a;
  border-radius: 0px 0px 20px 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 50%;
  background-color: #1a1a1a;
`;

function ProgramSeminar() {
  const cardData = [
    {
      id: 1,
      description: "8주간 직무별 역량 강화를 위해\n진행하는 파트별 세미나 세션",
    },
    {
      id: 2,
      description: "탄탄한 커리큘럼으로 이루어진\n이론과 실습 진행",
    },
    {
      id: 3,
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
          IT 프로덕트를 완성하기 위해 필요한 지식을 서로<br></br>
          공유하고, 기술적으로 성장할 수 있도록 돕습니다.<br></br>
          파트 별 전문가나 선배들의 초밀착 멘토링을 통해,<br></br>
          실무에서 활용할 수 있는 팁과 노하우를 배웁니다.
        </Body2>
      </FirstCard>
      {cardData.map((content) => (
        <Card key={content.id}>
          <CardContent key={content.id}>
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}
    </SeminarDiv>
  );
}

export default ProgramSeminar;
