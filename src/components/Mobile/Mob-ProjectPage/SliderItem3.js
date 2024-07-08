import styled from "styled-components";

const Slideritem3 = ({ title, src }) => {
  return (
    <SliderItem1>
      <SliderImage src={src} alt="SliderImg" />
      <SliderContent>
        <Body2>{title}</Body2>
      </SliderContent>
    </SliderItem1>
  );
};

export default Slideritem3;

const SliderItem1 = styled.div`
  width: 330px;
  height: 370px;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  cursor: grab;
  margin-top: 10px;
  overflow: hidden;
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 20%;
  background-color: #ff5c00;
  border-radius: 0px 0px 20px 20px;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 20px 20px 0px 0px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: white;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  line-height: 160%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
