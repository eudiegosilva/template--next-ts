import {
  violet,
  crimson,
  gray,
  green,
  mauve,
  red,
  transparencyBlack,
  transparencyWhite,
  yellow
} from './palettes';

const base = {
  'color-base-white-500': '#ffffff',
  'color-base-black-500': '#000000',

  'color-base-gray-050': gray['gray-050'],
  'color-base-gray-100': gray['gray-100'],
  'color-base-gray-200': gray['gray-200'],
  'color-base-gray-300': gray['gray-300'],
  'color-base-gray-400': gray['gray-400'],
  'color-base-gray-500': gray['gray-500'],
  'color-base-gray-600': gray['gray-600'],
  'color-base-gray-700': gray['gray-700'],
  'color-base-gray-800': gray['gray-800'],
  'color-base-gray-900': gray['gray-900']
};

const neutral = {
  'color-neutral-white-500': mauve['mauve-050'],
  'color-neutral-black-500': mauve['mauve-900']
};

const transparent = {
  'color-transparent-white-050': transparencyWhite['white-050'],
  'color-transparent-white-100': transparencyWhite['white-100'],
  'color-transparent-white-200': transparencyWhite['white-200'],
  'color-transparent-white-300': transparencyWhite['white-300'],
  'color-transparent-white-400': transparencyWhite['white-400'],
  'color-transparent-white-500': transparencyWhite['white-500'],
  'color-transparent-white-600': transparencyWhite['white-600'],
  'color-transparent-white-700': transparencyWhite['white-700'],
  'color-transparent-white-800': transparencyWhite['white-800'],
  'color-transparent-white-900': transparencyWhite['white-900'],

  'color-transparent-black-050': transparencyBlack['black-050'],
  'color-transparent-black-100': transparencyBlack['black-100'],
  'color-transparent-black-200': transparencyBlack['black-200'],
  'color-transparent-black-300': transparencyBlack['black-300'],
  'color-transparent-black-400': transparencyBlack['black-400'],
  'color-transparent-black-500': transparencyBlack['black-500'],
  'color-transparent-black-600': transparencyBlack['black-600'],
  'color-transparent-black-700': transparencyBlack['black-700'],
  'color-transparent-black-800': transparencyBlack['black-800'],
  'color-transparent-black-900': transparencyBlack['black-900']
};

const brand = {
  'color-brand-primary-050': violet['violet-050'],
  'color-brand-primary-100': violet['violet-100'],
  'color-brand-primary-200': violet['violet-200'],
  'color-brand-primary-300': violet['violet-300'],
  'color-brand-primary-400': violet['violet-400'],
  'color-brand-primary-500': violet['violet-500'],
  'color-brand-primary-600': violet['violet-600'],
  'color-brand-primary-700': violet['violet-700'],
  'color-brand-primary-800': violet['violet-800'],
  'color-brand-primary-900': violet['violet-900'],

  'color-brand-secondary-050': crimson['crimson-050'],
  'color-brand-secondary-100': crimson['crimson-100'],
  'color-brand-secondary-200': crimson['crimson-200'],
  'color-brand-secondary-300': crimson['crimson-300'],
  'color-brand-secondary-400': crimson['crimson-400'],
  'color-brand-secondary-500': crimson['crimson-500'],
  'color-brand-secondary-600': crimson['crimson-600'],
  'color-brand-secondary-700': crimson['crimson-700'],
  'color-brand-secondary-800': crimson['crimson-800'],
  'color-brand-secondary-900': crimson['crimson-900']
};

const hightlight = {
  'color-highlight-primary-050': crimson['crimson-050'],
  'color-highlight-primary-100': crimson['crimson-100'],
  'color-highlight-primary-200': crimson['crimson-200'],
  'color-highlight-primary-300': crimson['crimson-300'],
  'color-highlight-primary-400': crimson['crimson-400'],
  'color-highlight-primary-500': crimson['crimson-500'],
  'color-highlight-primary-600': crimson['crimson-600'],
  'color-highlight-primary-700': crimson['crimson-700'],
  'color-highlight-primary-800': crimson['crimson-800'],
  'color-highlight-primary-900': crimson['crimson-900'],

  'color-highlight-secondary-050': yellow['yellow-050'],
  'color-highlight-secondary-100': yellow['yellow-100'],
  'color-highlight-secondary-200': yellow['yellow-200'],
  'color-highlight-secondary-300': yellow['yellow-300'],
  'color-highlight-secondary-400': yellow['yellow-400'],
  'color-highlight-secondary-500': yellow['yellow-500'],
  'color-highlight-secondary-600': yellow['yellow-600'],
  'color-highlight-secondary-700': yellow['yellow-700'],
  'color-highlight-secondary-800': yellow['yellow-800'],
  'color-highlight-secondary-900': yellow['yellow-900']
};

const semantic = {
  'color-semantic-success-050': green['green-050'],
  'color-semantic-success-100': green['green-100'],
  'color-semantic-success-200': green['green-200'],
  'color-semantic-success-300': green['green-300'],
  'color-semantic-success-400': green['green-400'],
  'color-semantic-success-500': green['green-500'],
  'color-semantic-success-600': green['green-600'],
  'color-semantic-success-700': green['green-700'],
  'color-semantic-success-800': green['green-800'],
  'color-semantic-success-900': green['green-900'],

  'color-semantic-warning-050': yellow['yellow-050'],
  'color-semantic-warning-100': yellow['yellow-100'],
  'color-semantic-warning-200': yellow['yellow-200'],
  'color-semantic-warning-300': yellow['yellow-300'],
  'color-semantic-warning-400': yellow['yellow-400'],
  'color-semantic-warning-500': yellow['yellow-500'],
  'color-semantic-warning-600': yellow['yellow-600'],
  'color-semantic-warning-700': yellow['yellow-700'],
  'color-semantic-warning-800': yellow['yellow-800'],
  'color-semantic-warning-900': yellow['yellow-900'],

  'color-semantic-danger-050': red['red-050'],
  'color-semantic-danger-100': red['red-100'],
  'color-semantic-danger-200': red['red-200'],
  'color-semantic-danger-300': red['red-300'],
  'color-semantic-danger-400': red['red-400'],
  'color-semantic-danger-500': red['red-500'],
  'color-semantic-danger-600': red['red-600'],
  'color-semantic-danger-700': red['red-700'],
  'color-semantic-danger-800': red['red-800'],
  'color-semantic-danger-900': red['red-900']
};

const text = {
  'color-text-contrast-high': mauve['mauve-050'],
  'color-text-contrast-low': mauve['mauve-100']
};

export { base, brand, hightlight, neutral, semantic, text, transparent };
