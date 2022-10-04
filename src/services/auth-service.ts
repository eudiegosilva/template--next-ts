import { v4 as uuid } from 'uuid';

export type SignInQuerestProps = {
  email: string;
  password: string;
};

const responseDelay = (amount = 600) =>
  new Promise(resolve => setTimeout(resolve, amount));

const signInRequest = async ({ email, password }: SignInQuerestProps) => {
  await responseDelay();

  return {
    token: uuid(),
    user: {
      name: 'Diego Silva',
      email: 'social.diegosilvatech@gmail.com',
      avatarUrl: 'https://github.com/diegosilvatech.png'
    }
  };
};

export { signInRequest };
