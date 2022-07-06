// React 셋팅
import React from 'react';
import ReactDOM from 'react-dom/client';

// react-router 관련 라이브러리
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>,
);
