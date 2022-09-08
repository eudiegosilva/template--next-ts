import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  padding: '$sm $md',
  fontFamily: '$body',
  fontSize: '$md',
  border: '1px solid',
  fontWeight: '$300',
  transition: '$default',
  '&:hover': {
    cursor: 'pointer'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand-primary-300',
        color: '$base-white-500',
        borderColor: '$brand-primary-300',
        '&:hover': {
          backgroundColor: '$brand-primary-400',
          borderColor: '$brand-primary-400'
        }
      },
      secondary: {
        backgroundColor: '$brand-secondary-300',
        color: '$base-white-500',
        borderColor: '$brand-secondary-300',
        '&:hover': {
          backgroundColor: '$brand-secondary-400',
          borderColor: '$brand-secondary-400'
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
