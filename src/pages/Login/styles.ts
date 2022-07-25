import styled from 'styled-components';

const bg = require('../../global/assets/images/background.png');

export const Main = styled.main`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${bg});
  background-position: center top -250px;
  background-repeat: no-repeat;
  background-size: 400%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  padding: 15px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 26px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 35vh;
  width: 100%;
`;

export const SingUpDiv = styled.div`
  align-items: center;
  display: flex;
`;

export const Logo = styled.img`
  margin: auto 0;
  width: 100%;
`;
