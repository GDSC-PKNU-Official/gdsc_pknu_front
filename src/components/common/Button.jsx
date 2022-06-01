import React from 'react';

import styled, { css } from 'styled-components';
import { fontSizes, fontWeights } from '../../styles/font';
import { color } from '../../styles/color';
import theme from '../../styles/theme';
import space from '../../styles/space';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: ${fontWeights.medium};
  cursor: pointer;

  height: 50px;
  width: 120px;
  font-size: ${fontSizes['2xl']};

  background: ${color.gray[400]};

  & + & {
    margin-left: ${space[6]};
  }

  &:hover {
    background: ${color.gray[700]};
    color: white;
  }

  ${props =>
    props.outline &&
    css`
      color: ${theme.primaryBlue};
      background: none;
      border: 1px solid ${theme.primaryBlue};

      &:hover {
        background: ${theme.primaryBlue};
        color: white;
      }
    `}
`;

function Button({ children, outline }) {
  return <StyledButton outline={outline}>{children}</StyledButton>;
}

export default Button;
