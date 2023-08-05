import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const PartDiv = styled.div`
  position: relative;
  width: 100%;
  height: 2660px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 140%;
  text-align: center;
  margin-top: 140px;
  margin-right: 100px;
  margin-bottom: 60px;
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
  justify-content: center;
`;

const ContentDiv = styled.div`
 width: 303px;
height: 379px;
  display: block;
  cursor: pointer;

  /* &:hover {
    ${TextDiv} {
        width: 303px;
height: 379px;
      top: 0%;
      border-radius: 20px;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, #2a2a2a 100%);
    }
  } */
 `;

// const ContentsWrap = styled.div`
//   display: none;
//   ${ContentDiv}:hover & {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//   }
// `;

const MainImg = styled.img`
 width: 303px;
height: 379px;
`;

// const ContentTextDiv = styled.div`
//   display: flex;
//   margin-top: 210px;
//   margin-right: 188px;
// `;

function ProjectLast_Mob() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getDocs(collection(dbService, "Project"));
        const newData = data.docs.map((doc) => ({ ...doc.data() }));
        setProjects(newData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>전체 프로젝트</Header7>
          <Container>
            {projects.map((project) => (
              <Link to={`/Project/${project.id}`} key={project.id}>
                <Column key={project.id}>
                  <ContentDiv key={project.id}>
                    <MainImg src={project.mainImg} alt={project.serviceName} />
                    {/* <TextDiv>
                      <ContentsWrap>
                        <ContentTextDiv>
                          <Header6>
                            {project.generation} | {project.part}
                          </Header6>
                        </ContentTextDiv>
                        <Header7>{project.serviceName}</Header7>
                        <Body2>{project.title}</Body2>
                      </ContentsWrap>
                    </TextDiv> */}
                  </ContentDiv>
                </Column>
              </Link>
            ))}
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectLast_Mob;
