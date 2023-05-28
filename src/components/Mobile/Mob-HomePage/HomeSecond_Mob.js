import { React, useState, useEffect, useRef, useMemo } from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { theme } from '../../../styles/theme';
import backgroundImage1 from '../../../assets/img/homeBackgroundImg1.svg';
import backgroundImage2 from '../../../assets/img/homeBackgroundImg2.svg';
import backgroundImage3 from '../../../assets/img/homeBackgroundImg3.svg';

const textDB = [
    {
      id : 0,
      text: "협업하고",
      breakPoint: 5500,
      period: 1000,
      posX: "20%",
      posY: "0%",
    },
    {
      id : 1,
      text: "성장하고",
      breakPoint: 5500,
      period: 1000,
      posX: "35%",
      posY: "0%",
    },
    {
      id : 2,
      text: "해결하기",
      breakPoint: 5500,
      period: 1000,
      posX: "50%",
      posY: "0%",
    },
    {
      id : 3,
      text: "PARD는 기획자, 디자이너, 개발자가 모여\nPay it Forward를 실천하는 대학생 IT 협업동아리 입니다.",
      breakPoint: 9600,
      period: 1800,
      posX: "35%",
      posY: "0%",
    },
    {
      id : 4,
      text: "대가를 바라지 않고 남을 돕는 행위를 기꺼이 즐기는 것.\n홀로 성장하는 것을 넘어 함께 성장하는 법을 배워나가는 조직. \n\nPARD를 소개합니다. ",
      breakPoint: 10400,
      period: 1000,
      posX: "45%",
      posY: "0%",
    },
  ]
  const breakPointInfos = [
    {
      breakPoint: 5000,
      period: 2400
    },
    {
      breakPoint: 9400,
      period: 2800
    },
  ]
  
  const Background = styled.div`
    background-image: ${props => `url(${props.src})`};
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 70%; /* (img-height / img-width * container-width) */
    position: sticky;
    z-index :-1;
    top: 0;
    background-color: rgba(26, 26, 26);
  
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({breakPointInfos, position, id}) => backgroundColorLogic(breakPointInfos, position, id)}; /* Adjust the opacity as desired */
    }
  `;
  
  const backgroundColorLogic = (breakPointInfos, position, id) => {
    if(breakPointInfos == null || id == null) return "rgba(0, 0, 0, 0)";
    const offset = position - breakPointInfos[id].breakPoint;
    if(offset > 0 && offset < breakPointInfos[id].period){
      var opacity = offset/200;
      if(opacity > 0.5) {
        opacity = 0.5;
      }
      return "rgba(0, 0, 0, "+opacity+")";
    }
    return "rgba(0, 0, 0, 0)";
  }
  
  const Text1 = styled.div`
    font-size: ${({ textInfo, theme }) => textFontSizeLogic(textInfo, theme)};
    font-weight: ${({ textInfo, theme }) => textFontWeightLogic(textInfo, theme)};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    z-index: 1;
  
    width: 100%; // 중요! width를 키우지 않으면 text-align: center 는 의미 없어짐.
    text-align: ${({ textInfo }) => textAlignLogic(textInfo)};
    position: absolute;
    padding: ${({ textInfo }) => textPaddingLofic(textInfo)};
  
    top: ${({ textInfo }) => (textInfo.posX)};
    left: ${({ textInfo }) => (textInfo.posY)};
  
    transform: ${({ textInfo, position }) => textTransformLogic(textInfo, position)};
    
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.5s ease-in;
  
    /* transform */
  `
  const textPaddingLofic = (textInfo) => {
    switch(textInfo.id){
      case 0:
      case 1:
      case 2:
        return "0px";
      case 3:
      case 4:
        return "0px 200px";
      default: 
        return null;
    }
  }
  const textAlignLogic = (textInfo) => {
    switch(textInfo.id){
      case 0:
      case 1:
      case 2:
        return "center";
      case 3:
      case 4:
        return "start";
      default: 
        return null;
    }
  }
  const textFontSizeLogic = (textInfo, theme) => {
    switch(textInfo.id){
      case 0:
      case 1:
      case 2:
        return theme.Web_fontSizes.Header0;
      case 3:
        return theme.Web_fontSizes.Header7;
      case 4:
        return theme.Web_fontSizes.Header5;
      default: 
        return null;
    }
  }
  const textFontWeightLogic = (textInfo, theme) => {
    switch(textInfo.id){
      case 0:
      case 1:
      case 2:
        return theme.fontWeights.Header0;
      case 3:
        return theme.fontWeights.Header7;
      case 4:
        return theme.fontWeights.Header5;
      default: 
        return null;
    }
  }
  
  const textTransformLogic = (textInfo, position) => {
    var offset = (position - (textInfo.breakPoint + textInfo.period * 0.8));
    if(textInfo.id == 3) {
      const change = 75;
      var x = position - (textInfo.breakPoint + 1000 - change);
      if(x >= 0 && x < change){
        return `translateY(${x * -1}px)`
      } else if(x >= change){
        return `translateY(${change * -1}px)`
      } else{
        return `translateY(0px)`;
      }
      
    }
    if(offset < 0) return 0;
    switch(textInfo.id){
      case 0:
        return `translateX(${offset * -1}px)`
      case 2:
        return `translateX(${offset * 1}px)`
      default:
        return `translateY(0px)`;
    }
  }
  
  const Animation1 = ({isTextVisible, textInfos, position}) => {
    const targetRef = useRef(null);
    
    return (
      <div style={{ justifyContent: "center", display: "flex"}}>
        {textInfos.map(textInfo => (
          <Text1 ref={targetRef} key={textInfo.id} isVisible={isTextVisible[textInfo.id]} textInfo = {textInfo} position={position}>
            {textInfo.text} 
          </Text1>
        ))}
      </div>
    );
  }
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

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
    padding-left:16px;
    padding-top: 45px;
    height: 2445px;
`;


const HomeSecondMob = () => {
    const [text1, setText1] = useState(false);
    const [text2, setText2] = useState(false);
    const [text3, setText3] = useState(false);
    const [text4, setText4] = useState(false);
    const [text5, setText5] = useState(false);
  
    const setList = [setText1, setText2, setText3, setText4, setText5];
    const list1 = [text1, text2, text3, text4, text5];
    const position = useScrollPosition();
  
    useEffect(()=>{
      textDB.forEach((textInfo) => {
        setList[textInfo.id](position > textInfo.breakPoint && position < textInfo.breakPoint + textInfo.period);
      });
    }, [position, text1, text2, text3, text4, text5]);
  
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Background src={backgroundImage1} breakPointInfos={breakPointInfos} position={position} id={0}>
            <Animation1 isTextVisible={list1} textInfos = {textDB.slice(0, 3)} position = {position}></Animation1>
            </Background>
          <div style={{height: "1500px"}}></div> 
          <Background src={backgroundImage2} >
          </Background>
          <div style={{height: "750px"}}></div>
          <Background src={backgroundImage3} breakPointInfos={breakPointInfos} position={position} id={1}>
            <Animation1 isTextVisible={list1} textInfos = {textDB.slice(3, 5)} position = {position}></Animation1>
          </Background>
          <div style={{height: "3400px"}}></div>
          
        </div>
      </ThemeProvider>
    );
  };

export default HomeSecondMob;