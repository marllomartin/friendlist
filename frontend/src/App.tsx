import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Friendlist from './pages/Friendlist';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/friendlist" element={<Friendlist />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
