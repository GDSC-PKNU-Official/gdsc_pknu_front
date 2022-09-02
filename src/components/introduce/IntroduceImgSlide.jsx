import React, { useRef } from 'react';
import styled from 'styled-components';

const IntroduceImgContainer = styled.div`
    display: flex;
`;


const Img = styled.img`
    width: 700px;
    height: 500px;
    margin-left: 30px;
    clip: rect(0, 200px, 200px, 0);
`;

const imgSource = [
    "retrospect.jpg", "techTalk.jpg", "onBoarding.png", "ideaThon.png", "hackerThon.png", "MT.png"
]

const images = () => {
    const image = imgSource.map(img => {
        const source = `/assets/slide/${img}`;
        return (
            <Img src={process.env.PUBLIC_URL + source} key={img} />
        )
    })
    console.log(image);
    return image;
}

function IntroduceImgSlide() {
    const test = useRef();

    return (
        <IntroduceImgContainer ref={test}>
            {images()}
        </IntroduceImgContainer>
    )   
}

export default IntroduceImgSlide;
