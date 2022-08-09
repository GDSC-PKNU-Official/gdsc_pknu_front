import React from 'react';
import styled from 'styled-components';
import { flexNone } from '../../../layout/flexbox';

const LogoContainer = styled.div`
    ${flexNone};
    display: inline-block;
`;

const GDSCText = styled.h3`
    &:first-child {
        font-size: 14px;
        padding-bottom: 2px;
    };
    &:nth-child(2) {
        font-size: 10px;
    };
    font-family: 'googleSansDisplayRegular';
`;

const Div = styled.div`
    display: inline-block;
    vertical-align: middle;
    &:nth-child(2) {
        padding-left: 10px;
    }
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
`;

function GDSCLogo() {
    return (
        <LogoContainer>
            <Div>
                <Logo src='/assets/logo/GDSC_Logo.svg' alt="GDSCpknu 로고" />
            </Div>
            <Div>
                <GDSCText>
                    Google Developer Student Clubs
                </GDSCText>
                <GDSCText>
                    Pukyong University
                </GDSCText>
            </Div>
        </LogoContainer>
    )
}

export default GDSCLogo;
