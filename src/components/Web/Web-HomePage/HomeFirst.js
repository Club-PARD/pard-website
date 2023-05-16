import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* 변경된 부분 */
  overflow: hidden;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%; /* 변경된 부분 */
  object-fit: cover;
  position: absolute; /* 변경된 부분 */
  top: 0; /* 변경된 부분 */
  left: 0; /* 변경된 부분 */
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
