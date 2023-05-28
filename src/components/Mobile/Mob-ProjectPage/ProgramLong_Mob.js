import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState } from 'react';
import img1 from "../../../assets/img/롱커톤1.png";
import img2 from "../../../assets/img/롱커톤2.png";
import img3 from "../../../assets/img/롱커톤3.png";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import Bar from "../../../assets/img/숏_롱Frame.png";

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
  color: #7B3FEF;
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
  background-color: #7B3FEF;
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

function ProgramLong_Mob() {
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
        <ThemeProvider theme={theme}>
            <SeminarDiv>
                <Header7_1></Header7_1>
                <Header7_2>롱커톤</Header7_2>
                <Header4>배포 가능한 서비스 설계</Header4>
                <Body2_1>PARD는 반드시 목표를 함께 이루어 냅니다.</Body2_1>
                <Body2>
                아이디어 검증 부터 서비스 런칭까지, 모든 파트가<br></br>
                한 팀을 이루어 3주간 서비스를 완성합니다.<br></br> 
                파드 활동의 꽃 데모데이를 통해 깊은 피드백을<br></br> 
                받으며 효과적으로 회고하고 성장합니다.
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

export default ProgramLong_Mob;
