/* eslint-disable max-lines-per-function */
import React, { Suspense } from 'react';
import styled from 'styled-components';
// import { color } from '../../styles/color';
import Homepage from './homepage/HomePage';
import SecondPage from './secondpage/SecondPage';

const MainpageContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    .scrollWrapper {
        scroll-behavior: smooth;
        height: 100vh;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar {
        width: 0;
        background: transparent;
        display: none;
    }
    .container > div {
        scroll-snap-align: start;
    }
`;

function Mainpage() {
    return (
        <MainpageContainer>
            <Suspense fallback={<>loading..</>}>
                <div className={'scrollWrapper'}>
                    <Homepage />
                    <SecondPage />
                    <SecondPage />
                </div>
            </Suspense>
        </MainpageContainer>
    )
}

export default Mainpage;
