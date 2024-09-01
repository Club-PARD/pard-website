import styled from "styled-components";
import { APPLY_FORM_URL, pardDATA } from "../../../utils/data.constant";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BannerWeb = () => {
  const navigate = useNavigate();
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

  const handleClick = () => {
    pardDATA.recruitStatus === "ready"
      ? navigate("/Recruiting")
      : window.open(APPLY_FORM_URL);
  };

  return (
    <BannerImg onClick={handleClick}>
      <img src={bannerImg} alt="banner"></img>
    </BannerImg>
  );
};

const BannerImg = styled.div`
  width: 100vw;

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
