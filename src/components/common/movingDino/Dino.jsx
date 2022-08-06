import React from 'react';
import styled from 'styled-components';
import DinoCharacter from './DinoCharacter';

const DinoContainer = styled.div`
    position: fixed;
    width: 100%;
    margin: 0 auto;
    bottom: 0;
`;

const DinoMap = styled.div`
    width: 70%;
    margin: 0 auto;
    // background-image: url('/assets/dino/map.png');
    // background-repeat: repeat-x;
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
