import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DisquietImage from '../../../assets/img/Disquiet-partner.png';
import LincImage from '../../../assets/img/Linc-partner.png';
import ImpactCampusImage from '../../../assets/img/ImpactCampus-partner.png';
import SImage from '../../../assets/img/S-partner.png';
import SpackImg from '../../../assets/img/SpackLab.png';
import AsanImg from '../../../assets/img/ASANImg.png';
import MobitImg from '../../../assets/img/MobitImg.png';


const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 25px;
  white-space: pre-line;
  padding-left:125px;
`;

const Header4 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header4};
    font-weight: ${props => props.theme.fontWeights.Header4};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    padding-left:125px;
    padding-right: 80px;
`;

const PartDiv = styled.div`
      margin: 0px auto;
    height: 700px;
    justify-content: center;
    width: 1330px;
`;

const DisquietImage1 = styled.img`
    width: 241px;
    height: 50px;
    padding-right: 65px;
    cursor: pointer;
`;

const LincImage2 = styled.img`
    width: 150px;
    height: 50px;
    padding-left: 90px;
    cursor: pointer;
`;

const ImpactCampusImage3 = styled.img`
    width: 366px;
    height: 50px;
    cursor: pointer;
`;

const SImage4 = styled.img`
    width: 240px;
    height: 70px;
    cursor: pointer;
`;

const SpackImgDiv = styled.img`
    width: 217px;
    height: 60px;
    margin-right: 65px;
    cursor: pointer;
`;

const AsanImgDiv = styled.img`
    width: 223px;
    height: 90px;
    margin-right: 65px;
    cursor: pointer;
`;

const MobitDiv = styled.img`
    width: 167px;
    height: 50px;
    margin-left: 65px;
    cursor: pointer;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 120px;
    justify-content: center;
`;

const ContentWrapper2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
    justify-content: center;
`;

function HomePartner() {


    const handleClickSpark = () => {
        window.open("https://sparklabs.co.kr/lb/index.php", "_blank");
    };
    const handleClickDiquiet = () => {
        window.open("https://disquiet.io/", "_blank");
    };
    const handleClickImpactCampus = () => {
        window.open("https://impact.career/", "_blank");
    };
    const handleClickLink = () => {
        window.open("https://linc30.handong.edu/", "_blank");
    };
    const handleClickSwyg = () => {
        window.open("https://www.swygbro.com", "_blank");
    };
    const handleClickAsan = () => {
        window.open("https://asan-nanum.org/", "_blank");
    };
    const handleClickMobit = () => {
        window.open("https://www.momit.co.kr", "_blank");
    };

    return (
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header2>PARTNERS</Header2>
                <Header4>함께하는 성장을 돕는 후원사</Header4>
                <ContentWrapper>
                    <AsanImgDiv onClick={handleClickAsan} src={AsanImg} ast="Asan" />
                    <SpackImgDiv onClick={handleClickSpark} src={SpackImg} alt="S" />
                    <ImpactCampusImage3 onClick={handleClickImpactCampus} src={ImpactCampusImage} alt="Impact Campus" />
                </ContentWrapper>
                <ContentWrapper2>
                    <DisquietImage1 onClick={handleClickDiquiet} src={DisquietImage} alt="Disquiet" />
                    <SImage4 onClick={handleClickSwyg} src={SImage} alt="S" />
                    <LincImage2 onClick={handleClickLink} src={LincImage} alt="Linc" />
                    <MobitDiv onClick={handleClickMobit} src={MobitImg} alt="Mobit" />
                </ContentWrapper2>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomePartner;