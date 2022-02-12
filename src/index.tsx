import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { CustomToastContainer } from './global-styles/Global.styled';

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
