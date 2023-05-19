import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';


const FooterWrapper = styled.footer`
    background-color: #2A2A2A;
    // background-color: white;
    width: 1440px;
    height: 130px;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
`;
const FooterLogoRules = styled.div`
    display:flex;
`
const PardLogo = styled.div`
  img {
    height: 3.1250vw;
    width: 9.7222vw;
  }
  margin-right: 1vw; 
  margin-left: 5.5556vw;
`;
const Rules = styled.a`
    /* 회칙 > */

    width: 39px;
    height: 20px;
    left: 223px;
    margin-top: 15px;

    /* Subtitle/ST2 - B 14 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */


    
    text-decoration:none;
    color : #FFFFFF;
`;
const LeftFooter = styled.div`
    display: flex;
    padding-top: 25px;
    justify-content: space-evenly;
`;

const LeftComponent = styled.div`
    margin-right : 380px;
    display: flex;
    flex-direction: column;
`;

const RightFooter = styled.div`
    color : #FFFFFF;
    display: flex;
    padding-top: 35px;
    flex-wrap: wrap;  // 넘치더라도 알아서 줄여주게끔. 
    gap: 70px; // 스페이스 간격 조절. 
    margin-bottom: 8px;
`;

const Information = styled.div`
    /* PARD (파드, Pay it forward를 실천하는 IT협업 동아리) ⓒPARD. 2023.All rights reserved. */

    width: 292px;
    height: 44px;
    left: 113px;
    top: 76px;
    margin-left: 6vw;

    /* Caption/C1 - R 12 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* or 22px */


    color: #FFFFFF99;
`;

const EmailLink = styled.a`
    /* EMAIL */
    width: 39px;
    height: 22px;

    /* Caption/C1 - R 12 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* identical to box height, or 22px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text/White */

    color: #FFFFFF;
    text-decoration:none;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
const Instagram = styled.a`
    /* INSTAGRAM */


    width: 75px;
    height: 22px;

    /* Caption/C1 - R 12 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* identical to box height, or 22px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text/White */

    color: #FFFFFF;
    text-decoration:none;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
const Youtube = styled.a`
    /* YOUTUBE */


    width: 61px;
    height: 22px;

    /* Caption/C1 - R 12 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* identical to box height, or 22px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text/White */

    color: #FFFFFF;
    text-decoration:none;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`
const Disquiet = styled.a`
    /* DISQUIET */


    width: 58px;
    height: 22px;

    /* Caption/C1 - R 12 */

    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    /* identical to box height, or 22px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text/White */

    color: #FFFFFF;
    text-decoration:none;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
`;

function Footer() {
  
  return (
    <FooterWrapper>

        <LeftFooter>
            <LeftComponent>
                <FooterLogoRules>
                    <PardLogo>
                        <img src={require("../assets/img/Logo.png")} alt="Logo" />
                    </PardLogo>
                    <Rules href = "https://brunch.co.kr/">
                        회칙{' >'}
                    </Rules>
                </FooterLogoRules>
                <Information>
                    PARD (파드, Pay it forward를 실천하는 IT협업 동아리)
                    ⓒPARD. 2023.All rights reserved.
                </Information>
            </LeftComponent>

            <RightFooter>
                <EmailLink href = "http://naver.com">Email</EmailLink>
                <Instagram href = "https://www.instagram.com/official_pard_/">Instagram</Instagram>
                <Youtube href = "https://www.youtube.com/">Youtube</Youtube>
                <Disquiet href = "https://disquiet.io/">Disquiet</Disquiet>
            </RightFooter>

        </LeftFooter>

    </FooterWrapper>
  );
}

export default Footer;