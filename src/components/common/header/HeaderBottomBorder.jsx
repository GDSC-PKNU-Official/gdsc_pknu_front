import React from 'react';

import styled, { css } from 'styled-components';

import { Flex } from '../../../layout/flexbox';

import { color } from '../../../styles/color';

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

  ${({ bgcolor }) => {
    return (
      bgcolor &&
      css`
        background-color: ${bgcolor ? bgcolor : color.defaultColor};
      `
    );
  }}
`;

function HeaderBottomBorder() {
  return (
    <HeaderBorderBox>
      <HeaderBorderItem bgcolor={color.primaryBlue} />
      <HeaderBorderItem bgcolor={color.primaryRed} />
      <HeaderBorderItem bgcolor={color.primaryYellow} />
      <HeaderBorderItem bgcolor={color.primaryGreen} />
    </HeaderBorderBox>
  );
}

export default HeaderBottomBorder;
