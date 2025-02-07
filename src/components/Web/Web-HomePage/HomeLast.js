import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonWeb } from "../Components/RecruitmentStatusButtonWeb";
import { pardDATA } from "../../../utils/data.constant";

function HomeLast() {
  const generation = pardDATA.currentGeneration;
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header2>매번 다른 파도와 함께</Header2>
          <M3Header>
            파드는 매번 새로운 파디들과 함께 아이디어를 나누고,
            <br></br> 
            협업하며 혁신적인 서비스를 만들어갑니다.
          </M3Header>
          <InfoWrap>
            <InfoBox>
              <InfoContent>런칭 서비스</InfoContent>
              <InfoNum>20개</InfoNum>
            </InfoBox>
            <InfoBox>
              <InfoContent>운영 기수</InfoContent>
              <InfoNum>{generation}기</InfoNum>
            </InfoBox>
            <InfoBox>
              <InfoContent>누적 활동 인원</InfoContent>
              <InfoNum>134명</InfoNum>
            </InfoBox>
          </InfoWrap>
          <Line>
            <Shape1>"</Shape1>
            <Shape2>"</Shape2>
          </Line>
          <Header4>
            똑같은 파도는 다시 오지 않아요
            <br></br>
            좋은 파도를 고르는 것 자체도 선수들의 역량이에요
          </Header4>
          <Subtitle2>송민 KBS 서핑 해설위원</Subtitle2>
          <RecruitmentStatusButtonWeb
            theme={theme}
            backgroundColor={theme.MainColor.PrimaryBlue}
          />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomeLast;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 36px;
  margin-top: 100px;
  white-space: pre-line;
  display: flex;
`;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  text-align: center;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  margin-bottom: 18px;
  line-height: 140%;
`;

const M3Header = styled.div`
  color: #FFF;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 128.571% */;
`;

const Div = styled.div`
  margin: 0px auto;
  justify-content: center;
`;

const PartDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  align-items: center;
  margin: 0px auto;
  width: 1330px;
  justify-content: center;
  padding-bottom: 100px;
`;

const Subtitle2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.subtitle2};
  font-weight: ${(props) => props.theme.fontWeights.subtitle3};
  text-align: center;
  color: #ffffff;
  margin-bottom: 90px;
`;

const Shape1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  line-height: 53px;
  width: 18px;
  height: 26px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
  margin-right: 600px;
`;

const Shape2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header3};
  font-weight: ${(props) => props.theme.fontWeights.Header3};
  font-family: "NanumSquare Neo";
  width: 18px;
  height: 26px;
  line-height: 53px;
  display: flex;
  color: #5262f5;
  margin-bottom: 11px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 55px;
  margin-right: 37px;
  margin-top: 186px;
`;

const InfoWrap = styled.div`
  width: 996px;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoBox = styled.div`
  width: 312px;
  height: 280px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
`;

const InfoContent = styled.p`
  color: #F5F5F5;
  text-align: center;
  /* M3/headline/medium */
  font-family: "NanumSquare Neo";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 128.571% */
`;

const InfoNum = styled.p`
  color: #FFF;
  text-align: center;
  /* Header/H2 - EB 60 */
  font-family: "NanumSquare Neo";
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%; /* 84px */
`;