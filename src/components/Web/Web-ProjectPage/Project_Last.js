import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from '../../../fbase';
import { Pagination } from 'react-bootstrap';


const PartDiv = styled.div`
  height:  1881px;
  position: relative;
  /* background-color: red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;


function ProjectLast() {
  const [getData, setGetData] = useState();


  async function fetchAllData() { 
    const data = await getDocs(collection(dbService, "Project"));
    const newData = data.docs.map(doc => ({ ...doc.data()}));
    console.log('data 가공 전',newData);
    setGetData(newData);
  }
  
  useEffect(() => { 
    fetchAllData();
    console.log('asdf');
    console.log("가져온 data : ",getData);
  }, [])

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
        <Pagination images={getData} />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectLast;
