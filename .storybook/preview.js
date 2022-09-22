import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';
import { lightTheme, darkTheme } from '../src/styles/stitches.config';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'background-light',
    values: [
      {
        name: 'background-light',
        value: tokens.colors.lightPalette['primary-01']
      },
      {
        name: 'background-dark',
        value: tokens.colors.darkPalette['primary-01']
      }
    ]
  },
  controls: {
    a11y: { disable: true },
    matchers: { color: /(background|color)$/i, date: /Date$/ },
    expanded: true,
    hideNoControlsWarning: true
  },
  options: { storySort: { method: 'alphabetical' } },
  nextRouter: { Provider: RouterContext.Provider },
  multipleThemesStitches: {
    values: [
      { name: 'light', theme: lightTheme },
      { name: 'dark', theme: darkTheme }
    ]
  }
};
