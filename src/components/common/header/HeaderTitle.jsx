import React from 'react';

import styled from 'styled-components';

// layout 관련 파일
import { flexNone } from '../../../layout/flexbox';

import { Link } from 'react-router-dom';

const HeaderTitleContainer = styled.li`
  ${flexNone};
  &:hover {
    cursor: pointer;
  };
`;

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const GDSCText = styled.h3`
&:first-child {
    font-size: 14px;
    padding-bottom: 2px;
  };
  &:nth-child(2) {
    font-size: 10px;
  };
  font-family: 'googleSansDisplayRegular';
`;

const Div = styled.div`
  display:inline-block;
  vertical-align: middle;
  padding-left: 10px;
`;


// eslint-disable-next-line max-lines-per-function
function HeaderTitle() {
  return (
    <HeaderTitleContainer>
      <Link to="/">
        <Div>
          <HeaderLogo src={process.env.PUBLIC_URL + '/assets/logo/GDSC_Logo.svg'} alt="GDSCpknu 로고" />
        </Div>
        <Div>
          <GDSCText>
          Google Developer Student Clubs
        </GDSCText>
        <GDSCText>
          Pukyong University
        </GDSCText>
        </Div>
      </Link>
      
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
