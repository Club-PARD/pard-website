import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DisquietImage from '../../../assets/img/Disquiet-partner.png'; 
import LincImage from '../../../assets/img/Linc-partner.png';
import ImpactCampusImage from '../../../assets/img/ImpactCampus-partner.png';
import SImage from '../../../assets/img/S.png';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  padding-top: 8.0000vw;
  white-space: pre-line;
`;

const Subtitle3 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Subtitle3};
    font-weight: ${props => props.theme.fontWeights.Subtitle3};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    padding-top: 8.0000vw;
`;

const DisquietImage1 = styled.img`
    width: 51.5173vw;
    height: 10.6667vw;
    padding-top: 22.1333vw;
`;

const LincImage2 = styled.img`
    width: 32.0000vw;
    height: 10.6667vw;
    padding-top: 16.0000vw;
`;

const ImpactCampusImage3 = styled.img`
    width: 78.0880vw;
    height: 10.6667vw;
    padding-top: 16.0000vw;
`;

const SImage4 = styled.img`
    width: 18.6667vw;
    height: 18.6667vw;
    padding-top: 16.0000vw;
`;

const PartDiv = styled.div`
    padding-left:1.1111vw;
    height: 197.8667vw;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 11.5278vw;
`;

function HomePartnerMob() {
    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>PARTNERS</Header7>
            <Subtitle3>함께하는 성장을 돕는 후원사</Subtitle3>
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

export default HomePartnerMob;