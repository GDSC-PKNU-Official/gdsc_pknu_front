import React from 'react';
import styled, { keyframes } from 'styled-components';
import space from '../../../styles/space';
import { color } from "../../../styles/color";
import { fontSizes, fontWeights } from '../../../styles/font';

const jumpingHeight = "-15%";
const jumpingRotate = "1deg";

const boxJump = keyframes`
0% { transform: translate(0, 0) }
50% { transform: translate(0, ${jumpingHeight}) }
55% { transform: translate(0, ${jumpingHeight}) rotate(${jumpingRotate}); }
60% { transform: translate(0, ${jumpingHeight}) rotate(-${jumpingRotate}); }
65% { transform: translate(0, ${jumpingHeight}) rotate(${jumpingRotate}); }
70% { transform: translate(0, ${jumpingHeight}) rotate(-${jumpingRotate}); }
100% { transform: translate(0, 0) }
`

const RoleCard = styled.div`
    padding: ${space[6]};
    border-radius: ${space[7]};
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:hover {
        cursor: pointer;
        animation: ${boxJump} 2s infinite ease-out alternate;
    }
    
    ${({bgcolor}) => {
        return `background: ${bgcolor ? bgcolor: color.white}`
    }};
`;

const RoleText = styled.p`
    padding-bottom: ${space[8]};
    ${({color}) => {
        return `color: ${color ? color: color.white}`
    }};
    ${({fontSize}) => {
        return `font-size: ${fontSize ? fontSize: fontSizes['3xl']}`
    }};
    ${({fontWeight}) => {
        return `font-weight: ${fontWeight ? fontWeight: fontWeights.normal}`
    }};
`;

const RoleImg = styled.img`
`;

const Role = styled.h4`
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes['4xl']};
    padding-top: ${space[3]};
    padding-bottom: ${space[10]};
    ${({color}) => {
        return `color: ${color}`;
    }};
`;

const RoleExplain = styled.h5`
    white-space: pre-wrap;
    font-size: ${fontSizes['3xl']};
    color: ${color.gray[300]};
`;

const GDSC_ROLES = [
    {
        color: "red",
        role: "core",
        text: "Team leading role",
        gdsc_color: `${color.gdsc.red}`
    },
    {
        color: "green",
        role: "member",
        text: "Participating\nand\nHelping roles",
        gdsc_color: `${color.gdsc.green}`
    },
    {
        color: "blue",
        role: "beginner",
        text: "Learning\nand\nParticipating roles",
        gdsc_color: `${color.gdsc.blue}`
    }
]

// eslint-disable-next-line max-lines-per-function
const roleList = () => {
    return (
        <RoleCard color={color.white} bgcolor={color.gdsc.yellow}>
            <RoleText fontSize={fontSizes['5xl']} fontWeight={fontWeights.bold} color={color.white}>
                Role
            </RoleText>
            <RoleText fontSize={fontSizes.px} fontWeight={fontWeights.bold} color={color.white}>
                -----------------
            </RoleText>
            <RoleText fontSize={fontSizes['3xl']} fontWeight={fontWeights.bold} color={color.white}>
                리더
            </RoleText>
            <RoleText fontSize={fontSizes['3xl']} fontWeight={fontWeights.bold} color={color.white}>
                커뮤니티 매니징
            </RoleText>
            <RoleText fontSize={fontSizes['3xl']} fontWeight={fontWeights.bold} color={color.white}>
                기술팀
            </RoleText>
        </RoleCard>
    )
};

// eslint-disable-next-line max-lines-per-function
const roleCards = () => {
    // eslint-disable-next-line max-lines-per-function
    const roleCard = GDSC_ROLES.map(role => {
        const source = `/assets/logo/GDSC_${role.color}.svg`;
        return (
            <RoleCard key={role.color} color={role.gdsc_color}>
                <RoleImg src={source} />
                <Role color={role.gdsc_color}>
                    {role.role}
                </Role>
                <RoleExplain>
                    {role.text}
                </RoleExplain>
            </RoleCard>
        )
    })
    return roleCard;
}

function HomepageRole() {
    return (
        <>
            {roleList()}
            {roleCards()}
        </>
    )
}

export default HomepageRole;
