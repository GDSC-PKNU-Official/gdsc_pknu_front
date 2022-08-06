import React from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from "../../../styles/font";
import { color } from '../../../styles/color';
import space from '../../../styles/space';

const HomepageTextBox = styled.div`
`;


const Text = styled.p`
    white-space: pre-wrap;
    &:first-child {
        font-weight: ${fontWeights.bold};
    }
    &:nth-child(2) {
        margin-top: ${space[20]};
        color: ${color.gray[400]};
    }
    ${({fontSize}) => {
        return `font-size: ${fontSize}`
    }};
`;

const introduceWord = "Google\nDeveloper\nStudent Clubs\nPKNU";
const introduceSubWord = "서로 교류하며 성장해 가는 커뮤니티";

function HomepageText() {
    return (
        <HomepageTextBox>
            <Text fontSize={fontSizes['8xl']}>
                {introduceWord}
            </Text>
            <Text fontSize={fontSizes['3xl']}>
                {introduceSubWord}
            </Text>
        </HomepageTextBox>
    )
}

export default HomepageText;
