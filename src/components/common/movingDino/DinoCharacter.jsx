import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const DinoAnimator = keyframes`
0% { transform: translate(0, 0) }
100% { transform: translate(100%, 0) }
`;

const DinoWrapper = styled.div`
    animation: ${DinoAnimator} 10s infinite linear;
`;

const Dinosaur = styled.img`
`;

const dinoMovingSpeed = 100;
let DinoSwitch = false;

// eslint-disable-next-line max-lines-per-function
function DinoCharacter() {
    const [dinoSource, setDinoSource] = useState('/assets/dino/dino_idle.png');
    useEffect(() => {
        const moving = setInterval(dinoMoving, dinoMovingSpeed);
        return () => clearInterval(moving);
    }, []);

    const dinoMoving = () => {
        if(DinoSwitch)
            setDinoSource('/assets/dino/dino_left.png');
        else
            setDinoSource('/assets/dino/dino_right.png');
        DinoSwitch = !DinoSwitch;
    }

    return (
        <DinoWrapper>
            <Dinosaur src={dinoSource} />
        </DinoWrapper>
    )
}

export default DinoCharacter;
