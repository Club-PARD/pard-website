import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

const NavBarWrapper = styled.nav`
 background-color: ${props => props.isScrolled ? (props.scrollPosition >= 1000 ? '#1A1A1A' : 'rgba(0,0,0,0)') : 'rgba(0,0,0,0)'};
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => props.isScrolled ? '0' : '-100%'});
`;

const Subtitle1 = styled.p`
  font-size: ${props => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${props => props.theme.fontWeights.Subtitle1};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  &:hover{
    color: #FFFFFF;
  }
`;

const Logo = styled.div`
  img {
    height: 3.1250vw;
    width: 9.7222vw;
  }
  margin-right: auto;
  margin-left: 5.5556vw;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 5rem;
`;

const NavItem = styled.li`
  margin-right: 50px;
`;

const NavBar_Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBarWrapper isScrolled={scrollPosition >= 30} scrollPosition={scrollPosition}>
      <ThemeProvider theme={theme}>
        <Logo>
          <Link to="/">
            <img src={require("../assets/img/Logo.png")} alt="Logo" />
          </Link>
        </Logo>
        <NavLinks>
          <NavItem>
            <Link to="/About" style={{ textDecoration: "none" }}>
              <Subtitle1 >소개</Subtitle1>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Project" style={{ textDecoration: "none" }}>
              <Subtitle1 >프로젝트</Subtitle1>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Inquiry" style={{ textDecoration: "none" }}>
              <Subtitle1 >문의</Subtitle1>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Recruting" style={{ textDecoration: "none" }}>
              <Subtitle1 >리쿠르팅</Subtitle1>
            </Link>
          </NavItem>
        </NavLinks>
        </ThemeProvider>
    </NavBarWrapper>
    );
};


export default NavBar_Home;