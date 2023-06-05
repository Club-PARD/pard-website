import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Vector_white_left from "../../../assets/img/Vector_white_left.png";
import Vector_white_right from "../../../assets/img/Vector_white_right.png";
import img1 from "../../../assets/img/롱커톤1.png";
import img2 from "../../../assets/img/롱커톤2.png";
import img3 from "../../../assets/img/롱커톤3.png";
import Slideritem5 from "./SliderItem5";
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

        src: img1,
        title: "파트 상관없이 누구나 아이디어를\n제시하고 설득하여 팀 빌딩",
    },
    {

        src: img2,
        title: "3주간 현업 실무진들의 밀착\n멘토링과 함께 프로젝트 설계",
    },
    {

        src: img3,
        title:
            "심사위원, 멘토, 청중과 함께\n찐한 협업의 결과물을 나누는 데모데이",
    },

];

const Card5 = () => {
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
                            <Slideritem5 title={item.title} src={item.src} />
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

export default Card5;
