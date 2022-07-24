import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  CgNotes,
  CgAdd,
  CgRemove,
  CgArrowsExchangeAltV,
} from 'react-icons/cg';
import walletServices from '../../../../global/services/wallet.services';
import { IUserLogged } from '../../../../global/interfaces/user.interfaces';
import { IWallet } from '../../../../global/interfaces/wallet.interfaces';
import RoudedButtons from '../../../../global/components/shared/RoundedButtons';
import * as C from './styles/BalanceStyles';

interface Props {
  user: IUserLogged
}

export default function Balance({ user }: Props) {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [balance, setBalance] = useState<number>(0);

  const handleEye = () => {
    if (!eyeOpen) return setEyeOpen(true);
    return setEyeOpen(false);
  };

  /* const getBalance = async () => {
    const { id } = user;
    const res = await walletServices.getBalance(id);
    console.log(res);
    setBalance(res);
  }; */

  useEffect(() => {
    const getBalance = async () => {
      const { id } = user;
      const res: IWallet = await walletServices.getWallet(id);
      console.log(res);
      setBalance(res.value);
    };
    getBalance();
  }, []);

  return (
    <C.Bg>
      <C.Main>
        <C.Title>Saldo</C.Title>
        <C.BalanceValue>
          {eyeOpen ? <h1>{ `R$ ${balance.toFixed(2)}`}</h1> : <h1>R$ -----,--</h1>}
          <RoudedButtons type="button" onClick={handleEye}>
            {eyeOpen ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </RoudedButtons>
        </C.BalanceValue>
        <C.BarButtons>
          <RoudedButtons type="button">
            <CgNotes />
          </RoudedButtons>
          <RoudedButtons type="button">
            <CgAdd />
          </RoudedButtons>
          <RoudedButtons type="button">
            <CgRemove />
          </RoudedButtons>
          <RoudedButtons type="button">
            <CgArrowsExchangeAltV />
          </RoudedButtons>
        </C.BarButtons>
      </C.Main>
    </C.Bg>
  );
}
