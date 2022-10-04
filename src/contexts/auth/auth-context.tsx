import { useRouter } from 'next/router';
import { createContext, useState } from 'react';

import { setCookie } from 'nookies';
import { signInRequest, SignInQuerestProps } from 'services/auth-service';

type AuthProviderValueProps = {
  isAuthenticated: boolean;
  user: UserProps;
  signIn: (data: SignInQuerestProps) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type UserProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

const AuthContext = createContext({} as AuthProviderValueProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const router = useRouter();
  const isAuthenticated = false;

  const signIn = async ({ email, password }: SignInQuerestProps) => {
    const { token, user } = await signInRequest({ email, password });

    setCookie(undefined, 'next-template--token', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    });

    setUser(user);
    router.push('/dashboard');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
