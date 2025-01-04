import React from 'react';
import Header from '../layouts/Header';
import { Outlet } from 'react-router';

import './app.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;