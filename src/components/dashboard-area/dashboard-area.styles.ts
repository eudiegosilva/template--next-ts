import { styled } from 'styles/stitches.config';

export const Wrapper = styled('div', {
  py: '$space-06',
});

export const AreaWrapper = styled('div', {
  border: '4px dashed',
  borderColor: '$natural-07',
  borderRadius: '$border-radius-01',
  height: '400px',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '$natural-08',
  },
});
