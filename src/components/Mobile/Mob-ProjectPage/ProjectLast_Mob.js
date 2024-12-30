import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { pardDATA } from "../../../utils/data.constant";
import FilterBtn from "../Components/FilterBtn";

function ProjectLast_Mob() {
  const [projects, setProjects] = useState([]);
  const [more, setMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [part, setPart] = useState("all"); // 기본 필터: "all"
  const parts = ["ALL", "WEB", "APP"]; // 필터 버튼 항목

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getDocs(collection(dbService, "Project"));
        const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const sortedItems = newData.sort((a, b) => b.order - a.order);
        setProjects(sortedItems);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (newPart) => {
    setPart(newPart);
    setCurrentPage(1); // 필터 변경 시 페이지 초기화
  };

  const filteredProjects = projects.filter((project) => {
    return part === "all" || project.part.toLowerCase() === part.toLowerCase();
  });

  const visibleProjects = filteredProjects.slice(0, more ? filteredProjects.length : 5);

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <FilterContainer>
            {parts.map((filterPart) => (
              <FilterBtn
                key={filterPart}
                part={filterPart}
                setPart={handleFilterChange}
                selected={part}
              />
            ))}
          </FilterContainer>
          <Container>
            {visibleProjects.map((project) => (
              <React.Fragment key={project.id}>
                {(project.generation === `${pardDATA.currentGeneration - 1}기` || more) && (
                  <Link to={`/Project/${project.id}`}>
                    <Column>
                      <ContentDiv>
                        <MainImg
                          src={project.mainImg}
                          alt={project.serviceName}
                        />
                        <TextDiv>
                          <ContentsWrap>
                            <Subtitle1>{project.serviceName}</Subtitle1>
                            <TitleTectDiv>
                              {project.mobTitle?.map((title, index) => (
                                <Body2 key={index}>{title}</Body2>
                              ))}
                            </TitleTectDiv>
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
                )}
              </React.Fragment>
            ))}
          </Container>
        </ThemeProvider>
        {!more && (
          <DownLogo
            src={require("../../../assets/img/moreButton.png")}
            onClick={() => setMore(true)}
            alt="downLogo"
          />
        )}
      </PartDiv>
    </Div>
  );
}

export default ProjectLast_Mob;

const Subtitle1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  text-align: start;
  margin-top: 10px;
  margin-left: 15.78px;
`;

const Body2 = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 180%;
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
  height: 105.734px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.68); /* 투명한 검은색 배경 */
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0 0 14px 14px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const TitleTectDiv = styled.div`
  margin-top: 5px;
  margin-left: 15.78px;
`;

const ContentDiv = styled.div`
  width: 303px;
  height: 379px;
  display: block;
  cursor: pointer;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MainImg = styled.img`
  width: 303px;
  height: 379px;
`;

const ContentTextDiv = styled.div`
  width: 303px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: left;
  margin-left: -15.78px;
`;

const DownLogo = styled.img`
  width: 46px;
  height: 49px;
  margin: 120px 0px 60px 0px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2000px;
  width: fit-content;
  margin-bottom: 68px;
`;