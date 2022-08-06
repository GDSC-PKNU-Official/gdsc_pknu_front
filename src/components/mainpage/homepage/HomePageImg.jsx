import React from 'react';
import styled from 'styled-components';

const HomeLogoWrapper = styled.div`
`;

const HomeLogo = styled.img`
    width: 400px;
    float: right;
`;

function HomepageImg() {
    return (
        <HomeLogoWrapper>
            <HomeLogo src="/assets/people/peopleIMG.svg" />
        </HomeLogoWrapper>
    )
}

export default HomepageImg;
