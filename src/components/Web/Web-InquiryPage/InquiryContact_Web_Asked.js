import styled ,{ThemeProvider} from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../../styles/theme";
import Vec from '../../../assets/img/vector.png';


const Margin= styled.div`
display: flex;
`
const Askedstyled=styled.div`
position: absolute;
padding-right: 40px;
  padding-left: 105px;
margin-top: 130px; //padding한 만큼 원래 maring-top0px에서 값 뺴줌
margin-bottom: 402px;
width:589px; // 원래보다0px3높임
height: 168px;
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
margin-left:760px; //padding한 만큼 원래 maring-left0px에서 값 뺴줌
margin-right:112px;
margin-top:130px; //padding한 만큼 원래 maring-top0px에서 값 뺴줌
height:220px;
width: 488px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 40px;


`

const Mail=styled.div`
position: absolute;
width: 60px; // 원래보다 14px올림
height:34px;
margin-right:441px;
margin-bottom:166px;
margin-top: 20px;
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
width: 222px;
height: 28px;
margin-left:222px;
margin-right:44px ;
margin-top: 20px;
margin-bottom:172px;
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
width: 128px;  // 원래보다 14px올림
height: 34px;
margin-right:373px;   //margin은 박스 안에서 얼마나 띄어있는지 보기 위해
margin-top: 95px;
margin-bottom: 91px;

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
height: 28px;
width: 154px;
margin-left:290px ;
margin-right:44px;
margin-top: 94px;
margin-bottom: 98px;
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
width: 375px;
height: 0px;
left:0px;
margin-top: 0px;
margin-bottom:220px;
/* Primary/Blue */

border: 1px solid #5262F5;
`
const Linedown=styled.div`
position: absolute;
width: 375px;
height: 0px;
margin-left:0px;
margin-top:166px;
margin-bottom: 54px;

/* Primary/Blue */

border: 1px solid #5262F5;
`

const Business=styled.div`
position: absolute;
width:290px; // 원래보다0px 3높임
height:34px;
margin-left: 0px;
margin-right: 240px;
margin-top: 186px;
margin-bottom: 0px;
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
margin-left: 474px;
margin-right: 0px;
margin-top: 23px;
margin-bottom: 176px;
`
const Vectorbox2=styled.div`
position: absolute;
margin-left: 474px;
margin-right: 0px;
margin-top: 97px;
margin-bottom: 102px;
`
const Vector= styled.img`
max-width:14px;
width: 14px;
height: 14px;

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