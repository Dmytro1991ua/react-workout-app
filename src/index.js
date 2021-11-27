import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from './AuthContext';
import { WorkoutsProvider } from './WorkoutsContext';

ReactDOM.render(
  <WorkoutsProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </WorkoutsProvider>,
  document.getElementById('root')
);
