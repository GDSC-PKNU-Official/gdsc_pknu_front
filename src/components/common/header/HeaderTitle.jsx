import React from 'react';

import styled from 'styled-components';

// layout 관련 파일
import { flexNone } from '../../../layout/flexbox';

import { Link } from 'react-router-dom';

const HeaderTitleContainer = styled.h1`
  ${flexNone};
`;

const HeaderLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;

function HeaderTitle() {
  return (
    <HeaderTitleContainer>
      <Link to="/">
        <HeaderLogo src={process.env.PUBLIC_URL + '/assets/logo/GDSC_Logo.svg'} alt="GDSCpknu 로고" />
      </Link>
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
