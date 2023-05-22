import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import AboutImage from '../../../assets/img/AboutLogo.png';
import ProgramFrame from '../../../assets/img/Program_Mob_Bar.png';



const PartDiv = styled.div`
  height: 756px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  background-color: #1A1A1A;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  align-items: center;
`;



function ProjectLast_Mob() {
    return (
        <Div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <h1>asdfasdfas</h1>
                </ThemeProvider>
            </PartDiv>
        </Div>
    );
}

export default ProjectLast_Mob;
