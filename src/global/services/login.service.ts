import axios from 'axios';
import { IUserLogged } from '../../pages/Login/Interfaces/login.interfaces';

const host = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

async function makeLogin(email: string, password: string) {
  const req = { email, password };
  const result: IUserLogged = ({
    email: req.email,
    username: 'Pessoa',
    token: 'secret',
  });
  console.log(host);
  return result;
}

export default makeLogin;
