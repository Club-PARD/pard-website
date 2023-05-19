// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";
import ProgramFirst from "../components/Web/Web-ProjectPage/ProgramFirst";

function ProjectPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
    `;

    const ProgramPageComponent_Web = styled.div`
        justify-content: center;
        width: 100%;
        min-width: 1440px;
    `;


    return (
        <AboutPageComponent>
            {isDesktopOrMobile !== true ?
                <ProgramPageComponent_Web>
                    <Navbar />
                    <ProgramFirst/>
                    <Footer/>
                </ProgramPageComponent_Web>
                :
                <div>
                    <NavBarMov />
                    <h1>프로젝트 모바일</h1>
                </div>
            }
        </AboutPageComponent>
    );
}

export default ProjectPage;