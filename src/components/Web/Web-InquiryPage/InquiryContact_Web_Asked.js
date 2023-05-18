import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../styles/theme";
import Vec from '../../../assets/img/vector.png';
import Vec_p from '../../../assets/img/vector_purple.png';

const Margin = styled.div`
display: flex;

margin: 0px auto;
`
const Askedstyled = styled.div`
white-space: nowrap;
margin-left:70px ;
padding-right: 10px;
padding-left: 105px;
margin-top: 130px; 
//padding한 만큼 원래 maring-top0px에서 값 뺴줌
margin-bottom: 402px;
width:300px; // 원래보다0px3높임
height: 168px;
/* Header/H2 - EB 60 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.Header2};
color:"white";
font-size: ${(props) => props.theme.Web_fontSizes.Header2};
line-height: 140%;
/* or 84px */


color: #FFFFFF;

`
const Informationstyle = styled.form`
margin-top: 130px; 
 //padding한 만큼 원래 maring-left0px에서 값 뺴줌
 margin-left:380px;
 //padding한 만큼 원래 maring-top0px에서 값 뺴줌

height:220px;
width: 375px;
display: flex;
flex-direction: column;

//justify-content: flex-end;
align-items: flex-start;




`

const Mail = styled.div`
white-space: nowrap;
width: 60px; // 원래보다 14px올림
height:34px;
margin-left: 0px;
//margin-right:441px;
margin-top: 0px;
/* Header/H5 - B 24 */
&:hover{color:#5262F5;}

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.header5};
font-size: ${(props) => props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */


/* Text/White */

color: #FFFFFF;
`
const EMail = styled.div`
white-space: nowrap;
width: 222px;
height: 28px;
margin-left:63px;
margin-top: 0px;
&:hover{color:#5262F5;}


/* Header/H6 - B 20 */

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.Header6};
font-size: ${(props) => props.theme.Web_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */

text-align: right;
/* Text/White */

color: #FFFFFF;
`
const Instagram = styled.div`
white-space: nowrap;
width: 128px;  // 원래보다 14px올림
height: 34px;
   //margin은 박스 안에서 얼마나 띄어있는지 보기 위해
margin-top: 95px;
margin-bottom: 91px;

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.header5};
font-size: ${(props) => props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */
&:hover{color:#5262F5;}


color: #FFFFFF;
`
const InstagramId = styled.div`

height: 28px;
width: 154px;
margin-left:64px ;

margin-top: 94px;
margin-bottom: 98px;
/* Header/H5 - B 24 */
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.Header6};
font-size: ${(props) => props.theme.Web_fontSizes.Header6};
line-height: 140%;
/* identical to box height, or 28px */
&:hover{color:#5262F5;}


text-align: right;
color: #FFFFFF;

`
const Lineup = styled.div`

width: 375px;
height: 0px;
left:0px;
margin-top: 0px;

/* Primary/Blue */

border: 1px solid #5262F5;
`
const Linedown = styled.div`

width: 375px;
height: 0px;
margin-left:0px;
margin-top: 30px;


/* Primary/Blue */

border: 1px solid #5262F5;
`

const Business = styled.div`

width:290px; // 원래보다0px 3높임
height:34px;
margin-left: 0px;
margin-right: 240px;

margin-top: 18px;
font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.Header5};
font-size: ${(props) => props.theme.Web_fontSizes.Header5};
line-height: 27px;
/* identical to box height */


/* Text/White */

color: #FFFFFF;

`
const Here = styled(Link)`

font-family: 'NanumSquare Neo';
font-style: normal;
font-weight: ${(props) => props.theme.fontWeights.Header5};
font-size: ${(props) => props.theme.Web_fontSizes.Header5};
line-height: 27px;
color: #FFFFFF;
&:hover{color:#5262F5;}
`

const Vectorbox1 = styled.div`

margin-left: 30px;

margin-top: 0px;

`
const Vectorbox2 = styled.div`

margin-left: 30px;

margin-top: 0px;  //102px하면 돌아옴

`
const Vector = styled.img`
max-width:14px;
width: 14px;
height: 14px;

`

const InformBox1 = styled.div`

display: flex;

margin-top:33px;
width:361px;
height:34px;
align-items: center;
`
const InformBox2 = styled.div`
display: flex;
margin-top:40px; // 위에 informbox1기준 margin-top
width:361px;
height:34px;
align-items: center;


`


const Ask = () => {

    return (
        <ThemeProvider theme={theme}>
            <Margin>
                <Askedstyled>
                    PARD에 대해<br />
                    무엇이든 물어보세요!
                </Askedstyled>
                <Informationstyle>
                    <Lineup />
                    <InformBox1>
                        <Mail>메일</Mail>
                        <EMail>official@we-pard.com</EMail>
                        <Vectorbox1><Vector src={Vec} /></Vectorbox1>
                    </InformBox1>
                    <InformBox2>
                        <Instagram>인스타그램</Instagram>
                        <InstagramId>@official_pard_</InstagramId>
                        <Vectorbox2><Vector src={Vec} /></Vectorbox2>
                    </InformBox2>
                    <Linedown />
                    <Business>비지니스 문의는 &nbsp;
                        <Here to='/'>여기로!</Here>
                    </Business>
                </Informationstyle>
            </Margin>
        </ThemeProvider>

    )
}


export default Ask;