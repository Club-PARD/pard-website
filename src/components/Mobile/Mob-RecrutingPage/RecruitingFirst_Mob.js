import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonMob } from "../Components/RecruitmentStatusButtonMob";
import { pardDATA } from "../../../utils/data.constant";

function RecruitingFirstMob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            함께 성장하며 최고의
            <br />
            팀을 만들어가요
          </Header8>
          <ButtonText1>
            단순히 같이 일하는 것이
            <br />
            협업이라고 생각하시나요?
            <br />
            PARD에서 서로의 전문성을 이해하고,
            <br /> 솔직하게 대립하고, 빠르게 실행해요.
          </ButtonText1>
          <ButtonDiv>
            <RecruitmentStatusButtonMob
              theme={theme}
              backgroundColor={theme.MainColor.PrimaryGreen}
            />
          </ButtonDiv>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingFirstMob;

const Header8 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  margin-top: 200px;
`;
const ButtonText1 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
  line-height: 140%;
  margin-top: 40px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PartDiv = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${pardDATA.displayBanner ? "120px" : "20px"};
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;
