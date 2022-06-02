import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import {Provider} from 'react-redux';
import store from './store.js';
import {Component } from 'react';

import Header from './Components/Header/Header.jsx';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Header></Header>
      </ThemeProvider>
      </Provider>
    )
  }
}

export default App;
