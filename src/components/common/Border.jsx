import React from 'react';
import styled, { css } from 'styled-components';

const StyledBorder = styled.div`
  width: 100%;
  height: 0;
  display: flex;
`;

const StyledBorderItem = styled.div`
  flex: 1;

  ${({ color }) =>
    color &&
    css`
      border-bottom: 7px solid ${color};
    `};
`;

function Border({ colors }) {
  return (
    <StyledBorder>
      {colors.map(color => (
        <StyledBorderItem key={color} color={color} />
      ))}
    </StyledBorder>
  );
}

export default Border;
