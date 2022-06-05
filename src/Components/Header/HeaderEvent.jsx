import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledEventText = styled.p`
position: absolute;
width: 110px;
height: 25px;
left: 1056px;
top: 62px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #575757;
`;

const HeaderEvent = () => {
  return(
    <Link to = '/event'><StyledEventText>Event</StyledEventText></Link>
  );
}

export default HeaderEvent;
