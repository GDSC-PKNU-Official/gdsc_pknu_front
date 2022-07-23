// react 관련 라이브러리
import React from 'react';
import styled from 'styled-components';
import { flexDirectionCol, flexNone, vCenter } from '../../layout/flexbox';
import HomepageImg from './HomepageImg';
import HomepageRole from './HomepageRole';
import HomepageText from './HomepageText';

const HomepageContainer = styled.div`
    ${vCenter}
    ${flexDirectionCol}
`

const HomepageIntroduceWrapper = styled.div`
    ${vCenter}
    ${flexNone}
    margin-top: 3rem;
    padding-left: 20%;
`

const HomepageRoleWrapper = styled.div`
    ${vCenter}
    ${flexNone}
    margin-top: 15rem;
`

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
