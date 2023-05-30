import styled, { ThemeProvider } from "styled-components";
import img1 from '../../../assets/img/서핑데이1.png';
import img2 from '../../../assets/img/서핑데이2.png';
import img3 from '../../../assets/img/서핑데이3.png';

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
  color: #FF5C00;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const SurfingDiv = styled.div`
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
  width: 320px;
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
  background-color: #FF5C00;
  border-radius: 0px 0px 20px 20px;
`;

const CardImage = styled.img`
  // object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  width: 100%;
  height: 70%;
  background-color: #1a1a1a;
`;

function ProgramSurfing() {
  const cardData = [
    {
      id: 1,
      image: img1,
      description: "관계를 쌓고, 서로를 이해할 수 있는\n레크레이션 및 워크샵 진행",
    },
    {
      id: 2,
      image: img2,
      description: "조직문화 코칭 전문 회사에\n검수받은 자체 개발 프로그램 보유",
    },
    {
      id: 3,
      image: img3,
      description: "진짜 협업이란 무엇인지에 대한 깊은 토의",
    },
  ];

  return (
    <SurfingDiv>
      <FirstCard>
        <Header4>진짜 협업의 시작</Header4>
        <Box />
        <Body2_1>PARD는 조직 문화의 힘을 신뢰합니다.</Body2_1>
        <Body2>
          1박 2일의 워크샵을 통해 구성원들이 생각하는<br></br>
          협업의 정의를 묻고, 좋은 협업을 위한<br></br>
          커뮤니케이션에 대해 다함께 고민합니다. 
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
    </SurfingDiv>
  );
}

export default ProgramSurfing;
