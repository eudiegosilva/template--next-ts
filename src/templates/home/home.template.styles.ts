import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  backgroundColor: '$neutral-black-500',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$md',
  lineHeight: '$120',
  color: '$text-contrast-high',
  fontWeight: '$500',
  letterSpacing: '$heading',

  strong: {
    color: '$brand-primary-300'
  }
});
