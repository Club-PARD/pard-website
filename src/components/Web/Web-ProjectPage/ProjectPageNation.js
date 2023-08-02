// src/components/ProjectGrid.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

const MainImg = styled.img`
  width: 320px;
  height: 400px;
`;

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getDocs(collection(dbService, "Project")); // create라는 collection 안에 모든 document를 읽어올 때 사용한다.
        const newData = data.docs.map((doc) => ({ ...doc.data() }));
        setProjects(newData);
        console.log(newData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      {projects.map((project) => (
        <div key={project.id}>
          <MainImg src={project.mainImg} alt="TeamImg" />
        </div>
      ))}
    </Container>
  );
};

export default ProjectGrid;
