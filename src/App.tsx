import React from 'react';

import { Header, Footer } from './components/Layout';
import Router from './components/Router';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header>
        <h1>NDA Portal</h1>
      </Header>
      <Router />
      <Footer>
        <p>&copy; 2025 NDA Projects. All rights reserved.</p>
      </Footer>
    </div>
  );
}