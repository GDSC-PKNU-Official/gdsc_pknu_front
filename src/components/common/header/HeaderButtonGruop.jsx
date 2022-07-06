// react 관련 라이브러리
import React from 'react';

// style 관련
import { color } from '../../../styles/color';

// components 관련 파일
import Button from '../button/Button';

function HeaderButtonGruop() {
  return (
    <>
      <Button width="12" height="5" variant="outline" bgcolor={color.primaryBlue}>
        Login
      </Button>
      <Button width="12" height="5">
        Join
      </Button>
    </>
  );
}

export default HeaderButtonGruop;
