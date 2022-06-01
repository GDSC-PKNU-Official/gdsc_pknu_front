import React from 'react';

import styled from 'styled-components';
import space from '../../styles/space';
import Button from './Button';

import { fontSizes } from '../../styles/font';
import theme from '../../styles/theme';
import HeaderBottomBorder from './HeaderBottomBorder';

const HeaderBlock = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: black; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 7px solid ${theme.primaryBlue}; */
  padding: 0px 50px;

  h1 {
    cursor: pointer;
    font-size: ${fontSizes['6xl']};
  }
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

const headerMenuItems = ['Event', 'Team', 'FAQ'];

const headerButtons = [
  { title: 'Login', outline: true },
  { title: 'Join', outline: false },
];

function Header() {
  return (
    <>
      <HeaderBlock>
        <h1>GDSC PKNU</h1>
        <HeaderList>
          {headerMenuItems.map((headerMenuItem, i) => (
            <HeaderMenuItem key={i}>{headerMenuItem}</HeaderMenuItem>
          ))}
        </HeaderList>
        <HeaderList>
          {headerButtons.map((headerButton, i) => (
            <Button key={i} outline={headerButton.outline}>
              {headerButton.title}
            </Button>
          ))}
        </HeaderList>
      </HeaderBlock>
      <HeaderBottomBorder color={theme.primaryYellow}></HeaderBottomBorder>
    </>
  );
}

export default Header;
