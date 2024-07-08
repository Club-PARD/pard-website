import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import img1 from "../../../assets/img/숏커톤1.png";
import img2 from "../../../assets/img/숏커톤2.png";
import img3 from "../../../assets/img/숏커톤3.png";
import Slideritem4 from "./SliderItem4";
import styled from "styled-components";

const Card4 = () => {
  SwipeCore.use([Navigation, Pagination, Autoplay]);

  const prevSlide = () => {
    if (Swiper1 && Swiper1.swiper) {
      Swiper1.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (Swiper1 && Swiper1.swiper) {
      Swiper1.swiper.slideNext();
    }
  };

  return (
    <SwiperDiv>
      <Swiper1
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={1}
        spaceBetween={35}
        effect={"fade"}
        loop={true}
        speed={800}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Slideritem4 title={item.title} src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper1>
      <NavigationContainer>
        <NavigationButton
          className="swiper-button-prev"
          src={Vector_white_left}
          alt="Previous"
          onClick={prevSlide}
        />
        <NavigationButton
          className="swiper-button-next"
          src={Vector_white_right}
          alt="Next"
          onClick={nextSlide}
        />
      </NavigationContainer>
    </SwiperDiv>
  );
};

export default Card4;

const items = [
  {
    title: "Design Thinking을 통한\n빠른 의사결정 및 MVP 제작",
    src: img1,
  },
  {
    title: "다양한 협업 방법론을 적용하면서\n더 나은 커뮤니케이션을 위한 회고",
    src: img2,
  },
  {
    title: "문제 해결부터 리소스 관리까지의\n 프로젝트 매니징 경험",
    src: img3,
  },
];

const Swiper1 = styled(Swiper)`
  flex: 0 0 auto;
  flex-direction: column;
  width: 330px;
  height: 370px;
  border-radius: 20px 20px 20px 20px;
  margin-top: 50px;
  overflow: hidden;
`;

const SwiperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  transform: translateY(-50%);
`;

const NavigationButton = styled.img`
  width: 15px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 210px;
`;
