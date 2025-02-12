import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { theme } from "../../../styles/theme";
import Vec from "../../../assets/img/vector.png";
import Vec_p from "../../../assets/img/vector_purple.png";
import Email from "../../../assets/img/EmailLogo_white.png";
import Email_p from "../../../assets/img/EmailLogo_purple.png";
import Insta from "../../../assets/img/InstaLogo.png";
import Insta_p from "../../../assets/img/InstaLogo_purple.png";
import Youtube from "../../../assets/img/YoutubeLogo.png";
import Youtube_p from "../../../assets/img/YoutubeLogo_purple.png";
import Disquiet from "../../../assets/img/DisQuietLogo.png";
import Disquiet_p from "../../../assets/img/DisquietLogo_purple.png";

const Askmobile = () => {
  const [informbox1Hovered, setInformbox1Hovered] = useState();
  const [informbox2Hovered, setInformbox2Hovered] = useState();
  const [BusinessHovered, setBusinessHoveredHovered] = useState();

  const handleInformbox2Hover = (isHovered) => {
    setInformbox2Hovered(isHovered);
  };

  const handleInformbox1Hover = (isHovered) => {
    setInformbox1Hovered(isHovered);
  };

  const BusinessHoveredHover = (isHovered) => {
    setBusinessHoveredHovered(isHovered);
  };

  const [emailboxHovered, setEmailboxHovered] = useState();
  const [instaboxHovered, setInstaboxHovered] = useState();
  const [youtubeboxHovered, setYoutubeboxHovered] = useState();
  const [disquietboxHovered, setDisquietboxHovered] = useState();

  const handleEmailboxHover = (isHovered) => {
    setEmailboxHovered(isHovered);
  };

  const handleInstaboxHover = (isHovered) => {
    setInstaboxHovered(isHovered);
  };

  const handleYoutubeboxHover = (isHovered) => {
    setYoutubeboxHovered(isHovered);
  };

  const handleDisquietboxHover = (isHovered) => {
    setDisquietboxHovered(isHovered);
  };

  return (
    <ThemeProvider theme={theme}>
      <Margin>
        <Askstyledd>
          PARD에 대해
          <br />
          무엇이든 물어보세요!
        </Askstyledd>
        <Links>
        <Linkbox href="mailto:official@we-pard.com"
            onMouseEnter={() => handleEmailboxHover(true)}
            onMouseLeave={() => handleEmailboxHover()}
            hovered={emailboxHovered}>
          <Vector src={emailboxHovered ? Email_p : Email} alt="Email" />
          메일 
        </Linkbox>
        <Linkbox href="https://www.instagram.com/official_pard_/"
            onMouseEnter={() => handleInstaboxHover(true)}
            onMouseLeave={() => handleInstaboxHover()}
            hovered={instaboxHovered}>
          <Vector src={instaboxHovered ? Insta_p : Insta} alt="Insta" />
          인스타그램
        </Linkbox>
        <Linkbox
          href="https://www.youtube.com/channel/UCXZwffckReELqgFjKLNFBDA"
            onMouseEnter={() => handleYoutubeboxHover(true)}
            onMouseLeave={() => handleYoutubeboxHover()}
            hovered={youtubeboxHovered}>
          <Vector src={youtubeboxHovered ? Youtube_p : Youtube} alt="Youtube" />
          유튜브
        </Linkbox>
        <Linkbox href="https://disquiet.io/club/pard" 
        onMouseEnter={() => handleDisquietboxHover(true)}
        onMouseLeave={() => handleDisquietboxHover()}
        hovered={disquietboxHovered}>
      <Vector src={disquietboxHovered ? Disquiet_p : Disquiet} alt="Disquiet" />
      디스콰이엇
        </Linkbox>
      </Links>
      </Margin>
      <LogoDiv>
        <DownLogo
          src={require("../../../assets/img/DownScrollLogo.png")}
          alt="downLogo"
        />
      </LogoDiv>
    </ThemeProvider>
  );
};

export default Askmobile;

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;

  margin: 0px auto;
`;

const Askstyledd = styled.div`
  white-space: nowrap;
  margin-top: 110px;
  height: 84px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  line-height: 140%;
  /* or 42px */
  color: #ffffff;
  text-align: center;
  justify-content: center;
`;

const Vector = styled.img`
  max-height: 24.3px;
  width: auto;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
`;

const LogoDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 180px;
`;

const Links = styled.div`
  display: flex;
  margin-top: 60px;
  width: 303px;
  justify-content: space-between;
  align-items: center;

  color: #FFF;
  text-align: center;
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  line-height: 140%;
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
`;
const Linkbox = styled.a`
  /* EMAIL */
  height: 54px;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: space-between; /* 양쪽 끝 배치 */
  align-items: center; /* 가운데 정렬 */

  /* Text/White */

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
  text-decoration: none;
`;
