import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { auth } from './firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); // initial value is true, so firebase does varification and set a current signed in user

  // login(create new account) a user in firebase
  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password); // create a new user and return a Promise to work with

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = (email) => auth.sendPasswordResetEmail(email);

  useEffect(() => {
    // set a current signed-in user with firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe; // unsubscribe from frirebase's onAuthStateChanged listener
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      login,
      signup,
      logout,
      resetPassword,
    }),
    []
  );

  // if a loading is false then we render app (already got a current user from firebase)
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
