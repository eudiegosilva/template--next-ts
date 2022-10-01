import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: '$behind',
  background:
    'radial-gradient(circle at 15% 50%, $primary-03, rgba(255, 255, 255, 0) 20%),radial-gradient(circle at 80% 20%, $quaternary-03, rgba(255, 255, 255, 0) 20%)'
});
