import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLoginBnt = styled.button`
box-sizing: border-box;
position: absolute;
width: 120px;
height: 50px;
left: 1448px;
top: 50px;
border: 2px solid #4285F5;
border-radius: 20px;
background-color: white;
cursor: pointer;
`;



const HeaderLoginBnt = () => {
  var click = () => {
    console.log('Login 버튼 클릭!')
  }
  return(
    <React.StrictMode>
      <Link to = './login'>
        <StyledLoginBnt onClick={click}>Login</StyledLoginBnt>
      </Link>
      </React.StrictMode>
  );
}

export default HeaderLoginBnt;
