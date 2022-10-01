import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled, StichesConfigProps, keyframes } from 'styles/stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const contentStyles: StichesConfigProps = {
  minWidth: 220,
  backgroundColor: '$primary-01',
  border: '1px solid $primary-07',
  borderRadius: '$border-radius-02',
  padding: '$space-02',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
};

const itemStyles: StichesConfigProps = {
  all: 'unset',
  fontSize: '$sm',
  lineHeight: '$100',
  color: '$primary-09',
  borderRadius: '$border-radius-01',
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: '$space-06',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$natural-11',
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: '$primary-09',
    color: '$white-12'
  }
};

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center'
});

export const DropdownMenu = styled(RadixDropdownMenu.Root, {});

export const Trigger = styled(RadixDropdownMenu.Trigger, {});

export const Content = styled(RadixDropdownMenu.Content, {
  ...contentStyles
});

export const Item = styled(RadixDropdownMenu.Item, {
  ...itemStyles
});

export const ItemIndicator = styled(RadixDropdownMenu.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const CheckboxItem = styled(RadixDropdownMenu.CheckboxItem, {
  ...itemStyles
});

export const RadioGroup = styled(RadixDropdownMenu.RadioGroup, {});

export const RadioItem = styled(RadixDropdownMenu.RadioItem, {
  ...itemStyles
});

export const Label = styled(RadixDropdownMenu.Label, {
  paddingLeft: '$space-06',
  fontSize: '$ss',
  lineHeight: '$200',
  textTransform: 'uppercase',
  color: '$natural-11',
  letterSpacing: '$body-medium'
});

export const Separator = styled(RadixDropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$primary-06',
  margin: '$space-02'
});

export const Sub = styled(RadixDropdownMenu.Sub, {});

export const SubTrigger = styled(RadixDropdownMenu.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: '$primary-04',
    color: '$text-contrast-high'
  },
  ...itemStyles
});

export const SubContent = styled(RadixDropdownMenu.SubContent, {
  ...contentStyles
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '$border-radius-circular',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary-11',
  backgroundColor: '$primary-01',
  border: '1px solid $primary-07',
  boxShadow: '$button-normal',
  '&:hover': { backgroundColor: '$primary-03', cursor: 'pointer' },
  '&:focus': { boxShadow: '$button-focus' }
});

export const Arrow = styled(RadixDropdownMenu.Arrow, {
  fill: '$primary-07'
});

export const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: '$space-05',
  color: '$natural-11',
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: '$natural-11' }
});
