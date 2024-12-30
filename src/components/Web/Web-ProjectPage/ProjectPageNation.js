import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import FilterBtn from "../Components/FilterBtn";

const PROJECT_GRID = 9; // 한 페이지에 보여줄 프로젝트 수

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [part, setPart] = useState("all"); // 기본 필터: "all"
  const parts = ["ALL", "WEB", "APP"]; // 필터 버튼 항목

  const handleFilterChange = (newPart) => {
    setPart(newPart);
    setCurrentPage(1); // 필터를 변경할 때 페이지를 1로 초기화
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getDocs(collection(dbService, "Project"));
        const newData = data.docs.map((doc) => ({ ...doc.data() }));
        console.log(newData); // 데이터 구조 확인
        const sortedItems = newData.sort((a, b) => b.order - a.order);
        setProjects(sortedItems);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
  
    fetchProjects();
  }, []);

  const handlePageChange = (newPage) => {
    const pages = Math.ceil(
      projects.filter((project) =>
        part === "all" || project.part.toLowerCase() === part.toLowerCase()
      ).length / PROJECT_GRID
    );
    if (newPage < 1) {
      setCurrentPage(1);
    } else if (newPage > pages) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <FilterContainer>
        {parts.map((filterPart) => (
        <FilterBtn
          key={filterPart}
          part={filterPart}
          setPart={handleFilterChange} // 필터 변경 함수 사용
          selected={part}
        />
        ))}
      </FilterContainer>
      <Container>
        {projects
        .filter((project) => {
          if (part.toLowerCase() === "all") return true; // "ALL" 선택 시 모든 프로젝트 표시
          if (!project.part) return false; 
          return project.part.toLowerCase() === part.toLowerCase(); // 선택된 part와 일치하는 경우만 표시
        })
        .slice(
          (currentPage - 1) * PROJECT_GRID, // 시작 인덱스 계산
          (currentPage - 1) * PROJECT_GRID + PROJECT_GRID // 끝 인덱스 계산
        )
        .map((project) => (
          <Link to={`/Project/${project.id}`} key={project.id}>
          <Column>
            <ContentDiv>
              <MainImg src={project.mainImg} alt={project.serviceName} />
                <TextDiv>
                  <ContentsWrap>
                    <Header8 style={{ marginBottom: "6px" }}>
                      {project.serviceName}
                    </Header8>
                    {project.mobTitle.map((title, index) => (
                      <Body2 key={index} style={{ marginTop: "0px" }}>
                        {title}
                      </Body2>
                    ))}
                    <ContentTextDiv>
                      <Body2>
                        #{project.generation} #{project.part}
                      </Body2>
                    </ContentTextDiv>
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
          onClick={() => handlePageChange(currentPage - 1)}
          alt="arrowButton"
        />
        {Array(
          Math.ceil(
            projects.filter((project) =>
              part === "all" || project.part.toLowerCase() === part.toLowerCase()
            ).length / PROJECT_GRID
          )
        )
          .fill(0)
          .map((_, index) => (
            <NumButtonDiv
              key={index}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </NumButtonDiv>
          ))}
        <ArrowButtonDiv
          src={require("../../../assets/img/ProjectPageimg/RightArrow.png")}
          marginleft={"30px"}
          onClick={() => handlePageChange(currentPage + 1)}
          alt="arrowButton"
        />
      </ButtonDiv>
    </>
  );
};

export default ProjectGrid;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: start;
  line-height: 140%;
  margin-top: 15px;
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
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1246px;
  gap: 32px;
`;

const Column = styled.div`
  position: relative;
  max-width: 384px;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 384px;
  height: 134px; /* 높이를 0%에서 적절히 변경 */
  bottom: 0; /* 시작 위치를 변경 */
  background: rgba(0, 0, 0, 0.68); /* 투명한 검은색 배경 */
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0 0 14px 14px;
  transition: 0.3s ease-in-out; /* 부드러운 전환 */
  display: flex;
  z-index: 1; /* 다른 요소보다 위에 표시 */
`;

const ContentDiv = styled.div`
  width: 384px;
  height: 405px;
  display: block;
  cursor: pointer;
`;
const ContentsWrap = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  margin-left: 21px;
`;

const MainImg = styled.img`
  width: 384px;
  height: 405px;
  object-fit: cover;
`;

const ContentTextDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  margin-right: 21px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 111px 0px 100px 0px;
  /* width: 160px; */
  height: 40px;
  /* background-color: red; */
`;

const NumButtonDiv = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#7b3fef" : "none")};
  color: #ffffff;
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
  margin-right: 50px;
  margin-left: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2000px;
  width: fit-content;
  margin-bottom: 100px;
`;