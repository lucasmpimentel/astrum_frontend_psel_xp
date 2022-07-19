import styled from 'styled-components';

const bg = require('../../global/assets/images/background.png');

export const Main = styled.main`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${bg});
  background-position: center top -250px;
  background-repeat: no-repeat;
  background-size: cover;
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
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell;
  font-size: 26px;
  margin-top: 100px;
`;

export const Form = styled.form`
  align-self: center;
  justify-self: baseline;
  max-width: 90vw;
`;

export const Pass = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: Roboto, monospace;
  font-size: 12px;
  margin-top: 2px;
  text-transform: lowercase;
  transition: ease-out 0.30ms;
`;

export const CBLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell;
  justify-content: space-between;
`;
