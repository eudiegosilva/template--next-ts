import { colors } from './colors';

const shadows = {
  dark: {
    'button-normal': `0 0 0 1px ${colors.dark['primary-07']}`,
    'button-focus': `0 0 0 1px ${colors.dark['primary-09']}`,
    'input-normal': `0 0 0 1px ${colors.dark['primary-07']}`,
    'input-focus': `0 0 0 1px ${colors.dark['primary-08']}`
  },
  light: {
    'button-normal': `0 0 0 1px ${colors.light['primary-07']}`,
    'button-focus': `0 0 0 1px ${colors.light['primary-09']}`,
    'input-normal': `0 0 0 1px ${colors.light['primary-07']}`,
    'input-focus': `0 0 0 1px ${colors.light['primary-08']}`
  }
};

export { shadows };
