import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../../fbase";
import { doc, getDoc } from "firebase/firestore";
import Footer from "../../Footer";
import NavBar from "../../NavBar";

const Body3 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  color: ${(props) => props.color || "white"};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginright};
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  margin-top: ${(props) => props.marginTop};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
`;

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  margin-top: ${(props) => props.marginTop};
  color: white;
  font-family: "NanumSquare Neo";
  line-height: 160%; 
  white-space: pre-line;
  text-align: start;
  width: 580px;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  padding-top: 5px;
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  margin-right: 7px;
`;

const PartDiv = styled.div`
  position: relative;
  padding-top: 70px;
  height: 1450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  /* background-color: red; */
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainBackImg = styled.img`
  width: 100%;
  height: 647px;
  border: none;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 800px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HR = styled.hr`
  width: 1216px;
  height: 1px;
  background-color: #fff;
  margin-top: 34px;
  border: none;
`;

const ContentsDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 1216px;
  height: 100%;
  margin-top: 50px;
`;

const RightContent = styled.div`
  width: 624px;
  /* background-color: beige; */
`;

const TitleText = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  margin-top: ${(props) => props.marginTop};
`;

const PartText = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop};
  /* background-color: yellow; */
  height: 28px;
  align-items: center;
  justify-content: start;
`;

const PartTool = styled.div`
  display: inline-flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) => props.color || "#5262F5"};
  font-size: ${(props) => props.theme.Web_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  color: white;
  margin-right: 15px;
`;

const LeftContent = styled.div`
  width: 591px;
  /* background-color: brown; */
`;

const ImgDiv = styled.div`
  height: 33px;
  width: 100%;
  display: flex;
  text-align: start;
  justify-content: start;
  margin-left: 1px;
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 33px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const ContentsText = styled.div`
  margin-top: 20px;
`;

function ProjectDetail() {
  const navigate = useNavigate();

  const [detailProjects, setDetailProjects] = useState([]);

  const location = useLocation();
  const currentURL = location.pathname; 
  const id = currentURL.split("/").pop(); 

  const fetchProjects = async () => {
    try {
      const docRef = doc(dbService, "Project", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setDetailProjects(docSnap.data());
      } else {
        navigate("*");
      }
    } catch (error) {
      console.log("에러임");
      console.error("Error fetching projects:", error);
    }
  };

useEffect(() => {
    console.log("id :", id);
    fetchProjects();
  }, []);
  
  useEffect(() => {
    if (detailProjects) {
      console.log("Document tool:", detailProjects.tool);
      console.log("asdf:", detailProjects.member);
    }
  }, [detailProjects, id]);

  return (
    <div>
      <NavBar />
      <Div>
        <PartDiv>
          <ThemeProvider theme={theme}>
            <MainBackImg
              src={detailProjects.backImg}
              alt={detailProjects.teamName}
            />
            <MainDiv>
              <Body3 marginTop="34px" align="center">
                {detailProjects.batch}
              </Body3>
              <HR />
              <ContentsDiv>
                <RightContent>
                  <TitleText>
                    <Header8>{detailProjects.part} |</Header8>
                    <Header7>{detailProjects.serviceName}</Header7>
                  </TitleText>
                  {/* <PartText marginTop={"35px"}>
                    <Body3 color="white" align="start" marginright={"62px"}>
                      기획
                    </Body3>
                    {detailProjects.tool.planner.map((tool, index) => (
                      <PartTool key={index}>{tool} </PartTool>
                    ))}
                  </PartText>
                  <PartText marginTop={"20px"}>
                    <Body3 color="white" align="start" marginright={"47px"}>
                      디자인
                    </Body3>
                    {detailProjects.tool.designer.map((tool, index) => (
                      <PartTool key={index} color={"#7B3FEF"}>
                        {tool}
                      </PartTool>
                    ))}
                  </PartText>
                  <PartText marginTop={"20px"}>
                    <Body3 color="white" align="start" marginright={"62px"}>
                      개발
                    </Body3>
                    {detailProjects.tool.developer.map((tool, index) => (
                      <PartTool key={index} color={"#FF5C00"}>
                        {tool}
                      </PartTool>
                    ))}
                  </PartText>
                  <TitleText marginTop={"86px"}>
                    <Header8>Team |</Header8>
                    <Header7>{detailProjects.teamName}</Header7>
                  </TitleText>
                  <PartText marginTop={"35px"}>
                    <Body3 color="white" align="start" marginright={"62px"}>
                      기획
                    </Body3>
                    {detailProjects.member.planner.map((tool, index) => (
                      <Body3 key={index}>{tool} </Body3>
                    ))}
                  </PartText>
                  <PartText marginTop={"20px"}>
                    <Body3 color="white" align="start" marginright={"47px"}>
                      디자인
                    </Body3>
                    {detailProjects.member.designer.map((tool, index) => (
                      <Body3 key={index}>{tool}</Body3>
                    ))}
                  </PartText>
                  <PartText marginTop={"20px"}>
                    <Body3 color="white" align="start" marginright={"62px"}>
                      개발
                    </Body3>
                    {detailProjects.member.developer.map((tool, index) => (
                      <Body3 key={index} marginright={"15px"}>
                        {tool}
                      </Body3>
                    ))}
                  </PartText> */}
                </RightContent>
                <LeftContent>
                  <ImgDiv>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <ArrowImg
                        key={index}
                        src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
                      />
                    ))}
                  </ImgDiv>
                  <Header5 marginTop={"58px"}>{detailProjects.title}</Header5>
                  <ContentsText>
                    {/* {detailProjects.contents.map((tool, index) => (
                      <Header6 key={index}>{tool}</Header6>
                    ))} */}
                  </ContentsText>
                </LeftContent>
              </ContentsDiv>
            </MainDiv>
          </ThemeProvider>
        </PartDiv>
      </Div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
