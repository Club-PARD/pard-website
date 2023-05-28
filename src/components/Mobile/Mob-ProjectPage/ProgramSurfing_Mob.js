import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from 'react';
import img1 from "../../../assets/img/서핑데이1.png";
import img2 from "../../../assets/img/서핑데이2.png";
import img3 from "../../../assets/img/서핑데이3.png";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import Bar from "../../../assets/img/서핑데이Frame.png";

const Header7_1 = styled.div`
    font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
    font-weight: ${(props) => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    justify-content: start; 
    white-space: pre-line;
    margin-top: 70px;
`;

const Header7_2 = styled.div`
    font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
    font-weight: ${(props) => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    justify-content: start; 
    white-space: pre-line;
    margin-top: 70px;
`;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  margin-top: 50px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  line-height: 160%;
  display: flex;
`;

const Body2_1 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #FF5C00;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  justify-content: start; 
  line-height: 160%;
  display: flex;
  margin-top: 30px;
`;

const SeminarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 907px;
`;

const CardnBtn = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    height: 360px;
`;

const Card = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex: 0 0 auto;
  flex-direction: column;
  width: 330px;
  height: 370px;
  background-color: #d9d9d9;
  border-radius: 20px 20px 20px 20px;
  margin-top: 50px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  background-color: #FF5C00;
  border-radius: 0px 0px 20px 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
`;

const Div_button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
 `;

const VectorLeft = styled.img`
    width: auto;
    height: auto;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const VectorRight = styled.img`
    width: auto;
    height: auto;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Seminar_Bar = styled.img`
    width: 100%;
    height: auto; 
    margin-top: 50px;
    margin-bottom: auto;
`;

function ProgramSurfing_Mob() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handlePrevCard = () => {
        if (activeCardIndex === 0) {
            return;
        }
        setActiveCardIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
    };

    const handleNextCard = () => {
        if (activeCardIndex === 2) {
            return;
        }
        setActiveCardIndex((prevIndex) => prevIndex + 1);
    };

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
        <ThemeProvider theme={theme}>
            <SeminarDiv>
                <Header7_1></Header7_1>
                <Header7_2>서핑데이</Header7_2>
                <Header4>진짜 협업의 시작</Header4>
                <Body2_1>PARD는 조직 문화의 힘을 신뢰합니다.</Body2_1>
                <Body2>
                1박 2일의 워크샵을 통해 구성원들이 생각하는<br></br>
                협업의 정의를 묻고, 좋은 협업을 위한<br></br>
                커뮤니케이션에 대해 다함께 고민합니다.
                </Body2>
                <CardnBtn>
                    {cardData.map((content, index) => (
                        <Card key={content.id} active={activeCardIndex === index}>
                            <CardImage key={content.id} src={content.image} alt={`Card ${content.id}`} />
                            <CardContent key={content.id}>
                                <Body2 style={{ textAlign: 'center' }}>{content.description}</Body2>
                            </CardContent>
                        </Card>
                    ))}
                    <Div_button>
                        <VectorLeft
                            onClick={handlePrevCard}
                            src={Vector_white_left}
                            alt="Left Arrow"
                            disabled={activeCardIndex === 0}
                        />
                        <VectorRight
                            onClick={handleNextCard}
                            src={Vector_white_right}
                            alt="right Arrow"
                            disabled={activeCardIndex === 2}
                        />
                    </Div_button>
                </CardnBtn>
            </SeminarDiv>
            <Seminar_Bar src={Bar} alt="Bar" />
        </ThemeProvider>
    );
}

export default ProgramSurfing_Mob;
