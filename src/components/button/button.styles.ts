import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  fontFamily: '$body',
  fontSize: '$md',
  fontWeight: '$500',
  border: '1px solid',
  borderRadius: '$xs',
  padding: '$sm $lg',

  '&:hover': {
    cursor: 'pointer'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary-03',
        borderColor: '$primary-07',
        color: '$primary-09',
        '&:hover': {
          backgroundColor: '$primary-04',
          borderColor: '$primary-08',
          color: '$primary-09'
        }
      },
      secondary: {
        backgroundColor: '$primary-09',
        borderColor: '$primary-09',
        color: '$white-12',
        '&:hover': {
          backgroundColor: '$primary-10',
          borderColor: '$primary-10',
          color: '$white-12'
        }
      }
    },
    isFullWidth: {
      true: {
        width: '100%'
      }
    }
  }
});
