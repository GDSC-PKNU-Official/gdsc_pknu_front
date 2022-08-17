import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import space from '../../../styles/space';

const FooterContainer = styled.div`
    color: ${color.gray[500]};
    padding-bottom: ${space[6]};
    border-bottom: 1px solid ${color.gray[400]};
`;

const Leader = {
    name: "남우진",
    email: "mokujin94@gmail.com",
};

function FooterContact() {
    return (
        <FooterContainer>
            Leader: {Leader.name} | 
            Email : {Leader.email}
        </FooterContainer>
    )
}

export default FooterContact;
