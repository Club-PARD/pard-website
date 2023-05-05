import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import PlanerImage from '../../../assets/img/Planner_parts.png';
import { color } from 'framer-motion';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 6.667vw;
  white-space: pre-line;
`;

const Sub3 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Subtitle3};
  font-weight: ${props => props.theme.fontWeights.Subtitle3};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const Header6 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    color: ${props => props.color == null ? "#FFFFFF" : props.color};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    text-align: center;
    line-height: 140%;
    display: flex;
    margin-top: 5.333vw;
    margin-bottom: 4vw;
`;
const Header3 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Header3};
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
    bottom: ${props => props.isname ? '9vw' : '4.267vw'}; 
    right: 5.333vw;
`;


const PartContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 26.667vw;
    align-items: flex-start;
    margin-top: 29.333vw;
`;

const PartWrapper = styled.div`
`;

const ContentWrapper = styled.div`
    margin-top: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 66.667vw;
    height: 72vw;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    position: relative;
`;

const TextWrapper = styled.div`
    padding: 0px 11.200vw;
    word-break: keep-all;
    align-items: center;
`;

const TextWrapper2 = styled.div`
    margin-top: 6.133vw;
    height: 0;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`;

const Image = styled.img`
    margin-top: -16vw;
    width: 32vw;
    height: 32vw;
    border: 2px solid ${props => (props.color)};
    border-radius: 50%;
    
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 100%;
`;

function MentorCard(props){
    return (
        <ContentWrapper key={props.content.id} marginTop={props.content.id % 2 !== 0 }>
            <Image src={props.content.imageSrc} alt={`Image ${props.content.id}`} color={props.content.color}/>
            <TextWrapper2>
                <Header3 color = {props.content.color}>"</Header3>
                <Header3 color = {props.content.color}>"</Header3>
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
            <Header7>멘토 추천사</Header7>
            <Sub3>함께할 수 밖에 없는 이유</Sub3>
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