import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  position: absolute;
  width: 295.24px;
  height: 55px;
  left: 261px;
  top: 45px;
`;

class HeaderLabel extends Component {
  state = {

  }

  click = () => {
    console.log("Label Click!");
  }

  render() {
    return(
      <>
        <StyledLogo src={process.env.PUBLIC_URL + '/assets/logo/GDSC_pknu_Logo x1.png'} onClick ={this.click}></StyledLogo> 
      </>
      
    ) 
  }
}

export default HeaderLabel;
