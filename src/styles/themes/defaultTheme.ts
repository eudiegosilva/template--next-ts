import {
  border,
  color,
  font,
  spacing,
  transition,
  util,
  zIndex
} from '../../styles/tokens';

export const defaultTheme = {
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: {
      ...color.base,
      ...color.brand,
      ...color.hightlight,
      ...color.neutral,
      ...color.semantic,
      ...color.text,
      ...color.transparent
    },
    fonts: { ...font.family },
    fontSizes: { ...font.size },
    fontWeights: { ...font.weight },
    letterSpacings: { ...font.letterSpacing },
    lineHeights: { ...font.lineHeight },
    radii: { ...border.radius },
    shadows: {},
    sizes: {},
    space: { ...spacing },
    transitions: { ...transition },
    zIndices: { ...zIndex }
  },
  utils: { ...util },
  media: {}
};
