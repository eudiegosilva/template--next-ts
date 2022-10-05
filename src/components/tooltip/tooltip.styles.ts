import * as RadixTooltip from '@radix-ui/react-tooltip';

import { styled, keyframes } from 'styles/stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Provider = styled(RadixTooltip.Provider, {});
export const Root = styled(RadixTooltip.Root, {});
export const Trigger = styled(RadixTooltip.Trigger, {});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 14,
  width: 14,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary-09',
  backgroundColor: 'transparent',
  '&:hover': { backgroundColor: '$primary-03', cursor: 'pointer' },
  '&:focus': { boxShadow: '$button-focus' },
});

export const Content = styled(RadixTooltip.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: '$font-size-02',
  lineHeight: '$font-line-height-100',
  color: '$primary-11',
  backgroundColor: '$primary-03',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});
