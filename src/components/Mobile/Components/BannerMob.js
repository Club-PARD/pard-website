import React from "react";
import bannerImg from "../../../assets/img/mob_banner_3기.png";
import styled from "styled-components";

export const BannerMob = () => {
  return (
    <BannerImg onClick={() => window.open("https://pard-notice.oopy.io")}>
      <img src={bannerImg} alt="banner" />
    </BannerImg>
  );
};

const BannerImg = styled.div`
  width: 100%;
  height: 100px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    text-align: center;
  }

  z-index: 1000;
  position: fixed;
  cursor: pointer;
`;
