import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { GlobalStyles } from './global-styles/Global.styled';
import { CustomToastContainer } from './global-styles/ToastGlobal.styled';
import { store } from './store/store';

ReactDOM.render(
  <WorkoutsProvider>
    <AuthContextProvider>
      <Provider store={store}>
        <React.StrictMode>
          <GlobalStyles />
          <App />
          <CustomToastContainer theme='dark' hideProgressBar={true} position='top-center' closeOnClick={false} />
        </React.StrictMode>
      </Provider>
    </AuthContextProvider>
  </WorkoutsProvider>,
  document.getElementById('root')
);
