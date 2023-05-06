import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

const Header7 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Header8};
    font-weight: ${props => props.theme.fontWeights.Header8};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    line-height: 1.45;
    margin-bottom: 8.000vw;
    white-space: pre-line;
    text-align : center;
  `;

const PartDiv = styled.div`
    padding-left:6.5556vw;
    padding-right: 7.7778vw;
    padding-top: 67.9444vw;
    padding-bottom: 65vw; // 원하는 만큼 값을 조절
    height: 62vw;
    position: relative;
`;

const Subtitle3 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Body1};
    font-weight: ${props => props.theme.fontWeights.Body1};
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
    /* position: absolute; */
    width: 32.2667vw;
    height: 13.8667vw;
    /* left: calc(50% - 23.0556vw/2); */
    /* left: 8.8194vw; */
    margin-left: 25.5vw;
    margin-top: 28.8667vw;
    border:none;
    background: #5262F5;
    border-radius: 2.6667vw;
`

const Header5 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.ButtonText1};
    font-weight: ${props => props.theme.fontWeights.ButtonText1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: -0.6600vw;
    white-space: pre-line;
    text-align: center;
    white-space: nowrap;
`

function InquiryLast() {
    const handleClick = () => {
        window.location.href = "https://pard.channel.io/lounge";
    };

    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>더 궁금하신<br></br>내용이 있거나<br></br>문의사항이<br></br>있으신가요?</Header7>
                <Subtitle3>동아리 관련, 프로젝트, 후원 등<br></br>언제든지 문의해 주세요.</Subtitle3>
                <Frame15 onClick={handleClick}>
                    <Header5>문의하기</Header5>
                </Frame15>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryLast;