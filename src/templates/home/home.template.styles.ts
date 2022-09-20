import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  backgroundColor: '$primary-01',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$md',
  lineHeight: '$100',
  color: '$text-contrast-high',
  fontWeight: '$500',
  marginBottom: '$lg',

  strong: {
    color: '$primary-09'
  }
});
