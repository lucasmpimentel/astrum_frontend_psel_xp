import styled from 'styled-components';

const bg = require('../../../../../global/assets/images/background.png');

export const Bg = styled.div`
  background-image: url(${bg});
  background-size: cover;
  border-radius: 15px;
`;

export const Main = styled.main`
  /* background: linear-gradient(320deg, ${({ theme }) => theme.colors.secondary.yellow} -70%, #000 100%); */
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  justify-content: space-between;
  min-height: 180px;
  padding: 15px;
`;

export const Title = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const BalanceValue = styled.div`
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.text};
  display: flex;
  min-height: 80px;
  justify-content: space-between;
`;

export const BarButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
