import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import ProgramSeminar_Mob from "../Mob-ProjectPage/ProgramSeminar_Mob";
import ProgramStudy_Mob from "../Mob-ProjectPage/ProgramStudy_Mob";
import ProgramSurfing_Mob from "../Mob-ProjectPage/ProgramSurfing_Mob";
import ProgramShort_Mob from "../Mob-ProjectPage/ProgramShort_Mob";
import ProgramLong_Mob from "../Mob-ProjectPage/ProgramLong_Mob";

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
