import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { color } from '../../styles/color';

const btnStyle = css`
  // default 값
  border: none;
  outline: none;
  cursor: pointer;

  width: max-content;
  height: max-content;

  background-color: #c4c4c4;
  color: ${color.white};

  border-radius: 20px;

  // button 속성 스타일

  // 넓이
  ${({ w }) => {
    return (
      w &&
      css`
        width: ${w}rem;
      `
    );
  }}

  // 높이
  ${({ h }) => {
    return (
      h &&
      css`
        height: ${h}rem;
      `
    );
  }}

  // 색깔
  ${({ color }) => {
    return (
      color &&
      css`
        background-color: ${color};
      `
    );
  }}

  // 버튼 스타일
  ${props => {
    switch (props.variant) {
      case 'solid':
        return css`
          background-color: ${props.color ? props.color : '#c4c4c4'};
        `;

      case 'outline':
        return css`
          background-color: ${color.white};
          border: 1px solid ${props.color ? props.color : '#c4c4c4'};
          color: ${props.color ? props.color : '#c4c4c4'};
        `;

      case 'ghost':
        return css`
          background-color: ${color.white};
          color: ${props.color ? props.color : '#c4c4c4'};
        `;

      default:
        return;
    }
  }}
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
