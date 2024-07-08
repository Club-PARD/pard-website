import styled from "styled-components";
import ProgramSeminar from "./ProgramSeminar";
import ProgramStudy from "./ProgramStudy";
import ProgramSurfing from "./ProgramSurfing";
import ProgramShort from "./ProgramShort";
import ProgramLong from "./ProgramLong";

function ProgramsTrain2() {
  return (
    <Div>
      <ProgramSeminar />
      <ProgramStudy />
      <ProgramSurfing />
      <ProgramShort />
      <ProgramLong />
    </Div>
  );
}
export default ProgramsTrain2;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
