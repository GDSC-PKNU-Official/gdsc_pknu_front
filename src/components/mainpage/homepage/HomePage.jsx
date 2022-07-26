import React from 'react';
import styled from 'styled-components';
import { flexDirectionCol, flexNone, vCenter } from '../../../layout/flexbox';
import HomepageImg from './HomePageImg';
import HomepageRole from './HomePageRole';
import HomepageText from './HomePageText';
import space from '../../../styles/space';

const HomepageContainer = styled.div`
    ${vCenter};
    ${flexDirectionCol};
    height: 100vh;
    margin-top: ${space[28]};
    scroll-snap-align: start;
`;

const HomepageIntroduceWrapper = styled.div`
    ${vCenter};
    ${flexNone};
    margin-top: ${space[12]};
    padding-left: 20%;
`;

const HomepageRoleWrapper = styled.div`
    ${vCenter};
    ${flexNone};
    margin-top: ${space[20]};
    width: 60%;
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
