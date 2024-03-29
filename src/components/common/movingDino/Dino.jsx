import React from 'react';
import styled from 'styled-components';
import DinoCharacter from './DinoCharacter';

const DinoContainer = styled.div`
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 40px;
    z-index: 1;
`;

const DinoMap = styled.div`
    margin: 0 auto;
    height: 100px;
    opacity: 0.4;
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
