import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";
import RecruitingFirst from "../components/Web/Web-RecruitingPage/RecruitingFirst";
import RecruitingSecond from "../components/Web/Web-RecruitingPage/RecruitingSecond";
import RecruitingIdeal from "../components/Web/Web-RecruitingPage/RecruitingIdeal";
import RecruitingPart from "../components/Web/Web-RecruitingPage/RecruitingPart";
import RecruitingReview from "../components/Web/Web-RecruitingPage/RecruitingReview";
import RecruitingAbout from "../components/Web/Web-RecruitingPage/RecruitingAbout";
import RecruitingLast from "../components/Web/Web-RecruitingPage/RecruitingLast";

function RecruitingPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
    const RecruitingPageComponent = styled.div`
    `;

const RecruitingPageComponent_Mob = styled.div`
        justify-content: center;
        width: 100%;
        min-width: 1440px;
`;
    return (
        <RecruitingPageComponent>
            {isDesktopOrMobile !== true ?
                <RecruitingPageComponent_Mob>
                    <Navbar />
                    <RecruitingFirst/>
                    <RecruitingSecond/>
                    <RecruitingIdeal/>
                    <RecruitingPart/>
                    <RecruitingReview/>
                    <RecruitingAbout/>
                    <RecruitingLast/>
                    <Footer/>
                </RecruitingPageComponent_Mob>
                :
                <div>
                    <NavBarMov />
                    <h1>RecruitingPage 모바일</h1>
                </div>
            }
        </RecruitingPageComponent>
    );
}

export default RecruitingPage;