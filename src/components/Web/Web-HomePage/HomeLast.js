import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom:70px;
  margin-top: 100px;
  white-space: pre-line;
  display : flex;
  margin-top: 217-70px;  
`;

const Header4 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  color: #FFFFFF;
  text-align: center;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  margin-bottom: 18px;
  line-height : 140%;
`;

const Div = styled.div`
   margin: 0px auto;
    justify-content: center;
`;

const PartDiv = styled.div`
   display: flex;
   flex-direction: column;
    height: 750px;
    align-items: center;
    margin: 0px auto;
    width: 1330px;
    justify-content: center;
    padding-bottom: 100px;

`;

const Subtitle2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.subtitle2};
    font-weight: ${props => props.theme.fontWeights.subtitle3};
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 90px;
`;

const Button1 = styled.button`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 34px;
    width: 479px;
    height: 64px;
    background-color: #5262F5;
    justify-content: center;
    margin-top: 15px;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    cursor: pointer;
`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:18px;
  height:26px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
  margin-right: 600px;
`;

const Shape2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  width:18px;
  height:26px;
  line-height: 53px;
  display: flex;
  color: #5262F5;
  margin-bottom: 11px;
`;

const Line = styled.div`
  display:flex;
  justify-content: space-between;
  margin-left: 55px;
  margin-right: 37px;
`;

const Button = styled.button`
font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    width: 220px;
    height: 60px;
    /* background-color: #64C59A; */
        background-color: #d3d1d8;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    /* color: black; */
    cursor: not-allowed;
`;

function HomeLast() {
  const handleClick = () => {
    window.open("https://forms.gle/oXnAxHnAgSnCEarg7", "_blank");
  };
  return (
    <Div>
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header2>진짜 협업을 경험하고 싶다면</Header2>
        <Line>
          <Shape1>"</Shape1>
          <Shape2>"</Shape2>
        </Line>
        <Header4>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Header4>
        <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
        {/* <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1> */}
        <Button>2기 모집이 완료 되었습니다.</Button>
      </ThemeProvider>
    </PartDiv>
    </Div>
  );
}

export default HomeLast;


// import styled, { ThemeProvider } from 'styled-components';
// import { theme } from '../../../styles/theme';
// import React, { useState, useEffect } from 'react';

// const Header2 = styled.div`
//   font-size: ${props => props.theme.Web_fontSizes.Header2};
//   font-weight: ${props => props.theme.fontWeights.Header2};
//   color: #FFFFFF;
//   font-family: 'NanumSquare Neo';
//   margin-bottom:70px;
//   margin-top: 100px;
//   white-space: pre-line;
//   display : flex;
//   margin-top: 217-70px;  
// `;

// const Header4 = styled.div`
//   font-size: ${props => props.theme.Web_fontSizes.Header4};
//   font-weight: ${props => props.theme.fontWeights.Header4};
//   color: #FFFFFF;
//   text-align: center;
//   font-family: 'NanumSquare Neo';
//   white-space: pre-line;
//   margin-bottom: 18px;
//   line-height : 140%;
// `;

// const Div = styled.div`
//    margin: 0px auto;
//     justify-content: center;
// `;

// const PartDiv = styled.div`
//    display: flex;
//    flex-direction: column;
//     height: 750px;
//     align-items: center;
//     margin: 0px auto;
//     width: 1330px;
//     justify-content: center;
//     padding-bottom: 100px;

// `;

// const Subtitle2 = styled.div`
//     font-size: ${props => props.theme.Web_fontSizes.subtitle2};
//     font-weight: ${props => props.theme.fontWeights.subtitle3};
//     text-align: center;
//     color: #FFFFFF;
//     margin-bottom: 90px;
// `;

// const Button1 = styled.button`
//     font-size: ${props => props.theme.Web_fontSizes.Header5};
//     font-weight: ${props => props.theme.fontWeights.Header5};
//     font-family: 'NanumSquare Neo';
//     white-space: pre-line;
//     display: flex;
//     align-items: center;
//     line-height: 34px;
//     width: 479px;
//     height: 64px;
//     background-color: #5262F5;
//     justify-content: center;
//     margin-top: 15px;
//     color: #FFFFFF;
//     border-radius: 10px;
//     border : none;
//     cursor: pointer;
// `;

// const Shape1 = styled.div`
//   font-size: ${props => props.theme.Web_fontSizes.Header3};
//   font-weight: ${props => props.theme.fontWeights.Header3};
//   font-family: 'NanumSquare Neo';
//   line-height: 53px;
//   width:18px;
//   height:26px;
//   display: flex;
//   color: #5262F5;
//   margin-bottom: 11px;
//   margin-right: 600px;
// `;

// const Shape2 = styled.div`
//   font-size: ${props => props.theme.Web_fontSizes.Header3};
//   font-weight: ${props => props.theme.fontWeights.Header3};
//   font-family: 'NanumSquare Neo';
//   width:18px;
//   height:26px;
//   line-height: 53px;
//   display: flex;
//   color: #5262F5;
//   margin-bottom: 11px;
// `;

// const Line = styled.div`
//   display:flex;
//   justify-content: space-between;
//   margin-left: 55px;
//   margin-right: 37px;
// `;
// const PopupContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 400px;
//   height: 200px;
//   background-color: #FFFFFF;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   border-radius: 10px;
// `;

// const PopupText = styled.div`
//   font-size: ${props => props.theme.Web_fontSizes.Header4};
//   font-weight: ${props => props.theme.fontWeights.Header4};
//   color: #000000;
//   text-align: center;
//   font-family: 'NanumSquare Neo';
//   white-space: pre-line;
//   margin-bottom: 10px;
// `;

// const PopupButton = styled.button`
//   font-size: ${props => props.theme.Web_fontSizes.Header5};
//   font-weight: ${props => props.theme.fontWeights.Header5};
//   font-family: 'NanumSquare Neo';
//   white-space: pre-line;
//   display: flex;
//   align-items: center;
//   line-height: 34px;
//   width: 200px;
//   height: 40px;
//   background-color: #5262F5;
//   justify-content: center;
//   color: #FFFFFF;
//   border-radius: 10px;
//   border: none;
//   cursor: pointer;
// `;

// function HomeLast() {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const isPopupClosed = localStorage.getItem('popupClosed');
//     if (!isPopupClosed) {
//       setShowPopup(true);
//     }
//   }, []);

//   const handlePopupClose = () => {
//     localStorage.setItem('popupClosed', 'true');
//     setShowPopup(false);
//   };

//   const handleClick = () => {
//     window.open("https://tally.so/r/w4BxRd", "_blank");
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Div>
//         <PartDiv>
//           <Header2>진짜 협업을 경험하고 싶다면</Header2>
//           <Line>
//             <Shape1>"</Shape1>
//             <Shape2>"</Shape2>
//           </Line>
//           <Header4>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Header4>
//           <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
//           <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1>
//         </PartDiv>
//       </Div>
//       {showPopup && (
//         <PopupContainer>
//           <PopupText>헬로</PopupText>
//           <PopupButton onClick={handlePopupClose}>하루 동안 보지 않기</PopupButton>
//         </PopupContainer>
//       )}
//     </ThemeProvider>
//   );
// }

// export default HomeLast;
