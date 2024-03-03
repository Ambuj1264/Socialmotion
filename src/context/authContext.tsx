import React, { useContext } from 'react'
export interface IAuth {
    isLoggedIn: boolean;
    authenticateUser: (token: string) => void;
    logout: () => void;
    isDashboard: boolean;
  }
export const AuthContext = React.createContext({} as IAuth);

export const AuthContainer = AuthContext.Provider;
export const useAuth = ()=>useContext(AuthContext)
