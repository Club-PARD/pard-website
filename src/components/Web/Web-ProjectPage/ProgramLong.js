import styled, { ThemeProvider } from "styled-components";
import img1 from '../../../assets/img/롱커톤1.png';
import img2 from '../../../assets/img/롱커톤2.png';
import img3 from '../../../assets/img/롱커톤3.png';

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
  width: 310px; //원래 크기 310px;
  height: 370px; //원래 크기 370px;
  margin-right: 40px;
  border-radius: 20px 20px 20px 20px;
`;

const FirstCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 348px;
  height: 370px;
  border-radius: 20px 20px 20px 20px;
  margin-right: 30px;
  margin-left: 80px; 
  background-color: #1a1a1a;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  height: 20%;
  background-color: #7b3fef;
  border-radius: 0px 0px 20px 20px;
`;

const CardImage = styled.img`
  // width: ${(props) => (props.isCover ? 'auto' : '100%')};
  // height: ${(props) => (props.isCover ? 'auto' : '100%')};
  // object-fit: ${(props) => (props.isCover ? 'cover' : 'none')};
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
`;

const Box = styled.div`
  width: 100%;
  height: 70%;
  background-color: #1a1a1a;
`;

function ProgramLong() {
  const cardData = [
    {
      id: 1,
      image: img1,
      description: "파트 상관없이 누구나 아이디어를\n제시하고 설득하여 팀 빌딩",
    },
    {
      id: 2,
      image: img2,
      description: "3주간 현업 실무진들의 밀착\n멘토링과 함께 프로젝트 설계",
    },
    {
      id: 3,
      image: img3,
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
      {cardData.map((content, index) => (
        <Card key={content.id} style={{ marginRight: index === cardData.length - 1 ? 0 : '40px' }}>
          <CardImage src={content.image} alt={`Card ${content.id}`} isCover={content.id === 1} />
          <CardContent key={content.id}>
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}

    </LongDiv>
  );
}

export default ProgramLong;
