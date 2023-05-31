import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import img1 from "../../../assets/img/스터디1.png";
import img2 from "../../../assets/img/스터디2.png";
import img3 from "../../../assets/img/스터디3.png";
import Slideritem2 from "./SliderItem2";
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
        title: "전공, 파트, 나이와 상관없이\n원하면 누구나 모여 학습",
        src:
            img1
    },
    {
        title: "협업, AI, 3D 디자인 툴, 글쓰기,\n스포츠까지 다양한 주제로 진행",
        src:
            img2
    },
    {
        title: "Pay it forward 실천을 위한\n스터디 결과물 전체 공유",
        src:
            img3
    }
];

const Card2 = () => {
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
                loop={true}
                speed={800}
            >

                {items.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <Slideritem2 title={item.title} src={item.src} />
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

export default Card2;
