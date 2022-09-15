import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../styles/font';
import space from '../../styles/space';
import { color } from '../../styles/color';
import FaqPageText from './FaqPageText';

const FaqContainer = styled.div`
    width:100%;
    padding-top: ${space[20]};
    min-height:100vh;
`;

const FaqWrapper = styled.div`
    width:100%;
    max-width:1270px;
    padding:150px;
    margin: 0 auto;
`;

const FaqTitle = styled.div`
    font-size: ${fontSizes['6xl']};
    margin-bottom: ${space[20]};
    padding: ${space[4]} ${space[2]} ${space[4]} ${space[16]};
    border-left : ${space[4]} solid ${color.gdscBlue};
    white-space : nowrap;
`;

const FaqText = styled.span`
    font-size: ${fontSizes['3xl']};
    color: #575757;
    padding: 0 ${space[10]};
`;

function FaqPage(){
    return(
        <FaqContainer>
            <FaqWrapper>
                <FaqTitle>
                    FAQ
                    <FaqText>자주 묻는 질문</FaqText>
                </FaqTitle>
                <FaqPageText />
            </FaqWrapper>
        </FaqContainer>
    )
}

export default FaqPage;
