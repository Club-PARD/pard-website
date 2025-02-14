import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 첫 번째 액션 애니메이션: P, A, Y는 아래로, IT는 왼쪽으로 이동
const moveP = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 67px);
  }
`;

const moveA = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 67px);
  }
`;

const moveY = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 67px);
  }
`;

const moveIT = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-90px, 0);
  }
`;

// 두 번째 액션 애니메이션: IT는 더 왼쪽으로 이동, 새로운 글씨들 (FORWA, R, D) 등장
const moveITFurther = keyframes`
  0% {
    transform: translate(-90px, 0);
  }
  100% {
    transform: translate(-260px, 0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 네 번째 액션 애니메이션: P, A는 왼쪽으로 이동, R, D는 오른쪽으로 이동
const moveLeft = keyframes`
  0% {
    transform: translate(0, 67px);
  }
  100% {
    transform: translate(-275px, 67px);
  }
`;

const moveRight = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(275px, 0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// P, A에 fill 적용하는 스타일
const FillText = styled.div`
  font-family: "NanumSquare Neo";
  font-size: 120px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
  position: absolute;
  transition: transform 1s ease-in-out;
  color: ${({ phase }) => (phase === 5 ? "#fff" : "transparent")}; // 5번째 액션에서 흰색으로 변경
`;

const Text = styled.div`
  font-family: "NanumSquare Neo";
  font-size: 120px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
  position: absolute;
  transition: transform 1s ease-in-out;
`;


// SSION이 나타나는 애니메이션
const SSION = styled(FillText)`
  top: 124.08px;
  left: 560px;
  opacity: ${({ phase }) => (phase === 5 ? 1 : 0)};
  animation: ${({ phase }) => (phase === 5 ? fadeIn : "none")} 1s forwards;
`;

const TextA = styled(Text)`
  top: 124.08px;
  left: 900px;
  opacity: ${({ phase }) => (phase === 5 ? 1 : 0)};
  animation: ${({ phase }) => (phase === 5 ? fadeIn : "none")} 1s forwards;
`;

const P = styled(Text)`
  top: 124.08px;
  left: 422.4px;
  animation: ${({ phase }) => (phase === 1 ? moveP : phase === 2 ? moveP : phase === 3 ? "none" : phase === 4 ? moveLeft : "none")} 1s forwards;
`;

const A = styled(Text)`
  top: 124.08px;
  left: 482.4px;
  animation: ${({ phase }) => (phase === 1 ? moveA : phase === 2 ? moveA : phase === 3 ? "none" : phase === 4 ? moveLeft : "none")} 1s forwards;
`;

const Y = styled(Text)`
  top: 124.08px;
  left: 542.4px;
  opacity: ${({ phase }) => (phase === 1 || phase === 2 ? 1 : 0)}; // phase 1, 2에서만 보이고, 나머지 액션에서는 사라짐
  animation: ${({ phase }) => (phase === 1 ? moveY : phase === 2 ? moveY : "none")} 1s forwards;
`;

const IT = styled(Text)`
  top: 194.08px;
  right: 365.43px;
  opacity: ${({ phase }) => (phase === 1 || phase === 2 ? 1 : 0)}; // phase 1, 2에서만 보이고, 나머지 액션에서는 사라짐
  animation: ${({ phase }) => (phase === 1 ? moveIT : phase === 2 ? moveITFurther : "none")} 1s forwards;
`;

const FadeIn = styled(Text)`
  opacity: ${({ phase }) => (phase === 2 ? 1 : 0)};
  animation: ${({ phase }) => (phase === 2 ? fadeIn : "none")} 1s forwards;
`;

const FORWA = styled(FadeIn)`
  left: 416px;
  top: 370px;
  animation: ${({ phase }) => (phase === 2 ? fadeIn : "none")} 1s forwards; // 서서히 나타나게 설정
`;

const R = styled(FadeIn)`
  left: 821px;
  top: 370px;
  opacity: ${({ phase }) => (phase === 2 || phase === 3 || phase === 4 || phase === 5 ? 1 : 0)}; // phase 2, 3, 4, 5에서 계속 보이게
  animation: ${({ phase }) => (phase === 4 ? moveRight : "none")} 1s forwards;
`;

const D = styled(FadeIn)`
  left: 896px;
  top: 370px;
  opacity: ${({ phase }) => (phase === 2 || phase === 3 || phase === 4 || phase === 5 ? 1 : 0)}; // phase 2, 3, 4, 5에서 계속 보이게
  animation: ${({ phase }) => (phase === 4 ? moveRight : "none")} 1s forwards;
`;

const HomeTest = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setTimeout(() => setPhase(1), 500);   // 첫 번째 액션
    setTimeout(() => setPhase(2), 2000);  // 두 번째 액션
    setTimeout(() => setPhase(3), 3000);  // 세 번째 액션
    setTimeout(() => setPhase(4), 4000);  // 네 번째 액션
    setTimeout(() => setPhase(5), 5000);  // 다섯 번째 액션 추가
  }, []);

  return (
    <>
      <P phase={phase}>P</P>
      <A phase={phase}>A</A>
      <Y phase={phase}>Y</Y>
      <IT phase={phase}>IT</IT>
      <FORWA phase={phase}>FORWA</FORWA>
      <R phase={phase}>R</R>
      <D phase={phase}>D</D>
      <SSION phase={phase}>SSION</SSION>
      <TextA phase={phase}>A</TextA>
    </>
  );
};

export default HomeTest;