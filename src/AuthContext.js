import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
   return (
      <AuthContext.Provider value={false}>
         {props.children}
      </AuthContext.Provider>
   )
} 


export function useAuth() {
   return useContext(AuthContext);
}