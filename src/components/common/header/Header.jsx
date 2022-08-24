// react 관련 라이브러리
import React from 'react';
import styled from 'styled-components';

// layout 관련 파일
import { vCenter, flexNone, flexDirectionCol } from '../../../layout/flexbox';

import HeaderTitle from './HeaderTitle';
import HeaderLinkGroup from './HeaderLinkGroup';
// import HeaderButtonGroup from './HeaderButtonGroup';
// import HeaderBottomBorder from './HeaderBottomBorder';

const HeaderContainer = styled.header`
  ${vCenter};
  ${flexDirectionCol};
  position: fixed;
  width: 100vw;
  height: 70px;
  background: none;
  z-index: 10;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
`;

const HeaderWrapper = styled.div`
  ${vCenter};
  ${flexNone};
  width: 100%;
  height: 100%;
`;

const HeaderUl = styled.ul`
  width: 100%;
  max-width: 1100px;
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
