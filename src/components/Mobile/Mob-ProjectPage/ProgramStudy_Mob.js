import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from 'react';
import img1 from "../../../assets/img/스터디1.png";
import img2 from "../../../assets/img/스터디2.png";
import img3 from "../../../assets/img/스터디3.png";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import Bar from "../../../assets/img/스터디Frame.png";

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
  color: #5262F5;
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
  margin-top: auto;
  height: 20%;
  background-color: #5262F5;
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

function ProgramStudy_Mob() {
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
            description: "전공, 파트, 나이와 상관없이\n 원하면 누구나 모여 학습",
        },
        {
            id: 2,
            image: img2,
            description: "협업, AI, 3D 디자인 툴, 글쓰기,\n 스포츠 까지 다양한 주제로 진행",
        },
        {
            id: 3,
            image: img3,
            description: "Pay it forward 실천을 위한\n스터디 결과물 전체 공유",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <SeminarDiv>
                <Header7_1></Header7_1>
                <Header7_2>스터디</Header7_2>
                <Header4>공동체 학습의 기쁨 </Header4>
                <Body2_1>PARD는 상시 학습이 흐르는 조직입니다.</Body2_1>
                <Body2>
                    주제 선정부터 인원모집까지,<br></br>
                    서로의 실력을 향상시킬 수 있는 학습 모임을<br></br>
                    자발적으로 주도하고 참여하여 나눕니다.
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

export default ProgramStudy_Mob;
