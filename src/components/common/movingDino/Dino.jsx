import React from 'react';
import styled from 'styled-components';
import DinoCharacter from './DinoCharacter';

const DinoContainer = styled.div`
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 1px;
`;

const DinoMap = styled.div`
    margin: 0 auto;
    z-index: 10;
    height: 100px;
    opacity: 0.5;
`;

function Dino() {
    return (
        <DinoContainer>
            <DinoMap>
                <DinoCharacter />
            </DinoMap>
        </DinoContainer>
    )
}

export default Dino;
