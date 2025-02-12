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

import SwiperBtnLeft from "../../../assets/img/MiniArrowLeft.svg";
import SwiperBtnRight from "../../../assets/img/MiniArrowRight.svg";

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
     <NavigationContainer>
    <NavigationButton className="swiper-button-prev" />
    <NavigationButton className="swiper-button-next" />
      </NavigationContainer>
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
  width: 301.807px;
height: 195.862px;
flex-shrink: 0;
border-radius: 9.065px;
background: linear-gradient(195deg, #FFF 7.65%, #F6F6F6 74.16%);
box-shadow: 0.19px 0.19px 1.186px 0px rgba(217, 217, 217, 0.70) inset, 0px 0.19px 1.138px 0px rgba(20, 27, 41, 0.08), 0px -1.138px 1.091px 0px rgba(156, 156, 156, 0.16) inset, 0px 1.138px 1.091px 0px rgba(156, 156, 156, 0.16) inset;
`;

const DesktopBottom = styled.div`
  width: 326.329px;
height: 11.739px;
flex-shrink: 0;
border-radius: 9.065px;
background: linear-gradient(195deg, #FFF 7.65%, #F6F6F6 74.16%);
box-shadow: 0.19px 0.19px 1.186px 0px rgba(217, 217, 217, 0.70) inset, 0px 0.19px 1.138px 0px rgba(20, 27, 41, 0.08), 0px -1.138px 1.091px 0px rgba(156, 156, 156, 0.16) inset, 0px 1.138px 1.091px 0px rgba(156, 156, 156, 0.16) inset;
margin-top: -11.739px;
  z-index: 1;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6.444px 6.444px 0px 0px;
  }
`;
// const NavigationContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* margin-top: 50px; */
//   transform: translateY(-50%);
// `;

// const NavigationButton = styled.img`
//   width: 15px;
//   height: 20px;
//   cursor: pointer;
//   margin-right: 10px;
//   margin-left: 210px;
// `;

const NavigationContainer = styled.div`
  position: absolute;
  top: 10px;  // 우측 상단에서 약간 떨어지도록 조정
  right: 10px;
  display: flex;
  gap: 8px;
`;

const NavigationButton = styled.div`
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  width: 34px;
  height: 34px;
  cursor: pointer;

  &.swiper-button-prev {
    left: -54px;
    top: -34px;
    background-image: url(${SwiperBtnLeft});
  }

  &.swiper-button-next {
    right: -17px;
    top: -34px;
    background-image: url(${SwiperBtnRight});
  }

  &.swiper-button-next::after, &.swiper-button-prev::after {
    display: none;
  }
`;
