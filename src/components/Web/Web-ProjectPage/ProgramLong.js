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
  color: #7b3fef;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const LongDiv = styled.div`
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
  width: 323px;
  height: 320px;
  border-radius: 20px 20px 20px 20px;
  margin-right: 60px;
  margin-left: 40px;
  background-color: #1a1a1a;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 86%; //margin-bottom 안먹는 이유
  height: 20%;
  background-color: #7b3fef;
  border-radius: 0px 0px 20px 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 55%;
  background-color: #1a1a1a;
`;

function ProgramLong() {
  const cardData = [
    {
      id: 1,
      description: "파트 상관없이 누구나 아이디어를\n제시하고 설득하여 팀 빌딩",
    },
    {
      id: 2,
      description: "3주간 현업 실무진들의 밀착\n멘토링과 함께 프로젝트 설계",
    },
    {
      id: 3,
      description:
        "심사위원, 멘토, 청중과 함께\n찐한 협업의 결과물을 나누는 데모데이",
    },
  ];

  return (
    <LongDiv>
      <FirstCard>
        <Header4>배포 가능한 서비스 설계</Header4>
        <Box />
        <Body2_1>PARD는 반드시 목표를 함께 이루어 냅니다.</Body2_1>
        <Body2>
          아이디어 검증 부터 서비스 런칭까지,<br></br>
          모든 파트가 한 팀을 이루어 3주간 서비스를 완성합니다.<br></br>
          파드 활동의 꽃 데모데이를 통해 깊은 피드백을 받으며<br></br>
          효과적으로 회고하고 성장합니다.
        </Body2>
      </FirstCard>
      {cardData.map((content) => (
        <Card key={content.id}>
          <CardContent key={content.id}>
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}
    </LongDiv>
  );
}

export default ProgramLong;
