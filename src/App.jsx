import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { Provider } from 'react-redux'; //react-redux (connect사용해야함)
import store from './store.js'; //redux (전역 상태 관리 라이브러리)
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';

import NotFoundPage from './NotFoundPage';

const App = () => {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Routes>
          <Route exact path = "/" element = {<Header />} />
          <Route path = "/label" element = {<NotFoundPage content = 'label'/>} />
          <Route path = "/event" element = {<NotFoundPage content = 'event'/>} />
          <Route path = "/team" element = {<NotFoundPage content = 'team'/>} />
          <Route path = "/faq" element = {<NotFoundPage content = 'FAQ'/>} />
          <Route path = "/login" element = {<NotFoundPage content = 'Login'/>} /> 
          <Route path = "/join" element = {<NotFoundPage content = 'Join'/>} />
          <Route path = "/" element = {<NotFoundPage content = 'Error'/>} />
        </Routes>
    </ThemeProvider>
    </Provider>
  )
}

export default App;
