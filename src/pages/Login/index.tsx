import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import makeLogin from '../../global/services/login.service';
import storage from '../../global/services/storage.services';
import Loading from '../../global/components/Loading';
import { IEventLogin, IUserLogged, IUserLogin } from './Interfaces/login.interfaces';

export default function Login() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(Context);
  const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });
  const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const MIN_PASS = 6;

  const handleChange = ({ target }: { target: IEventLogin}) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (user.email && user.password) {
        const checkEmail: boolean = regEx.test(user.email);
        const checkPassword: boolean = user.password.length >= MIN_PASS;
        if (checkEmail && checkPassword) {
          setIsLoading(true);
          const { email, password }: IUserLogin = user;
          const loggedUser: IUserLogged = await makeLogin(email, password);
          const { token } = loggedUser;
          storage.setLocalStorage('token', token);
          storage.setSessionStorage('sessionUser', loggedUser);
          setIsLoading(false);
          return navigate('/home');
        }
        throw new Error('Email ou senha inválidos');
      }
      throw new Error('Email ou senha inválidos');
    } catch (err: any) {
      return global.alert(`Ops... Algo deu errado: ${err.message}`);
    }
  };

  return (
    isLoading
      ? <Loading />
      : (
        <main>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Senha:
              <input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Entrar</button>
          </form>
        </main>
      )
  );
}
