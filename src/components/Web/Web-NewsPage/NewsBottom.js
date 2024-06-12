import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

export default function NewsBottom() {
  return (
    <ThemeProvider theme={theme}>
      <BottomContainer>
        <Header7>협업에 미친 파드의 여정에 동참하고 싶다면</Header7>
        <Button>3기 모집이 완료되었습니다</Button>
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
`;

const Button = styled.button`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  display: flex;
  align-items: center;
  width: 440px;
  height: 58px;
  /* background-color: #64C59A; */
  justify-content: center;
  margin-top: 100px;
  /* color: #000000; */
  background-color: #d3d1d8;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  /* cursor:pointer; */
  cursor: not-allowed;
`;

const Button1 = styled.button`
  font-size: ${(props) => props.theme.Web_fontSizes.Header6};
  font-weight: ${(props) => props.theme.fontWeights.Header6};
  font-family: "NanumSquare Neo";
  display: flex;
  align-items: center;
  width: 440px;
  height: 58px;
  background-color: #64c59a;
  justify-content: center;
  margin-top: 100px;
  /* color: #000000; */
  background-color: #64c59a;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
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
