import React from 'react';
import * as C from './style';

const logo = require('../../assets/images/Astrum.gif');

export default function Loading() {
  return (
    <C.Main>
      <C.Logo src={logo} alt="Astrum Logo" />
    </C.Main>
  );
}
