import { styled } from 'styles/stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  zIndex: '$z-indice-base',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
});

export const Form = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  padding: '50px 15px',
  border: '2px solid gray',
  borderRadius: '3px'
});

export const Input = styled('input', {
  padding: '5px',
  border: '1px solid gray',
  borderRadius: '3px',
  marginTop: '15px'
});
