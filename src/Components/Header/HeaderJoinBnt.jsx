import React from 'react';
//import { useState } from 'react';
import styled from 'styled-components';

const StyledJoinBntBorder = styled.div`
position: absolute;
width: 120px;
height: 50px;
left: 1582px;
top: 50px;
background: #C4C4C4;
border-radius: 20px`;

const StyledJoinBntText = styled.p`
position: absolute;
width: 56.8px;
height: 22px;
left: 1613.2px;
top: 64px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
`;


const HeaderJoinBnt = () => {
  //var [login_logout, setLogin_logout] = useState(false);
  
  return (
    <React.StrictMode>
      <StyledJoinBntBorder />
      <StyledJoinBntText>Join</StyledJoinBntText>
    </React.StrictMode>
  );
}

export default HeaderJoinBnt;

