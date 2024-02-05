import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../../fbase";
import { doc, getDoc } from "firebase/firestore";

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  opacity: ${(props) => props.opacity};
  width: 59px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  word-break: keep-all;
  line-height: 160%;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginleft};
`;

const Subtitle1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
  margin-top: 11.5px;
`;

const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  word-break: keep-all;
  line-height: 140%;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
`;

const PartDiv = styled.div`
  position: relative;
  width: 100%;
  height: 1650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const MainBackImg = styled.img`
  width: 100%;
  height: 329px;
  border: none;
  /* object-fit: cover; */
`;

const MainDiv = styled.div`
  width: 303px;
  height: 1500px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HR = styled.hr`
  width: 303px;
  height: 1px;
  background-color: #fff;
  margin-top: 28px;
  border: none;
`;

const TitleText = styled.div`
  display: flex;
  width: ${(props) => props.width || "303px"};
  height: 40px;
  justify-content: start;
  margin-top: ${(props) => props.marginTop};
`;

const Container = styled.div`
  display: grid;
  /* height: 45px; */
  /* background-color: red; */
  grid-template-columns: repeat(
    ${(props) => props.numOfColumns || 2},
    1fr
  ); /* prop으로 전달된 값 사용 */
  /* row-gap: 10px; */
  /* column-gap: 1.5px; */
  /* margin-bottom: 22px; */
  /* margin-top: ${(props) => props.marginTop || "18px"}; */
`;

const PartText = styled.div`
  display: flex;
  width: 310px;
  margin-top: ${(props) => props.marginTop};
  /* background-color: yellow; */
  /* height: 28px; */
  align-items: center;
  /* justify-content: start; */
  margin-left: 7px;
`;

const PartTool = styled.div`
  display: inline-flex;
  padding: 7px 15px;
  justify-content: center;
  /* align-items: center; */
  border-radius: 15px;
  background-color: ${(props) => props.color || "#5262F5"};
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: white;
  margin: 5px 15px 5px 0px;
`;

const ImgDiv = styled.div`
  height: 33px;
  width: 303px;
  display: flex;
  text-align: start;
  justify-content: start;
  margin-left: 1px;
  margin-top: 100px;
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 33px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const ContentsText = styled.div`
  margin-top: 115px;
  width: 303px;
`;

const ToolListDiv = styled.div`
  margin-top: 100px;
  width: 303px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const IconBackground = styled.a`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  text-decoration: none;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

function ProjectDetail_Mob() {
  const navigate = useNavigate();

  const [detailProjects, setDetailProjects] = useState([]);

  const location = useLocation();
  const currentURL = location.pathname;
  const id = currentURL.split("/").pop();

  const fetchProjects = async () => {
    const docRef = doc(dbService, "Project", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDetailProjects(docSnap.data());
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    console.log("id :", id);
    fetchProjects();
  }, []);

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <MainBackImg
            src={detailProjects.mobileBackImg}
            alt={detailProjects.teamName}
          />
          <MainDiv>
            <Body2 marginTop={"30px"}>{detailProjects.batch}</Body2>
            <HR />
            <TitleText marginTop={"40px"}>
              <Subtitle1>{detailProjects.part} |</Subtitle1>
              <Header8 marginleft={"7px"}>
                {" "}
                {detailProjects.serviceName}
              </Header8>
            </TitleText>
            {detailProjects.tool && (
              <>
                <PartText marginTop={"35px"}>
                  <Body1 color="white" align="start">
                    기획
                  </Body1>
                  {detailProjects.tool.planner.map((tool, index) => (
                    <PartTool key={index}>{tool} </PartTool>
                  ))}
                </PartText>
                <PartText marginTop={"12px"} style={{ alignItems: "start" }}>
                  <Body1
                    style={{ color: "white", marginTop: "12px" }}
                    align="start"
                  >
                    디자인
                  </Body1>
                  <Container style={{ marginBottom: "12px" }}>
                    {detailProjects.tool.designer.map((tool, index) => (
                      <PartTool key={index} color={"#7B3FEF"}>
                        {tool}
                      </PartTool>
                    ))}
                  </Container>
                </PartText>
                <PartText style={{ alignItems: "start" }}>
                  <Body1
                    style={{ color: "white", marginTop: "12px" }}
                    align="start"
                  >
                    개발
                  </Body1>
                  <Container>
                    {detailProjects.tool.developer.map((tool, index) => (
                      <PartTool key={index} color={"#FF5C00"}>
                        {tool}
                      </PartTool>
                    ))}
                  </Container>
                </PartText>
                <TitleText marginTop={"135px"}>
                  <Subtitle1>Team |</Subtitle1>
                  <Header8 marginleft={"7px"}>
                    {detailProjects.teamName}
                  </Header8>
                </TitleText>
                <PartText marginTop={"35px"}>
                  <Body1 color="white" align="start">
                    기획
                  </Body1>
                  {detailProjects.member.planner.map((name, index) => (
                    <Body1 key={index} opacity={0.6}>
                      {name}{" "}
                    </Body1>
                  ))}
                </PartText>
                <PartText marginTop={"20px"}>
                  <Body1 color="white" align="start">
                    디자인
                  </Body1>
                  {detailProjects.member.designer.map((name, index) => (
                    <Body1 key={index} opacity={0.6}>
                      {name}
                    </Body1>
                  ))}
                </PartText>
                <PartText marginTop={"20px"}>
                  <Body1 color="white" align="start">
                    개발
                  </Body1>
                  {detailProjects.member.developer.map((name, index) => (
                    <Body1 key={index} marginleft={"15px"} opacity={0.6}>
                      {name}
                    </Body1>
                  ))}
                </PartText>
              </>
            )}
            <ImgDiv>
              {Array.from({ length: 4 }).map((_, index) => (
                <ArrowImg
                  key={index}
                  src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
                />
              ))}
            </ImgDiv>
            <TitleText marginTop={"-10px"}>
              <Header6 marginTop={"58px"}>{detailProjects.title}</Header6>
            </TitleText>
            {detailProjects.mobContents && (
              <>
                <ContentsText>
                  {detailProjects.mobContents.map((tool, index) => (
                    <Subtitle2 key={index}>{tool}</Subtitle2>
                  ))}
                </ContentsText>
              </>
            )}

            <ToolListDiv>
              {detailProjects.link && (
                <>
                  {detailProjects.link.url && (
                    <IconBackground
                      key="url"
                      href={detailProjects.link.url}
                      target="_blank"
                    >
                      <Icon
                        src={require("../../../assets/img/ProjectPageimg/URLImg.png")}
                        alt={"url"}
                        width={"38px"}
                        height={"38px"}
                      />
                    </IconBackground>
                  )}
                  {detailProjects.link.github && (
                    <IconBackground
                      key="github"
                      href={detailProjects.link.github}
                      target="_blank"
                    >
                      <Icon
                        src={require("../../../assets/img/ProjectPageimg/GitHubImg.png")}
                        alt={"github"}
                        width={"36px"}
                        height={"36px"}
                      />
                    </IconBackground>
                  )}
                  {detailProjects.link.github_server && (
                    <IconBackground
                      key="github"
                      href={detailProjects.link.github_server}
                      target="_blank"
                    >
                      <Icon
                        src={require("../../../assets/img/ProjectPageimg/GitHubImg.png")}
                        alt={"github"}
                        width={"36px"}
                        height={"36px"}
                      />
                    </IconBackground>
                  )}
                  {detailProjects.link.notion && (
                    <IconBackground
                      key="notion"
                      href={detailProjects.link.notion}
                      target="_blank"
                    >
                      <Icon
                        src={require("../../../assets/img/ProjectPageimg/NotionImg.png")}
                        alt={"notion"}
                        width={"46px"}
                        height={"46px"}
                      />
                    </IconBackground>
                  )}
                  {detailProjects.link.figma && (
                    <IconBackground
                      key="figma"
                      href={detailProjects.link.figma}
                      target="_blank"
                    >
                      <Icon
                        src={require("../../../assets/img/ProjectPageimg/FigmaImg.png")}
                        alt={"figma"}
                        width={"32px"}
                        height={"32px"}
                      />
                    </IconBackground>
                  )}
                </>
              )}
            </ToolListDiv>
          </MainDiv>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectDetail_Mob;
