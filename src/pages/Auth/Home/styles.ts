import styled from 'styled-components';

export const Main = styled.main`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  justify-content: space-between;
  min-height: 100vh;
  padding: 15px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
