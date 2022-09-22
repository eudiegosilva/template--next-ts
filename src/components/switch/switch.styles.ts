import * as RadixSwitch from '@radix-ui/react-switch';

import { styled } from 'styles/stitches.config';

export const Switch = styled(RadixSwitch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$transparent-background',
  borderRadius: '$circular',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': { backgroundColor: '$primary-09' },
  display: 'flex',
  alignItems: 'center'
});

export const SwitchThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  width: 19,
  height: 19,
  marginLeft: '1px',
  backgroundColor: '$white-12',
  borderRadius: '$circular',
  transition: '$default',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' }
});

export const Form = styled('form', {});

export const Label = styled('label', {
  color: '$text-contrast-low',
  fontSize: '$sm',
  lineHeight: '$100',
  userSelect: 'none',
  paddingRight: '$md'
});
