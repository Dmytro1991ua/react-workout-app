import React, { ReactElement } from 'react';
import { GlobalStyles } from './global-styles/Global.styled';
import Routes from './Routes';

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
