import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import 'helpers/initFA';
// import { MsalProvider } from '@azure/msal-react';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('main')
);
