import styled, { ThemeProvider } from "styled-components";
import { FaInstagram, FaGithub, FaInvision } from "react-icons/fa";
import { theme } from "../../../styles/theme";
import { managerData } from "../../../utils/manager.constant";
import disquiet from "../../../assets/img/disquiet.png";
import WebLogo from "../../../assets/img/WebLogo.png";
import EmailLogo from "../../../assets/img/EmailLogo.png";
import { pardDATA } from "../../../utils/data.constant";

function InquiryManagemaentMob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            거친 파도를 <br />
            뚫고 나가는
            <br /> 파드 {pardDATA.currentGeneration}기 운영진을
            <br />
            소개합니다.
          </Header8>
          <Body1>
            함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요.
          </Body1>
          <GridContainer>
            {managerData.map((content, index) => (
              <Column key={content.id} even={index % 2 === 1}>
                <Image src={content.imgsrc} alt={`Image ${content.id}`}></Image>
                <TextWrap position={content.position}>
                  <PositionDiv>{content.position_k}</PositionDiv>
                  <NameDiv>{content.name}</NameDiv>
                  <IconWrapper>
                    {content.site.map((site) => (
                      <IconBackground key={site.name}>
                        <Icon href={`mailto:${site.link}`}>
                          {site.name === "instagram" ? (
                            <FaInstagram style={{ color: "black" }} />
                          ) : site.name === "linkedin" ? (
                            <FaInvision style={{ color: "black" }} />
                          ) : site.name === "github" ? (
                            <FaGithub style={{ color: "black" }} />
                          ) : site.name === "web" ? (
                            <img
                              src={WebLogo}
                              alt="Web Logo"
                              style={{ width: "16px", height: "16px" }}
                            />
                          ) : site.name === "disquiet" ? (
                            <img
                              src={disquiet}
                              alt="Disquiet Logo"
                              style={{
                                width: "20px",
                                height: "12px",
                                marginLeft: "3.0px",
                              }}
                            />
                          ) : (
                            <img
                              src={EmailLogo}
                              alt="Email Logo"
                              style={{
                                width: "16.5px",
                                height: "13.2px",
                              }}
                            />
                          )
                          }
                        </Icon>
                      </IconBackground>
                    ))}
                  </IconWrapper>
                </TextWrap>
              </Column>
            ))}
          </GridContainer>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default InquiryManagemaentMob;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 50px;
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
`;
const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 100px;
  white-space: pre-line;
  text-align: center;
  line-height: 160%;
`;
const TextWrap = styled.div`
  position: absolute;
  width: 150px;
  height: 66px;
  top: 65.3%;
  border-bottom-left-radius: 12.5px;
  border-bottom-right-radius: 12.5px;
  background-color: ${({ position }) =>
    position === "Developer"
      ? "rgba(255,92,0,0.5)"
      : position === "Designer"
      ? "rgba(123,63,239,0.5)"
      : position === "Operator"
      ? "rgba(100, 197, 154, 0.5)"
      : "rgba(82,98,245,0.5)"};
  transition: 0.3s;
  &:hover {
    top: 0%;
    width: 150px;
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    background-color: ${({ position }) =>
      position === "Developer"
        ? "rgba(255, 92, 0, 0.8)"
        : position === "Designer"
        ? "rgba(123, 63, 239, 0.8)"
        : position === "Operator"
        ? "rgba(100, 197, 154, 0.8)"
        : "rgba(82, 98, 245, 0.8)"};
    width: ${({ position }) => (position ? "150px" : "initial")};
    height: ${({ position }) => (position ? "190px" : "initial")};
  }
`;
const NameDiv = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 11px;
  width: 100%;
  left: 50%;
  line-height: 160%;
  transform: translate(-50%);
  margin-bottom: 1px;
  white-space: pre-line;
  text-align: center;
`;
const PositionDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  position: absolute;
  bottom: 35px;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  margin-bottom: 3px;
  white-space: pre-line;
  text-align: center;
  /* line-height: 160%; */
`;

const PartDiv = styled.div`
  height: 100%;
  width: 375px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  /* padding-left: 10px; */
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //2개씩 넣고 각 넓이는 1fr이다
  /* grid-gap: 5px;//서로 20px의 차이가 있도록 */
  row-gap: 5px;
  column-gap: 0px;
  grid-auto-rows: 1fr;
`;
const Column = styled.div`
  //나중에 이미지 넣을 공간
  position: relative;
  max-width: 65px;
  margin-left: ${(props) =>
    props.even ? "11px" : "20px"}; // 짝수번째 이미지에만 다른 마진을 설정
  margin-top: 10px;
`;
const Image = styled.img`
  width: 150px;
  height: 190px;
  display: block;
  margin: 0px auto;
`;
const IconWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  ${TextWrap}:hover & {
    display: flex;
    justify-content: flex-end;
  }

  &:hover {
    ${TextWrap} {
      width: 100%;
      height: 100%;
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
const IconBackground = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 6px;
  margin-top: 10px;
  text-align: center;
`;
const Icon = styled.a`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
