import React, { ReactElement } from 'react';

import { useApp } from './cdk/hooks/useApp';
import Routes from './Routes';

function App(): ReactElement {
  useApp();

  return <Routes />;
}

export default App;
