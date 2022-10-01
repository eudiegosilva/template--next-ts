import { ColorTokensTypes } from 'types';

import * as s from './logo.styles';

export type LogoProps = {
  color?: ColorTokensTypes;
  size?: number;
};

const Logo = ({ color = '$text-contrast-high', size }: LogoProps) => (
  <s.Wrapper css={{ width: size, color }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 89.5431 89.5431 0 200 0C310.457 0 400 89.5431 400 200Z"
        fill="currentColor"
      />
      <path
        d="M199.965 60.5391L327.064 280.682H72.8672L199.965 60.5391Z"
        fill="white"
      />
    </svg>
  </s.Wrapper>
);

export { Logo };
