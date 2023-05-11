import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React,{useState} from 'react';
import PM from '../../../assets/img/최현종(회장).png';
import Web from '../../../assets/img/김유진.png';
import Design from '../../../assets/img/조세희.png';
import App from '../../../assets/img/김진서.png';
import Server from '../../../assets/img/박정규.png';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: 'NanumSquare Neo';
  line-height: 1.45;
  margin-bottom: 720px;
  text-align : left;
  position: absolute;
  bottom: 0;
  `;

const Header5 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: ${props=>props.color} ;
  opacity: ${props => props.selected ? '1' : '0'};
  margin-left: 648px;
  position: absolute;
  margin-bottom: 32vw;
  bottom: 0;
  white-space: pre-wrap;
`;


const Body1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Body1};
  font-weight: ${props => props.theme.fontWeights.Body1};
  font-family: 'NanumSquare Neo';
  opacity: ${props => props.selected ? '1' : '0'};
  position: absolute;
  margin-left: 648px;
  bottom : 0;
  white-space: pre-wrap;
  margin-bottom: 144px;  
`;

const Div = styled.div`
align-items: center;
justify-content: center;
background-color: #ffffff;

`;

const PartDiv = styled.div`
padding-top: 150px;
padding-left:80px;
padding-right: 112px;
padding-bottom: 114px;
height: 720px;
background-color: #ffffff;
position: relative;
display: block;
width: 1260px;
margin: 0 auto;
`;

const ListWrap = styled.ul`
display: flex;
width:87%;
list-style: none;
padding: 0  ;
margin-bottom: 641px;
position: absolute;
bottom: 0;
`;
const ImageBorder =styled.div`
width: 550px;
height: 30px;
position: absolute;
bottom: 0;
border-radius: 0px 0px 21px 21px;
opacity: ${props => props.selected ? '1' : '0'};
background-color: ${props=> (props.selected) ? props.color:'#ff0'} ;
margin-bottom: 144px;
margin-left: 2px;
`;

const List = styled.li`
  font-size: ${props => props.theme.Web_fontSizes.Header6};
  font-weight: ${props => props.theme.fontWeights.Header6};
  font-family: 'NanumSquare Neo';
white-space: pre-line;
display:inline-block;
color: ${props=> (props.selected) ? '#fff':'#000'} ;

`;
const ListButton = styled.button`
  width: 20%; 
  border: none;
  background-color: ${props=> (props.selected) ? props.color:'#fff'} ;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
`;
const Image =styled.img`
width: 550px;
height: 440px;
opacity: ${props => props.selected ? '1' : '0'};
position: absolute;
float: left;
bottom: 0;
border: 2px solid;
border-color: ${props=> props.selected ? props.color:'#fff'};
border-radius: 21px;
margin-bottom: 144px;
`;
const Down = styled.div`

`;
function AboutPart() {
    const [part, setPart] = useState([
      {
        id:1,
        part:'서비스 기획',
        border_color:'#5262F5',
        imgsrc : PM,
        selected : true,
        partEng :'Product Manager',
        context : 
        `${'\n'} 사용자 중심 기반으로 서비스기획 일련의 과정을 배워 실제 서비스를 기획합니다.
         ${'\n'} 아이디어 발상에서 그치는 것이 아닌 실제 기획과 직결되는 IA, Flow-chart,
         ${'\n'} 화면 설계서 등의 기획 산출물을 작성해보고 실제 프로덕트 개발에서 어떻게 적용할
         ${'\n'} 것인지 의견을 나눠요 
         ${'\n'}  ${'\n'} 단순한 서비스 기획에 필요한 하드스킬만을 배우는 것이 아니라 BM(비즈니스 모델),  
         ${'\n'} 데이터, 사용자 경험, 유저의 니즈에 기반해 이유 있는 기획을 할 수 있는 기반과 마인드를  
         ${'\n'} 가질 수 있습니다.`
              },
      {
        id:2,
        part:'UI/ UX 디자인',
        border_color:'#7B3FEF',
        imgsrc : Design,
        selected : false,
        partEng :'Designer',
        context : 
        `${'\n'} ${'\n'} UX/UI 디자인 이론을 배우며, 사용자 중심 사고를 기르고 개발 가능한 디자인을 
         ${'\n'} 구현합니다. 1인당 1개의 App/Web Product를 선택해 배운 내용들을 적용해보고  
         ${'\n'} 다각도에서 분석하면서 다양한 역량을 키우고 동시에 유의미한 포트폴리오를 완성해요.  
         ${'\n'}  ${'\n'} 현업에 계시는 실무자 분들, 그리고 타 파트과의 협업을 통해 디자인 뿐 아니라 기획,  
         ${'\n'} 사용자 조사, 데이터 도출, 개발자와 협업 등 비즈니스에 대한 이해와 전문성을 갖추어  
         ${'\n'} 협업에 최적화 된 1인 디자이너로 성장합니다.`
      },
      {
        id:3,
        part:'앱(APP)',
        border_color:'#FF5C00',
        imgsrc : App,
        selected : false,
        partEng :'App Developer',
        context : 
        `${'\n'} 모바일 앱과 서비스 개발을 위한 이론을 배우고 실습/협업 합니다. 
         ${'\n'} 개인이 아닌 팀으로 이루어진 개발 과제와 프로젝트를 통해 Github의 활용과 응용은  
         ${'\n'} 물론 프로젝트 파일 생성부터 배포까지의 과정을 경험할 수 있습니다.  
         ${'\n'}  ${'\n'} 프레임 워크에 대한 깊은 분석과 역량을 키우고, IT 프로덕트 제작 과정을 경험함으로써 
         ${'\n'} 유의미한 포트폴리오를 가진 개발자로 성장합니다.
         ${'\n'} *1기는 Flutter를, 2기부터는 iOS기반으로 학습합니다.`
      },
      {
        id:4,
        part:'웹(WEB)',
        border_color:'#FF5C00',
        imgsrc : Web,
        selected : false,
        partEng :'Web Developer',
        context : 
        `${'\n'} 웹과 서비스 개발을 위한 이론을 배우고 실습/협업 합니다. 
         ${'\n'} HTML/CSS/JS에 대해 기초를 빠르게 다지고, React 프레임워크 기반으로
         ${'\n'} 웹 서비스를 개발합니다. 
         ${'\n'}  ${'\n'} 기획, 디자인 직군과의 제대로 된 협업 경험을 통해서 인공지능이 대체할 수 없는
         ${'\n'} 협업 능력을 갖추고, 기획자와 디자이너를 이해할 수 있는 개발자로 성장합니다.`
      },
      {
        id:5,
        part:'서버(SERVER)',
        border_color:'#FF5C00',
        imgsrc : Server,
        selected : false,
        partEng :'Server Developer',
        context : 
        `${'\n'} 실제 서비스를 운영하기 위해 데이터 설계부터 서버를 관리하고, 전반적인 시스템
         ${'\n'} 인프라를 구축 및 배포 및 운영 합니다. 자바의 객체지향, 서버, 관계형 데이터베이스를
         ${'\n'} 이해하고, Spring Boot의 기본기를 다지며 다양한 API를 구현하는 개발자로
         ${'\n'} 성장합니다.
         ${'\n'}  ${'\n'} 클라이언트를 담당하는 앱/웹 파트와 협업하며 의사소통 능력을 키우고, CI/CD를
         ${'\n'} 구축할 수 있는 개발자로 성장합니다.`
      },
    ]);
  
    const handleButtonClick = (id) => {
      setPart(prevPart => prevPart.map(p=>{
        if(p.id ===id){
          return{
            ...p,
            selected:true,
          };
        }else{
          return{
            ...p,
            selected:false,
          }
        }
      }));
    }
  


  return (
    <Div>
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header7>파드를  구성하는 파트</Header7>
        <ListWrap>
          {part.map(content=>(
            <ListButton key={content.id}
            onClick={()=>handleButtonClick(content.id)} 
            selected = {content.selected}
            color={content.border_color}>
          <List  
          key={content.id}
           selected = {content.selected}>{content.part}</List>
          </ListButton>
          ))}
        </ListWrap>
        {part.map(props=>(
          <Down>
        <Image key={props.id}
        src={props.imgsrc} 
        alt={`Image ${props.id}`}
        selected = {props.selected}
        color={props.border_color}
        />
        <ImageBorder 
            selected={props.selected}
            color={props.border_color}
            > </ImageBorder>
        <Header5 
        selected={props.selected}
        color={props.border_color}>{props.partEng} of Pard</Header5>
        <Body1 selected={props.selected}>{props.context}</Body1>
        </Down>
        ))}

      </ThemeProvider>
    </PartDiv>
    </Div>
  );

}

export default AboutPart;