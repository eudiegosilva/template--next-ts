import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  zIndex: '$z-indice-base',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  alignItems: 'center',
  textAlign: 'center'
});

export const Section = styled('section', {
  maxWidth: '$container-md',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontFamily: '$font-family-heading',
  fontSize: '$font-size-05',
  lineHeight: '$font-line-height-115',
  color: '$text-contrast-high',
  fontWeight: '$font-weight-900',

  '&::selection': {
    backgroundColor: '$primary-09',
    color: '$text-white'
  },
  '@greater-md': { fontSize: '$font-size-06' }
});

export const Strong = styled('strong', {
  fontWeight: '$font-weight-900',
  '&::selection': {
    backgroundColor: '$primary-09',
    color: '$text-white'
  }
});

export const Description = styled('p', {
  fontFamily: '$font-family-body',
  fontSize: '$font-size-03',
  lineHeight: '$font-line-height-115',
  color: '$text-contrast-low',
  fontWeight: '$font-weight-400',
  marginBottom: '$space-07',
  '&::selection': {
    backgroundColor: '$secondary-09',
    color: '$text-white'
  },

  '@greater-md': { fontSize: '$font-size-04' }
});
