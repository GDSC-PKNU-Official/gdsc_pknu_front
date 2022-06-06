import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header />
    </ThemeProvider>
  );
}

export default App;
