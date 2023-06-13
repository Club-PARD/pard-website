import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DisquietImage from '../../../assets/img/Disquiet-partner.png'; 
import LincImage from '../../../assets/img/Linc-partner.png';
import ImpactCampusImage from '../../../assets/img/ImpactCampus-partner.png';
import SImage from '../../../assets/img/S-partner.png';
import SpackImg from '../../../assets/img/SpackLab.png';


const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  padding-top: 30px;
  white-space: pre-line;
  /* padding-left: 18px; */
  margin-right: 100px;
`;

const Subtitle3 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Subtitle3};
    font-weight: ${props => props.theme.fontWeights.Subtitle3};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    padding-top: 30px;
    /* padding-left: 18px; */

`;

const DisquietImage1 = styled.img`
    width: 193px;
    height: 40px;
    padding-top: 60px;
    cursor: pointer;
`;

const LincImage2 = styled.img`
    width: 120px;
    height: 40px;
    padding-top: 60px;
    cursor: pointer;
`;

const ImpactCampusImage3 = styled.img`
    width: 260px;
    height: 40px;
    padding-top: 60px;
    cursor: pointer;
`;

const SImage4 = styled.img`
    width: 230px;
    height: 60px;
    padding-top: 60px;
    cursor: pointer;
`;

const Spacklab = styled.img`
    width: 182px;
    height: 55px;
    padding-top: 83px;
    margin-right: 25px;
    cursor: pointer;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const PartDiv = styled.div`
    padding-top: 131px;
    height: 750px;
    padding-left: 10px;
    
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 43px;
`;

function HomePartnerMob() {

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

    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>PARTNERS</Header7>
            <Subtitle3>함께하는 성장을 돕는 후원사</Subtitle3>
            <ContentWrapper>
                <Spacklab onClick={handleClickSpark} src={SpackImg} alt='SparkLab'/>
                    <DisquietImage1 onClick={handleClickDiquiet} src={DisquietImage} alt="Disquiet" />
                    <LincImage2 onClick={handleClickLink} src={LincImage} alt="Linc" />
                    <ImpactCampusImage3 onClick={handleClickImpactCampus} src={ImpactCampusImage} alt="Impact Campus" />
                    <SImage4 onClick={handleClickSwyg} src={SImage} alt="S" />
                </ContentWrapper>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default HomePartnerMob;
