import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import { getProjectWebData } from "../../../utils/api";
import { useRecoilValue } from 'recoil';
import { projectIdState } from '../../../atom';

import SwiperBtnLeft from "../../../assets/img/swiper_left.png";
import SwiperBtnRight from "../../../assets/img/swiper_right.png";

SwiperCore.use([Navigation]);

function WebModal() {
  const [data, setData] = useState(null);
  const id = useRecoilValue(projectIdState);
  console.log(id);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const response = await getProjectWebData(id);
        console.log("API 응답 데이터:", response);
        setData(response);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    getProjectData();
  }, [id]);

  console.log(data);

  // 데이터가 없으면 기본값을 설정
  const Img1 = data?.slideImages?.[0]?.url || "데이터 없음";
  const Img2 = data?.slideImages?.[1]?.url || "데이터 없음";
  const Img3 = data?.slideImages?.[2]?.url || "데이터 없음";

 return (
   <Container>
     <Desktop>
       <Swiper
         navigation={{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         }}
         loop={true}
         slidesPerView={1}
         pagination={false}
       >
         <SwiperSlide>
           <ImgContainer>
             <img src={Img1} alt="Image 1" loading="lazy"  />
           </ImgContainer>
         </SwiperSlide>
         <SwiperSlide>
           <ImgContainer>
             <img src={Img2} alt="Image 2" loading="lazy"  />
           </ImgContainer>
         </SwiperSlide>
         <SwiperSlide>
           <ImgContainer>
             <img src={Img3} alt="Image 3" loading="lazy"  />
           </ImgContainer>
         </SwiperSlide>
       </Swiper>
       {/* 기본 내비게이션 버튼 숨기기 */}
       <NavigationButton className="swiper-button-prev" />
       <NavigationButton className="swiper-button-next" />
     </Desktop>
     <DesktopBottom />
   </Container>
 );
}

export default WebModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const Desktop = styled.div`
  position: relative;
  width: 932.254px;
  height: 605px;
  flex-shrink: 0;
  border-radius: 28px;
  background: linear-gradient(195deg, #FFF 7.65%, #F6F6F6 74.16%);
  box-shadow: 0.586px 0.586px 3.662px 0px rgba(217, 217, 217, 0.70) inset, 0px 0.586px 3.516px 0px rgba(20, 27, 41, 0.08), 0px -3.516px 3.369px 0px rgba(156, 156, 156, 0.16) inset, 0px 3.516px 3.369px 0px rgba(156, 156, 156, 0.16) inset;
`;

const DesktopBottom = styled.div`
  width: 1008px;
  height: 36.262px;
  flex-shrink: 0;
  border-radius: 28px;
  background: linear-gradient(195deg, #FFF 7.65%, #F6F6F6 74.16%);
  box-shadow: 0.586px 0.586px 3.662px 0px rgba(217, 217, 217, 0.70) inset, 0px 0.586px 3.516px 0px rgba(20, 27, 41, 0.08), 0px -3.516px 3.369px 0px rgba(156, 156, 156, 0.16) inset, 0px 3.516px 3.369px 0px rgba(156, 156, 156, 0.16) inset;
  margin-top: -36.262px;
  z-index: 1;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 28px;
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 30px;
  cursor: pointer;

  &.swiper-button-prev {
    left: -70px;
    background-image: url(${SwiperBtnLeft});
  }

  &.swiper-button-next {
    right: -70px;
    background-image: url(${SwiperBtnRight});
  }

  &.swiper-button-next::after, &.swiper-button-prev::after {
    display: none;
  }
`;