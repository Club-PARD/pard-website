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
  margin-right: 100px;
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
  width: 190px;
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

const ProjectGrid = () => {
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
                <Header7>{project.serviceName}</Header7>
                <Body2>
                {project.title}
                </Body2>
              </ContentsWrap>
            </TextDiv>
          </ContentDiv>
        </Column>
        </Link>
      ))}
    </Container>
  );
};

export default ProjectGrid;
