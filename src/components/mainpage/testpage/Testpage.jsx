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
    width: 300px;
`;

// const Img = styled.img`
//     width: 300px;
// `;

const Text = styled.p`
    font-family: 'googleSansDisplayRegular';
    font-weight: ${fontWeights.black};
    ${({color}) => {
        return `color: ${color}`
    }};
`;

const SVG = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.12 58.6"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
            <path d="M28.84,29.42,48.5,18.06A9.67,9.67,0,1,0,38.83,1.3l-34,19.62Z" fill={props.color1} />
            <path d="M43.66,58.6A9.68,9.68,0,0,0,48.5,40.54l-34-19.62A9.68,9.68,0,0,0,4.84,37.68l34,19.62A9.63,9.63,0,0,0,43.66,58.6Z" fill={props.color2} />
            <path d="M77.46,58.6a9.6,9.6,0,0,0,4.83-1.3l34-19.62L92.59,29l-20,11.53A9.68,9.68,0,0,0,77.46,58.6Z" fill={props.color3}/>
            <path d="M111.43,39a9.68,9.68,0,0,0,4.85-18.06L82.29,1.3a9.67,9.67,0,1,0-9.67,16.76l34,19.62A9.66,9.66,0,0,0,111.43,39Z" fill={props.color4}/>
        </g></g></svg>
    )
}

function TestPage() {
    return (
        <Tmp>
            <Div>
                <SVG color1="grey" color2="black" color3="#fbbc04" color4="#34a853"></SVG>
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
