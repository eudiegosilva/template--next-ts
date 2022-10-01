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
  fontFamily: '$font-family-heading',
  fontSize: '$font-size-10',
  lineHeight: '$115',
  color: '$text-contrast-high',
  fontWeight: '$font-weight-900'
});

export const Strong = styled('strong', {
  fontWeight: '$font-weight-900'
});

export const Description = styled('p', {
  fontFamily: '$font-family-body',
  fontSize: '$font-size-06',
  lineHeight: '$120',
  color: '$text-contrast-low',
  fontWeight: '$font-weight-400',
  marginBottom: '$space-07'
});

export const CTAWrapper = styled('div', {
  my: '$space-06',
  color: '$text-contrast-low'
});
