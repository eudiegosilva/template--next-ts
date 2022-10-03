import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {});

export const LabelWrapper = styled('div', {});

export const Label = styled('label', {
  fontSize: '$font-size-02',
  color: '$primary-09',
  lineHeight: '$font-line-height-200'
});

export const InputWrapper = styled('div', {
  display: 'flex',
  borderRadius: '$border-radius-01',
  padding: '$space-02',
  boxShadow: '$input-normal',
  transition: '$transition-default',
  '&:focus-within': {
    boxShadow: '$input-focus'
  }
});

export const InputText = styled('input', {
  fontFamily: '$font-family-body',
  background: 'transparent',
  fontSize: '$font-size-02',
  border: 'none',
  outline: 'none',
  width: '100%'
});

export const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '$space-01',
  color: '$primary-09',

  variants: {
    iconPosition: {
      left: { order: 0 },
      right: { order: 1 }
    }
  }
});
