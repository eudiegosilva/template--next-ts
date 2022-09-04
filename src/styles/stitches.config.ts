import { createStitches } from '@stitches/react';

import { defaultTheme } from './themes';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme
} = createStitches({
  theme: { ...defaultTheme.theme },
  utils: { ...defaultTheme.utils },
  media: { ...defaultTheme.media }
});
