import styled, { ThemeProvider } from "styled-components";
import { useRef, useState } from "react";
import { theme } from "../../../styles/theme";
import ProgramSeminar from "./ProgramSeminar";
import ProgramStudy from "./ProgramStudy";
import ProgramSurfing from "./ProgramSurfing";
import ProgramShort from "./ProgramShort";
import ProgramLong from "./ProgramLong";

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 3vw;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
`;

const PartDiv = styled.div`
  padding-left: 5.5556vw;
  padding-right: 5.5556vw;
  padding-top: 2.9861vw;
  height: 62vw;
`;
const PartDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
`;

function ProgramsTrain() {
  const headerRef = useRef(null);
  const [seminarHeader, setSeminarHeader] = useState("세미나");
  const [visible, setVisible] = useState(true);
  const seminarHeaders = ["세미나", "스터디", "서핑데이", "숏커톤", "롱커톤"];

  const handleScroll = () => {
    const scrollPosition = PartDiv2.current.scrollLeft;
    const width = PartDiv2.current.getBoundingClientRect().width;
    const one = width / 1.2;
    const two = one * 2.3;
    const three = one * 3.8;
    const four = one * 5.2;

    let newHeader = "";
    if (scrollPosition <= one) {
      newHeader = seminarHeaders[0];
    } else if (scrollPosition > one && scrollPosition <= two) {
      newHeader = seminarHeaders[1];
    } else if (scrollPosition > two && scrollPosition <= three) {
      newHeader = seminarHeaders[2];
    } else if (scrollPosition > three && scrollPosition <= four) {
      newHeader = seminarHeaders[3];
    } else {
      newHeader = seminarHeaders[4];
    }

    if (newHeader !== seminarHeader) {
      setVisible(false);
      setTimeout(() => {
        setSeminarHeader(newHeader);
        setVisible(true);
      }, 600);
    }
  };

  return (
    <div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header2 ref={headerRef} visible={visible}>
            {seminarHeader}
          </Header2>
          <PartDiv2 ref={PartDiv2} onScroll={handleScroll}>
            <ProgramSeminar />
            <ProgramStudy />
            <ProgramSurfing />
            <ProgramShort />
            <ProgramLong />
          </PartDiv2>
        </ThemeProvider>
      </PartDiv>
    </div>
  );
}

export default ProgramsTrain;
