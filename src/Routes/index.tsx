import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="cadastro" element={<SingUp />} />
    </Routes>
  );
}
