import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import backgroundImg from "../assets/img/BannerImg/BannerImg.png";
import { BannerWeb } from "./Web/Components/BannerWeb";
import { pardDATA } from "../utils/data.constant";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation(); // 현재 페이지의 URL을 가져옴

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: false }); // 여기 true로

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      {pardDATA.displayBanner ? <BannerWeb /> : null}
      <NavBarWrapper scrollPosition={scrollPosition}>
        <ThemeProvider theme={theme}>
          <NavDiv>
            <Logo>
              <Link to="/">
                <img src={require("../assets/img/Logo.png")} alt="Logo" />
              </Link>
            </Logo>
            <NavLinks>
              <NavItem>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/About"}>소개</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Project" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname.startsWith("/Project")}>
                    프로젝트
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/Inquiry"}>문의</Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Recruiting" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/Recruiting"}>
                    리쿠르팅
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/news"}>성과</Subtitle1>
                </Link>
              </NavItem>
            </NavLinks>
          </NavDiv>
        </ThemeProvider>
      </NavBarWrapper>
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  top: 0;
  margin: 0px auto;
  display: fixed;
  flex-direction: column;
  position: fixed;
  z-index: 10000;
`;

const NavBarWrapper = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;

  top: 0;
  width: 100vw;
  z-index: 999;
  background-color: #1a1a1a;
  border: 1px #263af3;
  border-left: none;
  border-right: none;
  margin-top: ${pardDATA.displayBanner ? "100px" : "none"};
  position: relative;
`;

const NavDiv = styled.div`
  width: 90.3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Subtitle1 = styled.p`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: ${(props) => (props.active ? "#FFFFFF" : "rgba(255, 255, 255, 0.2)")};
  font-family: "NanumSquare Neo";
  &:hover {
    color: #ffffff;
  }
`;

const Logo = styled.div`
  img {
    height: 45px;
    width: 140px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 10px;
`;

const NavItem = styled.li`
  margin-left: 50px;
`;

// 배너 관련 Style-components

const MainText = styled.div`
  color: #fff;
  text-align: center;
  font-family: "NanumSquare Neo variable";
  font-size: 19.333px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 1.933px;
  text-decoration-line: none;
  text-decoration: none;
`;

const SubText = styled.div`
  color: #fff;
  text-align: center;
  font-family: "NanumSquare Neo variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 8px;
  text-decoration-line: none;
  text-decoration: none;
`;

const BannerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 120px;
  background-image: url(${backgroundImg});
  cursor: pointer;
  text-decoration: none;
  text-decoration-line: none;
  pointer-events: none;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 31px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const BannerImg = styled.div`
  width: 100vw;
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
