/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Context from '../../../context/context';
import storage from '../../../global/services/storage.services';
import Loading from '../../../global/components/Loading';
import BackBtn from '../../../global/components/shared/BackBtn';
import { IUserLogged } from '../../Login/Interfaces/login.interfaces';
import * as C from './styles';
import Balance from './components/Balance';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserLogged>();
  const {
    isLoading,
    setIsLoading,
  } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    const getUser: IUserLogged = storage.getSessionStorage('sessionUser') as any;
    setUser(getUser);
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    isLoading ? <Loading /> : (
      <C.Main>
        <C.Header>
          <BackBtn type="button" onClick={() => navigate('/perfil')}>
            <CgProfile />
          </BackBtn>
          <h2>{`Olá ${user?.name}`}</h2>
        </C.Header>
        <h2>Sua Carteira</h2>
        <Balance />
      </C.Main>
    )
  );
}

export default Home;
