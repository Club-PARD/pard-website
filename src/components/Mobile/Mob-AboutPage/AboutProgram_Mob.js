import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React,{useState} from 'react';
import AboutSeminarImage from '../../../assets/img/AboutSeminar.png'; 
import AboutStudyImage from '../../../assets/img/AboutStudy.png';
import AboutSurfingImage from '../../../assets/img/AboutSurfing.png';
import AboutShortImage from '../../../assets/img/AboutShort.png';
import AboutLongImage from '../../../assets/img/AboutLong.png';
import AboutProjectImage from '../../../assets/img/AboutProject.png';

const Header8 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #000000;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  position: absolute;
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    position: absolute;
    font-family: 'NanumSquare Neo';
    color: #000000;
    width: 303px;
    margin-top: 46px;
    line-height: 140%;
    opacity: ${props => props.selected ? '1' : '0'};
`;

const StyledWrap = styled.ul`
    padding-top : 76px;
    padding-left: 0;
    padding-inline-start: 0px;
`;

const StyledWrap2 = styled.ul`
    padding-inline-start: 0px;
`;

const Button = styled.button`
    width: 303px;
    height: 34px;
    border-radius: 15px;
    margin-bottom: 3px;
    text-align: left;
    border-width: 0px;
    background-color: ${props=> (props.selected) ? props.color:'#fff'} ;
`;

const ButtonText1Number = styled.text`
    display: inline-block;
    font-size: ${props => props.theme.Web_fontSizes.ButtonText1};
    font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    color: ${props=> (props.selected) ? '#fff':'#000'} ;
    padding-left: 20px;
`;

const ButtonText1 = styled.text`
    display: inline-block;
    font-size: ${props => props.theme.Web_fontSizes.ButtonText1};
    font-weight: ${props => props.theme.fontWeights.ButtonText1};
    font-family: 'NanumSquare Neo';
    color: ${props=> (props.selected) ? '#fff':'#000'} ;
`;

const Image = styled.img`
    position: absolute;
    width: 303px;
    height: 280px;
    padding-top: 256px;
    opacity: ${props => props.selected ? '1' : '0'};
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background : #FFFFFF;
  align-items: center;
  padding-left : 18px;
  width: 100%;
`;

const PartDiv = styled.div`
  height : 1096px;
  background-color: white;
  margin: 0 auto;
 padding-left : 40px;
  padding-top : 150px;
  padding-bottom : 40px;
  place-content: center;
  align-content: start;
  justify-content: center;
`;

function AboutProgram_Mob() {

  const [part, setPart] = useState([ //part배열 생성 후 setPart 함수로 상태값을 업데이트
        {
          id:1,
          listNum :'01',
          listCon :'세미나 & 연합세미나',
          border_color:'#FF5C00',
          imgsrc : AboutSeminarImage,
          selected : true,
          context : 
          <>타운홀 미팅으로 시작하여 모든 동아리원들과 관계를 쌓아갑니다. <br/>
          세미나는 전문가로부터 검토받은 커리큘럼을<br/>
          기반으로 파트장의 세션과 파트원들의<br/>
          정보 공유, 현직자 실무 세션을 통해 협업을 위한<br/>
          지식을 쌓습니다.<br/>
          특히 연합 세미나에서는 타 직군과 협업하는 법을<br/>
          배우고, 의사 결정과 문제 해결에 대한 시각을<br/>
          확장합니다.</>
        },
        {
          id:2,
          listNum :'02',
          listCon :'스터디',
          border_color:'#FF5C00',
          imgsrc : AboutStudyImage,
          selected : false,
          context : 
          <>파드는 새로운 것을 배우는 것에 있어<br/>
            주저하지 않습니다.<br/>
            직군, 관심 분야와 관계없이 누구나 자유롭게 배우고<br/> 
            싶은 내용이 있다면 함께 학습할 사람을 모으고,<br/>
            서로 정한 기간에 따라 전문 지식을 쌓아가고<br/>
            이를 공유합니다.</>
        },
        {
          id:3,
          listNum :'03',
          listCon :'서핑데이',
          border_color:'#FF5C00',
          imgsrc : AboutSurfingImage,
          selected : false,
          context : 
          <>1박 2일간 일상에서 벗어나 서로 함께 알아가고 <br/>
          즐기며, 다른 직군과 함께 일 할 때 가장 필요한 <br/>
          협업 커뮤니케이션 및 방법론을 학습합니다.<br/>
          조직 문화 및 커뮤니케이션 컨설팅사의 검수를 받은<br/>
          자체 개발 프로그램을 보유하여 보다 전문성 있는 <br/>
          협업을 습득합니다.</>
        },
        {
          id:4,
          listNum :'04',
          listCon :'숏커톤',
          border_color:'#FF5C00',
          imgsrc : AboutShortImage,
          selected : false,
          context : 
          <>제시된 주제에 따라 무박 2일간 <br/>
          기획자, 디자이너, 개발자가 한 팀이 되어<br/>
          MVP(Minimum Value Product) 수준의 서비스(웹/앱)를 빠르게 개발합니다.<br/>
          후원사 세션, 야식타임, 추첨과 같은 이벤트는 물론<br/>
          발표 이후 멘토링까지 준비되어 있어 실력 향상과 <br/>
          재미를 모두 잡을 수 있습니다.</>
        },
        {
          id:5,
          listNum :'05',
          listCon :'롱커톤 / 데모데이',
          border_color:'#FF5C00',
          imgsrc : AboutLongImage,
          selected : false,
          context : 
          <>파트 상관 없이 누구나 아이디어 경선을 통해 <br/>
          팀을 구성 합니다.<br/>
          3주간 기획, 디자인, 개발 파트가 협업하여 배포 <br/>
          가능한 웹/앱 서비스를 만듭니다.<br/>
          각 파트별 실무자들의 멘토링을 받고 피드백을 <br/>
          받으며 완성도를 높이고 데모데이를 통해 <br/>
          IT 협업 과정과 결과물에 대한 평가를 받습니다.</>
        },
        {
            id:6,
            listNum :'06',
            listCon :'기업 연계 프로젝트',
            border_color:'#FF5C00',
            imgsrc : AboutProjectImage,
            selected : false,
            context : 
            <>공모전과 같은 일회성 프로젝트가 아닌, <br/>
            ‘문제 해결 공동 프로젝트’ 형태로서비스 개선 및<br/>
            신규 아이디어를 발굴하며 실무 역량을 향상합니다.<br/>
            UX/UI 컨설팅펌과 함께하여 아이디어 도출 과정과<br/>
            시장에 필요로한 서비스를 만드는 데 있어 <br/>
            전문성을 확보하고 있습니다.</>
          },
      ]);
    
      const handleButtonClick = (id) => { //현재 id
        setPart(prevPart => prevPart.map(p=>{ //prevPart는 이전에 저장해둔 배열 part정보, p는 각 요소
          if(p.id ===id){
            return{
              ...p, //배열의 spread operator (기존의 배열을 그대로 유지하면서 새로운 값을 추가하거나 기존 값을 수정할 때 사용)
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
                <Header8>함께하는 여정</Header8>
                <StyledWrap>
                    {part.map(content=>(
                      <StyledWrap2>
                        <Button key={content.id} onClick={()=>handleButtonClick(content.id)}
                                selected = {content.selected} color={content.border_color}>
                                  <ButtonText1Number selected = {content.selected}>{content.listNum}</ButtonText1Number>  
                                  <ButtonText1 selected = {content.selected}>{content.listCon}</ButtonText1>
                        </Button>
                      </StyledWrap2>  
                    ))}
                  </StyledWrap>
                    {part.map(props=>(
                        <Image key={props.id} src={props.imgsrc} alt={`Image ${props.id}`} selected = {props.selected}/>
                    ))}
                    {part.map(props=>(
                        <Body2 selected={props.selected}>{props.context}</Body2>
                    ))}
                    
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default AboutProgram_Mob;