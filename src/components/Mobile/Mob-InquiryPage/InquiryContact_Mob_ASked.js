import styled ,{ ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../../styles/theme";
import Vec from '../../../assets/img/vector.png';

const Margin=styled.div`
display: flex;
`
const Askstyledd= styled.div`
position: absolute;
margin-top:17.3333vw;
margin-left:2.1333vw;
margin-right:20.8000vw;
width:72.8000vw;
height:22.4000vw;


font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.  fontWeights.Header8};
font-size:${(props)=>props.theme. Mob_fontSizes.Header8};
line-height: 140%;
/* or 42px */

color: #FFFFFF;
`
const Lineup=styled.div`
position: absolute;
margin-top:63.7333vw;
margin-left:2.1333vw;
margin-right:6.4000vw;
width:87.20000vw;
border: 1px solid #5262F5;

`
const Linedown=styled.div`
position: absolute;
margin-top:108.0000vw;
margin-left:2.1333vw;
margin-right:6.4000vw;
width:87.20000vw;
border: 1px solid #5262F5;

`

const Informbox= styled.div`
position: absolute;
margin-left:2.1333vw;
margin-top:63.7333vw;
margin-right:6.4000vw;
width:87.2000vw;
height:44.2667vw;
display: flex;

justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 30px;
`
const Mail= styled.div`
position: absolute;
width: 11.1333vw; //widht 1vw높임
height:7.4667vw;
margin-top:5.3333vw;
margin-left:0vw;
margin-right:76.8000vw;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


color: #FFFFFF;
`

const EMail=styled.div`
position: absolute;
margin-top:6.6667vw;
margin-left:33.3333vw; 
margin-right:6.40000vw;

width: 47.2000vw;
height:4.8000vw;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.ButtonText1};
font-size: ${props=>props.theme.Mob_fontSizes.ButtonText1};
line-height: 18px;
/* identical to box height */


color: #FFFFFF;
`

const Instagram= styled.div`
position: absolute;
margin-top:20.8000vw;
margin-right:61.6000vw;
height:7.4667vw;
width: 27.3333vw; //widht 2vw높임
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.Header6};
font-size: ${props=>props.theme.Mob_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


color: #FFFFFF;
`
const Instaid=styled.div`

position: absolute;
margin-left:47.7333vw;
margin-top:22.1333vw;
margin-right:6.4000vw;
width: 32.8000vw;
height:4.8000vw;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight:${props=>props.theme.fontWeights.ButtonText1};
font-size: ${props=>props.theme.Mob_fontSizes.ButtonText1};
line-height: 18px;
/* identical to box height */

text-align: right;

color: #FFFFFF;
`

const Business= styled.div`
position: absolute;
margin-top:113.3333vw;
margin-left:2.4000vw;
margin-right: 38.4000vw;
width:60.9333vw; //원래보다 vw6높임
height:7.4667vw;
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
color:#5262F5;

`
const Vector=styled.img`
max-width:2.6667vw;
width: 2.6667vw;
height:2.6667vw;
`

const Vectorbox1=styled.div`
position: absolute;
margin-top: 7.2000vw;
margin-right: 0vw;
margin-left: 84.2667vw;
`
const Vectorbox2=styled.div`
position: absolute;
margin-top: 22.6667vw;
margin-right: 0vw;
margin-left: 84.2667vw;
`

const Askmobile =()=>{
    return(
        
        <ThemeProvider theme={theme}>
            <Margin> 
            <Askstyledd>PARD에 대해<br/>
        무엇이든 물어보세요!</Askstyledd> 
            <Lineup/>
             <Informbox>
            <Mail>메일</Mail>
            <Vectorbox1><Vector  src={Vec}/></Vectorbox1>
<Vectorbox2><Vector  src={Vec}/></Vectorbox2>
            <EMail>official@we-pard.com</EMail>
            <Instagram>인스타그램</Instagram>
            <Instaid>@official_pard_</Instaid>
            </Informbox>
            <Linedown/>
            <Business>비즈니스 문의는 &nbsp;<Here to='/'>여기로!</Here></Business>
            </Margin>
            </ThemeProvider>
          
       
    )
}

export default Askmobile;