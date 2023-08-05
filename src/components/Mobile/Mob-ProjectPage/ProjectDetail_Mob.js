import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import AboutImage from '../../../assets/img/AboutLogo.png';
import ProgramFrame from '../../../assets/img/Program_Mob_Bar.png';



const PartDiv = styled.div`

  position: relative;
  width: 100%;
  height: 872px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */


  background-image: url(${require('../../../assets/img/ProjectLastMov.png')});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
const Header7 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header7};
    font-weight: ${props => props.theme.fontWeights.Header7};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 140%;
    margin-top: 550px;
    text-align : center;
`;

const LogoDiv = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 180px;
    margin-top: 200px;
    justify-content: space-between;
`
const ArrowLogo = styled.img`
    width: 40px;
    height: 60px;
    /* margin-left: 100px;
    margin-right: 100px; */
    margin : 0 35px; 
   
`



function ProjectDetail_Mob() {
    return (
        <Div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <Header7>
                        PARD의 첫 프로젝트를<br/>웹에서 확인해주세요!
                    </Header7>
                    <LogoDiv>
                        <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
                        <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
                        <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
                    </LogoDiv>
                </ThemeProvider>
            </PartDiv>
        </Div>
    );
}

export default ProjectDetail_Mob;






