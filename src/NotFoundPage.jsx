import React from 'react';
import styled from 'styled-components';

const StyledH1= styled.h1`
  font-size: 30px;
`;

const NotFoundPage = ({ content }) => {
  return (
    <StyledH1>{content}페이지는 아직 구현 안됨.</StyledH1>
  )
}

export default NotFoundPage;

