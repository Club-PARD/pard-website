// src/components/ProjectGrid.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Header6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  margin-left: 2px;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  line-height: 140%;
  margin-top: 3px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  line-height: 140%;
  /* width: 200px; */
  margin-top: 25px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

const Column = styled.div`
  position: relative;
  max-width: 333px;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 320px;
  height: 0%;
  top: 100%;
  border-radius: 20px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 320px;
  height: 400px;
  display: block;
  cursor: pointer;

  &:hover {
    ${TextDiv} {
      width: 320px;
      height: 400px;
      top: 0%;
      border-radius: 20px;
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
  width: 320px;
  height: 400px;
`;

const ContentTextDiv = styled.div`
  display: flex;
  margin-top: 210px;
  margin-right: 188px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 450px;
  width: 160px;
  height: 40px;
  /* background-color: red; */
`;

const NumButtonDiv = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--primary-purple, #7b3fef);
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: 140%;
  font-family: "NanumSquare Neo";
  cursor: pointer;
`;

const ArrowButtonDiv = styled.img`
  width: 20px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: ${(props) => props.marginright};
  margin-left: ${(props) => props.marginleft};
`;

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <>
      <Container>
        {projects.map((project) => (
          <Link to={`/Project/${project.id}`} key={project.id}>
            <Column key={project.id}>
              <ContentDiv key={project.id}>
                <MainImg src={project.mainImg} alt={project.serviceName} />
                <TextDiv>
                  <ContentsWrap>
                    <ContentTextDiv>
                      <Header6>
                        {project.generation} | {project.part}
                      </Header6>
                    </ContentTextDiv>
                    <Header7 style={{ marginBottom: "10px" }}>
                      {project.serviceName}
                    </Header7>
                    {project.mobTitle.map((title, index) => (
                      <Body2 key={index} style={{ marginTop: "0px" }}>
                        {title}
                      </Body2>
                    ))}
                  </ContentsWrap>
                </TextDiv>
              </ContentDiv>
            </Column>
          </Link>
        ))}
      </Container>
      <ButtonDiv>
        <ArrowButtonDiv
          src={require("../../../assets/img/ProjectPageimg/LeftArrow.png")}
          marginright={"30px"}
        />
        <NumButtonDiv>1</NumButtonDiv>
        <ArrowButtonDiv
          src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
          marginleft={"30px"}
        />
      </ButtonDiv>
    </>
  );
};

export default ProjectGrid;
