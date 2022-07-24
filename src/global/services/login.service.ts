import axios from 'axios';
import { IUserLogged } from '../interfaces/user.interfaces';

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: Number(process.env.REACT_APP_TIMEOUT),
});

interface Iaxiosuser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  isActive: boolean;
}

async function makeLogin(email: string, password: string) {
  // ----------- temporary database connection ------------------
  try {
    const getUser: any = await host.get('/users')
      .then((res) => res.data)
      .then((data) => data.filter((user: any) => user.email === email))
      .catch((err) => new Error(err.message));
    const user: Iaxiosuser = getUser[0];
    if (user.password === password) {
      const result: IUserLogged = ({
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        isActive: true,
        token: 'secret',
      });
      return result;
    }
    throw new Error('Erro no servidor de autenticação');
  } catch (err) {
    throw new Error('Erro na autenticação');
  }
}

export default makeLogin;
