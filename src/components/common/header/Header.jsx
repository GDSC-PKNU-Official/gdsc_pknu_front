// react 관련 라이브러리
import React from 'react';
import styled from 'styled-components';

// layout 관련 파일
import { vCenter, flexNone, flexDirectionCol } from '../../../layout/flexbox';

import HeaderTitle from './HeaderTitle';
// import HeaderLinkGroup from './HeaderLinkGroup';
// import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderBottomBorder from './HeaderBottomBorder';
import { color } from '../../../styles/color';

const HeaderContainer = styled.header`
  ${vCenter};
  ${flexDirectionCol};
  width: 100%;
  height: 7rem;
  position: fixed;
  background: ${color.white};
  z-index: 100;
  opacity: 0.7;
`;

const HeaderWrapper = styled.div`
  ${vCenter};
  ${flexNone};
  min-width: 102.4rem;
  height: 100%;

  button + button {
    margin-left: 1.4rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle />
        {/* <HeaderLinkGroup /> */}
        {/* <HeaderButtonGroup /> */}
      </HeaderWrapper>
      <HeaderBottomBorder />
    </HeaderContainer>
  );
}

export default Header;
