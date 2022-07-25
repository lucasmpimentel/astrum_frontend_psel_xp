import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context/Provider';

const root = document.getElementById('root') as HTMLElement;
const app = ReactDOM.createRoot(root);

app.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
);
