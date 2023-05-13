import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import PlanerImage from '../../../assets/img/Planner_parts.png'; 
import DesignerImage from '../../../assets/img/Designer_part.png';
import APPImage from '../../../assets/img/App_part.png';
import WEBImage from '../../../assets/img/Web_part.png';
import SERVERImage from '../../../assets/img/Server_part.png';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const Header5 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 5vw;
  white-space: pre-line;
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    line-height: 140%;
    display: flex;
    position: relative;
`;

const ContentWrapper = styled.div`
    margin-bottom: 26vw;
    margin-top: 1vw;
    margin-left: 4vw;
    margin-right: -85vw;
    display: flex;    
    flex-direction: column;
    align-items: ${props => props.id % 2 === 0 ? 'flex-end' : 'flex-start'};
    width: 85vw;
    height: 53vw;
`;

const Image = styled.img`
    margin-bottom: 4.8vw;
    margin-top: -20vw;
    width: 53vw;
    height: 64vw;
`;

const PartDiv = styled.div`
    flex-direction: row;
    padding-top: 45px;
    height: 2445px;
`;

const TextWrapper = styled.div`
    word-break: keep-all;
    align-items: flex-start;
    text-align: ${props => props.id % 2 === 1 ? 'left' : 'right'};
`;
const PartWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.id % 2 === 0 ? 'flex-end' : 'flex-start'};
`;

const PartContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 26.667vw;
    align-items: flex-start;
    margin-top: 29.333vw;
    padding: 0;
`;

function PartSection(props){
    return (
        <ContentWrapper>
            <Image src={props.content.imageSrc} alt={`Image ${props.content.id}`}/>
            <TextWrapper>
                <Header5>{props.content.title}</Header5>
                <Body2>{props.content.description}</Body2>
            </TextWrapper>
        </ContentWrapper>
    );
}

function HomePartsMob() {
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
    ]
    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
            <Header7>PARTS</Header7>
            <PartContents>
                {contentsData.map(content => (
                    <PartWrapper key={content.id} id={content.id}>
                        <PartSection content={content}></PartSection>
                    </PartWrapper>
                ))}
            </PartContents>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomePartsMob;
