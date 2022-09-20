import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
