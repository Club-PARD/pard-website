import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { theme } from "../../../styles/theme";
import Vec from "../../../assets/img/vector.png";
import Vec_p from "../../../assets/img/vector_purple.png";

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;

  margin: 0px auto;
`;

const Askstyledd = styled.div`
  white-space: nowrap;
  margin-top: 140px; //3기 리쿠르팅용
  /* margin-top: 110px; //간격 좀 내림 */

  margin-left: 8px;
  width: 273px;
  height: 84px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  line-height: 140%;
  /* or 42px */

  color: #ffffff;
`;

const Informbox = styled.form`
  margin-left: 9px;
  margin-top: 90px;
  width: 327px;
  height: 126px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Lineup = styled.div`
  margin-top: 0px;
  left: 0px;

  width: 327px;

  border: 1px solid #5262f5;
`;

const Informbox1 = styled.div`
  text-decoration: none;
  display: flex;
  width: 326px;
  height: 28px;
  margin-top: 20px;
  margin-left: 0px;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.clicked ? "#5262f5" : "#ffffff")};
`;

const handleInformbox1Click = () => {
  const mailtoLink = "mailto:official@we-pard.com";
  window.open(mailtoLink, "_blank");
};

const Mail = styled.div`
  white-space: nowrap;
  width: 38px;
  height: 28px;
  margin-top: 0px;
  margin-left: 0px;

  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header6};
  line-height: 140%;
  /* identical to box height, or 28px */

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;

const EMail = styled.div`
  white-space: nowrap;
  margin-top: 0px; // 전체 informbox div기준으로는 top0px,
  margin-left: 87px; // 바로 위에 Mail 기준으로는 margin-left 87px

  width: 177px;
  height: 22px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-size: ${(props) => props.theme.Mob_fontSizes.ButtonText1};
  line-height: 18px;
  /* identical to box height */

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;
const Vector = styled.img`
  max-width: 10px;
  width: 10px;
  height: auto;
`;

const Vectorbox1 = styled.div`
  margin-top: 0px;

  margin-left: 14px;
`;

const Informbox2 = styled.a`
  display: flex;
  width: 326px;
  height: 28px;
  margin-top: 31px;
  margin-left: 0px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;
const Instagram = styled.div`
  white-space: nowrap;
  margin-top: 0px;
  margin-left: 0px;
  height: 28px;
  width: 95px; //widht 2vw높임
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header6};
  line-height: 140%;
  /* identical to box height, or 28px */

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;
const Instaid = styled.div`
  margin-left: 84px;
  margin-top: 0px;

  width: 123px;
  height: 22px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-size: ${(props) => props.theme.Mob_fontSizes.ButtonText1};
  line-height: 18px;
  /* identical to box height */

  text-align: right;

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;

const Vectorbox2 = styled.div`
  margin-top: 0px;

  margin-left: 14px;
`;
const Linedown = styled.div`
  margin-top: 20px;
  left: 0px;

  width: 327px;

  border: 1px solid #5262f5;
`;
const Business = styled.div`
  white-space: nowrap;
  margin-top: 20px;
  margin-left: 8px;

  width: 206px; //원래보다 vw6높임
  height: 28px;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header6};
  line-height: 140%;
  /* identical to box height, or 28px */

  color: ${(props) => (props.hovered ? "#5262f5" : "#ffffff")};
`;
const Here = styled(Link)`
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-size: ${(props) => props.theme.Mob_fontSizes.Header6};
  line-height: 140%;
  color: #5262f5;
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
`;

const LogoDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 79px;
`;

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

  return (
    <ThemeProvider theme={theme}>
      <Margin>
        <Askstyledd>
          PARD에 대해
          <br />
          무엇이든 물어보세요!
        </Askstyledd>
        <Informbox>
          <Lineup />
          <Informbox1
            href="mailto:official@we-pard.com"
            onMouseEnter={() => handleInformbox1Hover(true)}
            onMouseLeave={() => handleInformbox1Hover()}
          >
            <Mail hovered={informbox1Hovered}>메일</Mail>
            <EMail hovered={informbox1Hovered}>official@we-pard.com</EMail>
            <Vectorbox1>
              <Vector src={informbox1Hovered ? Vec_p : Vec} />
            </Vectorbox1>
          </Informbox1>
          <Informbox2
            href="https://www.instagram.com/official_pard_/"
            target="_blank"
            onMouseEnter={() => handleInformbox2Hover(true)}
            onMouseLeave={() => handleInformbox2Hover()}
            hovered={informbox2Hovered}
          >
            <Instagram hovered={informbox2Hovered}>인스타그램</Instagram>
            <Instaid hovered={informbox2Hovered}>@official_pard_</Instaid>
            <Vectorbox2>
              <Vector src={informbox2Hovered ? Vec_p : Vec} />
            </Vectorbox2>
          </Informbox2>
          <Linedown />
        </Informbox>

        <Business
          onMouseEnter={() => BusinessHoveredHover(true)}
          onMouseLeave={() => BusinessHoveredHover()}
          hovered={BusinessHovered}
        >
          비즈니스 문의는 &nbsp;
          <Here href="mailto:official@we-pard.com" hovered={informbox2Hovered}>
            여기로
          </Here>
        </Business>
      </Margin>
      <LogoDiv>
        <DownLogo src={require("../../../assets/img/DownScrollLogo.png")} />
      </LogoDiv>
    </ThemeProvider>
  );
};

export default Askmobile;
