import { IUserLogged } from '../../pages/Login/Interfaces/login.interfaces';
import storage from './storage.services';

function checkAuth() {
  try {
    const getSessionUser = storage.getSessionStorage('sessionUser') as unknown;
    if (getSessionUser) {
      return getSessionUser as IUserLogged;
    }
    /* const getLocalToken = storage.getLocalStorage('token');
    if (getLocalToken) {
      return user;
    } */
    return false;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export default {
  checkAuth,
};
