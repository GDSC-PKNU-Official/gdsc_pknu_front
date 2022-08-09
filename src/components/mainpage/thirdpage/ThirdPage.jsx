import React from 'react';
import styled from 'styled-components';
import space from '../../../styles/space';
import ThirdPageText from './ThirdPageText';
import ThirdPageCard from './ThirdPageCard';

const ThirdPageContainer = styled.div`
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: stretch;
    flex-direction: column;
    scroll-snap-align: start;
    width: 60%;
    margin: 0 auto;
`;

const ThirdPageCardGroup = styled.div`
    display:flex;
    padding: ${space[10]} 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
function ThirdPage(){
    return(
        <ThirdPageContainer>
            <ThirdPageText/>
            <ThirdPageCardGroup>
                <ThirdPageCard />
                <ThirdPageCard />
                <ThirdPageCard />
            </ThirdPageCardGroup>
        </ThirdPageContainer>
    );
}

export default ThirdPage;
