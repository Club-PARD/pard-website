import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function HomeVideo() {

  const videoRef = useRef(null); // 비디오 요소를 참조하기 위한 useRef
  const blueScreenRef = useRef(null); // 파란 배경 요소를 참조하기 위한 useRef
  const isPlayingRef = useRef(false); // 비디오 재생 여부를 저장하기 위한 useRef
  const lastScrollTimeRef = useRef(Date.now()); // 마지막 스크롤 시간을 저장하기 위한 useRef

  useEffect(() => {
    const video = videoRef.current; // 비디오 요소
    const blueScreen = blueScreenRef.current; // 파란 배경 요소

    const playVideo = () => {
      video.play(); // 비디오 재생
      isPlayingRef.current = true; // isPlayingRef를 true로 설정하여 비디오가 재생 중임을 표시
    };

    const pauseVideo = () => {
      video.pause(); // 비디오 일시 정지
      isPlayingRef.current = false; // isPlayingRef를 false로 설정하여 비디오가 일시 정지 중임을 표시
    };

    const updateVideoTime = () => {
      const scrollPosition = window.pageYOffset; // 현재 스크롤 위치
      const videoOffsetTop = video.offsetTop; // 비디오 요소의 페이지에서의 상단 위치
      const videoHeight = video.offsetHeight; // 비디오 요소의 높이

      if (video.readyState >= 2) {
        const videoProgress = (scrollPosition - videoOffsetTop) / (videoHeight * 38); // 스크롤 위치에 따른 비디오 진행도 계산
        const currentTime = video.duration * videoProgress; // 비디오의 현재 시간 계산

        video.currentTime = currentTime; // 비디오의 현재 시간을 업데이트
      }
    };

    const handleScroll = () => {
      const now = Date.now(); // 현재 시간
      const timeSinceLastScroll = now - lastScrollTimeRef.current; // 마지막 스크롤 이후의 시간 차이 계산

      updateVideoTime(); // 스크롤에 따른 비디오 시간 업데이트

      if (timeSinceLastScroll > 1 && isPlayingRef.current) {
        pauseVideo(); // 일정 시간 이후에 비디오가 재생 중이면 일시 정지
      }

      lastScrollTimeRef.current = now; // 마지막 스크롤 시간 업데이트
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 등록

    gsap.to(window, {
      scrollTrigger: {
        trigger: video,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: playVideo, // 스크롤 영역에 진입할 때 비디오 재생
        onLeave: pauseVideo, // 스크롤 영역을 벗어날 때 비디오 일시 정지
        onEnterBack: playVideo, // 스크롤 영역에 다시 진입할 때 비디오 재생
        onLeaveBack: pauseVideo, // 스크롤 영역을 다시 벗어날 때 비디오 일시 정지
      },
    });

    video.addEventListener('ended', () => { // 영상이 끝났을 떄 파랑 화면으로 이동
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: blueScreen,
          offsetY: 80,
        },
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      <div style={{ height: '39000px' }}>
        {/* 33800px' */}
      </div>
      <video
        ref={videoRef}
        src={require('../../../assets/Video/BackGround_Video.mp4')}
        muted
        quality="high"
        loop
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: "fill", zIndex: -1 }}
        onLoadedMetadata={() => {
          console.log('Video duration:', videoRef.current.duration);
        }}
      />
    </div>
  );
};

export default HomeVideo;