import styled, { keyframes } from "styled-components";
import img1 from "../../../assets/img/surf_1.png";
import img2 from "../../../assets/img/surf_2.png";
import img3 from "../../../assets/img/surf_3.png";
import img4 from "../../../assets/img/surf_4.png";
import img5 from "../../../assets/img/surf_5.png";

// 스크롤 애니메이션
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* 100% 만큼 왼쪽으로 이동 */
  }
`;

function ProgramSeminar() {
  const cardData = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
  ];

  return (
    <SeminarDiv>
      <ScrollContainer>
        {cardData.map((content) => (
          <Card key={content.id}>
            <CardImage src={content.image} alt={`Card ${content.id}`} />
          </Card>
        ))}
      </ScrollContainer>
    </SeminarDiv>
  );
}

export default ProgramSeminar;

const SeminarDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden; /* 내용이 넘치지 않도록 숨김 */
  width: 100%; /* 컨테이너 너비 설정 */
`;

const ScrollContainer = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite; /* 30초마다 스크롤 애니메이션 반복 */
  animation-delay: 1s;
`;

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 330px;
  height: 304px;
  margin-right: 40px;
  border-radius: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;