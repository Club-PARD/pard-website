import styled, { ThemeProvider } from "styled-components";
import img1 from '../../../assets/img/스터디1.png';
import img2 from '../../../assets/img/스터디2.png';
import img3 from '../../../assets/img/스터디3.png';

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
  color: #5262F5;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 160%;
  display: flex;
`;

const StudyDiv = styled.div`
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
  background-color: #5262F5;
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
  height: 70%;
  background-color: #1a1a1a;
`;

function ProgramStudy() {
  const cardData = [
    {
      id: 1,
      image: img1,
      description: "전공, 파트, 나이와 상관없이\n 원하면 누구나 모여 학습",
    },
    {
      id: 2,
      image: img2,
      description: "협업, AI, 3D 디자인 툴, 글쓰기,\n 스포츠까지 다양한 주제로 진행",
    },
    {
      id: 3,
      image: img3,
      description: "Pay it forward 실천을 위한\n스터디 결과물 전체 공유",
    },
  ];

  return (
    <StudyDiv>
      <FirstCard>
        <Header4>공동체 학습의 기쁨</Header4>
        <Box />
        <Body2_1>PARD는 상시 학습이 흐르는 조직입니다.</Body2_1>
        <Body2>
          주제 선정부터 인원 모집까지,<br></br>
          서로의 실력을 향상시킬 수 있는 학습 모임을<br></br>
          자발적으로 주도하고 참여하여 나눕니다. 
        </Body2>
      </FirstCard>
      {cardData.map((content) => (
        <Card key={content.id}>
          <CardImage src={content.image} alt={`Card ${content.id}`} />
          <CardContent >
            <Body2 style={{ textAlign: "center" }}>{content.description}</Body2>
          </CardContent>
        </Card>
      ))}
    </StudyDiv>
  );
}

export default ProgramStudy;
