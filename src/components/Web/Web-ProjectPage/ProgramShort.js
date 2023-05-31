import styled, { ThemeProvider } from "styled-components";
import img1 from '../../../assets/img/숏커톤1.png';
import img2 from '../../../assets/img/숏커톤2.png';
import img3 from '../../../assets/img/숏커톤3.png';

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
  color: #7B3FEF;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const ShortDiv = styled.div`
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
  background-color: #7B3FEF;
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

function ProgramShort() {
  const cardData = [
    {
      id: 1,
      image: img1,
      description: "Design Thinking을 통한\n빠른 의사결정 및 MVP 제작",
    },
    {
      id: 2,
      image: img2,
      description: "다양한 협업 방법론을 적용하면서\n더 나은 커뮤니케이션을 위한 회고",
    },
    {
      id: 3,
      image: img3,
      description: "문제 해결부터 리소스 관리까지의\n프로젝트 매니징 경험",
    },
  ];

  return (
    <ShortDiv>
      <FirstCard>
        <Header4>빠른 실패와 검증</Header4>
        <Box />
        <Body2_1>PARD는 빠르고 작은 성공을 수집합니다.</Body2_1>
        <Body2>
          무박 2일 간의 해커톤을 통해<br></br>
          기획자, 디자이너, 개발자가 함께 소통하여<br></br>
          최소 기능 제품을 구현하며<br></br>
          제품 개발 협업의 첫발을 내딛습니다.
        </Body2>
      </FirstCard>
      {cardData.map((content) => (
        <Card key={content.id}>
         <CardImage src={content.image} alt={`Card ${content.id}`} isCover={content.id === 3} />
          <CardContent >
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}
    </ShortDiv>
  );
}

export default ProgramShort;
