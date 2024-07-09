import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { RecruitmentStatusButtonWeb } from "../Components/RecruitmentStatusButtonWeb";

export default function NewsBottom() {
  return (
    <ThemeProvider theme={theme}>
      <BottomContainer>
        <Header7>협업에 미친 파드의 여정에 동참하고 싶다면</Header7>
        <RecruitmentStatusButtonWeb
          theme={theme}
          backgroundColor={theme.MainColor.PrimaryBlue}
        />
      </BottomContainer>
    </ThemeProvider>
  );
}

const Header7 = styled.div`
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 140%;
  margin-bottom: 70px;
`;

const BottomContainer = styled.div`
  height: 624px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Text = styled.p`
// 	margin
// `;
