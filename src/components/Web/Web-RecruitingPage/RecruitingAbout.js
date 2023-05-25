import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import React, { useState } from 'react';
import vector from '../../../assets/img/vector.png';
import selectVector from '../../../assets/img/vector_Green.png';


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 150px;
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
margin-bottom: 45px;
display: flex;
align-items: center;
margin-right: 100px;
`;
const Question = styled.div`
width: 832px;
height: 30px;
padding: 13px 0px 13px 40px;
line-height: 28px;
font-size: 20px;
font-weight: ${props => props.theme.fontWeights.Body3};
font-family: 'NanumSquare Neo';
background-color: white;
border-radius: 10px;
display: flex;
align-items: center;
margin-bottom: 30px;
z-index: 3;
position: relative;
cursor: pointer;
:hover{
  font-weight: bold;
  color: #64C59A;
}
`;
const Vector = styled.img`
  height: 25px;
  width: 18px;
  margin-right: 32px;
`;
const Answer = styled.div`
background-color: #64C59A;
margin-top: -40px;
margin-bottom: 30px;
padding: 13px 0px 4px 35px;
height: 92px;
display: flex;
align-items: center;
border-radius: 0px 0px 10px 10px ;
font-size: ${props => props.theme.Web_fontSizes.ButtonText1};
font-weight: ${props => props.theme.fontWeights.ButtonText1};
font-family: 'NanumSquare Neo';
line-height: 140%;
z-index: -1;
color: #1F1F1F;
white-space: pre-wrap;
`;
const Button = styled.div`
width: 184px;
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
         &nbsp; &nbsp; &nbsp;따라서 경험과 실력보다는 기획, 디자인, 개발 각 파트에 대한 열정과
          PARD 활동을 통해 이루고자 하시는 <br />&nbsp; &nbsp; &nbsp;목표를 더 중요시합니다.</>,
        select: false
      },
      {
        id: 2,
        quest: 'Q. 지원 조건이 어떻게 되나요?',
        answer: <>A. 2기 기준 2023년도 한동대학교 재학생 혹은 휴학생이시라면 지원 가능합니다.        
        </>,
        select: false
      },
      {
        id: 3,
        quest: 'Q. 한번에 여러파트로 중복 지원이 가능할까요?',
        answer: <>
        A. 다양한 분야로 관심이 많으신 예비 지원자님 정말 멋지십니다!<br/>
        &nbsp; &nbsp; &nbsp;하지만 아쉽게도 중복 지원은 어려울 것 같습니다. 2기는 YB로 먼저 배우고 싶은 파트를,<br/>
        &nbsp; &nbsp; &nbsp;3기에는 OB로 다른 파트에 지원해보시는 건 어떨까요?
        </>,
        select: false
      },
      {
        id: 4,
        quest: 'Q. 비슷한 동아리들이 있는데 PARD만의 차별점은 무엇인가요?',
        answer: <>A. 파드는 협업이라는 가치에 누구보다 진심인 동아리입니다.<br/> 
        &nbsp; &nbsp; &nbsp;혼자 잘하기 보단 함께 자라기를 추구하며 IT 프로덕트를 만드는 과정에서<br/>
        &nbsp; &nbsp; &nbsp;제대로된 협업을 경험합니다.
        </>,
        select: false
      },
      {
        id: 5,
        quest: 'Q. YB와 OB의 구체적인 차이가 있나요?',
        answer: <>A. OB의 신분에서만 참여가 가능한 프로그램들이 있습니다.<br/>
        &nbsp; &nbsp; &nbsp;예를 들어 기업 연계 프로젝트나, 인턴십 같은 경우는 <br/>
        &nbsp; &nbsp; &nbsp;OB들을 대상으로 진행되어지고 있습니다.
        </>,
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
        answer: <>A. Pay it forward를 실천하기 위해서는<br/>
        &nbsp; &nbsp; &nbsp;활동기수로 참여 하셔야 합니다!
        </>,
        select: false
      },
      {
        id: 2,
        quest: 'Q. 지원 요건이 어떻게 되나요?',
        answer: <>A. 숏커톤을 위한 팀은 팀원들의 스킬셋과 커뮤니케이션 스타일을 고려하려 지정하고 있으며,<br/>
         &nbsp; &nbsp; &nbsp;롱커톤을 위한 팀은 아이디어 경선을 통해 아이디어를 피칭하고,<br/>
         &nbsp; &nbsp; &nbsp;해당 아이디어 관심이 있는 팀원들 위주로 별도의 팀빌딩 프로세스가 진행됩니다!</>,
        select: false
      },
      {
        id: 3,
        quest: 'Q. 해커톤의 주제는 어떻게 정해지게 되나요?',
        answer: <>A. 해커톤의 주제는 운영진에 의해 시대적 트렌드와 <br/>
        &nbsp; &nbsp; &nbsp;PARD의 핵심 가치를 아우를 수 있는 주제를 채택합니다.
        </>,
        select: false
      },
      {
        id: 4,
        quest: 'Q. 앱 개발 시 어떤 프로그래밍 언어를 사용하나요?',
        answer: 'A. 2기 기준 IOS 앱 개발을 위한 Swift UI를 사용하고 있습니다.',
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
          answer: <>A. 1년에 2번, 개강시기에 맞춰 2월,<br/>
          &nbsp; &nbsp; &nbsp;8월에 새로 기수를 선발합니다.</>,
          select: false
        },
        {
          id: 2,
          quest: 'Q. 학기 중 매주 토요일 일정이 모두 비워져 있어야하나요?',
          answer: <>A. 7주차, 8주차, 14주차, 15주차 토요일에는 중간/기말고사를<br/>
           &nbsp; &nbsp; &nbsp;준비할 수 있도록 세미나를 진행하고 있지 않습니다!</>,
          select: false
        },
        {
          id: 3,
          quest: 'Q.실제로 얼만큼의 리소스가 투입되어야 할까요?',
          answer: <>A. 개인마다 다르겠지만, 토요일 세미나를 제외하고 <br></br>
          &nbsp; &nbsp; &nbsp;주중 3-6학점 정도의 열정을 필요로 합니다!</>,
          select: false
        },
        {
          id: 4,
          quest: 'Q. 정기적인 오프라인 모임에 모두 참석해야하나요?',
          answer: <>A. 네, 세미나 프로그램이 매주 토요일(2주차부터 14주차 진행, 시험기간 제외-7,8주차)에 <br></br>
           &nbsp; &nbsp; &nbsp;오후 1시부터 5시까지 진행 될 예정입니다. 방학이 시작되고 3주 동안은 롱커톤 프로그램이 진행됩니다.</>,
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
