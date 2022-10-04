import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic or find out user from db
        if (email !== 'user.silva@gmail.com' || password !== '1234') {
          throw new Error('Invalid Credentials');
        }
        // if everithing is fine
        return {
          id: '1234',
          name: 'User Silva',
          email: 'user.silva@gmail.com'
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
    // error: '/auth/error',
    // signOut: '/auth/signout'
  }
};

export default NextAuth(authOptions);
