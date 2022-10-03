import { styled } from 'styles/stitches.config';

export const Wrapper = styled('form', {
  width: '100%',
  maxWidth: 'min($container-sm, 100% - 2px)'
});

export const ErrorMessageWrapper = styled('div', {
  my: '$space-02',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative'
});

export const ErrorMessage = styled('span', {
  color: '$semantic-danger-11',
  fontSize: '$font-size-02',
  position: 'absolute'
});
