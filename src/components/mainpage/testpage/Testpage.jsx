import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import { fontWeights } from '../../../styles/font';

const Tmp = styled.div`
    scroll-snap-align: start;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    height: 100vh;
`;

const Div = styled.div`
    display:block;
`;

const Img = styled.img`
    width: 300px;
    height: 300px;
    .cls-1{
        fill: black;
    }
`;

const Text = styled.p`
    font-family: 'googleSansDisplayRegular';
    font-weight: ${fontWeights.black};
    ${({color}) => {
        return `color: ${color ? color: color.white}`
    }};
`;

function TestPage() {
    return (
        <Tmp>
            <Div>
                <Img src={process.env.PUBLIC_URL + '/assets/logo/GDSC_Intro.svg'} alt="GDSCpknu 로고" />
            </Div>
            <Text color={color.gdsc.red}>
                G
            </Text>
            <Text color={color.gdsc.blue}>
                D
            </Text>
            <Text color={color.gdsc.green}>
                S
            </Text>
            <Text color={color.gdsc.yellow}>
                C
            </Text>
        </Tmp>
    )
}

export default TestPage;
