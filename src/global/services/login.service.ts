import axios from 'axios';
import jwt from 'jwt-decode';
import { IUserLogged } from '../interfaces/user.interfaces';

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: Number(process.env.REACT_APP_TIMEOUT),
});

async function makeLogin(email: string, password: string) {
  const loginObj = { email, password };
  try {
    const { token }: any = await host
      .post('/login', loginObj)
      .then((res) => res.data)
      .catch((err) => new Error(err.message));
    const { data } = jwt(token) as { data: IUserLogged };
    const result = {
      ...data,
      token,
    };
    if (token) return result;
    throw new Error('Erro no servidor de autenticação');
  } catch (err) {
    throw new Error('Erro na autenticação');
  }
}

export default makeLogin;
