import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 2.500vw;
  white-space: pre-line;
  text-align : center;

  `;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 112px;
    padding-top: 100px;
    height: 62vw;
    position: relative;
`;

const Subtitle3 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Subtitle3};
    font-weight: ${props => props.theme.fontWeights.Subtitle3};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 3.7500vw;
    white-space: pre-line;
    text-align: center;
`;

const Frame15 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.0417vw 8.3333vw;
    gap: 0.6944vw;
    margin-top: -1.3vw;

    position: absolute;
    width: 23.0556vw;
    height: 4.4444vw;
    /* left: calc(50% - 23.0556vw/2); */
    left: 33.183vw;
    top: 34.9306vw;
    border:none;
    background: #5262F5;
    border-radius: 0.6944vw;
`

const Header5 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 0.2600vw;
    white-space: pre-line;
    text-align: center;
    white-space: nowrap;
`

function InquiryLast() {
        const handleFrameClick = () => {
          window.location.href = "https://pard.channel.io/lounge";
        };

    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>더 궁금하신 내용이 있거나<br></br>문의사항이 있으신가요?</Header7>
                <Subtitle3>동아리 관련, 프로젝트, 후원 등 언제든지 문의해 주세요.</Subtitle3>
                <Frame15 onClick={handleFrameClick}>
                    <Header5>문의하기</Header5>
                </Frame15>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryLast;