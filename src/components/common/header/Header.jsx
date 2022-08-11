// react 관련 라이브러리
import React from 'react';
import styled from 'styled-components';

// layout 관련 파일
import { vCenter, flexNone, flexDirectionCol } from '../../../layout/flexbox';

import HeaderTitle from './HeaderTitle';
import HeaderLinkGroup from './HeaderLinkGroup';
// import HeaderButtonGroup from './HeaderButtonGroup';
// import HeaderBottomBorder from './HeaderBottomBorder';
import { color } from '../../../styles/color';

const HeaderContainer = styled.header`
  ${vCenter};
  ${flexDirectionCol};
  position: fixed;
  width: 100vw;
  background: ${color.white};
  z-index: 10;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
`;

const HeaderWrapper = styled.div`
  ${vCenter};
  ${flexNone};
  width: 100%;

  // button + button {
  //   margin-left: 1.4rem;
  // }
`;

const HeaderUl = styled.ul`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderUl>
          <HeaderTitle />
          <HeaderLinkGroup />
          {/* <HeaderButtonGroup /> */}
        </HeaderUl>
      </HeaderWrapper>
      {/* <HeaderBottomBorder /> */}
    </HeaderContainer>
  );
}

export default Header;
