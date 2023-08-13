import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import AboutFrame from '../../../assets/img/About_Mob_Bar_Last.png';

import React from 'react';

const PartDiv = styled.div`
    height: 500px;
    width: 375px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-content: center;
    margin: 0 auto;
    /* position: relative; */
`;

const Div = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  background : #FFFFFF;
  align-items: center;
  width: 100%;  

`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 58px;
  white-space: pre-line;
  text-align : center;
  /* margin-top: 100px; */
  `;

const Shape1 = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Header4};
font-weight: ${props => props.theme.fontWeights.Header4};
font-family: 'NanumSquare Neo';
line-height: 53px;
width:13px;
height:33px;
display: flex;
color: #FF5C00;
margin-right: 288px;
`;

const Shape2 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:13px;
  height:33px;
  display: flex;
  color: #FF5C00;
`;

const Line = styled.div`
  display:flex;
`;

const Header6 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 18px;
  white-space: pre-line;
  text-align : center;

  `;

const Comment = styled.div`
  width:104px;
  height: 18px;
  font-size: 10px;
  font-weight: 400;
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  white-space: pre-line;
  text-align : center;
  margin-bottom: 75px;
  `

const Button1 = styled.button`
    font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
    font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 34px;
    width: 220px;
    height: 52px;
    background-color: #FF5C00;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    cursor: pointer;
  `

const AboutFrame1 = styled.img`
    height: 40px;
    width: 100%;
    border-radius: 0px;
    margin-top: 160px;
  `
  ;

function AboutLast_Mob() {
  const handleClick = () => {
    window.open("https://forms.gle/oXnAxHnAgSnCEarg7", "_blank");
  };
  return (
    <Div>
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>진짜 협업<br></br>함께 경험해봐요</Header7>
        <Line>
          <Shape1>"</Shape1>
          <Shape2>"</Shape2>
        </Line>
        <Header6>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도<br></br>선수들의 역량이에요</Header6>
        <Comment>송민 KBS 서핑 해설위원</Comment>
        <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1>
      </ThemeProvider>
    </PartDiv>
    <AboutFrame1 src={AboutFrame} alt="AboutFrame" />
    </Div>
  );
}

export default AboutLast_Mob;