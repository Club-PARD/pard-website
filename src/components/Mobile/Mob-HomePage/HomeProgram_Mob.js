import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import ProgramSeminar_Mob from '../Mob-ProjectPage/ProgramSeminar_Mob';
import ProgramStudy_Mob from '../Mob-ProjectPage/ProgramStudy_Mob';
import ProgramSurfing_Mob from '../Mob-ProjectPage/ProgramSurfing_Mob';
import ProgramShort_Mob from '../Mob-ProjectPage/ProgramShort_Mob';
import ProgramLong_Mob from '../Mob-ProjectPage/ProgramLong_Mob';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
    height: 3000px;
    display: flex;
    flex-direction: column;
`;


function HomeProgramMob() {

    return (
       
             <ThemeProvider theme={theme}>
            
            <ProgramSeminar_Mob />
            <ProgramStudy_Mob />
            <ProgramSurfing_Mob />
            <ProgramShort_Mob />
            <ProgramLong_Mob />
           
            </ThemeProvider>
        
       
    );
}

export default HomeProgramMob;