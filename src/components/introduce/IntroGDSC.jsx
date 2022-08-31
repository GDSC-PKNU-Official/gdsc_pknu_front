import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fontSizes, fontWeights } from '../../styles/font';

const appearGDSC = keyframes`
0% {
    visibility: visible;
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

const appearText = keyframes`
0% {
    visibility: visible;
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

const GDSCText = styled.div`
    visibility: hidden;
    padding-left: 2rem;
    font-size: ${fontSizes['8xl']};
    font-weight: ${fontWeights.bold};
    animation: ${appearText} 1s linear forwards;
    animation-delay: 3s;
`;

const GDSCLogo = styled.div`
width: 300px;

.cls-1 {
    visibility: hidden;
    animation: ${appearGDSC} 2s linear forwards;
    animation-delay: 0.5s;
}
.cls-2 {
    visibility: hidden;
    animation: ${appearGDSC} 2s linear forwards;
    animation-delay: 1.5s;
}
.cls-3 {
    visibility: hidden;
    animation: ${appearGDSC} 2s linear forwards;
    animation-delay: 0.5s;
}
.cls-4 {
    visibility: hidden;
    animation: ${appearGDSC} 2s linear forwards;
    animation-delay: 1.5s;
}
`;

const GDSCAppear = styled.div`
    display: flex;
    align-items: center;
`;

const SVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.4 161.5"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1" d="M143.4,40c7.4-12.7,3.1-29-9.6-36.4c-8.3-4.8-18.5-4.8-26.8,0l-93.6,54C0.7,64.8-3.8,81.1,3.4,93.9
			s23.5,17.3,36.3,10c0.1-0.1,0.2-0.1,0.4-0.2l93.6-54C137.7,47.4,141.1,44,143.4,40z" fill="#ea4335" />
            <path className="cls-2" d="M120,161.5c14.7,0,26.7-11.9,26.7-26.6c0-9.5-5.1-18.3-13.3-23.1l-93.5-54c-12.7-7.4-29-3-36.4,9.7
			s-3,29,9.7,36.4l93.6,54C110.8,160.2,115.4,161.5,120,161.5z" fill="#4285f4" />
            <path className="cls-3" d="M329.8,94.2c7.4-12.7,3-29-9.7-36.4c-8.2-4.8-18.4-4.8-26.7,0l-93.6,54c-12.8,7.3-17.3,23.5-10,36.3
			c7.3,12.8,23.5,17.3,36.3,10c0.1-0.1,0.2-0.1,0.4-0.2l93.6-54C324.1,101.6,327.4,98.2,329.8,94.2z" fill="#fbbc04" />
            <path className="cls-4" d="M306.7,107.5c14.7,0,26.7-11.9,26.7-26.6c0-9.5-5.1-18.3-13.3-23.1l-93.6-54c-12.7-7.4-29-3-36.4,9.7
			c-7.4,12.7-3,29,9.7,36.4l0,0l93.5,54C297.5,106.2,302,107.5,306.7,107.5z" fill="#34a853" />
        </g></g></svg>
    )
}

function IntroGDSC() {
    return (
        <GDSCAppear>
            <GDSCLogo>
                <SVG></SVG>
            </GDSCLogo>
            <GDSCText>
                GDSC 소개
            </GDSCText>
        </GDSCAppear>
    )
}

export default IntroGDSC;
