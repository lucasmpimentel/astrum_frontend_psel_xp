import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorizer from '../global/hooks/Authorizer';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import Home from '../pages/Auth/Home';
import Profile from '../pages/Auth/Profile';

export default function index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="cadastro" element={<SingUp />} />
      <Route path="/" element={<Authorizer />}>
        <Route path="" element={<Home />} />
        <Route path="perfil" element={<Profile />} />
      </Route>
    </Routes>
  );
}
