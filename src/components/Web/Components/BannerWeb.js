import styled from "styled-components";
import { pardDATA } from "../../../utils/data.constant";
import { useState } from "react";
import { useEffect } from "react";

export const BannerWeb = () => {
  const [bannerImg, setBannerImg] = useState(null);

  useEffect(() => {
    import(
      `../../../assets/img/banner/web_banner_${pardDATA.currentGeneration}기.png`
    )
      .then((image) => {
        setBannerImg(image.default);
      })
      .catch((err) => {
        console.error("Error loading image:", err);
      });
  }, []);

  return (
    <BannerImg>
      <img src={bannerImg} alt="banner"></img>
    </BannerImg>
  );
};

const BannerImg = styled.div`
  width: 100vw;
  height: 100px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    text-align: center;
  }

  position: fixed;
  cursor: pointer;
`;
