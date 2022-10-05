import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  fontFamily: '$font-family-body',
  fontSize: '$font-size-03',
  fontWeight: '$font-weight-500',
  border: '1px solid',
  borderRadius: '$border-radius-01',
  padding: '$space-02 $space-04',

  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary-03',
        borderColor: '$primary-03',
        color: '$primary-11',
        '&:hover': {
          backgroundColor: '$primary-04',
          borderColor: '$primary-04',
          color: '$primary-11',
        },
      },
      secondary: {
        backgroundColor: '$primary-09',
        borderColor: '$primary-09',
        color: '$white-12',
        '&:hover': {
          backgroundColor: '$primary-10',
          borderColor: '$primary-10',
          color: '$white-12',
        },
      },
    },
    isFullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
