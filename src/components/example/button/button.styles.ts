import { styled } from 'styles/stitches.config';

export const Button = styled('button', {
  padding: '$spacing-md $spacing-xl',
  fontSize: '$font-size-body-md',
  border: '2px solid',
  transition: '$transition-default',

  '&:hover': {
    cursor: 'pointer'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$color-brand-primary-300',
        borderColor: '$color-brand-primary-300',
        color: '$color-base-white-500',
        '&:hover': {
          backgroundColor: '$color-brand-primary-400',
          borderColor: '$color-brand-primary-400'
        }
      },
      secondary: {
        backgroundColor: '$color-brand-secondary-300',
        color: '$color-base-black-500',
        '&:hover': {
          backgroundColor: '$color-brand-secondary-400',
          borderColor: '$color-brand-secondary-400'
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
