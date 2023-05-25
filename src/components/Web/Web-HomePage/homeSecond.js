import { React, useState, useEffect, useRef, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import ScrollAnimation from 'react-animate-on-scroll';
import backgroundImage1 from '../../../assets/img/homeBackgroundImg1.svg';

const PageContainer = styled.div`
  width: 100%;
  background-color: #eee;
`

const Background = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 66.64%; /* (img-height / img-width * container-width) */
  position: sticky;
  top: 0;
`;


const Text1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header0};
  font-weight: ${props => props.theme.fontWeights.Header0};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  z-index: 999;
  text-anchor: middle; 
  text-align: center;
  opacity: ${props => props.position < props.breakPoint1 ? 0 : (props.position - props.breakPoint1) / 200};
  transform: ${props => props.position < props.breakPoint2 ? 0 : `translateX(${props.breakPoint2 - props.position}px)`};
  position: relative;
`

const Animation1 = ({ position }) => {
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const targetRef = useRef(null);
  const breakPoint1 = 0;
  const breakPoint2 = 3700;

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <Text1 ref={targetRef} position={position} breakPoint1={breakPoint1} breakPoint2={breakPoint2}> This is the text</Text1>
    </div>
  );
}

const HomeSecond = () => {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>

        <Background src={backgroundImage1}>
        <Animation1 position={position}></Animation1>
        </Background>
        <div style={{height: "1000px"}}></div>

      </PageContainer>
    </ThemeProvider>
  );
};

export default HomeSecond;
