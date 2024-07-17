import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonMob } from "../Components/RecruitmentStatusButtonMob";

function RecruitingLastMob() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            협업에 미친<br></br>파드의 여정에<br></br>동참하고 싶다면
          </Header8>
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

export default RecruitingLastMob;

const Header8 = styled.div`
  margin-top: 190px;
  margin-left: 84px;
  margin-bottom: 90px;
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  line-height: 140%;
  text-align: center;
  display: flex;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartDiv = styled.div`
  height: 750px;
  width: 375px;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;
