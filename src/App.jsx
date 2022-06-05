import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <style>
      </style>
        <img className="img" alt="gdsc_logo" src="img/logo.png"/>
        <img className="img" alt="gdsc_menu" src="img/menu.png"/>
        <img className="img" alt="gdsc_login" src="img/login.png"/>
        <img className="img" alt="gdsc_join" src="img/join.png"/>
    </ThemeProvider>
  );
}

export default App;
