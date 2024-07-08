import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

function ErrorPage() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <HomePageComponent>
      {isDesktopOrMobile !== true ? (
        <div>
          <Text>잘못된 URL</Text>
          <h1>파드 1기분들 너무 수고하셨고 고마웠어요!</h1>
          <h1>
            파드 2기분들 만나서 너무 반갑습니다. 이번학기 즐겁게 보내봐요 @_@
          </h1>
        </div>
      ) : (
        <HomePageComponentMob>
          <Text>잘못된 URL</Text>
          <h1>파드 1기분들 너무 수고하셨고 고마웠어요!</h1>
          <h1>
            파드 2기분들 만나서 너무 반갑습니다. 이번학기 즐겁게 보내봐요 @_@
          </h1>
        </HomePageComponentMob>
      )}
    </HomePageComponent>
  );
}

export default ErrorPage;

const HomePageComponent = styled.div`
  background-color: "#1A1A1A";
  justify-content: center;
  width: 100%;
  min-width: 1440px;
  color: #1a1a1a;
`;

const HomePageComponentMob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
`;

const Text = styled.div`
  color: black;
  font-size: 100px;
`;
