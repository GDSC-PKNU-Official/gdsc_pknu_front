import React from 'react';
import styled from 'styled-components';
import space from '../../../styles/space';
import SecondPageText from './SecondPageText.jsx';
import SecondPageCard from './SecondPageCard';

const SecondPageContainer = styled.div`
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: stretch;
    flex-direction: column;
    scroll-snap-align: start;
    width: 60%;
    margin: 0 auto;
`;

const SecondPageCardGroup = styled.div`
    display:flex;
    padding: ${space[10]} 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

function SecondPage(){
    return(
        <SecondPageContainer>
            <SecondPageText/>
            <SecondPageCardGroup>
                <SecondPageCard />
            </SecondPageCardGroup>
        </SecondPageContainer>
    );
}

export default SecondPage;
