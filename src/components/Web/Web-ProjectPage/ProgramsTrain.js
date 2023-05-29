import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "../../../styles/theme";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProgramsTrain2 from "./ProgramsTrain2";

gsap.registerPlugin(ScrollTrigger);

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 50px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Header2_1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 90px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 15%;
  // background-color: blue;
  &.unfixed {
    position: relative;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  margin-bottom: 300px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  // background-color: green;
`;


const HeaderDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 1080px;
  // background-color: red;
`;


function ProgramsTrain() {
  const Headers2 = ["세미나", "스터디", "서핑데이", "숏커톤", "롱커톤"];
  const [Header2Index, setHeader2Index] = useState(0);
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);

  useEffect(() => {
    const horizontalScrollAnimation = gsap.to(".div1", {
      x: () =>
        -(
          document.querySelector(".div1").scrollWidth -
          document.querySelector(".div1").clientWidth
        ),
      scrollTrigger: {
        trigger: ".div1",
        start: "top+=50 center",
        end: () =>
          `+=${document.querySelector(".div1").scrollWidth}`,
        scrub: 0.4,
        // markers: true,
        pin: true,
        anticipatePin: 0,
        onUpdate: ({ progress }) => {
          setIsHeaderFixed(progress < 1);

          let newIndex = 0;
          if (progress < 0.085) {
            newIndex = 0;
          } else if (progress >= 0.085 && progress < 0.23) {
            newIndex = 1;
          } else if (progress >= 0.23 && progress < 0.4) {
            newIndex = 2;
          } else if (progress >= 0.4 && progress < 0.7) {
            newIndex = 3;
          } else if (progress >= 0.7) {
            newIndex = 4;
          }
          setHeader2Index(newIndex);
        },
      },
    });

    return () => {
      horizontalScrollAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);

  const Header2Text = Headers2[Header2Index];

  return (
    
    <ThemeProvider theme={theme}>
      <HeaderDiv className={isHeaderFixed ? "" : "unfixed"}>
        <HeaderDiv2>
        <Header2_1>PROGRAMS</Header2_1>
        <Header2 visible={isHeaderFixed}>{Header2Text}</Header2>
        </HeaderDiv2>
      </HeaderDiv>
      <Div1 className="div1">
        <ProgramsTrain2 />
      </Div1>
    </ThemeProvider>
  );
}

export default ProgramsTrain;
