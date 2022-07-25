import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SingUp from '../../pages/SingUp';

const getTitlePage = () => screen.getByRole('heading', { level: 1, name: /cadastro/i});
const getNameInput = () => screen.getByLabelText('username', {selector: 'input'});
const getEmailInput = () => screen.getByLabelText('email', {selector: 'input'});
const getPassword = () => screen.getByLabelText('password', {selector: 'input'});
const getConfimPassword = () => screen.getByLabelText('confirmPassword', {selector: 'input'});
const getSingUpBtn = () => screen.getByRole('button', {name: /cadastrar/i});
const getBackBtn = () => screen.getByRole('button', {name: ''});

const NAME = 'Pessoa';
const EMAIL = 'email@servidor.com';
const PASSWORD = '123456';
const WRONG_PASS = '1234';
const MIN_NAME = 3;
const MIN_PASSWORD = 6;

describe('Teste os elementos da tela: SingUp', () => {
  beforeEach(() => render(<SingUp />, {wrapper: BrowserRouter}));

  test('Exitem todos os imputs de cadastro', () => {
    expect(getNameInput()).toBeInTheDocument();
    expect(getEmailInput()).toBeInTheDocument();
    expect(getPassword()).toBeInTheDocument();
    expect(getConfimPassword()).toBeInTheDocument();
  });

  test('O título da pagina esta visível', () => {
    expect(getTitlePage()).toBeInTheDocument();
  });

  test('O botão de cadastro e voltar estão visíveis', () => {
    expect(getSingUpBtn()).toBeInTheDocument();
    expect(getBackBtn()).toBeInTheDocument();
  });
})

describe('Teste a funcionalidade dos inputs de nome e email', () => {
  beforeEach(() => render(<SingUp />, {wrapper: BrowserRouter}));

  test('É possível escrever o nome', () => {
    userEvent.type(getNameInput(), NAME);
    expect(getNameInput()).toHaveValue(NAME)
  });

  test('É possível escrever o email', () => {
    userEvent.type(getEmailInput(), EMAIL);
    expect(getEmailInput()).toHaveValue(EMAIL);
  });

  test('Não é possível cadastrar se o nome for menor que 3 caracteres',
    () => {
      userEvent.type(getNameInput(), 'no');
      userEvent.type(getEmailInput(), EMAIL);
      userEvent.type(getPassword(), PASSWORD);
      userEvent.type(getConfimPassword(), PASSWORD);
      userEvent.click(getSingUpBtn());
      expect(screen.getByRole(
        'heading',
        {level: 3, name: /nome deve possúir mais que 3 caracteres/i},
      )).toBeInTheDocument();
    })
});