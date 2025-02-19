import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import Email_Logo from "../../../assets/img/email_vector.png";
import Instargram_Logo from "../../../assets/img/instargram_vector.png";
import Youtube_Logo from "../../../assets/img/youtube_vector.png";
import Disquiet_Logo from "../../../assets/img/disquiet_vector.png";
import Email_b_Logo from "../../../assets/img/email_blue_vector.png";
import Instargram_b_Logo from "../../../assets/img/instargram_blue_vector.png";
import Youtube_b_Logo from "../../../assets/img/youtube_blue_vector.png";
import Disquiet_b_Logo from "../../../assets/img/disquiet_blue_vector.png";

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
            <a href="mailto:official@we-pard.com">
              <img className="email" src={Email_Logo} alt="이메일" />
            </a>
            <p className="email-text">메일</p>
          </AskBox>
          <AskBox>
            <a href="https://www.instagram.com/official_pard_/" target="_blank" rel="noopener noreferrer">
              <img className="instagram" src={Instargram_Logo} alt="인스타그램" />
            </a>
            <p className="instagram-text">인스타그램</p>
          </AskBox>
          <AskBox>
            <a href="https://www.youtube.com/channel/UCXZwffckReELqgFjKLNFBDA" target="_blank" rel="noopener noreferrer">
              <img className="youtube" src={Youtube_Logo} alt="유튜브" />
            </a>
            <p className="youtube-text">유튜브</p>
          </AskBox>
          <AskBox>
            <a href="https://disquiet.io/club/pard" target="_blank" rel="noopener noreferrer">
              <img className="disquiet" src={Disquiet_Logo} alt="디스콰이엇" />
            </a>
            <p className="disquiet-text">디스콰이엇</p>
          </AskBox>
        </AskContainer>
        <LogoDiv>
          <DownLogo src={require("../../../assets/img/DownScrollLogo.png")} alt="downLogo" />
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
  cursor: pointer;

  img {
    width: auto;
    height: 37.583px;
    transition: content 0.3s ease;
  }

  .email { width: 46.979px; }
  .instagram { width: 37.583px; }
  .youtube { width: 53.344px; }
  .disquiet { width: 49.089px; }

  &:hover .email { content: url(${Email_b_Logo}); }
  &:hover .instagram { content: url(${Instargram_b_Logo}); }
  &:hover .youtube { content: url(${Youtube_b_Logo}); }
  &:hover .disquiet { content: url(${Disquiet_b_Logo}); }

  p {
    color: #fff;
    text-align: center;
    font-family: "NanumSquare Neo";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    transition: color 0.1s ease;
  }

  &:hover .email-text,
  &:hover .instagram-text,
  &:hover .youtube-text,
  &:hover .disquiet-text {
    color: #5262F5;
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
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  line-height: 140%;
  color: #ffffff;
`;
