import styled, { ThemeProvider, keyframes } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import bandImage1 from "../../../assets/img/band1.svg";
import bandImage3 from "../../../assets/img/band3.svg";
import { metorDb } from "../../../utils/mentor.constant";

const CardsList = ({ cardsData }) => {
  const firstRow = cardsData.filter((card) => card.id % 2 !== 0);
  const secondRow = cardsData.filter((card) => card.id % 2 === 0);

  return (
    <>
      <BandComponent mentorInfos={firstRow} src={bandImage1}></BandComponent>
      <VerticalGap height={"30px"}></VerticalGap>
      <BandComponent
        mentorInfos={secondRow}
        src={bandImage3}
        hasMargin={true}
      ></BandComponent>
    </>
  );
};

function AboutMentor() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드와 함께하는 멘토진</Header7>
          <CardsList cardsData={metorDb} />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default AboutMentor;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  margin-bottom: 137px;
  white-space: pre-line;
  text-align: center;
`;

const PartDiv = styled.div`
  padding-bottom: 187px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255);
`;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const BandAnimation = keyframes`
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(-3676px, 0);
    }
`;

const BandContainer = styled.aside`
  position: relative;
  height: 110px;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 11028px;
    margin-left: ${(props) => (props.hasMargin ? "170px" : "0px")};
    height: 100%;
    background: ${(props) => `url(${props.src}) repeat-x 0/3676px`};
    animation: ${BandAnimation} 48s infinite linear;
    will-change: transform;
  }
`;

const BandList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
`;

const BandItem = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  color: transparent;
`;

const BandComponent = ({ mentorInfos, src, hasMargin }) => {
  return (
    <BandContainer src={src} hasMargin={hasMargin ?? false}>
      <BandList>
        {mentorInfos.map((info) => (
          <BandItem key={info.id}>{info.title}</BandItem>
        ))}
      </BandList>
    </BandContainer>
  );
};

const VerticalGap = styled.div`
  height: ${(props) => (props.height != null ? props.height : "0px")};
`;
