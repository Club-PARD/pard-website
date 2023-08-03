import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dbService } from "../../../fbase";
import { doc, getDoc } from "firebase/firestore";


const PartDiv = styled.div`
  position: relative;
  padding-left: 268px;
  padding-right: 268px;
  padding-bottom: 130px;
  padding-top: 230px;
  height: 390px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  background-color: #1a1a1a;
  transition: background-color 0.3s ease;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


function ProjectDetail() {
    const navigate = useNavigate();

    const [detailProjects, setDetailProjects] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const docRef = doc(dbService, "Project", id); 
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("id :", id);
              console.log("Document data:", docSnap.data());
              setDetailProjects(docSnap.data());
            } else {
               navigate('*');
            }
          } catch (error) {
              console.log('에러임');
            console.error("Error fetching projects:", error);
          }
        };
    
        fetchProjects();
      }, []);


  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectDetail;
