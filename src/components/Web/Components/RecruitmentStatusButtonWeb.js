import styled from "styled-components";
import {
  APPLY_FORM_URL,
  EARLY_FORM_URL,
  pardDATA,
} from "../../../utils/data.constant";

export const RecruitmentStatusButtonWeb = ({ theme, backgroundColor }) => {
  const content =
    pardDATA.recruitStatus === "ready"
      ? `${pardDATA.currentGeneration}기 리크루팅 알림 신청`
      : pardDATA.recruitStatus === "progress"
      ? `지금 바로 ${pardDATA.currentGeneration}기 지원하기`
      : `${pardDATA.currentGeneration}기 모집이 완료되었습니다`;

  const handleClick = () => {
    pardDATA.recruitStatus === "ready"
      ? window.open(EARLY_FORM_URL, "_blank")
      : window.open(APPLY_FORM_URL, "_blank");
  };

  return pardDATA.recruitStatus === "ready" ||
    pardDATA.recruitStatus === "progress" ? (
    <EnrollmentOpenButton
      theme={theme}
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      <p>{content}</p>
    </EnrollmentOpenButton>
  ) : (
    <EnrollmentClosedButton theme={theme}><p>{content}</p></EnrollmentClosedButton>
  );
};

const ButtonStyles = styled.button`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.ButtonText1};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: flex;
  align-items: center;
  line-height: 34px;
  width: auto;
  height: 64px;
  padding-right: 120px;
  padding-left: 120px;
  justify-content: center;
  border-radius: 10px;
  border: none;
`;

const EnrollmentOpenButton = styled(ButtonStyles)`
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  cursor: pointer;
  p {
    margin-top: 26px;
  }
`;

const EnrollmentClosedButton = styled(ButtonStyles)`
  background-color: #d3d1d8;
  color: #ffffff;
  cursor: not-allowed;
  p {
    margin-top: 26px;
  }
`;
