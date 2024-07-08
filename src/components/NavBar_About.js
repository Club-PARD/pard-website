import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import backgroundImg from "../assets/img/BannerImg/BannerImg.png";
import closeButtonImg from "../assets/img/BannerImg/XButton.png";
import bannerImg from "../assets/img/web_banner_3기.png";

const NavBar_About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation();
  const animatedPosition = 700; //리쿠르팅배너용 : 620px

  // 배너 관련 코드.. 이때 총학 웹사이트 하고 바빴어서
  // 유지보수 생각 안하고 코드 짬요.. 다음 개발 파트장님 죄송합니다..
  const [isBannerVisible, setIsBannerVisible] = useState(false); // 여기 true로
  const [isSticky, setIsSticky] = useState(false);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    setIsSticky(false); // 여기 true로
  };

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsSticky(position >= 0); // 여기 49로
    }

    window.addEventListener("scroll", handleScroll, { passive: false }); // 여기 true로

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      {/* <BannerImg onClick={() => window.open("https://pard-notice.oopy.io")}>
        <img src={bannerImg} alt="banner"></img>
      </BannerImg> */}
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
                    isScrolled={scrollPosition >= animatedPosition}
                  >
                    소개
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Project" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Project"}
                    isScrolled={scrollPosition >= animatedPosition}
                  >
                    프로젝트
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Inquiry" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Inquiry"}
                    isScrolled={scrollPosition >= animatedPosition}
                  >
                    문의
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Recruiting" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/Recruiting"}
                    isScrolled={scrollPosition >= animatedPosition}
                  >
                    리쿠르팅
                  </Subtitle1>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Subtitle1
                    active={pathname === "/news"}
                    isScrolled={scrollPosition >= animatedPosition}
                  >
                    성과
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

// scroll위치 800px
// 3기 리쿠르팅 배너로인한 위치 620px

const Div = styled.div`
  top: 0;
  margin: 0px auto;
  display: fixed;
  flex-direction: column;
  position: fixed;
  z-index: 10000;
`;

const NavBarWrapper = styled.nav`
  background-color: ${({ scrollPosition }) =>
    scrollPosition >= 700 ? "#FFFFFF" : "#1A1A1A"};
  height: 70px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  z-index: 999;
  transition: background-color 0.3s ease;
  border: 1px #263af3;
  border-left: none;
  border-right: none;

  top: ${({ isSticky, isBannerVisible }) =>
    isBannerVisible ? (isSticky ? "0" : "12%") : "0%"};
  /* margin-top: 100px; // 배너용 */
`;

const NavDiv = styled.div`
  /* min-width: 1600px;
  max-width: 2000px; */
  width: 90.3%;
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
  position: absolute;
  background-image: url(${backgroundImg});
  background-size: contain;
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

  position: fixed;
  cursor: pointer;
`;
