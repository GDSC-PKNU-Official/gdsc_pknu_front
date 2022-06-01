import React from 'react';
import styled, { css } from 'styled-components';

const StyledHeaderBottomBorder = styled.div`
  width: 100%;
  height: 0px;

  ${props =>
    props.color &&
    css`
      border-bottom: 7px solid ${props.color};
    `}
`;

function HeaderBottomBorder({ color }) {
  return <StyledHeaderBottomBorder color={color}></StyledHeaderBottomBorder>;
}

export default HeaderBottomBorder;
