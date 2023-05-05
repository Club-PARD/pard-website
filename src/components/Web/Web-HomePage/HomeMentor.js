import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import PlanerImage from '../../../assets/img/Planner_parts.png';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 25px;
  white-space: pre-line;
`;

const Header4 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const Header6 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    color: ${props => props.color == null ? "#FFFFFF" : props.color};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    text-align: center;
    line-height: 140%;
    display: flex;
    margin-top: 20px;
    margin-bottom: 15px;
`;
const Header7 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header3};
    font-weight: ${props => props.theme.fontWeights.Header3};
    color: ${props => props.color == null ? "#FFFFFF" : props.color};
    font-family: 'NanumSquare Neo';
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    color: rgba(255, 255, 255, 0.4);
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    line-height: 140%;
    display: flex;
    text-align:right;
    position: absolute;
    bottom: ${props => props.isname ? '35px' : '20px'}; 
    right: 20px;
`;

//margin-top: 110px = 60(image radius) + 50 px
const PartContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    align-items: flex-start;
    margin-top: 110px;
`;

const PartWrapper = styled.div`
`;

const ContentWrapper = styled.div`
    margin-top: ${props => (props.marginTop ? '5.4861vw' : '0')};
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 270px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    position: relative;
`;

const TextWrapper = styled.div`
    padding: 0px 42px;
    word-break: keep-all;
    align-items: center;
`;

const TextWrapper2 = styled.div`
    margin-top: 15px;
    height: 0;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`;

const Image = styled.img`
    margin-top: -60px;
    width: 120px;
    height: 120px;
    border: 2px solid ${props => (props.color)};
    border-radius: 50%;
    
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 62vw;
`;

function MentorCard(props){
    return (
        <ContentWrapper key={props.content.id} marginTop={props.content.id % 2 !== 0 }>
            <Image src={props.content.imageSrc} alt={`Image ${props.content.id}`} color={props.content.color}/>
            <TextWrapper2>
                <Header7 color = {props.content.color}>"</Header7>
                <Header7 color = {props.content.color}>"</Header7>
            </TextWrapper2>
            <TextWrapper>
                <Header6>{props.content.title}</Header6>
            </TextWrapper>
            <Body2 isname={true}>{props.content.mentor_name}</Body2>
            <Body2 isname={false}>{props.content.mentor_from}</Body2>
        </ContentWrapper>
    );
}

function HomeMentor() {
    const contentsData = [
        {
            id: 1,
            imageSrc: PlanerImage,
            title: '솔직히 얘네가 교수보다 낫다',
            mentor_name: '이동영',
            mentor_from: '- 노을(주) 前 CEO',
            color: '#5262F5'
        },
        {
            id: 2,
            imageSrc: PlanerImage,
            title: ' 진짜 실무역량을 키울 수 있는 학부생 나부랭이들 중 최고',
            mentor_name: '주영민',
            mentor_from: '-히든피겨스 대표',
            color: '#FF5C00'
        },
        {
            id: 3,
            imageSrc: PlanerImage,
            title: '배워서 남주는 가치를 제대로 실천하는 후배들',
            mentor_name: '이즌쉬러블리',
            mentor_from: '-메타코미디클럽 개발자',
            color: '#64C59A'
        },
    ];

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header2>멘토 추천사</Header2>
            <Header4>함께할 수 밖에 없는 이유</Header4>
            <PartContents>
                {contentsData.map(content => (
                    <PartWrapper key={content.id}>
                        <MentorCard content={content}></MentorCard>
                    </PartWrapper>
                ))}
            </PartContents>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomeMentor;