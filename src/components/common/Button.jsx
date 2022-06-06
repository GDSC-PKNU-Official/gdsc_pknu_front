import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { color } from '../../styles/color';

const btnWidthStyle = css`
  ${({ width }) => {
    return (
      width &&
      css`
        width: ${width}rem;
      `
    );
  }}
`;

const btnHeightStyle = css`
  ${({ height }) => {
    return (
      height &&
      css`
        height: ${height}rem;
      `
    );
  }}
`;

const btnBgColorStyle = css`
  ${({ bgcolor }) => {
    return (
      bgcolor &&
      css`
        background-color: ${bgcolor};
      `
    );
  }}
`;

const btnVariantSolid = bgcolor => {
  return css`
    background-color: ${bgcolor ? bgcolor : color.defaultColor};
  `;
};

const btnVariantOutline = bgcolor => {
  return css`
    background-color: ${color.white};
    border: 1px solid ${bgcolor ? bgcolor : color.defaultColor};
    color: ${bgcolor ? bgcolor : color.defaultColor};
  `;
};

const btnVariantGhost = bgcolor => {
  return css`
    background-color: ${color.white};
    color: ${bgcolor ? bgcolor : color.defaultColor};
  `;
};

const btnVariantStyle = css`
  ${props => {
    const { variant, bgcolor } = props;

    switch (variant) {
      case 'solid':
        return btnVariantSolid(bgcolor);
      case 'outline':
        return btnVariantOutline(bgcolor);
      case 'ghost':
        return btnVariantGhost(bgcolor);
      default:
        return;
    }
  }}
`;

const btnPropsStyle = css`
  ${btnWidthStyle}
  ${btnHeightStyle}
  ${btnBgColorStyle}
  ${btnVariantStyle}
`;

const btnStyle = css`
  border: none;
  outline: none;
  cursor: pointer;

  width: max-content;
  height: max-content;

  background-color: ${color.defaultColor};
  color: ${color.white};

  border-radius: 2rem;

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
