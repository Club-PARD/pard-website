import styled ,{ThemeProvider} from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../../styles/theme";
import Vec from '../../../assets/img/vector.png';


const Margin= styled.div`
display: flex;
`
const Askedstyled=styled.div`
position: absolute;

margin-left: 0vw; //padding한 만큼 원래 maring-left vw에서 값 뺴줌
margin-right: 56.5278vw;
margin-top:4.1667vw; //padding한 만큼 원래 maring-top vw에서 값 뺴줌
margin-bottom: 27.9167vw;
width:40.9167vw; // 원래보다 vw3높임
height: 11.6667vw;
/* Header/H2 - EB 60 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=> props.theme.fontWeights.Header2};
color:"white";
font-size: ${(props)=> props.theme.Web_fontSizes.Header2};
line-height: 140%;
/* or 84px */


color: #FFFFFF;

`
const Informationstyle=styled.form`
position: absolute;
margin-left:52.7773vw; //padding한 만큼 원래 maring-left vw에서 값 뺴줌
margin-right:7.7778vw;
margin-top:4.1667vw; //padding한 만큼 원래 maring-top vw에서 값 뺴줌
height:15.2778vw;
width: 33.8889vw;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 40px;


`

const Mail=styled.div`
position: absolute;
width: 4.1944vw; // 원래보다 1vw올림
height:2.3611vw;
margin-right:30.6250vw;
margin-bottom:11.5278vw;
margin-top: 1.3889vw;
/* Header/H5 - B 24 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.header5};
font-size: ${(props)=>props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */


/* Text/White */

color: #FFFFFF;
`
const EMail=styled.div`
position: absolute;
width: 15.4167vw;
height: 1.9444vw;
margin-left:15.4167vw;
margin-right:3.0556vw ;
margin-top: 1.3889vw;
margin-bottom:11.9444vw;
/* Header/H6 - B 20 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.Header6};
font-size: ${(props)=>props.theme.Web_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */

text-align: right;
/* Text/White */

color: #FFFFFF;
`
const Instagram=styled.div`
position: absolute;
width: 8.9167vw;  // 원래보다 1vw올림
height: 2.3611vw;
margin-right:25.9028vw;   //margin은 박스 안에서 얼마나 띄어있는지 보기 위해
margin-top: 6.5972vw;
margin-bottom: 6.3194vw;
/* Header/H5 - B 24 */

/* Header/H5 - B 24 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.header5};
font-size: ${(props)=>props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */


color: #FFFFFF;
`
const InstagramId=styled.div`
position: absolute;
height: 1.9444vw;
width: 10.6944vw;
margin-left:20.1389vw ;
margin-right:3.0556vw;
margin-top: 6.5278vw;
margin-bottom: 6.8056vw;
/* Header/H5 - B 24 */
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.Header6};
font-size: ${(props)=>props.theme.Web_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */


text-align: right;
color: #FFFFFF;

`
const Lineup=styled.div`
position: absolute;
width: 33.8889vw;
height: 0px;
left:0vw;
margin-top: 0vw;
margin-bottom:15.2778vw;
/* Primary/Blue */

border: 1px solid #5262F5;
`
const Linedown=styled.div`
position: absolute;
width: 33.8889vw;
height: 0vw;
margin-left:0vw;
margin-top:11.5278vw;
margin-bottom: 3.7500vw;

/* Primary/Blue */

border: 1px solid #5262F5;
`

const Business=styled.div`
position: absolute;
width:20.1528vw; // 원래보다 vw 3높임
height:2.3611vw;
margin-left: 0vw;
margin-right: 16.6667vw;
margin-top: 12.9167vw;
margin-bottom: 0vw;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.Header5};
font-size: ${(props)=>props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */


/* Text/White */

color: #FFFFFF;

`
const Here= styled(Link)`

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props)=>props.theme.fontWeights.Header5};
font-size: ${(props)=>props.theme.Web_fontSizes.Header5};
line-height: 27px;
color: #FFFFFF;
&:hover{color:#5262F5;}
`

const Vectorbox1=styled.div`
position: absolute;
margin-left: 32.9167vw;
margin-right: 0vw;
margin-top: 1.5972vw;
margin-bottom: 12.2222vw;
`
const Vectorbox2=styled.div`
position: absolute;
margin-left: 32.9167vw;
margin-right: 0vw;
margin-top: 6.7361vw;
margin-bottom: 7.0833vw;
`
const Vector= styled.img`
max-width:0.9722vw;
width: 0.9722vw;
height: 0.9722vw;

`
const Ask=()=>{

    return(
        <ThemeProvider theme={theme}>
                    <Margin>
        <Askedstyled>
        PARD에 대해<br/>
      무엇이든 물어보세요!
    </Askedstyled>

        <Informationstyle>
        <Lineup/>
        <Mail>메일</Mail>
<Vectorbox1><Vector  src={Vec}/></Vectorbox1>
<Vectorbox2><Vector  src={Vec}/></Vectorbox2>
            <EMail>official@we-pard.com</EMail>
            <Instagram>인스타그램</Instagram>
            <InstagramId>@official_pard_</InstagramId>
        <Linedown/>
       
        <Business>비지니스 문의는 &nbsp;
        <Here to='/'>여기로!</Here> 

        </Business>
        </Informationstyle>
        </Margin>
        </ThemeProvider>

    )
}


export default Ask;