import React from 'react';
import styled from 'styled-components';
import space from '../../styles/space';
import profileCard from '../common/profileCard/ProfileCard';

const MemberProfileContainer = styled.div`
    margin-top: ${space[20]};
    display: flex;
    flex-wrap: wrap;
`;

const members = [
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
    {
        name: "조나단",
        role: "Rapper",
        image: "/assets/img/jonadan.jpeg",
        github: "https://github.com/pp449",
    },
]

function MemberProfile() {
    return (
        <MemberProfileContainer>
            {profileCard(members)}
        </MemberProfileContainer>
    )
}

export default MemberProfile;
