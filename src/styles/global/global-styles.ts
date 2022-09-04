import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  '*::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  '*::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    height: '100vh',
    fontFamily: '$font-family-epilogue'
  }
});
