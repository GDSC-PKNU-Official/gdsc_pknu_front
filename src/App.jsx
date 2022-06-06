import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import "./styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <img className="logoimg" alt="logo" src="/img/logo.png"/>  
      <div className="Event" alt="event"><a href="https://www.naver.com/">Event</a></div>
      <div className="Team" alt="event"><a href="https://www.naver.com/">Team</a></div>
      <div className="FAQ" alt="event"><a href="https://www.naver.com/">FAQ</a></div>
      <div className="login" alt="login"><a href="https://www.naver.com/">login</a></div>
      <div className="login_btn" alt="login_btn"></div>
      <div className="join_btn" alt="join_btn"></div>
      <div className="join" alt="join"><a href="https://www.naver.com/">join</a></div>
      <div className="square1"></div>
      <div className="square1"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <div className="square4"></div>

    </ThemeProvider>
  );
}

export default App;
