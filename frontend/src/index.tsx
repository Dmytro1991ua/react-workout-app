import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { GlobalStyles } from './global-styles/Global.styled';
import { CustomToastContainer } from './global-styles/ToastGlobal.styled';
import { store, persistor } from './store/store';
import Preloader from './components/Preloader/Preloader';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
        <CustomToastContainer theme='dark' hideProgressBar={true} position='top-center' closeOnClick={false} />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
