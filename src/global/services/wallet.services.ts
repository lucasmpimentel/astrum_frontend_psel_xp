import axios from 'axios';
import storage from './storage.services';
/* import { IWallet } from '../interfaces/wallet.interfaces'; */

// ---------------------- implementação temporária -------------------
const getWallet = async (userId: number, token: string) => {
  const host = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: Number(process.env.REACT_APP_TIMEOUT),
    headers: {
      Authorization: token,
    },
  });

  const userWallet = await host.get(`/conta/${userId}`).then((res) => res.data);
  return userWallet;
};

const getMarket = async () => {
  const { token, id } = storage.getSessionStorage('sessionUser') as any;
  const host = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: Number(process.env.REACT_APP_TIMEOUT),
    headers: {
      Authorization: token,
    },
  });
  const getMarketShares = await host
    .get('/api/empresa')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
  const getUserShares = await host
    .get(`/ativos/cliente/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
  return { market: getMarketShares, wallet: getUserShares };
};

export default {
  getWallet,
  getMarket,
};
