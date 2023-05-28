import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from 'react';
import img1 from "../../../assets/img/세미나1.png";
import img2 from "../../../assets/img/세미나2.png";
import img3 from "../../../assets/img/세미나3.png";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import Bar from "../../../assets/img/세미나Frame.png";

const Header7_1 = styled.div`
    font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
    font-weight: ${(props) => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    justify-content: start; 
    white-space: pre-line;
    margin-top: 5px;
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
  color: #64c59a;
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
  background-color: #64c59a;
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

function ProgramSeminar_Mob() {
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
            description: "8주간 직무별 역량 강화를 위해\n진행하는 파트별 세미나 세션",
        },
        {
            id: 2,
            image: img2,
            description: "탄탄한 커리큘럼으로 이루어진\n이론과 실습 진행",
        },
        {
            id: 3,
            image: img3,
            description: "타 직군에 대해 이해하고\n함께 성장하는 연합 세미나 세션",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <SeminarDiv>
                <Header7_1>PROGRAMS</Header7_1>
                <Header7_2>세미나</Header7_2>
                <Header4>프로덕트 메이킹의 기반</Header4>
                <Body2_1>PARD는 기본에 충실합니다.</Body2_1>
                <Body2>
                    IT 프로덕트를 완성하기 위해 필요한 지식을 서로 공유하고,<br></br>
                    기술적으로 성장할 수 있도록 돕습니다.<br></br>
                    파트 별 전문가나 선배들의 초밀착 멘토링을 통해, <br></br>
                    실무에서 활용할 수 있는 팁과 노하우를 배웁니다.
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

export default ProgramSeminar_Mob;
