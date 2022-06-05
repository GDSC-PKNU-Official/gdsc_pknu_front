import React from 'react';
//import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledJoinBntBorder = styled.button`
box-sizing: border-box;
position: absolute;
width: 120px;
height: 50px;
left: 1582px;
top: 50px;
border: 2px solid #C4C4C4;
background: #C4C4C4;
border-radius: 20px;
cursor: pointer;
`;

const HeaderJoinBnt = () => {
  //var [login_logout, setLogin_logout] = useState(false);
  
  return (
    <React.StrictMode>
      <Link to ='./join'>
        <StyledJoinBntBorder>Join</StyledJoinBntBorder>
      </Link>
    </React.StrictMode>
  );
}

export default HeaderJoinBnt;

