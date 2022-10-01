import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  zIndex: '$base',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
});

export const Section = styled('section', {
  maxWidth: '$container-md',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$3x',
  lineHeight: '$133',
  color: '$text-contrast-high',
  fontWeight: '$900'
});

export const Strong = styled('strong', {
  fontWeight: '$900'
});

export const Description = styled('p', {
  fontFamily: '$body',
  fontSize: '$lg',
  lineHeight: '$120',
  color: '$text-contrast-low',
  fontWeight: '$400',
  marginBottom: '$2x'
});

export const CTAWrapper = styled('div', {
  my: '$lg',
  color: '$text-contrast-low'
});
