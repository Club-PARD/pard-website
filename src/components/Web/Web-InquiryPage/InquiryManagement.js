import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { useState } from 'react';
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

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
  text-align : center;
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
const TextWrap = styled.div`
    position: absolute;
    width: 17.3611vw;
    height: 22%;
    top: 78%;
    background-color : rgba(221,2,34,0.5);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`
const Subtitle1 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Subtitle1};
    font-weight: ${props => props.theme.fontWeights.Subtitle1};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    position: absolute;
        top: 35%;
        left: 58%;
        width: 100%;
        transform: translate(-50%,-50%);
    margin-bottom: 0.2788w;
    white-space: pre-line;
    text-align: left;

`;
const Caption = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Caption};
    font-weight: ${props => props.theme.fontWeights.Caption};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
        position: absolute;
        top: 64%;
        left: 58%;
        width: 100%;
        transform: translate(-50%,-50%);
    margin-bottom: 0.7500vw;
    white-space: pre-line;
    text-align: left;

`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 112px;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100%;
    background-color: blue;//연습용
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr); //4개씩 넣고 각 넓이는 1fr이다
    grid-gap: 20px;//서로 20px의 차이가 있도록
    grid-auto-rows: 1fr;
    
`
const Column = styled.div`
    //나중에 이미지 넣을 공간
    position: relative;
    max-width: 17.3611vw;
    background-color: white; // 연습용 
    ${props => props.hover && css` //props.hover 값이 true일때 css값을 넣어라
    background-color: black; //운영진의 간단한 소개
  `}
`
const Image = styled.img`
    max-width: 17.3611vw;;
    width: 17.3611vw;
    height: 20.8333vw;
    display: block; margin: 0px auto;
`



function InquiryManagement() {
    const managerData=[
        {
            id : 1,
            imgsrc : CHJ,
            name : '최현종(회장)',
            position : 'Product Manager',
        },
        {
            id : 2,
            imgsrc : SYC,
            name : '송예찬(회장)',
            position : 'Operator',
        },
        {
            id : 3,
            imgsrc : LSY,
            name : '이신영',
            position : 'Operator',
        },
        {
            id : 4,
            imgsrc : PJG,
            name : '박정규',
            position : 'Developer',
        },
        {
            id : 5,
            imgsrc : KGS,
            name : '김진서',
            position : 'Developer',
        },
        {
            id : 6,
            imgsrc : KYG,
            name : '김유진',
            position : 'Developer',
        },
        {
            id : 7,
            imgsrc : KHR,
            name : '김하람',
            position : 'Developer',
        },
        {
            id : 8,
            imgsrc : JSH,
            name : '조세희',
            position : 'Designer',
        },
        {
            id : 9,
            imgsrc : SGS,
            name : '신지수',
            position : 'Designer',
        },
        {
            id : 10,
            imgsrc : JH,
            name : '조환',
            position : 'Product Manager',
        },
        {
            id : 11,
            imgsrc : PSG,
            name : '백승균',
            position : 'Product Manager',
        },


    ] //ARRAY 값 운영진의 정보를 넣을 예정
    const [isHovering, setIsHovering]=useState(-1);
    const handleMouseEnter=(index)=>{
        setIsHovering(index);
    }
    const handleMouseLeave=()=>{
        setIsHovering(-1);
    }
    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
                
            <Header7>거친 파도를 뚫고 나가는<br></br>파드 1기 운영진을 소개합니다</Header7>            
            <Subtitle3>함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요</Subtitle3>
            <GridContainer>
                {managerData.map(content =>(
                    <Column key={content.id} hover = {content.id===isHovering} onMouseEnter={()=> handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave} 
                    className={isHovering ? "hover":""} >
                        <Image src={content.imgsrc} alt={`Image ${content.id}`} ></Image>
                        <TextWrap>
                        <Subtitle1>{content.name}</Subtitle1>
                        <Caption>{content.position}</Caption>
                        </TextWrap>
                    </Column>
                ))}

            </GridContainer>

            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryManagement;