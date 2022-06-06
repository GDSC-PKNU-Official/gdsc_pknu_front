import React from 'react';

import styled from 'styled-components';
import space from '../../styles/space';
import Button from '../common/Button';

import theme from '../../styles/theme';
import Border from '../common/Border';

const headerBox = styled.div`
    width:100%;
    height:150px;
    display:flex;
    align-items:center;
`;

const headerNav = styled.nav`
    width:645;
    display:flex;
    align-items:center;
    right:200px;
`;


const headerLogo = styled.d=img`
    width:295px;
    height:55px;
    position:absolute;
`;

const headerMenu = ['Event', 'Team', 'FAQ'];


const headerButtons = [
    { title: 'Login'},
    { title: 'Join'},
  ];

function Header() {
    return (
        <>
        <headerbox>
            <headerlogo src='/img/logo.png'/>
            <headerNav>
                <headerlist>
                    {headerMenu.map(headerMenu => (
                        <headermenu key={headermenuitem}>{headermenuitem}
                    </headermenu>
                    ))}
                </headerlist>
            </headerNav>
        </headerbox>
        </>
    )
}

export default Header;
