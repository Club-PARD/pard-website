import styled, { css, keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';

const VideoContainer = styled.div`

  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
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
    letter-spacing: 0;
  }
  50% {
    opacity: 1;
    letter-spacing: 1em;
  }
  100% {
    opacity: 1;
    letter-spacing: 1em;
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;

const TextContainer = styled.div`
width: 1040px;
height: 112px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation} 1s ease-in-out`}
    `};
`;

const TextContainer2 = styled.div`
width: 616px;
height: 84px;
  position: absolute;
  top:52%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation} 1s ease-in-out`}
    `};
`;

const TextContainer3 = styled.div`
width: 1040px;
height: 112px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation} 1s ease-in-out`}
    `};
`;

const Text = styled.p`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 900;
font-size: 120px;
line-height: 140%;
  color: white;

  letter-spacing: ${({ isExpanded }) => (isExpanded ? '0.5em' : '0')};
`;
const Textchanged1 = styled.p`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 800;
font-size: 60px;
line-height: 140%;
/* identical to box height, or 84px */

text-align: center;
color: #FFFFFF;
  letter-spacing: ${({ isExpanded }) => (isExpanded ? '0.5em' : '0')};
`;
const Textchanged2 = styled.p`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 140%;
/* or 56px */
color: #FFFFFF;
text-align: center;

  letter-spacing: ${({ isExpanded }) => (isExpanded ? '0.5em' : '0')};
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ backcolor }) => (backcolor ? 'rgba(0, 0, 0, 0.4)' : null)};
  z-index: 2;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
  padding-top: 100px;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 60%;
  width: 100%;
  justify-content: center;
  display: flex;
  z-index: 0;
`;

const HomeFirst = () => {
  const [text, setText] = useState('PARD'); // text변화
  const [isFixed, setIsFixed] = useState(true); // 스크롤 변화에 따른 비디오 고정
  const [isVisible, setIsVisible] = useState(true);// 보이는거 opacity조절
  const [backcolor, setbackcolor] = useState(true);// 배경색 조절
  const [isAnimation, setIsAnimation] = useState(true); // 사라지는거 조절
  const [isExpanded,setisExpanded] = useState(null); // 글자확장 조절
  const [changed,setchanged]= useState('a'); //글자 크기,위치 변하는거 조절

  const position = useScrollPosition();
  const text1= 'PAY it Forward'

  useEffect(() => {
    const absPosition = Math.abs(position);

    if (absPosition < 200) {
      setbackcolor(false);
      setIsFixed(true);
      setIsVisible(false);
    } else if (absPosition < 450) {
      setchanged('a');
      setText('PARD');
    
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
   
     
      
    } else if (absPosition < 600) {
      setchanged('a');
      setText('PAY it Forward');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(false);
    } else if (absPosition < 750) {

      setchanged('b');
      setText('실천하는 IT 협업 동아리');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
    } else if (absPosition < 900) {
      setIsVisible(false);
      setbackcolor(true);
    } else if (absPosition < 1050) {
      setchanged('c');
      setText('함께 성장하고 싶은 기획자, 디자이너, 개발자 대학생들이 모여 세상을 바꾸는 IT제품을 어떻게 만들 수 있을까요?' );
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
    } else {
      setText('');
      setIsFixed(false);
      setIsVisible(false);
      setbackcolor(true);
    }
  }, [position]);

  return (
    <VideoContainer  isFixed={isFixed}>
      <VideoBackground  autoPlay loop muted>
        <source src={require("../../../assets/Video/BackGroundVideo.mp4")} type="video/mp4" />
      </VideoBackground>

      <LogoDiv>
        <DownLogo src={require('../../../assets/img/DownScrollLogo.png')} />
      </LogoDiv>

      {isFixed && (
        <>
        

            {changed==='a' ?  
              <TextContainer isAnimation={isAnimation} isVisible={isVisible}>
                <Text isExpanded={isExpanded}>{text}</Text>
                </TextContainer> :
            changed==='b' ? 
            <>
            <TextContainer isAnimation={isAnimation} isVisible={isVisible}>
            <Text isExpanded={isExpanded}>{text1}</Text>
            </TextContainer> 
            <TextContainer2 isAnimation={isAnimation} isVisible={isVisible}>
              <Textchanged1 isExpanded={isExpanded}>{text}</Textchanged1>
              </TextContainer2>
              </>
             :
            changed ==='c' && 
            <TextContainer3 isAnimation={isAnimation} isVisible={isVisible}>
            <Textchanged2 isExpanded={isExpanded}>{text}</Textchanged2>
            </TextContainer3>
            
            }
           
          

          <BackgroundOverlay backcolor={backcolor} />
        </>
      )}
    </VideoContainer>
  );
};

export default HomeFirst;