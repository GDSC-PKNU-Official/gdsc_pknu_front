import React from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/font';
import space from '../../../styles/space';

const CardContainer = styled.div`
    width: 200px;
    height: 250px;
    padding-top: 25px;
    margin-bottom: ${space[20]};
    margin: 0 ${space[20]} ${space[20]} 0;
    text-align: center;
    margin-right: ${space[20]};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const CardImageWrapper = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CardName = styled.div`
    margin-top: 20px;
    font-size: ${fontSizes['2xl']};
    font-weight: ${fontWeights.medium};
`;

const CardRole = styled.div`
    color: red;
    margin-top: 5px;
`;

const CardGithub = styled.div`
    margin-top: 10px;
`;

const GithubImg = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

function profileCard(members) {
    const memberProfile = members.map(member => {
        return (
            <CardContainer key={member.name}>
                <CardImageWrapper>
                    <CardImage src={process.env.PUBLIC_URL + member.image} alt="image" />
                </CardImageWrapper>
                <CardName>
                    {member.name}
                </CardName>
                <CardRole>
                    {member.role}
                </CardRole>
                <CardGithub>
                    <GithubImg src='/assets/img/github.svg' alt="깃허브" onClick={() => window.open(`${member.github}`, '_blank')}/>
                </CardGithub>
            </CardContainer>
        )
    })
    return memberProfile;
}

export default profileCard;
