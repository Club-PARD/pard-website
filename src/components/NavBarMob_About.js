import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  background-color: ${({ isOpen }) => (isOpen ? 'rgba(26, 26, 26, 0.8)' : 'rgba(0,0,0,0)')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 69px;
  z-index: 999;
  border-bottom: none;
`;

const Logo = styled.div`
img {
    height: 51px;// 로고 크기가 px로 바꾸니 너무 작아서 1.5배늘림
    width: 180px;
  }
  margin-right: auto; 
  margin-left: 7px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: rgba(26, 26, 26, 0.8); // 여기가 NavBar 투명도
  padding: 1rem 5rem;
  text-align: center;
  height: 237px;
  margin-top: 4px;
`;

const Subtitle2 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Subtitle2};
  font-weight: ${props => props.theme.fontWeights.Subtitle2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 20px;
  margin-top: 20px;
  white-space: pre-line;
`;


const Hr = styled.hr`
width: 100%;
color: white;
`;

const NavBarMob_About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav isOpen={isOpen}>
      <ThemeProvider theme={theme}>
        <Logo>
          <Link to="/">
            <img src={require("../assets/img/Logo.png")} alt="Logo" />
          </Link>
        </Logo>
        <MenuButton onClick={toggleMenu}><FaBars /></MenuButton>
        <Menu isOpen={isOpen}>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Subtitle2>소개</Subtitle2>
          </Link>
          <Hr />
          <Link to="/Project" style={{ textDecoration: "none" }}>
            <Subtitle2>프로젝트</Subtitle2>
          </Link>
          <Hr />
          <Link to="/Inquiry" style={{ textDecoration: "none" }}>
            <Subtitle2>문의</Subtitle2>
          </Link>
          <Hr />
          <Link to="/Recruting" style={{ textDecoration: "none" }}>
            <Subtitle2>리쿠르팅</Subtitle2>
          </Link>
        </Menu>
      </ThemeProvider>
    </Nav>
  );
}

export default NavBarMob_About;
