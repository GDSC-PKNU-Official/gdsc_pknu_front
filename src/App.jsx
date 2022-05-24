import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>hi</h1>
    </ThemeProvider>
  );
}

export default App;
