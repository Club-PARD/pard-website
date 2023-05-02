import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React, { useState, useEffect } from 'react';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 62vw;
`;

function HomeBigText() {

    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fontSize = `calc(var(--font-size) + ${scrollY * 0.03}px)`;

  return (
    <div style={{ fontSize }}>
      ㅁㄴㅇㄹㅁㄹㄴㄹ
    </div>
  );
}

export default HomeBigText;