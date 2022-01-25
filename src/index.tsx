import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';
import 'react-toastify/dist/ReactToastify.css';
import { CustomToastContainer } from './global-styles/GlobalStyles.styled';

ReactDOM.render(
  <WorkoutsProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
        <CustomToastContainer theme='dark' hideProgressBar={true} position='top-center' closeOnClick={false} />
      </React.StrictMode>
    </AuthContextProvider>
  </WorkoutsProvider>,
  document.getElementById('root')
);
