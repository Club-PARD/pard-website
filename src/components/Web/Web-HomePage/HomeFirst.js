import styled, { css, keyframes } from 'styled-components';
import React, { useState,useEffect } from 'react';


const VideoContainer = styled.div`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : '')};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;
function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const updateScrollPos = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', updateScrollPos);

    return () => {
      window.removeEventListener('scroll', updateScrollPos);
    };
  }, []);

  return scrollPos;
}

const expandAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
`;
const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
 //visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; 그냥 없애고 나타나고 임.
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.8s ease-in;
  animation: ${({ isanimation }) =>
    isanimation &&
    css`
      ${css`${expandAnimation} 1s ease-in-out`}
    `};
`;

const Text = styled.p`
  color: white;
  font-size: 2em;

`;

const BackgroundOverlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({backcolor})=>(backcolor ? 'rgba(0, 0, 0, 0.4)': null)} ;
  z-index: 2;
`;
const DownLogo = styled.img`
width: 80px;
height: 63px;
padding-top: 100px;
`
const LogoDiv = styled.div`
position: absolute;
top:60%;

width: 100%;
justify-content: center;
display: flex;
z-index: 0;
`
const HomeFirst = () => {
  const [text, setText] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [backcolor,setbackcolor] = useState(true);
  const [isanimation, setisanimation] = useState(true);

  const position = useScrollPosition();
  useEffect(() => {
    const absPosition = Math.abs(position);
    if (absPosition  < 200) {
      setbackcolor(false);
      setIsFixed(true);
      setIsVisible(false);
    } else if (absPosition  < 450) {
      setText('PARD');
      setIsFixed(true);// 비디오 위치고정
      setIsVisible(true);//텍스트 보이는거
      setbackcolor(true); // 배경색
    } else if (absPosition  < 600) {
      setText('PAYITFORWARD');
      setisanimation(true);
      setbackcolor(true); // 배경색
    } else if (absPosition  < 750) {
      setText('스크롤 위치: 2');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true); // 배경색
    } else if (absPosition  < 900) {
      setIsVisible(false);
      setbackcolor(true); // 배경색
    } else if (absPosition  < 1050) {
      setText('스크롤 위치: 3');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true); // 배경색
    } else {
      setText('');
      setIsFixed(false);
      setIsVisible(false);
      setbackcolor(true); // 배경색
    }
  }, [position]);

  return (
    <VideoContainer isFixed={isFixed}>

      <VideoBackground isFixed={isFixed} autoPlay loop muted>
        <source src={require("../../../assets/Video/BackGroundVideo.mp4")} type="video/mp4" />
      </VideoBackground>

      <LogoDiv>
            <DownLogo src={require('../../../assets/img/DownScrollLogo.png')}/>
            </LogoDiv>
              {isFixed && (
        <>
         <TextContainer isanimation={isanimation} isVisible={isVisible}>
            <Text  >{text}</Text>
            </TextContainer>

          <BackgroundOverlay backcolor={backcolor} />

        </>
      )}

    </VideoContainer>
  );
};

export default HomeFirst;