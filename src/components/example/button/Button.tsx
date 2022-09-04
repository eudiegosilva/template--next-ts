import * as s from './button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  isFullWidth?: boolean;
  handleClick?: () => void;
};

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  isFullWidth = false,
  handleClick
}: ButtonProps) => {
  return (
    <s.Button
      type={type}
      variant={variant}
      isFullWidth={isFullWidth}
      onClick={handleClick}
    >
      {children}
    </s.Button>
  );
};

export { Button };
