import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  width: '100%',
  mx: 'auto',
  '@less-sm': { maxWidth: '$container-sm', px: '$space-02' },
  '@greater-sm': { maxWidth: '$container-md', px: '$space-03' },
  '@greater-md': { maxWidth: '$container-lg', px: '$space-04' },
  '@greater-lg': { maxWidth: '$container-xl', px: '$space-05' },
  '@greater-xl': { minWidth: '$container-xl', px: '$space-06' }
});
