/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import makeLogin from '../../global/services/login.service';
import storage from '../../global/services/storage.services';
import Loading from '../../global/components/Loading';
import Input from '../../global/components/shared/Input';
import OutlineBtn from '../../global/components/shared/OutlineBtn';
import Modal from '../../global/components/Modal';
import { IEventLogin, IUserLogged, IUserLogin } from './Interfaces/login.interfaces';
import * as C from './styles';

export default function Login() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, setAuthorized } = useContext(Context);
  const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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
          storage.setSessionStorage('sessionUser', loggedUser);
          setAuthorized(true);
          setIsLoading(false);
          return navigate('/');
        }
        throw new Error('Email ou senha inválidos');
      }
      throw new Error('Email ou senha inválidos');
    } catch (err: any) {
      setIsLoading(false);
      setAuthorized(false);
      setErrorMsg(err.message);
      return setModalOpen(true);
    }
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    isLoading
      ? <Loading />
      : (
        modalOpen ? <Modal closeBtn={handleCloseModal}><h4>{`Ops... ${errorMsg}`}</h4></Modal> : (
          <C.Main>
            <C.Title>Login</C.Title>
            <C.LoginForm onSubmit={handleSubmit}>
              <Input
                aria-label="email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <Input
                aria-label="password"
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                value={user.password}
                onChange={handleChange}
              />
              <OutlineBtn type="submit">Entrar</OutlineBtn>
              <OutlineBtn
                type="button"
                onClick={() => navigate('/cadastro')}
              >
                Cadastre-se!
              </OutlineBtn>
            </C.LoginForm>
          </C.Main>
        ))
  );
}
