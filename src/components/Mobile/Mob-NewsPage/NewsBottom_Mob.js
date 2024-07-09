import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonMob } from "../Components/RecruitmentStatusButtonMob";

export default function NewsBottomMob() {
  return (
    <ThemeProvider theme={theme}>
      <BottomContainer>
        <Header8>
          협업에 미친<br></br>파드의 여정에<br></br>동참하고 싶다면
        </Header8>
        <RecruitmentStatusButtonMob
          theme={theme}
          backgroundColor={theme.MainColor.PrimaryBlue}
        />
      </BottomContainer>
    </ThemeProvider>
  );
}

const BottomContainer = styled.div`
  height: 624px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header8 = styled.div`
  margin-bottom: 90px;
  font-size: ${(props) => props.theme.Mob_fontSizes.Header8};
  font-weight: ${(props) => props.theme.fontWeights.Header8};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  line-height: 140%;
  text-align: center;
  display: flex;
`;
