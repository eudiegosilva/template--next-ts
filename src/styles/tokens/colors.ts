import {
  violet,
  cyan,
  crimson,
  mauve,
  violetDark,
  cyanDark,
  crimsonDark,
  mauveDark,
  blackA,
  whiteA
} from '@radix-ui/colors';

export type ColorCategoryTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'natural';

export type PaletteTypes = {
  [key in ColorCategoryTypes]: {
    [key in string]: string;
  };
};

import { ThemeTypes } from 'styles/stitches.config';

const themes: { [key in ThemeTypes]: PaletteTypes } = {
  light: {
    primary: violet,
    secondary: cyan,
    tertiary: crimson,
    natural: mauve
  },
  dark: {
    primary: violetDark,
    secondary: cyanDark,
    tertiary: crimsonDark,
    natural: mauveDark
  }
};

const makePalette = (theme: ThemeTypes) => {
  const palette = themes[theme];

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
    'secondary-01': palette.secondary.cyan1,
    'secondary-02': palette.secondary.cyan2,
    'secondary-03': palette.secondary.cyan3,
    'secondary-04': palette.secondary.cyan4,
    'secondary-05': palette.secondary.cyan5,
    'secondary-06': palette.secondary.cyan6,
    'secondary-07': palette.secondary.cyan7,
    'secondary-08': palette.secondary.cyan8,
    'secondary-09': palette.secondary.cyan9,
    'secondary-10': palette.secondary.cyan10,
    'secondary-11': palette.secondary.cyan11,
    'secondary-12': palette.secondary.cyan12
  };

  const tertiary = {
    'tertiary-01': palette.tertiary.crimson1,
    'tertiary-02': palette.tertiary.crimson2,
    'tertiary-03': palette.tertiary.crimson3,
    'tertiary-04': palette.tertiary.crimson4,
    'tertiary-05': palette.tertiary.crimson5,
    'tertiary-06': palette.tertiary.crimson6,
    'tertiary-07': palette.tertiary.crimson7,
    'tertiary-08': palette.tertiary.crimson8,
    'tertiary-09': palette.tertiary.crimson9,
    'tertiary-10': palette.tertiary.crimson10,
    'tertiary-11': palette.tertiary.crimson11,
    'tertiary-12': palette.tertiary.crimson12
  };

  return {
    ...base,
    ...primary,
    ...secondary,
    ...tertiary,
    ...text
  };
};

export const colors = {
  dark: makePalette('dark'),
  light: makePalette('light')
};
