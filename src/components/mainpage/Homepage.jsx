// react 관련 라이브러리
import React from 'react';
import styled from 'styled-components';
import { flexDirectionCol, flexNone, vCenter } from '../../layout/flexbox';
import HomepageImg from './HomepageImg';
import HomepageRole from './HomepageRole';
import HomepageText from './HomepageText';
import space from '../../styles/space';

const HomepageContainer = styled.div`
    ${vCenter}
    ${flexDirectionCol}
`;

const HomepageIntroduceWrapper = styled.div`
    ${vCenter}
    ${flexNone}
    margin-top: ${space[12]};
    padding-left: 20%;
`;

const HomepageRoleWrapper = styled.div`
    ${vCenter}
    ${flexNone}
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
