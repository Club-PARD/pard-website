import styled, { css, keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';

const VideoContainer = styled.div`

  /* position:${({ isFixed }) => (isFixed ? 'sticky' : 'relative')}; */
  position: sticky;
  top:0;
  width: 100%;
  height: 100vh;
  max-width: 100vw; 
  min-width: 1440px; // 아무리 줄여도 1440px로 유지됨
  overflow: hidden;
  background-color: ${({ isColor }) => (isColor ? ' rgba(0, 0, 0, 0.4)' : ' rgba(0, 0, 0, 0.4)')};
 ;
`;

//inline-block으로 stickybox를 위로 올리는 역할을한다.
const DIVVVV = styled.div`

  display: inline-block;
  height: 5000px;
  width: 100%;
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
  top:55%;
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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in;
  animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation} 0.5s ease-in-out`}
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

  transition: transform 2s ease-in-out forwards;
//animation: ${({ isAnimation }) => (isAnimation ? css`${moveLeft} 1s ease-in-out forwards` : 'none')};
// forwards로 벌리고 난 뒤에 고정
`;

const Text2 = styled(Text)`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: 900;
font-size: 120px;
line-height: 140%;
color: white;
transition: transform 0.5s ease-in-out forwards;
//animation: ${({ isAnimation }) => (isAnimation ? css`${moveRight} 1s ease-in-out forwards` : 'none')};
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
      ${css`${expandAnimation}  1s ease-in-out forwards`}
      //2초만에 나타나서 고정이 된다
      // forwards
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
  top: 66%;
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
  top: 107%;  // adjust this value to control the initial position
  left: 19%;  // position it in the middle of its parent
  transform: translate(-50%, -50%);  // change the origin of transformation
  transition: transform 0.5s ease-in-out forwards;
    animation: ${({ isAnimation }) =>
    isAnimation &&
    css`
      ${css`${expandAnimation}  1s ease-in-out forwards`}
      //2초만에 나타나서 고정이 된다
      // forwards
    `};
  //animation: ${({ isAnimation }) => (isAnimation ? css`${moveUp} 1s ease-in-out both 0.5s` : 'none')};
  //추가되어 애니메이션이 시작되기 전에 첫 번째 keyframe의 스타일이 적용되고, 애니메이션이 끝나면 마지막 keyframe의 스타일이 유지됩니다. 
  // forwards 0.5s는 added 0.5s delay
  // 위에 태그들 즉 Text1,Text2 가 끝나고 0.5s뒤에 실행
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
  const [isSplitTextVisible, setIsSplitTextVisible] = useState(false);





  const position = useScrollPosition();
 

  useEffect(() => {
    const absPosition = Math.abs(position);

    if (absPosition < 100) {
      setchanged('aaa');
      setbackcolor(false);
      setIsFixed(true);
      setIsVisible(false);
    } else if (position >= 100 && position <650) { 
      setchanged('a');
      setText('PARD');
    
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
   
   
     //keyframse에 따른 animation 값을 스크롤에 따른 값으로 설정
     // position으로 설정한다 이를
      
    } else if (position >= 650 && position <2350) {
      setchanged('b');
 setisExpanded(true);
      setText1('PA');
      setText2('RD');
      setText3('Y it FORWA');
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);
      setIsAnimation(true);
   // 스크롤 간격을 넓혀서 내려갔을 때 PAY if FORWARD가 더 길게 있도록 한다.


    } else if (position >= 2350 && position < 2650) {
      setchanged('c');
      setisExpanded(true);
      setText1('PA');
      setText2('RD');
      setText3('Y it FORWA');
           setIsFixed(true);
           setIsVisible(true);
           setbackcolor(true);
           setIsAnimation(true);
          


    }else if (position >= 2650 && position < 3200) {
      setchanged('cd');
      setisExpanded(true);
      setText1('PA');
      setText2('RD');
      setText3('Y it FORWA');
           setIsFixed(true);
           setIsVisible(true);
           setbackcolor(true);
           setIsAnimation(true);

    

    }  else if (position >= 3200 && position < 3500) {
      setchanged('cdd');
      setisExpanded(true);
      setText1('PA');
      setText2('RD');
      setText3('Y it FORWA');
           setIsFixed(true);
           setIsVisible(true);
           setbackcolor(true);
           setIsAnimation(true);
           setText('실천하는 IT 협업 동아리');
     setIsSplitTextVisible(true);

    } else if (position >= 3500 && position <4000) {
      setIsVisible(false);
      setbackcolor(true);
      // 공백이 생기게 하는 구간 자연스러운 연결을 위하여
      setIsSplitTextVisible(false);

    } else if (position >= 4000 && position <4600){
      setchanged('d');
      setText('함께 성장하고 싶은 기획자, 디자이너, 개발자 대학생들이 모여 세상을 바꾸는 IT제품을 어떻게 만들 수 있을까요?' );
      setIsFixed(true);
      setIsVisible(true);
      setbackcolor(true);

    }
    else if (position >= 4600 ) {
      setchanged('ddd');
   

      setbackcolor(true);
      
    } 

  }, [position,isVisible]);


    /*
    if (position >= 750 && position < 1200 && isVisible) {
      setIsAnimation(true);
      setIsVisible(true);
    } }, [position,isVisible]);
    */
  

  return (
  <>
<DIVVVV>
    <VideoContainer isColor={backcolor}  isFixed={isFixed}>

      <VideoBackground  autoPlay loop muted>
        <source src={require("../../../assets/Video/BackGroundVideo.mp4")} type="video/mp4" />
      </VideoBackground>

      <LogoDiv>
        <DownLogo src={require('../../../assets/img/DownScrollLogo.png')} />
      </LogoDiv>

      {isFixed && (
        <>
        

            {changed==='aaa' ?  
              <TextContainer1 isAnimation={isAnimation} isVisible={isVisible}>
              
                </TextContainer1> 
                :changed==='a' ?  
              <TextContainer1 isAnimation={isAnimation} isVisible={isVisible}>
                <Text isExpanded={isExpanded}>{text}</Text>
                </TextContainer1> 
                :
                
                changed==='b' ?  
                <>
          
    <SplitTextContainer isVisible={isVisible}>
      <Text1 style={{ transform: `translateX(-${Math.min((position - 650)/6, 300)}px)` }}>{text1}</Text1>
      <Text2 style={{ transform: `translateX(${Math.min((position - 650)/5, 400)}px)` }}>{text2}</Text2>
      
    </SplitTextContainer>

</>
/*
:changed==='bc' ?  
<>

<SplitTextContainer isVisible={isVisible}>
<Text1 style={{ transform: `translateX(-${position-250}px)` }}>{text1}</Text1>
<Text2 isAnimation={isAnimation}>{text2}</Text2>
<MovedText isAnimation={isAnimation}>{text3}</MovedText> 
</SplitTextContainer>

</>
*/

:changed==='c' ?  
<>
<SplitTextContainer isVisible={isVisible}>
      <Text1 style={{ transform: `translateX(-${300}px)` }}>{text1}</Text1>
      <Text2 style={{ transform: `translateX(${400}px)` }}>{text2}</Text2>
      
    </SplitTextContainer>
    {/* 스크롤 지점에 한번 더 이걸 두니까 고정이 된다*/}


{/*isSplitTextVisible && (
<TextContainer2 isVisible={isVisible}>
<Textchanged1 isAnimation={isAnimation} isExpanded={isExpanded}>
{text}
</Textchanged1>
</TextContainer2>
)*/}
</>

:changed==='cd' ?  
<>
<SplitTextContainer isVisible={isVisible}>
      <Text1 style={{ transform: `translateX(-${300}px)` }}>{text1}</Text1>
      <Text2 style={{ transform: `translateX(${400}px)` }}>{text2}</Text2>
      <MovedText style={{ transform: `translateY(${0}%)` }} isAnimation={isAnimation} >{text3}</MovedText> 
    </SplitTextContainer>
    {/* 스크롤 지점에 한번 더 이걸 두니까 고정이 된다*/}



</>
:changed==='cdd' ?  
<>
<SplitTextContainer isVisible={isVisible}>
      <Text1 style={{ transform: `translateX(-${300}px)` }}>{text1}</Text1>
      <Text2 style={{ transform: `translateX(${400}px)` }}>{text2}</Text2>
      <MovedText style={{ transform: `translateY(${0}%)` }} isAnimation={isAnimation} >{text3}</MovedText> 
      
    
    </SplitTextContainer>
    {/* 스크롤 지점에 한번 더 이걸 두니까 고정이 된다*/}

{/*위에 컴포넌트 그전 스크롤에서 나타난것들 고정되게 하고 스크롤 내리면 딱 animation으로 나타난다*/}

        <TextContainer2   isVisible={isVisible}>
<Textchanged1 isAnimation={isSplitTextVisible} isExpanded={isExpanded}>
{text}
</Textchanged1>
</TextContainer2>
{/*컴포넌트를 감싸는 조건문으로 설정하니까 animation이 안먹었음
근데 애초에 택스트에 애니메이션을 걸어놔야 되는 것 같기도 하고
그래서 Textchanged1에 애니메이션 넣음*/}
</>
:


            changed ==='d'? 
            <TextContainer3 isAnimation={isAnimation} isVisible={isVisible}>
            <Textchanged2 isExpanded={isExpanded}>{text}</Textchanged2>
            </TextContainer3>:
            changed==='ddd' && 
            <TextContainer1 isAnimation={isAnimation} isVisible={isVisible}>
            
              </TextContainer1> 
            
            }
           
          

          <BackgroundOverlay backcolor={backcolor} />
        </>
      )}
    </VideoContainer>
    </DIVVVV>
      </>
  );
};

export default HomeFirst;