import styled, { ThemeProvider } from "styled-components";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { theme } from "../../../styles/theme";
import disquiet from "../../../assets/img/disquiet.png";
import LinkedIn from "../../../assets/img/LinkedInLogo.png";
import WebLogo from "../../../assets/img/WebLogo.png";
import { pardDATA } from "../../../utils/data.constant";
import { managerData } from "../../../utils/manager.constant";

function InquiryManagement() {
  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>
          거친 파도를 뚫고 나가는<br></br>파드 {pardDATA.currentGeneration}기
          운영진을 소개합니다.
        </Header7>
        <Subtitle3>
          함께 했을 때 더 큰 일을<br></br>이룰 수 있음을 강하게 믿고 있어요.
        </Subtitle3>
        <GridContainer>
          {managerData.map((content) => (
            <Column key={content.id}>
              <ImageWrapper>
                <Image src={content.imgsrc} alt={`Image ${content.id}`}></Image>
                <TextWrap position={content.position}>
                  <Subtitle1>{content.name}</Subtitle1>
                  <Caption>{content.position}</Caption>
                  <IconWrapper>
                    {content.site.map((site) => (
                      <IconBackground
                        key={site.name}
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          href={site.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {site.name === "instagram" ? (
                            <FaInstagram
                              style={{
                                color: "black",
                                width: "22px",
                                height: "22px",
                              }}
                            />
                          ) : site.name === "linkedin" ? (
                            <img
                              src={LinkedIn}
                              alt="LinkedIn Logo"
                              style={{ width: "20px", height: "20px" }}
                            />
                          ) : site.name === "github" ? (
                            <FaGithub
                              style={{
                                color: "black",
                                width: "24px",
                                height: "24px",
                              }}
                            />
                          ) : site.name === "web" ? (
                            <img
                              src={WebLogo}
                              alt="Web Logo"
                              style={{ width: "24px", height: "24px" }}
                            />
                          ) : (
                            <img
                              src={disquiet}
                              alt="Disquiet Logo"
                              style={{
                                width: "22px",
                                height: "17px",
                                marginLeft: "4.5px",
                              }}
                            />
                          )}
                        </Icon>
                      </IconBackground>
                    ))}
                  </IconWrapper>
                </TextWrap>
              </ImageWrapper>
            </Column>
          ))}
        </GridContainer>
      </ThemeProvider>
    </PartDiv>
  );
}

export default InquiryManagement;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 50px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;

const Subtitle3 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle3};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle3};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 170px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;

const Subtitle1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 38px;
  left: 58%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-bottom: -10px;
  white-space: pre-line;
  text-align: left;
`;
const Caption = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Caption};
  font-weight: ${(props) => props.theme.fontWeights.Caption};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 0%;
  left: 58%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-bottom: 10px;
  white-space: pre-line;
  text-align: left;
`;

const PartDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  justify-items: center;
  width: 1050px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); //4개씩 넣고 각 넓이는 1fr이다
  row-gap: 27px; //서로 20px의 차이가 있도록
  column-gap: 0px;
  grid-auto-rows: 1.5fr;
`;
const Column = styled.div`
  //나중에 이미지 넣을 공간
  position: relative;
  max-width: 333px;
`;
const TextWrap = styled.div`
  position: absolute;
  width: 250px;
  height: 22%;
  top: 78%;
  border-bottom-left-radius: 19.5px;
  border-bottom-right-radius: 19.5px;
  background-color: ${({ position }) =>
    position === "Developer"
      ? "rgba(255,92,0,0.5)"
      : position === "Designer"
      ? "rgba(123,63,239,0.5)"
      : position === "Operator"
      ? "rgba(100, 197, 154, 0.5)"
      : "rgba(82,98,245,0.5)"};
  transition: 0.3s;
`;

const ImageWrapper = styled.div`
  max-width: 250px;
  width: 250px;
  height: 300px;
  display: block;

  &:hover {
    ${TextWrap} {
      width: 250px;
      height: 300px;
      top: 0%;
      border-top-left-radius: 19.5px;
      border-top-right-radius: 19.5px;
      background-color: ${({ position }) =>
        position === "Developer"
          ? "rgba(255, 92, 0, 0.8)"
          : position === "Designer"
          ? "rgba(123, 63, 239, 0.8)"
          : position === "Operator"
          ? "rgba(100, 197, 154, 0.8)"
          : "rbga(255,0,0,0.8)"};
    }
  }
`;
const IconWrapper = styled.div`
  display: none;
  ${ImageWrapper}:hover & {
    display: flex;
    justify-content: flex-end;
  }
`;

const Image = styled.img`
  max-width: 250px;
  width: 250px;
  height: 300px;
  display: block;
`;
const IconBackground = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: 13px;
  margin-left: -5px;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;
`;
const Icon = styled.a`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
