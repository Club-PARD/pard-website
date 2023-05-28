import styled, { ThemeProvider } from "styled-components";
import { useRef, useState, useEffect } from "react";
import { theme } from "../../../styles/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProgramsTrain2 from "./ProgramsTrain2";

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 110px;
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
  margin-left: 110px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 15%;
  &.unfixed {
    position: relative;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  margin-bottom: 300px; //******* 임의 설정 수정해야함 ********
`;

function ProgramsTrain() {
  const Headers2 = ["세미나", "스터디", "서핑데이", "숏커톤", "롱커톤"];
  const [Header2Index, setHeader2Index] = useState(0); // Index of Headers2 array
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.defaults({
      markers: true, // Set to true for debugging
    });


    


    const horizontalScrollAnimation = gsap.to(".div1", {
      x: () =>
        -(
          document.querySelector(".div1").scrollWidth -
          document.querySelector(".div1").clientWidth
        ),
      scrollTrigger: {
        trigger: ".div1",
        start: "top center",
        end: () =>
          `+=${document.querySelector(".div1").scrollWidth}`,
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
        onUpdate: ({ progress }) => {
          setIsHeaderFixed(progress < 1); // 스크롤이 끝나면 sticky 해제

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
        <Header2_1>PROGRAMS</Header2_1>
        <Header2 visible={isHeaderFixed}>{Header2Text}</Header2>
      </HeaderDiv>
      <Div1 className="div1">
        <ProgramsTrain2 />
      </Div1>
    </ThemeProvider>
  );
}

export default ProgramsTrain;


