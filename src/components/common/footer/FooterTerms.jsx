import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../../styles/font';
import space from '../../../styles/space';

const FooterTermsContainer = styled.div`
    font-size: ${fontSizes.lg};
    padding-bottom: ${space[2]};
`;
function FooterTerms() {
    return (
        <FooterTermsContainer>
            GDSC PKNU 소개 | 약관 | 개인정보취급방침 | FAQ
        </FooterTermsContainer>
    )
}

export default FooterTerms;
