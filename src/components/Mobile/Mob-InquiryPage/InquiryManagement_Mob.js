import styled, { ThemeProvider} from 'styled-components';
import {FaInstagram, FaGithub, FaInvision} from 'react-icons/fa';
import {SiNotion} from 'react-icons/si';
import { theme } from '../../../styles/theme';
import CHJ from '../../../assets/img/최현종(회장).png';
import SYC from '../../../assets/img/송예찬(부회장).png';
import KYG from '../../../assets/img/김유진.png';
import KGS from '../../../assets/img/김진서.png';
import KHR from '../../../assets/img/김하람.png';
import PJG from '../../../assets/img/박정규.png';
import PSG from '../../../assets/img/백승균.png';
import SGS from '../../../assets/img/신지수.png';
import LSY from '../../../assets/img/이신영.png';
import JSH from '../../../assets/img/조세희.png';
import JH from '../../../assets/img/조환.png';

const Header8 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 13.3333vw;
  white-space: pre-line;
  text-align: center;
`;
const Body1 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body1};
    font-weight: ${props => props.theme.fontWeights.Body1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 26.6666vw;
    white-space: pre-line;
    text-align: center;
`;
const TextWrap = styled.div`
    position: absolute;
    width: 40vw;
    height: 34.7%;
    top: 65.3%;
    border-bottom-left-radius: 1.3889vw;
    border-bottom-right-radius: 1.3889vw;
    background-color :  ${({position}) => position === 'Developer' ? "rgba(255,92,0,0.5)" 
    : position === 'Designer'
    ?"rgba(123,63,239,0.5)": position === 'Operator'
    ?"rgba(100,194,254,0.5)":"rgba(82,98,245,0.5)"};
    transition: 0.3s;
    &:hover{
        top: 0%;
        height: 100%;
        border-top-left-radius:1.3889vw;
        border-top-right-radius: 1.3889vw;
        background-color: ${({position}) => position === 'Developer' ? 'rgba(255, 92, 0, 0.8)' 
        : position === 'Designer' ? 'rgba(123, 63, 239, 0.8)' 
        : position === 'Operator' ? 'rgba(100, 194, 254, 0.8)' : 'rgba(82, 98, 245, 0.8)'};
    }   
`
const Subtitle1 = styled.div`
    font-size: 4.2667vw;
    font-weight: ${props => props.theme.fontWeights.Subtitle1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    position: absolute;
        bottom: 7vw;
        left: 61%;
        width: 100%;
        transform: translate(-50%,-50%);
    margin-bottom: 0.2788w;
    white-space: pre-line;
    text-align: left;
`;
const Caption = styled.div`
    font-size: 3.2vw;
    font-weight: ${props => props.theme.fontWeights.Caption};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
        position: absolute;
        bottom: 1.5067vw;
        left: 61%;
        width: 100%;
        transform: translate(-50%,-50%);
    margin-bottom: 0.7500vw;
    white-space: pre-line;
    text-align: left;
`;

const PartDiv = styled.div`
    padding-left:1.1111vw;
    padding-top: 3.1250vw;
    height: 100%;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; //2개씩 넣고 각 넓이는 1fr이다
    grid-gap: 1.3889vw;//서로 20px의 차이가 있도록
    grid-auto-rows: 1fr;
`
const Column = styled.div`
    //나중에 이미지 넣을 공간
    position: relative;
    max-width: 17.3611vw;
`
const Image = styled.img`
    width: 40vw;
    height: 50.6667vw;
    display: block; margin: 0px auto;
`
const IconWrapper = styled.div`
    display: none;
    position: absolute;
    right: 0;
    ${TextWrap}:hover & {
    display: flex;
    justify-content: flex-end;
    }
`
const IconBackground = styled.div`
  position: relative;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 1.6vw;
  margin-top: 2.6667vw;
  text-align: center;
`;
const Icon = styled.a`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
`;
function InquiryManagemaentMob() {
    const managerData=[
        {
            id : 1,
            imgsrc : CHJ,
            name : '최현종(회장)',
            position : 'Product Manager',
    site: [
      { name: 'github', link: 'https://www.github.com' },
      { name: 'instagram', link: 'https://www.instagram.com' },
      { name: 'notion', link: 'https://www.notion.com' },
            ]
        },
        {
            id : 2,
            imgsrc : SYC,
            name : '송예찬(회장)',
            position : 'Operator',
            site :[],
        },
        {
            id : 3,
            imgsrc : LSY,
            name : '이신영',
            position : 'Operator',
            site :[],
        },
        {
            id : 4,
            imgsrc : PJG,
            name : '박정규',
            position : 'Developer',
            site :[{name: 'notion', link: 'https://www.notion.com'},
            { name: 'github', link: 'https://www.github.com' },
        ],
        },
        {
            id : 5,
            imgsrc : KGS,
            name : '김진서',
            position : 'Developer',
            site :[   { name: 'github', link: 'https://www.github.com' },],
        },
        {
            id : 6,
            imgsrc : KYG,
            name : '김유진',
            position : 'Developer',
            site :[   { name: 'github', link: 'https://www.github.com' },],
        },
        {
            id : 7,
            imgsrc : KHR,
            name : '김하람',
            position : 'Developer',
            site :[   { name: 'github', link: 'https://www.github.com' },],
        },
        {
            id : 8,
            imgsrc : JSH,
            name : '조세희',
            position : 'Designer',
            site :[],
        },
        {
            id : 9,
            imgsrc : SGS,
            name : '신지수',
            position : 'Designer',
            site :[],
        },
        {
            id : 10,
            imgsrc : JH,
            name : '조환',
            position : 'Product Manager',
            site :[],
        },
        {
            id : 11,
            imgsrc : PSG,
            name : '백승균',
            position : 'Product Manager',
            site :[],
        },
    ]
    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header8>거친 파도를 <br/>뚫고 나가는<br/> 파드 1기 운영진을<br/>소개합니다</Header8>
            <Body1>함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요</Body1>
            <GridContainer>
                {managerData.map(content =>(
                    <Column key={content.id}>
                        <Image src={content.imgsrc} alt={`Image ${content.id}`} ></Image>

                        <TextWrap position={content.position}>
                        <Subtitle1>{content.name}</Subtitle1>
                        <Caption>{content.position}</Caption>
                        <IconWrapper>
                            {content.site.map(site=>(
                            <IconBackground  key={site.name}>
                            <Icon href={site.link}>
                                {site.name === "instagram" ? <FaInstagram  style={{ color: "black" }} /> 
                                :site.name ==="notion" ? <SiNotion style={{color : "black"}}/> 
                                :site.name === "github" ? <FaGithub style={{color : "black"}}/>
                                :<FaInvision style={{color : "black"}}/>
                                //in 도 넣어야 하고 위에 in은 아닌듯 그리고 디스콰이엇도 넣어야함
                                }
                            </Icon>
                            </IconBackground>
                            ))}
                        </IconWrapper>
                            
                        </TextWrap>
                    </Column>
                ))}

            </GridContainer>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryManagemaentMob;