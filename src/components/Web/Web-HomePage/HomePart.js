import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DesignerImage from '../../../assets/img/Designer_part.png';
import PlanerImage from '../../../assets/img/Planner_parts.png';
import APPImage from '../../../assets/img/App_part.png';
import WEBImage from '../../../assets/img/Web_part.png';
import SERVERImage from '../../../assets/img/Server_part.png';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3vw;
  white-space: pre-line;
`;


const Header5 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header5};
    font-weight: ${props => props.theme.fontWeights.Header5};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    text-align: left;
    line-height: 140%;
    align-items: flex-start;
    display: flex;
    margin-top: 20px;
    margin-bottom: 15px;
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    color: white;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    text-align: left;
    line-height: 140%;
    display: flex;
`;

////////////////// 폰트 끝 /////////////////////////// 

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 62vw;
`;

const PartContents = styled.div`
    display: flex;
    height:30.6250vw;
    justify-content: space-between;
    align-items: flex-start;
    
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PartWrapper = styled.div`
 align-items: center;
 display: flex;
 justify-content: space-between;

`;

const Image = styled.img`
    max-width: 13.8889vw;;
    width: 13.8889vw;
    height: 16.6667vw;
    margin-top: ${props => (props.marginTop ? '5.4861vw' : '0')};
`;


const LearnMoreButton = styled.div`
 align-items: center;
 display: flex;
 background-color: #7B3FEF;
 height: '3.5625em';
 justify-content: center;
 width: '22.5em';
 border-radius: 10px;
 margin-top: 3.8vw;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: '3.8194vw';
`;




function HomePart() {
    const contentsData = [
        {
            id: 1,
            imageSrc: PlanerImage,
            title: '서비스 기획',
            description: '문제 정의부터, 산출물 작성까지\n사용자 중심으로 문제를\n해결하고 프로젝트를 관리합니다.',
        },
        {
            id: 2,
            imageSrc: DesignerImage,
            title: 'UI/UX 디자인',
            description: '유저플로우에 적합한 \nUXUI 디자인 이론을 녹여 \n사용자 중심의 화면을 설계합니다.',
        },
        {
            id: 3,
            imageSrc: APPImage,
            title: '앱(APP)',
            description: '사용자를 위한 어플리케이션 \nUI를 설계하고  Flutter 기반 \n앱 서비스를 개발합니다. \n* 2기 부터는 ios 기반 예정',
        },
        {
            id: 4,
            imageSrc: WEBImage,
            title: '웹(WEB)',
            description: '사용자를 위한 웹 UI를 설계하고 \n문제를 해결하는 React 기반 \n웹 서비스를 개발합니다.',
        },
        {
            id: 5,
            imageSrc: SERVERImage,
            title: '서버(SERVER)',
            description: '서비스의 핵심 비즈니스 로직과 \n데이터 흐름을 설계하고 \n인프라 구축과 배포를 담당합니다. \n* 2기부터 신설 예정',
        },
    ];

    return (
        <div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <Header2>PARTS</Header2>
                    <PartContents>
                        {contentsData.map(content => (
                            <PartWrapper key={content.id}>
                                <ContentWrapper key={content.id}>
                                    <Image src={content.imageSrc} alt={`Image ${content.id}`} marginTop={content.id === 2 || content.id === 4} />
                                    <Header5>{content.title}</Header5>
                                    <Body2>{content.description}</Body2>
                                </ContentWrapper>
                            </PartWrapper>
                        ))}
                    </PartContents>
                    <ButtonDiv>
                        <div style={{ width: '25vw', }}>
                            <LearnMoreButton>
                                <Header5>더 알아보기</Header5>
                            </LearnMoreButton>
                        </div>
                    </ButtonDiv>
                </ThemeProvider>
            </PartDiv>
        </div>
    );
}

export default HomePart;