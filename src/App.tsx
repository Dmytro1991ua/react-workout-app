import React, { ReactElement, useCallback, useEffect } from 'react';
import { auth } from './firebase';
import { setUser } from './modules/Auth/Auth.slice';

import Routes from './Routes';
import { useAppDispatch } from './store/store.hooks';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  const setCurrentUser = useCallback(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(setUser(null));
      }

      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

  return <Routes />;
}

export default App;
