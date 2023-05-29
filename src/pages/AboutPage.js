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
import Footer from "../components/Footer";
import FooterMov from "../components/FooterMov";
import NavBar_About from "../components/NavBar_About";
import NavBarMov_About from "../components/NavBarMob_About";

function AboutPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
    `;

const AboutPageComponent_Web = styled.div`
justify-content: center;
background-color: #1A1A1A;
width: 100%;
min-width: 1440px;
`;

const AboutPageComponent_Mob = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-width: 420px;
`;


    return (
        <AboutPageComponent>
            {isDesktopOrMobile !== true ?
                <AboutPageComponent_Web>
                    <NavBar_About/>
                    <AboutFirst />
                    <AboutVision />
                    <AboutPart />
                    <AboutProgram />
                    <AboutMentor />
                    <AboutLast />
                    <Footer/>
                </AboutPageComponent_Web>
                :
                <AboutPageComponent_Mob>
                    <NavBarMov_About/>
                    <AboutFirst_Mob />
                    <AboutVision_Mob />
                    <AboutPart_Mob />
                    <AboutProgram_Mob />
                    <AboutMentor_Mob />
                    <AboutLast_Mob />
                    <FooterMov/>
                </AboutPageComponent_Mob>
            }
        </AboutPageComponent>
    );
}

export default AboutPage;