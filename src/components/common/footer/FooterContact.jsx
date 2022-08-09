import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
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
