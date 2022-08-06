// react 관련 라이브러리
import React from 'react';

// style 관련
import { color } from '../../../styles/color';

// components 관련 파일
import Button from '../button/Button';

function HeaderButtonGroup() {
  return (
    <>
      <Button width="8" height="3" variant="outline" bgcolor={color.primaryBlue}>
        Login
      </Button>
      <Button width="8" height="3">
        Join
      </Button>
    </>
  );
}

export default HeaderButtonGroup;
