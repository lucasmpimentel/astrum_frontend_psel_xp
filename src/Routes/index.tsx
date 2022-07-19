import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import Home from '../pages/Auth/Home';

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="cadastro" element={<SingUp />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
