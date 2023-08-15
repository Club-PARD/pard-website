import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import backgroundImg from "../assets/img/BannerImg/BannerImg.png";
import closeButtonImg from "../assets/img/BannerImg/XButton.png";

const Div = styled.div`
  margin: 0px auto;
`;

const NavBarWrapper = styled.nav`
  background-color: ${({ scrollPosition }) =>
    scrollPosition >= 800 ? "#FFFFFF" : "#1A1A1A"};
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: background-color 0.3s ease;
  border: 1px #263af3;
  border-left: none;
  border-right: none;
  top: ${({ isSticky, isBannerVisible }) =>
    isBannerVisible ? (isSticky ? "0" : "12%") : "0%"};
`;

const NavDiv = styled.div`
  min-width: 1600px;
  max-width: 2000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Subtitle1 = styled.p`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  font-family: "NanumSquare Neo";

  // Apply the color based on the scroll position and active state
  color: ${
    (props) =>
      props.isScrolled
        ? props.active
          ? "#1A1A1A" // Scrolled and active: dark gray
          : "rgba(26, 26, 26, 0.2)" // Scrolled and not active: dark gray with 0.2 opacity
        : props.active
        ? "#FFFFFF" // Not scrolled and active: white
        : "rgba(255, 255, 255, 0.2)" // Not scrolled and not active: white with 0.2 opacity
  };
  // Apply the hover color based on the scroll position
  &:hover {
    color: ${(props) => (props.isScrolled ? "#1A1A1A" : "#FFFFFF")};
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

const NavBar_About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation();

  // 배너 관련 코드.. 이때 총학 웹사이트 하고 바빴어서
  // 유지보수 생각 안하고 코드 짬요.. 다음 개발 파트장님 죄송합니다..
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    setIsSticky(true);
  };

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsSticky(position >= 49);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      <>
        {isBannerVisible && (
          <NavLink to="/Recruting" style={{ textDecoration: "none" }}>
            <BannerDiv>
              <CloseButton
                src={closeButtonImg}
                onClick={handleCloseBanner}
                isBannerVisible={isBannerVisible}
              />
              <MainText>PARD 2기 신입기수 리쿠르팅 시작</MainText>
              <SubText>지원서 접수 기간 : 08.14(월) - 08.25(금)</SubText>
            </BannerDiv>
          </NavLink>
        )}
      </>
      <NavBarWrapper
        scrollPosition={scrollPosition}
        isSticky={isSticky}
        isBannerVisible={isBannerVisible}
      >
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
                  <Subtitle1
                    active={pathname === "/About"}
                    isScrolled={scrollPosition >= 800}
                  >
                    소개
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Project" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Project"}
                    isScrolled={scrollPosition >= 800}
                  >
                    프로젝트
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Inquiry"}
                    isScrolled={scrollPosition >= 800}
                  >
                    문의
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Recruting" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Recruting"}
                    isScrolled={scrollPosition >= 800}
                  >
                    리쿠르팅
                  </Subtitle1>
                </Link>
              </NavItem>
            </NavLinks>
          </NavDiv>
        </ThemeProvider>
      </NavBarWrapper>
    </Div>
  );
};

export default NavBar_About;
