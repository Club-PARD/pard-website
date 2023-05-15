import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DisquietImage from '../../../assets/img/Disquiet-partner.png'; 
import LincImage from '../../../assets/img/Linc-partner.png';
import ImpactCampusImage from '../../../assets/img/ImpactCampus-partner.png';
import SImage from '../../../assets/img/S-partner.png';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 54px;
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
    height: 900px;
    justify-content: center;
    width: 1330px;
`;

const DisquietImage1 = styled.img`
    width: 241px;
    height: 50px;
    padding-left: 79px;
`;

const LincImage2 = styled.img`
    width: 150px;
    height: 50px;
    padding-left: 100px;
`;

const ImpactCampusImage3 = styled.img`
    width: 366px;
    height: 50px;
    padding-left: 100px;
`;

const SImage4 = styled.img`
    width: 80px;
    height: 80px;
    padding-left: 100px;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 166px;
`;

function HomePartner() {
    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header2>PARTNERS</Header2>
            <Header4>함께하는 성장을 돕는 후원사</Header4>
                <ContentWrapper>
                    <DisquietImage1 src={DisquietImage} alt="Disquiet" />
                    <LincImage2 src={LincImage} alt="Linc" />
                    <ImpactCampusImage3 src={ImpactCampusImage} alt="Impact Campus" />
                    <SImage4 src={SImage} alt="S" />
                </ContentWrapper>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomePartner;