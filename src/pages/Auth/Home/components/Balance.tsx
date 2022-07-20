import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  CgNotes,
  CgAdd,
  CgRemove,
  CgArrowsExchangeAltV,
} from 'react-icons/cg';
import RoudedButtons from '../../../../global/components/shared/RoundedButtons';
import * as C from './styles/BalanceStyles';

export default function Balance() {
  const [eyeOpen, setEyeOpen] = useState(false);

  const handleEye = () => {
    if (!eyeOpen) return setEyeOpen(true);
    return setEyeOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <C.Bg>
      <C.Main>
        <C.Title>Saldo</C.Title>
        <C.BalanceValue>
          {eyeOpen ? <h1>$ AQUI SALDO</h1> : <h1>$ -----,--</h1>}
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
