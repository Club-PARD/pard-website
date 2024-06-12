import styled from "styled-components";
import news1 from "../../../assets/img/news_page/news1.png";
import news2 from "../../../assets/img/news_page/news2.png";
import arrow from "../../../assets/img/news_page/right_arrow.png";
import blue_line from "../../../assets/img/news_page/blue_line.png";

const news = [
  {
    id: 1,
    date: "2024년 6월 10일",
    title:
      "2기 iOS 파트 이신원, 수천명 경쟁뚫고\n팀 쿡 만났다, 한국 대학생 개발자가 선보인 앱",
    description:
      "수천건의 작품 중 총 350개 작품이 수상했고, 그 중 50개가 ‘우수작’으로 선정... 쿡 CEO,\n“이 학생의 제품이 특히 인상적”이라며 “앞으로 그가 보여줄 새로운 아이디어도 기대된다”고 했다.",
    url: "https://www.chosun.com/economy/tech_it/2024/06/10/UJWXOOESWFHBZN6PR3RU3RI3GY/",
    img: news1,
  },
  {
    id: 2,
    date: "2023년 12월 28일",
    title: "2기 운영진, ‘임팩트 캠퍼스 IT 서비스 공모전‘\n대상ㆍ우수상 수상",
    description:
      "이브(EVE)팀은 장애인의 관광 접근성 불등을 해소하기 위한 무장애 여행 정보 웹서비스(무블)\n로 대상을 수상했다. 우수상을 수상한 라이트유(Light you)팀은 시각장애인들을 위한 대체자료\n구매 플랫폼(점차점자)을 소개했다. ",
    url: "https://www.joongang.co.kr/article/25218287#home",
    img: news2,
  },
];

export default function NewsMain() {
  return (
    <MainWrapper>
      <MainContainer>
        <Title>Newsroom</Title>
        {news.map((item) => {
          return (
            <NewsContainer key={item.id}>
              <LeftContent>
                <p className="date">{item.date}</p>
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <UrlContainer>
                  <a className="url" href={item.url}>
                    기사 원문 확인하기
                  </a>
                  <img src={arrow} />
                </UrlContainer>
              </LeftContent>
              <RightContent>
                <img src={item.img} />
              </RightContent>
            </NewsContainer>
          );
        })}
      </MainContainer>
      <Separator src={blue_line} />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 1072px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: start;
  font-family: "NanumSquare Neo";
  font-style: normal;
  color: #ffffff;
  margin: 100px 0px 60px 0px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 246px; */
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 624px;
  margin-right: 32px;

  .date {
    font-size: 16px;
    margin: 0px 0px 10px 0px;
    line-height: 140%;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;
    line-height: 140%;
    white-space: pre-wrap;
  }
  .description {
    font-size: 14px;
    font-weight: 200;
    margin: 30px 0px 30px 0px;
    line-height: 140%;
    white-space: pre-wrap;
  }
`;

const UrlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 94px;
  text-align: s;
  .url {
    text-decoration-line: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    margin: 0px 20px 0px 0px;
    line-height: 140%;
  }
  img {
    width: 11px;
    height: 17px;
  }
`;

const RightContent = styled.div`
  img {
    width: 416px;
    height: 230px;
  }
`;

const Separator = styled.img`
  width: 100%;
  display: block;
  margin-top: 40px;
  /* position: relative; */
`;
