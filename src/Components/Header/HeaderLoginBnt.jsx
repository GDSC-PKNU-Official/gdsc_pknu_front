import {Component} from 'react';
import React from 'react';
import styled from 'styled-components';

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
`;

const StyledLoginBntContent = styled.p`
position: absolute;
width: 56.8px;
height: 22px;
left: 1479.2px;
top: 64px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #4285F5;
`;

class HeaderLoginBnt extends Component {
  state = {

  }

  render() {
    return(
      <React.StrictMode>
        <StyledLoginBnt></StyledLoginBnt>
        <StyledLoginBntContent>Login</StyledLoginBntContent>
      </React.StrictMode>
    )
  }
}

export default HeaderLoginBnt;
