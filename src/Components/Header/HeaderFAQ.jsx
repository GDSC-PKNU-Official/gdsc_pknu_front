import React from 'react'
import { Component } from 'react'
import styled from 'styled-components';

const StyledFAQText = styled.p`

position: absolute;
width: 45px;
height: 25px;
left: 1296px;
top: 63px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #575757;
`;
class HeaderFAQ extends Component {
  state = {

  }

  click = () => {
    
  }

  render() {
    return(
      <>
        <StyledFAQText>FAQ</StyledFAQText>
      </>
      
    ) 
  }
}

export default HeaderFAQ;
