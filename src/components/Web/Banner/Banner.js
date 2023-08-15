import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import backgroundImg from '../../../assets/img/BannerImg/BannerImg.png';
import closeButtonImg from '../../../assets/img/BannerImg/XButton.png';

const MainText = styled.div`
  color: #FFF;
  text-align: center;
  font-family: 'NanumSquare Neo variable';
  font-size: 19.333px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 1.933px;
`;

const SubText = styled.div`
  color: #FFF;
  text-align: center;
  font-family: 'NanumSquare Neo variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 8px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 120px;
  background-image: url(${backgroundImg});
  margin-top: 100px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 31px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

function BannerWeb() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <Div>
          <ThemeProvider theme={theme}>
            <CloseButton src={closeButtonImg} onClick={handleCloseBanner} />
            <MainText>
              PARD 2기 신입기수 리쿠르팅 시작
            </MainText>
            <SubText>
              지원서 접수 기간 : 08.14(월) - 08.25(금)
            </SubText>
          </ThemeProvider>
        </Div>
      )}
    </>
  );
}

export default BannerWeb;
