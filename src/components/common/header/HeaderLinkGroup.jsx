import React from 'react';
import styled from 'styled-components';

// style 관련
import { color } from '../../../styles/color';

// components 관련 파일

const HeaderLink = styled.li`
  margin-right: 13px;
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

  font-size: 1.5rem;
`;

const HeaderLinkUl = styled.ul`
  display: flex;
  align-items: center;
`;

function HeaderLinkGroup() {
  return (
    <HeaderLinkUl>
      <HeaderLink variant="ghost" to="#" bgcolor={color.black} islink="true">
        Event
      </HeaderLink>
      <HeaderLink variant="ghost" to="#" bgcolor={color.black} islink="true">
        Team
      </HeaderLink>
      <HeaderLink variant="ghost" to="#" bgcolor={color.black} islink="true">
        FAQ
      </HeaderLink>
    </HeaderLinkUl>
  );
}

export default HeaderLinkGroup;
