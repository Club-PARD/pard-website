import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';
import ServiceVector from '../../../assets/img/ServiceVector.png';
import DesignVector from '../../../assets/img/DesignVector.png';
import DevelopVector from '../../../assets/img/DevelopVector.png';
import SelectedVector from '../../../assets/img/SelectedVector.png';

const Header6 = styled.div`
  font-size: ${({ theme }) => theme.Mob_fontSizes.Header6};
  font-weight: ${({ theme }) => theme.fontWeights.Header6};
  line-height : 28px;
  display: flex;
  align-items: center;
  color : ${({ textColor }) => textColor || '#000000'};
  margin-top: -216px;
  margin-left: 22px;
`;

const Header8 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header8};
  font-weight: ${props => props.theme.fontWeights.Header8};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 42px;
  white-space: pre-line;
  font-style: normal;
  margin-left: 36px;
  margin-bottom: 100px;
  position: relative;
`;

const Body2 = styled.div`
    font-size: ${({ theme }) => theme.Web_fontSizes.Body2};
    font-weight: ${({ theme }) => theme.fontWeights.Body2};
    color: #000000;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    line-height: 140%;
    margin-bottom: 22px;
    margin-top: 5px;
    margin-left: 22px;
`;

const BtnText = styled.div`
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 800;
    font-size: 14.5455px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PartDiv = styled.div`
    height: 950px;
    width: 375px;    
`;

const SmallButton = styled.button`
  border-radius: 13px;
  background-color: ${({ hoverColor }) => hoverColor};
  color: ${({ textColor }) => textColor};
  border: none;
  margin-left: 20px;
  width: auto;
  padding: 6px 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  margin-left: 178px;
  margin-right: 6.33px;
  margin-bottom: 140px;
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 303px;
  height: 97px;
  border-radius: 8.70663px;
  background-color: #FFFFFF;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    ${Header6},
    ${Body2} {
      color: #FFFFFF;
    }
    ${SmallButton} {
      color: ${({ hoverColor }) => hoverColor};
      background-color: #FFFFFF;
    }
    ${BtnText} {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
  &:hover {
    ${Vector} {
      content: url(${({ selectedImage }) => selectedImage});
    }
  }
`;

const RecruitingPart_Mob = () => {
    const buttons = [
      {
        title: '서비스 기획',
        link: 'https://www.notion.so/pardhgu/10bcc2923e4445e6a8a1015fbae7e9b7?pvs=4',
        textColor: '#000000',
        hoverColor: '#5262F5',
        vectorImage: ServiceVector,
        selectedImage: SelectedVector,
        showButton: true,
        buttonText: '사전과제',
      },
      {
        title: '디자인',
        link: 'https://www.notion.so/pardhgu/81510a5747af4d0eb2ac126ca115912d?pvs=4',
        textColor: '#000000',
        hoverColor: '#7B3FEF',
        vectorImage: DesignVector,
        selectedImage: SelectedVector,
        showButton: true,
        buttonText: '사전과제',
      },
      {
        title: 'APP(iOS)',
        link: 'https://www.notion.so/pardhgu/IOS-5d0a8b8312a44c83a24d9e2ed29af797?pvs=4',
        textColor: '#000000',
        hoverColor: '#FF5C00',
        vectorImage: DevelopVector,
        selectedImage: SelectedVector,
        showButton: true,
        buttonText: 'New!',
      },
      {
        title: 'WEB',
        link: 'https://www.notion.so/pardhgu/WEB-3abe9cee136c4c319a900a8230320284?pvs=4',
        textColor: '#000000',
        hoverColor: '#FF5C00',
        vectorImage: DevelopVector,
        selectedImage: SelectedVector,
        showButton: false,
        buttonText: false,
      },
      {
        title: 'SERVER',
        link: 'https://www.notion.so/pardhgu/SERVER-9032119e8aea44538cb348ad7da84806?pvs=4',
        textColor: '#000000',
        hoverColor: '#FF5C00',
        vectorImage: DevelopVector,
        selectedImage: SelectedVector,
        showButton: true,
        buttonText: 'New!',
      },
    ];
  
    const openLink = (link) => {
      window.open(link, '_blank');
    };
  
  const [isHovered, setIsHovered] = React.useState(null);
  
  const handleHover = (index) => {
    setIsHovered(index);
  };

    return (
        <Div>
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header8>5개의 파트가 여러분을<br/> 기다리고 있어요</Header8>
            <Container>
                {buttons.map((button, index) => (
                <Button
                key={index}
                onClick={() => openLink(button.link)}
                hoverColor={button.hoverColor}
                selectedImage={button.selectedImage}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                >
                <Vector 
                src={button.vectorImage}
                isHovered={isHovered === index}
                />
                <Header6 textColor={button.textColor}>
                  {button.title}
                  {button.showButton && (
                    <SmallButton textColor={button.textColor} hoverColor={button.hoverColor}>
                      <BtnText>{button.buttonText}</BtnText>
                    </SmallButton>
                  )}
                </Header6>
                <Body2>자세히 보기</Body2>
                </Button>
                ))}
            </Container>
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
};

export default RecruitingPart_Mob;