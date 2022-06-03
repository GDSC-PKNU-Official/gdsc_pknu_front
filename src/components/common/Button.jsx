import React from 'react';

import styled, { css } from 'styled-components';
import { fontSizes, fontWeights } from '../../styles/font';
import { color } from '../../styles/color';
import theme from '../../styles/theme';
import space from '../../styles/space';

const initialStyle = css`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  height: 50px;
  width: 120px;
`;

const fontStyle = css`
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes['2xl']};
`;

const StyledButton = styled.button`
  ${initialStyle}

  ${fontStyle}

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
