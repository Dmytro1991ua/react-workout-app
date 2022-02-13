import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { GlobalStyles } from './global-styles/Global.styled';
import { CustomToastContainer } from './global-styles/ToastGlobal.styled';

ReactDOM.render(
  <WorkoutsProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <GlobalStyles />
        <App />
        <CustomToastContainer theme='dark' hideProgressBar={true} position='top-center' closeOnClick={false} />
      </React.StrictMode>
    </AuthContextProvider>
  </WorkoutsProvider>,
  document.getElementById('root')
);
