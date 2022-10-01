import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  zIndex: '$base',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
});

export const CTAWrapper = styled('div', {
  my: '$lg',
  color: '$text-contrast-low'
});
