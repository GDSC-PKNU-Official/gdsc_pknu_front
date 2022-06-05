import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled.img`
  position: absolute;
  width: 295.24px;
  height: 55px;
  left: 261px;
  top: 45px;
`;

const HeaderLabel = () => {
  var click = () => {console.log("Label Click!");} //label클릭시 home으로 전환

  return (
    <Link to ='./label'>
      <StyledLogo src={process.env.PUBLIC_URL + '/assets/header_logo1.png'} onClick ={click}></StyledLogo> 
    </Link>
  );
}

export default HeaderLabel;
