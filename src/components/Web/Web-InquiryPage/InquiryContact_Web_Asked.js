import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../styles/theme";
import Email_Logo from "../../../assets/img/email_vector.png";
import Instargram_Logo from "../../../assets/img/instargram_vector.png";
import Youtube_Logo from "../../../assets/img/youtube_vector.png";
import Disquiet_Logo from "../../../assets/img/disquiet_vector.png";

const Ask = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Margin>
        <Askedstyled>
          PARD에 대해
          <br />
          무엇이든 물어보세요!
        </Askedstyled>   
      </Margin>
      <AskContainer>
        <AskBox>
          <img 
            src={Email_Logo} 
            alt="이메일" 
            style={{ width: "46.979px", height: "37.583px" }}
            onClick={() => {
              navigator.clipboard.writeText("official@we-pard.com");
              alert("이메일이 복사되었습니다!");
            }} 
          />
          <p>메일</p>
        </AskBox>
        <AskBox>
          <a href="https://www.instagram.com/official_pard_/">
            <img src={Instargram_Logo} alt="인스타그램" style={{ width: "37.583px", height: "37.583px" }} />
          </a>
          <p>인스타그램</p>
        </AskBox>
        <AskBox>
          <a href="https://www.youtube.com/channel/UCXZwffckReELqgFjKLNFBDA">
            <img src={Youtube_Logo} alt="유튜브" style={{ width: "53.344px", height: "37.583px" }} />
          </a>
          <p>유튜브</p>
        </AskBox>
        <AskBox>
          <a href="https://disquiet.io/club/pard">
            <img src={Disquiet_Logo} alt="디스콰이엇" style={{ width: "49.089px", height: "38.001px" }} />
          </a>
          <p>디스콰이엇</p>
        </AskBox>
      </AskContainer>
      <LogoDiv>
        <DownLogo
          src={require("../../../assets/img/DownScrollLogo.png")}
          alt="downLogo"
        />
      </LogoDiv>
      </Container>
    </ThemeProvider>
  );
};

export default Ask;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Margin = styled.div`
  display: flex;
  text-align: center;
  margin-top: 120px;
`;

const AskContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 70px;
`;

const AskBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #FFF;
    text-align: center;

    /* Header/H6 - B 20 */
    font-family: "NanumSquare Neo";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
  }
`;

const DownLogo = styled.img`
  width: 80px;
  height: 63px;
  padding-top: 55px;
`;

const LogoDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 20.5px;
`;

const Askedstyled = styled.div`
  white-space: nowrap;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: "white";
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  line-height: 140%;
  /* or 84px */

  color: #ffffff;
`;