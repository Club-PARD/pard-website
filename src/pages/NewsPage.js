import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavBar from "../components/NavBar";
import NavBarMov from "../components/NavBarMov";
import Footer from "../components/Footer";
import FooterMov from "../components/FooterMov";

export default function NewsPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
  return (
    <>
      <NewsPageComponent>
        {isDesktopOrMobile !== true ? (
          <NewsPageComponent_Web>
            <NavBar />
            <Footer />
          </NewsPageComponent_Web>
        ) : (
          <NewsPageComponent_Mob>
            <NavBarMov />
            <FooterMov />
          </NewsPageComponent_Mob>
        )}
      </NewsPageComponent>
    </>
  );
}

const NewsPageComponent = styled.div`
  width: 100vw;
`;

const NewsPageComponent_Web = styled.div`
  justify-content: center;
  width: 100%;
  min-width: 1440px;
`;

const NewsPageComponent_Mob = styled.div`
  width: 100%;
  justify-content: center;
`;
