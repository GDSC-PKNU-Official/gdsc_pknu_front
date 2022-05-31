// react 관련 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// layout 관련 파일
import { vCenter, flexNone, fdirectCol, Flex } from '../../layout/flexbox';

// style 관련
import { color } from '../../styles/color';

// components 관련 파일
import Button from './Button';

const HeaderContainer = styled.header`
  ${vCenter}
  ${fdirectCol}
  width: 100%;
  height: 10rem;
`;

const HeaderWrapper = styled.div`
  ${vCenter}
  ${flexNone}
  min-width: 102.4rem;
  height: 100%;

  button + button {
    margin-left: 1.4rem;
  }
`;

const HeaderTitle = styled.h1`
  ${flexNone}
`;

const HeaderLogo = styled.img`
  width: 29.524rem;
  height: 5.5rem;
`;

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

const HeaderBorderBox = styled.div`
  ${Flex}
  width: 100%;
  height: 0.8rem;
  min-width: 102.4rem;
`;

const HeaderBorderItem = styled.div`
  width: 100%;
  height: 0.8rem;
  min-width: 25.6rem;

  ${({ color }) => {
    return (
      color &&
      css`
        background-color: ${color ? color : '#c4c4c4'};
      `
    );
  }}
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle>
            <Link to="/">
              <HeaderLogo src={process.env.PUBLIC_URL + '/assets/logo/GDSCpknuLogo.png'} alt="GDSCpknu 로고" />
            </Link>
          </HeaderTitle>
          <HeaderLink w="10" variant="ghost" to="#" islink="true" color={color.black}>
            Event
          </HeaderLink>
          <HeaderLink w="10" variant="ghost" to="#" islink="true" color={color.black}>
            Team
          </HeaderLink>
          <HeaderLink w="10" variant="ghost" to="#" islink="true" color={color.black}>
            FAQ
          </HeaderLink>
          <Button w="12" h="5" variant="outline" color={color.primaryBlue}>
            Login
          </Button>
          <Button w="12" h="5">
            Join
          </Button>
        </HeaderWrapper>
        <HeaderBorderBox>
          <HeaderBorderItem color={color.primaryBlue} />
          <HeaderBorderItem color={color.primaryRed} />
          <HeaderBorderItem color={color.primaryYellow} />
          <HeaderBorderItem color={color.primaryGreen} />
        </HeaderBorderBox>
      </HeaderContainer>
    </>
  );
}

export default Header;
