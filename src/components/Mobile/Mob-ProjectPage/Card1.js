import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import img1 from "../../../assets/img/세미나1.png";
import img2 from "../../../assets/img/세미나2.png";
import img3 from "../../../assets/img/세미나3.png";
import Slideritem1 from "./SliderItem1";
import styled from 'styled-components';

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

const items = [
    {
        title: "8주간 직무별 역량 강화를 위해\n진행하는 파트별 세미나 세션",
        src:
            img1
    },
    {
        title: "탄탄한 커리큘럼으로 이루어진\n이론과 실습 진행",
        src:
            img2
    },
    {
        title: "타 직군에 대해 이해하고\n함께 성장하는 연합 세미나 세션",
        src:
            img3
    }
];

const Card1 = () => {
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
                    nextEl: ".swiper-button-next"
                }}
                slidesPerView={1}
                spaceBetween={35}
                effect={"fade"}
                loop={false}
                speed={800}
            >

                {items.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <Slideritem1 title={item.title} src={item.src} />
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

export default Card1;
