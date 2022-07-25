import styled from 'styled-components';

export const ModalBackground = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  align-items: center;
  border: solid 2px ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  padding: 10px;
  text-align: center;
  width: 90vw;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  height: 20%;

  &:active {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.text};
  height: 50%;
`;
