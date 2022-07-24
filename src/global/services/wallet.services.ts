import axios from 'axios';
import { IWallet } from '../interfaces/wallet.interfaces';

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: Number(process.env.REACT_APP_TIMEOUT),
});

// ---------------------- implementação temporária -------------------
const getWallet = async (userId: number) => {
  const [userWallet]: Promise<IWallet>[] = await host.get('/wallets')
    .then((wallets) => wallets.data)
    .then((data) => data.filter((wallet: IWallet) => wallet.userId === userId))
    .catch((err) => err.message);
  console.log(userWallet);
  return userWallet;
};

export default {
  getWallet,
};
