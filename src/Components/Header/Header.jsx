import React from 'react';

import HeaderLabel from './HeaderLabel';
import HeaderEvent from './HeaderEvent';
import HeaderTeam from './HeaderTeam';
import HeaderFAQ from './HeaderFAQ';

import HeaderLoginBnt from './HeaderLoginBnt';
import HeaderJoinBnt from './HeaderJoinBnt';

import styled from 'styled-components';

const StyledHeader = styled.header`
position: absolute;
width: 1920px;
height: 150px;
left: 0px;
top: 0px;
background: #FFFFFF;
`;


const SytledHeaderLine1 = styled.div`
position: absolute;
width: 480px;
height: 6.67px;
left: 0px;
top: 150px;
background: #4285F4;
`;

const SytledHeaderLine2 = styled.div`
position: absolute;
width: 480px;
height: 6.67px;
left: 480px;
top: 150px;
background: #EA4335;
`;

const SytledHeaderLine3 = styled.div`
position: absolute;
width: 480px;
height: 6.67px;
left: 960px;
top: 150px;
background: #FBBC04;
`;

const SytledHeaderLine4 = styled.div`
position: absolute;
width: 480px;
height: 6.67px;
left: 1440px;
top: 150px;
background: #34AB53;
`;

const Header = () => {
  //var [state, setState] = useState(null);

  return (
    <React.StrictMode>
      <StyledHeader>
        <HeaderLabel />
        <HeaderEvent />
        <HeaderTeam />
        <HeaderFAQ />
        <HeaderLoginBnt />
        <HeaderJoinBnt />
      </StyledHeader> 
        <SytledHeaderLine1 /><SytledHeaderLine2 />
        <SytledHeaderLine3 /><SytledHeaderLine4 />
    </React.StrictMode>
    );
}

export default Header;
