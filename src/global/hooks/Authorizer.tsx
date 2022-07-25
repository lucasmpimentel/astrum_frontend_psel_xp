import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../../context/context';
import auth from '../services/auth.service';
import { IUserLogged } from '../interfaces/user.interfaces';

function Authorizer() {
  const {
    authorized,
  } = useContext(context);

  const verifyAuth = () => {
    const data = auth.checkAuth();
    if (data) return data as IUserLogged;
    return false;
  };

  if (!authorized) {
    try {
      const active: IUserLogged = verifyAuth() as any;
      if (active.isActive === false || !active) {
        return <Navigate to="/login" />;
      }
      return <Outlet />;
    } catch (err) {
      <Navigate to="/login" />;
    }
  }
  return (
    <Outlet />
  );
}

export default Authorizer;
