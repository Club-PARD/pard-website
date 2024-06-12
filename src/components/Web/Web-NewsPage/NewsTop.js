import styled from "styled-components";
import top_logo from "../../../assets/img/news_page/news_pard_logo.png";
import scroll from "../../../assets/img/news_page/scroll.png";
import blue_line from "../../../assets/img/news_page/blue_line.png";

export default function NewsTop() {
  return (
    <TopContainer>
      <Image src={top_logo} />
      <TextContainer>
        <div className="main">PARD를 통해 성장한</div>
        <div className="main">열매들을 만나보세요</div>
        <p>PARD 구성원들이 만들어나가는 성과들을 기록합니다.</p>
      </TextContainer>
      <Scroll src={scroll} />
      <Separator src={blue_line} />
    </TopContainer>
  );
}

const TopContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Image = styled.img`
  /* max-width: 250px; */
  width: 1072px;
  height: 228px;
  display: block;
  margin-top: 223px;
  position: absolute;
`;

const Scroll = styled.img`
  /* max-width: 250px; */
  width: 80px;
  height: 63px;
  display: block;
  margin-top: 158px;
  position: relative;
`;

const Separator = styled.img`
  width: 100vw;
  display: block;
  margin-top: 40px;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 253px;
  z-index: 999;
  font-family: "NanumSquare Neo";
  font-style: normal;
  color: #ffffff;

  .main {
    font-weight: 700;
    font-size: 60px;
    line-height: 140%;
  }

  p {
    margin-top: 40px;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
  }
`;
