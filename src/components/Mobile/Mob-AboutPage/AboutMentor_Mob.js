import styled, { ThemeProvider, keyframes } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import bandImage1 from "../../../assets/img/band1.svg";
import bandImage3 from "../../../assets/img/band3.svg";
import { metorDb } from "../../../utils/mentor.constant";

function AboutMentor() {
  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <TextDiv>
          <Header8>파드와 함께하는 멘토진</Header8>
        </TextDiv>
        <VerticalGap height={"110px"}></VerticalGap>
        <CardsList cardsData={metorDb} />
        <VerticalGap height={"100px"}></VerticalGap>
      </ThemeProvider>
    </PartDiv>
  );
}

export default AboutMentor;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #000000;
  font-family: "NanumSquare Neo";
  line-height: 1.45;
  white-space: pre-line;
  text-align: left;
  margin-right: 25px;
`;

const PartDiv = styled.div`
  padding-top: 42px;
  padding-bottom: 49px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255);
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
    margin-left: ${(props) => (props.hasMargin ? "170px" : "0px")};
    width: 11028px;
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

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
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
