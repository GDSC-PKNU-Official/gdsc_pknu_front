import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../styles/font';
import space from '../../styles/space';
import MemberProfile from './MemberProfile';

const MemberContainer = styled.div`
    width: 100%;
    padding-top: ${space[20]};
    min-height: 100vh;
`;

const MemberWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    padding: 150px;
    margin: 0 auto;
`;

const MemberText = styled.div`
    font-size: ${fontSizes['6xl']};
`;


function Memberpage() {
    return (
        <MemberContainer>
            <MemberWrapper>
                <MemberText>
                    구성원 소개
                </MemberText>
                <MemberProfile />
            </MemberWrapper>
        </MemberContainer>
    )
}

export default Memberpage;
