import React from 'react';
import styled from 'styled-components';

const HomeLogo = styled.img`
    width: 45%;
`;

function HomepageImg() {
    return (
        <>
        <HomeLogo src="/assets/people/peopleIMG.svg" />
    </>
    )
}

export default HomepageImg;
