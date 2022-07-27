import React from 'react';
import styled from 'styled-components';
import { flexDirectionCol, vCenter } from '../../../layout/flexbox';
import HomepageImg from './HomePageImg';
import HomepageRole from './HomePageRole';
import HomepageText from './HomePageText';
import space from '../../../styles/space';

const HomepageContainer = styled.div`
    ${vCenter};
    ${flexDirectionCol};
    height: 100vh;
    scroll-snap-align: start;
    width: 60%;
    margin: 0 auto;
`;

const HomepageIntroduceWrapper = styled.div`
    ${vCenter};
    margin-top: ${space[52]};
    width: 100%;
    justify-content: space-between;
`;

const HomepageRoleWrapper = styled.div`
    ${vCenter};
    width: 100%;
    margin-top: ${space[20]};
    justify-content: space-between;
    text-align: center;
    align-items: stretch;
`;

function Homepage() {
    return (
        <HomepageContainer>
            <HomepageIntroduceWrapper>
                <HomepageText />
                <HomepageImg />
            </HomepageIntroduceWrapper>
            <HomepageRoleWrapper>
                <HomepageRole />
            </HomepageRoleWrapper>
        </HomepageContainer>
    )
}

export default Homepage;
