import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { color } from '../../../styles/color';

import { btnPropsStyle } from './ButtonPropsStyle';

const btnStyle = css`
  border: none;
  outline: none;
  cursor: pointer;

  width: max-content;
  height: max-content;

  background: none;
  color: ${color.white};

  border-radius: 2rem;
  font-size: 2rem;

  ${btnPropsStyle}
`;

const StyledButton = styled.button`
  ${btnStyle}
`;

const StyledLinkButton = styled(Link)`
  ${btnStyle}
`;

function Button(props) {
  return props.islink === 'true' ? <StyledLinkButton {...props}></StyledLinkButton> : <StyledButton {...props}></StyledButton>;
}

export default Button;
