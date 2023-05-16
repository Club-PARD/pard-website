import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const PartDiv = styled.div`
    padding-left: 18.5px;
    height: 700px;
    width: 375px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* position: relative; */
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
margin-left: -18.5px;
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
  margin-left: -18.5px;

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
  margin-bottom: 96px;
  margin-left: -18.5px;
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
    margin-top: 15px;
    margin-bottom: 168px;
    margin-left: -18.5px;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
  `
const Bottom = styled.div`
margin-right: 18.5px;
  width: 393.5px;
  height: 40px;
  background: #FF5C00;
`

const Vector1 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: 29px;
  margin-top: 10px;
`

const Vector2 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: -10px;
  margin-top: 10px;
`

const Vector3 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: 119.5px;
  margin-top: 10px;
`

const Vector4 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: -10px;
  margin-top: 10px;
`

const Vector5 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: 123px;
  margin-top: 10px;
`

const Vector6 = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  margin-left: -10px;
  margin-top: 10px;
`

const StyledPath = styled.path`
  stroke: white;
`;

function AboutLast_Mob() {

  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>진짜 협업<br></br>함께 경험해봐요</Header7>
        <Line>
          <Shape1>"</Shape1>
          <Shape2>"</Shape2>
        </Line>
        <Header6>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도<br></br>선수들의 역량이에요</Header6>
        <Comment>송민 KBS 서핑 해설위원</Comment>
        <Button1>지금 바로 2기 지원하기</Button1>
        <Bottom>
          <Vector1 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 0.5L10.3088 0.5L0.80901 19.5H9.69077L19.1906 0.5Z" />
          </Vector1>
          <Vector2 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 19.5H10.3088L0.80901 0.500002H9.69077L19.1906 19.5Z" />
          </Vector2>
          <Vector3 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 0.5L10.3088 0.5L0.80901 19.5H9.69077L19.1906 0.5Z" />
          </Vector3>
          <Vector4 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 19.5H10.3088L0.80901 0.500002H9.69077L19.1906 19.5Z" />
          </Vector4>
          <Vector5 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 0.5L10.3088 0.5L0.80901 19.5H9.69077L19.1906 0.5Z" />
          </Vector5>
          <Vector6 width="20" height="20" viewBox="0 0 20 20">
            <StyledPath d="M19.1906 19.5H10.3088L0.80901 0.500002H9.69077L19.1906 19.5Z" />
          </Vector6>
        </Bottom>
      </ThemeProvider>
    </PartDiv>
  );
}

export default AboutLast_Mob;