import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";
import Projectirst from "../components/Web/Web-ProjectPage/ProjectFirst";
import ProjectFirst_Mob from "../components/Mobile/Mob-ProjectPage/ProjectFirst_Mob";
import ProjectLast_Mob from "../components/Mobile/Mob-ProjectPage/ProjectLast_Mob";
import ProjectLast from "../components/Web/Web-ProjectPage/Project_Last";
import FooterMov from "../components/FooterMov";

function ProjectPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <AboutPageComponent>
      {isDesktopOrMobile !== true ? (
        <ProgramPageComponent_Web>
          <Navbar />
          <Projectirst />
          <ProjectLast />
          <Footer />
        </ProgramPageComponent_Web>
      ) : (
        <ProgramPageComponent_Mob>
          <NavBarMov />
          <ProjectFirst_Mob />
          <ProjectLast_Mob />
          {/* <TemporaryPage/> */}
          <FooterMov />
        </ProgramPageComponent_Mob>
      )}
    </AboutPageComponent>
  );
}

export default ProjectPage;

const AboutPageComponent = styled.div`
  width: 100vw;
`;

const ProgramPageComponent_Web = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const ProgramPageComponent_Mob = styled.div`
  width: 100%;
`;
