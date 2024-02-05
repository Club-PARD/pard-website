import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  line-height: 140%;
  margin-left: 21px;
  margin-top: 20px;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  text-align: start;
  margin-top: ${(props) => props.marginTop || "140px"};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight || "100px"};
  margin-bottom: ${(props) => props.marginBottom || "60px"};
`;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  width: 303px;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  line-height: 140%;
  text-align: start;
  margin-top: ${(props) => props.marginTop || "140px"};
  margin-bottom: ${(props) => props.marginBottom || "60px"};
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  line-height: 140%;
`;

const PartDiv = styled.div`
  position: relative;
  width: 100%;
  /* height: 2660px; */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 46px;
`;

const Column = styled.div`
  position: relative;
  max-width: 333px;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 303px;
  height: 0%;
  top: 100%;
  border-radius: 20px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const TitleTectDiv = styled.div`
  margin-top: 25px;
  margin-left: 23px;
  margin-bottom: 60px;
`;

const ContentDiv = styled.div`
  width: 303px;
  height: 379px;
  display: block;
  cursor: pointer;

  &:hover {
    ${TextDiv} {
      width: 303.5px;
      height: 379.5px;
      top: 0%;
      border-radius: 18px;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, #2a2a2a 100%);
    }
  }
`;

const ContentsWrap = styled.div`
  display: none;
  ${ContentDiv}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const MainImg = styled.img`
  width: 303px;
  height: 379px;
`;

const ContentTextDiv = styled.div`
  display: flex;
  margin-top: 210px;
`;

const DownLogo = styled.img`
  width: 46px;
  height: 49px;
  margin: 120px 0px 60px 0px;
`;

function ProjectLast_Mob() {
  const [projects, setProjects] = useState([]);
  const [more, setMore] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getDocs(collection(dbService, "Project"));
        const newData = data.docs.map((doc) => ({ ...doc.data() }));
        const sortedItems = newData.sort((a, b) => b.order - a.order);
        setProjects(sortedItems);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleMore = () => {
    setMore(true);
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>전체 프로젝트</Header8>
          <Container>
            {projects.map((project) => (
              <React.Fragment key={project.id}>
                {project.generation == "2기" || more ? (
                  <>
                    <Link to={`/Project/${project.id}`} key={project.id}>
                      <Column key={project.id}>
                        <ContentDiv key={project.id}>
                          <MainImg
                            src={project.mainImg}
                            alt={project.serviceName}
                          />
                          <TextDiv>
                            <ContentsWrap>
                              <ContentTextDiv>
                                <Header6>
                                  {project.generation} | {project.part}
                                </Header6>
                              </ContentTextDiv>
                              <Header7
                                marginTop={"0px"}
                                marginRight={"0px"}
                                marginBottom={"0px"}
                                marginLeft={"20px"}
                              >
                                {project.serviceName}
                              </Header7>
                              <TitleTectDiv>
                                {project.mobTitle && (
                                  <>
                                    {project.mobTitle.map((title, index) => (
                                      <Body2 key={index}>{title}</Body2>
                                    ))}
                                  </>
                                )}
                              </TitleTectDiv>
                            </ContentsWrap>
                          </TextDiv>
                        </ContentDiv>
                      </Column>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))}
          </Container>
        </ThemeProvider>
        {!more && (
          <DownLogo
            src={require("../../../assets/img/moreButton.png")}
            onClick={handleMore}
          />
        )}
      </PartDiv>
    </Div>
  );
}

export default ProjectLast_Mob;
