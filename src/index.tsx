import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';

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
