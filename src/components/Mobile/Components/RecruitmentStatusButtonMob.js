import styled from "styled-components";
import { pardDATA } from "../../../utils/data.constant";

export const RecruitmentStatusButtonMob = ({ theme, backgroundColor }) => {
  const content = pardDATA.isRecruiting
    ? `지금 바로 ${pardDATA.currentGeneration}기 지원하기`
    : `${pardDATA.currentGeneration}기 모집이 완료되었습니다`;

  return pardDATA.isRecruiting ? (
    <EnrollmentOpenButton theme={theme} backgroundColor={backgroundColor}>
      {content}
    </EnrollmentOpenButton>
  ) : (
    <EnrollmentClosedButton theme={theme}>{content}</EnrollmentClosedButton>
  );
};

const ButtonStyles = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.ButtonText1};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: flex;
  align-items: center;
  width: 220px;
  height: 60px;
  justify-content: center;
  border-radius: 10px;
  border: none;
`;

const EnrollmentOpenButton = styled(ButtonStyles)`
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  cursor: pointer;
`;

const EnrollmentClosedButton = styled(ButtonStyles)`
  background-color: #d3d1d8;
  color: #ffffff;
  cursor: not-allowed;
`;
