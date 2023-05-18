
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';


const VideoContainer = styled.div`


 
  width: 100%;
  height: 300vh;
  overflow: hidden;
`;


const VideoBackground = styled.video`
width: 100%;

height: 100%;
object-fit: fill;  // 가로 비율 유지한채 세로를 늘림
  z-index: -999;


`;

const HomeFirst = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted>
       
        <source src={require("../../../assets/Video/BackGroundVideo.mp4")} type="video/mp4" />
      </VideoBackground>
    </VideoContainer>
  );
};

export default HomeFirst;
