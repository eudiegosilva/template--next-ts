import { InputHTMLAttributes } from 'react';

import { Tooltip } from 'components/tooltip/Tooltip';

import * as s from './input-text.styles';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  tooltipContent?: string;
  register?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  name,
  label,
  type = 'text',
  icon,
  iconPosition = 'left',
  tooltipContent = '',
  register,
  ...rest
}: InputTextProps) => (
  <s.Wrapper aria-label="FieldText component">
    {!!label && (
      <s.LabelWrapper>
        <s.Label>{label}</s.Label>
        {!!tooltipContent && <Tooltip content={tooltipContent} />}
      </s.LabelWrapper>
    )}
    <s.InputWrapper>
      {!!icon && (
        <s.IconWrapper iconPosition={iconPosition}>{icon}</s.IconWrapper>
      )}
      <s.InputText
        type={type}
        name={name}
        {...register(name, { required: true })}
        {...rest}
      />
    </s.InputWrapper>
  </s.Wrapper>
);

export { InputText };
