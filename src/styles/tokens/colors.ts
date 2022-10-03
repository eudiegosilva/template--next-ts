import {
  blackA,
  mauve,
  mauveDark,
  pink,
  pinkDark,
  violet,
  violetDark,
  whiteA,
  red,
  redDark
} from '@radix-ui/colors';

export type ColorCategoryTypes = 'primary' | 'secondary' | 'natural' | 'danger';

export type PaletteTypes = {
  [key in ColorCategoryTypes]: {
    [key in string]: string;
  };
};

import { ThemeTypes } from 'styles/stitches.config';

const themes: { [key in ThemeTypes]: PaletteTypes } = {
  light: {
    primary: violet,
    secondary: pink,
    natural: mauve,
    danger: red
  },
  dark: {
    primary: violetDark,
    secondary: pinkDark,
    natural: mauveDark,
    danger: redDark
  }
};

const makePalette = (theme: ThemeTypes) => {
  const palette = themes[theme];

  const primary = {
    'primary-01': palette.primary.violet1,
    'primary-02': palette.primary.violet2,
    'primary-03': palette.primary.violet3,
    'primary-04': palette.primary.violet4,
    'primary-05': palette.primary.violet5,
    'primary-06': palette.primary.violet6,
    'primary-07': palette.primary.violet7,
    'primary-08': palette.primary.violet8,
    'primary-09': palette.primary.violet9,
    'primary-10': palette.primary.violet10,
    'primary-11': palette.primary.violet11,
    'primary-12': palette.primary.violet12
  };

  const secondary = {
    'secondary-01': palette.secondary.pink1,
    'secondary-02': palette.secondary.pink2,
    'secondary-03': palette.secondary.pink3,
    'secondary-04': palette.secondary.pink4,
    'secondary-05': palette.secondary.pink5,
    'secondary-06': palette.secondary.pink6,
    'secondary-07': palette.secondary.pink7,
    'secondary-08': palette.secondary.pink8,
    'secondary-09': palette.secondary.pink9,
    'secondary-10': palette.secondary.pink10,
    'secondary-11': palette.secondary.pink11,
    'secondary-12': palette.secondary.pink12
  };

  const base = {
    'black-01': blackA.blackA1,
    'black-02': blackA.blackA2,
    'black-03': blackA.blackA3,
    'black-04': blackA.blackA4,
    'black-05': blackA.blackA5,
    'black-06': blackA.blackA6,
    'black-07': blackA.blackA7,
    'black-08': blackA.blackA8,
    'black-09': blackA.blackA9,
    'black-10': blackA.blackA10,
    'black-11': blackA.blackA11,
    'black-12': blackA.blackA12,

    'white-01': whiteA.whiteA1,
    'white-02': whiteA.whiteA2,
    'white-03': whiteA.whiteA3,
    'white-04': whiteA.whiteA4,
    'white-05': whiteA.whiteA5,
    'white-06': whiteA.whiteA6,
    'white-07': whiteA.whiteA7,
    'white-08': whiteA.whiteA8,
    'white-09': whiteA.whiteA9,
    'white-10': whiteA.whiteA10,
    'white-11': whiteA.whiteA11,
    'white-12': whiteA.whiteA12
  };

  const text = {
    'text-contrast-high': palette.natural.mauve12,
    'text-contrast-low': palette.natural.mauve11,
    'text-black': blackA.blackA12,
    'text-white': whiteA.whiteA12
  };

  const natural = {
    'natural-01': palette.natural.mauve1,
    'natural-02': palette.natural.mauve2,
    'natural-03': palette.natural.mauve3,
    'natural-04': palette.natural.mauve4,
    'natural-05': palette.natural.mauve5,
    'natural-06': palette.natural.mauve6,
    'natural-07': palette.natural.mauve7,
    'natural-08': palette.natural.mauve8,
    'natural-09': palette.natural.mauve9,
    'natural-10': palette.natural.mauve10,
    'natural-11': palette.natural.mauve11,
    'natural-12': palette.natural.mauve12
  };

  const semantic = {
    'semantic-danger-01': palette.danger.red1,
    'semantic-danger-02': palette.danger.red2,
    'semantic-danger-03': palette.danger.red3,
    'semantic-danger-04': palette.danger.red4,
    'semantic-danger-05': palette.danger.red5,
    'semantic-danger-06': palette.danger.red6,
    'semantic-danger-07': palette.danger.red7,
    'semantic-danger-08': palette.danger.red8,
    'semantic-danger-09': palette.danger.red9,
    'semantic-danger-10': palette.danger.red10,
    'semantic-danger-11': palette.danger.red11,
    'semantic-danger-12': palette.danger.red12
  };

  return {
    ...base,
    ...natural,
    ...primary,
    ...secondary,
    ...text,
    ...semantic
  };
};

export const colors = {
  dark: makePalette('dark'),
  light: makePalette('light')
};
