import React from 'react';
import styled from 'styled-components';

// layout 관련 파일
import { flexNone } from '../../../layout/flexbox';

// style 관련
import { color } from '../../../styles/color';

// components 관련 파일
import Button from '../button/Button';

const HeaderLink = styled(Button)`
  ${flexNone}

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

  font-size: 2.4rem;
`;

function HeaderLinkGroup() {
  return (
    <>
      <HeaderLink width="10" variant="ghost" to="#" bgcolor={color.black} islink="true">
        Event
      </HeaderLink>
      <HeaderLink width="10" variant="ghost" to="#" bgcolor={color.black} islink="true">
        Team
      </HeaderLink>
      <HeaderLink width="10" variant="ghost" to="#" bgcolor={color.black} islink="true">
        FAQ
      </HeaderLink>
    </>
  );
}

export default HeaderLinkGroup;
