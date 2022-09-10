import React from 'react';
import styled from 'styled-components';
import { fontSizes,fontWeights } from '../../styles/font';
import space from '../../styles/space';
import { color } from '../../styles/color';

const FaqPageTextFirst = styled.span`
    font-size: ${fontSizes['8xl']};
    font-weight: ${fontWeights['semibold']};
    color: #333333;
    padding: ${space[20]};
`;

const FaqPageTextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const FaqPageTextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${space[10]} 0;
    border-bottom: 1px solid ${color.defaultColor};
`;

const FaqPageTextGroup = styled.div`
`;

const FaqQuestions = styled.div`
    font-size: ${fontSizes['4xl']};
    padding: ${space[6]} 0;
`;

const FaqAnswer = styled.div`
    font-size: ${fontSizes['2xl']};
    padding: ${space[6]} 0;
    line-height:${space[10]};
`;

const GDSC_FAQ = [
    {
        questions: "특별한 개발 경험이나, 코딩 지식이 많이 없더라도 가능할까요?",
        answer: "할 수 있습니다. 다만, 우리 커뮤니티는 교육을 위한 장소가 아닌, 함께하고 성장하는 공간입니다. 따라서 우리 커뮤니티를 통해 코딩, 개발을 처음부터 배워보겠다하면 좋은 선택이 아닐 수도 있습니다. 하지만, 남들보다 더 공부하고 빠르게 성장할 자신이 있다면 가능하다고 생각합니다."
    },
    {
        questions: "스터디나 프로젝트 같은 경우는 실시하는 날짜가 정해져있나요?",
        answer: "스터디나 프로젝트는 함께 하시는 멤버분들과 상의하여 날짜와 일정 등을 계획합니다. 따라서 참여하시는 스터디에서 일정을 조율해서 진행하시면 됩니다."
    },
    {
        questions: "다른 스터디/프로젝트도 하고 싶은데, 제가 하고싶은 주제로 개설해도되나요?",
        answer: "얼마든지 가능합니다. Unity, 블록체인, 공모전, 해커톤 스터디/프로젝트 나아가 개인적인 취미 활동까지 큰 문제가 없는 주제 내에서 개설이 가능합니다. 일례로 지난 기수에서는 헬스 스터디가 개설되어서 운영됐었습니다."
    },
    {
        questions: "스터디/프로젝트는 외부 인원과 함께할 수 있나요?",
        answer: "가능합니다. 다만, 함께 하기위해선 스터디/프로젝트장의 선행적인 허가가 필요합니다. 추후 코어멤버분에게 전달해 초대할 수 있도록 해주시면 됩니다. 이때의 외부 인원은 일반적인 멤버(M)가 아닌 게스트(G) 권한으로서 제한된 범위의 활동을 할 수 있습니다."
    },
    {
        questions: "회비는 어디에 사용되나요?",
        answer: " 회원분들을 위한 회원증/수료증 제작과 이벤트 상품, 서버비 등에 이용될 예정입니다. 회비 사용 내역은 노션을 통해 항시 투명하게 공개하고 있습니다."
    },
    {
        questions: "모집 인원은 몇명인가요?",
        answer: " 모집 인원은 구체적으로 정하지 않았으나, 커뮤니티의 방향성과 함께하기에 적합한 분을 대상으로 선발할 예정입니다."
    },
]

function FaqPageText(){
    const FaqList = GDSC_FAQ.map((faq,index) => {
        return(
            <FaqPageTextContainer key={index}>
                <FaqPageTextWrapper>
                    <FaqPageTextFirst>Q</FaqPageTextFirst>
                    <FaqPageTextGroup>
                        <FaqQuestions>
                            {faq.questions}
                        </FaqQuestions>
                        <FaqAnswer>
                            {faq.answer}
                        </FaqAnswer>
                    </FaqPageTextGroup>
                </FaqPageTextWrapper>
            </FaqPageTextContainer>
        )
    })
    return FaqList;
}

export default FaqPageText;
