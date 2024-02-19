import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

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

const Button = styled.button`
  margin-left: 77px;
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
  /* background-color: #64C59A; */
  background-color: #d3d1d8;
  color: #ffffff;
  /* color: black; */
  border-radius: 10px;
  border: none;
  /* cursor: pointer; */
  cursor: not-allowed;
`;

const Button1 = styled.button`
  margin-left: 77px;
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

function RecruitingLastMob() {
  const handleClick = () => {
    window.open("https://pard-notice.oopy.io", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header8>
            협업에 미친<br></br>파드의 여정에<br></br>동참하고 싶다면
          </Header8>
          <Button1 onClick={handleClick}>지금 바로 3기 지원하기</Button1>
          {/* <Button>지금 바로 3기 지원하기</Button> */}
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingLastMob;
