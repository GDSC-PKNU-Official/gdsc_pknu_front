import React from 'react';

import Header from '../components/common/header/Header';
import Mainpage from '../components/mainpage/Mainpage';
import Dino from '../components/common/movingDino/Dino';

function Home() {
  return (
    <div>
      <Header />
      <Mainpage />
      <Dino />
    </div>
  );
}

export default Home;
