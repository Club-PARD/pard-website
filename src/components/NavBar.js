import React from "react";
import { Link,NavLink, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import backgroundImg from "../assets/img/BannerImg/BannerImg.png";
import closeButtonImg from "../assets/img/BannerImg/XButton.png";

const Div = styled.div`
  margin: 0px auto;
`;

const NavBarWrapper = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #1a1a1a;
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
  text-decoration-line:none;
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
  text-decoration-line:none;
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
    text-decoration-line:none;
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

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 배너 관련 코드.. 이때 총학 웹사이트 하고 바빴어서
  // 유지보수 생각 안하고 코드 짬요.. 다음 개발 파트장님 죄송합니다..
  const [isBannerVisible, setIsBannerVisible] = useState(false); // 여기 true로
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation(); // 현재 페이지의 URL을 가져옴

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    setIsSticky(false); // 여기 true로
  };

  useEffect(() => {
    setIsBannerVisible(true);
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsSticky(position >= 0);
    }

    window.addEventListener("scroll", handleScroll, { passive: false }); // 여기 true로

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // URL 경로가 "/Recruting"인 경우에만 isBannerVisible를 false로 설정
    setIsBannerVisible(pathname !== "/Recruting");
  }, [pathname]);

  return (
    <Div>
      <>
        {/* {isBannerVisible && (
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
        )} */}
      </>
      <NavBarWrapper
        // scrollPosition={scrollPosition}
        // isSticky={isSticky}
        // isBannerVisible={isBannerVisible}
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
                <Link to="/Recruting" style={{ textDecoration: "none" }}>
                  <Subtitle1 active={pathname === "/Recruting"}>
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

export default NavBar;
