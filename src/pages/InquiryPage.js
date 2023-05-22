// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import InquiryContact from "../components/Web/Web-InquiryPage/InquiryContact";
import InquiryManagement from "../components/Web/Web-InquiryPage/InquiryManagement";
import InquiryLast from "../components/Web/Web-InquiryPage/InquriyLast";
import InquiryContactMob from "../components/Mobile/Mob-InquiryPage/InquiryContact_Mob";
import InquiryManagemaentMob from "../components/Mobile/Mob-InquiryPage/InquiryManagement_Mob";
import InquiryLastMob from "../components/Mobile/Mob-InquiryPage/InquiryLast_Mob";
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";

function InquiryPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
        
    `;

const AboutPageComponent_Web = styled.div`
        justify-content: center;
        width: 100%;
        min-width: 1440px;
`;

    return (
        <AboutPageComponent>
            {isDesktopOrMobile !== true ?
                <AboutPageComponent_Web>
                     <Navbar />
                    <InquiryContact />
                    <InquiryManagement />
                    <InquiryLast />
                    <Footer/>
                </AboutPageComponent_Web>
                :
                <div>
                     <NavBarMov/>
                    <InquiryContactMob />
                    <InquiryManagemaentMob />
                    <InquiryLastMob />
                </div>
            }
        </AboutPageComponent>
    );
}

export default InquiryPage;