import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Div = styled.div`
display: flex;
justify-content: center;
background : #FFFFFF;
align-items: center;
`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: black;
  font-family: 'NanumSquare Neo';
  line-height: 140%;
  margin-bottom: 109px;
  white-space: pre-line;
  `;

const PartDiv = styled.div`
  padding-left:36px;
  padding-top: 180px;
  width: 375px;
  height: 1128px;
  position: relative;
`;

const Cover = styled.div`
display: flex;
`;

const Down1 = styled.div`
margin-top: 3px;
display: flex;
`;

const Down2 = styled.div`
margin-top: 3px;
display: flex;
`;

const First = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${props => props.theme.fontWeights.Header7};
  margin-right: 32px;
  margin-bottom: 9px;
`;

const Second = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${props => props.theme.fontWeights.Header7};
  margin-right: 29px;
  margin-bottom: 9px;
`;

const Third = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${props => props.theme.fontWeights.Header7};
  margin-right: 28px;
  margin-bottom: 9px;
`;

const Mainblack = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
font-weight: ${props => props.theme.fontWeights.Header5};
white-space:pre-wrap;
display: flex;
`;

const Mainorange = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
font-weight: ${props => props.theme.fontWeights.Header5};
color: #FF5C00;
white-space:pre-wrap;
display: flex;
`;

const Subblack1 = styled.div`
font-size: ${props => props.theme.Mob_fontSizes.Body2};
font-weight: ${props => props.theme.fontWeights.Body2};
display: flex;
  color: black;
  line-height: 160%;
  margin-top: 17px;
`;


const Verticalline1 = styled.div`
margin-left: 10px;
border: 1px solid #FF5C00;
height: 141px;
width: 0px;
margin-right: 42px;
margin-bottom: 70px;
`;

const Verticalline2 = styled.div`
margin-left: 10px;
border: 1px solid #FF5C00;
height: 185px;
width: 0px;
margin-right: 42px;
margin-bottom: 70px;
`;

const Verticalline3 = styled.div`
margin-left: 10px;
border: 1px solid #FF5C00;
height: 205px;
width: 0px;
margin-right: 42px;
margin-bottom: 43px;
`;

const Textbox1 = styled.div`
display: flex;
height: 44px;
width: 229px;
`;

function AboutVision_Mob() {

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드의 비전</Header7>
          <Cover>
            <Down1>
              <First>01</First>
            </Down1>
            <Mainblack>파드는 </Mainblack>
            <Mainorange>몰입이 필요한 동아리 </Mainorange>
            <Mainblack>입니다.</Mainblack>
          </Cover>
          <Cover>
            <Verticalline1></Verticalline1>
            <Subblack1>파드는 단순한 지식 습득과 프로젝트<br></br> 경험을 위한 동아리가 아닙니다.<br></br>
              혼자보다는 함께 성장에 대한 끊임없는<br></br> 열망을 가지고 <br></br>
              서비스 기획-디자인-개발 과정을 거쳐 <br></br>완성도 높은 서비스를 만들어 냅니다.</Subblack1>
          </Cover>


          <Cover>
            <Down2>
              <Second>02</Second>
            </Down2>

            <Textbox1>
            <Mainorange>좋은 협업</Mainorange>
            <Mainblack>이란 무엇인지 끊임없이<br></br>함께 고민합니다.</Mainblack>
          </Textbox1>
          </Cover>

          <Cover>
            <Verticalline2></Verticalline2>
            <Subblack1>단순히 일을 잘 분배하고 최선을 다한다는<br></br>것이 협업의 전부라고 생각하지 않습니다.<br></br>
              모두가 공감하는 목표를 추구하고,<br></br>모든 의견과 피드백은 선명한 솔직함에 <br></br>기반하며,
              모자란 점을 투명하게 공유하고,<br></br>함께 보완하는 것이 진짜 협업이라고<br></br>믿고 실천합니다.</Subblack1>
          </Cover>
          <Cover>
            <Down2>
              <Third>03</Third>
            </Down2>
            <Mainblack>현업 실무진 분들과<br></br></Mainblack>
            <Mainorange> 함께 성장하는 커뮤니티</Mainorange>
            <Mainblack>를 꿈꿉니다.</Mainblack>
          </Cover>
          <Cover>
            <Verticalline3></Verticalline3>
            <Subblack1>동아리원 소속 대학의 알럼나이 분들과<br></br> 대학 재학생들을 잇는 교두보 역할을<br></br>수행합니다.<br></br>
              동아리원들은 실무자 분들로부터 현실적인<br></br> 조언을 구하고 성장합니다.<br></br>
              Pay it forward에 공감하는 사람들이 <br></br>모여 교류하고 소통함으로 IT 생태계를 <br></br>확장 합니다.</Subblack1>
          </Cover>



        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutVision_Mob;