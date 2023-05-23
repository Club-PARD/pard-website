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
  /*
  50% {
    opacity: 1;
    letter-spacing: 0;
  }
 */ 
  100% {
    opacity: 1;
    letter-spacing: 0;
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;
const SplitTextContainer = styled.div`
  position: absolute;

width: 1040px;
height: 112px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
 text-align: center;
  z-index: 4;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in;

`;
const TextContainer = styled.div`
//display: flex;
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
const TextContainerC = styled.div`
//display: flex;
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
const TextContainer1 = styled.div`

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

 display: flex;
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


`;
const Text1 = styled.p`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 900;
font-size: 120px;
line-height: 140%;
color: white;
animation: ${({ isAnimation }) => (isAnimation ? css`${moveLeft} 3s ease-in-out forwards` : 'none')};
// forwards로 벌리고 난 뒤에 고정
`;

const Text2 = styled(Text)`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 900;
font-size: 120px;
line-height: 140%;
color: white;

animation: ${({ isAnimation }) => (isAnimation ? css`${moveRight} 3s ease-in-out forwards` : 'none')};
// forwards로 벌리고 난 뒤에 고정
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
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation}  6s ease-in-out both 8s`}
    `};

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

  //letter-spacing: ${({ isExpanded }) => (isExpanded ? '0.5em' : '0')};
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

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px); // adjust this value to control the distance of expansion
  }
`;
// 왼쪽으로 움직이는거 PA가

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(400px); // adjust this value to control the distance of expansion
  }
`;
//// 오른쪽으로 움직이는거 RD가

const moveUp = keyframes`
  from {
    transform: translateY(50%); // adjust this value to control the distance of movement
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`; // Y if FORWA가 올라가는 위치 조정, opacity로 보이는 거 조절
const MovedText = styled.div`
  display: flex;
  width: 1000px;
  position: absolute;
  top: 106%;  // adjust this value to control the initial position
  left: 19%;  // position it in the middle of its parent
  transform: translate(-50%, -50%);  // change the origin of transformation
  animation: ${({ isAnimation }) => (isAnimation ? css`${moveUp} 6s ease-in-out both 2s` : 'none')};
  //추가되어 애니메이션이 시작되기 전에 첫 번째 keyframe의 스타일이 적용되고, 애니메이션이 끝나면 마지막 keyframe의 스타일이 유지됩니다. 
  // forwards 2s는 added 2s delay
  font-family: 'NanumSquare Neo';
  font-style: normal;
  z-index: 4;
  font-weight: 900;
  font-size: 120px;
  line-height: 140%;
  color: white;
`;


const HomeFirst = () => {
  const [text, setText] = useState('PARD'); // text변화
  const [isFixed, setIsFixed] = useState(true); // 스크롤 변화에 따른 비디오 고정
  const [isVisible, setIsVisible] = useState(true);// 보이는거 opacity조절
  const [backcolor, setbackcolor] = useState(true);// 배경색 조절
  const [isAnimation, setIsAnimation] = useState(true); // 사라지는거 조절
  const [isExpanded,setisExpanded] = useState(null); // 글자확장 조절
  const [changed,setchanged]= useState('a'); //글자 크기,위치 변하는거 조절
  const [text3, setText3] = useState(''); // text변화
  const [text1, setText1] = useState('PA'); // 텍스트 1
  const [text2, setText2] = useState('RD'); // 텍스트 2
const [screenfixed,setscreenfixed] =useState(true);


  const position = useScrollPosition();


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
   
   
     
      
    } else if (position >= 450 && position < 800) {
      setchanged('b');
 setisExpanded(true);
      setText1('PA');
      setText2('RD');
      setText3('Y it FORWA');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
      setText('실천하는 IT 협업 동아리');

    } else if (position >= 800 && position <1100){
      setIsVisible(false);
      setbackcolor(true);

    }
     else if (position >= 1100 &&absPosition < 1400) {
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
              <TextContainer1 isAnimation={isAnimation} isVisible={isVisible}>
                <Text isExpanded={isExpanded}>{text}</Text>
                </TextContainer1> 
                :
                
                changed==='b' ?  
                <>
          
    <SplitTextContainer isVisible={isVisible}>
      <Text1 isAnimation={isAnimation}>{text1}</Text1>
      <Text2 isAnimation={isAnimation}>{text2}</Text2>
      <MovedText isAnimation={isAnimation}>{text3}</MovedText> 
    </SplitTextContainer>
    <TextContainer2 isVisible={isVisible} >
     
     <Textchanged1 isAnimation={isAnimation}  isExpanded={isExpanded}>  {text}</Textchanged1>
</ TextContainer2>
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