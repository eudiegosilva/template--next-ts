import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import {
  colors,
  fonts,
  borders,
  sizes,
  spacings,
  transitions,
  zIndices,
  utils,
  medias
} from './tokens';

export type StichesConfigProps = Stitches.CSS<typeof config>;
export type ColorTokensTypes = `$${keyof typeof colors.lightPalette}`;

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: { ...colors.lightPalette },
    fonts: { ...fonts.families },
    fontSizes: { ...fonts.sizes },
    fontWeights: { ...fonts.weights },
    letterSpacings: { ...fonts.letterSpacings },
    lineHeights: { ...fonts.lineHeights },
    radii: { ...borders.radius },
    shadows: {},
    sizes: { ...sizes },
    space: { ...spacings },
    transitions: { ...transitions },
    zIndices: { ...zIndices }
  },
  utils: { ...utils },
  media: { ...medias }
});

export const darkTheme = createTheme({ colors: colors.darkPalette });
export const lightTheme = createTheme({ colors: colors.lightPalette });
