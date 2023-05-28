import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React from 'react';

import ServiceVector from '../../../assets/img/ServiceVector.png';
import DesignVector from '../../../assets/img/DesignVector.png';
import DevelopVector from '../../../assets/img/DevelopVector.png';
import SelectedVector from '../../../assets/img/SelectedVector.png';

const PartDiv = styled.div`
  height: 950px;
  position: relative;
  margin-top: 50px;
  margin-left: 10px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Header7 = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  line-height: 140%;
  margin-left: 208px;
  margin-bottom: 137px;
`;

const Header5 = styled.div`
  font-size: ${({ theme }) => theme.Mob_fontSizes.Header5};
  font-weight: ${({ theme }) => theme.fontWeights.Header5};
  color: ${({ textColor }) => textColor || '#000000'};
  font-family: 'NanumSquare Neo';
  display: flex;
  align-items: center;
  white-space: pre-line;
  margin-left: 20px;
  margin-top: -79px;
`;

const Body1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body1};
  font-weight: ${({ theme }) => theme.fontWeights.Body1};
  font-family: 'NanumSquare Neo';
  color: #000000;
  margin-bottom: 22px;
  margin-left: 21px;
  line-height: 160%;
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SmallButton = styled.button`
  border-radius: 13px;
  background-color: ${({ hoverColor }) => hoverColor};
  color: ${({ textColor }) => textColor};
  border: none;
  margin-left: 15px;
  width: auto;
  padding: 6px 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  margin-left: 178px;
  margin-right: 13px;
  margin-bottom: 3.5px;
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 105px;
  border-radius: 8.70663px;
  background-color: #FFFFFF;
  margin-left: 56px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    ${Header5},
    ${Body1} {
      color: #FFFFFF;
    }
    ${SmallButton} {
      color: ${({ hoverColor }) => hoverColor};
      background-color: #FFFFFF;
    }
    ${BtnText} {
      color: ${({ hoverColor }) => hoverColor};
    }
    /* ${Vector} {
      content: ${({ selectedImage }) => selectedImage};
    } */
  }
  &:hover {
    ${Vector} {
      content: url(${({ selectedImage }) => selectedImage});
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 56px;
  margin-right: 70px;
  flex-wrap: wrap;
`;

const RecruitingPart = () => {
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
          <Header7>5개의 파트가 여러분을 기다리고 있어요</Header7>
          <Container>
            <ButtonRow>
              {buttons.slice(0, 3).map((button, index) => (
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
                <Header5 textColor={button.textColor}>
                  {button.title}
                  {button.showButton && (
                    <SmallButton textColor={button.textColor} hoverColor={button.hoverColor}>
                      <BtnText>{button.buttonText}</BtnText>
                    </SmallButton>
                  )}
                </Header5>
                <Body1>자세히 보기</Body1>
                {/* <Vector src={button.selected ? button.selectedImage : button.vectorImage} /> */}
              </Button>
              ))}
            </ButtonRow>
            <ButtonRow>
              {buttons.slice(3).map((button, index) => (
                <Button
                  key={index}
                  onClick={() => openLink(button.link)}
                  hoverColor={button.hoverColor}
                  selectedImage={button.selectedImage}
                >
                  <Vector src={button.vectorImage} />
                  <Header5 textColor={button.textColor}>
                    {button.title}
                    {button.showButton && (
                      <SmallButton textColor={button.textColor} hoverColor={button.hoverColor}>
                        <BtnText>{button.buttonText}</BtnText>
                      </SmallButton>
                    )}
                  </Header5>
                  {/* <Vector src={button.selected ? button.selectedImage : button.vectorImage} /> */}
                  <Body1>자세히 보기</Body1>
                </Button>
              ))}
            </ButtonRow>
          </Container>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
};

export default RecruitingPart;
