import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import img1 from "../../../assets/img/서핑데이1.png";
import img2 from "../../../assets/img/서핑데이2.png";
import img3 from "../../../assets/img/서핑데이3.png";
import Slideritem3 from "./SliderItem3";
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
        title: "관계를 쌓고, 서로를 이해할 수 있는\n레크레이션 및 워크샵 진행",
        src:
            img1
    },
    {
        title: "조직문화 코칭 전문 회사에\n검수받은 자체 개발 프로그램 보유",
        src:
            img2
    },
    {
        title: "진짜 협업이란 무엇인지에 대한 깊은 토의",
        src:
            img3
    }
];

const Card3 = () => {
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
                            <Slideritem3 title={item.title} src={item.src} />
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

export default Card3;
