import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import DisquietImage from '../../../assets/img/Disquiet-partner.png'; 
import LincImage from '../../../assets/img/Linc-partner.png';
import ImpactCampusImage from '../../../assets/img/ImpactCampus-partner.png';
import SImage from '../../../assets/img/S.png';

const Header2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
`;

const Header4 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Header4};
    font-weight: ${props => props.theme.fontWeights.Header4};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    text-align: left;
`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 5.5556vw;
    padding-top: 7.9861vw;
    height: 45.1389vw;
`;

const DisquietImage1 = styled.img`
    width: 16.7701vw;
    height: 3.4722vw;
    padding-left: 5.4861vw;
`;

const LincImage2 = styled.img`
    width: 10.4167vw;
    height: 3.4722vw;
    padding-left: 6.9444vw;
`;

const ImpactCampusImage3 = styled.img`
    width: 25.4194vw;
    height: 3.4722vw;
    padding-left: 6.9444vw;
`;

const SImage4 = styled.img`
    width: 5.5556vw;
    height: 5.5556vw;
    padding-left: 6.9444vw;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 11.5278vw;
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