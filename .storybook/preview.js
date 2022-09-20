import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // backgrounds: {
  //   default: 'primary-03',
  //   values: [
  //     {
  //       name: 'primary-03',
  //       value: tokens.colors.lightPalette['primary-03']
  //     }
  //   ]
  // },
  controls: {
    a11y: { disable: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true,
    hideNoControlsWarning: true
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
};
