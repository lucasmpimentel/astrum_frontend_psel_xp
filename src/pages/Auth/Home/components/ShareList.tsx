import React, { useState /* , useContext */ } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
/* import Context from '../../../../context/context'; */
import walletServices from '../../../../global/services/wallet.services';
import * as C from './styles/ShareListStyle';

export default function ShareList() {
  /* const { user } = useContext(Context); */
  const [alignment, setAlignment] = useState('market');
  const [walletShares, setWalletShares] = useState() as any;
  const [marketShares, setMarketShares] = useState() as any;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const getMarket = async () => {
    const resp = await walletServices.getMarket();
    setWalletShares(resp.wallet);
    setMarketShares(resp.market);
  };
  getMarket();

  return (
    <C.Main>
      <ToggleButtonGroup
        color="warning"
        value={alignment}
        exclusive
        onChange={handleChange}
        fullWidth
      >
        <ToggleButton value="market">Mercado</ToggleButton>
        <ToggleButton value="wallet">Carteira</ToggleButton>
      </ToggleButtonGroup>
      {alignment === 'market'
        ? marketShares?.map((share: any) => (
          <C.DivS>
            <h3>{share.nm_empresa}</h3>
            <div>
              <p>{share.setor_economico}</p>
              <p>{share.segmento}</p>
            </div>
            <h4>{share.cd_acao}</h4>
          </C.DivS>
        ))
        : walletShares.map((share: any) => (
          <C.DivS>
            <h3>{share.nm_empresa}</h3>
            <div>
              <p>{share.setor_economico}</p>
              <p>{share.segmento}</p>
            </div>
            <h4>{share.cd_acao}</h4>
          </C.DivS>
        ))}
    </C.Main>
  );
}
