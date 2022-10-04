import { createContext } from 'react';

type AuthProviderValueProps = {
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthProviderValueProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
