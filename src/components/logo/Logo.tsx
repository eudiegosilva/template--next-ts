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
        d="M170.111 11.7771C177.482 -2.9639 198.518 -2.96388 205.889 11.7771L373.528 347.056C380.177 360.354 370.507 376 355.639 376H20.3607C5.49306 376 -4.17687 360.354 2.47214 347.056L170.111 11.7771Z"
        fill="currentColor"
      />
    </svg>
  </s.Wrapper>
);

export { Logo };
