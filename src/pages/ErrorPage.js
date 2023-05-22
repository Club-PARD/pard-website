import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'



function ErrorPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
    const HomePageComponent = styled.div`
           background-color: '#1A1A1A';
           justify-content: center;
            width: 100%;
            min-width: 1440px;
    `;

    const HomePageComponent_Mob = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
`;

    return (
        <HomePageComponent>
            {isDesktopOrMobile !== true ?
                <div>
                    <h1>잘못 들어옴 ㅋ</h1>
                </div>
                :
                <HomePageComponent_Mob>
                    <h1>잘못 들어옴 ㅋ</h1>
                </HomePageComponent_Mob>
            }
        </HomePageComponent>
    );
}

export default ErrorPage;

