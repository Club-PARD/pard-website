import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "../../../styles/theme";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Programsasdf from "../Web-ProjectPage/Programsasdf";
gsap.registerPlugin(ScrollTrigger);

function SmallPage() {
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
        end: () => `+=${document.querySelector(".div1").scrollWidth}`,
        scrub: 0.4,
        // markers: true,
        pin: true,
        anticipatePin: 0,
      },
    });

    return () => {
      horizontalScrollAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Div1 className="div1"></Div1>
      </ThemeProvider>
    </div>
  );
}

export default SmallPage;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  margin-bottom: 300px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  // overflow-x: hidden;
  // background-color: green;
`;
