import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutWeb_partImage from '../../../assets/img/AboutWeb_part.png'; 

//TODO
//사진 저장하고 사진 업로드
//Header6Number, Header6 간격띄우기 생각해보고 하나로 묶기
const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  position: absolute;
`;

const Body1 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body1};
    font-weight: ${props => props.theme.fontWeights.Body1};
    position: absolute;
    font-family: 'NanumSquare Neo';
    color: #000000;
    width: 38.4722vw;
    padding-top: 2.5694vw;
    line-height: 160%;
`;

const Body3 = styled.div`
    padding-left:43.3333vw;
    position: absolute;
    font-family: 'NanumSquare Neo';
    color: #000000;
    Weight: Regular;
    font-size: 1.3889vw;
    width : 31.8889vw;
    line-height: 140%;
`;

const StyledUl = styled.ul`
    padding-top: 6.9444vw;
    padding-inline-start: 0vw;
    width: 37.0833vw;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
//StyledNav를 적용하면 가로 정렬은 됨 하지만 버튼,링크 작용이 안됨
//적용 안하면 가로 정렬은 안됨. 하지만 버튼, 링크 작용은 됨........
//여러 방법을 사용해봤지만 해결책을 모르겠음...
const StyledNav = styled.nav`
    display: flex;
    padding-left: 0;
`;

const Button = styled.button`
    width: 37.0833vw;
    height: 2.7778vw;
    border-radius: 1.0417vw;
    &:hover, &:active {
        background-color: #FF5C00;
    }
    margin-bottom: 0.6944vw;
    text-align: left;
    border-width: 0px;
    background-color: #FFFFFF;
`;

const Header6Number = styled.text`
    display: inline-block;
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    font-family: 'NanumSquare Neo';
    color: #000000;
    padding-left: 1.3889vw;
`;

const Header6 = styled.text`
    display: inline-block;
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    font-family: 'NanumSquare Neo';
    color: #000000;
    padding-left: 6.6667vw;
`;

const WebPartImage = styled.img`
    position: absolute;
    padding-top: 7.5694vw;
    padding-left:43.3333vw;
    width: 41.1111vw;
    height: 37.9861vw;
`;

const PartDiv = styled.div`
    background-color: #FFFFFF;
    height : 950px;
    padding-top : 12.1528vw;
    padding-left : 7.7778vw;
`;

function AboutProgram() {
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>함께하는 여정</Header7>
                <Body3>학기 중 매 주 토요일 4시간씩 12주,방학 중 3주간의 정규 프로그램과 이외 자율 활동들이 진행됩니다.</Body3>
                <StyledNav> 
                    <StyledUl>
                        <Button>
                            <StyledLink to="#"><Header6Number>01</Header6Number><Header6>세미나 & 연합세미나</Header6></StyledLink>
                        </Button>
                        <Button>
                            <StyledLink to="#"><Header6Number>02</Header6Number><Header6>스터디</Header6></StyledLink>
                        </Button>
                        <Button>
                            <StyledLink to="#"><Header6Number>03</Header6Number><Header6>서핑데이</Header6></StyledLink>
                        </Button>
                        <Button>
                            <StyledLink to="#"><Header6Number>04</Header6Number><Header6>숏커톤</Header6></StyledLink>
                        </Button>
                        <Button>
                            <StyledLink to="#"><Header6Number>05</Header6Number><Header6>롱커톤 / 데모데이</Header6></StyledLink>
                        </Button>
                        <Button>
                            <StyledLink to="#"><Header6Number>06</Header6Number><Header6>기업 연계 프로젝트</Header6></StyledLink>
                        </Button>
                    </StyledUl>
                    <WebPartImage src={AboutWeb_partImage} alt="AboutWeb_partImage" />
                </StyledNav>
                <Body1>
                    타운홀 미팅으로 시작하여 모든 동아리원들과 관계를 쌓아갑니다. <br></br>
                    세미나는 전문가로부터 검토받은 커리큘럼을 기반으로 파트장의 세션과 <br></br>
                    파트원들의 정보 공유, 현직자 실무 세션을 통해 협업을 위한 지식을 쌓습니다. <br></br>
                    특히 연합 세미나에서는 타 직군과 협업하는 법을 배우고, <br></br>
                    의사 결정과 문제 해결에 대한 시각을 확장합니다.
                </Body1>
            </ThemeProvider>
        </PartDiv>
    );
}

export default AboutProgram;