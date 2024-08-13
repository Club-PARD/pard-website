import React from "react";
import styled from "styled-components";
import { pardDATA } from "../../../utils/data.constant";
import { useState } from "react";
import { useEffect } from "react";

export const BannerMob = () => {
  const [bannerImg, setBannerImg] = useState(null);

  useEffect(() => {
    import(
      `../../../assets/img/banner/mob_banner_${pardDATA.currentGeneration}기.png`
    )
      .then((image) => {
        setBannerImg(image.default);
      })
      .catch((err) => {
        console.error("Error loading image:", err);
      });
  }, []);

  return (
    <BannerImg onClick={() => window.open("https://pard-notice.oopy.io")}>
      <img src={bannerImg} alt="banner"></img>
    </BannerImg>
  );
};

const BannerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    text-align: center;
  }

  z-index: 1000;
  position: fixed;
  cursor: pointer;
`;
