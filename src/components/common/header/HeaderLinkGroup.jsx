import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// style 관련
import { color } from '../../../styles/color';

// components 관련 파일

const HeaderLink = styled.li`
  margin-right: 40px;
  text-align: center;

  &:nth-child(2) {
    margin-left: auto;
  }
  & + & {
    margin-left: 1rem;
  }
  & + button {
    margin-left: 1rem;
  }
  &: hover {
    cursor: pointer;
  }
  font-size: 1.5rem;
`;

const HeaderLinkUl = styled.ul`
  display: flex;
  align-items: center;
`;

function HeaderLinkGroup() {
  return (
    <HeaderLinkUl>
      <HeaderLink bgcolor={color.black}>
        <Link to="/#">
          홈
        </Link>
      </HeaderLink>
      <HeaderLink bgcolor={color.black}>
        <Link to="/introduce">
          소개
        </Link>
      </HeaderLink>
      <HeaderLink bgcolor={color.black} >
        <Link to="/member">
          멤버
        </Link>
      </HeaderLink>
      <HeaderLink bgcolor={color.black}>
        <Link to="/faq">
          FAQ
        </Link>
      </HeaderLink>
    </HeaderLinkUl>
  );
}

export default HeaderLinkGroup;
