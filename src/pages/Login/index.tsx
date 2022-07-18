import React, { useState, useContext, useEffect } from 'react';
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
  const [loginError, setLoginError] = useState(false);
  const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;

  const handleChange = ({ target }: { target: IEventLogin}) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (user.email && user.password) {
        const checkEmail: boolean = regEx.test(user.email);
        const checkPassword: boolean = user.password.length > 0;
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
      setLoginError(true);
      setIsLoading(true);
      return (
        <div>
          <p>Ops... Algo deu errado:</p>
          <h5>{`Erro: ${err.message}`}</h5>
          <button type="button" onClick={() => setLoginError(false)}>Ok</button>
        </div>
      );
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [loginError]);

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
