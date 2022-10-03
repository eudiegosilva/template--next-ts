import { useRouter } from 'next/router';
import { useState, useEffect, createContext } from 'react';

const getCredentials = () => {
  return {
    data: [
      {
        id: 0,
        name: 'User',
        email: 'user@gmail.com',
        password: 'user123'
      }
    ]
  };
};

type UserProps = {
  id: number;
  name: string;
  email: string;
} | null;

type AuthProviderValueProps = {
  isAuthenticated: boolean;
  user: UserProps;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthProviderValueProps>({
  isAuthenticated: false,
  user: { id: 0, name: '', email: '' },
  isLoading: false,
  login: () => ({}),
  logout: () => ({})
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    if (recoveredUser) setUser(JSON.parse(recoveredUser));
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await getCredentials();
    const account = response.data[0];

    const hasValidCredentials = (email: string, password: string) => {
      if (account.email === email && account.password === password) {
        return true;
      }
    };

    const loggedUser = {
      id: account.id,
      name: account.name,
      email: account.email
    };

    if (hasValidCredentials(email, password)) {
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setUser(loggedUser);
      router.push('/');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  const authProviderValue: AuthProviderValueProps = {
    isAuthenticated: !!user,
    user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
