import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});

export const LabelWrapper = styled('span', {});

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
  width: '100%',
  minHeight: 35,
  '&:focus-within': {
    boxShadow: '$input-focus'
  }
});

export const InputText = styled('input', {
  fontFamily: '$font-family-body',
  background: 'transparent',
  fontSize: '$font-size-03',
  border: 'none',
  outline: 'none',
  width: '100%',
  color: '$primary-09',
  fontWeight: '500'
});

export const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '$space-02',
  color: '$primary-09',

  variants: {
    iconPosition: {
      left: { order: 0 },
      right: { order: 1 }
    }
  }
});
