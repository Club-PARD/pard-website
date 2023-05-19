import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";

function RecruitingPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
    const RecruitingPageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <RecruitingPageComponent>
            {isDesktopOrMobile !== true ?
                <div>
                    <Navbar />
                    <h1>RecruitingPage</h1>
                    <Footer/>
                </div>
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