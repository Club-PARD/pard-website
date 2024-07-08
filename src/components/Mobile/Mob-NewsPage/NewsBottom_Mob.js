import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { pardDATA } from "../../../utils/data.constant";

export default function NewsBottomMob() {
  return (
    <ThemeProvider theme={theme}>
      <BottomContainer>
        <Header8>
          협업에 미친<br></br>파드의 여정에<br></br>동참하고 싶다면
        </Header8>
        <Button>{pardDATA.currentGeneration}기 모집이 완료되었습니다</Button>
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

const Button = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 220px;
  height: 52px;
  background-color: #d3d1d8;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: not-allowed;
`;

const Button1 = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  gap: 10px;
  width: 220px;
  height: 52px;
  background-color: #64c59a;
  color: #ffffff;
  /* color: black; */
  border-radius: 10px;
  border: none;
  cursor: pointer;
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
