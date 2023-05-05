import React, { useState } from 'react';
import styled,{ ThemeProvider }  from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  background-color: #1A1A1A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.div`
img {
    height: 25px;
    width: 120px;
  }
  margin-right: auto; 
  margin-left: 1.8056vw;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Menu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #1A1A1A;
  padding: 1rem;
  text-align: center;
`;

const Subtitle2 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Subtitle2};
  font-weight: ${props => props.theme.fontWeights.Subtitle2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 5.3333vw;
  margin-top: 5.3333vw;
  white-space: pre-line;
`;


const Hr = styled.hr`
width: 133px;
color: white;
`;

const NavBarMov = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Nav>
            <ThemeProvider theme={theme}>
                <Logo>
                <img src={require("../assets/img/Logo.png")} alt="Logo" />
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

export default NavBarMov;
