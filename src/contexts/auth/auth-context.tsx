import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { setCookie, parseCookies } from 'nookies';
import {
  signInRequest,
  SignInQuerestProps,
  recoverUserData,
  apiClient,
} from 'services';

type UserProps = {
  name: string;
  email: string;
  avatarUrl: string;
} | null;

type AuthProviderValueProps = {
  isAuthenticated: boolean;
  user: UserProps;
  hasValidCredentials: boolean;
  signIn: (data: SignInQuerestProps) => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthProviderValueProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);
  const [hasValidCredentials, setHasValidCredentials] =
    useState<boolean>(false);

  const router = useRouter();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'next-template--token': existingToken } = parseCookies();
    if (existingToken) {
      recoverUserData().then((response) => setUser(response.user));
    }
  }, []);

  const getCredentials = async () => {
    return {
      email: 'user@gmail.com',
      password: '123456',
    };
  };

  const signIn = async ({ email, password }: SignInQuerestProps) => {
    const credentials = await getCredentials();

    if (email === credentials.email && password === credentials.password) {
      const { token, user } = await signInRequest({ email, password });
      apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

      setCookie(undefined, 'next-template--token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);
      setHasValidCredentials(true);
      router.push('/dashboard');
    } else {
      setHasValidCredentials(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, hasValidCredentials, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
