import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React, { useState } from 'react';
import vector from '../../../assets/img/vector.png';
import selectVector from '../../../assets/img/vector_Green.png';


const Div = styled.div`
margin-left: 184px;
`;
const PartDiv = styled.div`
height: 950px;
position: relative;
`;


const Header7 = styled.div`
font-size: ${props => props.theme.Web_fontSizes.Header7};
font-weight: ${props => props.theme.fontWeights.Header7};
color: #FFFFFF;
font-family: 'NanumSquare Neo';
font-style: normal;
line-height: 140%;
margin-bottom: 100px;
`;
const QuestionDiv = styled.div`
display: flex;
`;

const QuestionItem = styled.div`
cursor: pointer;
font-size: ${props => props.theme.Web_fontSizes.Header6};
font-weight: ${props => props.theme.fontWeights.Header6};
color: ${props => (props.selected) ? '#64C59A' : '#fff'};
font-family: 'NanumSquare Neo';
margin-bottom: 35px;
display: flex;
align-items: center;
margin-right: 100px;
`;
const Question = styled.div`
width: 832px;
height: 30px;
padding: 13px 0px 13px 40px;
line-height: 28px;
font-size: ${props => props.theme.Web_fontSizes.Header6};
font-weight: ${props => props.theme.fontWeights.Header6};
font-family: 'NanumSquare Neo';
margin-bottom: 10px;
background-color: white;
border-radius: 10px;
display: flex;
align-items: center;
margin-bottom: 30px;
cursor: pointer;
`;
const Vector = styled.img`
  height: 25px;
  width: 18px;
  margin-right: 32px;
`;
const Answer = styled.div`
background-color: #64C59A;
margin-top: -20px;
margin-bottom: 30px;
padding: 13px 0px 13px 40px;
height: 92px;
display: flex;
align-items: center;
border-radius: 10px;
font-size: ${props => props.theme.Web_fontSizes.ButtonText1};
font-weight: ${props => props.theme.fontWeights.ButtonText1};
font-family: 'NanumSquare Neo';
line-height: 140%;

`;
const Button = styled.div`
width: 174px;
height: 42px;
background-color: #64C59A;
margin-top: 143px;
display: flex;
align-items: center;
justify-content: center;
font-size: ${props => props.theme.Web_fontSizes.ButtonText1};
font-weight: ${props => props.theme.fontWeights.ButtonText1};
font-family: 'NanumSquare Neo';
border-radius: 10px;
`;
const Body2 = styled.div`
margin-top: 12px;
font-size: ${props => props.theme.Web_fontSizes.Body2};
font-weight: ${props => props.theme.fontWeights.Body2};
font-family: 'NanumSquare Neo';
color: white;
line-height: 140%;
`;






function RecruitingAbout() {
  const [question, setQuestion] = useState([
    {
      id: 1,
      item: '지원관련',
      question: [{
        id: 1,
        quest: 'Q. 경험과 실력도 부족한데 지원해도 될까요?',
        answer: <>A. PARD는 협업을 통한 성장과, 남을 주기 위해 배움을 기꺼이 즐기는 것을 추구합니다.<br />
          따라서 경험과 실력보다는 기획, 디자인, 개발 각 파트에 대한 열정과
          PARD 활동을 통해 이루고자 하시는 목표를 <br />더 중요시합니다.</>,
        select: false
      },
      {
        id: 2,
        quest: 'Q. 지원 조건이 어떻게 되나요?',
        answer: '열정이 있는 사람 아무나',
        select: false
      },
      {
        id: 3,
        quest: 'Q. 한번에 여러파트로 중복 지원이 가능할까요?',
        answer: '아쉽지만 안됨',
        select: false
      },
      {
        id: 4,
        quest: 'Q. 비슷한 동아리들이 있는데 PARD만의 차별점은 무엇인가요?',
        answer: 'PARD는 PARD다',
        select: false
      },
      {
        id: 5,
        quest: 'Q. YB와 OB의 구체적인 차이가 있나요?',
        answer: '아직 OB가 없어서 모름',
        select: false
      }
      ],
      selected: true,
    },
    {
      id: 2,
      item: '활동관련',
      question: [{
        id: 1,
        quest: 'Q. 세미나 말고 해커톤만 참여 가능한가요?',
        answer: '되겠냐?',
        select: false
      },
      {
        id: 2,
        quest: 'Q. 지원 조건이 어떻게 되나요?',
        answer: '열정이 있는 사람 아무나',
        select: false
      },
      {
        id: 3,
        quest: 'Q. 한번에 여러파트로 중복 지원이 가능할까요?',
        answer: '안됩니다.',
        select: false
      },
      {
        id: 4,
        quest: 'Q. 해커톤의 주제는 어떻게 정해지게 되나요?',
        answer: '그날 그날 회장님의 기분에 따라 정해집니다.',
        select: false
      },
      {
        id: 5,
        quest: 'Q. 앱 개발 시 어떤 프로그래밍 언어를 사용하나요?',
        answer: '원래는 Flutter를 사용했는데 ios 가면서 ',
        select: false
      }
      ],
      selected: false,
    },
    {
      id: 3,
      item: '일정관련',
      question: [
        {
          id: 1,
          quest: 'Q. PARD 기수는 언제 시작되나요?',
          answer: '학기 시작후 1주차',
          select: false
        },
        {
          id: 2,
          quest: 'Q. 학기 중 매주 토요일 일정이 모두 비워져 있어야하나요?',
          answer: '네네',
          select: false
        },
        {
          id: 3,
          quest: 'Q.실제로 얼만큼의 리소스가 투입되어야 할까요?',
          answer: '5학점 정도의 노력?',
          select: false
        },
        {
          id: 4,
          quest: 'Q. 정기적인 오프라인 모임에 모두 참석해야하나요?',
          answer: '당연하죠',
          select: false
        }
      ],
      selected: false,
    },
  ]);

  const handleButtonClick = (id) => {
    setQuestion(prevQuestion => prevQuestion.map(p => {
      if (p.id === id) {
        return {
          ...p,
          selected: true,
        };
      } else {
        return {
          ...p,
          selected: false,
        }
      }
    }));
  }
  const handleQuestionClick = (itemId, index) => {
    const updatedQuestions = question.map((item) => {
      if (item.id === itemId) {
        const updatedQuestion = item.question.map((q, i) => {
          if (i === index) {
            return { ...q, select: !q.select };
          } else {
            return { ...q, select: false };
          }
        });
        return { ...item, question: updatedQuestion };
      }
      return item;
    });

    setQuestion(updatedQuestions);
  };


  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>파드에 대해 더 알고 싶어요</Header7>
          <QuestionDiv>
            <div>
              {question.map((item) => (
                <QuestionItem key={item.id}
                  onClick={() => handleButtonClick(item.id)}
                  selected={item.selected}>
                  <Vector src={item.selected ? selectVector : vector}></Vector>
                  {item.item}
                </QuestionItem>
              ))}
              <Button>조금 더 물어볼래요</Button>
              <Body2>찾으시는 내용이 없으신가요?<br />
                익명으로 편하게 물어보세요!</Body2>
            </div>
            <div>
              {question.map((item) => (
                item.selected && (
                  <React.Fragment key={item.id}>
                    {item.question.map((question, index) => (
                      <React.Fragment key={index}>
                        <Question
                          onClick={() => handleQuestionClick(item.id, index)}
                        >
                          {question.quest}
                        </Question>
                        {question.select && <Answer>{question.answer}</Answer>}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )
              ))}

            </div>
          </QuestionDiv>

        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default RecruitingAbout;
