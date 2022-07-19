import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

const getLoginTitle = () => screen.getByRole('heading', { level: 1, name: /login/i });
const getEmailInput = () => screen.getByLabelText(/email/i, { selector: 'input' });
const getPasswordInput = () => screen.getByLabelText(/senha/i, { selector: 'input' });
const getSingUpLink = () => screen.getByRole('link', { name: /cadastre/i });
const getLoginButton = () => screen.getByRole('button', { name: /entrar/i });
const getError = () => screen.getByRole('heading', { level: 5, name: /Error:/i });
const EMAIL = 'email@teste.com';
const PASSWORD = '112233445566';
const WRONG_EMAIL = 'email@mail'
const WRONG_PASS = '1234'
const MIN_PASS = 6;

describe('Teste os elementos da página Login', () => {
  beforeEach(() => render(<App />, { wrapper: BrowserRouter }));

  test('Existem os inputs de email e senha', () => {
    expect(getEmailInput()).toBeInTheDocument();
    expect(getPasswordInput()).toBeInTheDocument();
  });

  test('O Titulo da página está visível', () => {
    expect(getLoginTitle()).toBeInTheDocument();
  });

  test('O link de cadastro está visível', () => {
    expect(getSingUpLink()).toBeInTheDocument();
  });

  test('O botão de login está presente na página', () => {
    expect(getLoginButton()).toBeInTheDocument();
  });
});

describe('Teste de interação com a página de Login', () => {
  beforeEach(() => render(<App />, { wrapper: BrowserRouter }));

  test('É possível escrever nos campos email e senha', () => {
    userEvent.type(getEmailInput(), EMAIL);
    expect(getEmailInput()).toHaveValue(EMAIL);
    userEvent.type(getPasswordInput(), PASSWORD);
    expect(getPasswordInput()).toHaveValue(PASSWORD);
  })

  test('Não é possível fazer login com um email ou senha inválidos', () => {
    userEvent.type(getEmailInput(), WRONG_EMAIL);
    userEvent.type(getPasswordInput(), PASSWORD);
    userEvent.click(getLoginButton());
    expect(getError()).toBeInTheDocument();

    const okButton = screen.getByRole('button', { name: /ok/i })
    userEvent.click(okButton);

    userEvent.type(getEmailInput(), EMAIL);
    userEvent.type(getPasswordInput(), WRONG_PASS);
    userEvent.click(getLoginButton());
    expect(getError()).toBeInTheDocument();
    userEvent.click(okButton);
  })
})
