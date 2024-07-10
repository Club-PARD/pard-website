import styled from "styled-components";
import bannerImg from "../../../assets/img/web_banner_3기.png";

export const BannerWeb = () => {
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
