import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from 'antd';

import { withDefaultLayout } from './components/Layout';

import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';

const { Content } = Layout;

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={withDefaultLayout(Home)} />
          <Route path="/projects" element={withDefaultLayout(Projects)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}