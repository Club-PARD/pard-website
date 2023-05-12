// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import NavBarMov from "../components/NavBarMov";
import AboutVision from "../components/Web/Web-AboutPage/Web-AboutVision"
import AboutFirst from "../components/Web/Web-AboutPage/Web-AboutFirst";
import AboutPart from "../components/Web/Web-AboutPage/Web-AboutPart";
import AboutProgram from "../components/Web/Web-AboutPage/Web-AboutProgram";
import AboutMentor from "../components/Web/Web-AboutPage/Web-AboutMentor";
import AboutLast from "../components/Web/Web-AboutPage/Web-AboutLast";
import AboutFirst_Mob from "../components/Mobile/Mob-AboutPage/AboutFirst_Mob";
import AboutVision_Mob from "../components/Mobile/Mob-AboutPage/AboutVision_Mob";
import AboutPart_Mob from "../components/Mobile/Mob-AboutPage/AboutPart_Mob";
import AboutProgram_Mob from "../components/Mobile/Mob-AboutPage/AboutProgram_Mob";
import AboutMentor_Mob from "../components/Mobile/Mob-AboutPage/AboutMentor_Mob";
import AboutLast_Mob from "../components/Mobile/Mob-AboutPage/AboutLast_Mob";

function AboutPage(){
    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'}); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
        
    `;
    return (
        <AboutPageComponent>
            {isDesktopOrMobile !== true ? 
            <div>
                 <Navbar />
                 <AboutFirst/>
                <AboutVision/>
                <AboutPart/>
                <AboutProgram/>
                <AboutMentor/>
                <AboutLast/>
            </div>
            :
            <div>
                <NavBarMov/>
                <AboutFirst_Mob/>
                <AboutVision_Mob/>
                <AboutPart_Mob/>
                <AboutProgram_Mob/>
                <AboutMentor_Mob/>
                <AboutLast_Mob/>
            </div>
            }
        </AboutPageComponent>
    );
}

export default AboutPage;