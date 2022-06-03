import React from 'react';

import styled from 'styled-components';
import space from '../../styles/space';
import Button from '../common/Button';

import theme from '../../styles/theme';
import Border from '../common/Border';

const HeaderBlock = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;

const HeaderNavigation = styled.nav`
  position: absolute;
  width: 645px;
  right: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderList = styled.ul`
  list-style-type: none;
`;

const HeaderMenuItem = styled.li`
  cursor: pointer;
  float: left;
  color: black;
  font-size: 24px;

  & + & {
    margin-left: ${space['20']};
  }

  &:hover {
    color: gray;
  }
`;

const HeaderLogo = styled.img`
  position: absolute;
  left: 260px;
  width: 295px;
  height: 55px;
`;

const HeaderButtons = styled.div`
  right: 210px;
`;

const headerMenuItems = ['Event', 'Team', 'FAQ'];

const headerButtons = [
  { title: 'Login', outline: true },
  { title: 'Join', outline: false },
];

const borderColors = [theme.primaryBlue, theme.primaryGreen, theme.primaryRed, theme.primaryYellow];

function Header() {
  return (
    <>
      <HeaderBlock>
        <HeaderLogo src="/assets/GDSCpknuLogo.png" />
        <HeaderNavigation>
          <HeaderList>
            {headerMenuItems.map(headerMenuItem => (
              <HeaderMenuItem key={headerMenuItem}>{headerMenuItem}</HeaderMenuItem>
            ))}
          </HeaderList>
          <HeaderButtons>
            {headerButtons.map(headerButton => (
              <Button key={headerButton.title} outline={headerButton.outline}>
                {headerButton.title}
              </Button>
            ))}
          </HeaderButtons>
        </HeaderNavigation>
      </HeaderBlock>
      <Border colors={borderColors} />
    </>
  );
}

export default Header;
