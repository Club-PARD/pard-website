import styled, { ThemeProvider, css } from "styled-components";
import { useRef, useState } from "react";
import { theme } from "../../../styles/theme";
import { useEffect } from "react";
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
const Header2_1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 3vw;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartDiv3 = styled.div`
  display: flex;
  flex-direction: row;
`;

const PartDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 20px;
  margin-right: -20px;

  &::-webkit-scrollbar {
    width: 10px;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

function ProgramsTrain() {
  const headerRef = useRef(null);

  const [seminarHeader, setSeminarHeader] = useState("세미나");
  const [visible, setVisible] = useState(true);
  const seminarHeaders = ["세미나", "스터디", "서핑데이", "숏커톤", "롱커톤"];

  useEffect(() => {
    const DivRef = PartDiv2.current;

    if (DivRef) {
      const handleScroll = () => {
        const scrollPositionY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollThreshold = documentHeight / 2;

        if (scrollPositionY >= scrollThreshold - windowHeight / 2) {
          const height = DivRef.getBoundingClientRect().height;
          const scrolledX = (scrollPositionY / windowHeight) * height;
          DivRef.scrollLeft = scrolledX;
        }
      };

      const handleWheel = (event) => {
        const isAtScrollStart = DivRef.scrollLeft === 0;
        const isAtScrollEnd =
          DivRef.scrollLeft >= DivRef.scrollWidth - DivRef.clientWidth;
        if (!(isAtScrollStart || isAtScrollEnd)) event.preventDefault();
        const scrollAmount = event.deltaY; // Get the scroll amount
        DivRef.scrollLeft += scrollAmount; // Scroll horizontally
      };

      // window.addEventListener("scroll", handleScroll);
      DivRef.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        DivRef.removeEventListener("wheel", handleWheel);
      };
    }
  }, [PartDiv2]);

  const handleScroll = () => {
    const scrollPosition = PartDiv2.current.scrollLeft;
    const width = PartDiv2.current.getBoundingClientRect().width;
    const one = width / 1.5;
    const two = one * 2.3;
    const three = one * 3.7;
    const four = one * 5.5;

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
    const headerDiv = headerRef.current;
    if (headerDiv) {
      const moveAmount = (scrollPosition / width) * 100; // Calculate the percentage to move
      headerDiv.style.transform = `translateX(${moveAmount}%)`;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <PartDiv2 ref={PartDiv2} onScroll={handleScroll}>
        <HeaderDiv ref={headerRef}>
          <Header2_1>PROGRAMS</Header2_1>
          <Header2 visible={visible}>{seminarHeader}</Header2>
        </HeaderDiv>
        <PartDiv3>
          <ProgramSeminar />
          <ProgramStudy />
          <ProgramSurfing />
          <ProgramShort />
          <ProgramLong />
        </PartDiv3>
      </PartDiv2>
    </ThemeProvider>
  );
}

export default ProgramsTrain;
