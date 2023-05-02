import Navbar from "../components/NavBar";
import styled from "styled-components";
import HomeVideoWeb from "../components/Web/Web-HomePage/HomeVideo";
import HomePartWeb from "../components/Web/Web-HomePage/HomePart";
import HomeProgramWeb from "../components/Web/Web-HomePage/HomeProgram";
import HomePartnerWeb from "../components/Web/Web-HomePage/HomePartner";
import HomeLastWeb from "../components/Web/Web-HomePage/HomeLast";
import HomeMentorWeb from "../components/Web/Web-HomePage/HomeMentor";
import { useMediaQuery } from 'react-responsive'
import HomeMentorMob from "../components/Mobile/Mob-HomePage/HomeMentor_Mob";
import HomeVideoMob from "../components/Mobile/Mob-HomePage/HomeVideo_Mob";
import HomeProgramMob from "../components/Mobile/Mob-HomePage/HomeProgram_Mob";
import HomePartsMob from "../components/Mobile/Mob-HomePage/HomePart_Mob";
import HomeLastsMob from "../components/Mobile/Mob-HomePage/HomeLast_Mob";
import HomePartnerMob from "../components/Mobile/Mob-HomePage/HomePartner_Mob";



function HomePage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
    const HomePageComponent = styled.div`
           background-color: 'black';
    `;

    return (
        <HomePageComponent>
            <Navbar />
            {isDesktopOrMobile !== true ?
                <div>
                    <HomeVideoWeb />
                    <HomePartWeb />
                    <HomeProgramWeb />
                    <HomeMentorWeb />
                    <HomePartnerWeb />
                    <HomeLastWeb />
                </div>
                :
                <div>
                    <HomeVideoMob/>
                    <HomePartsMob/>
                    <HomeProgramMob/>
                    <HomeMentorMob/>
                    <HomePartnerMob/>
                    <HomeLastsMob/>

                </div>
            }
        </HomePageComponent>
    );
}

export default HomePage;