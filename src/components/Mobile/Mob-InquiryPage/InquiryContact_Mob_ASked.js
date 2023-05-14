import styled ,{ ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../../styles/theme";
import Vec from '../../../assets/img/vector.png';


const Margin = styled.div`
  display: flex;
  flex-direction: column;

margin: 0px auto;
`

;


const Askstyledd= styled.div`
white-space: nowrap;
margin-top:110px; //간격 좀 내림

margin-left:8px;
width:273px;
height:84px;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.  fontWeights.Header8};
font-size:${(props)=>props.theme. Mob_fontSizes.Header8};
line-height: 140%;
/* or 42px */

color: #FFFFFF;
`





const Informbox= styled.form`


margin-left:9px;
margin-top:90px;
width:327px;
height:126px;
display: flex;
flex-direction: column;
align-items: flex-start ;

`

const Lineup=styled.div`

margin-top:0px;
left:0px;

width:327px;

border: 1px solid #5262F5;

`

const Informbox1=styled.div`

display: flex;
width: 326px;
height: 28px;
margin-top: 20px;
margin-left: 0px;
align-items: center;
`

const Mail= styled.div`
white-space: nowrap;
width: 38px; //widht 1vw높임
height:28px;
margin-top:0px;
margin-left:0px;

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


color: #FFFFFF;
`

const EMail=styled.div`
white-space: nowrap;
margin-top:0px; // 전체 informbox div기준으로는 top0px, 
margin-left:87px; // 바로 위에 Mail 기준으로는 margin-left 87px

width: 177px;
height:22px;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.ButtonText1};
font-size: ${props=>props.theme.Mob_fontSizes.ButtonText1};
line-height: 18px;
/* identical to box height */


color: #FFFFFF;
`
const Vector=styled.img`
max-width:10px;
width: 10px;
height:auto;
`

const Vectorbox1=styled.div`

margin-top: 0px;

margin-left: 14px;
`

const Informbox2=styled.div`

display: flex;
width: 326px;
height: 28px;
margin-top: 31px;
margin-left: 0px;
align-items: center;
`
const Instagram= styled.div`
white-space: nowrap;
margin-top:0px;
margin-left:0px;
height:28px;
width: 95px; //widht 2vw높임
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


color: #FFFFFF;
`
const Instaid=styled.div`

margin-left:84px;
margin-top:0px;

width: 123px;
height:22px;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.ButtonText1};
font-size: ${props=>props.theme.Mob_fontSizes.ButtonText1};
line-height: 18px;
/* identical to box height */

text-align: right;

color: #FFFFFF;
`

const Vectorbox2=styled.div`

margin-top: 0px;

margin-left: 14px;
`
const Linedown=styled.div`

margin-top:20px;
left:0px;

width:327px;

border: 1px solid #5262F5;

`
const Business= styled.div`
white-space: nowrap;
margin-top:20px;
margin-left:8px;

width:206px; //원래보다 vw6높임
height:28px;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


color: #FFFFFF;


`
const Here=styled(Link)`
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
color:#FFFFFF;
&:hover{color:#5262F5;}


`


const Askmobile =()=>{
   
    return(
        
        <ThemeProvider theme={theme}>
            <Margin> 
            <Askstyledd>PARD에 대해<br/>
        무엇이든 물어보세요!</Askstyledd> 
            
             <Informbox>
             <Lineup/>
             <Informbox1>
            <Mail>메일</Mail>
            <EMail>official@we-pard.com</EMail>
            <Vectorbox1><Vector  src={Vec}/></Vectorbox1>
            </Informbox1>

            <Informbox2>

            
            <Instagram>인스타그램</Instagram>
            <Instaid>@official_pard_</Instaid>
            <Vectorbox2><Vector  src={Vec}/></Vectorbox2>
            </Informbox2>
            <Linedown/>
            </Informbox>
            
            <Business >비즈니스 문의는 &nbsp;
            <Here to='/'>여기로</Here></Business>
            </Margin>
            </ThemeProvider>
          
       
    )
}

export default Askmobile;