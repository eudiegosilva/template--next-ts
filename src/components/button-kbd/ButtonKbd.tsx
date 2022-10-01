import * as s from './button-kbd.styles';

export type ButtonKbdProps = {
  children: React.ReactNode;
};

const ButtonKbd = ({ children }: ButtonKbdProps) => (
  <s.Wrapper>{children}</s.Wrapper>
);

export { ButtonKbd };
