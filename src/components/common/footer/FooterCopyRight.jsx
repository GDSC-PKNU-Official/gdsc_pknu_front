import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import space from '../../../styles/space';

const FooterCopyRightContainer = styled.div`
    color: ${color.gray[400]};
    text-align: center;
    padding-top: ${space[4]};
    padding-bottom: ${space[10]};
`;

function FooterCopyRight() {
    return (
        <FooterCopyRightContainer>
            © 2022. GDSC PKNU All rights reserved.
        </FooterCopyRightContainer>
    )
}

export default FooterCopyRight;
