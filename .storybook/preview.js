import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'color-neutral-white-500',
    values: [
      {
        name: 'color-neutral-white-500',
        value: tokens.color.neutral['color-neutral-white-500']
      },
      {
        name: '$color-neutral-black-500',
        value: tokens.color.neutral['color-neutral-black-500']
      }
    ]
  },
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
