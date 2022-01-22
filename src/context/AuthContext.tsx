import firebase from 'firebase/app';
import { createContext, ReactElement, useContext, useEffect, useState } from 'react';

import { auth } from '../firebase';

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: AuthContextProviderProps): ReactElement => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>();
  const [loading, setLoading] = useState(true); // initial value is true, so firebase does varification and set a current signed in user

  useEffect(() => {
    // set a current signed-in user with firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe; // unsubscribe from frirebase's onAuthStateChanged listener
  }, []);

  // if a loading is false then we render app (already got a current user from firebase)
  return <AuthContext.Provider value={{ currentUser }}>{!loading && children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
