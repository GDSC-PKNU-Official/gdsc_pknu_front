import React from 'react';
import styled from 'styled-components';
import GDSCLogo from '../gdscLogo/GDSC_Logo';
import FooterTerms from './FooterTerms';
import FooterContact from './FooterContact';
import FooterCopyRight from './FooterCopyRight';
import { flexDirectionCol } from '../../../layout/flexbox';
import { color } from '../../../styles/color';
import space from '../../../styles/space';

const FooterContainer = styled.footer`
    ${flexDirectionCol};
    width: 100vw;
    padding-top: ${space[10]};
    padding-bottom: ${space[10]};
    background: ${color.gray[300]};
`;

const FooterWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <GDSCLogo />
                <FooterTerms />
                <FooterContact />
                <FooterCopyRight />
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
